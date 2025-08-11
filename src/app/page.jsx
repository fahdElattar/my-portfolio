import { Header } from "@/components/Header/Header";
import { Hero } from "@/components/Sections/Hero/Hero";
import { RightSidebar } from "@/components/Sidebars/RightSidebar";
import { LeftSidebar } from "@/components/Sidebars/LeftSidebar";
import { Experience } from "@/components/Sections/Experience/Experience";
import { Footer } from "@/components/Footer/Footer";
import { Stacks } from "@/components/Sections/Stacks/Stacks";
import { Services } from "@/components/Sections/Services/Services";
import { Words } from "@/components/Sections/Words/Words";
import { Projects } from "@/components/Sections/Projects/Projects";

const Home = () => {
	return (
		<>
			<LeftSidebar />
			<div className="grid grid-cols-[13vw_1fr_13vw] min-h-screen">
				<div className="col-start-2 border border-x-dark-10 border-y-0">
					<Header />
					<div className="container grid grid-cols-1 gap-28">
						<Hero />
						<Experience />
						<Stacks />
						<Services />
						<Projects />
						<Words />
					</div>
					<Footer />
				</div>
			</div>
			<RightSidebar />
		</>
	);
}

export default Home;