import { create } from "zustand";
import { devtools, persist } from "zustand/middleware";

const initialTodos = [
  {
    id: "7bdb7249-a257-4c17-86ea-cd5cd027bb4c",
    isCompleted: true,
    text: "Complete online JavaScript course",
  },
  {
    id: "e4d1f3d2-e9ae-4250-b879-91d8be2b0b4f",
    isCompleted: false,
    text: "Jog around the park 3x",
  },
  {
    id: "5983039c-f996-4028-8934-4bc17b32f705",
    isCompleted: false,
    text: "Complete Todo App on Frontend Mentor",
  },
  {
    id: "211e4dc5-ffb1-4b3d-8e75-8b100f266706",
    isCompleted: false,
    text: "10 minutes meditation",
  },
];

const setIsCompleted = (todos, id) => {
  for (let i in todos) {
    if (todos[i].id === id) {
      todos[i].isCompleted = !todos[i].isCompleted ? true : false;
      break;
    }
  }
  return [...todos];
};

const store = (set) => ({
  todos: [...initialTodos], //LIST of todos
  setTodos: (todos) => set((store) => ({ todos })),
  filter: "all",
  setFilter: (filter) => set(() => ({ filter })),
  addTodo: (todo) =>
    set(
      (store) => ({
        todos: [...store.todos, todo],
      }),
      false,
      "addTodo"
    ),
  setCompleted: (id) =>
    set((store) => ({
      todos: setIsCompleted(store.todos, id),
    })),
  deleteTodo: (id) =>
    set((store) => ({
      todos: store.todos.filter((todo) => todo.id !== id),
    })),
  clearCompleted: () =>
    set((store) => ({
      todos: store.todos.filter((todo) => !todo.isCompleted),
    })),
});

const log = (config) => (set, get, api) =>
  config(
    (...args) => {
      console.log(args);
      set(...args);
    },
    get,
    api
  );

export const useStore = create(
  log(persist(devtools(store), { name: "store" }))
);
