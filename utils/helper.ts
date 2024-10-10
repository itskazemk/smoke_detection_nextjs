import gregorian from "react-date-object/calendars/gregorian";
import persian_en from "react-date-object/locales/persian_en";

export function i2ToIsoGregorian(selectedDate) {
  // const formatOption = "";
  // if (DateOnly) {
  // 	formatOption = "YYYY-MM-DDTHH:mm:ssZ";
  // } else {
  // 	formatOption = "YYYY-MM-DD";
  // }

  return selectedDate.setCalendar(gregorian).setLocale(persian_en).format("YYYY-MM-DD");
}
