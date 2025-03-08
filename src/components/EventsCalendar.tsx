"use client";
import { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import Image from "next/image";

type ValuePiece = Date | null;
type Value = ValuePiece | [ValuePiece, ValuePiece];

// Temporal data
const events = [
  {
    id: 1,
    title: "Lorem, ipsum dolor",
    time: "12:00 PM - 2:00 PM",
    description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit.",
  },
  {
    id: 2,
    title: "Lorem, ipsum dolor",
    time: "12:00 PM - 2:00 PM",
    description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit.",
  },
  {
    id: 3,
    title: "Lorem, ipsum dolor",
    time: "12:00 PM - 2:00 PM",
    description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit.",
  },
];
const EventsCalendar = () => {
  const [value, onChange] = useState<Value>(new Date());

  return (
    <div className="bg-white p-4 rounded-md">
      {/* Calendar */}
      <Calendar onChange={onChange} value={value} />

      {/* Events */}
      <div className="flex justify-between items-center">
        <h1 className="text-xl font-semibold py-4">Events</h1>
        <Image src="/moreDark.png" alt="more icon" width={20} height={20} />
      </div>

      <div className="flex flex-col gap-4">
        {events.map((e) => (
          <div
            className="p-5 rounded-md border-2 border-gray-100 border-t-4 odd:border-t-newGenerationSky even:border-t-newGenerationPurple"
            key={e.id}
          >
            <div className="flex items-center justify-between">
              <h1 className="font-semibold text-gray-600">{e.title}</h1>
              <span className="text-gray-300 text-xs">{e.time}</span>
            </div>
            <p className="mt-2 text-gray-400 text-sm">{e.description}</p>
          </div>
        ))}
      </div>

      
    </div>
  );
};

export default EventsCalendar;
