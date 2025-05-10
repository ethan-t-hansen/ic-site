"use client";

import PartsList from "@/components/PartsList";
import { Input } from "@/components/ui/input";
import { useState } from "react";

export default function PartsPage() {
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <div className="flex flex-col p-16 gap-4">
      <div>
        <label htmlFor="search-bar"> Search Term </label>
        <Input
          id="search-bar"
          placeholder="Search part number or description..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="max-w-md"
        />
      </div>
      <PartsList searchTerm={searchTerm} />
    </div>
  );
}
