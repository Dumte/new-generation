"use client";

import dynamic from "next/dynamic";
import Image from "next/image";
import { useState } from "react";
// import TeacherForm from "./forms/TeacherForm";
// import StudentForm from "./forms/StudentForm";

const TeacherForm = dynamic(() => import("./forms/TeacherForm"), {
  loading: () => (
    <div className="w-[500px] h-[300px] rounded-md flex justify-center items-center bg-white">
      <h1 className="text-3xl">Loading...</h1>
    </div>
  ),
});
const StudentForm = dynamic(() => import("./forms/StudentForm"), {
  loading: () => (
    <div className="w-[500px] h-[300px] rounded-md flex justify-center items-center bg-white">
      <h1 className="text-3xl">Loading...</h1>
    </div>
  ),
});
const AnnouncementForm = dynamic(() => import("./forms/AnnouncementForm"), {
  loading: () => (
    <div className="w-[500px] h-[300px] rounded-md flex justify-center items-center bg-white">
      <h1 className="text-3xl">Loading...</h1>
    </div>
  ),
});
const AttendanceForm = dynamic(() => import("./forms/AttendanceForm"), {
  loading: () => (
    <div className="w-[500px] h-[300px] rounded-md flex justify-center items-center bg-white">
      <h1 className="text-3xl">Loading...</h1>
    </div>
  ),
});
const AssignmentForm = dynamic(() => import("./forms/AssignmentForm"), {
  loading: () => (
    <div className="w-[500px] h-[300px] rounded-md flex justify-center items-center bg-white">
      <h1 className="text-3xl">Loading...</h1>
    </div>
  ),
});
const ClassForm = dynamic(() => import("./forms/ClassForm"), {
  loading: () => (
    <div className="w-[500px] h-[300px] rounded-md flex justify-center items-center bg-white">
      <h1 className="text-3xl">Loading...</h1>
    </div>
  ),
});
const EventForm = dynamic(() => import("./forms/EventForm"), {
  loading: () => (
    <div className="w-[500px] h-[300px] rounded-md flex justify-center items-center bg-white">
      <h1 className="text-3xl">Loading...</h1>
    </div>
  ),
});
const ExamForm = dynamic(() => import("./forms/ExamForm"), {
  loading: () => (
    <div className="w-[500px] h-[300px] rounded-md flex justify-center items-center bg-white">
      <h1 className="text-3xl">Loading...</h1>
    </div>
  ),
});
const ParentForm = dynamic(() => import("./forms/ParentForm"), {
  loading: () => (
    <div className="w-[500px] h-[300px] rounded-md flex justify-center items-center bg-white">
      <h1 className="text-3xl">Loading...</h1>
    </div>
  ),
});
const ResultForm = dynamic(() => import("./forms/ResultForm"), {
  loading: () => (
    <div className="w-[500px] h-[300px] rounded-md flex justify-center items-center bg-white">
      <h1 className="text-3xl">Loading...</h1>
    </div>
  ),
});
const SubjectForm = dynamic(() => import("./forms/SubjectForm"), {
  loading: () => (
    <div className="w-[500px] h-[300px] rounded-md flex justify-center items-center bg-white">
      <h1 className="text-3xl">Loading...</h1>
    </div>
  ),
});

const forms: {
  [key: string]: (type: "create" | "update", data?: any) => JSX.Element;
} = {
  teacher: (type, data) => <TeacherForm type={type} data={data} />,
  student: (type, data) => <StudentForm type={type} data={data} />,
  announcement: (type, data) => <AnnouncementForm type={type} data={data} />,
  assignment: (type, data) => <AssignmentForm type={type} data={data} />,
  attendance: (type, data) => <AttendanceForm type={type} data={data} />,
  class: (type, data) => <ClassForm type={type} data={data} />,
  event: (type, data) => <EventForm type={type} data={data} />,
  exam: (type, data) => <ExamForm type={type} data={data} />,
  parent: (type, data) => <ParentForm type={type} data={data} />,
  result: (type, data) => <ResultForm type={type} data={data} />,
  subject: (type, data) => <SubjectForm type={type} data={data} />,
};

const FormModal = ({
  table,
  type,
  data,
  id,
}: {
  table:
    | "teacher"
    | "student"
    | "parent"
    | "subject"
    | "class"
    | "lesson"
    | "exam"
    | "assignment"
    | "result"
    | "attendance"
    | "event"
    | "announcement";
  type: "create" | "update" | "delete";
  data?: any;
  id?: number;
}) => {
  const size = type === "create" ? "w-8 h-8" : "w-7 h-7";
  const bgColor =
    type === "create"
      ? "bg-newGenerationYellow"
      : type === "update"
      ? "bg-newGenerationSky"
      : "bg-newGenerationPurple";

  const [open, setOpen] = useState(false);

  const Form = () => {
    return type === "delete" && id ? (
      <form action="" className="flex flex-col py-4 g-4 ">
        <span className="mb-2 text-center font-medium">
          All data will be lost. Are you sure you want to delete this {table}?
        </span>
        <button className="bg-red-700 py-2 px-4 text-white rounded-md border-none w-max self-center">
          Delete
        </button>
      </form>
    ) : type === "create" || type === "update" ? (
      forms[table](type, data)
    ) : (
      "Form not found!"
    );
  };
  return (
    <>
      <button
        title="button"
        className={`${size} flex items-center justify-center rounded-full ${bgColor}`}
        onClick={() => setOpen(true)}
      >
        <Image src={`/${type}.png`} alt="" width={16} height={16} />
      </button>
      {open && (
        <div className="w-screen h-screen absolute left-0 top-0 bg-black bg-opacity-60 z-50 flex justify-center items-center ">
          <div className="bg-white rounded-md p-4 relative w-[90%] md:w-[70%] lg:w-[60%] xl:w-[50%] 2xl:w-[40%]  ">
            <Form />

            <div
              className="absolute top-4 right-4 cursor-pointer "
              onClick={() => setOpen(false)}
            >
              <Image src="/close.png" width={14} height={14} alt="close icon" />
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default FormModal;
