import Layout from "./Layout";
import Navbar from "./components/Navbar/Navbar";
import AddTodo from "./components/AddTodo/AddTodo";
import TodoForm from "./components/TodoForm/TodoForm";
import { ThemeProvider } from "./context/ThemeContext";

function App() {
  return (
    <ThemeProvider>
      <Layout>
        <div className="w-10/12 md:w-2/3 lg:w-1/3">
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
