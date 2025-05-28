import { NextResponse } from "next/server";
import { PerReqService } from "@/app/api/hr/perReq/perReqPDF/perReqPDFService";
import { validateRequest } from "@/lib/validateRequest";
import { handleGetErrors } from "@/lib/errorHandler";
import puppeteer from "puppeteer";
import fs from "fs";
import path from "path";

export class PerReqPDFController {
  static cb = (on) => (on ? "☑" : "☐");

  static readBase64 = (p) => {
    try {
      return fs.readFileSync(p).toString("base64");
    } catch {
      return "";
    }
  };

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

      const perReq = await PerReqService.getPerReqById(id);
      if (!perReq)
        return NextResponse.json(
          { error: "ไม่พบข้อมูล PerReq" },
          { status: 404 }
        );

      const fTH = (d) =>
        d
          ? new Date(d).toLocaleDateString("th-TH", {
              year: "numeric",
              month: "long",
              day: "numeric",
            })
          : "-";

      const img64 = (file) =>
        file
          ? `data:image/png;base64,${this.readBase64(
              path.join(
                process.cwd(),
                "public",
                "empEmployment",
                "signature",
                file
              )
            )}`
          : "";

      const mapSex = {
        Male: "ชาย",
        FeMale: "หญิง",
        Other: "ไม่ระบุ",
        "Male/FeMale": "ชาย/หญิง",
      };
      const empType = {
        Monthly: "รายเดือน",
        Daily: "รายวัน",
        Contract: "ชั่วคราว/สัญญาจ้าง",
      };

      const defaultSkills = [
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
      ];

      const extraSkills = [
        ...new Set(
          (perReq.perReqComputerSkills || []).filter(
            (s) => !defaultSkills.includes(s) && s !== "Other"
          )
        ),
      ];

      const logoBase64 = this.readBase64(
        path.join(process.cwd(), "public", "logoCompany", "com-1.png")
      );
      const fontBase64 = this.readBase64(
        path.join(process.cwd(), "public", "fonts", "THSarabunNew.ttf")
      );

      const html = `
<!DOCTYPE html>
<html lang="th">

<head>
    <meta charset="UTF-8" />
    <link href="https://cdn.jsdelivr.net/npm/tailwindcss@2.2.19/dist/tailwind.min.css" rel="stylesheet" />
    <style>
        @font-face {
            font-family: 'THSarabun';
            src: url(data:font/truetype;charset=utf-8;base64,${fontBase64}) format('truetype');
        }

        body {
            font-family: 'THSarabun', sans-serif;
            font-size: 18px;
            margin: 0
        }

        .border-default {
            border-color: #d1d5db
        }

        .cb {
            font-size: 20px;
            line-height: 1
        }
    </style>
</head>

<body class="flex flex-col items- justify-between w-full gap-2">

    <!-- HEADER -->
    <div class="flex flex-row items-center w-full border-b border-default">
        <div class="flex flex-col items-center w-3/12 p-1 gap-2">
            <img src="data:image/png;base64,${logoBase64}" class="w-20" />
            <span class="hidden xl:block font-semibold">CHANNAKORN</span>
        </div>
        <div class="flex flex-col items-center w-9/12 p-1 gap-2">
            <span class="text-3xl font-semibold">ใบขออนุมัติอัตรากำลังคน</span>
            <span class="text-xl font-semibold">(Personnel Request)</span>
        </div>
    </div>

    <!-- ROW 1 : DATES -->
    <div class="flex flex-row w-full">
        ${[
          { label: "วันที่ร้องขอ", val: fTH(perReq.perReqCreateAt) },
          { label: "วันที่ต้องการ", val: fTH(perReq.perReqDesiredDate) },
        ]
          .map(
            ({ label, val }) => `
        <div class="flex flex-row w-full border-b border-default">
            <div class="flex items-center w-3/12 p-1 font-semibold">${label}</div>
            <div class="flex items-center w-9/12 p-1 border-b border-default">${val}</div>
        </div>`
          )
          .join("")}
    </div>

    <!-- ROW 2 : DIV / DEPT / POS / AMOUNT -->
    <div class="flex flex-row w-full">
        ${[
          { label: "ฝ่าย", val: perReq.PerReqDivisionId?.divisionName },
          { label: "แผนก", val: perReq.PerReqDepartmentId?.departmentName },
          { label: "ตำแหน่ง", val: perReq.PerReqPositionId?.positionNameTH },
          {
            label: "จำนวน",
            val: perReq.perReqAmount ? perReq.perReqAmount + " คน" : "-",
          },
        ]
          .map(
            ({ label, val }) => `
        <div class="flex flex-row w-full border-b border-default">
            <div class="flex items-center w-3/12 p-1 font-semibold">${label}</div>
            <div class="flex items-center w-9/12 p-1 border-b border-default">${
              val || "-"
            }</div>
        </div>`
          )
          .join("")}
    </div>

    <!-- EMPLOYMENT TYPE -->
    <div class="flex flex-row w-full border-b border-default">
        <div class="flex items-center w-3/12 p-1 font-semibold">ประเภทการจ้างงาน</div>
        <div class="flex flex-wrap items-center w-9/12 p-1 gap-2">
            ${Object.entries(empType)
              .map(
                ([k, l]) =>
                  `<span class="cb">${this.cb(
                    perReq.perReqEmpEmploymentType === k
                  )}</span> ${l}`
              )
              .join("")}
            ${
              perReq.perReqEmpEmploymentType === "Contract"
                ? `<span>( ${
                    perReq.perReqEmpEmploymentTypeNote || "-"
                  } วัน )</span>`
                : ""
            }
        </div>
    </div>

    <!-- REASON -->
    <div class="flex flex-row w-full border-b border-default">
        <div class="flex items-center w-3/12 p-1 font-semibold">เหตุผลในการขอรับ</div>
        <div class="flex flex-wrap items-center w-9/12 p-1 gap-2">
            ${[
              { k: "New", l: "เพิ่มอัตรากำลังพล" },
              { k: "Replace", l: "ทดแทน" },
            ]
              .map(
                ({ k, l }) =>
                  `<span class="cb">${this.cb(
                    perReq.perReqReasonForRequest === k
                  )}</span> ${l}`
              )
              .join("")}
            ${
              perReq.perReqReasonForRequest === "Replace"
                ? `<span>ชื่อ : ${
                    perReq.perReqReasonForRequestNote || "-"
                  }</span>`
                : ""
            }
        </div>
    </div>

    <!-- SECTION TITLE -->
    <div class="w-full p-1 bg-gray-100 border-t border-b border-default font-semibold text-center">
        คุณสมบัติทั่วไป
    </div>

    <!-- AGE / SEX -->
    <div class="flex flex-row w-full">
        ${[
          { label: "อายุ", val: perReq.perReqReasonAge },
          { label: "เพศ", val: mapSex[perReq.perReqReasonGender] || "-" },
        ]
          .map(
            ({ label, val }) => `
        <div class="flex flex-row w-full border-b border-default">
            <div class="flex items-center w-3/12 p-1 font-semibold">${label}</div>
            <div class="flex items-center w-9/12 p-1 border-b border-default">${
              val || "-"
            }</div>
        </div>`
          )
          .join("")}
    </div>

    <!-- EDUCATION -->
    <div class="flex flex-row w-full border-b border-default">
        <div class="flex items-center w-3/12 p-1 font-semibold">การศึกษา</div>
        <div class="flex flex-wrap items-center w-9/12 p-1 gap-2">
            ${[
              ["PrimaryEducation", "ประถมศึกษา"],
              ["SecondaryEducation", "มัธยมศึกษา"],
              ["VocationalCertificate", "ปวช. สาขา"],
              ["HighVocationalCertificate", "ปวส. สาขา"],
              ["BachelorMasterDegree", "ปริญญาตรี / โท สาขา"],
            ]
              .map(
                ([k, l]) =>
                  `<span class="cb">${this.cb(
                    perReq.perReqReasonEducation === k
                  )}</span> ${l}`
              )
              .join("")}
            ${
              perReq.perReqReasonEducation
                ? `<span>สาขา : ${
                    perReq.perReqReasonEducationNote || "-"
                  }</span>`
                : ""
            }
        </div>
    </div>

    <!-- EXPERIENCE -->
    <div class="flex flex-row w-full border-b border-default">
        <div class="flex items-center w-3/12 p-1 font-semibold">ประสบการณ์</div>
        <div class="flex flex-wrap items-center w-9/12 p-1 gap-2">
            ${[
              ["NoneExperience", "ไม่มีประสบการณ์"],
              ["Experience1To4Years", "ประสบการณ์ 1-4 ปี"],
              ["Experience5YearsUp", "ประสบการณ์ 5 ปีขึ้นไป"],
            ]
              .map(
                ([k, l]) =>
                  `<span class="cb">${this.cb(
                    perReq.perReqReasonExperience === k
                  )}</span> ${l}`
              )
              .join("")}
        </div>
    </div>

    <!-- COMPUTER SKILLS -->
    <div class="flex flex-row w-full border-b border-default">
        <div class="flex items-center w-3/12 p-1 font-semibold">ความสามารถด้านคอมพิวเตอร์</div>

        <div class="flex flex-col gap-2 w-9/12 p-1">
            <!-- กล่อง default 10 ค่า -->
            <div class="flex flex-wrap items-center gap-2">
                ${defaultSkills
                  .map(
                    (s) => `
                <span class="cb">${this.cb(
                  (perReq.perReqComputerSkills || []).includes(s)
                )}</span> ${
                      s === "BPluse" ? "B-Pluse" : s === "Other" ? "อื่นๆ" : s
                    }`
                  )
                  .join("")}
            </div>

            <!-- skill อื่น ๆ ที่ user กรอก -->
            ${
              extraSkills.length
                ? `<div class="flex flex-wrap gap-2 pl-8">
                ${extraSkills.map((e) => `<span>• ${e}</span>`).join("")}
            </div>`
                : ""
            }
        </div>
    </div>

    <!-- LANGUAGE SKILLS -->
    <div class="flex flex-row w-full border-b border-default">
        <div class="flex items-center w-3/12 p-1 font-semibold">ความสามารถทางภาษา</div>
        <div class="flex flex-col w-9/12 p-1 gap-2">
            ${["Thai", "English", "Chinese", "Japanese"]
              .map((lang) => {
                const cur = (perReq.perReqLanguageSkills || []).find(
                  (l) => l.language === lang
                );
                const label =
                  lang === "Thai"
                    ? "ภาษา ไทย"
                    : lang === "English"
                    ? "ภาษา อังกฤษ"
                    : lang === "Chinese"
                    ? "ภาษา จีน"
                    : "ภาษา ญี่ปุ่น";
                return `
            <div class="flex flex-wrap gap-2">
                <span class="w-28">${label}</span>
                ${[
                  ["Basic", "พอใช้"],
                  ["Good", "ดี"],
                  ["Excellent", "ดีมาก"],
                ]
                  .map(
                    ([lv, txt]) =>
                      `<span class="cb">${this.cb(
                        cur?.level === lv
                      )}</span> ${txt}`
                  )
                  .join("")}
            </div>`;
              })
              .join("")}
        </div>
    </div>

    <!-- DRIVING LICENSES -->
    <div class="flex flex-row w-full border-b border-default">
        <div class="flex items-center w-3/12 p-1 font-semibold">ใบอนุญาตขับขี่</div>
        <div class="flex flex-wrap items-center w-9/12 p-1 gap-2">
            ${["บ.1", "บ.2", "บ.3", "บ.4", "ท.1", "ท.2", "ท.3", "ท.4"]
              .map(
                (l) =>
                  `<span class="cb">${this.cb(
                    (perReq.perReqDrivingLicenses || []).includes(l)
                  )}</span> ใบขับขี่ ${l}`
              )
              .join("")}
        </div>
    </div>

    <!-- PROFESSIONAL LICENSES -->
    <div class="flex flex-row w-full border-b border-default">
        <div class="flex items-center w-3/12 p-1 font-semibold">ใบอนุญาตประกอบวิชาชีพ</div>
        <div class="flex flex-wrap items-center w-9/12 p-1 gap-2">
            ${["กส", "กว"]
              .map(
                (l) =>
                  `<span class="cb">${this.cb(
                    (perReq.perReqProfessionalLicenses || []).some(
                      (p) => p.name === l
                    )
                  )}</span> ${l}`
              )
              .join("")}
            ${
              (perReq.perReqProfessionalLicenses || []).some((p) => p.level)
                ? `<span>ระดับ : ${
                    (perReq.perReqProfessionalLicenses || []).find(
                      (p) => p.level
                    )?.level || "-"
                  }</span>`
                : ""
            }
        </div>
    </div>

    <!-- SIGNATURES -->
    <div class="flex flex-row items-stretch w-full gap-2 mt-4">
        ${[
          {
            title: "ผู้ร้องขอ",
            obj: perReq.PerReqCreateBy,
            sig: perReq.PerReqCreateBy?.empEmpEmployment?.[0]
              ?.empEmploymentSignature,
            date: fTH(perReq.perReqCreateAt),
          },
          {
            title: "ผู้อนุมัติ",
            obj: perReq.PerReqManagerApproveBy,
            sig: perReq.PerReqManagerApproveBy?.empEmpEmployment?.[0]
              ?.empEmploymentSignature,
            date: fTH(perReq.perReqReasonManagerApproveAt),
          },
          {
            title: "ผู้รับทราบ",
            obj: perReq.PerReqHrApproveBy,
            sig: perReq.PerReqHrApproveBy?.empEmpEmployment?.[0]
              ?.empEmploymentSignature,
            date: fTH(perReq.perReqReasonHrApproveAt),
          },
        ]
          .map(
            ({ title, obj, sig, date }) => `
        <div class="flex flex-col items-center w-full xl:w-4/12 p-1 border-2 border-default">
            <div class="font-semibold">${title}</div>
            <div class="h-8 flex items-center justify-center">
                ${
                  sig
                    ? `<img src="${img64(sig)}" class="h-8" />`
                    : title === "ผู้ร้องขอ"
                    ? "ผู้ร้องขอ"
                    : "(รออนุมัติ)"
                }
            </div>
            <div>ลงชื่อ : ${
              obj
                ? `(${obj.empFirstNameTH} ${obj.empLastNameTH})`
                : title === "ผู้ร้องขอ"
                ? "ผู้ร้องขอ"
                : "(รออนุมัติ)"
            }</div>
            <div>วันที่ : ${date}</div>
            <div class="font-semibold">
                ${
                  obj?.empEmpEmployment?.[0]?.EmpEmploymentRoleId?.roleName ||
                  (title === "ผู้ร้องขอ" ? "ผู้ร้องขอ" : "(รออนุมัติ)")
                }
                ${
                  obj?.empEmpEmployment?.[0]?.EmpEmploymentDivisionId
                    ?.divisionName || ""
                }
            </div>
        </div>`
          )
          .join("")}
    </div>

</body>

</html>
`;

      const browser = await puppeteer.launch({ args: ["--no-sandbox"] });
      const page = await browser.newPage();
      await page.setContent(html, { waitUntil: "networkidle0" });

      const pdfBuffer = await page.pdf({
        format: "A4",
        printBackground: true,
        displayHeaderFooter: true,
        margin: {
          top: "20px",
          bottom: "60px",
          left: "20px",
          right: "20px",
        },
        footerTemplate: `
<div style="font-family:'THSarabun',sans-serif;font-size:10px;width:100%;padding:0 40px;text-align:right;">
    FM07-WP-HR1-01 / Rev.00 / 25-01-65
</div>`,
        headerTemplate: `<div></div>`,
      });

      await browser.close();

      return new NextResponse(pdfBuffer, {
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
