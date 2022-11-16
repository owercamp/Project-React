import { TodoItem } from "./TodoItem";

export function TodoList (){
  return (
    <>
    <span>Lista de Pendientes</span>
    <ul className="card">
      <TodoItem description={"Ver las sesión N° 6"} />
      <TodoItem description={"Hacer el componente práctico"} />
      <TodoItem description={"Guardar cámbios"} />
    </ul>
    </>
  )
}