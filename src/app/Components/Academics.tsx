import Link from "next/link";
import { academicsLevels } from "../data";
const Academics = () => {
  return (
    <section id="academics" className="py-8 w-full max-w-[80%] flex items-center justify-center bg-blue-100">
      <div className="grid grid-cols-1 gap-6 md:grid-cols-3 mx-2 ">
        {academicsLevels.map((level) => (
         <Link href={level.href} key={level.name} className="flex justify-center items-center w-[300px] h-[200px] rounded-lg bg-blue-500 p-6 text-center shadow-md transition-all hover:bg-blue-200 hover:shadow-lg">
            <h3 className="text-xl font-semibold">{level.name}</h3>
        </Link> 
        ))
          }
      </div>
    </section>
  );
};

export default Academics;
