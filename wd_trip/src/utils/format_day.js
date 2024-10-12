import dayjs from "dayjs";

export function formatDayMouth(date){
    return dayjs(date).format("MM月DD日");
}

export function diffDays(date1, date2){
    return dayjs(date1).diff(date2, 'day');
}