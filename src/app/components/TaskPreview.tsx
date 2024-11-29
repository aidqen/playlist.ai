import { useRef, useState } from "react"
import { ImCheckmark } from "react-icons/im"
import { IoMdCheckmark } from "react-icons/io"
import { IoCheckmark } from "react-icons/io5"

interface TodoProps {
  task: {
    id: string
    title: string
    description: string
    subtasks: Array<any>
    bg: string
    isDone: boolean
  }
}

export function TaskPreview({ task }: TodoProps) {
  const [taskToEdit, setTaskToEdit] = useState(task);
  const {bg, title, description, subtasks, isDone} = taskToEdit;
  

  const handleSpanClick = () => {
    setTaskToEdit({...taskToEdit, isDone: !taskToEdit.isDone})
  };

  return (
    <li style={{backgroundColor: bg}} className="flex flex-col p-2 rounded-[15px] w-full">
          <div className="flex flex-row items-center justify-between">
            <label onClick={handleSpanClick} className="flex flex-row items-center">
              <span  className={`flex justify-center items-center w-5 h-5 border-2 border-white rounded-full mr-2 flex-shrink-0 peer-checked:bg-white
                `}>
                  <ImCheckmark className={`${isDone ? '' : 'hidden'}`} size={10}/>
                </span>
              <h3 className="text-md text-white">{title}</h3>
            </label>
            {description && <p>{}</p>}
          </div>
          {subtasks && (
              <div className="flex flex-row items-center justify-between"></div>
            )}
        </li>
  )
}
