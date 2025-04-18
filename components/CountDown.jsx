"use client";

import Countdown from "react-countdown";

const CountDown = () => {
    const targetDate = new Date(new Date().getFullYear(), 5, 26); // June is month 5

    if (targetDate < new Date()) {
        targetDate.setFullYear(targetDate.getFullYear() + 1);
    }

    const renderer = ({ days, hours, minutes, seconds, completed }) => {
        if (completed) {
            return <span>🎉 It's June 26!</span>;
        } else {
            return (
                <div className="flex items-center justify-center gap-4 text-gray-800 flex-wrap">
                    <div className="border border-darkBlue p-10 py-5 rounded-2xl">
                        <span className="text-4xl font-bold text-darkBlue">
                            {days}
                        </span>
                        <p className="text-sm">Days</p>
                    </div>
                    <div className="border border-darkBlue p-10 py-5 rounded-2xl">
                        <span className="text-4xl font-bold text-darkBlue">
                            {hours}
                        </span>
                        <p className="text-sm">Hours</p>
                    </div>
                    <div className="border border-darkBlue p-10 py-5 rounded-2xl">
                        <span className="text-4xl font-bold text-darkBlue">
                            {minutes}
                        </span>
                        <p className="text-sm">Minutes</p>
                    </div>
                    <div className="border border-darkBlue p-10 py-5 rounded-2xl">
                        <span className="text-4xl font-bold text-darkBlue">
                            {seconds}
                        </span>
                        <p className="text-sm">Seconds</p>
                    </div>
                </div>
            );
        }
    };

    return (
        <div className="container max-w-7xl mx-auto px-4 py- flex flex-col items-center justify-center text-center my-8 p-3 rounded-lg border border-gray-100 shadow-md bg-gray-50 break-inside-avoid">
            <div>
                <h2 className="text-xl md:text-2xl lg:text-3xl text-darkBlue font-bold mb-3">
                    2<sup>nd</sup> Leading University Research Conference 2025
                </h2>
            </div>
            <Countdown date={targetDate.getTime()} renderer={renderer} />
        </div>
    );
};

export default CountDown;
