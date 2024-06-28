import { Button } from "primereact/button"

const BtnSubmitImages = ({onclick}) => {
return(
  <Button
  label='Submit'
  className="btn btn-outline btn-primary btn-sm mt-2 ml-4"
  type="submit"
  onClick={onclick}
/>
);
};

export default BtnSubmitImages;