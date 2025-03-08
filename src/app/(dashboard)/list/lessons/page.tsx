import FormModal from "@/components/FormModal";
import Pagination from "@/components/Pagination";
import Table from "@/components/Table";
import TableSearch from "@/components/TableSearch";
import { lessonsData, role } from "@/lib/data";
import Image from "next/image";
import Link from "next/link";

type Lesson = {
  id: number;
  subject: string;
  class: string;
  teacher: string;
};

const columns = [
  {
    header: "Subject Name",
    accessor: "name",
  },
  {
    header: "Class",
    accessor: "class",
  },
  {
    header: "Teacher",
    accessor: "teacher",
    className: "hidden md:table-cell",
  },
  {
    header: "Actions",
    accessor: "actions",
  },
];
const LessonListPage = () => {
  const renderRow = (item: Lesson) => (
    <tr
      key={item.id}
      className="border-b border-gray-200 even:bg-slate-50 text-sm hover:bg-newGenerationPurpleLight"
    >
      <td className="flex items-center gap-4 p-4">{item.subject}</td>
      <td>{item.class}</td>
      <td className="hidden md:table-cell">{item.teacher}</td>

      <td>
        <div className="flex items-center gap-2">
          {/* <Link href={`/list/teachers/${item.id}`}>
            <button
              title="button"
              className="w-7 h-7 flex items-center justify-center rounded-full bg-newGenerationSky"
            >
              <Image src="/edit.png" alt="" width={16} height={16} />
            </button>
          </Link> */}
          {role === "admin" && (
            <>
              <FormModal table="lesson" type="update" data={item} />
              <FormModal table="lesson" type="delete" id={item.id} />
            </>
          )}
        </div>
      </td>
    </tr>
  );

  return (
    <div className="flex-1 mt-0 m-4 rounded-md p-4 bg-white">
      {/* TOP */}
      <div className="flex items-center justify-between">
        <h1 className="hidden md:block text-lg font-semibold">All Lessons</h1>
        <div className="flex flex-col md:flex-row items-center gap-4 w-full md:w-auto">
          <TableSearch />
          <div className="flex gap-4 items-center self-end">
            <button
              title="button"
              className="flex items-center w-8 h-8 rounded-full justify-center bg-newGenerationYellow"
            >
              <Image src="/filter.png" width={14} height={14} alt="" />
            </button>
            <button
              title="button"
              className="flex items-center w-8 h-8 rounded-full justify-center bg-newGenerationYellow"
            >
              <Image src="/sort.png" width={14} height={14} alt="" />
            </button>
            {role === "admin" && (
              <FormModal table="lesson" type="create" />
            )}
          </div>
        </div>
      </div>

      {/* LIST */}
      <Table columns={columns} renderRow={renderRow} data={lessonsData} />

      {/* PAGINATION */}
      <Pagination />
    </div>
  );
};

export default LessonListPage;
