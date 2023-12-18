import Link from "next/link";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="w-full h-[100vh] block bg-gray-200">
      <div className="sidebar fixed top-0 bottom-0 lg:left-0 p-2 w-[300px] overflow-y-auto text-center bg-gray-900">
        <div className="text-gray-100 text-xl">
          <div className="p-2.5 mt-1 flex items-center">
            <i className="bi bi-app-indicator px-2 py-1 rounded-md bg-green-600">
              P
            </i>
            <h1 className="font-bold text-gray-200 text-[15px] ml-3">
              Pharmacy Dashboard
            </h1>
          </div>
          <div className="my-2 bg-gray-600 h-[1px]"></div>
        </div>

        <Link
          href="/"
          target="_blank"
          className="p-2.5 mt-3 flex items-center rounded-md px-4 duration-300 cursor-pointer hover:bg-blue-600 text-white"
        >
          <i className="bi bi-house-door-fill"></i>
          <span className="text-[15px] ml-4 text-gray-200 font-bold">Visit Website</span>
        </Link>
        <Link
          href="/admin"
          className="p-2.5 mt-3 flex items-center rounded-md px-4 duration-300 cursor-pointer hover:bg-blue-600 text-white"
        >
          <i className="bi bi-house-door-fill"></i>
          <span className="text-[15px] ml-4 text-gray-200 font-bold">Home</span>
        </Link>
        <Link
          href="/admin/products"
          className="p-2.5 mt-3 flex items-center rounded-md px-4 duration-300 cursor-pointer hover:bg-blue-600 text-white"
        >
          <i className="bi bi-bookmark-fill"></i>
          <span className="text-[15px] ml-4 text-gray-200 font-bold">
            Products
          </span>
        </Link>
        <Link
          href="/admin/categories"
          className="p-2.5 mt-3 flex items-center rounded-md px-4 duration-300 cursor-pointer hover:bg-blue-600 text-white"
        >
          <i className="bi bi-bookmark-fill"></i>
          <span className="text-[15px] ml-4 text-gray-200 font-bold">
            Categories
          </span>
        </Link>
        <div className="my-4 bg-gray-600 h-[1px]"></div>
      </div>
      <div className="mt-3 mr-5 ml-[330px]">{children}</div>
    </div>
  );
}
