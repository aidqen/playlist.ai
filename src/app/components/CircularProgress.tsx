interface CircularProgressProps {
    percent: number; // Percentage of progress (e.g., 50)
}

export const CircularProgress: React.FC<CircularProgressProps> = ({ percent }) => {

    return (
        <div className="flex justify-center items-center bg-whiteLowOpacity p-1 gap-2 rounded-[15px] w-[4.8rem] h-max ">

            <div className="radial-progress text-white text-xs p-1 after:hidden" style={{ "--value": percent, "--size": "0.5rem", "--thickness": "2.5px" } as React.CSSProperties} role="progressbar"></div>
            <h4 className="text-white">{Math.floor(percent)}%</h4>
        </div>
    );
};