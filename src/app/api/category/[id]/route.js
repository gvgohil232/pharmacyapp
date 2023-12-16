import { useParams } from "next/navigation";
import { NextResponse } from "next/server";

export async function GET(req, res) {
  console.log("Here for finding single entry");
}

export async function PUT(req, res) {
  console.log("category/id");
  const url = req.url;
  console.log("url", url);
  try {
    return NextResponse.json({ message: "ok" }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ message: "error", error }, { status: 500 });
  }
}

export async function DELETE(req, res) {
  console.log("category/id");
}
