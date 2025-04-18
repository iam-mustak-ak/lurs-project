const NavBottomInfo = () => {
    return (
        <div className="py-3 border-y border-gray-300">
            <div className="container max-w-7xl mx-auto px-4 py-2 flex flex-col md:flex-row items-center justify-between">
                <div className="max-md:order-1">
                    <ul className="max-md:text-center">
                        <li className="text-lg md:text-xl font-bold text-darkBlue">
                            Conference Date:
                        </li>
                        <li className="text-lg font-normal">June 26, 2025</li>
                    </ul>
                </div>
                <div className="text-center text-darkBlue  font-bold md:max-w-2xl mx-auto max-md:order-3 max-md:mt-3">
                    <h4 className="text-xl md:text-2xl underline mb-2">
                        Conference Theme:
                    </h4>
                    <p className="text-lg md:text-xl">
                        Building A Sustainable World: <br /> Tackling Barriers
                        and Exploring New Ideas.
                    </p>
                </div>
                <ul className="max-md:order-2 max-md:text-center">
                    <li className="text-lg md:text-xl font-bold text-darkBlue">
                        Submission Deadline:
                    </li>
                    <li className="text-lg font-normal">May 22, 2025</li>
                </ul>
            </div>
        </div>
    );
};

export default NavBottomInfo;
