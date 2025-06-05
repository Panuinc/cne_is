// /api/hr/recruit/link/new/[perReqId]/route.js

import { NextResponse } from "next/server";
import { RecruitService } from "@/app/api/hr/recruit/recruitService";
import { validateRequest } from "@/lib/validateRequest";

export async function GET(request, context) {
  const { perReqId } = await context.params;
  let ip = "";
  try {
    ip = await validateRequest(request);
    const id = Number(perReqId);
    if (Number.isNaN(id)) {
      return NextResponse.json({ error: "Invalid perReqId" }, { status: 400 });
    }

    const recruit = await RecruitService.createRecruit({
      recruitPerReqId: id,
      recruitFullNameTh: "",
      recruitFullNameEn: "",
      recruitNickName: "",
      recruitStatus: "Pending",
    });

    const slug = await RecruitService.generateSlug(recruit.recruitId);
    const url = `${process.env.NEXT_PUBLIC_BASE_URL}/apply/${slug}`;

    return NextResponse.json({ url }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error: "Failed to create recruit link" }, { status: 500 });
  }
}
