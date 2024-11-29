import { format, getHours } from "date-fns"

interface TaskPreviewProps {
    task: { id: string, timestamp: number, finishTimestamp: number, bg: string, title: string, description: string }
}

export function UpcomingTaskPreview(TaskPreviewProps: TaskPreviewProps) {
    const { task } = TaskPreviewProps
    const startTimeHours = format(task.timestamp, "h:mmaaa");
    const endTimeHours = format(task.finishTimestamp, "h:mmaaa");

    return (
        <li className="flex flex-row h-10 w-full gap-2">
            <div style={{ backgroundColor: task?.bg }} className="h-full min-w-[0.28rem] rounded-full"></div>
            <div className="flex flex-col  w-full">
                <h4 className="text-md text-white font-normal h-max truncate">{task?.title}</h4>
                <p className="text-sm text-neutral-content h-max truncate uppercase">{startTimeHours} - {endTimeHours}</p>
            </div>
        </li>
    )

}