import { RightSidebar } from "@/components/Sidebars/RightSidebar";
import { LeftSidebar } from "@/components/Sidebars/LeftSidebar";
import { Footer } from "@/components/Footer/Footer";
import { Header } from "@/components/Header/Header";

const page404 = () => {
    return (
        <>
            <LeftSidebar />
            <div className="grid grid-cols-[13vw_1fr_13vw] min-h-screen">
                <div className="col-start-2 border border-x-dark-10 border-y-0">
                    <div className="grid grid-rows-[15vh_70vh_15vh]">
                        <Header />
                        <div className="container flex flex-col justify-center items-center text-center">
                            <h1 className="text-gray-85 text-heading-xhuge">404</h1>
                            <span className="text-text-sm text-gray-60">Page Not Found</span>
                        </div>
                        <Footer />
                    </div>
                </div>
            </div>
            <RightSidebar />
        </>
    );
}

export default page404;