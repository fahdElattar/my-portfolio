export const fetchTime = () => {
    try {
        const now = new Date();
        const time = now.toLocaleTimeString("en-US", { hour12: false });
        return time;
    } catch (err) {
        console.error("Error getting time", err);
        return "No time";
    }
};