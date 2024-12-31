"use client";
import { useState } from "react";
import Image from "next/image";
import AnimateUp from "@/components/animate-up";
import { timingDay1, timingDay2 } from "@/agenda";

export default function Timings() {
  const [selectedDay, setSelectedDay] = useState(1);

  const schedule = selectedDay === 1 ? timingDay1 : timingDay2;

  return (
    <div className="max-w-5xl mx-auto p-1 md:p-6">
      <div className="text-center mb-8">
        <p className="text-primary font-bold uppercase">Schedule Details</p>
        <h2 className="text-3xl font-bold my-2">
          Information of Event Schedules
        </h2>
        <p className="text-gray-600">
          Immerse yourself in an unparalleled gathering of distinguished
          policymakers, thought leaders, CXOs, start-up mavericks, tech
          virtuosos, skill developers, academia, and representatives from
          diverse technology sectors.
        </p>
      </div>
      <div className="flex justify-center items-center mb-8 font-bold scale-75 md:scale-100">
        <AnimateUp direction="left">
          <div
            onClick={() => setSelectedDay(1)}
            className={`size-44 rounded-full flex justify-center items-center cursor-pointer ${
              selectedDay === 1 ? "bg-primary text-white" : "bg-gray-200"
            }`}
          >
            9th Jan 2025
          </div>
        </AnimateUp>
        <AnimateUp direction="right">
          <div
            onClick={() => setSelectedDay(2)}
            className={`size-44 rounded-full flex justify-center items-center cursor-pointer -translate-x-4 -translate-y-4 ${
              selectedDay === 2 ? "bg-secondary text-white" : "bg-gray-200"
            }`}
          >
            10th Jan 2025
          </div>
        </AnimateUp>
      </div>
      <div>
        <table className="table-auto w-full text-left border-collapse">
          <tbody>
            {schedule.map((timing, index) => (
              <tr key={index}>
                <td
                  className={`px-4 py-4 text-white ${
                    index % 2 === 0 ? "bg-primary" : "bg-secondary"
                  } transition-all`}
                >
                  {timing.timing}
                </td>
                <td
                  className={`px-4 py-4 flex flex-col md:flex-row items-center gap-4 ${
                    index % 2 === 0 ? "bg-white" : "bg-gray-50"
                  } hover:bg-gray-100 transition-all`}
                >
                  <Image
                    src={timing.photo}
                    alt={timing.name}
                    width={60}
                    height={60}
                    className="rounded-full"
                  />
                  <div>
                    <p className="font-bold text-lg">{timing.name}</p>
                    <p className="text-sm text-gray-500">{timing.role}</p>
                    <h3 className="text-primary font-bold mt-2">
                      {timing.heading}
                    </h3>
                    <p className="text-gray-600">{timing.passage}</p>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {/* Sticky Bottom Buttons */}
      <div className="flex justify-center gap-4 my-5">
        <button
          onClick={() => setSelectedDay(1)}
          className={`px-4 py-2 rounded-md font-bold ${
            selectedDay === 1
              ? "bg-primary text-white"
              : "bg-gray-200 hover:bg-gray-300"
          }`}
        >
          Day 1
        </button>
        <button
          onClick={() => setSelectedDay(2)}
          className={`px-4 py-2 rounded-md font-bold ${
            selectedDay === 2
              ? "bg-secondary text-white"
              : "bg-gray-200 hover:bg-gray-300"
          }`}
        >
          Day 2
        </button>
      </div>
    </div>
  );
}
