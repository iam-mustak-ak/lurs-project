import { data } from "@/data/infoData";
import { Facebook, Instagram } from "lucide-react";
import Link from "next/link";
import InfoItem from "./infoItem";
import Slider from "./slider";

const socialLinks = [
    {
        id: 1,
        icon: <Facebook />,
        link: "https://www.facebook.com/lursbd",
        name: "Facebook",
    },
    {
        id: 2,
        icon: <Instagram />,
        link: "https://www.instagram.com/lursbd",
        name: "Instagram",
    },
];

const InfoBlocks = () => {
    return (
        <div>
            <div className="bg-green-50 border-border-100 rounded-lg overflow-hidden shadow-md my-4">
                <Slider />
            </div>
            <div className="md:columns-2 gap-4 mt-4">
                {data.map((item) => {
                    return <InfoItem key={item.id} data={item} />;
                })}
                <article className="p-3 rounded-lg border border-gray-100 shadow-md mb-4 bg-gray-50 break-inside-avoid">
                    <h2 className="text-xl md:text-2xl text-darkBlue font-bold mb-3">
                        Contact
                    </h2>
                    <p className="font-semibold mb-2">
                        For any sort of queries please feel free to reach out
                        via,
                    </p>
                    <ul>
                        <li>
                            <span className="font-semibold">Email:</span>{" "}
                            <Link
                                className="text-darkBlue transition-all hover:underline mr-2"
                                href="mailto:lurs@lus.ac.bd"
                            >
                                lurs@lus.ac.bd
                            </Link>
                        </li>
                        <li>
                            <span className="font-semibold">Contact:</span>{" "}
                            <Link
                                className="text-darkBlue transition-all hover:underline mr-2"
                                href="tel:+8801780-592593"
                            >
                                +8801780-592593 ,
                            </Link>
                            <Link
                                className="text-darkBlue transition-all hover:underline mr-2"
                                href="tel:+8801601-082124"
                            >
                                +8801601-082124 ,
                            </Link>
                            <Link
                                className="text-darkBlue transition-all hover:underline mr-2"
                                href="tel:+8801731-979225"
                            >
                                +8801731-979225
                            </Link>
                        </li>
                    </ul>
                </article>

                <article className="p-3 rounded-lg border border-gray-100 shadow-md mb-4 bg-gray-50 break-inside-avoid">
                    <div>
                        <h2 className="text-xl md:text-2xl text-darkBlue font-bold mb-3">
                            Follow Us
                        </h2>

                        <div className="flex gap-3 items-center flex-wrap">
                            {socialLinks.map((link, index) => (
                                <Link
                                    key={index}
                                    className="text-2xl w-10 h-10 rounded-full flex items-center justify-center bg-darkBlue text-white transition-all hover:bg-blue-600"
                                    href={link.link}
                                    target="_blank"
                                >
                                    {link.icon}
                                </Link>
                            ))}
                        </div>
                    </div>
                </article>
            </div>
        </div>
    );
};

export default InfoBlocks;
