"use client";
import { useRouter } from "next/navigation";

export default function DeleteProduct({ product_id }: { product_id: string }) {
  const router = useRouter();

  async function handleClick() {
    try {
      await fetch(`/api/product/${product_id}`, {
        method: "DELETE",
      });
      router.refresh();
    } catch (e) {
      console.error(e);
    }
  }

  return <button className="btn btn-sm btn-danger mx-1" onClick={handleClick}>Delete</button>;
}
