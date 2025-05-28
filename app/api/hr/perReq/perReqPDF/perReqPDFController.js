import { NextResponse } from "next/server";
import { PerReqService } from "@/app/api/hr/perReq/perReqPDF/perReqPDFService";
import { validateRequest } from "@/lib/validateRequest";
import { handleGetErrors } from "@/lib/errorHandler";
import puppeteer from "puppeteer";
import fs from "fs";
import path from "path";

/* ───────────── helper ───────────── */
const safeImg = (rel) => {
  try {
    return fs
      .readFileSync(path.join(process.cwd(), "public", rel))
      .toString("base64");
  } catch {
    return "";
  }
};
const cb = (c) => (c ? "☑" : "☐");
const mapSexTH = { Male: "ชาย", FeMale: "หญิง", Other: "ไม่ระบุ" };
const mapLangLevel = { Basic: "พอใช้", Good: "ดี", Excellent: "ดีมาก" };

/* ───────────── controller ───────────── */
export class PerReqPDFController {
  static async getPerReqPdf(request, perReqId) {
    let ip = "";
    try {
      ip = await validateRequest(request);
      const id = Number(perReqId);
      if (Number.isNaN(id))
        return NextResponse.json(
          { error: "PerReq ID ต้องเป็นตัวเลข" },
          { status: 400 }
        );

      /* ── load DB ── */
      const perReq = await PerReqService.getPerReqById(id, {
        include: {
          PerReqCreateBy: {
            include: {
              empEmpEmployment: {
                include: {
                  EmpEmploymentRoleId: true,
                  EmpEmploymentDivisionId: true,
                },
              },
            },
          },
          PerReqManagerApproveBy: {
            include: {
              empEmpEmployment: {
                include: {
                  EmpEmploymentRoleId: true,
                  EmpEmploymentDivisionId: true,
                },
              },
            },
          },
          PerReqHrApproveBy: {
            include: {
              empEmpEmployment: {
                include: {
                  EmpEmploymentRoleId: true,
                  EmpEmploymentDivisionId: true,
                },
              },
            },
          },
          PerReqPositionId: {
            include: { PositionDivisionId: true, PositionDepartmentId: true },
          },
        },
      });
      if (!perReq)
        return NextResponse.json(
          { error: "ไม่พบข้อมูล PerReq" },
          { status: 404 }
        );

      /* ── common data ── */
      const pos = perReq.PerReqPositionId ?? {};
      const div = pos.PositionDivisionId ?? {};
      const dept = pos.PositionDepartmentId ?? {};
      const divisionName = div.divisionName ?? "-";
      const departmentName = dept.departmentName ?? "-";
      const positionNameTH = pos.positionNameTH ?? "-";

      const logo64 = safeImg("logoCompany/com-1.png");
      const font64 = safeImg("fonts/THSarabunNew.ttf");

      /* signature helper */
      const sigBlock = (title, empObj, sig64, dateRaw, isRequester = false) => {
        const name = empObj
          ? `(${empObj.empFirstNameTH} ${empObj.empLastNameTH})`
          : isRequester
          ? "ผู้ร้องขอ"
          : "(รออนุมัติ)";
        const dateTH = dateRaw
          ? new Date(dateRaw).toLocaleDateString("th-TH", {
              year: "numeric",
              month: "long",
              day: "numeric",
            })
          : isRequester
          ? "ผู้ร้องขอ"
          : "(รออนุมัติ)";
        const role =
          empObj?.empEmpEmployment?.[0]?.EmpEmploymentRoleId?.roleName ??
          (isRequester ? "ผู้ร้องขอ" : "(รออนุมัติ)");
        const divName =
          empObj?.empEmpEmployment?.[0]?.EmpEmploymentDivisionId
            ?.divisionName ?? (isRequester ? "ผู้ร้องขอ" : "(รออนุมัติ)");
        return `
          <div class="flex flex-col items-center w-full xl:w-1/3 p-2 gap-1 border-2 border-gray-300 rounded-xl">
            <div class="font-bold">${title}</div>
            <div class="h-24 flex items-center justify-center w-full">
              ${
                sig64
                  ? `<img src="data:image/png;base64,${sig64}" class="h-20" />`
                  : isRequester
                  ? "ผู้ร้องขอ"
                  : "(รออนุมัติ)"
              }
            </div>
            <div>ลงชื่อ : ${name}</div>
            <div>วันที่ : ${dateTH}</div>
            <div class="font-bold">${role} ${divName}</div>
          </div>`;
      };

      /* convert arrays */
      const compSkills = perReq.perReqComputerSkills ?? [];
      const langSkills = perReq.perReqLanguageSkills ?? [];
      const drvLic = perReq.perReqDrivingLicenses ?? [];
      const profLic = perReq.perReqProfessionalLicenses ?? [];

      /* ───────────── HTML ───────────── */
      const html = /*html*/ `
<!DOCTYPE html><html lang="th"><head><meta charset="utf-8">
<link href="https://cdn.jsdelivr.net/npm/tailwindcss@2.2.19/dist/tailwind.min.css" rel="stylesheet"/>
<style>
 @font-face{font-family:'THSarabun';src:url(data:font/ttf;base64,${font64}) format('truetype');}
 body{font-family:'THSarabun',sans-serif;font-size:18px;margin:0;padding:8px}
 .bg-def{background:#eff2f0}
</style></head><body class="flex flex-col gap-2">

<!-- header -->
<div class="flex border-b-2 border-gray-300">
  <div class="w-1/4 flex flex-col items-center p-2 gap-1 border-r-2 border-gray-300">
    <img src="data:image/png;base64,${logo64}" class="w-24"/>
    <span class="font-bold">CHANNAKORN</span>
  </div>
  <div class="flex-1 flex flex-col items-center justify-center p-2 gap-1">
    <span class="text-3xl font-bold">ใบขออนุมัติอัตรากำลังคน</span>
    <span class="text-xl font-bold">(Personnel Request)</span>
  </div>
</div>

<!-- dates & basic info -->
<div class="grid grid-cols-1 xl:grid-cols-2 gap-2">
  <div class="flex"><span class="w-1/3 font-bold">วันที่ร้องขอ</span><span class="flex-1 border-b">${new Date().toLocaleDateString(
    "th-TH",
    { year: "numeric", month: "long", day: "numeric" }
  )}</span></div>
  <div class="flex"><span class="w-1/3 font-bold">วันที่ต้องการ</span><span class="flex-1 border-b">${
    perReq.perReqDesiredDate ?? "-"
  }</span></div>
  <div class="flex"><span class="w-1/3 font-bold">ฝ่าย</span><span class="flex-1 border-b">${divisionName}</span></div>
  <div class="flex"><span class="w-1/3 font-bold">แผนก</span><span class="flex-1 border-b">${departmentName}</span></div>
  <div class="flex"><span class="w-1/3 font-bold">ตำแหน่ง</span><span class="flex-1 border-b">${positionNameTH}</span></div>
  <div class="flex"><span class="w-1/3 font-bold">จำนวน</span><span class="flex-1 border-b">${
    perReq.perReqAmount ?? "-"
  } คน</span></div>
</div>

<!-- employment type -->
<div class="flex items-start gap-4">
  <span class="w-1/3 font-bold">ประเภทการจ้างงาน</span>
  <div class="flex flex-col gap-1">
    <span>${cb(perReq.perReqEmpEmploymentType === "Monthly")} รายเดือน</span>
    <span>${cb(perReq.perReqEmpEmploymentType === "Daily")} รายวัน</span>
    <span>${cb(
      perReq.perReqEmpEmploymentType === "Contract"
    )} ชั่วคราว/สัญญาจ้าง ${
        perReq.perReqEmpEmploymentTypeNote
          ? `(${perReq.perReqEmpEmploymentTypeNote} วัน)`
          : ""
      }</span>
  </div>
</div>

<!-- reason -->
<div class="flex items-start gap-4">
  <span class="w-1/3 font-bold">เหตุผลในการขอรับ</span>
  <div class="flex flex-col gap-1">
    <span>${cb(
      perReq.perReqReasonForRequest === "New"
    )} เพิ่มอัตรากำลังพล</span>
    <span>${cb(perReq.perReqReasonForRequest === "Replace")} ทดแทน ${
        perReq.perReqReasonForRequestNote ?? ""
      }</span>
  </div>
</div>

<!-- qualification header -->
<div class="bg-def text-center font-bold py-1 rounded">คุณสมบัติทั่วไป</div>

<!-- age & sex -->
<div class="grid grid-cols-1 xl:grid-cols-2 gap-2">
  <div class="flex"><span class="w-1/3 font-bold">อายุ</span><span class="flex-1 border-b">${
    perReq.perReqReasonAge ?? "-"
  }</span></div>
  <div class="flex"><span class="w-1/3 font-bold">เพศ</span><span class="flex-1 border-b">${
    mapSexTH[perReq.perReqReasonGender] ?? "-"
  }</span></div>
</div>

<!-- education -->
<div class="flex items-start gap-4">
  <span class="w-1/3 font-bold">การศึกษา</span>
  <div class="flex flex-col gap-1">
    ${[
      ["PrimaryEducation", "ประถมศึกษา"],
      ["SecondaryEducation", "มัธยมศึกษา"],
      ["VocationalCertificate", "ปวช."],
      ["HighVocationalCertificate", "ปวส."],
      ["BachelorMasterDegree", "ปริญญาตรี / โท"],
    ]
      .map(
        ([v, l]) =>
          `<span>${cb(perReq.perReqReasonEducation === v)} ${l}</span>`
      )
      .join("")}
    ${
      perReq.perReqReasonEducationNote
        ? `<span class="pl-6">สาขา ${perReq.perReqReasonEducationNote}</span>`
        : ""
    }
  </div>
</div>

<!-- experience -->
<div class="flex items-start gap-4">
  <span class="w-1/3 font-bold">ประสบการณ์</span>
  <div class="flex flex-col gap-1">
    ${[
      ["NoneExperience", "ไม่มีประสบการณ์"],
      ["Experience1To4Years", "1-4 ปี"],
      ["Experience5YearsUp", "5 ปีขึ้นไป"],
    ]
      .map(
        ([v, l]) =>
          `<span>${cb(perReq.perReqReasonExperience === v)} ${l}</span>`
      )
      .join("")}
  </div>
</div>

<!-- computer skill -->
<div class="flex items-start gap-4">
  <span class="w-1/3 font-bold">ความสามารถด้านคอมพิวเตอร์</span>
  <div class="flex flex-wrap gap-2">
    ${[
      "MicrosoftOffice",
      "MicrosoftProject",
      "Revit",
      "Autocad",
      "Sketchup",
      "Solidwork",
      "Canva",
      "Adobe",
      "BPluse",
      "Other",
    ]
      .map(
        (s) =>
          `<span>${cb(compSkills.includes(s))} ${
            s === "BPluse" ? "B-Pluse" : s
          }</span>`
      )
      .join("")}
    ${
      perReq.perReqComputerSkillIsOther
        ? `<span class="pl-6">อื่นๆ : ${perReq.perReqComputerSkillIsOther}</span>`
        : ""
    }
  </div>
</div>

<!-- language -->
<div class="flex items-start gap-4">
  <span class="w-1/3 font-bold">ความสามารถทางภาษา</span>
  <div class="flex flex-col gap-1">
    ${["Thai", "English", "Chinese", "Japanese"]
      .map((lang) => {
        const obj = langSkills.find((l) => l.language === lang);
        return `<span>${lang} : ${obj ? mapLangLevel[obj.level] : "-"}</span>`;
      })
      .join("")}
  </div>
</div>

<!-- driving licence -->
<div class="flex items-start gap-4">
  <span class="w-1/3 font-bold">ใบอนุญาตขับขี่</span>
  <div class="flex flex-wrap gap-2">
    ${["บ.1", "บ.2", "บ.3", "บ.4", "ท.1", "ท.2", "ท.3", "ท.4"]
      .map((lic) => `<span>${cb(drvLic.includes(lic))} ${lic}</span>`)
      .join("")}
  </div>
</div>

<!-- professional licence -->
<div class="flex items-start gap-4">
  <span class="w-1/3 font-bold">ใบอนุญาตประกอบวิชาชีพ</span>
  <div class="flex flex-col gap-1">
    ${["กว", "กส"]
      .map((n) => {
        const found = profLic.find((p) => p.name === n);
        return `<span>${cb(!!found)} ${n} ${found?.level ?? ""}</span>`;
      })
      .join("")}
  </div>
</div>

<!-- signatures -->
<div class="grid grid-cols-1 xl:grid-cols-3 gap-4 mt-4">
  ${sigBlock(
    "ผู้ร้องขอ",
    perReq.PerReqCreateBy,
    safeImg(
      perReq.PerReqCreateBy?.empEmpEmployment?.[0]?.empEmploymentSignature ?? ""
    ),
    perReq.perReqCreateAt,
    true
  )}
  ${sigBlock(
    "ผู้อนุมัติ",
    perReq.PerReqManagerApproveBy,
    safeImg(
      perReq.PerReqManagerApproveBy?.empEmpEmployment?.[0]
        ?.empEmploymentSignature ?? ""
    ),
    perReq.perReqReasonManagerApproveAt
  )}
  ${sigBlock(
    "ผู้รับทราบ",
    perReq.PerReqHrApproveBy,
    safeImg(
      perReq.PerReqHrApproveBy?.empEmpEmployment?.[0]?.empEmploymentSignature ??
        ""
    ),
    perReq.perReqReasonHrApproveAt
  )}
</div>

</body></html>`;

      /* ───────────── puppeteer ───────────── */
      const browser = await puppeteer.launch({ args: ["--no-sandbox"] });
      const page = await browser.newPage();
      await page.setContent(html, { waitUntil: "networkidle0" });

      const buffer = await page.pdf({
        format: "A4",
        margin: { top: "20px", bottom: "50px", left: "20px", right: "20px" },
        printBackground: true,
        displayHeaderFooter: true,
        headerTemplate: "<span></span>",
        footerTemplate: `<div style="font-family:'THSarabun';font-size:10px;width:100%;padding:6px 16px;display:flex;justify-content:flex-end;">FM07-WP-HR1-01 / Rev.00 / 25-01-65</div>`,
      });
      await browser.close();

      return new NextResponse(buffer, {
        status: 200,
        headers: {
          "Content-Type": "application/pdf",
          "Content-Disposition": `attachment; filename="perReq_${id}.pdf"`,
        },
      });
    } catch (err) {
      return handleGetErrors(err, ip, "เกิดข้อผิดพลาดระหว่างสร้าง PerReq PDF");
    }
  }
}
