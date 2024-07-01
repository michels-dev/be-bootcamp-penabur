import { Card } from "primereact/card";

export default function SiswaCard() {
return(
  <div className="card bg-base-100 w-full shadow-xl">
    <div className="card-body">
      <Card className="card-title">Card title!</Card>
      <p>If a dog chews shoes whose shoes does he choose?</p>
      <div className="card-actions justify-end">
        <button className="btn btn-primary">Buy Now</button>
      </div>
    </div>
  </div>
)
}