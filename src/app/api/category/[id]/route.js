import { useParams } from "next/navigation";
import { NextResponse } from "next/server";

export async function GET(req, res) {
  console.log("Here for finding single entry");
}

// export async function PUT(req, res) {
//   console.log("category/id");
//   const url = req.url;
//   console.log("url", url);
//   try {
//     return NextResponse.json({ message: "ok" }, { status: 200 });
//   } catch (error) {
//     return NextResponse.json({ message: "error", error }, { status: 500 });
//   }
// }

export async function PUT(request, { params }) {
  console.log("reached to Put");
  try {
    const formData = await request.formData();
    const name = formData.get("name");

    console.log("formdata", name, "params", params.id);
    const result = await prisma.categories.update({
      where: {
        id: parseInt(params.id),
      },
      data: {
        name: name,
      },
    });

    return new Response(JSON.stringify({ result }), {
      status: 200,
    });
  } catch (error) {
    console.error("Error updating product:", error);

    return new Response(JSON.stringify({ error: "Internal Server Error" }), {
      status: 500,
    });
  }
}

export async function DELETE(request, { params }) {
  try {
    const id = params.id;
    console.log("id", id);
    const post = await prisma.categories.delete({
      where: { id: parseInt(id) },
    });

    return new Response(JSON.stringify({ post }), {
      status: 200,
    });
  } catch (error) {
    console.error("Error deleting product:", error);

    return new Response(JSON.stringify({ error: "Internal Server Error" }), {
      status: 500,
    });
  }
}
