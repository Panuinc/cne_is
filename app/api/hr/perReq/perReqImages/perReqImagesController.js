import { NextResponse } from "next/server";
import { PerReqService } from "@/app/api/hr/perReq/perReqImages/perReqImagesService";
import puppeteer from "puppeteer";
import path from "path";
import fs from "fs";

export class PerReqImagesController {
  static async getPerReqImage(request, perReqId) {
    try {
      const id = Number(perReqId);
      if (Number.isNaN(id)) {
        return NextResponse.json(
          { error: "perReqId ต้องเป็นตัวเลข" },
          { status: 400 }
        );
      }

      const perReq = await PerReqService.getPerReqById(id);
      if (!perReq) {
        return NextResponse.json(
          { error: "ไม่พบข้อมูล PerReq" },
          { status: 404 }
        );
      }

      const jobDes = perReq.PerReqPositionId?.positionIdPosJobDes?.[0];

      function readBase64(filePath) {
        const fileData = fs.readFileSync(filePath);
        return fileData.toString("base64");
      }

      function formatText(text) {
        return (text || "-").replace(/\r?\n/g, "<br />");
      }

      function translateSex(sexText) {
        const normalized = sexText?.trim().toLowerCase();
        const map = {
          male: "ชาย",
          female: "หญิง",
          "male/female": "ชาย/หญิง",
          "female/male": "ชาย/หญิง",
        };
        return map[normalized] || sexText || "-";
      }

      const headerBase64 = readBase64(
        path.join(process.cwd(), "public", "perReqImages", "images-1.jpg")
      );
      const logoBase64 = readBase64(
        path.join(process.cwd(), "public", "perReqImages", "images-2.jpg")
      );
      const footerBase64 = readBase64(
        path.join(process.cwd(), "public", "perReqImages", "images-3.jpg")
      );
      const bgSecBase64 = readBase64(
        path.join(process.cwd(), "public", "perReqImages", "images-4.jpg")
      );
      const bgPriBase64 = readBase64(
        path.join(process.cwd(), "public", "perReqImages", "images-5.jpg")
      );
      const fontBase64 = fs
        .readFileSync(
          path.join(process.cwd(), "public", "fonts", "DBHelvethaicaMonXBd.ttf")
        )
        .toString("base64");

      const html = `
<!DOCTYPE html>
<html lang="th">

<head>
    <meta charset="UTF-8">
    <link href="https://cdn.jsdelivr.net/npm/tailwindcss@2.2.19/dist/tailwind.min.css" rel="stylesheet" />
    <style>
        @font-face {
            font-family: 'DBHelvethaicaMonXBd';
            src: url(data:font/truetype;charset=utf-8;base64,${fontBase64}) format('truetype');
        }

        html,
        body {
            margin: 0;
            padding: 0;
            width: 3000px;
            height: 4000px;
            background: white;
            font-family: 'DBHelvethaicaMonXBd', sans-serif;
            font-size: 80px;
        }

        .bg-green {
            background: #03994C;
            color: #FFFFFF;
            font-size: 80px;
            font-weight: 900;
        }

        .bg-white {
            background: rgba(255, 255, 255, 0.8);
        }

        .text-green-header {
            background: rgba(255, 255, 255, 0.5);
            color: #03994C;
            font-size: 100px;
            font-weight: 900;
        }

        .text-green-detail {
            background: rgba(255, 255, 255, 0.8);
            color: #03994C;
            font-size: 120px;
            font-weight: 900;
        }
    </style>
</head>

<body class="flex items-center justify-center p-1"
    style="background-image: url('data:image/png;base64,${bgPriBase64}'); background-size: cover; background-position: center;">
    <div class="flex flex-col w-full h-full rounded-3xl"
        style="background-image: url('data:image/png;base64,${bgSecBase64}'); background-size: cover; background-position: center;">
        <div class="flex flex-row w-full p-1 gap-1">
            <div class="flex items-center justify-start w-full p-1 gap-1">
                <img src="data:image/png;base64,${headerBase64}" class="w-40" />
            </div>
            <div class="flex items-center justify-end w-full p-1 gap-1">
                <img src="data:image/png;base64,${logoBase64}" class="w-20" />
            </div>
        </div>

        <div class="flex flex-col items-center justify-start w-full p-1 gap-1">
            <div class="flex items-center justify-start w-80 p-1 text-green-header">
                เปิดรับสมัครตำแหน่ง
            </div>
            <div class="flex items-center justify-center min-w-80 px-10 py-2 text-green-detail">
                ${perReq.PerReqPositionId?.positionNameTH || "-"}
            </div>
        </div>

        <div class="flex flex-col items-start w-full p-1 gap-1 bg-white">
            <div class="flex items-center justify-start w-40 p-1 bg-green rounded-tr-xl rounded-br-xl">
                หน้าที่ความรับผิดชอบ
            </div>
            <div class="flex items-center justify-start w-full p-1">
                ${formatText(jobDes?.posJobDesResponsibility)}
            </div>
        </div>

        <div class="flex flex-row items-end justify-start w-full gap-1 bg-white rounded-bl-3xl rounded-br-3xl">
            <div class="flex flex-col items-start p-1 gap-1">
                <div class="flex items-center justify-start w-40 p-1 bg-green rounded-tr-xl rounded-br-xl">
                    คุณสมบัติ
                </div>
                <div class="flex flex-col w-full">
                    <div class="flex flex-col w-full">
                        <div class="flex items-center justify-start w-full p-1">
                            การศึกษา
                        </div>
                        <div class="flex items-center justify-start w-full p-1">
                            ${formatText(jobDes?.posJobDesEducations)}
                        </div>
                    </div>
                    <div class="flex items-center justify-start w-full p-1">
                        อายุ : ${formatText(jobDes?.posJobDesAge)}
                    </div>
                    <div class="flex items-center justify-start w-full p-1">
                        เพศ : ${translateSex(jobDes?.posJobDesSex)}
                    </div>
                    <div class="flex flex-col w-full">
                        <div class="flex items-center justify-start w-full p-1">
                            ทักษะ
                        </div>
                        <div class="flex items-center justify-start w-full p-1">
                            ${formatText(jobDes?.posJobDesSkill)}
                        </div>
                    </div>
                    <div class="flex flex-col w-full">
                        <div class="flex items-center justify-start w-full p-1">
                            ประสบการณ์
                        </div>
                        <div class="flex items-center justify-start w-full p-1">
                            ${formatText(jobDes?.posJobDesExperience)}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</body>

</html>
`;

      const browser = await puppeteer.launch({ args: ["--no-sandbox"] });
      const page = await browser.newPage();

      await page.setViewport({ width: 3000, height: 4000 });

      await page.setContent(html, { waitUntil: "networkidle0" });

      const imageBuffer = await page.screenshot({
        type: "png",
        clip: {
          x: 0,
          y: 0,
          width: 3000,
          height: 4000,
        },
      });

      await browser.close();

      return new NextResponse(imageBuffer, {
        status: 200,
        headers: {
          "Content-Type": "image/png",
          "Content-Disposition": `attachment; filename="jobDes_${id}.png"`,
        },
      });
    } catch (err) {
      console.error("Error generating image:", err);
      return NextResponse.json(
        { error: "เกิดข้อผิดพลาดขณะสร้างภาพ" },
        { status: 500 }
      );
    }
  }
}
