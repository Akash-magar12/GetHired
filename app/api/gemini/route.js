import { NextResponse } from "next/server";

export async function POST(req) {
  try {
    const formData = await req.formData();
    const resumeFile = formData.get("resume");
    const data = Object.fromEntries(formData.entries());

    console.log("Form fields:", data);
    console.log("Resume file:", resumeFile);

    if (!resumeFile) {
      return NextResponse.json(
        { error: "No resume uploaded" },
        { status: 400 }
      );
    }

    return NextResponse.json({ message: "Form received!", userData: data });
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { error: "Something went wrong" },
      { status: 500 }
    );
  }
}
