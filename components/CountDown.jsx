"use client";

import { useEffect, useState } from "react";
import Countdown from "react-countdown";

const CountDown = () => {
    const [isClient, setIsClient] = useState(false);

    useEffect(() => {
        setIsClient(true);
    }, []);
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
                        <div className="text-4xl font-bold text-darkBlue">
                            {days}
                        </div>
                        <span className="text-sm">Days</span>
                    </div>
                    <div className="border border-darkBlue p-10 py-5 rounded-2xl">
                        <div className="text-4xl font-bold text-darkBlue">
                            {hours}
                        </div>
                        <span className="text-sm">Hours</span>
                    </div>
                    <div className="border border-darkBlue p-10 py-5 rounded-2xl">
                        <div className="text-4xl font-bold text-darkBlue">
                            {minutes}
                        </div>
                        <span className="text-sm">Minutes</span>
                    </div>
                    <div className="border border-darkBlue p-10 py-5 rounded-2xl">
                        <div className="text-4xl font-bold text-darkBlue">
                            {seconds}
                        </div>
                        <span className="text-sm">Seconds</span>
                    </div>
                </div>
            );
        }
    };

    return (
        <div className="container max-w-7xl mx-auto px-4 py-6 flex flex-col items-center justify-center text-center my-8 p-3 rounded-lg border border-gray-100 shadow-md bg-gray-50 break-inside-avoid relative overflow-hidden">
            <div className="absolute h-1 w-full bg-darkBlue top-0 left-0"></div>
            <div>
                <h2 className="text-xl md:text-2xl lg:text-3xl text-darkBlue font-bold mb-3">
                    2<sup>nd</sup> Leading University Research Conference 2025
                </h2>
            </div>

            {isClient && (
                <>
                    <Countdown
                        date={targetDate.getTime()}
                        renderer={renderer}
                    />
                    <video
                        className="mt-6 w-full h-auto rounded-lg shadow-lg aspect-video max-h-[400px shadow-lg"
                        autoPlay
                        loop
                        muted
                        controls
                    >
                        <source
                            src="https://res.cloudinary.com/draevbvcu/video/upload/v1745061013/conf-video_vk9ywd.mp4"
                            type="video/mp4"
                        />
                        Your browser does not support the video tag.
                    </video>
                </>
            )}
        </div>
    );
};

export default CountDown;
