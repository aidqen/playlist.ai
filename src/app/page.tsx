"use client"

import Image from 'next/image'
import { CiUser } from 'react-icons/ci'
import { HiMiniMagnifyingGlass } from 'react-icons/hi2'
import { IoSettingsOutline } from 'react-icons/io5'
import { format, getDate, getDay, getHours, getMonth, getYear } from 'date-fns'
import { userEx } from './../../jsons/daily';
import { UpcomingFocus } from './components/UpcomingFocus'
import { useEffect, useState } from 'react'

export default function Home() {
  const user = userEx

  const now = Date.now()
  const dayOfWeek = format(now, 'EEE')
  const todayFormatted = format(now, 'MMM, dd')

  const [today, setToday] = useState({year: 0, month: 0, day: 0, hour: 0});
  const [todayInstances, setTodayInstances] = useState<any[]>([])
  


  useEffect(() => {
    getTodaysTime()
    getTodaysTasks()
  }, [user?.instances])

  function getTodaysTime() {
    const hour = getHours(now)
    const year = getYear(now)
    const day = getDate(now)
    const month = getMonth(now) + 1
    setToday({year, month, day, hour})
  }


  function getTodaysTasks() {
    setTodayInstances(
      user?.instances?.filter(
        instance =>
          getDay(instance?.timestamp) === today.day &&
          getMonth(instance?.timestamp) + 1 === today.month &&
          getYear(instance?.timestamp) === today.year
      )
    )
  }


  console.log('dateNow:', todayFormatted)
  return (
    <div className="flex flex-col w-full">
      <header className="flex flex-row w-full items-center justify-between">
        <div className="h-9 w-9 flex justify-center items-center bg-eerieBlack rounded-full">
          <IoSettingsOutline className="w-6 h-6" />
        </div>
        <div className="w-max relative">
          <input
            type="text"
            name="tasks"
            className="max:sm-w-[12rem] max-sm:h-[2.5rem] bg-eerieBlack rounded-[20px] ps-10 text-xs"
            placeholder="Search..."
          />
          <HiMiniMagnifyingGlass
            className="absolute top-1/2 -translate-y-1/2 left-4"
            size={20}
          />
        </div>
        <div className="h-9 w-9 flex justify-center items-center bg-eerieBlack rounded-full">
          <CiUser className="w-6 h-6" />
        </div>
      </header>
      <main className="w-full h-full pt-8">
        <h1 className="text-4xl mb-2">Today</h1>
        <h2 className="flex flex-row items-center ps-1 gap-2 text-[#444444ff] mb-5">
          <span>{todayFormatted}</span>
          <span>•</span>
          <span>{dayOfWeek}</span>
        </h2>
        <UpcomingFocus todayInstances={todayInstances} today={today}/>
      </main>
    </div>
  )
}
