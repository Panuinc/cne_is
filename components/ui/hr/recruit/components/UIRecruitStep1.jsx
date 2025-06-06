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
        <div className="flex flex-row items-center justify-center w-full h-full p-2 gap-2 border-2 border-dark">
          <div className="flex flex-col items-center justify-center w-full xl:w-9/12 h-full p-2 gap-2 border-2 border-dark">
            <div className="flex items-center justify-center w-full h-full p-2 gap-2 border-2 border-dark text-lg font-[600]">
              ใบสมัครงาน
            </div>
            <div className="flex items-center justify-center w-full h-full p-2 gap-2 border-2 border-dark text-lg font-[600]">
              EMPLOYMENT APPLICATION
            </div>
          </div>
          <div className="flex items-center justify-center xl:w-3/12 h-full p-2 gap-2 border-2 border-dark">
            วันที่ {formattedDate}
          </div>
        </div>
      </div>

      <div className="flex flex-col xl:flex-row items-center justify-center w-full p-2 gap-2 border-2 border-danger">
        <div className="flex flex-col items-center justify-center w-full xl:w-9/12 h-full p-2 gap-2 border-2 border-dark">
          <div className="flex items-center justify-start w-full h-full p-2 gap-2 border-2 border-dark text-lg font-[600]">
            ตำแหน่งที่สมัคร
          </div>
          <div className="flex flex-col items-center justify-start w-full h-full p-2 border-2 border-dark">
            <div className="flex flex-col items-center justify-start w-full h-full p-2 border-2 border-dark">
              <div className="flex items-center justify-start w-full h-full p-2 gap-2 border-2 border-dark text-md font-[600]">
                เงินเดือนที่ต้องการ
              </div>
              <div className="flex items-center justify-start w-full h-full p-2 gap-2 border-2 border-dark text-sm font-[300]">
                Expected salary
              </div>
            </div>
            <div className="flex items-center justify-start w-full h-full p-2 gap-2 border-2 border-dark">
              <Input
                name="perReqDesiredSalary"
                placeholder="กรอกจำนวนเงิน (บาท)"
                type="number"
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

      <div className="flex flex-col xl:flex-row items-center justify-center w-full p-2 gap-2 border-2 border-danger">
        <div className="flex items-center justify-start w-full xl:w-3/12 h-full p-2 gap-2 border-2 border-dark">
          คำนำหน้าชื่อ นาย/นาง/นางสาว
        </div>
        <div className="flex items-center justify-center w-full xl:w-9/12 h-full p-2 gap-2 border-2 border-dark">
          <Input
            name="perReqDesiredSalary"
            placeholder="กรอกจำนวนเงิน (บาท)"
            type="number"
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
        <div className="flex items-center justify-start w-full xl:w-3/12 h-full p-2 gap-2 border-2 border-dark">
          Title Mr./Mrs./Miss
        </div>
        <div className="flex items-center justify-center w-full xl:w-9/12 h-full p-2 gap-2 border-2 border-dark">
          <Input
            name="perReqDesiredSalary"
            placeholder="กรอกจำนวนเงิน (บาท)"
            type="number"
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
        <div className="flex items-center justify-start w-full xl:w-3/12 h-full p-2 gap-2 border-2 border-dark">
          ชื่อเล่น
        </div>
        <div className="flex items-center justify-center w-full xl:w-9/12 h-full p-2 gap-2 border-2 border-dark">
          <Input
            name="perReqDesiredSalary"
            placeholder="กรอกจำนวนเงิน (บาท)"
            type="number"
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
        <div className="flex flex-col items-center justify-center w-full h-full p-2 gap-2 border-2 border-dark">
          <div className="flex flex-col items-center justify-start w-full h-full p-2 border-2 border-dark">
            <div className="flex items-center justify-start w-full h-full p-2 gap-2 border-2 border-dark text-md font-[600]">
              เงินเดื วัน เดือน ปี เกิดอนที่ต้องการ
            </div>
            <div className="flex items-center justify-start w-full h-full p-2 gap-2 border-2 border-dark text-sm font-[300]">
              Date of Birth
            </div>
          </div>
          <div className="flex items-center justify-center w-full  h-full p-2 gap-2 border-2 border-dark">
            <Input
              name="perReqDesiredSalary"
              placeholder="กรอกจำนวนเงิน (บาท)"
              type="number"
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
          <div className="flex flex-col items-center justify-start w-full h-full p-2 border-2 border-dark">
            <div className="flex items-center justify-start w-full h-full p-2 gap-2 border-2 border-dark text-md font-[600]">
              อายุ
            </div>
            <div className="flex items-center justify-start w-full h-full p-2 gap-2 border-2 border-dark text-sm font-[300]">
              Age
            </div>
          </div>
          <div className="flex items-center justify-center w-full  h-full p-2 gap-2 border-2 border-dark">
            <Input
              name="perReqDesiredSalary"
              placeholder="กรอกจำนวนเงิน (บาท)"
              type="number"
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
          <div className="flex flex-col items-center justify-start w-full h-full p-2 border-2 border-dark">
            <div className="flex items-center justify-start w-full h-full p-2 gap-2 border-2 border-dark text-md font-[600]">
              เพศ
            </div>
            <div className="flex items-center justify-start w-full h-full p-2 gap-2 border-2 border-dark text-sm font-[300]">
              Gender
            </div>
          </div>
          <div className="flex items-center justify-center w-full  h-full p-2 gap-2 border-2 border-dark">
            <Input
              name="perReqDesiredSalary"
              placeholder="กรอกจำนวนเงิน (บาท)"
              type="number"
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
          <div className="flex flex-col items-center justify-start w-full h-full p-2 border-2 border-dark">
            <div className="flex items-center justify-start w-full h-full p-2 gap-2 border-2 border-dark text-md font-[600]">
              สัญชาติ
            </div>
            <div className="flex items-center justify-start w-full h-full p-2 gap-2 border-2 border-dark text-sm font-[300]">
              Nationality
            </div>
          </div>
          <div className="flex items-center justify-center w-full  h-full p-2 gap-2 border-2 border-dark">
            <Input
              name="perReqDesiredSalary"
              placeholder="กรอกจำนวนเงิน (บาท)"
              type="number"
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
        <div className="flex flex-col items-center justify-center w-full h-full p-2 gap-2 border-2 border-dark">
          <div className="flex flex-col items-center justify-start w-full h-full p-2 border-2 border-dark">
            <div className="flex items-center justify-start w-full h-full p-2 gap-2 border-2 border-dark text-md font-[600]">
              ศาสนา
            </div>
            <div className="flex items-center justify-start w-full h-full p-2 gap-2 border-2 border-dark text-sm font-[300]">
              Religion
            </div>
          </div>
          <div className="flex items-center justify-center w-full  h-full p-2 gap-2 border-2 border-dark">
            <Input
              name="perReqDesiredSalary"
              placeholder="กรอกจำนวนเงิน (บาท)"
              type="number"
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
          <div className="flex flex-col items-center justify-start w-full h-full p-2 border-2 border-dark">
            <div className="flex items-center justify-start w-full h-full p-2 gap-2 border-2 border-dark text-md font-[600]">
              ส่วนสูง
            </div>
            <div className="flex items-center justify-start w-full h-full p-2 gap-2 border-2 border-dark text-sm font-[300]">
              Hright
            </div>
          </div>
          <div className="flex items-center justify-center w-full  h-full p-2 gap-2 border-2 border-dark">
            <Input
              name="perReqDesiredSalary"
              placeholder="กรอกจำนวนเงิน (บาท)"
              type="number"
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
          <div className="flex flex-col items-center justify-start w-full h-full p-2 border-2 border-dark">
            <div className="flex items-center justify-start w-full h-full p-2 gap-2 border-2 border-dark text-md font-[600]">
              น้ำหนัก
            </div>
            <div className="flex items-center justify-start w-full h-full p-2 gap-2 border-2 border-dark text-sm font-[300]">
              Weight
            </div>
          </div>
          <div className="flex items-center justify-center w-full  h-full p-2 gap-2 border-2 border-dark">
            <Input
              name="perReqDesiredSalary"
              placeholder="กรอกจำนวนเงิน (บาท)"
              type="number"
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
          <div className="flex flex-col items-center justify-start w-full h-full p-2 border-2 border-dark">
            <div className="flex items-center justify-start w-full h-full p-2 gap-2 border-2 border-dark text-md font-[600]">
              กรุ๊ปเลือด
            </div>
            <div className="flex items-center justify-start w-full h-full p-2 gap-2 border-2 border-dark text-sm font-[300]">
              Blood Type
            </div>
          </div>
          <div className="flex items-center justify-center w-full  h-full p-2 gap-2 border-2 border-dark">
            <Input
              name="perReqDesiredSalary"
              placeholder="กรอกจำนวนเงิน (บาท)"
              type="number"
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
        <div className="flex flex-col items-center justify-center w-full h-full p-2 gap-2 border-2 border-dark">
          <div className="flex flex-col items-center justify-center w-full h-full p-2 gap-2 border-2 border-dark">
            <div className="flex flex-col items-center justify-start w-full h-full p-2 border-2 border-dark">
              <div className="flex items-center justify-start w-full h-full p-2 gap-2 border-2 border-dark text-md font-[600]">
                เลขที่บัตรประชาชน
              </div>
              <div className="flex items-center justify-start w-full h-full p-2 gap-2 border-2 border-dark text-sm font-[300]">
                Identification card No.
              </div>
            </div>
            <div className="flex items-center justify-center w-full  h-full p-2 gap-2 border-2 border-dark">
              <Input
                name="perReqDesiredSalary"
                placeholder="กรอกจำนวนเงิน (บาท)"
                type="number"
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
            <div className="flex flex-col items-center justify-start w-full h-full p-2 border-2 border-dark">
              <div className="flex items-center justify-start w-full h-full p-2 gap-2 border-2 border-dark text-md font-[600]">
                วันที่ออกบัตร
              </div>
              <div className="flex items-center justify-start w-full h-full p-2 gap-2 border-2 border-dark text-sm font-[300]">
                Date issued
              </div>
            </div>
            <div className="flex items-center justify-center w-full  h-full p-2 gap-2 border-2 border-dark">
              <Input
                name="perReqDesiredSalary"
                placeholder="กรอกจำนวนเงิน (บาท)"
                type="number"
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

        <div className="flex flex-col items-center justify-center w-full h-full p-2 gap-2 border-2 border-dark">
          <div className="flex flex-col items-center justify-center w-full h-full p-2 gap-2 border-2 border-dark">
            <div className="flex flex-col items-center justify-start w-full h-full p-2 border-2 border-dark">
              <div className="flex items-center justify-start w-full h-full p-2 gap-2 border-2 border-dark text-md font-[600]">
                สถานที่ออกบัตร
              </div>
              <div className="flex items-center justify-start w-full h-full p-2 gap-2 border-2 border-dark text-sm font-[300]">
                Issued at
              </div>
            </div>
            <div className="flex items-center justify-center w-full  h-full p-2 gap-2 border-2 border-dark">
              <Input
                name="perReqDesiredSalary"
                placeholder="กรอกจำนวนเงิน (บาท)"
                type="number"
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
            <div className="flex flex-col items-center justify-start w-full h-full p-2 border-2 border-dark">
              <div className="flex items-center justify-start w-full h-full p-2 gap-2 border-2 border-dark text-md font-[600]">
                วันหมดอายุ
              </div>
              <div className="flex items-center justify-start w-full h-full p-2 gap-2 border-2 border-dark text-sm font-[300]">
                Date Expired
              </div>
            </div>
            <div className="flex items-center justify-center w-full  h-full p-2 gap-2 border-2 border-dark">
              <Input
                name="perReqDesiredSalary"
                placeholder="กรอกจำนวนเงิน (บาท)"
                type="number"
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

        <div className="flex flex-col items-center justify-center w-full h-full p-2 gap-2 border-2 border-dark">
          <div className="flex flex-col items-center justify-center w-full h-full p-2 gap-2 border-2 border-dark">
            <div className="flex flex-col items-center justify-start w-full h-full p-2 border-2 border-dark">
              <div className="flex items-center justify-start w-full h-full p-2 gap-2 border-2 border-dark text-md font-[600]">
                เบอร์โทรศัพท์
              </div>
              <div className="flex items-center justify-start w-full h-full p-2 gap-2 border-2 border-dark text-sm font-[300]">
                Phone Number
              </div>
            </div>
            <div className="flex items-center justify-center w-full  h-full p-2 gap-2 border-2 border-dark">
              <Input
                name="perReqDesiredSalary"
                placeholder="กรอกจำนวนเงิน (บาท)"
                type="number"
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
            <div className="flex flex-col items-center justify-start w-full h-full p-2 border-2 border-dark">
              <div className="flex items-center justify-start w-full h-full p-2 gap-2 border-2 border-dark text-md font-[600]">
                อีเมลล์
              </div>
              <div className="flex items-center justify-start w-full h-full p-2 gap-2 border-2 border-dark text-sm font-[300]">
                Email
              </div>
            </div>
            <div className="flex items-center justify-center w-full  h-full p-2 gap-2 border-2 border-dark">
              <Input
                name="perReqDesiredSalary"
                placeholder="กรอกจำนวนเงิน (บาท)"
                type="number"
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
            <div className="flex flex-col items-center justify-start w-full h-full p-2 border-2 border-dark">
              <div className="flex items-center justify-start w-full h-full p-2 gap-2 border-2 border-dark text-md font-[600]">
                ไอดีไลน์
              </div>
              <div className="flex items-center justify-start w-full h-full p-2 gap-2 border-2 border-dark text-sm font-[300]">
                ID Line
              </div>
            </div>
            <div className="flex items-center justify-center w-full  h-full p-2 gap-2 border-2 border-dark">
              <Input
                name="perReqDesiredSalary"
                placeholder="กรอกจำนวนเงิน (บาท)"
                type="number"
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
      </div>

      <div className="flex flex-col xl:flex-row items-center justify-center w-full p-2 gap-2 border-2 border-danger">
        <div className="flex items-center justify-start w-full xl:w-3/12 h-full p-2 gap-2 border-2 border-dark">
          ที่อยู่ปัจจุบัน (Present Address)
        </div>
        <div className="flex items-center justify-center w-full xl:w-9/12 h-full p-2 gap-2 border-2 border-dark">
          <Input
            name="perReqDesiredSalary"
            placeholder="กรอกจำนวนเงิน (บาท)"
            type="number"
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
        <div className="flex items-center justify-start w-full xl:w-3/12 h-full p-2 gap-2 border-2 border-dark">
          ที่อยู่ตามทะเบียนบ้าน (Registered Address)
        </div>
        <div className="flex items-center justify-center w-full xl:w-9/12 h-full p-2 gap-2 border-2 border-dark">
          <Input
            name="perReqDesiredSalary"
            placeholder="กรอกจำนวนเงิน (บาท)"
            type="number"
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
        <div className="flex items-center justify-start w-full xl:w-3/12 h-full p-2 gap-2 border-2 border-dark">
          สถานภาพการสมรส
        </div>
        <div className="flex items-center justify-center w-full xl:w-9/12 h-full p-2 gap-2 border-2 border-dark">
          <Input
            name="perReqDesiredSalary"
            placeholder="กรอกจำนวนเงิน (บาท)"
            type="number"
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
        <div className="flex items-center justify-start w-full xl:w-3/12 h-full p-2 gap-2 border-2 border-dark">
          ถ้าสมรสแล้วคู่สมรสมีรายได้หรือไม่
        </div>
        <div className="flex items-center justify-center w-full xl:w-9/12 h-full p-2 gap-2 border-2 border-dark">
          <Input
            name="perReqDesiredSalary"
            placeholder="กรอกจำนวนเงิน (บาท)"
            type="number"
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
        <div className="flex items-center justify-start w-full xl:w-3/12 h-full p-2 gap-2 border-2 border-dark">
          จำนวนบุตร
        </div>
        <div className="flex items-center justify-center w-full xl:w-9/12 h-full p-2 gap-2 border-2 border-dark">
          <Input
            name="perReqDesiredSalary"
            placeholder="กรอกจำนวนเงิน (บาท)"
            type="number"
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
        <div className="flex items-center justify-start w-full xl:w-3/12 h-full p-2 gap-2 border-2 border-dark">
          สถานภาพทางทหาร
        </div>
        <div className="flex items-center justify-center w-full xl:w-9/12 h-full p-2 gap-2 border-2 border-dark">
          <Input
            name="perReqDesiredSalary"
            placeholder="กรอกจำนวนเงิน (บาท)"
            type="number"
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

      <div className="flex flex-col xl:flex-row items-center justify-center w-full p-2 gap-2 border-2 border-dark">
        <div className="flex items-center justify-center w-full p-2 gap-2 border-2 border-dark">
          <Input
            name="recruitFullNameTh"
            type="text"
            label="ชื่อ-นามสกุล (ภาษาไทย)"
            placeholder="กรุณากรอกชื่อ"
            variant="underlined"
            radius="full"
            value={formData.recruitFullNameTh || ""}
            onChange={handleInputChange("recruitFullNameTh")}
            isInvalid={!!errors.recruitFullNameTh}
            errorMessage={errors.recruitFullNameTh}
          />
        </div>
      </div>
    </>
  );
}
