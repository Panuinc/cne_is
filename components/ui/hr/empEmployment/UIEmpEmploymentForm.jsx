"use client";

import UIHeader from "@/components/other/UIHeader";

import React, { useState, useEffect } from "react";
import { Input, Button, Select, SelectItem } from "@heroui/react";
import dynamic from "next/dynamic";

const SignatureCanvas = dynamic(() => import("react-signature-canvas"), {
  ssr: false,
});

export default function UIEmpEmploymentForm({
  header,
  formRef,
  onSubmit,
  errors,
  formData,
  handleInputChange,
  operatedBy,
  roleOptions = [],
  divisionOptions = [],
  departmentOptions = [],
  positionOptions = [],
  parentOptions = [],
  previews = { employmentPicture: null, employmentSignature: null },
  signatureRef,
}) {
  const [isEditingPicture, setIsEditingPicture] = useState(false);
  const [isEditingSignature, setIsEditingSignature] = useState(false);
  const [signaturePreview, setSignaturePreview] = useState(null);

  useEffect(() => {
    if (previews.employmentSignature) {
      setSignaturePreview(previews.employmentSignature);
    }
  }, [previews.employmentSignature]);

  const clearSignature = () => {
    signatureRef.current?.clear();
    setSignaturePreview(null);
    handleInputChange("empEmploymentSignature")({ target: { files: [null] } });
  };

  const saveSignature = () => {
    const canvasObj = signatureRef.current;
    if (!canvasObj || typeof canvasObj.getTrimmedCanvas !== "function") {
      toast.error("Signature canvas is not ready.");
      return;
    }

    const canvas = canvasObj.getTrimmedCanvas();
    canvas.toBlob((blob) => {
      if (!blob) return;

      const file = new File([blob], "signature.png", { type: "image/png" });

      handleInputChange("empEmploymentSignature")({
        target: { files: [file] },
      });
      setSignaturePreview(URL.createObjectURL(blob));
      setIsEditingSignature(false);
    });
  };

  return (
    <>
      <UIHeader Header={header} />
      <form
        ref={formRef}
        onSubmit={onSubmit}
        className="flex flex-col items-center justify-start w-full h-full p-2 gap-2 bg-white shadow-md rounded-xl overflow-auto"
        encType="multipart/form-data"
      >
        <div className="flex flex-col xl:flex-row items-center justify-center w-full p-2 gap-2">
          <div className="flex flex-col items-center justify-center w-full h-full p-2 gap-2">
            {previews.employmentPicture && !isEditingPicture ? (
              <>
                <div className="flex items-center justify-center h-full p-2 gap-2 bg-default rounded-full">
                  <img
                    src={previews.employmentPicture}
                    alt="Current Picture"
                    className="flex items-center justify-center w-40 h-40 object-contain p-2 gap-2"
                  />
                </div>
                <div className="flex items-center justify-center w-full h-full p-2 gap-2">
                  <Button
                    color="primary"
                    size="md"
                    radius="lg"
                    className="flex items-center justify-center w-2/12 h-full p-3 gap-2"
                    onPress={() => setIsEditingPicture(true)}
                  >
                    เปลี่ยนรูปพนักงาน
                  </Button>
                </div>
              </>
            ) : (
              <>
                <Input
                  name="empEmploymentPicture"
                  type="file"
                  label="รูปพนักงาน"
                  placeholder="กรุณากรอกข้อมูล"
                  size="md"
                  variant="underlined"
                  color="primary"
                  radius="lg"
                  accept="image/*"
                  onChange={handleInputChange("empEmploymentPicture")}
                  isInvalid={!!errors.empEmploymentPicture}
                  errorMessage={errors.empEmploymentPicture}
                />
                {previews.employmentPicture && (
                  <Button
                    color="primary"
                    size="md"
                    radius="lg"
                    className="flex items-center justify-center w-2/12 h-full p-3 gap-2"
                    onPress={() => setIsEditingPicture(false)}
                  >
                    ยกเลิก
                  </Button>
                )}
              </>
            )}
          </div>
        </div>

        <div className="flex flex-col xl:flex-row items-center justify-center w-full p-2 gap-2">
          <div className="flex items-center justify-center w-full h-full p-2 gap-2">
            <Input
              name="empEmploymentNumber"
              type="text"
              label="รหัสพนักงาน"
              placeholder="กรุณากรอกข้อมูล"
              size="md"
              variant="underlined"
              color="none"
              radius="lg"
              value={formData.empEmploymentNumber || ""}
              onChange={handleInputChange("empEmploymentNumber")}
              isInvalid={!!errors.empEmploymentNumber}
              errorMessage={errors.empEmploymentNumber}
            />
          </div>
          <div className="flex items-center justify-center w-full h-full p-2 gap-2">
            <Input
              name="empEmploymentCardNumber"
              type="text"
              label="เลขบัตรพนักงาน"
              placeholder="กรุณากรอกข้อมูล"
              size="md"
              variant="underlined"
              color="none"
              radius="lg"
              value={formData.empEmploymentCardNumber || ""}
              onChange={handleInputChange("empEmploymentCardNumber")}
              isInvalid={!!errors.empEmploymentCardNumber}
              errorMessage={errors.empEmploymentCardNumber}
            />
          </div>
        </div>

        <div className="flex flex-col xl:flex-row items-center justify-center w-full p-2 gap-2">
          <div className="flex items-center justify-center w-full h-full p-2 gap-2">
            <Select
              name="empEmploymentType"
              label="ประเภทพนักงาน"
              placeholder="Please Select Data"
              size="md"
              variant="underlined"
              color="none"
              radius="lg"
              selectedKeys={
                formData.empEmploymentType ? [formData.empEmploymentType] : []
              }
              onChange={handleInputChange("empEmploymentType")}
              isInvalid={!!errors.empEmploymentType}
              errorMessage={errors.empEmploymentType}
            >
              <SelectItem key="Daily" value="Daily">
                รายวัน
              </SelectItem>
              <SelectItem key="Monthly" value="Monthly">
                รายเดือน
              </SelectItem>
              <SelectItem key="perDisabilities" value="perDisabilities">
                รายเดือน (คนพิการ)
              </SelectItem>
            </Select>
          </div>
          <div className="flex items-center justify-center w-full h-full p-2 gap-2">
            <Select
              name="empEmploymentDivisionId"
              label="ฝ่าย"
              placeholder="เลือกฝ่าย"
              size="md"
              variant="underlined"
              color="none"
              radius="lg"
              selectedKeys={
                formData.empEmploymentDivisionId
                  ? [String(formData.empEmploymentDivisionId)]
                  : []
              }
              onChange={handleInputChange("empEmploymentDivisionId")}
              isInvalid={!!errors.empEmploymentDivisionId}
              errorMessage={errors.empEmploymentDivisionId}
            >
              {divisionOptions.map((div) => (
                <SelectItem key={div.divisionId} value={String(div.divisionId)}>
                  {div.divisionName}
                </SelectItem>
              ))}
            </Select>
          </div>
        </div>

        <div className="flex flex-col xl:flex-row items-center justify-center w-full p-2 gap-2">
          <div className="flex items-center justify-center w-full h-full p-2 gap-2">
            <Select
              name="empEmploymentDepartmentId"
              label="แผนก"
              placeholder="เลือกแผนก"
              size="md"
              variant="underlined"
              color="none"
              radius="lg"
              isDisabled={!formData.empEmploymentDivisionId}
              selectedKeys={
                formData.empEmploymentDepartmentId
                  ? [String(formData.empEmploymentDepartmentId)]
                  : []
              }
              onChange={handleInputChange("empEmploymentDepartmentId")}
              isInvalid={!!errors.empEmploymentDepartmentId}
              errorMessage={errors.empEmploymentDepartmentId}
            >
              {departmentOptions.map((dept) => (
                <SelectItem
                  key={dept.departmentId}
                  value={String(dept.departmentId)}
                >
                  {dept.departmentName}
                </SelectItem>
              ))}
            </Select>
          </div>
          <div className="flex items-center justify-center w-full h-full p-2 gap-2">
            <Select
              name="empEmploymentPositionId"
              label="ตำแหน่ง"
              placeholder="เลือกตำแหน่ง"
              size="md"
              variant="underlined"
              color="none"
              radius="lg"
              isDisabled={
                !formData.empEmploymentDivisionId ||
                !formData.empEmploymentDepartmentId
              }
              selectedKeys={
                formData.empEmploymentPositionId
                  ? [String(formData.empEmploymentPositionId)]
                  : []
              }
              onChange={handleInputChange("empEmploymentPositionId")}
              isInvalid={!!errors.empEmploymentPositionId}
              errorMessage={errors.empEmploymentPositionId}
            >
              {positionOptions.map((pos) => (
                <SelectItem key={pos.positionId} value={String(pos.positionId)}>
                  {pos.positionNameTH}
                </SelectItem>
              ))}
            </Select>
          </div>
        </div>

        <div className="flex flex-col xl:flex-row items-center justify-center w-full p-2 gap-2">
          <div className="flex items-center justify-center w-full h-full p-2 gap-2">
            <Select
              name="empEmploymentRoleId"
              label="บทบาทหน้าที่"
              placeholder="เลือกบทบาทหน้าที่"
              size="md"
              variant="underlined"
              color="none"
              radius="lg"
              selectedKeys={
                formData.empEmploymentRoleId
                  ? [String(formData.empEmploymentRoleId)]
                  : []
              }
              onChange={handleInputChange("empEmploymentRoleId")}
              isInvalid={!!errors.empEmploymentRoleId}
              errorMessage={errors.empEmploymentRoleId}
            >
              {roleOptions.map((role) => (
                <SelectItem key={role.roleId} value={String(role.roleId)}>
                  {role.roleName}
                </SelectItem>
              ))}
            </Select>
          </div>
          <div className="flex items-center justify-center w-full h-full p-2 gap-2">
            <Select
              name="empEmploymentParentId"
              label="ผู้บังคับบัญชา"
              placeholder="เลือกผู้บังคับบัญชา"
              size="md"
              variant="underlined"
              color="none"
              radius="lg"
              isDisabled={!formData.empEmploymentDivisionId}
              selectedKeys={
                formData.empEmploymentParentId
                  ? [String(formData.empEmploymentParentId)]
                  : []
              }
              onChange={handleInputChange("empEmploymentParentId")}
              isInvalid={!!errors.empEmploymentParentId}
              errorMessage={errors.empEmploymentParentId}
            >
              {parentOptions.map((p) => (
                <SelectItem key={p.empId} value={String(p.empId)}>
                  {`${p.empFirstNameTH} ${p.empLastNameTH}`}
                </SelectItem>
              ))}
            </Select>
          </div>
        </div>

        <div className="flex flex-col xl:flex-row items-center justify-center w-full p-2 gap-2">
          <div className="flex items-center justify-center w-full h-full p-2 gap-2">
            <Input
              name="empEmploymentStartWork"
              type="date"
              label="วันที่เริ่มงาน"
              placeholder="กรุณากรอกข้อมูล"
              size="md"
              variant="underlined"
              color="none"
              radius="lg"
              value={formData.empEmploymentStartWork || ""}
              onChange={handleInputChange("empEmploymentStartWork")}
              isInvalid={!!errors.empEmploymentStartWork}
              errorMessage={errors.empEmploymentStartWork}
            />
          </div>
        </div>

        <div className="flex flex-col xl:flex-row items-center justify-center w-full p-2 gap-2">
          <div className="flex flex-col items-center justify-center w-full h-full p-2 gap-2">
            <div className="flex items-center justify-start w-full h-full p-2 gap-2">
              ลายเซ็น
            </div>
            {signaturePreview && !isEditingSignature ? (
              <>
                <div className="flex items-center justify-center w-full h-full p-2 gap-2">
                  <img
                    src={signaturePreview}
                    alt="Signature"
                    className="flex items-center justify-center w-full h-20 object-contain p-2 gap-2"
                  />
                </div>
                <div className="flex items-center justify-center w-full h-full p-2 gap-2">
                  <Button
                    color="primary"
                    size="md"
                    radius="lg"
                    className="flex items-center justify-center w-2/12 h-full p-3 gap-2"
                    onPress={() => setIsEditingSignature(true)}
                  >
                    Change Signature
                  </Button>
                </div>
              </>
            ) : (
              <>
                <SignatureCanvas
                  ref={signatureRef}
                  penColor="black"
                  canvasProps={{
                    className: "w-full signature-canvas border rounded-xl",
                  }}
                />
                <div className="flex flex-row items-center justify-end w-full h-full p-2 gap-2">
                  <Button
                    color="primary"
                    size="md"
                    radius="lg"
                    className="flex items-center justify-center w-2/12 h-full p-3 gap-2"
                    onPress={saveSignature}
                  >
                    บันทึก
                  </Button>
                  <Button
                    color="primary"
                    size="md"
                    radius="lg"
                    className="flex items-center justify-center w-2/12 h-full p-4 gap-2"
                    onPress={clearSignature}
                  >
                    ล้าง
                  </Button>
                  {signaturePreview && (
                    <Button
                      color="primary"
                      size="md"
                      radius="lg"
                      className="flex items-center justify-center w-2/12 h-full p-4 gap-2"
                      onPress={() => setIsEditingSignature(false)}
                    >
                      ยกเลิก
                    </Button>
                  )}
                </div>
              </>
            )}
          </div>
        </div>

        {formData.EmpEmploymentEmpBy?.empCitizen &&
          formData.EmpEmploymentEmpBy?.empCitizen !== "Thai" && (
            <>
              <div className="flex flex-col xl:flex-row items-center justify-center w-full h-full p-2 gap-2">
                <div className="flex items-center justify-start w-full h-full p-2 gap-2 border-b-1 border-default text-primary font-[600]">
                  สำหรับแรงงานต่างด้าว
                </div>
              </div>
              <div className="flex flex-col xl:flex-row items-center justify-center w-full h-full p-2 gap-2">
                <div className="flex items-center justify-center w-full h-full p-2 gap-2">
                  <Select
                    name="empEmploymentEnterType"
                    label="ประเภทของพนักงาน"
                    placeholder="Please Select Data"
                    size="md"
                    variant="underlined"
                    color="primary"
                    radius="lg"
                    value={formData.empEmploymentEnterType || ""}
                    selectedKeys={[formData.empEmploymentEnterType] || ""}
                    onChange={handleInputChange("empEmploymentEnterType")}
                    isInvalid={!!errors.empEmploymentEnterType}
                    errorMessage={errors.empEmploymentEnterType}
                  >
                    <SelectItem
                      className="select-item"
                      value="MOU นำเข้า บต.30 (ตามกำหนด)"
                      key="MOU นำเข้า บต.30 (ตามกำหนด)"
                    >
                      MOU นำเข้า บต.30 (ตามกำหนด)
                    </SelectItem>
                    <SelectItem
                      className="select-item"
                      value="MOU นำเข้า บต.25 (เกินกำหนด)"
                      key="MOU นำเข้า บต.25 (เกินกำหนด)"
                    >
                      MOU นำเข้า บต.25 (เกินกำหนด)
                    </SelectItem>
                    <SelectItem
                      className="select-item"
                      value="MOU ในThai"
                      key="MOU ในThai"
                    >
                      MOU ในThai
                    </SelectItem>
                    <SelectItem
                      className="select-item"
                      value="50อ1 บัตรชมพู มติครม. 20/8/62"
                      key="50อ1 บัตรชมพู มติครม. 20/8/62"
                    >
                      50อ1 บัตรชมพู มติครม. 20/8/62
                    </SelectItem>
                    <SelectItem
                      className="select-item"
                      value="บต.23 5001 บัตรชมพู มติครม. 4/8/63"
                      key="บต.23 5001 บัตรชมพู มติครม. 4/8/63"
                    >
                      บต.23 5001 บัตรชมพู มติครม. 4/8/63
                    </SelectItem>
                    <SelectItem
                      className="select-item"
                      value="บต.48 ใบอนุญาตทำงานสีน้ำเงิน มติครม. 29/12/63 (Online)"
                      key="บต.48 ใบอนุญาตทำงานสีน้ำเงิน มติครม. 29/12/63 (Online)"
                    >
                      บต.48 ใบอนุญาตทำงานสีน้ำเงิน มติครม. 29/12/63 (Online)
                    </SelectItem>
                    <SelectItem
                      className="select-item"
                      value="บต.50อ3 ใบอนุญาตทำงานสีน้ำเงิน มติครม. 28/9/64 (Online)"
                      key="บต.50อ3 ใบอนุญาตทำงานสีน้ำเงิน มติครม. 28/9/64 (Online)"
                    >
                      บต.50อ3 ใบอนุญาตทำงานสีน้ำเงิน มติครม. 28/9/64 (Online)
                    </SelectItem>
                    <SelectItem
                      className="select-item"
                      value="CI เล่มเขียว"
                      key="CI เล่มเขียว"
                    >
                      CI เล่มเขียว
                    </SelectItem>
                  </Select>
                </div>
                <div className="flex items-center justify-center w-full h-full p-2 gap-2">
                  <Input
                    name="empEmploymentPassportNumber"
                    type="text"
                    label="เลขที่ Passport NO"
                    placeholder="กรุณากรอกข้อมูล"
                    size="md"
                    variant="underlined"
                    color="primary"
                    radius="lg"
                    value={formData.empEmploymentPassportNumber}
                    onChange={handleInputChange("empEmploymentPassportNumber")}
                    isInvalid={!!errors.empEmploymentPassportNumber}
                    errorMessage={errors.empEmploymentPassportNumber}
                  />
                </div>
              </div>
              <div className="flex flex-col xl:flex-row items-center justify-center w-full h-full p-2 gap-2">
                <div className="flex items-center justify-center w-full h-full p-2 gap-2">
                  <Input
                    name="empEmploymentPassportStartDate"
                    type="date"
                    label="วันที่ออกหน้า Passport"
                    placeholder="กรุณากรอกข้อมูล"
                    size="md"
                    variant="underlined"
                    color="primary"
                    radius="lg"
                    value={formData.empEmploymentPassportStartDate}
                    onChange={handleInputChange(
                      "empEmploymentPassportStartDate"
                    )}
                    isInvalid={!!errors.empEmploymentPassportStartDate}
                    errorMessage={errors.empEmploymentPassportStartDate}
                  />
                </div>
                <div className="flex items-center justify-center w-full h-full p-2 gap-2">
                  <Input
                    name="empEmploymentPassportEndDate"
                    type="date"
                    label="วันที่หมดหน้า Passport"
                    placeholder="กรุณากรอกข้อมูล"
                    size="md"
                    variant="underlined"
                    color="primary"
                    radius="lg"
                    value={formData.empEmploymentPassportEndDate}
                    onChange={handleInputChange("empEmploymentPassportEndDate")}
                    isInvalid={!!errors.empEmploymentPassportEndDate}
                    errorMessage={errors.empEmploymentPassportEndDate}
                  />
                </div>
              </div>
              <div className="flex flex-col xl:flex-row items-center justify-center w-full h-full p-2 gap-2">
                <div className="flex items-center justify-center w-full h-full p-2 gap-2">
                  <Input
                    name="empEmploymentPassportIssuedBy"
                    type="text"
                    label="ออกให้โดย"
                    placeholder="กรุณากรอกข้อมูล"
                    size="md"
                    variant="underlined"
                    color="primary"
                    radius="lg"
                    value={formData.empEmploymentPassportIssuedBy}
                    onChange={handleInputChange(
                      "empEmploymentPassportIssuedBy"
                    )}
                    isInvalid={!!errors.empEmploymentPassportIssuedBy}
                    errorMessage={errors.empEmploymentPassportIssuedBy}
                  />
                </div>
                <div className="flex items-center justify-center w-full h-full p-2 gap-2">
                  <Input
                    name="empEmploymentPlaceOfBirth"
                    type="text"
                    label="สถานที่เกิด"
                    placeholder="กรุณากรอกข้อมูล"
                    size="md"
                    variant="underlined"
                    color="primary"
                    radius="lg"
                    value={formData.empEmploymentPlaceOfBirth}
                    onChange={handleInputChange("empEmploymentPlaceOfBirth")}
                    isInvalid={!!errors.empEmploymentPlaceOfBirth}
                    errorMessage={errors.empEmploymentPlaceOfBirth}
                  />
                </div>
              </div>
              <div className="flex flex-col xl:flex-row items-center justify-center w-full h-full p-2 gap-2">
                <div className="flex items-center justify-center w-full h-full p-2 gap-2">
                  <Input
                    name="empEmploymentEnterCheckPoint"
                    type="text"
                    label="เข้ามาทางด่าน"
                    placeholder="กรุณากรอกข้อมูล"
                    size="md"
                    variant="underlined"
                    color="primary"
                    radius="lg"
                    value={formData.empEmploymentEnterCheckPoint}
                    onChange={handleInputChange("empEmploymentEnterCheckPoint")}
                    isInvalid={!!errors.empEmploymentEnterCheckPoint}
                    errorMessage={errors.empEmploymentEnterCheckPoint}
                  />
                </div>
                <div className="flex items-center justify-center w-full h-full p-2 gap-2">
                  <Input
                    name="empEmploymentEnterDate"
                    type="date"
                    label="วันที่"
                    placeholder="กรุณากรอกข้อมูล"
                    size="md"
                    variant="underlined"
                    color="primary"
                    radius="lg"
                    value={formData.empEmploymentEnterDate}
                    onChange={handleInputChange("empEmploymentEnterDate")}
                    isInvalid={!!errors.empEmploymentEnterDate}
                    errorMessage={errors.empEmploymentEnterDate}
                  />
                </div>
              </div>
              <div className="flex flex-col xl:flex-row items-center justify-center w-full h-full p-2 gap-2">
                <div className="flex items-center justify-center w-full h-full p-2 gap-2">
                  <Input
                    name="empEmploymentImmigration"
                    type="text"
                    label="ตม ๖. ลำดับที่ "
                    placeholder="กรุณากรอกข้อมูล"
                    size="md"
                    variant="underlined"
                    color="primary"
                    radius="lg"
                    value={formData.empEmploymentImmigration}
                    onChange={handleInputChange("empEmploymentImmigration")}
                    isInvalid={!!errors.empEmploymentImmigration}
                    errorMessage={errors.empEmploymentImmigration}
                  />
                </div>
                <div className="flex items-center justify-center w-full h-full p-2 gap-2">
                  <Input
                    name="empEmploymentTypeOfVisa"
                    type="text"
                    label="ตรวจลงตราประเภท"
                    placeholder="กรุณากรอกข้อมูล"
                    size="md"
                    variant="underlined"
                    color="primary"
                    radius="lg"
                    value={formData.empEmploymentTypeOfVisa}
                    onChange={handleInputChange("empEmploymentTypeOfVisa")}
                    isInvalid={!!errors.empEmploymentTypeOfVisa}
                    errorMessage={errors.empEmploymentTypeOfVisa}
                  />
                </div>
              </div>
              <div className="flex flex-col xl:flex-row items-center justify-center w-full h-full p-2 gap-2">
                <div className="flex items-center justify-center w-full h-full p-2 gap-2">
                  <Input
                    name="empEmploymentVisaNumber"
                    type="text"
                    label="เลขที่"
                    placeholder="กรุณากรอกข้อมูล"
                    size="md"
                    variant="underlined"
                    color="primary"
                    radius="lg"
                    value={formData.empEmploymentVisaNumber}
                    onChange={handleInputChange("empEmploymentVisaNumber")}
                    isInvalid={!!errors.empEmploymentVisaNumber}
                    errorMessage={errors.empEmploymentVisaNumber}
                  />
                </div>
                <div className="flex items-center justify-center w-full h-full p-2 gap-2">
                  <Input
                    name="empEmploymentVisaIssuedBy"
                    type="text"
                    label="ออกให้ที่"
                    placeholder="กรุณากรอกข้อมูล"
                    size="md"
                    variant="underlined"
                    color="primary"
                    radius="lg"
                    value={formData.empEmploymentVisaIssuedBy}
                    onChange={handleInputChange("empEmploymentVisaIssuedBy")}
                    isInvalid={!!errors.empEmploymentVisaIssuedBy}
                    errorMessage={errors.empEmploymentVisaIssuedBy}
                  />
                </div>
              </div>
              <div className="flex flex-col xl:flex-row items-center justify-center w-full h-full p-2 gap-2">
                <div className="flex items-center justify-center w-full h-full p-2 gap-2">
                  <Input
                    name="empEmploymentWorkPermitNumber"
                    type="text"
                    label="ใบอนุญาตทำงานปัจจุบัน เลขที่"
                    placeholder="กรุณากรอกข้อมูล"
                    size="md"
                    variant="underlined"
                    color="primary"
                    radius="lg"
                    value={formData.empEmploymentWorkPermitNumber}
                    onChange={handleInputChange(
                      "empEmploymentWorkPermitNumber"
                    )}
                    isInvalid={!!errors.empEmploymentWorkPermitNumber}
                    errorMessage={errors.empEmploymentWorkPermitNumber}
                  />
                </div>
                <div className="flex items-center justify-center w-full h-full p-2 gap-2">
                  <Input
                    name="empEmploymentWorkPermitStartDate"
                    type="date"
                    label="ออกให้วันที่"
                    placeholder="กรุณากรอกข้อมูล"
                    size="md"
                    variant="underlined"
                    color="primary"
                    radius="lg"
                    value={formData.empEmploymentWorkPermitStartDate}
                    onChange={handleInputChange(
                      "empEmploymentWorkPermitStartDate"
                    )}
                    isInvalid={!!errors.empEmploymentWorkPermitStartDate}
                    errorMessage={errors.empEmploymentWorkPermitStartDate}
                  />
                </div>
              </div>
              <div className="flex flex-col xl:flex-row items-center justify-center w-full h-full p-2 gap-2">
                <div className="flex items-center justify-center w-full h-full p-2 gap-2">
                  <Input
                    name="empEmploymentWorkPermitEndDate"
                    type="date"
                    label="ใช้ได้ถึงวันที่"
                    placeholder="กรุณากรอกข้อมูล"
                    size="md"
                    variant="underlined"
                    color="primary"
                    radius="lg"
                    value={formData.empEmploymentWorkPermitEndDate}
                    onChange={handleInputChange(
                      "empEmploymentWorkPermitEndDate"
                    )}
                    isInvalid={!!errors.empEmploymentWorkPermitEndDate}
                    errorMessage={errors.empEmploymentWorkPermitEndDate}
                  />
                </div>
                <div className="flex items-center justify-center w-full h-full p-2 gap-2">
                  <Input
                    name="empEmploymentWorkPermitIssuedBy"
                    type="text"
                    label="ออกให้ที่จังหวัด"
                    placeholder="กรุณากรอกข้อมูล"
                    size="md"
                    variant="underlined"
                    color="primary"
                    radius="lg"
                    value={formData.empEmploymentWorkPermitIssuedBy}
                    onChange={handleInputChange(
                      "empEmploymentWorkPermitIssuedBy"
                    )}
                    isInvalid={!!errors.empEmploymentWorkPermitIssuedBy}
                    errorMessage={errors.empEmploymentWorkPermitIssuedBy}
                  />
                </div>
              </div>
              <div className="flex flex-col xl:flex-row items-center justify-center w-full h-full p-2 gap-2">
                <div className="flex items-center justify-center w-full h-full p-2 gap-2">
                  <Input
                    name="empEmploymentSsoNumber"
                    type="text"
                    label="เลขที่ประกันสังคม"
                    placeholder="กรุณากรอกข้อมูล"
                    size="md"
                    variant="underlined"
                    color="primary"
                    radius="lg"
                    value={formData.empEmploymentSsoNumber}
                    onChange={handleInputChange("empEmploymentSsoNumber")}
                    isInvalid={!!errors.empEmploymentSsoNumber}
                    errorMessage={errors.empEmploymentSsoNumber}
                  />
                </div>
                <div className="flex items-center justify-center w-full h-full p-2 gap-2">
                  <Input
                    name="empEmploymentSsoHospital"
                    type="text"
                    label="ชื่อสถานรักษาพยาบาล"
                    placeholder="กรุณากรอกข้อมูล"
                    size="md"
                    variant="underlined"
                    color="primary"
                    radius="lg"
                    value={formData.empEmploymentSsoHospital}
                    onChange={handleInputChange("empEmploymentSsoHospital")}
                    isInvalid={!!errors.empEmploymentSsoHospital}
                    errorMessage={errors.empEmploymentSsoHospital}
                  />
                </div>
              </div>
            </>
          )}

        <div className="flex flex-col xl:flex-row items-center justify-center w-full p-2 gap-2">
          <div className="flex items-center justify-center w-full h-full p-2 gap-2">
            <Input
              type="text"
              label="ดำเนินการโดย"
              placeholder="กรุณากรอกข้อมูล"
              size="md"
              variant="underlined"
              color="none"
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
