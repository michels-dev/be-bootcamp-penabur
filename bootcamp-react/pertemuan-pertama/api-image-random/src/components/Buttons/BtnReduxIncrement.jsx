import { Button } from "primereact/button";
import { useDispatch } from 'react-redux';
import { increment } from "../store/actions/actions";

export default function BtnReduxIncrement() {
  const dispatch = useDispatch();

  return(
    <>
      <Button
        label="Button Increment"
        className="btn btn-outline btn-info btn-sm mt-2 ml-4"
        type="submit"
        onClick={() => dispatch(increment())}
      />
    </>
  );

}