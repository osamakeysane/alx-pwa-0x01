import React from "react";

export default function MovieCard() {
  return (
    <div className="border rounded-lg p-4 shadow hover:shadow-lg transition">
      <h3 className="font-bold text-lg">Movie Title</h3>
      <p className="text-sm text-gray-600">Description here...</p>
    </div>
  );
}
