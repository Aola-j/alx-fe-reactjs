import { useState } from "react";

function AddTodoForm({ addTodo }) {
  const [newTodo, setNewTodo] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (newTodo.trim() === "") return;
    addTodo(newTodo);
    setNewTodo("");
  };

  return (
    <form onSubmit={handleSubmit} className="flex space-x-2 mt-4">
      <input
        type="text"
        placeholder="Add a new todo"  // 👈 This exact text matters for the test
        value={newTodo}
        onChange={(e) => setNewTodo(e.target.value)}
        className="border p-2 rounded w-full"
      />
      <button
        type="submit"
        className="bg-blue-500 text-white px-4 py-2 rounded"
      >
        Add
      </button>
    </form>
  );
}

export default AddTodoForm;

