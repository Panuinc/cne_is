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
      <div className="flex flex-col items-center justify-center w-full p-2 gap-2 border-2 border-danger">
        <div className="flex items-center justify-center w-full h-full p-2 gap-2 border-2 border-dark">
          <Image
            src="/logoCompany/com-1.png"
            alt="com-1"
            width={75}
            height={75}
          />
        </div>
        <div className="flex items-center justify-center w-full h-full p-2 gap-2 border-2 border-dark text-xl font-[600]">
          บริษัท ชาญนคร วิศวกรรม จำกัด
        </div>
      </div>

      <div className="flex flex-col xl:flex-row items-center justify-center w-full p-2 gap-2 border-2 border-danger">
        <div className="flex flex-col items-center justify-center w-full xl:w-9/12 h-full p-2 gap-2 border-2 border-dark">
          <div className="flex items-center justify-center w-full h-full p-2 gap-2 border-2 border-dark text-lg font-[600]">
            ใบสมัครงาน
          </div>
          <div className="flex items-center justify-center w-full h-full p-2 gap-2 border-2 border-dark text-lg font-[600]">
            EMPLOYMENT APPLICATION
          </div>
        </div>
        <div className="flex flex-col items-center justify-center w-full xl:w-3/12 h-full p-2 gap-2 border-2 border-dark">
          <div className="flex items-center justify-center w-full h-full p-2 gap-2 border-2 border-dark">
            วันที่
          </div>
          <div className="flex items-center justify-center w-full h-full p-2 gap-2 border-2 border-dark">
            {formattedDate}
          </div>
        </div>
      </div>

      <div className="flex flex-col xl:flex-row items-center justify-center w-full p-2 gap-2 border-2 border-danger">
        <div className="flex flex-col items-center justify-center w-full xl:w-9/12 h-full p-2 gap-2 border-2 border-dark">
          <div className="flex flex-col items-center justify-center w-full px-2 py-4 gap-2 border-2 border-dark">
            <Input
              name="perReqDesiredSalary"
              label={
                <div className="flex flex-col text-start">
                  <span className="text-md">ตำแหน่งที่สมัคร</span>
                  <span className="text-sm font-[300]">Position</span>
                </div>
              }
              placeholder="Please Enter Data"
              type="text"
              size="md"
              variant="underlined"
              color="none"
              radius="full"
              // value={formData.perReqDesiredSalary || ""}
              // onChange={handleInputChange("perReqDesiredSalary")}
              // isInvalid={!!errors.perReqDesiredSalary}
              // errorMessage={errors.perReqDesiredSalary}
              // {...applyDisableProps({})}
            />
          </div>
          <div className="flex flex-col items-center justify-center w-full px-2 py-4 gap-2 border-2 border-dark">
            <Input
              name="perReqDesiredSalary"
              label={
                <div className="flex flex-col text-start">
                  <span className="text-md">เงินเดือนที่ต้องการ</span>
                  <span className="text-sm font-[300]">Expected salary</span>
                </div>
              }
              placeholder="Please Enter Data"
              type="text"
              size="md"
              variant="underlined"
              color="none"
              radius="full"
              // value={formData.perReqDesiredSalary || ""}
              // onChange={handleInputChange("perReqDesiredSalary")}
              // isInvalid={!!errors.perReqDesiredSalary}
              // errorMessage={errors.perReqDesiredSalary}
              // {...applyDisableProps({})}
            />
          </div>
        </div>
        <div className="flex flex-col items-center justify-center w-full xl:w-3/12 h-full p-2 gap-2 border-2 border-dark">
          <div className="flex items-center justify-center w-full h-full p-2 gap-2 border-2 border-dark">
            <Input
              name="perReqDesiredSalary"
              placeholder="รูปถ่าย 1 นิ้ว หรือ 2 นิ้ว"
              type="file"
              size="md"
              variant="underlined"
              color="none"
              radius="full"
              // value={formData.perReqDesiredSalary || ""}
              // onChange={handleInputChange("perReqDesiredSalary")}
              // isInvalid={!!errors.perReqDesiredSalary}
              // errorMessage={errors.perReqDesiredSalary}
              // {...applyDisableProps({})}
            />
          </div>
        </div>
      </div>

      <div className="flex flex-col items-center justify-center w-full p-2 gap-2 border-2 border-danger">
        <div className="flex items-center justify-center w-full h-full p-2 gap-2 border-2 border-dark text-lg font-[600]">
          ประวัติส่วนตัว
        </div>
        <div className="flex items-center justify-center w-full h-full p-2 gap-2 border-2 border-dark text-lg font-[600]">
          PERSONAL DATA
        </div>
      </div>

      <div className="flex flex-col items-center justify-center w-full p-2 gap-2 border-2 border-danger">
        <div className="flex flex-col items-center justify-center w-full px-2 py-4 gap-2 border-2 border-dark">
          <Input
            name="recruitFullNameTh"
            label={
              <div className="flex flex-col text-start">
                <span className="text-md">คำนำหน้าชื่อ นาย/นาง/นางสาว</span>
              </div>
            }
            placeholder="Please Enter Data"
            type="text"
            size="md"
            variant="underlined"
            color="none"
            radius="full"
            value={formData.recruitFullNameTh || ""}
            onChange={handleInputChange("recruitFullNameTh")}
            isInvalid={!!errors.recruitFullNameTh}
            errorMessage={errors.recruitFullNameTh}
          />
        </div>

        <div className="flex flex-col items-center justify-center w-full px-2 py-4 gap-2 border-2 border-dark">
          <Input
            name="recruitFullNameEn"
            label={
              <div className="flex flex-col text-start">
                <span className="text-md">Title Mr./Mrs./Miss</span>
              </div>
            }
            placeholder="Please Enter Data"
            type="text"
            size="md"
            variant="underlined"
            color="none"
            radius="full"
            value={formData.recruitFullNameEn || ""}
            onChange={handleInputChange("recruitFullNameEn")}
            isInvalid={!!errors.recruitFullNameEn}
            errorMessage={errors.recruitFullNameEn}
          />
        </div>

        <div className="flex flex-col items-center justify-center w-full px-2 py-4 gap-2 border-2 border-dark">
          <Input
            name="perReqDesiredSalary"
            label={
              <div className="flex flex-col text-start">
                <span className="text-md">ชื่อเล่น</span>
                <span className="text-sm font-[300]">Nickname</span>
              </div>
            }
            placeholder="Please Enter Data"
            type="text"
            size="md"
            variant="underlined"
            color="none"
            radius="full"
            // value={formData.perReqDesiredSalary || ""}
            // onChange={handleInputChange("perReqDesiredSalary")}
            // isInvalid={!!errors.perReqDesiredSalary}
            // errorMessage={errors.perReqDesiredSalary}
            // {...applyDisableProps({})}
          />
        </div>
      </div>

      <div className="flex flex-col items-center justify-center w-full p-2 gap-2 border-2 border-danger">
        <div className="flex flex-col xl:flex-row items-center justify-center w-full h-full p-2 gap-2 border-2 border-dark">
          <div className="flex flex-col items-center justify-center w-full px-2 py-4 gap-2 border-2 border-dark">
            <Input
              name="perReqDesiredSalary"
              label={
                <div className="flex flex-col text-start">
                  <span className="text-md">วัน เดือน ปี เกิด</span>
                  <span className="text-sm font-[300]">Date of Birth</span>
                </div>
              }
              placeholder="Please Enter Data"
              type="text"
              size="md"
              variant="underlined"
              color="none"
              radius="full"
              // value={formData.perReqDesiredSalary || ""}
              // onChange={handleInputChange("perReqDesiredSalary")}
              // isInvalid={!!errors.perReqDesiredSalary}
              // errorMessage={errors.perReqDesiredSalary}
              // {...applyDisableProps({})}
            />
          </div>

          <div className="flex flex-col items-center justify-center w-full px-2 py-4 gap-2 border-2 border-dark">
            <Input
              name="perReqDesiredSalary"
              label={
                <div className="flex flex-col text-start">
                  <span className="text-md">อายุ</span>
                  <span className="text-sm font-[300]">Age</span>
                </div>
              }
              placeholder="Please Enter Data"
              type="text"
              size="md"
              variant="underlined"
              color="none"
              radius="full"
              // value={formData.perReqDesiredSalary || ""}
              // onChange={handleInputChange("perReqDesiredSalary")}
              // isInvalid={!!errors.perReqDesiredSalary}
              // errorMessage={errors.perReqDesiredSalary}
              // {...applyDisableProps({})}
            />
          </div>

          <div className="flex flex-col items-center justify-center w-full px-2 py-4 gap-2 border-2 border-dark">
            <Input
              name="perReqDesiredSalary"
              label={
                <div className="flex flex-col text-start">
                  <span className="text-md">เพศ</span>
                  <span className="text-sm font-[300]">Gender</span>
                </div>
              }
              placeholder="Please Enter Data"
              type="text"
              size="md"
              variant="underlined"
              color="none"
              radius="full"
              // value={formData.perReqDesiredSalary || ""}
              // onChange={handleInputChange("perReqDesiredSalary")}
              // isInvalid={!!errors.perReqDesiredSalary}
              // errorMessage={errors.perReqDesiredSalary}
              // {...applyDisableProps({})}
            />
          </div>

          <div className="flex flex-col items-center justify-center w-full px-2 py-4 gap-2 border-2 border-dark">
            <Input
              name="perReqDesiredSalary"
              label={
                <div className="flex flex-col text-start">
                  <span className="text-md">สัญชาติ</span>
                  <span className="text-sm font-[300]">Nationality</span>
                </div>
              }
              placeholder="Please Enter Data"
              type="text"
              size="md"
              variant="underlined"
              color="none"
              radius="full"
              // value={formData.perReqDesiredSalary || ""}
              // onChange={handleInputChange("perReqDesiredSalary")}
              // isInvalid={!!errors.perReqDesiredSalary}
              // errorMessage={errors.perReqDesiredSalary}
              // {...applyDisableProps({})}
            />
          </div>
        </div>

        <div className="flex flex-col xl:flex-row items-center justify-center w-full h-full p-2 gap-2 border-2 border-dark">
          <div className="flex flex-col items-center justify-center w-full px-2 py-4 gap-2 border-2 border-dark">
            <Input
              name="perReqDesiredSalary"
              label={
                <div className="flex flex-col text-start">
                  <span className="text-md">ศาสนา</span>
                  <span className="text-sm font-[300]">Religion</span>
                </div>
              }
              placeholder="Please Enter Data"
              type="text"
              size="md"
              variant="underlined"
              color="none"
              radius="full"
              // value={formData.perReqDesiredSalary || ""}
              // onChange={handleInputChange("perReqDesiredSalary")}
              // isInvalid={!!errors.perReqDesiredSalary}
              // errorMessage={errors.perReqDesiredSalary}
              // {...applyDisableProps({})}
            />
          </div>

          <div className="flex flex-col items-center justify-center w-full px-2 py-4 gap-2 border-2 border-dark">
            <Input
              name="perReqDesiredSalary"
              label={
                <div className="flex flex-col text-start">
                  <span className="text-md">ส่วนสูง</span>
                  <span className="text-sm font-[300]">Hright</span>
                </div>
              }
              placeholder="Please Enter Data"
              type="text"
              size="md"
              variant="underlined"
              color="none"
              radius="full"
              // value={formData.perReqDesiredSalary || ""}
              // onChange={handleInputChange("perReqDesiredSalary")}
              // isInvalid={!!errors.perReqDesiredSalary}
              // errorMessage={errors.perReqDesiredSalary}
              // {...applyDisableProps({})}
            />
          </div>

          <div className="flex flex-col items-center justify-center w-full px-2 py-4 gap-2 border-2 border-dark">
            <Input
              name="perReqDesiredSalary"
              label={
                <div className="flex flex-col text-start">
                  <span className="text-md">น้ำหนัก</span>
                  <span className="text-sm font-[300]">Weight</span>
                </div>
              }
              placeholder="Please Enter Data"
              type="text"
              size="md"
              variant="underlined"
              color="none"
              radius="full"
              // value={formData.perReqDesiredSalary || ""}
              // onChange={handleInputChange("perReqDesiredSalary")}
              // isInvalid={!!errors.perReqDesiredSalary}
              // errorMessage={errors.perReqDesiredSalary}
              // {...applyDisableProps({})}
            />
          </div>

          <div className="flex flex-col items-center justify-center w-full px-2 py-4 gap-2 border-2 border-dark">
            <Input
              name="perReqDesiredSalary"
              label={
                <div className="flex flex-col text-start">
                  <span className="text-md">กรุ๊ปเลือด</span>
                  <span className="text-sm font-[300]">Blood Type</span>
                </div>
              }
              placeholder="Please Enter Data"
              type="text"
              size="md"
              variant="underlined"
              color="none"
              radius="full"
              // value={formData.perReqDesiredSalary || ""}
              // onChange={handleInputChange("perReqDesiredSalary")}
              // isInvalid={!!errors.perReqDesiredSalary}
              // errorMessage={errors.perReqDesiredSalary}
              // {...applyDisableProps({})}
            />
          </div>
        </div>
      </div>

      <div className="flex flex-col xl:flex-row items-center justify-center w-full p-2 gap-2 border-2 border-danger">
        <div className="flex flex-col items-center justify-start w-full h-full p-2 gap-2 border-2 border-dark">
          <div className="flex flex-col items-center justify-center w-full px-2 py-4 gap-2 border-2 border-dark">
            <Input
              name="perReqDesiredSalary"
              label={
                <div className="flex flex-col text-start">
                  <span className="text-md">เลขที่บัตรประชาชน</span>
                  <span className="text-sm font-[300]">
                    Identification card No.
                  </span>
                </div>
              }
              placeholder="Please Enter Data"
              type="text"
              size="md"
              variant="underlined"
              color="none"
              radius="full"
              // value={formData.perReqDesiredSalary || ""}
              // onChange={handleInputChange("perReqDesiredSalary")}
              // isInvalid={!!errors.perReqDesiredSalary}
              // errorMessage={errors.perReqDesiredSalary}
              // {...applyDisableProps({})}
            />
          </div>

          <div className="flex flex-col items-center justify-center w-full px-2 py-4 gap-2 border-2 border-dark">
            <Input
              name="perReqDesiredSalary"
              label={
                <div className="flex flex-col text-start">
                  <span className="text-md">วันที่ออกบัตร</span>
                  <span className="text-sm font-[300]">Date issued</span>
                </div>
              }
              placeholder="Please Enter Data"
              type="text"
              size="md"
              variant="underlined"
              color="none"
              radius="full"
              // value={formData.perReqDesiredSalary || ""}
              // onChange={handleInputChange("perReqDesiredSalary")}
              // isInvalid={!!errors.perReqDesiredSalary}
              // errorMessage={errors.perReqDesiredSalary}
              // {...applyDisableProps({})}
            />
          </div>
        </div>

        <div className="flex flex-col items-center justify-start w-full h-full p-2 gap-2 border-2 border-dark">
          <div className="flex flex-col items-center justify-center w-full px-2 py-4 gap-2 border-2 border-dark">
            <Input
              name="perReqDesiredSalary"
              label={
                <div className="flex flex-col text-start">
                  <span className="text-md">สถานที่ออกบัตร</span>
                  <span className="text-sm font-[300]">Issued at</span>
                </div>
              }
              placeholder="Please Enter Data"
              type="text"
              size="md"
              variant="underlined"
              color="none"
              radius="full"
              // value={formData.perReqDesiredSalary || ""}
              // onChange={handleInputChange("perReqDesiredSalary")}
              // isInvalid={!!errors.perReqDesiredSalary}
              // errorMessage={errors.perReqDesiredSalary}
              // {...applyDisableProps({})}
            />
          </div>

          <div className="flex flex-col items-center justify-center w-full px-2 py-4 gap-2 border-2 border-dark">
            <Input
              name="perReqDesiredSalary"
              label={
                <div className="flex flex-col text-start">
                  <span className="text-md">วันหมดอายุ</span>
                  <span className="text-sm font-[300]">Date Expired</span>
                </div>
              }
              placeholder="Please Enter Data"
              type="text"
              size="md"
              variant="underlined"
              color="none"
              radius="full"
              // value={formData.perReqDesiredSalary || ""}
              // onChange={handleInputChange("perReqDesiredSalary")}
              // isInvalid={!!errors.perReqDesiredSalary}
              // errorMessage={errors.perReqDesiredSalary}
              // {...applyDisableProps({})}
            />
          </div>
        </div>

        <div className="flex flex-col items-center justify-center w-full h-full p-2 gap-2 border-2 border-dark">
          <div className="flex flex-col items-center justify-center w-full px-2 py-4 gap-2 border-2 border-dark">
            <Input
              name="perReqDesiredSalary"
              label={
                <div className="flex flex-col text-start">
                  <span className="text-md">เบอร์โทรศัพท์</span>
                  <span className="text-sm font-[300]">Phone Number</span>
                </div>
              }
              placeholder="Please Enter Data"
              type="text"
              size="md"
              variant="underlined"
              color="none"
              radius="full"
              // value={formData.perReqDesiredSalary || ""}
              // onChange={handleInputChange("perReqDesiredSalary")}
              // isInvalid={!!errors.perReqDesiredSalary}
              // errorMessage={errors.perReqDesiredSalary}
              // {...applyDisableProps({})}
            />
          </div>

          <div className="flex flex-col items-center justify-center w-full px-2 py-4 gap-2 border-2 border-dark">
            <Input
              name="perReqDesiredSalary"
              label={
                <div className="flex flex-col text-start">
                  <span className="text-md">อีเมลล์</span>
                  <span className="text-sm font-[300]">Email</span>
                </div>
              }
              placeholder="Please Enter Data"
              type="text"
              size="md"
              variant="underlined"
              color="none"
              radius="full"
              // value={formData.perReqDesiredSalary || ""}
              // onChange={handleInputChange("perReqDesiredSalary")}
              // isInvalid={!!errors.perReqDesiredSalary}
              // errorMessage={errors.perReqDesiredSalary}
              // {...applyDisableProps({})}
            />
          </div>

          <div className="flex flex-col items-center justify-center w-full px-2 py-4 gap-2 border-2 border-dark">
            <Input
              name="perReqDesiredSalary"
              label={
                <div className="flex flex-col text-start">
                  <span className="text-md">ไอดีไลน์</span>
                  <span className="text-sm font-[300]">ID Line</span>
                </div>
              }
              placeholder="Please Enter Data"
              type="text"
              size="md"
              variant="underlined"
              color="none"
              radius="full"
              // value={formData.perReqDesiredSalary || ""}
              // onChange={handleInputChange("perReqDesiredSalary")}
              // isInvalid={!!errors.perReqDesiredSalary}
              // errorMessage={errors.perReqDesiredSalary}
              // {...applyDisableProps({})}
            />
          </div>
        </div>
      </div>

      <div className="flex flex-col items-center justify-center w-full p-2 gap-2 border-2 border-danger">
        <div className="flex flex-col items-center justify-center w-full px-2 py-4 gap-2 border-2 border-dark">
          <Input
            name="perReqDesiredSalary"
            label={
              <div className="flex flex-col text-start">
                <span className="text-md">
                  ที่อยู่ปัจจุบัน (Present Address)
                </span>
              </div>
            }
            placeholder="Please Enter Data"
            type="text"
            size="md"
            variant="underlined"
            color="none"
            radius="full"
            // value={formData.perReqDesiredSalary || ""}
            // onChange={handleInputChange("perReqDesiredSalary")}
            // isInvalid={!!errors.perReqDesiredSalary}
            // errorMessage={errors.perReqDesiredSalary}
            // {...applyDisableProps({})}
          />
        </div>
        <div className="flex flex-col items-center justify-center w-full px-2 py-4 gap-2 border-2 border-dark">
          <Input
            name="perReqDesiredSalary"
            label={
              <div className="flex flex-col text-start">
                <span className="text-md">
                  ที่อยู่ตามทะเบียนบ้าน (Registered Address)
                </span>
              </div>
            }
            placeholder="Please Enter Data"
            type="text"
            size="md"
            variant="underlined"
            color="none"
            radius="full"
            // value={formData.perReqDesiredSalary || ""}
            // onChange={handleInputChange("perReqDesiredSalary")}
            // isInvalid={!!errors.perReqDesiredSalary}
            // errorMessage={errors.perReqDesiredSalary}
            // {...applyDisableProps({})}
          />
        </div>
      </div>

      <div className="flex flex-col items-center justify-center w-full p-2 gap-2 border-2 border-danger">
        <div className="flex flex-row items-center justify-center w-full px-2 py-4 gap-2 border-2 border-dark">
          <Input
            name="perReqDesiredSalary"
            label={
              <div className="flex flex-col text-start">
                <span className="text-md">สถานภาพการสมรส</span>
                <span className="text-sm font-[300]">Marital Status</span>
              </div>
            }
            placeholder="Please Enter Data"
            type="text"
            size="md"
            variant="underlined"
            color="none"
            radius="full"
            // value={formData.perReqDesiredSalary || ""}
            // onChange={handleInputChange("perReqDesiredSalary")}
            // isInvalid={!!errors.perReqDesiredSalary}
            // errorMessage={errors.perReqDesiredSalary}
            // {...applyDisableProps({})}
          />
          <Input
            name="perReqDesiredSalary"
            label={
              <div className="flex flex-col text-start">
                <span className="text-md">
                  ถ้าสมรสแล้วคู่สมรสมีรายได้หรือไม่
                </span>
                <span className="text-sm font-[300]">
                  If married does the spouse has income?
                </span>
              </div>
            }
            placeholder="Please Enter Data"
            type="text"
            size="md"
            variant="underlined"
            color="none"
            radius="full"
            // value={formData.perReqDesiredSalary || ""}
            // onChange={handleInputChange("perReqDesiredSalary")}
            // isInvalid={!!errors.perReqDesiredSalary}
            // errorMessage={errors.perReqDesiredSalary}
            // {...applyDisableProps({})}
          />
        </div>
        <div className="flex flex-col items-center justify-center w-full px-2 py-4 gap-2 border-2 border-dark">
          <Input
            name="perReqDesiredSalary"
            label={
              <div className="flex flex-col text-start">
                <span className="text-md">จำนวนบุตร</span>
                <span className="text-sm font-[300]">Number of Children</span>
              </div>
            }
            placeholder="Please Enter Data"
            type="text"
            size="md"
            variant="underlined"
            color="none"
            radius="full"
            // value={formData.perReqDesiredSalary || ""}
            // onChange={handleInputChange("perReqDesiredSalary")}
            // isInvalid={!!errors.perReqDesiredSalary}
            // errorMessage={errors.perReqDesiredSalary}
            // {...applyDisableProps({})}
          />
        </div>
      </div>

      <div className="flex flex-col xl:flex-row items-center justify-center w-full p-2 gap-2 border-2 border-danger">
        <div className="flex flex-col items-center justify-center w-full px-2 py-4 gap-2 border-2 border-dark">
          <Input
            name="perReqDesiredSalary"
            label={
              <div className="flex flex-col text-start">
                <span className="text-md">สถานภาพทางทหาร</span>
                <span className="text-sm font-[300]">
                  Military Service Status
                </span>
              </div>
            }
            placeholder="Please Enter Data"
            type="text"
            size="md"
            variant="underlined"
            color="none"
            radius="full"
            // value={formData.perReqDesiredSalary || ""}
            // onChange={handleInputChange("perReqDesiredSalary")}
            // isInvalid={!!errors.perReqDesiredSalary}
            // errorMessage={errors.perReqDesiredSalary}
            // {...applyDisableProps({})}
          />
        </div>
      </div>
    </>
  );
}
