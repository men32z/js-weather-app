import { format, addHours } from 'date-fns';

function nowFromUtc(utc) {
  let searchedDate;
  const timeLocal = new Date();
  const timeUtc = new Date();

  try {
    timeUtc.setFullYear(timeLocal.getUTCFullYear());
    timeUtc.setMonth(timeLocal.getUTCMonth());
    timeUtc.setDate(timeLocal.getUTCDate());
    timeUtc.setHours(timeLocal.getUTCHours());
    timeUtc.setMinutes(timeLocal.getUTCMinutes());
    timeUtc.setSeconds(timeLocal.getUTCSeconds());

    searchedDate = format(addHours(timeUtc, utc), 'H:mm - MMM d, y');
  } catch (e) {
    searchedDate = `${timeLocal.getHours()}:${timeLocal.getMinutes()}"`;
  }
  return searchedDate;
}

export default nowFromUtc;