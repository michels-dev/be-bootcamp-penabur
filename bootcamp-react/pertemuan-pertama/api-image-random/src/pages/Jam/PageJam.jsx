import { useEffect, useState } from "react";
import JamCard from "../../components/Cards/JamCard";

export default function PageJam() {
  const [date, setDate] = useState(new Date());

  useEffect(() =>{
    const timerID = setInterval(() => tick(), 1000);
    return() => {
      clearInterval(timerID);
    };
  }, []);

  const tick = () => {
    setDate(new Date());
  }

  const cardData = [
    {
      title: 'JAM LIFECYCLE',
    }
  ];
  return(
    <>
      <div className="flex flex-wrap justify-center mt-10">
        {cardData.map((card, index) => (
          <JamCard key={index} title={card.title} date={date.toLocaleString()} />
        ))};
      </div>
    </>
  )
}