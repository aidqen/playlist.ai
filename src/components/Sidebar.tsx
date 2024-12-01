"use client"

import { TOGGLE_SIDEBAR } from "@/store/reducers/system.reducer"
import { CalendarDays } from "lucide-react"
import { useDispatch, useSelector } from "react-redux"
import { NavLink } from "./NavLink"

export function Sidebar() {
    const dispatch = useDispatch()
    const isSidebarOpen = useSelector((state: any) => state.systemModule.isSidebarOpen)

    function toggleSidebar() {
        dispatch({ type: TOGGLE_SIDEBAR })
    }

    return (
        <div id="drawer-navigation" className={`fixed top-0 left-0 z-40 w-64 max-sm:w-screen h-screen p-4 overflow-y-auto transition-transform ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'} bg-base-100 dark:bg-gray-800`} tabIndex={-1} aria-labelledby="drawer-navigation-label">
            <h5 id="drawer-navigation-label" className="text-xl font-semibold text-white uppercase dark:text-gray-400">Menu</h5>
            <button type="button" onClick={toggleSidebar} className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 absolute top-2.5 end-2.5 inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white" >
                <svg aria-hidden="true" className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
                {/* <span className="sr-only">Close menu</span> */}
            </button>
            <div className="pt-5 overflow-y-auto">
                <ul className="space-y-2 text-white font-medium">
                    <li className="flex flex-row items-center gap-2">
                        <NavLink href="/calendar">

                            <CalendarDays />
                            <span className="text-lg">Calendar</span>
                        </NavLink>
                    </li>

                </ul>
            </div>
        </div>
    )
}