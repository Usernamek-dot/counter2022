import { FunctionComponent, useState } from "react";

interface Props {
  value: number;
}

export const Counter: FunctionComponent<Props> = ({ value }) => {
  const [counter, setCounter] = useState(value);

  const handleIncreaseButton = () => setCounter(counter + 1);
  const handleDecreaseButton = () => setCounter(counter - 1);
  const handleResetButton = () => setCounter(value);

  return (
    <>
      <h5>This is the counter 🕟 </h5>
      <h6>{counter} </h6>
      {/* buttons */}
      <button onClick={handleIncreaseButton}> +1️⃣ </button>
      <button onClick={handleDecreaseButton}> -1️⃣ </button>
      <button onClick={handleResetButton}> Reset 🕐 </button>
    </>
  );
};
