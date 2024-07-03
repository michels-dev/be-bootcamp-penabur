import { useSelector } from 'react-redux';

export default function DisplayCount() {
  const count = useSelector((state) => state.count);

  return(
    <>
      <span className="text-xs opacity-50">Number: {count}</span>
    </>
  );
}