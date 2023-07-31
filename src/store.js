import { create } from "zustand";
import { devtools, persist } from "zustand/middleware";

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
  todos: [], //LIST of todos
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
