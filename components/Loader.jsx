"use client";

import { InfinitySpin } from "react-loader-spinner";

const Loader = () => {
    return (
        <div className="flex items-center justify-center h-screen w-full">
            <InfinitySpin
                width="200"
                color="#4fa94d"
                className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
            />
        </div>
    );
};

export default Loader;
