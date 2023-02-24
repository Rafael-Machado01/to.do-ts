import { Header } from "./components/Header";
import { NewTask } from "./components/NewTask";
import { Tasks } from "./components/Tasks";
import "./global.css";

export function App() {
  return (
    <>
      <Header />
      <NewTask />
      <Tasks />
    </>
  );
}
