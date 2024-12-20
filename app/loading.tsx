import React from "react";

export default function Loading() {
  return (
    <div className="h-screen w-screen flex flex-col justify-center items-center bg-primary gap-4">
      <div className="size-6 bg-white opacity-50 animate-ping duration-100 ease-in-out rounded-full" />
      <p className="text-white font-semibold">loading...</p>
    </div>
  );
}
