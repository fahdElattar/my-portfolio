"use client";
import Button from "./Button";
import { useState, useEffect } from "react";

export const ScrambleButton = ({children, text, className=""}) => {
	const originalText = text;
	const [txt, setTxt] = useState(originalText);
	const [scrambling, setScrambling] = useState(false);

	const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+-=[]{};:,.<>?".split("");

	useEffect(() => {
		let interval;
		let iteration = 0;

		if (scrambling) {
			interval = setInterval(() => {
				setTxt((prev) =>
					originalText
						.split("")
						.map((char, index) => {
							if (index < iteration) return originalText[index];
							return letters[Math.floor(Math.random() * letters.length)];
						})
						.join("")
				);

				iteration += 1 / 2;
				if (iteration >= originalText.length) {
					clearInterval(interval);
					setTxt(originalText);
					setScrambling(false);
				}
			}, 50);
		}

		return () => clearInterval(interval);
	}, [scrambling]);

	return (
		<Button
			className={`scramble-btn ${className}`}
			onMouseEnter={() => setScrambling(true)}
			onMouseLeave={() => setScrambling(true)}
		>
			{children}
			{txt}
		</Button>
	);
};
