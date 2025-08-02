"use client";

import Image from "next/image";
import { useState } from "react";

type Gift = {
  id: number;
  name: string;
  image: string;
};

export default function Home() {
  const gifts: Gift[] = [
    { id: 1, name: "سنسال", image: "/s1.png" },
    { id: 2, name: "اسوارة", image: "/s2.png" },
    { id: 3, name: "خاتم", image: "/s3.png" },
  ];

  const [selectedGift, setSelectedGift] = useState<Gift | null>(null);

  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-4 bg-white text-black">
      <h1 className="text-3xl font-bold mb-4">اختر هديتك 🎁</h1>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        {gifts.map((gift) => (
          <div
            key={gift.id}
            className={`border p-2 rounded cursor-pointer hover:shadow-md ${
              selectedGift?.id === gift.id ? "border-blue-500" : "border-gray-300"
            }`}
            onClick={() => setSelectedGift(gift)}
          >
            <Image src={gift.image} alt={gift.name} width={200} height={200} />
            <p className="text-center mt-2 font-semibold">{gift.name}</p>
          </div>
        ))}
      </div>

      {selectedGift && (
        <div className="mt-6 text-center">
          <p className="text-lg">🎉 لقد اخترت: {selectedGift.name}</p>
        </div>
      )}
    </main>
  );
}
