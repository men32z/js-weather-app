import { format, addHours } from 'date-fns';

export function nowFromUtc(utc){
  let searched_date;
  let timeLocal = new Date();
  let timeUtc = new Date();

  try {
    timeUtc.setFullYear(timeLocal.getUTCFullYear());
    timeUtc.setMonth(timeLocal.getUTCMonth());
    timeUtc.setDate(timeLocal.getUTCDate());
    timeUtc.setHours(timeLocal.getUTCHours());
    timeUtc.setMinutes(timeLocal.getUTCMinutes());
    timeUtc.setSeconds(timeLocal.getUTCSeconds());

    searched_date = format(addHours(timeUtc, utc), "H:mm - MMM d, y");
  } catch (e) {
    searched_date = `${timeLocal.getHours()}:${timeLocal.getMinutes()}"`;
  }
  return searched_date;
}