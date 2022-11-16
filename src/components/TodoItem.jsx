import { Check } from "./ButtonDone";

export function TodoItem({
  id,
  description,
  isDone = false
}) {
  const className = isDone ? "done" : "";
  return (
    <>
      <li key={id} className={"item " + className}>{description} <Check /></li>
    </>
  );
}