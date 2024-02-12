import {
  differenceInMinutes,
  differenceInHours,
  differenceInDays,
} from "date-fns";
import DateTime from "./DateTime";

export default function DateTimePretty({ date }: any) {
  let currDate = new Date().toLocaleString();
  const minuteDiff = differenceInMinutes(currDate, date);
  const hoursDiff = differenceInHours(currDate, date);
  const daysDiff = differenceInDays(currDate, date);

  let fixedDate = `${daysDiff} дней назад`;
  if (hoursDiff < 24) {
    fixedDate = `${hoursDiff} часов назад`;
  }
  if (minuteDiff < 60) {
    fixedDate = `${minuteDiff} минут назад`;
  }
  if (minuteDiff === 0) {
    fixedDate = `Только что`;
  }

  return <DateTime date={fixedDate} />;
}
