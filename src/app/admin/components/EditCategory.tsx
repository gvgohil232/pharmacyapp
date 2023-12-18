"use client";
import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { CategoryType } from "../categories/page";

export default function EditCategory({ category }: { category: CategoryType }) {
    const [formData, setFormData] = useState<CategoryType | any>(category);
    const [file, setFile] = useState<string | any>("");
    const router = useRouter();

    const handleInputChange = (
        event:
            | React.ChangeEvent<HTMLInputElement>
            | React.ChangeEvent<HTMLTextAreaElement>
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
            await fetch("/api/category/" + category.id, {
                method: "PUT",
                // headers: {
                //   "Content-Type": "application/json",
                // },
                body: dataValues,
            });

            router.push("/admin/categories");
        } catch (error) {
            console.error(error);
        }

        setFormData({});
    };

    return (
        <div>
            <div className="flex items-center  h-10 intro-y">
                <Link href="/admin/categories" className="mr-3">
                    {`< Back`}
                </Link>
                <h2 className="mr-5 text-lg font-medium truncate">Edit Category</h2>
            </div>
            <form
                onSubmit={handleSubmit}
                className="bg-white shadow-md rounded p-4 mb-4"
            >
                <h5 className="mb-2">Edit Category</h5>
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
