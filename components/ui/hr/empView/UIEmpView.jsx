"use client";
import UIHeader from "@/components/other/UIHeader";

import React from "react";
import Image from "next/image";
import { useState, useEffect } from "react";
import { Document } from "@/components/icons/icons";
import { Button } from "@heroui/react";
import dayjs from "dayjs";
import duration from "dayjs/plugin/duration";
import relativeTime from "dayjs/plugin/relativeTime";
import "dayjs/locale/th";

dayjs.extend(duration);
dayjs.extend(relativeTime);
dayjs.locale("th");

function translateEmploymentType(value) {
  if (value === "Monthly") return "รายเดือน";
  if (value === "perDisabilities") return "รายเดือน (คนพิการ)";
  if (value === "Daily") return "รายวัน";
  return value || "-";
}

function translateCitizen(value) {
  if (value === "Thai") return "ไทย";
  if (value === "Cambodian") return "กัมพูชา";
  if (value === "Lao") return "ลาว";
  if (value === "Burmese") return "พม่า";
  if (value === "Vietnam") return "เวียดนาม";
  return value || "-";
}

function translateGender(value) {
  if (value === "Male") return "ชาย";
  if (value === "FeMale") return "หญิง";
  return value || "-";
}

export default function UIEmpView({ header, formData, operatedBy, exportPdf }) {
  const [imgSrc, setImgSrc] = useState("/banner/default.png");
  const [signatureSrc, setSignatureSrc] = useState("/banner/default.png");

  useEffect(() => {
    const picture = formData?.empEmpEmployment?.[0]?.empEmploymentPicture;
    setImgSrc(
      picture ? `/empEmployment/userPicture/${picture}` : "/banner/default.png"
    );

    const signature = formData?.empEmpEmployment?.[0]?.empEmploymentSignature;
    setSignatureSrc(
      signature
        ? `/empEmployment/signature/${signature}`
        : "/banner/default.png"
    );
  }, [formData]);

  const startDate = formData.empEmpEmployment?.[0]?.empEmploymentStartWork;
  const start = startDate ? dayjs(startDate) : null;
  const now = dayjs();

  const getThaiWorkDuration = (start, end) => {
    if (!start) return "-";
    const diff = dayjs.duration(end.diff(start));

    const years = diff.years();
    const months = diff.months();

    let result = "";
    if (years > 0) result += `${years} ปี`;
    if (months > 0) result += `${years > 0 ? " " : ""}${months} เดือน`;
    if (result === "") result = "น้อยกว่า 1 เดือน";
    return result;
  };

  const workDuration = getThaiWorkDuration(start, now);
  return (
    <>
      <UIHeader Header={header} />
      <div className="flex flex-col items-center justify-start w-full h-full p-2 gap-2 bg-white overflow-auto">
        <div className="relative w-full">
          <div
            className="w-full h-72"
            style={{
              backgroundImage: "url('/banner/banner-1.jpg')",
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          ></div>

          <div className="absolute left-1/2 top-48 transform -translate-x-1/2">
            <div className="w-40 h-40 border-2 overflow-hidden shadow-md rounded-full">
              <Image
                src={imgSrc}
                width={150}
                height={150}
                alt="Employee"
                onError={() => setImgSrc("/banner/banner-1.jpg")}
                className="object-contain w-full h-full"
              />
            </div>
          </div>

          <div className="h-24"></div>

          <div className="flex justify-center mb-4">
            <div className="px-6 py-2 text-center text-xl font-[600]">
              {formData.empFirstNameTH} {formData.empLastNameTH}
            </div>
          </div>
        </div>

        <div className="flex flex-col xl:flex-row items-start justify-center w-full p-2 gap-2">
          <div className="flex flex-col items-start justify-center w-full p-2 gap-2">
            <div className="flex flex-col items-center justify-start w-full h-full p-2 gap-2 border-2 border-default rounded-xl">
              <div className="flex items-center justify-start w-full h-full p-3 gap-2 border-b-2 border-default text-primary font-[600]">
                ข้อมูลพนักงาน
              </div>
              <div className="flex flex-col xl:flex-row items-center justify-center w-full h-full p-2 gap-2">
                <div className="flex items-center justify-start w-full h-full p-2 gap-2">
                  <span className="font-[600]">ชื่อภาษาอังกฤษ : </span>
                  {formData.empFirstNameEN || "-"}
                </div>
                <div className="flex items-center justify-start w-full h-full p-2 gap-2">
                  <span className="font-[600]">นามสกุลภาษาอังกฤษ : </span>
                  {formData.empLastNameEN || "-"}
                </div>
              </div>
              <div className="flex flex-col xl:flex-row items-center justify-center w-full h-full p-2 gap-2">
                <div className="flex items-center justify-start w-full h-full p-2 gap-2">
                  <span className="font-[600]">อีเมลล์ : </span>
                  {formData.empEmail || "-"}
                </div>
                <div className="flex items-center justify-start w-full h-full p-2 gap-2">
                  <span className="font-[600]">เบอร์โทร : </span>
                  {formData.empTel || "-"}
                </div>
              </div>
              <div className="flex flex-col xl:flex-row items-center justify-center w-full h-full p-2 gap-2">
                <div className="flex items-center justify-start w-full h-full p-2 gap-2">
                  <span className="font-[600]">บัตรประชาชน : </span>
                  {formData.empIdCard || "-"}
                </div>
                <div className="flex items-center justify-start w-full h-full p-2 gap-2">
                  <span className="font-[600]">วันเกิด : </span>
                  {formData.empBirthday || "-"}
                </div>
              </div>
              <div className="flex flex-col xl:flex-row items-center justify-center w-full h-full p-2 gap-2">
                <div className="flex items-center justify-start w-full h-full p-2 gap-2">
                  <span className="font-[600]">สัญชาติ : </span>
                  {translateCitizen(formData.empCitizen)}
                </div>
                <div className="flex items-center justify-start w-full h-full p-2 gap-2">
                  <span className="font-[600]">เพศ : </span>
                  {translateGender(formData.empGender)}
                </div>
              </div>
            </div>

            <div className="flex flex-col items-center justify-start w-full h-full p-2 gap-2 border-2 border-default rounded-xl">
              <div className="flex items-center justify-start w-full h-full p-3 gap-2 border-b-2 border-default text-primary font-[600]">
                ข้อมูลบัญชีการใช้งาน
              </div>
              <div className="flex flex-col xl:flex-row items-center justify-center w-full h-full p-2 gap-2">
                <div className="flex items-center justify-start w-full h-full p-2 gap-2">
                  <span className="font-[600]">ชื่อบัญชีการใช้งาน : </span>
                  {formData.empEmpUser?.[0]?.empUserUsername || "-"}
                </div>
              </div>
            </div>

            <div className="flex flex-col items-center justify-start w-full h-full p-2 gap-2 border-2 border-default rounded-xl">
              <div className="flex items-center justify-start w-full h-full p-3 gap-2 border-b-2 border-default text-primary font-[600]">
                ข้อมูลเอกสาร
              </div>

              <div className="flex flex-col xl:flex-row items-center justify-center w-full h-full p-2 gap-2">
                <div className="flex items-center justify-between w-full h-full p-2 gap-2">
                  <span className="font-[600]">ทะเบียนบ้าน : </span>
                  {formData.empEmpDocument?.[0]?.empDocumentIdCardFile ? (
                    <a
                      href={`${formData.empEmpDocument[0].empDocumentIdCardFile}`}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Document />
                    </a>
                  ) : (
                    "-"
                  )}
                </div>
                <div className="flex items-center justify-between w-full h-full p-2 gap-2">
                  <span className="font-[600]">บัตรประชาชน : </span>
                  {formData.empEmpDocument?.[0]?.empDocumentHomeFile ? (
                    <a
                      href={`${formData.empEmpDocument[0].empDocumentHomeFile}`}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Document />
                    </a>
                  ) : (
                    "-"
                  )}
                </div>
              </div>

              <div className="flex flex-col xl:flex-row items-center justify-center w-full h-full p-2 gap-2">
                <div className="flex items-center justify-between w-full h-full p-2 gap-2">
                  <span className="font-[600]">ใบประกอบวิชาชีพ : </span>
                  {formData.empEmpDocument?.[0]
                    ?.empDocumentProfessionalCertificateFile ? (
                    <a
                      href={`${formData.empEmpDocument[0].empDocumentProfessionalCertificateFile}`}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Document />
                    </a>
                  ) : (
                    "-"
                  )}
                </div>
                <div className="flex items-center justify-between w-full h-full p-2 gap-2">
                  <span className="font-[600]">วุฒิการศึกษา : </span>
                  {formData.empEmpDocument?.[0]?.empDocumentEducationsFile ? (
                    <a
                      href={`${formData.empEmpDocument[0].empDocumentEducationsFile}`}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Document />
                    </a>
                  ) : (
                    "-"
                  )}
                </div>
              </div>

              <div className="flex flex-col xl:flex-row items-center justify-center w-full h-full p-2 gap-2">
                <div className="flex items-center justify-between w-full h-full p-2 gap-2">
                  <span className="font-[600]">พาสปอร์ต : </span>
                  {formData.empEmpDocument?.[0]?.empDocumentPassportFile ? (
                    <a
                      href={`${formData.empEmpDocument[0].empDocumentPassportFile}`}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Document />
                    </a>
                  ) : (
                    "-"
                  )}
                </div>
                <div className="flex items-center justify-between w-full h-full p-2 gap-2">
                  <span className="font-[600]">ตรวจคนเข้าเมือง : </span>
                  {formData.empEmpDocument?.[0]?.empDocumentImmigrationFile ? (
                    <a
                      href={`${formData.empEmpDocument[0].empDocumentImmigrationFile}`}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Document />
                    </a>
                  ) : (
                    "-"
                  )}
                </div>
              </div>

              <div className="flex flex-col xl:flex-row items-center justify-center w-full h-full p-2 gap-2">
                <div className="flex items-center justify-between w-full h-full p-2 gap-2">
                  <span className="font-[600]">ใบแจ้งออกจากที่เก่า : </span>
                  {formData.empEmpDocument?.[0]?.empDocumentOldPlaceFile ? (
                    <a
                      href={`${formData.empEmpDocument[0].empDocumentOldPlaceFile}`}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Document />
                    </a>
                  ) : (
                    "-"
                  )}
                </div>
              </div>

              <div className="flex flex-col items-center justify-center w-full h-full p-2 gap-2">
                {[1, 2, 3, 4, 5].map((year) => {
                  const visaFile =
                    formData.empEmpDocument?.[0]?.[
                      `empDocumentVisa${year}File`
                    ];
                  return (
                    <div
                      key={year}
                      className="flex items-center justify-between w-full h-full p-2 gap-2"
                    >
                      <span className="font-[600]">{`VISA ปีที่ ${year} : `}</span>
                      {visaFile ? (
                        <a
                          href={visaFile}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <Document />
                        </a>
                      ) : (
                        "-"
                      )}
                    </div>
                  );
                })}
              </div>

              <div className="flex flex-col items-center justify-center w-full h-full p-2 gap-2">
                {[1, 2, 3, 4, 5].map((year) => {
                  const workPermitFile =
                    formData.empEmpDocument?.[0]?.[
                      `empDocumentWorkPermit${year}File`
                    ];
                  return (
                    <div
                      key={year}
                      className="flex items-center justify-between w-full h-full p-2 gap-2"
                    >
                      <span className="font-[600]">{`ใบอนุญาตทำงาน ปีที่ ${year} : `}</span>
                      {workPermitFile ? (
                        <a
                          href={workPermitFile}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <Document />
                        </a>
                      ) : (
                        "-"
                      )}
                    </div>
                  );
                })}
              </div>

              <div className="flex flex-col items-center justify-center w-full h-full p-2 gap-2">
                {[1, 2, 3, 4, 5].map((year) => {
                  const employerChangeFile =
                    formData.empEmpDocument?.[0]?.[
                      `empDocumentEmployerChange${year}File`
                    ];
                  return (
                    <div
                      key={year}
                      className="flex items-center justify-between w-full h-full p-2 gap-2"
                    >
                      <span className="font-[600]">{`ใบเปลี่ยนนายจ้าง ${year} : `}</span>
                      {employerChangeFile ? (
                        <a
                          href={employerChangeFile}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <Document />
                        </a>
                      ) : (
                        "-"
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          <div className="flex flex-col items-start justify-center w-full p-2 gap-2">
            <div className="flex flex-col items-center justify-start w-full h-full p-2 gap-2 border-2 border-default rounded-xl">
              <div className="flex items-center justify-start w-full h-full p-3 gap-2 border-b-2 border-default text-primary font-[600]">
                ข้อมูลการจ้างงาน
              </div>

              <div className="flex flex-col xl:flex-row items-center justify-center w-full h-full p-2 gap-2">
                <div className="flex items-center justify-start w-full h-full p-2 gap-2">
                  <span className="font-[600]">รหัสพนักงาน : </span>
                  {formData.empEmpEmployment?.[0]?.empEmploymentNumber || "-"}
                </div>
                <div className="flex items-center justify-start w-full h-full p-2 gap-2">
                  <span className="font-[600]">เลขบัตรพนักงาน : </span>
                  {formData.empEmpEmployment?.[0]?.empEmploymentCardNumber ||
                    "-"}
                </div>
              </div>

              <div className="flex flex-col xl:flex-row items-center justify-center w-full h-full p-2 gap-2">
                <div className="flex items-center justify-start w-full h-full p-2 gap-2">
                  <span className="font-[600]">ประเภทของการจ้างงาน : </span>
                  {translateEmploymentType(
                    formData.empEmpEmployment?.[0]?.empEmploymentType
                  )}
                </div>
                <div className="flex items-center justify-start w-full h-full p-2 gap-2">
                  <span className="font-[600]">สังกัดฝ่าย : </span>
                  {formData.empEmpEmployment?.[0]?.EmpEmploymentDivisionId
                    ?.divisionName || "-"}
                </div>
              </div>

              <div className="flex flex-col xl:flex-row items-center justify-center w-full h-full p-2 gap-2">
                <div className="flex items-center justify-start w-full h-full p-2 gap-2">
                  <span className="font-[600]">สังกัดแผนก : </span>
                  {formData.empEmpEmployment?.[0]?.EmpEmploymentDepartmentId
                    ?.departmentName || "-"}
                </div>
                <div className="flex items-center justify-start w-full h-full p-2 gap-2">
                  <span className="font-[600]">ตำแหน่งงาน : </span>
                  {formData.empEmpEmployment?.[0]?.EmpEmploymentPositionId
                    ?.positionName || "-"}
                </div>
              </div>

              <div className="flex flex-col xl:flex-row items-center justify-center w-full h-full p-2 gap-2">
                <div className="flex items-center justify-start w-full h-full p-2 gap-2">
                  <span className="font-[600]">บทบาทหน้าที่ : </span>
                  {formData.empEmpEmployment?.[0]?.EmpEmploymentRoleId
                    ?.roleName || "-"}
                </div>
                <div className="flex items-center justify-start w-full h-full p-2 gap-2">
                  <span className="font-[600]">ผู้บังคับบัญชา : </span>
                  {formData.empEmpEmployment?.[0]?.EmpEmploymentParentBy
                    ?.empFirstNameTH
                    ? `${formData.empEmpEmployment?.[0]?.EmpEmploymentParentBy?.empFirstNameTH} ${formData.empEmpEmployment?.[0]?.EmpEmploymentParentBy?.empLastNameTH}`
                    : "-"}
                </div>
              </div>
              <div className="flex flex-col xl:flex-row items-center justify-center w-full h-full p-2 gap-2">
                <div className="flex items-center justify-start w-full h-full p-2 gap-2">
                  <span className="font-[600]">วันที่เริ่มงาน : </span>
                  {formData.empEmpEmployment?.[0]?.empEmploymentStartWork ||
                    "-"}
                </div>
                <div className="flex items-center justify-start w-full h-full p-2 gap-2">
                  <span className="font-[600]">อายุงาน : </span>
                  {workDuration}
                </div>
              </div>

              <div className="flex flex-col xl:flex-row items-center justify-center w-full h-full p-2 gap-2">
                <div className="flex items-center justify-center w-full h-full p-2 gap-2">
                  <Image
                    src={signatureSrc}
                    width={100}
                    height={100}
                    alt="Signature"
                    onError={() => setSignatureSrc("/banner/default.png")}
                    className="object-contain object-center"
                  />
                </div>
              </div>
              {formData.empCitizen !== "Thai" && (
                <div className="flex flex-col items-center justify-start w-full h-full p-2 gap-2">
                  <div className="flex items-center justify-start w-full h-full p-3 gap-2 border-b-2 border-default text-primary font-[600]">
                    ข้อมูลการจ้างงานสำหรับต่างด้าว
                  </div>

                  <div className="flex flex-col xl:flex-row items-center justify-center w-full h-full p-2 gap-2">
                    <div className="flex items-center justify-start w-full h-full p-2 gap-2">
                      <span className="font-[600]">ประเภทของพนักงาน : </span>
                      {formData.empEmpEmployment?.[0]?.empEmploymentEnterType ||
                        "-"}
                    </div>
                    <div className="flex items-center justify-start w-full h-full p-2 gap-2">
                      <span className="font-[600]">เลขที่ Passport NO : </span>
                      {formData.empEmpEmployment?.[0]
                        ?.empEmploymentPassportNumber || "-"}
                    </div>
                  </div>

                  <div className="flex flex-col xl:flex-row items-center justify-center w-full h-full p-2 gap-2">
                    <div className="flex items-center justify-start w-full h-full p-2 gap-2">
                      <span className="font-[600]">
                        วันที่ออกหน้า Passport :
                      </span>
                      {formData.empEmpEmployment?.[0]
                        ?.empEmploymentPassportStartDate || "-"}
                    </div>
                    <div className="flex items-center justify-start w-full h-full p-2 gap-2">
                      <span className="font-[600]">
                        วันที่หมดหน้า Passport :
                      </span>
                      {formData.empEmpEmployment?.[0]
                        ?.empEmploymentPassportEndDate || "-"}
                    </div>
                  </div>

                  <div className="flex flex-col xl:flex-row items-center justify-center w-full h-full p-2 gap-2">
                    <div className="flex items-center justify-start w-full h-full p-2 gap-2">
                      <span className="font-[600]">ออกให้โดย : </span>
                      {formData.empEmpEmployment?.[0]
                        ?.empEmploymentPassportIssuedBy || "-"}
                    </div>
                    <div className="flex items-center justify-start w-full h-full p-2 gap-2">
                      <span className="font-[600]">สถานที่เกิด : </span>
                      {formData.empEmpEmployment?.[0]
                        ?.empEmploymentPlaceOfBirth || "-"}
                    </div>
                  </div>

                  <div className="flex flex-col xl:flex-row items-center justify-center w-full h-full p-2 gap-2">
                    <div className="flex items-center justify-start w-full h-full p-2 gap-2">
                      <span className="font-[600]">เข้ามาทางด่าน : </span>
                      {formData.empEmpEmployment?.[0]
                        ?.empEmploymentEnterCheckPoint || "-"}
                    </div>
                    <div className="flex items-center justify-start w-full h-full p-2 gap-2">
                      <span className="font-[600]">วันที่ : </span>
                      {formData.empEmpEmployment?.[0]?.empEmploymentEnterDate ||
                        "-"}
                    </div>
                  </div>

                  <div className="flex flex-col xl:flex-row items-center justify-center w-full h-full p-2 gap-2">
                    <div className="flex items-center justify-start w-full h-full p-2 gap-2">
                      <span className="font-[600]">ตม ๖. ลำดับที่ : </span>
                      {formData.empEmpEmployment?.[0]
                        ?.empEmploymentImmigration || "-"}
                    </div>
                    <div className="flex items-center justify-start w-full h-full p-2 gap-2">
                      <span className="font-[600]">ตรวจลงตราประเภท : </span>
                      {formData.empEmpEmployment?.[0]
                        ?.empEmploymentTypeOfVisa || "-"}
                    </div>
                  </div>

                  <div className="flex flex-col xl:flex-row items-center justify-center w-full h-full p-2 gap-2">
                    <div className="flex items-center justify-start w-full h-full p-2 gap-2">
                      <span className="font-[600]">เลขที่ : </span>
                      {formData.empEmpEmployment?.[0]
                        ?.empEmploymentVisaNumber || "-"}
                    </div>
                    <div className="flex items-center justify-start w-full h-full p-2 gap-2">
                      <span className="font-[600]">ออกให้ที่ : </span>
                      {formData.empEmpEmployment?.[0]
                        ?.empEmploymentVisaIssuedBy || "-"}
                    </div>
                  </div>

                  <div className="flex flex-col xl:flex-row items-center justify-center w-full h-full p-2 gap-2">
                    <div className="flex items-center justify-start w-full h-full p-2 gap-2">
                      <span className="font-[600]">
                        ใบอนุญาตทำงานปัจจุบัน เลขที่ :{" "}
                      </span>
                      {formData.empEmpEmployment?.[0]
                        ?.empEmploymentWorkPermitNumber || "-"}
                    </div>
                    <div className="flex items-center justify-start w-full h-full p-2 gap-2">
                      <span className="font-[600]">ออกให้วันที่ : </span>
                      {formData.empEmpEmployment?.[0]
                        ?.empEmploymentWorkPermitStartDate || "-"}
                    </div>
                  </div>

                  <div className="flex flex-col xl:flex-row items-center justify-center w-full h-full p-2 gap-2">
                    <div className="flex items-center justify-start w-full h-full p-2 gap-2">
                      <span className="font-[600]">ใช้ได้ถึงวันที่ : </span>
                      {formData.empEmpEmployment?.[0]
                        ?.empEmploymentWorkPermitEndDate || "-"}
                    </div>
                    <div className="flex items-center justify-start w-full h-full p-2 gap-2">
                      <span className="font-[600]">ออกให้ที่จังหวัด : </span>
                      {formData.empEmpEmployment?.[0]
                        ?.empEmploymentWorkPermitIssuedBy || "-"}
                    </div>
                  </div>

                  <div className="flex flex-col xl:flex-row items-center justify-center w-full h-full p-2 gap-2">
                    <div className="flex items-center justify-start w-full h-full p-2 gap-2">
                      <span className="font-[600]">เลขที่ประกันสังคม : </span>
                      {formData.empEmpEmployment?.[0]?.empEmploymentSsoNumber ||
                        "-"}
                    </div>
                    <div className="flex items-center justify-start w-full h-full p-2 gap-2">
                      <span className="font-[600]">ชื่อสถานรักษาพยาบาล : </span>
                      {formData.empEmpEmployment?.[0]
                        ?.empEmploymentSsoHospital || "-"}
                    </div>
                  </div>
                </div>
              )}
            </div>

            <div className="flex flex-col items-center justify-start w-full h-full p-2 gap-2 border-2 border-default rounded-xl">
              <div className="flex items-center justify-start w-full h-full p-3 gap-2 border-b-2 border-default text-primary font-[600]">
                ข้อมูลเรซูเม่
              </div>
              {formData.empEmpCv?.[0]?.empCvId && exportPdf && (
                <div className="flex flex-row items-center justify-end w-full h-full p-2 gap-2">
                  {["TH", "EN"].map((lng) => (
                    <Button
                      key={lng}
                      color="primary"
                      size="lg"
                      radius="lg"
                      type="button"
                      className="flex items-center justify-center w-full h-full p-3 gap-2"
                      onPress={() => exportPdf(lng)}
                    >
                      เรซูเม่ ({lng})
                    </Button>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>

        <div className="flex flex-col xl:flex-row items-center justify-center w-full p-2 gap-2">
          <div className="flex items-center justify-center w-full h-full p-2 gap-2">
            <span className="font-[600]">Viewed by : </span>
            {operatedBy}
          </div>
        </div>
      </div>
    </>
  );
}
