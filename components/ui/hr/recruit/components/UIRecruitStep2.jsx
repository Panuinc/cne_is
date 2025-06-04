import { Input } from "@heroui/react";

export default function UIRecruitStep2({ formData, handleInputChange, errors }) {
  return (
    <div className="flex items-center justify-center w-full p-2 gap-2 border-2 border-dark">
      <Input
        name="recruitPhone"
        type="text"
        label="เบอร์โทรศัพท์"
        placeholder="กรอกเบอร์โทร"
        variant="underlined"
        radius="full"
        value={formData.recruitPhone || ""}
        onChange={handleInputChange("recruitPhone")}
        isInvalid={!!errors.recruitPhone}
        errorMessage={errors.recruitPhone}
      />
    </div>
  );
}
