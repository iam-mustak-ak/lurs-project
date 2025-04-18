import Image from "next/image";

const Navbar = () => {
    return (
        <nav>
            <div className="container max-w-7xl mx-auto px-4 py-2 flex justify-between items-center  text-white">
                <div className="text-2xl font-bold">
                    <Image
                        src="/conference_logo.png"
                        width={819}
                        height={314}
                        alt="Logo"
                        className="w-96 h-40 object-contain"
                    />
                </div>
                <div>
                    <Image
                        src="/Leading_University_Logo.png"
                        alt="Leading logo"
                        width={400}
                        height={400}
                        className="w-32 h-32 object-contain"
                    />
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
