import { create } from "zustand";
import { devtools, persist } from "zustand/middleware";

const setIsCompleted = (todos, id) => {
  for (let i in todos) {
    if (todos[i].id === id) {
      todos[i].isCompleted = true;
      break;
    }
  }
  return [...todos];
};

const setFilteredTodos = (todos, filter) => {
  let newTodos = [];
  if (filter === "all") newTodos = todos;
  if (filter === "active")
    newTodos = todos.filter((todo) => todo.isCompleted === false);
  if (filter === "completed")
    newTodos = todos.filter((todo) => todo.isCompleted === true);

  return [...newTodos];
};

const store = (set) => ({
  todos: [],
  filteredTodos: [],
  filter: "all",
  setFilter: (filter) =>
    set((store) => ({
      filteredTodos: setFilteredTodos(store.todos, filter),
      filter,
    })),
  addTodo: (todo) =>
    set(
      (store) => ({
        todos: [...store.todos, todo],
        filteredTodos: setFilteredTodos([...store.todos, todo], store.filter),
      }),
      false,
      "addTodo"
    ),
  setCompleted: (id) =>
    set((store) => ({
      todos: setIsCompleted(store.todos, id),
      filteredTodos: setFilteredTodos(
        setIsCompleted(store.todos, id),
        store.filter
      ),
    })),
  deleteTodo: (id) =>
    set((store) => ({
      todos: store.todos.filter((todo) => todo.id !== id),
      filteredTodos: setFilteredTodos(
        store.todos.filter((todo) => todo.id !== id),
        store.filter
      ),
    })),
  clearCompleted: () =>
    set((store) => ({
      todos: store.todos.filter((todo) => !todo.isCompleted),
      filteredTodos: setFilteredTodos(
        store.todos.filter((todo) => !todo.isCompleted),
        store.filter
      ),
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
