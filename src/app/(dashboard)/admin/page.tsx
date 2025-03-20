import Announcements from "@/components/Announcements";
import AttendanceChart from "@/components/AttendanceChart";
import CountChart from "@/components/CountChart";
import EventsCalendar from "@/components/EventsCalendar";
import FinanceChart from "@/components/FinanceChart";
import UserCard from "@/components/UserCard";

const AdminPage = async () => {
  // just to test the loading spinner
  await new Promise((resolve) => setTimeout(resolve, 2000));

  return (
    <div className="p-4 flex flex-col md:flex-row gap-4">
      {/* LEFT */}
      <div className="w-full lg:w-2/3 flex flex-col gap-8">
        {/* USER CARDS */}
        <div className="flex gap-4 justify-between flex-wrap">
          <UserCard type="student" />
          <UserCard type="teacher" />
          <UserCard type="parent" />
          <UserCard type="staff" />
        </div>

        {/* MIDDLE CHARTs */}
        <div>
          {/* middle chart */}
          <div className="flex gap-4 flex-col lg:flex-row">
            {/* count chart */}
            <div className="w-full lg:w-1/3 h-[450px]">
              <CountChart />
            </div>

            {/* attendance chart */}
            <div className="w-full lg:w-2/3 h-[450px]">
              <AttendanceChart />
            </div>
          </div>

          {/* bottom chart */}
          <div className="w-full h-[500px]">
            <FinanceChart />
          </div>
        </div>
      </div>

      {/* RIGHT */}
      <div className="w-full lg:w-1/3 flex flex-col gap-8">
        <EventsCalendar />
        <Announcements />
      </div>
    </div>
  );
};

export default AdminPage;
