import EditCategory from "@/app/admin/components/EditCategory";
import { prisma } from "../../../../../../lib/prisma";
import { CategoryType } from "../../page";

async function getCategory(id: string): Promise<CategoryType | null> {
  try {
    const category = await prisma.category.findFirst({ where: { id: Number(id) } });
    return category;
  } catch (error) {
    console.error("Error fetching category:", error);
    return null;
  }
}

export default async function EditCategoryPage({
  params: { id },
}: {
  params: { id: string };
}) {
  try {
    const category = await getCategory(id);
    if (id && id !== "" && category !== null && typeof category == "object") {
      return <EditCategory category={category} />;
    } else {
      return <>No category found!!!</>;
    }
  } catch (error) {
    console.error("Error in EditCategoryPage:", error);
    return <>An unexpected error occurred!</>;
  }
}
