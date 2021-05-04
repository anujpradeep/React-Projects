import Header from './components/Header'
import {BrowserRouter as Router,Route} from 'react-router-dom'
import Tasks from './components/Tasks'
import Footer from './components/Footer'
import {useState, useEffect} from 'react'
import AddTask from './components/AddTask'
import About from './components/About'



function App() {
  const[showAddTask, setShowAddTask] = useState(false)
  const [tasks, setTasks] = useState ([])

  useEffect(() => {
    const getTasks = async () =>{
      const tasksFromServer = await fetchTasks()
      setTasks(tasksFromServer)
    }
    getTasks()
  }, [])

  //Fetch Tasks from DataBase
  const fetchTasks = async () => {
    const res = await fetch('http://localhost:5000/tasks')
    const data = await res.json()
    return data
  }
    //Fetch Task from DataBase
    const fetchTask = async (id) => {
      const res = await fetch(`http://localhost:5000/tasks/${id}`)
      const data = await res.json()
      return data
    }

//Add Task
async function addTask(task){
  const res = await fetch('http://localhost:5000/tasks', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(task)
  })
  const data = await res.json()
  console.log(data)
  setTasks([...tasks, data])
}

//delete Task
async function deleteTask(id) {
  await fetch(`http://localhost:5000/tasks/${id}`,{
    method: 'DELETE',
  })

  setTasks(tasks.filter((task) => task.id !== id))
}

//Toggle Reminder
async function toggleReminder(id) {
  const taskToToggle = await fetchTask(id)
  const updTask = {...taskToToggle, reminder: !taskToToggle.reminder}
  const res = await fetch(`http://localhost:5000/tasks/${id}`, {
  method: 'PUT',
  headers: {
    'Content-Type': 'application/json'
  },
  body: JSON.stringify(updTask)
  })
  const data = await res.json()

  setTasks(tasks.map((task) => task.id ===id ? {...task, reminder: !task.reminder} : task))
}
  return(
    <Router>
    <div className='container'>
      <Header onAdd={() => setShowAddTask(!showAddTask)} showAdd={showAddTask}/>
     
    <Route path='/' exact render={(props) => (
      <>
       {showAddTask && <AddTask onAdd={addTask}/>}
      {tasks.length > 0 ? (
        <Tasks 
          tasks={tasks} 
          onDelete={deleteTask}
          onToggle={toggleReminder}
        />
        ) : (
          'No Task to show'
          )}
      </>
    )}/>
    <Route path='/about' component={About}/>
    <Footer />
    </div>
    </Router>
  )
}

export default App