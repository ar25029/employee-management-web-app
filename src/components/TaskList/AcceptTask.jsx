import React from "react";

export default function AcceptTask({data}) {
  return (
    <div className="p-5 h-full w-[300px] rounded-xl bg-red-300 flex-shrink-0">
      <div className="flex justify-between items-center">
        <h3 className="bg-red-600 px-3 py-1 rounded-md text-sm">
          {data.category}
        </h3>
        <h4 className="text-white text-sm font-semibold">
          {data.date.split("T")[0]}
        </h4>
      </div>
      <h2 className="mt-4 text-xl font-bold">{data.title}</h2>
      <p className="text-sm mt-5">{data.description}</p>
      <div className="flex justify-between items-center mt-2">
        <button className="bg-green-500 outline-none rounded px-2 py-1 text-sm">
          Mark as Completed
        </button>
        <button className="bg-red-500 outline-none rounded px-2 py-1 text-sm">
          Mark as Failed
        </button>
      </div>
    </div>
  );
}
