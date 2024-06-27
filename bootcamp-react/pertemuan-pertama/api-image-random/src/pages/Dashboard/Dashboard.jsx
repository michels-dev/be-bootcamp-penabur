import DashboardCard from "../../components/Cards/DashboardCard";

export default function Dashboard() {
  const cardData = [
    {
      title: 'GET API',
    },
  ];

  return (
    <div className="flex flex-wrap justify-center mt-10">
      {cardData.map((card, index) => (
        <DashboardCard key={index} title={card.title} content={card.content}/>
      ))}
    </div>
  )
}