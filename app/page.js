import Footertext from "@/components/Footertext";
import InfoBlocks from "@/components/InfoBlocks";
import Navbar from "@/components/Navbar";
import NavBottomInfo from "@/components/NavBottomInfo";

export default function Home() {
    return (
        <>
            <Navbar />
            <NavBottomInfo />
            <main className="container max-w-7xl mx-auto px-4 py-2">
                <InfoBlocks />
            </main>
            <Footertext />
        </>
    );
}
