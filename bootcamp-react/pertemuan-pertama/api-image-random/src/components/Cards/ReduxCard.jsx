import { Card } from "primereact/card";
import BtnReduxIncrement from "../Buttons/BtnReduxIncrement";
import BtnReduxDecrement from "../Buttons/BtnReduxDecrement";
import BtnReduxReset from "../Buttons/BtnReduxReset";
import DisplayCount from "../DisplayCount";

export default function ReduxCard({title}){
  return (
    <>
      <div className="card bg-base-100 w-full shadow-lg">
        <div className="card-body">
          <Card title={title} className="card-title"></Card>
          <DisplayCount/>
          <BtnReduxIncrement />
          <BtnReduxDecrement />
          <BtnReduxReset />
        </div>
      </div>
    </>
  );
}