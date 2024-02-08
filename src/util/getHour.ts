export default function getHour(hour : string): string {
    // this function gets a date string and returns just the hour
    return hour.split(' ')[1];
}