import { Button } from "primereact/button";
import { useDispatch } from 'react-redux';
import { decrement } from "../store/actions/actions";

export default function BtnReduxDecrement() {
  const dispatch = useDispatch();

  return(
    <>
      <Button
        label="Button Decrement"
        className="btn btn-outline btn-warning btn-sm mt-2 ml-4"
        type="submit"
        onClick={() => dispatch(decrement())}
      />
    </>
  );

}