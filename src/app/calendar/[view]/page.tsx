"use client"

import { useParams, usePathname } from "next/navigation";
import { YearView } from "../components/YearView";
import { MonthView } from "../components/MonthView";
import { WeekView } from "../components/WeekView";
import { NavLink } from "@/components/NavLink";
import { useState } from "react";

export default function CalendarPage() {
    const params = useParams()
    const [view, setView] = useState(params?.view)
    const year = getDaysOfYear(2024);

    function getDaysOfYear(year: number) {
        return Array.from({ length: 12 }, (_, i) => ({
            month: i + 1,
            days: Array.from({ length: new Date(year, i + 1, 0).getDate() }, (_, j) => j + 1),
            tasks: []
        }))
    }

    function onSetView(value: string) {
        setView(value)
    }

    function returnTypeOfView() {
        return params?.view === 'year' ? (
            <YearView year={year} />
        ) : params?.view === 'month' ? (
            <MonthView/>
        ) : params?.view === 'week' ? (
            <WeekView />
        ) : (
            <YearView year={year} />
        )
    }

    const links = [{ id: '3', name: 'week', href: '/calendar/week' }, { id: '1', name: 'month', href: '/calendar/month' }, { id: '2', name: 'year', href: '/calendar/year' },]
    return (
        <div className="flex flex-col justify-start w-full">
            <div className="text-container flex flex-row items-end justify-around  text-white">
                {links.map(link => <NavLink key={link.id} href={link.href} cb={() => onSetView(link?.name)} className={`${view === link.name
                    ? 'text-white scale-[1.3]'
                    : 'text-white/60 hover:scale-110 hover:text-white'
                    } capitalize text-3xl transition-all duration-300 ease-in-out`}>{link?.name}</NavLink>)}
            </div>
            {returnTypeOfView()}
        </div>
    );
}
