import CountDown from "@/components/CountDown";
import Footertext from "@/components/Footertext";
import Hero from "@/components/Hero";
import InfoBlocks from "@/components/InfoBlocks";
import Navbar from "@/components/Navbar";

export default function Home() {
    return (
        <>
            <Navbar />
            {/* <NavBottomInfo /> */}
            <Hero />
            <CountDown />
            <main className="container max-w-7xl mx-auto px-4 py-2">
                <InfoBlocks />
            </main>
            <Footertext />
        </>
    );
}
