'use client'

import { useParams } from 'next/navigation'
import { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { assignTasksToMonth } from '../../../../services/calendarUtils'
import { format, getHours } from 'date-fns'

interface MonthViewParams {}

export default function MonthView({}: MonthViewParams) {
  const params = useParams()
  const year = useSelector((state: any) => state.systemModule.year)
  const user = useSelector((state: any) => state.userModule.user)
  console.log('user:', user)
  const [month, setMonth] = useState<
    Array<Array<{ day: number; timestamp: number; tasks: any[] }>>
  >([])
  const [isMonthReady, setIsMonthReady] = useState(false);

  const monthsList = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ]
  const daysList = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']

  useEffect(() => {
    if (params?.time && typeof params.time === 'string') {
      const newMonth = year?.find(
        (month: any, idx: number) => idx + 1 === +(params?.time ?? 0)
      );
      if (newMonth) {
        setMonth(newMonth);
        setIsMonthReady(true)
      }
    }
  }, [params, year]);

  useEffect(() => {
    if (isMonthReady && user?.tasks && month?.length > 0) {
      const weeksWithTasks = assignTasksToMonth(month, user?.tasks ?? [])
      console.log('weeksWithTasks:', weeksWithTasks)
    }
  }, [user, isMonthReady])

  return (
    <div className="flex flex-col">
      <h2 className="font-semibold text-white mb-7">
        {params?.time ? monthsList[+params.time - 1] : ''}, 2024
      </h2>
      <div className="flex flex-col gap-2">
        <ul className="grid grid-cols-7 items-center gap-1 w-full">
          {daysList.map((day, idx) => (
            <h3
              key={day}
              className={`flex justify-center items-center py-1 px-2 bg-[#133E87] text-gray-300 min-w-[14%] text-sm rounded-md col-start-${
                idx + 1
              }`}
            >
              {day}
            </h3>
          ))}
        </ul>
        <div className="flex flex-col gap-1">
          {month?.map(
            (week: Array<{ day: number; tasks: any[] }>, idx: number) => (
              <ul
                key={idx}
                className={`week-${idx + 1} grid grid-cols-7 gap-1`}
              >
                {week.map((day, dayIdx) => (
                  <li
                    key={dayIdx}
                    className={`day flex flex-col items-center justify-between text-xs col-start-$
                  {dayIdx + 1} ${
                    day.day === null
                      ? 'bg-transparent'
                      : 'border-[#7AB2D3] border'
                  } pb-1 text-white min-w-[14%] min-h-[3.5em] rounded-md cursor-pointer`}
                  >
                    <div className="flex flex-row justify-start w-full gap-[0.1em] p-2">
                      {day?.tasks.map(task => (
                        <div
                          className="w-[0.35em] h-[0.35em] rounded-full"
                          style={{ backgroundColor: task.bg }}
                        ></div>
                      ))}
                    </div>
                    <span>{day.day}</span>
                  </li>
                ))}
              </ul>
            )
          )}
        </div>
      </div>
    </div>
  )
}
