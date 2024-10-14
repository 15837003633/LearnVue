import dayjs from "dayjs";

export function formatDayMouth(date,fmt="MM月DD日"){
    return dayjs(date).format(fmt);
}

export function diffDays(date1, date2){
    return dayjs(date1).diff(date2, 'day');
}