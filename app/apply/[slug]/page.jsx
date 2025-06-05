"use client"; // ✅ ใช้ client component แทน

import { useParams } from "next/navigation";
import RecruitApplyPage from "@/components/ui/hr/recruit/RecruitApplyPage";

export default function Page() {
  const params = useParams();
  const slug = params?.slug;

  return <RecruitApplyPage slug={slug} />;
}
