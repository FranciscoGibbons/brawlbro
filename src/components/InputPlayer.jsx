"use client";

import { useState } from "react";
import Link from "next/link";

export default function InputPlayer() {
  const [value, setValue] = useState("#28L8RYUGC");

  return (
    <div className="flex items-center gap-x-3">
      <input
        value={value}
        onChange={(e) => setValue(e.target.value)}
        type="text"
        placeholder="#28LRKLA8"
        className="font-semibold text-xl p-2 rounded text-black outline-none"
      />

      <Link className="text-[22px] text-amber-500 hover:opacity-85 transition duration-200" href={`/player/${value.slice(1).toUpperCase() + value.slice(0, 1).toUpperCase()}`}>
        Go!
      </Link>
    </div>
  );
}
