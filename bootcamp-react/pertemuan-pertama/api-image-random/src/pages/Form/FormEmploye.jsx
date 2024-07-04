import CardFormEmploye from "../../components/Cards/CardFormEmploye";

export default function FormEmploye() {
  const cardData = [
    {
      title1: 'Form Employe',
      title2: 'Hasil Employe',
    }
  ];

  return (
    <div className="flex flex-wrap justify-center mt-10">
      {cardData.map((card, index) => (
        <CardFormEmploye key={index} title1={card.title1} title2={card.title2} />
      ))}
    </div>
  );
}
