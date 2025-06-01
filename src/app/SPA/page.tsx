"use client";
import React, { useEffect, useState } from "react";

const SPA = () => {
  const [users, setUsers] = useState<[]>([]);

  useEffect(() => {
    fetch("https://randomuser.me/api/?results=10")
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setUsers(data.results);
      });
  }, []);
  if (!users || users.length === 0) {
    return (
      <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
        <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
          <p>Loading...</p>
        </main>
      </div>
    );
  }
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
        <ul>
          {users?.map((user, indx) => (
            <li key={indx}>{(user as any).name.first}</li>
          ))}
        </ul>
      </main>
    </div>
  );
};

export default SPA;
