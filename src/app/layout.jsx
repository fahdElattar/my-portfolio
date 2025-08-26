import "./globals.css";
import './styles/typography.css';
import './styles/layout.css';
import './styles/icons.css';
import './styles/responsiveness.css';

import { Space_Grotesk } from "next/font/google";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
  display: "swap",
});

export default function RootLayout({ children }) {
	return (
		<html lang="en">
		<head>
			<link rel="icon" href="/icons/fahd-icon.svg" sizes="any" />
			<title>Fahd El Attar - Welcome to my portfolio</title>
			<meta name="description" content="This is my personal portfolio" />
		</head>
			<body className={(spaceGrotesk.variable, "min-h-screen bg-dark-2")}>
				{children}
			</body>
		</html>
	);
}