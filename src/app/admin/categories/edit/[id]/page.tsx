import EditCategory from "@/app/admin/components/EditCategory";
import { prisma } from "../../../../../../lib/prisma";
import { CategoryType } from "../../page";

async function getCategory(id: string): Promise<CategoryType | null> {
  try {
    const category = await prisma.categories.findFirst({ where: { id: parseInt(id) } });
    console.log("category", category);
    return category || null;
  } catch (error) {
    console.error('Error fetching category:', error);
    return null;
  }
}

export default async function EditCategoryPage({
  params: { id },
}: {
  params: { id: string };
}) {
  if (id) {
    const category = await getCategory(id);

    if (category !== null && typeof category === "object") {
      return <EditCategory category={category} />;
    } else {
      return <>No category found!!!</>;
    }
  } else {
    return <>Invalid category ID</>;
  }
}