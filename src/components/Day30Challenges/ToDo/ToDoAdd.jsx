import { useId } from "react";

export const TodoAdd = () => {
  const id1 = useId();
  const id2 = useId();
  return (
    <div>
      <div id={id1}>Text2</div>
      <div id={id2}>Text2</div>
    </div>
  );
};
