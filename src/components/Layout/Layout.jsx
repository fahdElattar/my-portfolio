import { Footer } from "../Footer/Footer"
import { Header } from "../Header/Header"
import { LeftSidebar } from "../Sidebars/LeftSidebar"
import { RightSidebar } from "../Sidebars/RightSidebar"

export const Layout = ({children}) => {
    return (
        <>
            <LeftSidebar />
            <div className="grid sm:grid-cols-[13vw_1fr_13vw] px-6 sm:px-0 min-h-screen">
                <div className="sm:col-start-2 overflow-hidden">
                    <Header />
                    <div className="container grid grid-cols-1 gap-28">
                        {children}
                    </div>
                    <Footer />
                </div>
            </div>
            <RightSidebar />
        </>
    )
}
