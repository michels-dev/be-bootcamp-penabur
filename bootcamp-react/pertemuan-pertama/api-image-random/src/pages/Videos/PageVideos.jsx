import VideosCard from "../../components/Cards/VideosCard";

export default function PageVideos() {
  const cardData = [
    {
      title: 'GET VIDEOS',
    },
  ];

  return (
    <div className="flex flex-wrap justify-center mt-10">
      {cardData.map((card, index) => (
        <VideosCard key={index} title={card.title} content={card.content}/>
      ))}
    </div>
  )
}