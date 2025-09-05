import { Experience } from "@/components/Sections/Experience/Experience";
import { Stacks } from "@/components/Sections/Stacks/Stacks";
import { Services } from "@/components/Sections/Services/Services";
import { Words } from "@/components/Sections/Words/Words";
import { Projects } from "@/components/Sections/Projects/Projects";
import { Layout } from "@/components/Layout/Layout";
import { Hero } from "@/components/Sections/Hero/Hero";

const Home = () => {
	return (
		<Layout activeSidebarLink="home">
			<Hero />
			<Experience />
			<Stacks />
			<Services />
			<Projects />
			<Words />
		</Layout>
	);
}

export default Home;