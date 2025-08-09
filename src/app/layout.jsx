import "./globals.css";
import './styles/typography.css';
import './styles/layout.css';
import './styles/icons.css';

import { Space_Grotesk } from "next/font/google";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
  display: "swap",
});

export default function RootLayout({ children }) {
	return (
		<html lang="en">
			<body className={(spaceGrotesk.variable, "min-h-screen bg-dark-2")}>
				{children}
			</body>
		</html>
	);
}