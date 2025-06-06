import { Input } from "@heroui/react";
import Image from "next/image";

export default function UIRecruitStep1({
  formData,
  handleInputChange,
  errors,
}) {
  const today = new Date();
  const formattedDate = today.toLocaleDateString("th-TH", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <>
      {/* ───────────────────── Header ───────────────────── */}
      <div className="flex flex-col items-center justify-center w-full p-2 gap-2 border-4 border-danger">
        <div className="flex items-center justify-center w-full h-full p-2 gap-2">
          <Image
            src="/logoCompany/com-1.png"
            alt="com-1"
            width={75}
            height={75}
          />
        </div>
        <div className="flex items-center justify-center w-full h-full p-2 gap-2 text-xl font-[600]">
          บริษัท ชาญนคร วิศวกรรม จำกัด
        </div>
        <div className="flex flex-col items-center justify-center w-full h-full p-2 gap-2 border-2 border-dark text-center text-xs">
          <span>
            50/1 ถนนงามวงศ์วาน แขวงลาดยาว เขตจตุจักร กรุงเทพ 10900
            โทร.0-2105-0999 (10 คู่สาย) แฟ็กซ์.0-2589-2932
          </span>
          <span>
            50/1 Ngamwongwan Road, Lat Yao Subdistrict, Chatuchak District,
            Bangkok 10900 Tel: 0-2105-0999 (10 lines) Fax: 0-2589-2932
          </span>
        </div>
      </div>

      {/* ───────────────────── Title & Date ───────────────────── */}
      <div className="flex flex-col xl:flex-row items-center justify-center w-full p-2 gap-2 border-4 border-danger">
        <div className="flex flex-col items-center justify-center w-full xl:w-10/12 h-full p-2 gap-2">
          <div className="flex items-center justify-center w-full h-full p-2 gap-2 text-lg font-[600]">
            ใบสมัครงาน
          </div>
          <div className="flex items-center justify-center w-full h-full p-2 gap-2 text-lg font-[600]">
            EMPLOYMENT APPLICATION
          </div>
        </div>
        <div className="flex flex-col items-start justify-center w-full xl:w-2/12 h-full p-2 gap-2">
          <span className="text-md font-[300]">วันที่</span>
          <span className="text-xs font-[300] border-b-2 border-dark w-full">
            {formattedDate}
          </span>
        </div>
      </div>

      {/* ───────────────────── Position & Salary ───────────────────── */}
      <div className="flex flex-col xl:flex-row items-center justify-center w-full p-2 gap-2 border-4 border-danger">
        <div className="flex flex-col items-center justify-center w-full xl:w-10/12 h-full p-2 gap-2 border-2 border-dark">
          {/* Position */}
          <div className="flex items-center justify-center w-full px-2 py-4 gap-4 border-2 border-dark">
            <div className="flex flex-col">
              <span className="text-md font-[300]">ตำแหน่งที่สมัคร</span>
              <span className="text-xs font-[300]">Position</span>
            </div>
            <Input
              id="recruitPosition"
              name="recruitPosition"
              type="text"
              size="md"
              variant="underlined"
              color="none"
              radius="full"
              className="flex-1"
              // value={formData.recruitPosition || ""}
              // onChange={handleInputChange("recruitPosition")}
              // isInvalid={!!errors.recruitPosition}
              // errorMessage={errors.recruitPosition}
            />
          </div>
          {/* Expected Salary */}
          <div className="flex items-center justify-center w-full px-2 py-4 gap-4 border-2 border-dark">
            <div className="flex flex-col">
              <span className="text-md font-[300]">เงินเดือนที่ต้องการ</span>
              <span className="text-xs font-[300]">Expected Salary</span>
            </div>
            <Input
              id="perReqDesiredSalary"
              name="perReqDesiredSalary"
              type="text"
              size="md"
              variant="underlined"
              color="none"
              radius="full"
              className="flex-1"
              // value={formData.perReqDesiredSalary || ""}
              // onChange={handleInputChange("perReqDesiredSalary")}
              // isInvalid={!!errors.perReqDesiredSalary}
              // errorMessage={errors.perReqDesiredSalary}
            />
          </div>
        </div>
        {/* Photo Upload */}
        <div className="flex flex-col items-center justify-center w-full xl:w-2/12 h-full p-2 gap-2 border-2 border-dark">
          <div className="flex items-center justify-center w-full h-full p-2 gap-4 border-2 border-dark">
            <div className="flex flex-col">
              <span className="text-md font-[300]">
                รูปถ่าย 1 นิ้ว หรือ 2 นิ้ว
              </span>
              <span className="text-xs font-[300]">Photo 1” or 2”</span>
            </div>
            <Input
              id="recruitPhoto"
              name="recruitPhoto"
              type="file"
              size="md"
              variant="underlined"
              color="none"
              radius="full"
              className="flex-1"
              // onChange={handleInputChange("recruitPhoto")}
              // isInvalid={!!errors.recruitPhoto}
              // errorMessage={errors.recruitPhoto}
            />
          </div>
        </div>
      </div>

      {/* ───────────────────── Personal Data Title ───────────────────── */}
      <div className="flex flex-col items-center justify-center w-full p-2 gap-2 border-4 border-danger">
        <div className="flex items-center justify-center w-full h-full p-2 gap-2 border-2 border-dark text-lg font-[600]">
          ประวัติส่วนตัว
        </div>
        <div className="flex items-center justify-center w-full h-full p-2 gap-2 border-2 border-dark text-lg font-[600]">
          PERSONAL DATA
        </div>
      </div>

      {/* ───────────────────── Full Name & Nickname ───────────────────── */}
      <div className="flex flex-col items-center justify-center w-full p-2 gap-2 border-4 border-danger">
        {/* FullName TH */}
        <div className="flex items-center justify-center w-full px-2 py-4 gap-4 border-2 border-dark">
          <div className="flex flex-col">
            <span className="text-md font-[300]">
              คำนำหน้าชื่อ นาย/นาง/นางสาว
            </span>
            <span className="text-xs font-[300]">Title (TH)</span>
          </div>
          <Input
            id="recruitFullNameTh"
            name="recruitFullNameTh"
            type="text"
            size="md"
            variant="underlined"
            color="none"
            radius="full"
            className="flex-1"
            // value={formData.recruitFullNameTh || ""}
            // onChange={handleInputChange("recruitFullNameTh")}
            // isInvalid={!!errors.recruitFullNameTh}
            // errorMessage={errors.recruitFullNameTh}
          />
        </div>
        {/* FullName EN */}
        <div className="flex items-center justify-center w-full px-2 py-4 gap-4 border-2 border-dark">
          <div className="flex flex-col">
            <span className="text-md font-[300]">Title Mr./Mrs./Miss</span>
            <span className="text-xs font-[300]">Title (EN)</span>
          </div>
          <Input
            id="recruitFullNameEn"
            name="recruitFullNameEn"
            type="text"
            size="md"
            variant="underlined"
            color="none"
            radius="full"
            className="flex-1"
            // value={formData.recruitFullNameEn || ""}
            // onChange={handleInputChange("recruitFullNameEn")}
            // isInvalid={!!errors.recruitFullNameEn}
            // errorMessage={errors.recruitFullNameEn}
          />
        </div>
        {/* Nickname */}
        <div className="flex items-center justify-center w-full px-2 py-4 gap-4 border-2 border-dark">
          <div className="flex flex-col">
            <span className="text-md font-[300]">ชื่อเล่น</span>
            <span className="text-xs font-[300]">Nickname</span>
          </div>
          <Input
            id="recruitNickname"
            name="recruitNickname"
            type="text"
            size="md"
            variant="underlined"
            color="none"
            radius="full"
            className="flex-1"
            // value={formData.recruitNickname || ""}
            // onChange={handleInputChange("recruitNickname")}
            // isInvalid={!!errors.recruitNickname}
            // errorMessage={errors.recruitNickname}
          />
        </div>
      </div>

      {/* ───────────────────── Birth / Age / Gender / Nationality ───────────────────── */}
      <div className="flex flex-col items-center justify-center w-full p-2 gap-2 border-4 border-danger">
        {/* Date of Birth */}
        <div className="flex flex-col xl:flex-row items-center justify-center w-full h-full p-2 gap-2 border-2 border-dark">
          {[
            {
              id: "recruitDob",
              labelTh: "วัน เดือน ปี เกิด",
              labelEn: "Date of Birth",
            },
            { id: "recruitAge", labelTh: "อายุ", labelEn: "Age" },
            { id: "recruitGender", labelTh: "เพศ", labelEn: "Gender" },
            {
              id: "recruitNationality",
              labelTh: "สัญชาติ",
              labelEn: "Nationality",
            },
          ].map((field) => (
            <div
              key={field.id}
              className="flex items-center justify-center w-full px-2 py-4 gap-4 border-2 border-dark"
            >
              <div className="flex flex-col">
                <span className="text-md font-[300]">{field.labelTh}</span>
                <span className="text-xs font-[300]">{field.labelEn}</span>
              </div>
              <Input
                id={field.id}
                name={field.id}
                type="text"
                size="md"
                variant="underlined"
                color="none"
                radius="full"
                className="flex-1"
                // value={formData[field.id] || ""}
                // onChange={handleInputChange(field.id)}
                // isInvalid={!!errors[field.id]}
                // errorMessage={errors[field.id]}
              />
            </div>
          ))}
        </div>
      </div>

      {/* ───────────────────── Religion / Height / Weight / Blood ───────────────────── */}
      <div className="flex flex-col items-center justify-center w-full p-2 gap-2 border-4 border-danger">
        <div className="flex flex-col xl:flex-row items-center justify-center w-full h-full p-2 gap-2 border-2 border-dark">
          {[
            { id: "recruitReligion", labelTh: "ศาสนา", labelEn: "Religion" },
            { id: "recruitHeight", labelTh: "ส่วนสูง", labelEn: "Height" },
            { id: "recruitWeight", labelTh: "น้ำหนัก", labelEn: "Weight" },
            {
              id: "recruitBlood",
              labelTh: "กรุ๊ปเลือด",
              labelEn: "Blood Type",
            },
          ].map((field) => (
            <div
              key={field.id}
              className="flex items-center justify-center w-full px-2 py-4 gap-4 border-2 border-dark"
            >
              <div className="flex flex-col">
                <span className="text-md font-[300]">{field.labelTh}</span>
                <span className="text-xs font-[300]">{field.labelEn}</span>
              </div>
              <Input
                id={field.id}
                name={field.id}
                type="text"
                size="md"
                variant="underlined"
                color="none"
                radius="full"
                className="flex-1"
                // value={formData[field.id] || ""}
                // onChange={handleInputChange(field.id)}
                // isInvalid={!!errors[field.id]}
                // errorMessage={errors[field.id]}
              />
            </div>
          ))}
        </div>
      </div>

      {/* ───────────────────── ID Card & Contact ───────────────────── */}
      <div className="flex flex-col xl:flex-row items-center justify-center w-full p-2 gap-2 border-4 border-danger">
        {/* Column 1 */}
        <div className="flex flex-col items-center justify-start w-full h-full p-2 gap-2 border-2 border-dark">
          {[
            {
              id: "recruitCardNo",
              labelTh: "เลขที่บัตรประชาชน",
              labelEn: "Identification card No.",
            },
            {
              id: "recruitCardIssuedDate",
              labelTh: "วันที่ออกบัตร",
              labelEn: "Date Issued",
            },
          ].map((field) => (
            <div
              key={field.id}
              className="flex items-center justify-center w-full px-2 py-4 gap-4 border-2 border-dark"
            >
              <div className="flex flex-col">
                <span className="text-md font-[300]">{field.labelTh}</span>
                <span className="text-xs font-[300]">{field.labelEn}</span>
              </div>
              <Input
                id={field.id}
                name={field.id}
                type="text"
                size="md"
                variant="underlined"
                color="none"
                radius="full"
                className="flex-1"
                // value={formData[field.id] || ""}
                // onChange={handleInputChange(field.id)}
                // isInvalid={!!errors[field.id]}
                // errorMessage={errors[field.id]}
              />
            </div>
          ))}
        </div>
        {/* Column 2 */}
        <div className="flex flex-col items-center justify-start w-full h-full p-2 gap-2 border-2 border-dark">
          {[
            {
              id: "recruitCardIssuedAt",
              labelTh: "สถานที่ออกบัตร",
              labelEn: "Issued at",
            },
            {
              id: "recruitCardExpired",
              labelTh: "วันหมดอายุ",
              labelEn: "Date Expired",
            },
          ].map((field) => (
            <div
              key={field.id}
              className="flex items-center justify-center w-full px-2 py-4 gap-4 border-2 border-dark"
            >
              <div className="flex flex-col">
                <span className="text-md font-[300]">{field.labelTh}</span>
                <span className="text-xs font-[300]">{field.labelEn}</span>
              </div>
              <Input
                id={field.id}
                name={field.id}
                type="text"
                size="md"
                variant="underlined"
                color="none"
                radius="full"
                className="flex-1"
                // value={formData[field.id] || ""}
                // onChange={handleInputChange(field.id)}
                // isInvalid={!!errors[field.id]}
                // errorMessage={errors[field.id]}
              />
            </div>
          ))}
        </div>
        {/* Column 3 */}
        <div className="flex flex-col items-center justify-center w-full h-full p-2 gap-2 border-2 border-dark">
          {[
            {
              id: "recruitPhone",
              labelTh: "เบอร์โทรศัพท์",
              labelEn: "Phone Number",
            },
            { id: "recruitEmail", labelTh: "อีเมลล์", labelEn: "Email" },
            { id: "recruitLineId", labelTh: "ไอดีไลน์", labelEn: "ID Line" },
          ].map((field) => (
            <div
              key={field.id}
              className="flex items-center justify-center w-full px-2 py-4 gap-4 border-2 border-dark"
            >
              <div className="flex flex-col">
                <span className="text-md font-[300]">{field.labelTh}</span>
                <span className="text-xs font-[300]">{field.labelEn}</span>
              </div>
              <Input
                id={field.id}
                name={field.id}
                type="text"
                size="md"
                variant="underlined"
                color="none"
                radius="full"
                className="flex-1"
                // value={formData[field.id] || ""}
                // onChange={handleInputChange(field.id)}
                // isInvalid={!!errors[field.id]}
                // errorMessage={errors[field.id]}
              />
            </div>
          ))}
        </div>
      </div>

      {/* ───────────────────── Addresses ───────────────────── */}
      <div className="flex flex-col items-center justify-center w-full p-2 gap-2 border-4 border-danger">
        {[
          {
            id: "recruitAddressPresent",
            label: "ที่อยู่ปัจจุบัน (Present Address)",
          },
          {
            id: "recruitAddressRegistered",
            label: "ที่อยู่ตามทะเบียนบ้าน (Registered Address)",
          },
        ].map((field) => (
          <div
            key={field.id}
            className="flex items-center justify-center w-full px-2 py-4 gap-4 border-2 border-dark"
          >
            <div className="flex flex-col">
              <span className="text-md font-[300]">{field.label}</span>
            </div>
            <Input
              id={field.id}
              name={field.id}
              type="text"
              size="md"
              variant="underlined"
              color="none"
              radius="full"
              className="flex-1"
              // value={formData[field.id] || ""}
              // onChange={handleInputChange(field.id)}
              // isInvalid={!!errors[field.id]}
              // errorMessage={errors[field.id]}
            />
          </div>
        ))}
      </div>

      {/* ───────────────────── Marital Status ───────────────────── */}
      <div className="flex flex-col items-center justify-center w-full p-2 gap-2 border-4 border-danger">
        <div className="flex flex-row items-center justify-center w-full px-2 py-4 gap-4 border-2 border-dark">
          <div className="flex flex-col">
            <span className="text-md font-[300]">สถานภาพการสมรส</span>
            <span className="text-xs font-[300]">Marital Status</span>
          </div>
          <Input
            id="recruitMaritalStatus"
            name="recruitMaritalStatus"
            type="text"
            size="md"
            variant="underlined"
            color="none"
            radius="full"
            className="flex-1"
            // value={formData.recruitMaritalStatus || ""}
            // onChange={handleInputChange("recruitMaritalStatus")}
            // isInvalid={!!errors.recruitMaritalStatus}
            // errorMessage={errors.recruitMaritalStatus}
          />
          <div className="flex flex-col">
            <span className="text-md font-[300]">
              ถ้าสมรสแล้วคู่สมรสมีรายได้หรือไม่
            </span>
            <span className="text-xs font-[300]">
              If married does the spouse has income?
            </span>
          </div>
          <Input
            id="recruitSpouseIncome"
            name="recruitSpouseIncome"
            type="text"
            size="md"
            variant="underlined"
            color="none"
            radius="full"
            className="flex-1"
            // value={formData.recruitSpouseIncome || ""}
            // onChange={handleInputChange("recruitSpouseIncome")}
            // isInvalid={!!errors.recruitSpouseIncome}
            // errorMessage={errors.recruitSpouseIncome}
          />
        </div>
        <div className="flex items-center justify-center w-full px-2 py-4 gap-4 border-2 border-dark">
          <div className="flex flex-col">
            <span className="text-md font-[300]">จำนวนบุตร</span>
            <span className="text-xs font-[300]">Number of Children</span>
          </div>
          <Input
            id="recruitChildren"
            name="recruitChildren"
            type="text"
            size="md"
            variant="underlined"
            color="none"
            radius="full"
            className="flex-1"
            // value={formData.recruitChildren || ""}
            // onChange={handleInputChange("recruitChildren")}
            // isInvalid={!!errors.recruitChildren}
            // errorMessage={errors.recruitChildren}
          />
        </div>
      </div>

      {/* ───────────────────── Military Status ───────────────────── */}
      <div className="flex flex-col xl:flex-row items-center justify-center w-full p-2 gap-2 border-4 border-danger">
        <div className="flex items-center justify-center w-full px-2 py-4 gap-4 border-2 border-dark">
          <div className="flex flex-col">
            <span className="text-md font-[300]">สถานภาพทางทหาร</span>
            <span className="text-xs font-[300]">Military Service Status</span>
          </div>
          <Input
            id="recruitMilitaryStatus"
            name="recruitMilitaryStatus"
            type="text"
            size="md"
            variant="underlined"
            color="none"
            radius="full"
            className="flex-1"
            // value={formData.recruitMilitaryStatus || ""}
            // onChange={handleInputChange("recruitMilitaryStatus")}
            // isInvalid={!!errors.recruitMilitaryStatus}
            // errorMessage={errors.recruitMilitaryStatus}
          />
        </div>
      </div>
    </>
  );
}
