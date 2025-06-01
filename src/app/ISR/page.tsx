import React from "react";

// This is a static page that will be reavaluated every 10 seconds
export const metadata = {
  title: "ISR Page",
  description: "This page is statically generated and will be revalidated every 10 seconds.",
};

export const revalidate = 0; // Revalidate every 10 seconds

const page = () => {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">static {Date.now()}</main>
    </div>
  );
};

export default page;
