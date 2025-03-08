import Announcements from "@/components/Announcements";
import BigCalendar from "@/components/BigCalendar";
import FormModal from "@/components/FormModal";
import Performance from "@/components/Performance";
import Image from "next/image";
import Link from "next/link";

const SingleTeacherPage = () => {
  return (
    <div className="flex-1 flex gap-4 p-4 flex-col xl:flex-row">
      {/* LEFT */}
      <div className="w-full xl:w-2/3">
        {/* TOP */}
        <div className="flex flex-col gap-4 lg:flex-row">
          {/* USER INFO CARD */}
          <div className="bg-newGenerationSky flex flex-1 py-6 px-4 rounded-md gap-4">
            <div className="w-1/3">
              <Image
                src="https://images.pexels.com/photos/5212320/pexels-photo-5212320.jpeg"
                alt="A female teacher"
                width={144}
                height={144}
                className="w-36 h-36 rounded-full object-cover"
              />
            </div>
            <div className="w-2/3 flex flex-col justify-between gap-4">
              <div className="flex items-center gap-4">
                <h1 className="text-xl font-semibold">Justice Menenaata</h1>

                <FormModal
                  table="teacher"
                  type="update"
                  data={{
                    id: 1,
                    username: "Justice",
                    email: " stilo@gmail.com",
                    firstName: "Justice",
                    lastName: "Menenaata",
                    phone: "+2347031221392",
                    address: " Wiikebe, Wiiyaakara town",
                    bloodType: "A+",
                    dateOfBirth: "04/05/1990",
                    sex: "male",
                    img: "https://images.pexels.com/photos/5212320/pexels-photo-5212320.jpeg",
                  }}
                />
              </div>

              <p className="text-sm text-gray-500">
                A passionate physics and mathematics teacher who will be the
                next Isaac Newton.
              </p>
              <div className="flex items-center justify-between gap-2 flex-wrap text-xs font-medium">
                <div className="w-full md:w-1/3 lg:w-full  2xl:w-1/3 flex items-center gap-2">
                  <Image src="/blood.png" alt="" width={14} height={14} />
                  <span>A+</span>
                </div>
                <div className="w-full md:w-1/3 lg:w-full  2xl:w-1/3 flex items-center gap-2">
                  <Image src="/date.png" alt="" width={14} height={14} />
                  <span>January 2025</span>
                </div>
                <div className="w-full md:w-1/3 lg:w-full  2xl:w-1/3 flex items-center gap-2">
                  <Image src="/mail.png" alt="" width={14} height={14} />
                  <span>mail@example.com</span>
                </div>
                <div className="w-full md:w-1/3 lg:w-full  2xl:w-1/3 flex items-center gap-2">
                  <Image src="/phone.png" alt="" width={14} height={14} />
                  <span>+2348072833882</span>
                </div>
              </div>
            </div>
          </div>

          {/* SMALL CARDS */}
          <div className="flex-1 flex flex-wrap gap-4 justify-between">
            {/* CARDS */}
            <div className="bg-white p-4 rounded-md flex gap-4 w-full md:w-[48%] xl:w-[45%] 2xl:w-[48%]">
              <Image
                src="/singleAttendance.png"
                alt=""
                width={24}
                height={24}
                className="w-6 h-6"
              />
              <div className="">
                <h1 className="text-xl font-semibold">90%</h1>
                <span className="text-sm text-gray-400">Attendance</span>
              </div>
            </div>
            {/* CARDS */}
            <div className="bg-white p-4 rounded-md flex gap-4 w-full md:w-[48%] xl:w-[45%] 2xl:w-[48%]">
              <Image
                src="/singleBranch.png"
                alt=""
                width={24}
                height={24}
                className="w-6 h-6"
              />
              <div className="">
                <h1 className="text-xl font-semibold">2</h1>
                <span className="text-sm text-gray-400">Branches</span>
              </div>
            </div>
            {/* CARDS */}
            <div className="bg-white p-4 rounded-md flex gap-4 w-full md:w-[48%] xl:w-[45%] 2xl:w-[48%]">
              <Image
                src="/singleLesson.png"
                alt=""
                width={24}
                height={24}
                className="w-6 h-6"
              />
              <div className="">
                <h1 className="text-xl font-semibold">6</h1>
                <span className="text-sm text-gray-400">Lessons</span>
              </div>
            </div>
            {/* CARDS */}
            <div className="bg-white p-4 rounded-md flex gap-4 w-full md:w-[48%] xl:w-[45%] 2xl:w-[48%]">
              <Image
                src="/singleClass.png"
                alt=""
                width={24}
                height={24}
                className="w-6 h-6"
              />
              <div className="">
                <h1 className="text-xl font-semibold">6</h1>
                <span className="text-sm text-gray-400">Classes</span>
              </div>
            </div>
          </div>
        </div>

        {/* BOTTOM */}
        <div className="h-[800px] rounded-md mt-4 p-4 bg-white">
          <h1>Teacher&apos;s Schedule</h1>
          <BigCalendar />
        </div>
      </div>

      {/* RIGHT */}
      <div className="w-full xl:w-1/3 flex flex-col gap-4">
        <div className="rounded-md p-4 bg-white">
          <h1 className="font-semibold text-xl">Schedules</h1>
          <div className="mt-4 flex gap-4 flex-wrap text-xs text-gray-500">
            <Link className="p-3 rounded-md bg-newGenerationSky" href="/">
              Teacher&apos;s Classes
            </Link>
            <Link
              className="p-3 rounded-md bg-newGenerationPurpleLight"
              href="/"
            >
              Teacher&apos;s Students
            </Link>
            <Link className="p-3 rounded-md bg-newGenerationPurple" href="/">
              Teacher&apos;s Lessons
            </Link>
            <Link className="p-3 rounded-md bg-pink-50" href="/">
              Teacher&apos;s Exams
            </Link>
            <Link className="p-3 rounded-md bg-newGenerationSky" href="/">
              Teacher&apos;s Assignments
            </Link>
          </div>
        </div>

        <Performance />
        <Announcements />
      </div>
    </div>
  );
};

export default SingleTeacherPage;
