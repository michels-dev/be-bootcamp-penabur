import { Button } from "primereact/button";
import { useDispatch } from 'react-redux';
import { reset } from "../store/actions/actions";

export default function BtnReduxReset() {
  const dispatch = useDispatch();

  return(
    <>
      <Button
        label="Button Reset"
        className="btn btn-outline btn-error btn-sm mt-2 ml-4"
        type="submit"
        onClick={() => dispatch(reset())}
      />
    </>
  );

}