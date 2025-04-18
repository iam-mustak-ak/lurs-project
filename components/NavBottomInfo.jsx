const NavBottomInfo = () => {
    return (
        <div className="py-3 border-y border-gray-300">
            <div className="container max-w-7xl mx-auto px-4 py-2 flex items-center justify-between">
                <div>
                    <ul>
                        <li className="text-xl font-bold text-darkBlue">
                            Conference Date:
                        </li>
                        <li className="text-lg font-normal">June 26, 2025</li>
                    </ul>
                </div>
                <h3 className="text-center text-darkBlue text-2xl font-bold max-w-2xl mx-auto">
                    Building A Sustainable World: <br /> Tackling Barriers and
                    Exploring New Ideas.
                </h3>
                <ul>
                    <li className="text-xl font-bold text-darkBlue">
                        Submission Deadline:
                    </li>
                    <li className="text-lg font-normal">May 22, 2025</li>
                </ul>
            </div>
        </div>
    );
};

export default NavBottomInfo;
