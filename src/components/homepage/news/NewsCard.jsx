import Image from "next/image";
import Link from "next/link";
import React from "react";
import { CiBookmark, CiShare2 } from "react-icons/ci";
import { FaEye } from "react-icons/fa";
import { MdOutlineStar } from "react-icons/md";

const NewsCard = ({ news }) => {
  return (
    <div className="card bg-base-100 shadow-sm">
      <div className="card-body">
        {/* Author info */}
        <div className="flex justify-between items-center bg-slate-200 p-3 rounded-md">
          <div className="flex gap-1.5 items-center ">
            <Image
              src={news.author?.img}
              alt={news.title}
              width={50}
              height={50}
              className="rounded-full"
            />
            <div>
              <h2>{news.author?.name}</h2>
              <p>{news.author?.published_date}</p>
            </div>
          </div>
          <div className="flex gap-1.5">
            <CiShare2 className="text-2xl" />
            <CiBookmark className="text-2xl" />
          </div>
        </div>

        <h2 className="card-title">{news.title}</h2>
        <figure>
          <Image
            src={news.image_url}
            alt={news.title}
            width={300}
            height={300}
            className="w-full"
          />
        </figure>
        <p className="line-clamp-3">{news.details}</p>

        <div className="flex justify-between items-center">
          <div className="flex gap-2">
            <h2 className="flex items-center gap-1.75">
              <MdOutlineStar className="text-yellow-400 text-xl" />
              {news.rating.number}
            </h2>
            <h2 className="flex items-center gap-1.75">
              <FaEye className="text-xl" />
              {news.total_view}
            </h2>
          </div>
          <Link href={`/news/${news._id}`}>
            <button className="btn">See More</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NewsCard;
