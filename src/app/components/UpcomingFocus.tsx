import { getDate, getHours, getMonth, getYear } from 'date-fns'
import { useEffect, useState } from 'react'
import { InstancePreview } from './InstancePreview'

interface UpcomingProps {
  todayInstances: Array<any>
  today: { hour: number; day: number; month: number; year: number }
}

export function UpcomingFocus(props: UpcomingProps) {
  const { todayInstances, today } = props
  const [nextInstances, setNextInstances] = useState<any[]>([])
  console.log('nextInstances:', nextInstances)

  console.log('today:', today)

  useEffect(() => {
    setNextUpInstances()
  }, [todayInstances, today])

  function setNextUpInstances() {
    const instances = todayInstances.filter(
      instance => getHours(instance?.timestamp) >= today?.hour
    )
    setNextInstances(instances)
  }

  console.log('todayInstances:', todayInstances)
  return (
    <>
      <h3 className="mb-4 flex flex-row items-center gap-2 text-white font-normal">
        Upcoming Focus{' '}
        <span className="py-[0.33rem] px-3 bg-eerieBlack text-xs text-white rounded-full">
          6 tasks
        </span>
      </h3>
      <div className="grid grid-cols-[50%50%] p-4 bg-base-300 text-black rounded-[15px]">
        <div className="flex flex-col justify-between col-start-1">
          <ul className="flex flex-col items-start gap-3 mb-1">
            {todayInstances?.slice(0, 2).map(instance => {
              return <InstancePreview key={instance?.id} instance={instance} />
            })}
          </ul>
          <div className="flex flex-row items-center justify-start gap-2 pt-4">
            <ul className="gap-1 flex flex-row items-center">
              {todayInstances?.map(instance => (
                <li
                  key={instance?.id}
                  className="list-none w-1 h-4 rounded-[15px]"
                  style={{ backgroundColor: instance?.bg }}
                ></li>
              ))}
            </ul>
            <p className="text-base-content text-[0.825em]">
              {todayInstances.length} Tasks Up Next
            </p>
          </div>
        </div>
        <div className="h-full flex items-center justify-center">
          <button className="btn glass btn-neutral">Open Calendar</button>
        </div>
      </div>
    </>
  )
}
