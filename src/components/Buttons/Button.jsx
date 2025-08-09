import './Button.css';

export default function Button({ className = "", children, ...props }) {
	return (
		<button className={`btn text-md px-4 text-gray-90 uppercase whitespace-nowrap ${className}`} {...props}>
			{children}
		</button>
	);
}
