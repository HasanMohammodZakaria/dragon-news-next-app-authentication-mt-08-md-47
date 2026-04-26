import { getNewsDetailsById } from "@/lib/data";
import Image from "next/image";
import Link from "next/link";
// import Image from "next/image";
// import Link from "next/link";
// import { CiBookmark, CiShare2 } from "react-icons/ci";
// import { FaEye } from "react-icons/fa";
// import { MdOutlineStar } from "react-icons/md";

const NewsDetailsPage = async ({ params }) => {
  const { id } = await params;
  console.log(id, "params");
  const news = await getNewsDetailsById(id);
  console.log(news, "news");

  return (
    <div className="container mx-auto my-8 card">
      News Details Page
      <h2>{news.title}</h2>
      <Image
        src={news.image_url}
        alt={news.title}
        width={300}
        height={300}
        className="w-full"
      />
      <Link href={`/category/${news.category_id}`}>
        <button className="btn">All news in this category </button>
      </Link>
    </div>
  );
};

export default NewsDetailsPage;
