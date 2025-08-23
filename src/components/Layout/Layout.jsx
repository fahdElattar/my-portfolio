import { Footer } from "../Footer/Footer"
import { Header } from "../Header/Header"
import { LeftSidebar } from "../Sidebars/LeftSidebar"
import { RightSidebar } from "../Sidebars/RightSidebar"

export const Layout = ({children}) => {
    return (
        <>
            <LeftSidebar />
            <div className="grid grid-cols-[13vw_1fr_13vw] min-h-screen">
                <div className="col-start-2">
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
