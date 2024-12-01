import { format, getHours } from "date-fns"

interface TaskPreviewProps {
    task: { id: string, timestamp: number, finishTimestamp: number, bg: string, title: string, description: string }
}

export function UpcomingTaskPreview(TaskPreviewProps: TaskPreviewProps) {
    const { task } = TaskPreviewProps
    const startTimeHours = format(task.timestamp, "h:mmaaa");
    const endTimeHours = format(task.finishTimestamp, "h:mmaaa");

    return (
        <li className="flex items-center gap-2">
            <div className="w-0.5 h-5 bg-cyan-400"></div>
            <div>
                <div className="text-white font-medium">Product Design</div>
                <div className="text-gray-400 text-sm">12:00 - 13:30</div>
            </div>
        </li>
    )

}