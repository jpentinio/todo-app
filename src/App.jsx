import { useContext, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Layout from "./Layout";
import Navbar from "./components/Navbar/Navbar";
import AddTodo from "./components/AddTodo/AddTodo";
import TodoForm from "./components/TodoForm/TodoForm";
import { ThemeContext, ThemeProvider } from "./context/ThemeContext";

function App() {
  return (
    <ThemeProvider>
      <Layout>
        <div className="w-1/3">
          <Navbar />
          <AddTodo />
          <TodoForm />
          <div className="text-center text-dark-grayish-blue my-12">
            Drag and drop to reorder list
          </div>
        </div>
      </Layout>
    </ThemeProvider>
  );
}

export default App;
