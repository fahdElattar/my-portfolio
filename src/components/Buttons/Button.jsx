import './Button.css';

export default function Button({ className = "", children, ...props }) {
	return (
		<button className={`btn flex text-text-md px-4 py-3 text-gray-90 uppercase whitespace-nowrap ${className}`} {...props}>
			{children}
		</button>
	);
}
