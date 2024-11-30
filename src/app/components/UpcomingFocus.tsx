import { getDate, getHours, getMonth, getYear } from 'date-fns'
import { useEffect, useState } from 'react'
import { UpcomingTaskPreview } from './UpcomingTaskPreview';

interface UpcomingProps {
  todayTasks: Array<any>
  today: { hour: number; day: number; month: number; year: number }
}

export function UpcomingFocus(props: UpcomingProps) {
  const { todayTasks, today } = props
  const [nextTasks, setNextTasks] = useState<any[]>([])
  

  

  useEffect(() => {
    setNextUpTasks()
  }, [todayTasks, today])

  function setNextUpTasks() {
    const tasks = todayTasks.filter(
      task => getHours(task?.timestamp) >= today?.hour
    )
    setNextTasks(tasks)
  }

  
  return (
    <>
      <h3 className="mb-4 flex flex-row items-center gap-2 text-white font-normal">
        Upcoming Focus{' '}
        <span className="py-[0.33rem] px-3 bg-eerieBlack text-xs text-white rounded-full">
          6 tasks
        </span>
      </h3>
      <div className="grid grid-cols-[50%50%] p-4 bg-base-300 shadow-upcomingFocus  text-black rounded-[15px]">
        <div className="flex flex-col justify-between col-start-1">
          <ul className="flex flex-col items-start gap-3 mb-1">
            {todayTasks?.slice(0, 2).map(task => {
              return <UpcomingTaskPreview key={task?.id} task={task} />
            })}
          </ul>
          <div className="flex flex-row items-center justify-start gap-2 pt-4">
            <ul className="gap-1 flex flex-row items-center">
              {todayTasks?.map(task => (
                <li
                  key={task?.id}
                  className="list-none w-1 h-4 rounded-[15px]"
                  style={{ backgroundColor: task?.bg }}
                ></li>
              ))}
            </ul>
            <p className="text-base-content text-[0.825em]">
              {todayTasks.length ? `${todayTasks.length} Tasks Up Next` : (
                <>
                  No tasks today.<br />Enjoy your day!
                </>
              )}
            </p>
          </div>
        </div>
        <div className="h-full flex items-center justify-center">
          <button className="btn btn-neutral text-white shadow-lg">Open Calendar</button>
        </div>
      </div>
    </>
  )
}
