"use client";
import { useRouter } from "next/navigation";

export default function DeleteCategory({ category_id }: { category_id: string }) {
  const router = useRouter();

  async function handleClick() {
    try {
      await fetch(`/api/category/${category_id}`, {
        method: "DELETE",
      });
      router.refresh();
    } catch (e) {
      console.error(e);
    }
  }

  return <button className="btn btn-sm btn-danger mx-1" onClick={handleClick}>Delete</button>;
}
