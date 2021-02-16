import Header from './components/Header';
import Tasks from './components/Tasks';
import AddTask from './components/AddTask';
import { useState } from 'react';

function App() {
  // const name = 'Arwakalack';
  // const fill = true;
  const [tasks, setTasks] = useState([
    {
      id: 1,
      text: 'Pray fajr',
      day: 'Feb 3rd at 6:00am',
      reminder: true,
    },
    {
      id: 2,
      text: 'Pray duhr',
      day: 'Feb 3rd at 1:00pm',
      reminder: false,
    }, {
      id: 3,
      text: 'Pray asr',
      day: 'Feb 3rd at 3:15pm',
      reminder: true,
    }
  ])

  // Add Task
  const addTask = (task) => {
    const id = Math.floor(Math.random() * 10000) + 1
    const newTask = { id, ...task }
    setTasks([...tasks, newTask])
    console.log(tasks)
  }

  // Delete Task
  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id))
  }

  // Toggle Reminder
  const toggleReminder = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? {
          ...task, reminder: !task.reminder
        } : task
      )
    )
  }

  return (
    <div className="container">
      <Header title='Task Tracker' />
      <AddTask onAdd={addTask} />
      {tasks.length > 0 ? (
        <Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder} />
      ) : (
          'No tasks left!'
        )}
      {/* <h2>Hey {name} </h2>
      <h3>Response: Hey, {fill ? "what's up!" : "I can't talk rn"}</h3> */}
    </div>
  );
}

export default App;
