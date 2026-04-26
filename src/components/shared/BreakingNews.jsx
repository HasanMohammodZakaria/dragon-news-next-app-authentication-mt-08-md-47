import Marquee from "react-fast-marquee";

const news = [
  {
    id: 1,
    title: "Smart Packing Tips for Modern Travelers",
  },
  {
    id: 2,
    title: "How to Pack Like a Pro in 2026",
  },
  {
    id: 3,
    title: "Minimal Packing: Travel Light, Travel Smart",
  },
  {
    id: 4,
    title: "Top 10 Packing Mistakes You Must Avoid",
  },
  {
    id: 5,
    title: "Ultimate Packing Checklist for Every Trip",
  },
  {
    id: 6,
    title: "Carry-On Only: The Future of Travel Packing",
  },
  {
    id: 7,
    title: "Space Saving Packing Hacks You Should Know",
  },
  {
    id: 8,
    title: "Travel Essentials: What You Should Never Forget",
  },
  {
    id: 9,
    title: "Efficient Packing Strategies for Busy People",
  },
  {
    id: 10,
    title: "From Chaos to Order: Organize Your Luggage",
  },
];

const BreakingNews = () => {
  return (
    <div className="flex justify-between items-center bg-gray-300 py-4 px-2 rounded-md container mx-auto">
      <button className="btn bg-purple-600 text-white">Latest News</button>
      <Marquee pauseOnHover={true} speed={80}>
        {news.map((n) => {
          return (
            <span key={n.id} className="mx-3">
              • {n.title}
            </span>
          );
        })}
      </Marquee>
    </div>
  );
};

export default BreakingNews;
