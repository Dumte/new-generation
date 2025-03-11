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
    title: "New Generation Day",
    time: "10:00 AM - 1:00 PM",
    description: "To mark the 20th anniversary of the school, the management has set aside August 23rd 2025 as the School Anniversary Celebration.",
  },
  {
    id: 2,
    title: "Science Students' Escortion",
    time: "08:00 AM - 2:00 PM",
    description: "An official visit to Kainji Dam, Niger State. Proudly organize by some prominent people in the community.",
  },
  {
    id: 3,
    title: "Inter-House Sport Competition",
    time: "10:00 AM - 3:00 PM",
    description: "The school annual inter-house sport competition. Click for to more about this year's edition",
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
