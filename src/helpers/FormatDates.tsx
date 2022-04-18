export const formatDate = (date: Date) => {
  let day = date.getDate() < 10 ? "0" + date.getDate() : date.getDate();

  let month =
    date.getMonth() + 1 < 10 ? `0${date.getMonth() + 1}` : date.getMonth();

  let formatted_date = date.getFullYear() + "-" + month + "-" + day;

  return formatted_date;
};

export const formatLastWeekDate = (date: Date, days: number) => {
  date.setDate(date.getDate() - days);

  let day = date.getDate() < 10 ? "0" + date.getDate() : date.getDate();

  let month =
    date.getMonth() + 1 < 10 ? `0${date.getMonth() + 1}` : date.getMonth();

  let formatted_date = date.getFullYear() + "-" + month + "-" + day;

  return formatted_date;
};
