export const getPersianDate = (date: string | Date) => {
  const formatedDate = new Intl.DateTimeFormat("fa-IR", {
    day: "numeric",
    month: "numeric",
    year: "numeric",
    timeZone: "Asia/Tehran",
  }).format(new Date(date || Date.now()));
  return formatedDate;
};

export const getPersianHour = (date: string | Date) => {
  const formatedDate = new Intl.DateTimeFormat("fa-IR", {
    hour: "numeric",
    minute: "numeric",
    timeZone: "Asia/Tehran",
  }).format(new Date(date || Date.now()));
  return formatedDate;
};
export const getPersianWeekday = (date: string | Date) => {
  const formatedDate = new Intl.DateTimeFormat("fa-IR", {
    weekday: "long",
    timeZone: "Asia/Tehran",
  }).format(new Date(date || Date.now()));
  return formatedDate;
};
