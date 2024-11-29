"use client"

import Image from 'next/image'
import { CiUser } from 'react-icons/ci'
import { HiMiniMagnifyingGlass } from 'react-icons/hi2'
import { IoSettingsOutline } from 'react-icons/io5'
import { format, getDate, getDay, getHours, getMonth, getYear } from 'date-fns'
import { userEx } from './../../jsons/daily';
import { UpcomingFocus } from './components/UpcomingFocus'
import { useEffect, useState } from 'react'
import { TodoContainer } from './components/TodoContainer'

export default function Home() {
  const user = userEx

  const now = Date.now()
  const dayOfWeek = format(now, 'EEE')
  const todayFormatted = format(now, 'MMM, dd')

  const [today, setToday] = useState({ year: 0, month: 0, day: 0, hour: 0 });
  const [todayInstances, setTodayInstances] = useState<any[]>([])



  useEffect(() => {
    getTodaysTime()
  }, [user?.instances])

  useEffect(() => {
    if (today.year && today.month && today.day) {
      getTodaysTasks();
    }
  }, [today])
  

  function getTodaysTime() {
    const hour = getHours(now)
    const year = getYear(now)
    const day = getDate(now)
    const month = getMonth(now) + 1
    setToday({ year, month, day, hour })
  }


  function getTodaysTasks() {
    console.log('user:', user)
    setTodayInstances(
      user?.instances?.filter(
        instance => {
          console.log('getDay(instance?.timestamp):', getDay(instance?.timestamp))
          return getDate(instance?.timestamp) === today.day &&
            getMonth(instance?.timestamp) + 1 === today.month &&
            getYear(instance?.timestamp) === today.year
        }
      )
    )
    console.log('setTodayInstances:', todayInstances)
  }


  console.log('dateNow:', todayFormatted)
  return (
    <>
        <h1 className="text-4xl mb-2 text-white">Today</h1>
        <h2 className="flex flex-row items-center ps-1 gap-2 text-base-content mb-5">
          <span>{todayFormatted}</span>
          <span>•</span>
          <span>{dayOfWeek}</span>
        </h2>
        <UpcomingFocus todayInstances={todayInstances} today={today} />
        <TodoContainer />
    </>
  )
}
