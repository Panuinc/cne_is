"use client";
import React from "react";
import { Input, Button } from "@heroui/react";
import Link from "next/link";
import { Document } from "@/components/icons/icons";
import UIHeader from "@/components/other/UIHeader";

export default function UIEmpDocumentForm({
  header,
  formRef,
  onSubmit,
  errors,
  formData,
  handleInputChange,
  operatedBy,
}) {
  return (
    <>
      <UIHeader Header={header} />
      <form
        ref={formRef}
        onSubmit={onSubmit}
        className="flex flex-col items-center justify-start w-full h-full p-2 gap-2 bg-white overflow-auto"
      >
        {formData.EmpDocumentEmpBy?.empCitizen === "Thai" && (
          <>
            <div className="flex flex-col xl:flex-row items-center justify-start w-full p-2 gap-2">
              <div className="flex items-center justify-center h-full p-4 gap-2 bg-primary/75 border-2 border-primary text-white rounded-lg">
                เอกสารสำหรับคนไทย
              </div>
            </div>

            <div className="flex flex-row items-end justify-center w-full h-full p-2 gap-2">
              <Input
                name="empDocumentIdCardFile"
                type="url"
                label="เอกสารบัตรประชาชน"
                placeholder="https://example.com"
                size="md"
                variant="bordered"
                color="primary"
                radius="lg"
                value={formData.empDocumentIdCardFile || ""}
                onChange={handleInputChange("empDocumentIdCardFile")}
                isInvalid={!!errors.empDocumentIdCardFile}
                errorMessage={errors.empDocumentIdCardFile}
              />
              {formData.empDocumentIdCardFile && (
                <Link
                  href={formData.empDocumentIdCardFile}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center p-3 gap-2"
                >
                  <Document />
                </Link>
              )}
            </div>
            <div className="flex flex-row items-end justify-center w-full h-full p-2 gap-2">
              <Input
                name="empDocumentHomeFile"
                type="url"
                label="เอกสารทะเบียนบ้าน"
                placeholder="https://example.com"
                size="md"
                variant="bordered"
                color="primary"
                radius="lg"
                value={formData.empDocumentHomeFile || ""}
                onChange={handleInputChange("empDocumentHomeFile")}
                isInvalid={!!errors.empDocumentHomeFile}
                errorMessage={errors.empDocumentHomeFile}
              />
              {formData.empDocumentHomeFile && (
                <Link
                  href={formData.empDocumentHomeFile}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center p-3 gap-2"
                >
                  <Document />
                </Link>
              )}
            </div>

            <div className="flex flex-row items-end justify-center w-full h-full p-2 gap-2">
              <Input
                name="empDocumentProfessionalCertificateFile"
                type="url"
                label="เอกสารใบประกอบวิชาชีพ"
                placeholder="https://example.com"
                size="md"
                variant="bordered"
                color="primary"
                radius="lg"
                value={formData.empDocumentProfessionalCertificateFile || ""}
                onChange={handleInputChange(
                  "empDocumentProfessionalCertificateFile"
                )}
                isInvalid={!!errors.empDocumentProfessionalCertificateFile}
                errorMessage={errors.empDocumentProfessionalCertificateFile}
              />
              {formData.empDocumentProfessionalCertificateFile && (
                <Link
                  href={formData.empDocumentProfessionalCertificateFile}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center p-3 gap-2"
                >
                  <Document />
                </Link>
              )}
            </div>
            <div className="flex flex-row items-end justify-center w-full h-full p-2 gap-2">
              <Input
                name="empDocumentEducationsFile"
                type="url"
                label="เอกสารวุฒิการศึกษา"
                placeholder="https://example.com"
                size="md"
                variant="bordered"
                color="primary"
                radius="lg"
                value={formData.empDocumentEducationsFile || ""}
                onChange={handleInputChange("empDocumentEducationsFile")}
                isInvalid={!!errors.empDocumentEducationsFile}
                errorMessage={errors.empDocumentEducationsFile}
              />
              {formData.empDocumentEducationsFile && (
                <Link
                  href={formData.empDocumentEducationsFile}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center p-3 gap-2"
                >
                  <Document />
                </Link>
              )}
            </div>
          </>
        )}

        {formData.EmpDocumentEmpBy?.empCitizen !== "Thai" && (
          <>
            <div className="flex flex-col xl:flex-row items-center justify-start w-full p-2 gap-2">
              <div className="flex items-center justify-center h-full p-4 gap-2 bg-primary/75 border-2 border-primary text-white rounded-lg">
                เอกสารสำหรับคนต่างด้าว
              </div>
            </div>

            <div className="flex flex-row items-end justify-center w-full h-full p-2 gap-2">
              <Input
                name="empDocumentPassportFile"
                type="url"
                label="เอกสารพาสปอร์ต"
                placeholder="https://example.com"
                size="md"
                variant="bordered"
                color="primary"
                radius="lg"
                value={formData.empDocumentPassportFile || ""}
                onChange={handleInputChange("empDocumentPassportFile")}
                isInvalid={!!errors.empDocumentPassportFile}
                errorMessage={errors.empDocumentPassportFile}
              />
              {formData.empDocumentPassportFile && (
                <Link
                  href={formData.empDocumentPassportFile}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center p-3 gap-2"
                >
                  <Document />
                </Link>
              )}
            </div>

            <div className="flex flex-row items-end justify-center w-full h-full p-2 gap-2">
              <Input
                name="empDocumentImmigrationFile"
                type="url"
                label="เอกสารตรวจคนเข้าเมือง"
                placeholder="https://example.com"
                size="md"
                variant="bordered"
                color="primary"
                radius="lg"
                value={formData.empDocumentImmigrationFile || ""}
                onChange={handleInputChange("empDocumentImmigrationFile")}
                isInvalid={!!errors.empDocumentImmigrationFile}
                errorMessage={errors.empDocumentImmigrationFile}
              />
              {formData.empDocumentImmigrationFile && (
                <Link
                  href={formData.empDocumentImmigrationFile}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center p-3 gap-2"
                >
                  <Document />
                </Link>
              )}
            </div>

            <div className="flex flex-row items-end justify-center w-full h-full p-2 gap-2">
              <Input
                name="empDocumentOldPlaceFile"
                type="url"
                label="ใบแจ้งออกจากที่เก่า"
                placeholder="https://example.com"
                size="md"
                variant="bordered"
                color="primary"
                radius="lg"
                value={formData.empDocumentOldPlaceFile || ""}
                onChange={handleInputChange("empDocumentOldPlaceFile")}
                isInvalid={!!errors.empDocumentOldPlaceFile}
                errorMessage={errors.empDocumentOldPlaceFile}
              />
              {formData.empDocumentOldPlaceFile && (
                <Link
                  href={formData.empDocumentOldPlaceFile}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center p-3 gap-2"
                >
                  <Document />
                </Link>
              )}
            </div>

            {[1, 2, 3, 4, 5].map((year) => {
              const name = `empDocumentVisa${year}File`;
              return (
                <div
                  key={name}
                  className="flex flex-row items-end justify-center w-full h-full p-2 gap-2"
                >
                  <Input
                    name={name}
                    type="url"
                    label={`VISA ปีที่ ${year}`}
                    placeholder="https://example.com"
                    size="md"
                    variant="bordered"
                    color="primary"
                    radius="lg"
                    value={formData[name] || ""}
                    onChange={handleInputChange(name)}
                    isInvalid={!!errors[name]}
                    errorMessage={errors[name]}
                  />
                  {formData[name] && (
                    <Link
                      href={formData[name]}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center p-3 gap-2"
                    >
                      <Document />
                    </Link>
                  )}
                </div>
              );
            })}

            {[1, 2, 3, 4, 5].map((year) => {
              const name = `empDocumentWorkPermit${year}File`;
              return (
                <div
                  key={name}
                  className="flex flex-row items-end justify-center w-full h-full p-2 gap-2"
                >
                  <Input
                    name={name}
                    type="url"
                    label={`ใบอนุญาตทำงาน ปีที่ ${year}`}
                    placeholder="https://example.com"
                    size="md"
                    variant="bordered"
                    color="primary"
                    radius="lg"
                    value={formData[name] || ""}
                    onChange={handleInputChange(name)}
                    isInvalid={!!errors[name]}
                    errorMessage={errors[name]}
                  />
                  {formData[name] && (
                    <Link
                      href={formData[name]}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center p-3 gap-2"
                    >
                      <Document />
                    </Link>
                  )}
                </div>
              );
            })}

            {[1, 2, 3, 4, 5].map((year) => {
              const name = `empDocumentEmployerChange${year}File`;
              return (
                <div
                  key={name}
                  className="flex flex-row items-end justify-center w-full h-full p-2 gap-2"
                >
                  <Input
                    name={name}
                    type="url"
                    label={`ใบเปลี่ยนนายจ้าง ${year}`}
                    placeholder="https://example.com"
                    size="md"
                    variant="bordered"
                    color="primary"
                    radius="lg"
                    value={formData[name] || ""}
                    onChange={handleInputChange(name)}
                    isInvalid={!!errors[name]}
                    errorMessage={errors[name]}
                  />
                  {formData[name] && (
                    <Link
                      href={formData[name]}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center p-3 gap-2"
                    >
                      <Document />
                    </Link>
                  )}
                </div>
              );
            })}
          </>
        )}

        <div className="flex flex-col xl:flex-row items-center justify-center w-full p-2 gap-2">
          <div className="flex items-center justify-center w-full h-full p-2 gap-2">
            <Input
              type="text"
              label="ดำเนินการโดย"
              placeholder="ดำเนินการโดย"
              size="md"
              variant="bordered"
              color="primary"
              radius="lg"
              value={operatedBy}
              readOnly
            />
          </div>
        </div>

        <div className="flex flex-col xl:flex-row items-center justify-center w-full p-2 gap-2">
          <div className="flex items-center justify-end w-full h-full p-2 gap-2">
            <Button
              color="primary"
              size="md"
              radius="lg"
              type="submit"
              className="flex items-center justify-center w-2/12 h-full p-4 gap-2"
            >
              บันทึก
            </Button>
          </div>
        </div>
      </form>
    </>
  );
}
