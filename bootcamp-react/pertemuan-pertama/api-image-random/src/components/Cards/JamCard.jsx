import { Card } from "primereact/card";

export default function JamCard({title, date}) {
  return(
    <>
      <div className="card bg-base-100 w-full shadow-xl">
        <div className="card-body">
          <Card title={title} className="card-title" />
          <span className="text-xs opacity-50">{date}</span>
        </div>
      </div>
    </>
  )
}