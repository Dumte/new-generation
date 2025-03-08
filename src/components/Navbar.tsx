import Image from "next/image";

const Navbar = () => {
  return (
    <div className="flex items-center justify-between p-4">
      {/* SEARCH INPUT */}
      <div className="hidden md:flex items-center rounded-full text-xs ring-[1.5px] ring-gray-500 gap-2 px-2">
        <Image src="/search.png" width={14} height={14} alt="search icon"/>
        <input
          type="text"
          placeholder="Search..."
          className="w-[200px] bg-transparent p-2 outline-none"
        />
      </div>

      {/* ICONS AND USER */}
      <div className="flex gap-6 items-center justify-end w-full">
        <div className="bg-white rounded-full w-7 h-7 flex justify-center items-center cursor-pointer">
          <Image src="/message.png" width={20} height={20} alt="message icon"/>
        </div>
        <div className="bg-white rounded-full w-7 h-7 flex justify-center items-center cursor-pointer relative">
          <Image src="/announcement.png" width={20} height={20} alt="announcement icon"/>
          <span className="bg-purple-500 rounded-full absolute text-xs -top-3 -right-3 w-5 h-5 text-white flex justify-center items-center">
            1
          </span>
        </div>
        <div className="flex flex-col">
          <span className="text-xs leading-3 font-medium">Tuamene Stanley T.</span>
          <span className="text-[10px] text-gray-500 text-right">Admin</span>
        </div>
        <div>
          <Image
            src="/avatar.png"
            width={36}
            height={36}
            className="rounded-full" alt="profile icon"
          />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
