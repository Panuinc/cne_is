import prisma from "@/lib/prisma";
import { NextResponse } from "next/server";
import { formatRecruitData } from "@/app/api/hr/recruit/recruitSchema";

export async function GET(request, context) {
  const { slug } = await context.params;

  try {
    const recruit = await prisma.recruit.findFirst({
      where: { applySlug: slug },
      include: { recruitDetail: true },
    });

    if (!recruit) {
      return NextResponse.json({ error: "Recruit not found" }, { status: 404 });
    }

    return NextResponse.json({ recruit: formatRecruitData([recruit]) }, { status: 200 });
  } catch (err) {
    return NextResponse.json({ error: "Error loading recruit" }, { status: 500 });
  }
}
