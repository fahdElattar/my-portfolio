import { Footer } from "../Footer/Footer"
import { Header } from "../Header/Header"
import { MdHeader } from "../Header/MdHeader"
import { LeftSidebar } from "../Sidebars/LeftSidebar"
import { RightSidebar } from "../Sidebars/RightSidebar"

export const Layout = ({children, activeSidebarLink}) => {
    return (
        <>
            <LeftSidebar activeLink={activeSidebarLink} />
            <div className="grid sm:grid-cols-[13vw_1fr_13vw] min-h-screen">
                <div className="sm:col-start-2 overflow-hidden px-5 sm:px-0">
                    <Header />
                    <div className="container grid grid-cols-1 gap-28">
                        {children}
                    </div>
                    <MdHeader />
                    <Footer />
                </div>
            </div>
            <RightSidebar />
        </>
    )
}
