import LeftSidebar from "@/components/homepage/news/LeftSidebar";
import NewsCard from "@/components/homepage/news/NewsCard";
import RightSidebar from "@/components/homepage/news/RightSidebar";
import { getCategories, getNewsByCategoryId } from "@/lib/data";
import React from "react";

const NewsCategoryPage = async ({ params }) => {
  const { id } = await params;

  console.log(id, "paramsRes");

  const categories = await getCategories();
  const news = await getNewsByCategoryId(id);

  return (
    <div className="container mx-auto grid grid-cols-12 gap-5 py-15">
      <div className=" col-span-3">
        <LeftSidebar categories={categories} activeId={id} />
      </div>

      <div className="col-span-6">
        <h2 className="font-bold text-lg mb-6">News by category</h2>
        <div className="space-y-4">
          {news.length > 0 ? (
            news.map((n) => {
              return <NewsCard key={n._id} news={n}></NewsCard>;
            })
          ) : (
            <h2 className="font-bold text-2xl text-center">No news found</h2>
          )}
        </div>
      </div>

      <div className="col-span-3">
        <RightSidebar />
      </div>
    </div>
  );
};

export default NewsCategoryPage;
