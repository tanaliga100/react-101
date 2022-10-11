import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./components/Header";
import Tasks from "./components/Tasks";
import AddTask from "./components/AddTask";
import Button from "./components/Button";
import { useState } from "react";

function App() {
  const [showForm, setShowForm] = useState(false);
  const [tasks, setTasks] = useState([
    {
      id: 1,
      title: "Attend Scrum !",
      author: "Jordan",
      reminder: true,
    },
    {
      id: 2,
      title: "Learn React Subsequently",
      author: "Chris",
      reminder: false,
    },
    {
      id: 3,
      title: "Attend Udemy Course",
      author: "Martin",
      reminder: true,
    },
  ]);

  // addTask
  const addTask = (task) => {
    const id = Math.floor(Math.random() * 1000);
    const newTask = { ...task, id };
    setTasks([...tasks, newTask]);
  };
  // Delete Task
  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
    return tasks;
  };
  // toogleReminder
  const toggleReminder = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, reminder: !task.reminder } : task
      )
    );
  };
  // showForm

  return (
    <Router>
      <div className=" bg-slate-900">
        <Header />
        <Route>
          <div className="">
            <Button
              onShow={() => setShowForm(!showForm)}
              color="teal"
              text="Add"
              propsshowForm={showForm}
            />
            {showForm && <AddTask onAdd={addTask} />}
            {tasks.length > 0 ? (
              <Tasks
                tasks={tasks}
                onDelete={deleteTask}
                onToggle={toggleReminder}
              />
            ) : (
              ` Nothing to Show...`
            )}
          </div>
        </Route>
      </div>
    </Router>
  );
}

export default App;
