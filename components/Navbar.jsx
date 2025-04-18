import Image from "next/image";

const Navbar = () => {
    return (
        <nav className="absolute top-0 left-0 w-full  z-50">
            <div className="container max-w-7xl mx-auto px-4 py-2 gap-4 flex justify-between items-center  text-white">
                <div className="text-2xl font-bold">
                    <Image
                        src="/conference_logo.png"
                        width={819}
                        height={314}
                        alt="Logo"
                        className="max-w-56 h-auto object-contain"
                    />
                </div>
                <div>
                    <Image
                        src="/Leading_University_Logo.png"
                        alt="Leading logo"
                        width={400}
                        height={400}
                        className="max-w-28 h-auto  object-contain"
                    />
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
