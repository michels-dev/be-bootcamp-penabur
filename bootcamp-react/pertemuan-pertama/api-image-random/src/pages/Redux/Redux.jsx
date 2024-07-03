import { Provider } from 'react-redux';
import ReduxCard from "../../components/Cards/ReduxCard";
import store from "../../components/store/store";

export default function Redux() {
  const cardData = [
    {
      title: 'Redux in React'
    }
  ];

  return (
    <>
      <Provider store={store}>
      <div className="flex flex-wrap justify-center mt-10">
        {cardData.map((card, index) => (
          <ReduxCard key={index} title={card.title}/>
        ))}
      </div>
      </Provider>
    </>
  );
}