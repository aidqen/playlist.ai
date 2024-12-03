"use client"

import { useParams } from "next/navigation"

interface WeekViewProps {

}

export default function WeekView() {
    const params = useParams()
     
    return <h1>Week</h1>
}