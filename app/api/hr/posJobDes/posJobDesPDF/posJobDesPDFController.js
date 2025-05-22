import { NextResponse } from "next/server";
import { PosJobDesService } from "@/app/api/hr/posJobDes/posJobDesPDF/posJobDesPDFService";
import { validateRequest } from "@/lib/validateRequest";
import { handleGetErrors } from "@/lib/errorHandler";
import puppeteer from "puppeteer";
import fs from "fs";
import path from "path";

export class PosJobDesPDFController {
  static async getPosJobDesPdf(request, posJobDesId) {
    let ip = "";
    try {
      ip = await validateRequest(request);

      const id = parseInt(posJobDesId, 10);
      if (isNaN(id)) {
        return NextResponse.json(
          { error: "PosJobDes ID ต้องเป็นตัวเลข" },
          { status: 400 }
        );
      }

      const posJobDes = await PosJobDesService.getPosJobDesById(id);
      if (!posJobDes) {
        return NextResponse.json(
          { error: "ไม่พบข้อมูล PosJobDes" },
          { status: 404 }
        );
      }

      const {
        posJobDesAge,
        posJobDesSex,
        posJobDesEducations,
        posJobDesSkill,
        posJobDesExperience,
        posJobDesResponsibility,
        PosJobDesPositionId: position,
      } = posJobDes;

      const divisionName = position?.PositionDivisionId?.divisionName || "-";
      const departmentName =
        position?.PositionDepartmentId?.departmentName || "-";
      const positionNameTH = position?.positionNameTH || "-";

      const mapSexToThai = (sex) => {
        switch (sex) {
          case "Male":
            return "ชาย";
          case "FeMale":
            return "หญิง";
          case "Male/FeMale":
            return "ชาย/หญิง";
          default:
            return "-";
        }
      };

      const toOrderedList = (text = "") =>
        (text || "")
          .split(/\r?\n/)
          .map((l) => l.trim())
          .filter((l) => l.length > 0)
          .map((l, i, arr) => {
            const cleaned = l.replace(/^\d+\.\s*/, "");
            const marginClass = i === arr.length - 1 ? "" : "mb-1";
            return `<li class="${marginClass}">${cleaned}</li>`;
          })
          .join("");

      const logoBase64 = fs
        .readFileSync(
          path.join(process.cwd(), "public", "logoCompany", "com-1.png")
        )
        .toString("base64");

      const html = `
<!DOCTYPE html>
<html lang="th">

<head>
    <meta charset="UTF-8" />
    <link href="https://cdn.jsdelivr.net/npm/tailwindcss@2.2.19/dist/tailwind.min.css" rel="stylesheet" />
    <style>
        @font-face {
            font-family: 'THSarabun';
            src:url('${process.env.NEXT_PUBLIC_API_URL}

                /fonts/THSarabunNew.ttf') format(' truetype');

            }

            body {
                font-family: 'THSarabun', sans-serif;
                font-size: 14px;
                margin: 0
            }

            .box {
                border: 1px solid #d1d5db;
                padding: 8px 12px;
                border-radius: 4px
            }

            .bg-default {
                background: rgb(239, 242, 240)
            }

            table {
                width: 100%
            }

            th,
            td {
                padding: 4px 8px;
                text-align: left
            }

            .font_bold {
                font-weight: 600;
            }
    </style>
</head>

<body class="flex flex-col items-center justify-start w-full h-screen gap-2 border-1">
    <div class="flex flex-row items-center justify-center w-full border-b-2">
        <div class="flex flex-col items-center justify-center w-3/12 h-full p-1 gap-2 border-r font_bold">
            <img src="data:image/png;base64,${logoBase64}" class="w-24" />
            บริษัท ชาญนครวิศวกรรม
        </div>

        <div class="flex items-center justify-center w-9/12 h-full p-1 gap-2 border-l-1 text-3xl font_bold">
            ใบกำหนดลักษณะงาน (Job Description)
        </div>
    </div>

    <div class="flex flex-row items-center justify-center w-full p-1 gap-2">
        <div class="flex items-center justify-start w-3/12 h-full p-1 gap-2">
            ตำแหน่ง
        </div>

        <div class="flex items-center justify-start w-9/12 h-full p-1 gap-2 border-b-2">
            ${positionNameTH}
        </div>
    </div>

    <div class="flex flex-row items-center justify-center w-full p-1 gap-2">
        <div class="flex items-center justify-start w-3/12 h-full p-1 gap-2">
            สังกัดฝ่าย
        </div>

        <div class="flex items-center justify-start w-9/12 h-full p-1 gap-2 border-b-2">
            ${divisionName}
        </div>
    </div>

    <div class="flex flex-row items-center justify-center w-full p-1 gap-2">
        <div class="flex items-center justify-start w-3/12 h-full p-1 gap-2">
            สังกัดแผนก
        </div>

        <div class="flex items-center justify-start w-9/12 h-full p-1 gap-2 border-b-2">
            ${departmentName}
        </div>
    </div>

    <div class="flex flex-row items-center justify-center w-full p-1 gap-2">
        <div class="flex items-center justify-start w-3/12 h-full p-1 gap-2">
            ผู้บังคับบัญชา
        </div>

        <div class="flex items-center justify-start w-9/12 h-full p-1 gap-2 border-b-2">
            หัวหน้าแผนก/ผู้ช่วยผู้จัดการฝ่าย/ผู้จัดการฝ่าย ${divisionName}
        </div>
    </div>

    <div class="flex flex-col items-center justify-center w-full gap-2">
        <div class="flex items-center justify-center w-full h-full p-3 gap-2 bg-default border-t-2 border-b-2 font_bold">
            คุณสมบัติ (Qualification)
        </div>

        <div class="flex flex-row items-center justify-center w-full gap-2">
            <div class="flex flex-row items-center justify-center w-9/12 h-full p-1 gap-2">
                <div class="flex items-center justify-start w-3/12 h-full p-1 gap-2">
                    อายุ
                </div>

                <div class="flex items-center justify-start w-9/12 h-full p-1 gap-2">
                    ${posJobDesAge || "-"}
                </div>
            </div>

            <div class="flex flex-row items-center justify-center w-9/12 h-full p-1 gap-2">
                <div class="flex items-center justify-start w-3/12 h-full p-1 gap-2">
                    เพศ
                </div>

                <div class="flex items-center justify-start w-9/12 h-full p-1 gap-2">
                    ${mapSexToThai(posJobDesSex)}
                </div>
            </div>
        </div>

        <div class="flex flex-row items-center justify-center w-full h-full p-1 gap-2">
            <div class="flex items-start justify-start w-3/12 h-full p-1 gap-2">
                การศึกษา
            </div>

            <div class="flex items-center justify-start w-9/12 h-full p-1 gap-2">
                <ol class="list-decimal pl-6">
                    ${toOrderedList(posJobDesEducations)}
                </ol>
            </div>
        </div>

        <div class="flex flex-row items-center justify-center w-full h-full p-1 gap-2">
            <div class="flex items-start justify-start w-3/12 h-full p-1 gap-2">
                ทักษะ
            </div>

            <div class="flex items-center justify-start w-9/12 h-full p-1 gap-2">
                <ol class="list-decimal pl-6">
                    ${toOrderedList(posJobDesSkill)}
                </ol>
            </div>
        </div>

        <div class="flex flex-row items-center justify-center w-full h-full p-1 gap-2">
            <div class="flex items-start justify-start w-3/12 h-full p-1 gap-2">
                ประสบการณ์
            </div>

            <div class="flex items-center justify-start w-9/12 h-full p-1 gap-2">
                <ol class="list-decimal pl-6">
                    ${toOrderedList(posJobDesExperience)}
                </ol>
            </div>
        </div>
    </div>

    <div class="flex flex-col items-center justify-center w-full gap-2">
        <div class="flex items-center justify-center w-full h-full p-3 gap-2 bg-default border-t-2 border-b-2 font_bold">
            บทบาทและหน้าที่ความรับผิดชอบ (Responsibility)
        </div>

        <div class="flex items-center justify-start w-full h-full p-1 gap-2">
            <ol class="list-decimal pl-6">
                ${toOrderedList(posJobDesResponsibility)}
            </ol>
        </div>
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
        margin: { top: "20px", bottom: "50px", left: "20px", right: "20px" },
        displayHeaderFooter: true,
        headerTemplate: `<span></span>`,
        footerTemplate: `
          <div style="width: 100%; font-size: 10px; font-family: 'THSarabunNew', sans-serif; -webkit-print-color-adjust: exact;">
            <div style="padding: 10px; display: flex; justify-content: flex-end; align-items: center; margin-right: 20px;">
              <div style="text-align: right;">
                FM07-WP-HR1-01 / Rev.00 / 25-01-65
              </div>
            </div>
          </div>
        `,
      });

      await browser.close();

      return new NextResponse(pdfBuffer, {
        status: 200,
        headers: {
          "Content-Type": "application/pdf",
          "Content-Disposition": `attachment; filename="posJobDes_${id}.pdf"`,
        },
      });
    } catch (err) {
      return handleGetErrors(
        err,
        ip,
        "เกิดข้อผิดพลาดระหว่างสร้าง PosJobDes PDF"
      );
    }
  }
}
