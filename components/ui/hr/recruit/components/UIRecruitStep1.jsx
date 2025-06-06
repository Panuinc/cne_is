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
      {/* ──────────── Header ──────────── */}
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
        <div className="flex flex-col items-center justify-center w-full h-full p-2 gap-2 border-2 border-dark text-center text-sm leading-tight">
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

      {/* ──────────── Title & Date ──────────── */}
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
          <span className="text-md font-[600]">วันที่</span>
          <span className="text-sm font-[300] border-b-2 border-dark w-full">
            {formattedDate}
          </span>
        </div>
      </div>

      {/* ──────────── Position & Salary ──────────── */}
      <div className="flex flex-col xl:flex-row items-center justify-center w-full p-2 gap-2 border-4 border-danger">
        {/* Left column */}
        <div className="flex flex-col items-center justify-center w-full xl:w-10/12 h-full p-2 gap-2 border-2 border-dark">
          {/* Position */}
          <div className="flex items-center justify-center w-full px-2 py-4 gap-4 border-2 border-dark">
            <div className="flex flex-col">
              <span className="text-md font-[600]">ตำแหน่งที่สมัคร</span>
              <span className="text-sm font-[300]">Position</span>
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
          {/* Expected salary */}
          <div className="flex items-center justify-center w-full px-2 py-4 gap-4 border-2 border-dark">
            <div className="flex flex-col">
              <span className="text-md font-[600]">เงินเดือนที่ต้องการ</span>
              <span className="text-sm font-[300]">Expected Salary</span>
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
        {/* Right column – Photo */}
        <div className="flex flex-col items-center justify-center w-full xl:w-2/12 h-full p-2 gap-2 border-2 border-dark">
          <div className="flex items-center justify-center w-full h-full p-2 gap-4 border-2 border-dark">
            <div className="flex flex-col">
              <span className="text-md font-[600]">
                รูปถ่าย 1 นิ้ว หรือ 2 นิ้ว
              </span>
              <span className="text-sm font-[300]">Photo 1” or 2”</span>
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

      {/* ──────────── PERSONAL DATA heading ──────────── */}
      <div className="flex flex-col items-center justify-center w-full p-2 gap-2 border-4 border-danger">
        <div className="flex items-center justify-center w-full h-full p-2 gap-2 border-2 border-dark text-lg font-[600]">
          ประวัติส่วนตัว
        </div>
        <div className="flex items-center justify-center w-full h-full p-2 gap-2 border-2 border-dark text-lg font-[600]">
          PERSONAL DATA
        </div>
      </div>

      {/* ──────────── Full name & nickname ──────────── */}
      <div className="flex flex-col items-center justify-center w-full p-2 gap-2 border-4 border-danger">
        {/* TH title */}
        <div className="flex items-center justify-center w-full px-2 py-4 gap-4 border-2 border-dark">
          <div className="flex flex-col">
            <span className="text-md font-[600]">
              คำนำหน้าชื่อ นาย/นาง/นางสาว
            </span>
            <span className="text-sm font-[300]">Title (TH)</span>
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
        {/* EN title */}
        <div className="flex items-center justify-center w-full px-2 py-4 gap-4 border-2 border-dark">
          <div className="flex flex-col">
            <span className="text-md font-[600]">Title Mr./Mrs./Miss</span>
            <span className="text-sm font-[300]">Title (EN)</span>
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
            <span className="text-md font-[600]">ชื่อเล่น</span>
            <span className="text-sm font-[300]">Nickname</span>
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

      {/* ──────────── Birth / Age / Gender / Nationality ──────────── */}
      <div className="flex flex-col xl:flex-row items-center justify-center w-full p-2 gap-2 border-4 border-danger">
        {/* Date of birth */}
        <div className="flex items-center justify-center w-full px-2 py-4 gap-4 border-2 border-dark">
          <div className="flex flex-col">
            <span className="text-md font-[600]">วัน เดือน ปี เกิด</span>
            <span className="text-sm font-[300]">Date of Birth</span>
          </div>
          <Input
            id="recruitDob"
            name="recruitDob"
            type="text"
            size="md"
            variant="underlined"
            color="none"
            radius="full"
            className="flex-1"
            // value={formData.recruitDob || ""}
            // onChange={handleInputChange("recruitDob")}
            // isInvalid={!!errors.recruitDob}
            // errorMessage={errors.recruitDob}
          />
        </div>
        {/* Age */}
        <div className="flex items-center justify-center w-full px-2 py-4 gap-4 border-2 border-dark">
          <div className="flex flex-col">
            <span className="text-md font-[600]">อายุ</span>
            <span className="text-sm font-[300]">Age</span>
          </div>
          <Input
            id="recruitAge"
            name="recruitAge"
            type="text"
            size="md"
            variant="underlined"
            color="none"
            radius="full"
            className="flex-1"
            // value={formData.recruitAge || ""}
            // onChange={handleInputChange("recruitAge")}
            // isInvalid={!!errors.recruitAge}
            // errorMessage={errors.recruitAge}
          />
        </div>
        {/* Gender */}
        <div className="flex items-center justify-center w-full px-2 py-4 gap-4 border-2 border-dark">
          <div className="flex flex-col">
            <span className="text-md font-[600]">เพศ</span>
            <span className="text-sm font-[300]">Gender</span>
          </div>
          <Input
            id="recruitGender"
            name="recruitGender"
            type="text"
            size="md"
            variant="underlined"
            color="none"
            radius="full"
            className="flex-1"
            // value={formData.recruitGender || ""}
            // onChange={handleInputChange("recruitGender")}
            // isInvalid={!!errors.recruitGender}
            // errorMessage={errors.recruitGender}
          />
        </div>
        {/* Nationality */}
        <div className="flex items-center justify-center w-full px-2 py-4 gap-4 border-2 border-dark">
          <div className="flex flex-col">
            <span className="text-md font-[600]">สัญชาติ</span>
            <span className="text-sm font-[300]">Nationality</span>
          </div>
          <Input
            id="recruitNationality"
            name="recruitNationality"
            type="text"
            size="md"
            variant="underlined"
            color="none"
            radius="full"
            className="flex-1"
            // value={formData.recruitNationality || ""}
            // onChange={handleInputChange("recruitNationality")}
            // isInvalid={!!errors.recruitNationality}
            // errorMessage={errors.recruitNationality}
          />
        </div>
      </div>

      {/* ──────────── Religion / Height / Weight / Blood type ──────────── */}
      <div className="flex flex-col xl:flex-row items-center justify-center w-full p-2 gap-2 border-4 border-danger">
        {/* Religion */}
        <div className="flex items-center justify-center w-full px-2 py-4 gap-4 border-2 border-dark">
          <div className="flex flex-col">
            <span className="text-md font-[600]">ศาสนา</span>
            <span className="text-sm font-[300]">Religion</span>
          </div>
          <Input
            id="recruitReligion"
            name="recruitReligion"
            type="text"
            size="md"
            variant="underlined"
            color="none"
            radius="full"
            className="flex-1"
            // value={formData.recruitReligion || ""}
            // onChange={handleInputChange("recruitReligion")}
            // isInvalid={!!errors.recruitReligion}
            // errorMessage={errors.recruitReligion}
          />
        </div>
        {/* Height */}
        <div className="flex items-center justify-center w-full px-2 py-4 gap-4 border-2 border-dark">
          <div className="flex flex-col">
            <span className="text-md font-[600]">ส่วนสูง</span>
            <span className="text-sm font-[300]">Height</span>
          </div>
          <Input
            id="recruitHeight"
            name="recruitHeight"
            type="text"
            size="md"
            variant="underlined"
            color="none"
            radius="full"
            className="flex-1"
            // value={formData.recruitHeight || ""}
            // onChange={handleInputChange("recruitHeight")}
            // isInvalid={!!errors.recruitHeight}
            // errorMessage={errors.recruitHeight}
          />
        </div>
        {/* Weight */}
        <div className="flex items-center justify-center w-full px-2 py-4 gap-4 border-2 border-dark">
          <div className="flex flex-col">
            <span className="text-md font-[600]">น้ำหนัก</span>
            <span className="text-sm font-[300]">Weight</span>
          </div>
          <Input
            id="recruitWeight"
            name="recruitWeight"
            type="text"
            size="md"
            variant="underlined"
            color="none"
            radius="full"
            className="flex-1"
            // value={formData.recruitWeight || ""}
            // onChange={handleInputChange("recruitWeight")}
            // isInvalid={!!errors.recruitWeight}
            // errorMessage={errors.recruitWeight}
          />
        </div>
        {/* Blood type */}
        <div className="flex items-center justify-center w-full px-2 py-4 gap-4 border-2 border-dark">
          <div className="flex flex-col">
            <span className="text-md font-[600]">กรุ๊ปเลือด</span>
            <span className="text-sm font-[300]">Blood Type</span>
          </div>
          <Input
            id="recruitBlood"
            name="recruitBlood"
            type="text"
            size="md"
            variant="underlined"
            color="none"
            radius="full"
            className="flex-1"
            // value={formData.recruitBlood || ""}
            // onChange={handleInputChange("recruitBlood")}
            // isInvalid={!!errors.recruitBlood}
            // errorMessage={errors.recruitBlood}
          />
        </div>
      </div>

      {/* ──────────── ID card & contacts ──────────── */}
      <div className="flex flex-col xl:flex-row items-center justify-center w-full p-2 gap-2 border-4 border-danger">
        {/* Column 1 */}
        <div className="flex flex-col items-center justify-start w-full h-full p-2 gap-2 border-2 border-dark">
          {/* Card number */}
          <div className="flex items-center justify-center w-full px-2 py-4 gap-4 border-2 border-dark">
            <div className="flex flex-col">
              <span className="text-md font-[600]">เลขที่บัตรประชาชน</span>
              <span className="text-sm font-[300]">
                Identification card No.
              </span>
            </div>
            <Input
              id="recruitCardNo"
              name="recruitCardNo"
              type="text"
              size="md"
              variant="underlined"
              color="none"
              radius="full"
              className="flex-1"
              // value={formData.recruitCardNo || ""}
              // onChange={handleInputChange("recruitCardNo")}
              // isInvalid={!!errors.recruitCardNo}
              // errorMessage={errors.recruitCardNo}
            />
          </div>
          {/* Card issued date */}
          <div className="flex items-center justify-center w-full px-2 py-4 gap-4 border-2 border-dark">
            <div className="flex flex-col">
              <span className="text-md font-[600]">วันที่ออกบัตร</span>
              <span className="text-sm font-[300]">Date issued</span>
            </div>
            <Input
              id="recruitCardIssuedDate"
              name="recruitCardIssuedDate"
              type="text"
              size="md"
              variant="underlined"
              color="none"
              radius="full"
              className="flex-1"
              // value={formData.recruitCardIssuedDate || ""}
              // onChange={handleInputChange("recruitCardIssuedDate")}
              // isInvalid={!!errors.recruitCardIssuedDate}
              // errorMessage={errors.recruitCardIssuedDate}
            />
          </div>
        </div>

        {/* Column 2 */}
        <div className="flex flex-col items-center justify-start w-full h-full p-2 gap-2 border-2 border-dark">
          {/* Card issued at */}
          <div className="flex items-center justify-center w-full px-2 py-4 gap-4 border-2 border-dark">
            <div className="flex flex-col">
              <span className="text-md font-[600]">สถานที่ออกบัตร</span>
              <span className="text-sm font-[300]">Issued at</span>
            </div>
            <Input
              id="recruitCardIssuedAt"
              name="recruitCardIssuedAt"
              type="text"
              size="md"
              variant="underlined"
              color="none"
              radius="full"
              className="flex-1"
              // value={formData.recruitCardIssuedAt || ""}
              // onChange={handleInputChange("recruitCardIssuedAt")}
              // isInvalid={!!errors.recruitCardIssuedAt}
              // errorMessage={errors.recruitCardIssuedAt}
            />
          </div>
          {/* Card expired */}
          <div className="flex items-center justify-center w-full px-2 py-4 gap-4 border-2 border-dark">
            <div className="flex flex-col">
              <span className="text-md font-[600]">วันหมดอายุ</span>
              <span className="text-sm font-[300]">Date Expired</span>
            </div>
            <Input
              id="recruitCardExpired"
              name="recruitCardExpired"
              type="text"
              size="md"
              variant="underlined"
              color="none"
              radius="full"
              className="flex-1"
              // value={formData.recruitCardExpired || ""}
              // onChange={handleInputChange("recruitCardExpired")}
              // isInvalid={!!errors.recruitCardExpired}
              // errorMessage={errors.recruitCardExpired}
            />
          </div>
        </div>

        {/* Column 3 */}
        <div className="flex flex-col items-center justify-center w-full h-full p-2 gap-2 border-2 border-dark">
          {/* Phone */}
          <div className="flex items-center justify-center w-full px-2 py-4 gap-4 border-2 border-dark">
            <div className="flex flex-col">
              <span className="text-md font-[600]">เบอร์โทรศัพท์</span>
              <span className="text-sm font-[300]">Phone Number</span>
            </div>
            <Input
              id="recruitPhone"
              name="recruitPhone"
              type="text"
              size="md"
              variant="underlined"
              color="none"
              radius="full"
              className="flex-1"
              // value={formData.recruitPhone || ""}
              // onChange={handleInputChange("recruitPhone")}
              // isInvalid={!!errors.recruitPhone}
              // errorMessage={errors.recruitPhone}
            />
          </div>
          {/* Email */}
          <div className="flex items-center justify-center w-full px-2 py-4 gap-4 border-2 border-dark">
            <div className="flex flex-col">
              <span className="text-md font-[600]">อีเมลล์</span>
              <span className="text-sm font-[300]">Email</span>
            </div>
            <Input
              id="recruitEmail"
              name="recruitEmail"
              type="text"
              size="md"
              variant="underlined"
              color="none"
              radius="full"
              className="flex-1"
              // value={formData.recruitEmail || ""}
              // onChange={handleInputChange("recruitEmail")}
              // isInvalid={!!errors.recruitEmail}
              // errorMessage={errors.recruitEmail}
            />
          </div>
          {/* Line ID */}
          <div className="flex items-center justify-center w-full px-2 py-4 gap-4 border-2 border-dark">
            <div className="flex flex-col">
              <span className="text-md font-[600]">ไอดีไลน์</span>
              <span className="text-sm font-[300]">ID Line</span>
            </div>
            <Input
              id="recruitLineId"
              name="recruitLineId"
              type="text"
              size="md"
              variant="underlined"
              color="none"
              radius="full"
              className="flex-1"
              // value={formData.recruitLineId || ""}
              // onChange={handleInputChange("recruitLineId")}
              // isInvalid={!!errors.recruitLineId}
              // errorMessage={errors.recruitLineId}
            />
          </div>
        </div>
      </div>

      {/* ──────────── Addresses ──────────── */}
      <div className="flex flex-col items-center justify-center w-full p-2 gap-2 border-4 border-danger">
        {/* Present address */}
        <div className="flex items-center justify-center w-full px-2 py-4 gap-4 border-2 border-dark">
          <div className="flex flex-col">
            <span className="text-md font-[600]">
              ที่อยู่ปัจจุบัน (Present Address)
            </span>
          </div>
          <Input
            id="recruitAddressPresent"
            name="recruitAddressPresent"
            type="text"
            size="md"
            variant="underlined"
            color="none"
            radius="full"
            className="flex-1"
            // value={formData.recruitAddressPresent || ""}
            // onChange={handleInputChange("recruitAddressPresent")}
            // isInvalid={!!errors.recruitAddressPresent}
            // errorMessage={errors.recruitAddressPresent}
          />
        </div>
        {/* Registered address */}
        <div className="flex items-center justify-center w-full px-2 py-4 gap-4 border-2 border-dark">
          <div className="flex flex-col">
            <span className="text-md font-[600]">
              ที่อยู่ตามทะเบียนบ้าน (Registered Address)
            </span>
          </div>
          <Input
            id="recruitAddressRegistered"
            name="recruitAddressRegistered"
            type="text"
            size="md"
            variant="underlined"
            color="none"
            radius="full"
            className="flex-1"
            // value={formData.recruitAddressRegistered || ""}
            // onChange={handleInputChange("recruitAddressRegistered")}
            // isInvalid={!!errors.recruitAddressRegistered}
            // errorMessage={errors.recruitAddressRegistered}
          />
        </div>
      </div>

      {/* ──────────── Marital status ──────────── */}
      <div className="flex flex-col items-center justify-center w-full p-2 gap-2 border-4 border-danger">
        {/* Row 1 */}
        <div className="flex flex-row items-center justify-center w-full px-2 py-4 gap-4 border-2 border-dark">
          {/* Marital status */}
          <div className="flex flex-col">
            <span className="text-md font-[600]">สถานภาพการสมรส</span>
            <span className="text-sm font-[300]">Marital Status</span>
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
          {/* Spouse income */}
          <div className="flex flex-col">
            <span className="text-md font-[600]">
              ถ้าสมรสแล้วคู่สมรสมีรายได้หรือไม่
            </span>
            <span className="text-sm font-[300]">
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
        {/* Row 2 – children */}
        <div className="flex items-center justify-center w-full px-2 py-4 gap-4 border-2 border-dark">
          <div className="flex flex-col">
            <span className="text-md font-[600]">จำนวนบุตร</span>
            <span className="text-sm font-[300]">Number of Children</span>
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

      {/* ──────────── Military status ──────────── */}
      <div className="flex flex-col xl:flex-row items-center justify-center w-full p-2 gap-2 border-4 border-danger">
        <div className="flex items-center justify-center w-full px-2 py-4 gap-4 border-2 border-dark">
          <div className="flex flex-col">
            <span className="text-md font-[600]">สถานภาพทางทหาร</span>
            <span className="text-sm font-[300]">Military Service Status</span>
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
