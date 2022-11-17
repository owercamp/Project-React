export function Check() {
  return (
    <>
      <button onClick={(e) => {
        e.currentTarget.parentElement.classList.add("done");
        e.currentTarget.setAttribute("hidden",true);
      }
      }>Done</button>
    </>
  );
}