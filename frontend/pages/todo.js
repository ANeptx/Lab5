import { useEffect, useState } from 'react'
import Link from 'next/link'
import styles from '../styles/Todo.module.css'

const Todo = ({ avatar_url, login }) => {

    const [tasks, setTasks] = useState([])
    // { id: 1, name: 'Do homework' },
    // { id: 2, name: 'Read book' }])

    const [name, setName] = useState('')

    const [weight, setWeight] = useState('')

    const [idEdit, setIdEdit] = useState(0)

    useEffect(async () => {
        let ts = await getBears();
        console.log(ts)
        setTasks(ts)
    }, [])


    const renderTasks = () => {
        if (tasks && tasks.length)
            return tasks.map((task, index) => (
                <li key={index} className="relative m-4 border-2 border-dashed p-8">
                    <div className="absolute bottom-0 right-0 text-xl mr-2 text-indigo-200 drop-shadow-lg">
                        {index + 1}
                    </div>
                    {(idEdit !== task.index) ?
                        <div className="text-3xl text-indigo-800 drop-shadow-lg drop-shadow-lg max-w-xs">{task.name} {task.weight}</div> :
                        (<input
                            className="text-3xl text-indigo-800"
                            type="text"
                            name="name"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                        />)
                    }
                    <div><img className= "rounded-full inline mr-4" src = {task.photo} width="160"/></div>
                    <div className="mt-8 flex justify-center">
                        <button
                            className="mr-4 drop-shadow-lg bg-yellow-300 text-indigo-900 hover:bg-yellow-200 rounded-lg p-4"
                            onClick={() => editTask(task.id)}>
                            Edit
                        </button>
                        <button
                            className="mr-4 drop-shadow-lg bg-red-300 text-indigo-900 hover:bg-red-200 rounded-lg p-4"
                            onClick={() => deleteTask(task.id)}>
                            Delete
                        </button>
                    </div>
                </li>))
    }

    const editTask = (id) => {
        setIdEdit(id)
        let t = tasks.find((task) => +task.id === +id)
        setName(t.name)
        setWeight(t.weight)
        if (+idEdit === +id) { //Press Edit again
            let newTasks = tasks.map((task, index) => {
                if (+task.id === +id)
                    tasks[index].name = name
                if (+task.id === +id)
                    tasks[index].weight = weight
                return task
            })
            setTasks(newTasks)
            setIdEdit(0)
        }
    }

    const deleteTask = (id) => {
        console.log('delete id: ', id)
        let newTasks = tasks.filter((task) => task.id !== +id)
        setTasks(newTasks)
    }

    const addTask = (name) => {
        setTasks([...tasks, { id: tasks[tasks.length - 1].id + 1, name }])
        console.log(tasks)
    }

    return (
        <div className="h-screen flex flex-col items-center p-8">
            <div className={styles.topRight}>
                <Link href="/"><a>Home</a></Link>
            </div>
            <div className="flex items-center">
                <h1 className="m-4 text-indigo-800 text-4xl drop-shadow-lg">

                    <img className="rounded-full inline mr-4" src={avatar_url} width="80" />
                    Todo  for <span>{login} </span>
                </h1>
            </div>

            <div className="flex items-center m-4">
                <input
                    className="rounded-lg text-green-800 text-4xl drop-shadow-lg pl-2 ml-2 mr-4"
                    type="text"
                    name="addTask"
                    onChange={(e) => (setName(e.target.value))}
                />
                <button
                    className="bg-green-600 text-indigo-200 hover:bg-green-500 p-2 rounded-lg"
                    onClick={() => addTask(name)}>Add</button>
            </div>
            <ul className="flex flex-wrap">
                {renderTasks()}
            </ul>
        </div>
    )
}

const getBears = async () => {
    const res = await fetch('http://localhost:8000/')
    const json = await res.json()
    console.log(json)
    return json;
}

Todo.getInitialProps = async (ctx) => {
    const res = await fetch('https://api.github.com/users/Aneptx')
    const json = await res.json()
    return { login: json.login, avatar_url: json.avatar_url }
}

export default Todo

