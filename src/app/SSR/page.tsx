import React from "react";

export const dynamic = "force-dynamic"; // This will ensure the page is static and not server-rendered on each request

export const metadata = {
  title: "Static Page",
  description: "This is a static page with no dynamic content.",
};

const fetchData = async () => {
  const users = await fetch("https://randomuser.me/api/?results=10");
  return users.json();
};

const page = async () => {
  const users = await fetchData();

  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
        <ul>
          {/*  */}
          {users.results.map((user, indx) => (
            <li key={indx}>{user.name.first}</li>
          ))}
        </ul>
      </main>
    </div>
  );
};

export default page;
