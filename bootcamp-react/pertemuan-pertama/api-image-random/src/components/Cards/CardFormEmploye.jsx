import { Card } from "primereact/card";
import InputFinalForm from "../../pages/Form/Partials/InputFinalForm";

export default function CardFormEmploye({ title1, title2 }) {
  return (
    <div className="card bg-base-100 w-full shadow-lg">
      <div className="card-body grid grid-cols-2 gap-4">
        <div>
          <Card title={title1} className="card-title">
            <InputFinalForm />
          </Card>
        </div>
        <div>
          <Card title={title2} className="card-title">
            {/* hasil dari submit form input dipanggil dari value HasilFinalForm.jsx */}
          </Card>
        </div>
      </div>
    </div>
  );
}
