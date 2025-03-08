import Image from "next/image";

const TableSearch = () => {
  return (
    <div>
      <div className="w-full md:w-auto flex items-center rounded-full text-xs ring-[1.5px] ring-gray-500 gap-2 px-2">
        <Image src="/search.png" width={14} height={14} alt="search icon" />
        <input
          type="text"
          placeholder="Search..."
          className="w-[200px] bg-transparent p-2 outline-none"
        />
      </div>
    </div>
  );
};

export default TableSearch;
