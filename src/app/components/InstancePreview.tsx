import { format, getHours } from "date-fns"

interface InstancePreviewProps {
    instance: { id: string, timestamp: number, finishTimestamp: number, bg: string, title: string, description: string }
}

export function InstancePreview(InstancePreviewProps: InstancePreviewProps) {
    const { instance } = InstancePreviewProps
    const startTimeHours = format(instance.timestamp, "h:mmaaa");
    const endTimeHours = format(instance.finishTimestamp, "h:mmaaa");

    return (
        <li className="flex flex-row h-10 w-full gap-2">
            <div style={{ backgroundColor: instance?.bg }} className="h-full min-w-[0.28rem] rounded-full"></div>
            <div className="flex flex-col w-full">
                <h4 className="text-md text-white truncate">{instance?.title}</h4>
                <p className="text-sm text-white/60  truncate uppercase">{startTimeHours} - {endTimeHours}</p>
            </div>
        </li>
    )

}