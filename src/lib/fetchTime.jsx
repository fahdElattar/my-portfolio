import axios from "axios"

export const fetchTime = async () => {
    try {
        const time = await axios.get(`https://timeapi.io/api/time/current/zone?timeZone=Africa/Casablanca`)
        return time.data.time;
    } catch (err) {
        console.error('Invalid Time Request', err);
        return "Error";
    }
}