import { getDate, getHours, getMonth, getYear } from 'date-fns'
import { useEffect, useState } from 'react'

interface UpcomingProps {
  todayInstances: Array<any>,
  today: { hour: number, day:number, month: number, year: number }
}

export function UpcomingFocus(props: UpcomingProps) {
  const { todayInstances, today } = props
  const [first, setfirst] = useState()

  console.log('today:', today)

  useEffect(() => {
    setNextUpInstances();
  }, [todayInstances, today]);

  function setNextUpInstances() {
    return todayInstances.filter(instance => getHours(instance?.timestamp) >= today?.hour)
  }



  console.log('todayInstances:', todayInstances)
  return (
    <>
      <h3 className="mb-4 flex flex-row items-center gap-2">
        Upcoming Focus{' '}
        <span className="py-[0.33rem] px-3 bg-eerieBlack text-xs text-white rounded-full">
          6 tasks
        </span>
      </h3>
      <div className="flex flex-row justify-between p-4 bg-[#6A55E0ff] rounded-[15px]">
        <div className="flex flex-col">
          <ul className="flex flex-col items-start gap-2">
            <li className="flex flex-row h-10 gap-2">
              <div className="h-full w-[0.28rem] rounded-full bg-lightCoral"></div>
              <div className="flex flex-col">
                <h4 className="text-md">Review</h4>
                <p className="text-sm text-[#baafff]">11 AM - 1 PM</p>
              </div>
            </li>
            <li className="flex flex-row h-10 gap-2">
              <div className="h-full w-[0.28rem] rounded-full bg-lightCoral"></div>
              <div className="flex flex-col">
                <h4 className="text-md">Review</h4>
                <p className="text-sm text-[#baafff]">11 AM - 1 PM</p>
              </div>
            </li>
          </ul>
          <div className="flex flex-row items-center justify-start">
            <ul className="gap-1 flex flex-row  ">
              {todayInstances?.map(instance => 
                <li key={instance?.id} className="list-none w-1 h-4 rounded-[15px]" style={{ backgroundColor: instance?.bg }}></li>
              )}
            </ul>
            <p className="pt-2">{todayInstances.length} Tasks Up Next</p>
          </div>
        </div>
      </div>
    </>
  )
}
