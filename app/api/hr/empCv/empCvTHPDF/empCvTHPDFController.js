import { NextResponse } from "next/server";
import { EmpCvTHService } from "@/app/api/hr/empCv/empCvTHPDF/empCvTHPDFService";
import { validateRequest } from "@/lib/validateRequest";
import { handleGetErrors } from "@/lib/errorHandler";
import puppeteer from "puppeteer";
import fs from "fs";
import path from "path";

export class EmpCvTHController {
  static async getEmpCvTHPdf(request, empCvTHId) {
    let ip = "";
    try {
      ip = await validateRequest(request);

      const parsedEmpCvTHId = parseInt(empCvTHId, 10);
      if (isNaN(parsedEmpCvTHId)) {
        return NextResponse.json(
          { error: "EmpCvTH ID is required and must be a number" },
          { status: 400 }
        );
      }

      const empCvTH = await EmpCvTHService.getEmpCvTHById(parsedEmpCvTHId);
      if (!empCvTH) {
        return NextResponse.json(
          { error: "No empCvTH data found" },
          { status: 404 }
        );
      }

      const empPicFilename =
        empCvTH.EmpCvEmpBy?.empEmpEmployment?.[0]?.empEmploymentPicture ||
        "default.png";
      const empPicPath = path.join(
        process.cwd(),
        "public",
        "empEmployment",
        "userPicture",
        empPicFilename
      );
      let empPicBase64 = "";
      try {
        empPicBase64 = fs.readFileSync(empPicPath).toString("base64");
      } catch {
        empPicBase64 = fs
          .readFileSync(
            path.join(
              process.cwd(),
              "public",
              "empEmployment",
              "userPicture",
              "default.png"
            )
          )
          .toString("base64");
      }

      const fontPath = path.join(
        process.cwd(),
        "public",
        "fonts",
        "THSarabunNew.ttf"
      );
      const fontBase64 = fs.readFileSync(fontPath).toString("base64");

      const logoBase64 = fs
        .readFileSync(
          path.join(process.cwd(), "public", "logoCompany", "com-1.png")
        )
        .toString("base64");

      const fullname = empCvTH.EmpCvEmpBy
        ? `${empCvTH.EmpCvEmpBy.empFirstNameTH} ${empCvTH.EmpCvEmpBy.empLastNameTH}`
        : "-";
      const positionNameTH =
        empCvTH.EmpCvEmpBy?.empEmpEmployment?.[0]?.EmpEmploymentPositionId
          ?.positionNameTH || "-";
      const employeeEmail = empCvTH.EmpCvEmpBy?.empEmail || "-";

      const formatDate = (dateInput) =>
        dateInput
          ? new Date(dateInput).toLocaleDateString("th-TH", {
              day: "2-digit",
              month: "2-digit",
              year: "numeric",
            })
          : "-";

      const formattedBirthday = empCvTH.EmpCvEmpBy?.empBirthday
        ? formatDate(empCvTH.EmpCvEmpBy.empBirthday)
        : "-";

      let workHistoryHtml = "";
      if (empCvTH.empCvWorkHistory?.length) {
        workHistoryHtml = empCvTH.empCvWorkHistory
          .map((wh) => {
            const projectsHtml = wh.empCvProjects?.length
              ? `
<table class="w-full p-2 gap-2 text-sm">
    <thead>
        <tr class="bg-green">
            <th class="border-b-1 p-2">ชื่อโปรเจค</th>
            <th class="border-b-1 p-2">รายละเอียด</th>
        </tr>
    </thead>
    <tbody>
        ${wh.empCvProjects
          .map(
            (proj) => `
        <tr>
            <td class="align-top p-2">● ${proj.empCvProjectNameTH || "-"}</td>
            <td class="align-top border-l-1 p-2">
                - ${proj.empCvProjectDescriptionTH || "-"}
            </td>
        </tr>
        `
          )
          .join("")}
    </tbody>
</table>
`
              : '<div class="text-gray-500">No projects listed</div>';

            const startDateFormatted = formatDate(wh.empCvWorkHistoryStartDate);
            const endDateFormatted =
              wh.empCvWorkHistoryEndDate &&
              String(wh.empCvWorkHistoryEndDate).toUpperCase() !== "PRESENT"
                ? formatDate(wh.empCvWorkHistoryEndDate)
                : "ปัจจุบัน";

            return `
<div class="flex flex-col items-start w-full p-1 gap-1">
    <div class="flex flex-col items-center w-full gap-1">
        <b>${wh.empCvWorkHistoryCompanyNameTH || ""}</b>
        <b>${wh.empCvWorkHistoryPositionTH || ""}</b>
        <b>${startDateFormatted} - ${endDateFormatted}</b>
    </div>
    <div class="w-full p-1">
        ${projectsHtml}
    </div>
</div>
`;
          })
          .join("");
      } else {
        workHistoryHtml =
          '<div class="text-gray-500">No work experience data available</div>';
      }

      let workExperienceSummaryHtml = "";
      if (empCvTH.empCvWorkHistory?.length) {
        workExperienceSummaryHtml = empCvTH.empCvWorkHistory
          .map((wh) => {
            let years = "-";
            if (wh.empCvWorkHistoryStartDate) {
              const startDate = new Date(wh.empCvWorkHistoryStartDate);
              const endDate =
                !wh.empCvWorkHistoryEndDate ||
                String(wh.empCvWorkHistoryEndDate).toUpperCase() === "PRESENT"
                  ? new Date()
                  : new Date(wh.empCvWorkHistoryEndDate);
              years = `${endDate.getFullYear() - startDate.getFullYear()} ปี`;
            }
            return `<div>${wh.empCvWorkHistoryPositionTH} (${years})</div>`;
          })
          .join("");
      } else {
        workExperienceSummaryHtml =
          '<div class="text-gray-500">No work experience data available</div>';
      }

      let educationHtml = "";
      if (empCvTH.empCvEducation?.length) {
        educationHtml = empCvTH.empCvEducation
          .map(
            (edu) => `
<div class="flex flex-col items-start">
    <span>${edu.empCvEducationDegreeTH || "-"} ${
              edu.empCvEducationStartDate
                ? formatDate(edu.empCvEducationStartDate)
                : "-"
            }</span>
    <span>${edu.empCvEducationInstitutionTH || "-"}</span>
</div>
`
          )
          .join("");
      } else {
        educationHtml = '<div class="text-gray-500">No Educations found</div>';
      }

      let licenseHtml = "";
      if (empCvTH.empCvLicense?.length) {
        licenseHtml = empCvTH.empCvLicense
          .map(
            (lic) => `
<div class="flex flex-row justify-between w-full">
    <span>${lic.empCvLicenseNameTH || "-"} , </span>
    <span>${lic.empCvLicenseNumber || "-"}</span>
</div>
`
          )
          .join("");
      } else {
        licenseHtml = '<div class="text-gray-500">No License data</div>';
      }

      let languageSkillHtml = "";
      if (empCvTH.empCvLanguageSkill?.length) {
        languageSkillHtml = empCvTH.empCvLanguageSkill
          .map(
            (lang) => `
<div class="flex flex-row justify-between w-full">
    <span>${lang.empCvLanguageSkillNameTH || "-"} : </span>
    <span>${lang.empCvLanguageSkillProficiency || "-"}</span>
</div>
`
          )
          .join("");
      } else {
        languageSkillHtml =
          '<div class="text-gray-500">No language skills data</div>';
      }

      const hrIcon = `
<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
    <g fill="none" stroke="currentColor" stroke-width="1.5">
        <circle cx="9" cy="9" r="2" />
        <path d="M13 15c0 1.105 0 2-4 2s-4-.895-4-2s1.79-2 4-2s4 .895 4 2Z" />
        <path
            d="M2 12c0-3.771 0-5.657 1.172-6.828S6.229 4 10 4h4c3.771 0 5.657 0 6.828 1.172S22 8.229 22 12s0 5.657-1.172 6.828S17.771 20 14 20h-4c-3.771 0-5.657 0-6.828-1.172S2 15.771 2 12Z" />
        <path stroke-linecap="round" d="M19 12h-4m4-3h-5m5 6h-3" />
    </g>
</svg>`;
      const emailIcon = `
<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
    <g fill="none">
        <path stroke="currentColor" stroke-linecap="round" stroke-width="1.5" d="M10.5 22v-2m4 2v-2" />
        <path fill="currentColor" d="M11 20v.75h.75V20zm3-.75a.75.75 0 0 0 0 1.5zm3.5-14a.75.75 0 0 0 0 1.5zM7 5.25a.75.75
      0 0 0 0 1.5zm2 14a.75.75 0 0 0 0 1.5zm6 1.5a.75.75 0 0 0 0-1.5zm-4.75-9.5V20h1.5v-8.75zm.75
      8H4.233v1.5H11zm-8.25-1.855V11.25h-1.5v6.145zm1.483 1.855c-.715 0-1.483-.718-1.483-1.855h-1.5c0
      1.74 1.231 3.355 2.983 3.355zM6.5 6.75c1.967 0 3.75 1.902 3.75 4.5h1.5c0-3.201-2.246-6-5.25-6zm0-1.5c-3.004
      0-5.25 2.799-5.25 6h1.5c0-2.598 1.783-4.5 3.75-4.5zm14.75 6v6.175h1.5V11.25zm-1.457 8H14v1.5h5.793zm1.457-1.825c0
      1.12-.757 1.825-1.457 1.825v1.5c1.738 0 2.957-1.601
      2.957-3.325zm1.5-6.175c0-3.201-2.246-6-5.25-6v1.5c1.967 0
      3.75 1.902 3.75 4.5zM7 6.75h11v-1.5H7zm2 14h6v-1.5H9z" />
    </g>
</svg>`;

      const footerTemplate = `
<style>
    @font-face {
        font-family: 'THSarabun';
        src: url(data:font/truetype;charset=utf-8;base64,${fontBase64}) format('truetype');
        font-weight: normal;
        font-style: normal;
    }
</style>
<div style="
            position: fixed;
            bottom: 0;
            left: 0;
            right: 0;
            font-size: 16px;
            font-family: 'THSarabun', sans-serif;
            -webkit-print-color-adjust: exact;
          ">
    <div style="background-color: rgb(3, 153, 76); color: white; padding: 11.5px; display: flex; align-items: center;">
        <div style="flex-grow: 1; margin-left: 30px;">
            50/1 หมู่ 20 ซอยงามวงศ์วาน 57 ถนนงามวงศ์วาน แขวงลาดยาว เขตจตุจักร กรุงเทพฯ 10900 โทร 02-105-0999 (30 คู่สาย)
            แฟกซ์ 02-580-1852
        </div>
        <div style="text-align: right;">
            <span class="pageNumber"></span>/<span class="totalPages"></span>
        </div>
    </div>
</div>
`;

      const htmlContent = `
<!DOCTYPE html>
<html lang="th">

<head>
    <meta charset="UTF-8" />
    <link href="https://cdn.jsdelivr.net/npm/tailwindcss@2.2.19/dist/tailwind.min.css" rel="stylesheet" />
    <style>
        @font-face {
            font-family: 'THSarabun';
            src: url(data:font/truetype;charset=utf-8;base64,${fontBase64}) format('truetype');
            font-weight: normal;
            font-style: normal;
        }

        body {
            font-family: 'THSarabun', sans-serif;
            font-size: 18px;
            margin: 0;
            padding: 0;
        }

        .bg-header {
            background: rgb(3, 153, 76);
        }

        .bg-green {
            background: rgb(3, 153, 76);
            color: #fff;
            font-size: 15px;
            font-weight: 300;
        }

        .bg-default {
            background: rgb(239, 242, 240);
        }

        .text-blue {
            color: rgb(64, 89, 146);
            font-size: 39px;
        }

        .text-green {
            color: rgb(3, 153, 76);
            font-size: 18px;
        }

        .text-success-header {
            color: #000;
            font-size: 16px;
        }

        .content-wrap {
            margin-top: 80px;
        }

        @media print {
            body::before {
                content: "";
                position: fixed;
                top: 65px;
                left: 0;
                width: 33.333%;
                height: calc(100vh - 60px);
                background: rgb(239, 242, 240);
                z-index: -1;
                -webkit-print-color-adjust: exact;
            }
        }
    </style>
</head>

<body>
    <div style="
      position:fixed;top:0;left:0;right:0;
      height:60px;
      display:flex;align-items:center;
      background:white;
      -webkit-print-color-adjust:exact;
      z-index:1000;
    ">
        <img src="data:image/png;base64,${logoBase64}" style="width:60px;" alt="Logo" />
    </div>
    <div class="content-wrap">
        <div class="flex flex-row items-start justify-center w-full gap-1 p-1">
            <div class="sidebar flex flex-col w-4/12 gap-1 bg-default" style="min-height:calc(100vh - 80px);">
                <div class="flex justify-center p-2">
                    <img src="data:image/png;base64,${empPicBase64}" class="w-44 mx-auto" alt="Emp Picture" />
                </div>
                <div class="flex items-center p-2 gap-1">
                    <span class="text-green">${hrIcon}</span> ${formattedBirthday}
                </div>
                <div class="flex items-center p-2 gap-1 border-b">
                    <span class="text-green">${emailIcon}</span> ${employeeEmail}
                </div>
                <div class="flex flex-col p-1 gap-1 border-b">
                    <div class="flex justify-center text-success-header">การศึกษา</div>
                    ${educationHtml}
                </div>
                <div class="flex flex-col p-1 gap-1 border-b">
                    <div class="flex justify-center text-success-header">ใบอนุญาตประกอบวิชาชีพ</div>
                    ${licenseHtml}
                </div>
                <div class="flex flex-col p-1 gap-1 border-b">
                    <div class="flex justify-center text-success-header">ความสามารถทางด้านภาษา</div>
                    ${languageSkillHtml}
                </div>
                <div class="flex flex-col p-1 gap-1 border-b">
                    <div class="flex justify-center text-success-header">ประวัติการทำงานโดยรวม</div>
                    ${workExperienceSummaryHtml}
                </div>
            </div>
            <div class="content flex flex-col w-8/12 gap-1">
                <div class="flex justify-center p-2 text-blue mb-2">
                    ${fullname}
                </div>
                <div class="flex justify-center p-2 bg-header text-white">
                    ${positionNameTH}
                </div>
                <div class="flex items-center p-2 text-green">ประวัติการทำงาน</div>
                <div class="flex flex-col p-1 gap-1">
                    ${workHistoryHtml}
                </div>
            </div>
        </div>
    </div>
</body>

</html>
`;

      const browser = await puppeteer.launch({ args: ["--no-sandbox"] });
      const page = await browser.newPage();
      await page.setContent(htmlContent, { waitUntil: "networkidle0" });

      const pdfBuffer = await page.pdf({
        format: "A4",
        printBackground: true,
        margin: { top: "20px", bottom: "50px", left: "30px", right: "0px" },
        displayHeaderFooter: true,
        headerTemplate: `<div></div>`,
        footerTemplate,
      });

      await browser.close();
      return new NextResponse(pdfBuffer, {
        status: 200,
        headers: {
          "Content-Type": "application/pdf",
          "Content-Disposition": `attachment; filename="empCvTH_export_${parsedEmpCvTHId}.pdf"`,
        },
      });
    } catch (error) {
      return handleGetErrors(error, ip, "Error generating empCvTH PDF");
    }
  }
}
