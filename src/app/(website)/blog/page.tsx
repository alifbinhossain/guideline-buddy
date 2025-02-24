import React from "react";
import BlogItems from "./components/BlogItems";
import BlogHero from "./components/BlogHero";

const Page = () => {
  return (
    <div className=' px-8 xl:px-[141px] py-10 xl:py-[202px] sb'>
      <BlogHero />
      <BlogItems />
    </div>
  );
};

export default Page;
