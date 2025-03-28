import Link from "next/link";
import { academicsLevels } from "../data";
const Academics = () => {
  return (
    <section id="academics" className="mx-auto py-8 w-full max-w-[90%]">
      <div className="grid grid-cols-1 gap-6 md:grid-cols-3 mx-2 lg:grid-cols-3 ">
        {academicsLevels.map((level) => (
          <Link
            key={level.name}
            href={level.href}
            className="group relative h-64 overflow-hidden rounded-lg shadow-md transition-all hover:shadow-lg"
          >
            {/* Background Image */}
            <div
              className="h-full w-full bg-cover transition-all group-hover:scale-105"
              style={{ backgroundImage: `url(${level.image})` }}
            ></div>

            {/* Overlay */}
            <div className="absolute inset-0 flex flex-col items-center justify-end bg-black bg-opacity-40 p-4 text-center transition-all group-hover:opacity-60">
              {/* Title */}
              <h3 className="text-xl font-semibold text-white">{level.name}</h3>

              {/* Description */}
              <div className="mt-2 overflow-hidden">
                <p className="translate-y-8 transform text-sm text-white opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                  {level.description}
                </p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default Academics;
