"use client"
import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { ProductType } from "../products/page";
import { CategoryType } from "../categories/page";
import Image from "next/image";

export default function AddProductForm({ categories }: { categories: CategoryType[] }) {
    const [formData, setFormData] = useState<ProductType | any>({
        name: "",
        content: "",
    });
    const [file, setFile] = useState<string | any>("");
    const router = useRouter();
    const [error, setError] = useState<string | null>(null);

    const handleInputChange = (
        event:
            | React.ChangeEvent<HTMLInputElement>
            | React.ChangeEvent<HTMLTextAreaElement>
            | React.ChangeEvent<HTMLSelectElement>
    ) => {
        setFormData({ ...formData, [event.target.name]: event.target.value });
    };

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const dataValues = new FormData();

        Object.entries(formData).forEach(
            ([key, value]: [key: string, value: string | any]) => {
                dataValues.set(key, value);
            }
        );
        if (file !== "") {
            dataValues.set("img", file);
        }

        try {
            const response = await fetch("/api/product", {
                method: "POST",
                // headers: {
                //   "Content-Type": "application/json",
                // },
                body: dataValues,
            });

            if (!response.ok) {
                // Handle non-successful response (e.g., server error)
                const errorData = await response.json();
                setError(errorData.error || "An error occurred");
            } else {
                // Reset form and navigate on success
                setFormData({ name: "" });
                setFile("");
                setError(null);
                router.push("/admin/products");
            }
        } catch (error) {
            console.error(error);
            setError("An unexpected error occurred");
        }

        setFormData({});
    };

    return (
        <div>
            {error && (
                <div className="mb-2 text-red-500">
                    <strong>Error:</strong> {error}
                </div>
            )}
            <form
                onSubmit={handleSubmit}
                className="bg-white shadow-md rounded p-4 mb-4"
            >
                <h5 className="mb-2">Add Product</h5>
                <div className="mb-2">
                    <label
                        className="block text-gray-700 text-sm font-bold mb-2"
                        htmlFor="name"
                    >
                        Name:
                    </label>
                    <input
                        className=" appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        type="text"
                        id="name"
                        name="name"
                        value={formData?.name || ""}
                        onChange={handleInputChange}
                        required
                    />
                </div>
                <div className="mb-2">
                    <label
                        className="block text-gray-700 text-sm font-bold mb-2"
                        htmlFor="price"
                    >
                        Price:
                    </label>
                    <input
                        className=" appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        type="text"
                        id="price"
                        name="price"
                        value={formData?.price || ""}
                        onChange={handleInputChange}
                        required
                    />
                </div>
                <div className="mb-2">
                    <label
                        className="block text-gray-700 text-sm font-bold mb-2"
                        htmlFor="originalPrice"
                    >
                        Original Price:
                    </label>
                    <input
                        className=" appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        type="text"
                        id="originalPrice"
                        name="originalPrice"
                        value={formData?.originalPrice || ""}
                        onChange={handleInputChange}
                        required
                    />
                </div>
                <div className="mb-2">
                    <label
                        className="block text-gray-700 text-sm font-bold mb-2"
                        htmlFor="category"
                    >
                        Category:
                    </label>
                    {/* <input
            className=" appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            type="text"
            id="category"
            name="category"
            value={formData?.category || ""}
            onChange={handleInputChange}
            required
          /> */}
                    <select
                        className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        id="category"
                        name="category"
                        value={formData?.category || ""}
                        onChange={handleInputChange}
                        required
                    >
                        {/* Populate options dynamically from your category data */}
                        <option value="" disabled>Select category</option>
                        {categories?.map((category: CategoryType) => (
                            <option key={category.id} value={category.id}>
                                {category.name}
                            </option>
                        ))}
                    </select>
                </div>
                <div className="mb-2">
                    <label
                        className="block text-gray-700 text-sm font-bold mb-2"
                        htmlFor="img"
                    >
                        Image:
                    </label>
                    <input
                        className=" appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        type="file"
                        id="img"
                        name="img"
                        onChange={(e) => setFile(e.target.files?.[0])}
                        required
                    />
                    <Image src={file ? URL.createObjectURL(file) : ""} alt="" height="100" width="100" />
                </div>
                <div className="mb-2">
                    <label
                        className="block text-gray-700 text-sm font-bold mb-2"
                        htmlFor="content"
                    >
                        Content:
                    </label>
                    <textarea
                        className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        id="content"
                        name="content"
                        value={formData?.content}
                        onChange={handleInputChange}
                        required
                    />
                </div>

                <div className="flex items-center justify-between">
                    <button
                        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                        type="submit"
                    >
                        Save
                    </button>
                </div>
            </form>
        </div>
    );
}