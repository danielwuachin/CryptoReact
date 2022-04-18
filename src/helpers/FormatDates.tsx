export const formatDate = (date: Date) => {
  console.log(date);
  let day = date.getDate() < 10 ? "0" + date.getDate() : date.getDate();
  let month =
    date.getMonth() + 1 < 10 ? `0${date.getMonth() + 1}` : date.getMonth();
  console.log(day, month, date.getMonth());
  let formatted_date = date.getFullYear() + "-" + month + "-" + day;
  return formatted_date;
};

export const formatLastWeekDate = (date: Date, days: number) => {
  date.setDate(date.getDate() - days);
  let day = date.getDate() < 10 ? "0" + date.getDate() : date.getDate();
  let month =
    date.getMonth() + 1 < 10 ? `0${date.getMonth() + 1}` : date.getMonth();
  console.log(day, month, date.getDate());
  let formatted_date = date.getFullYear() + "-" + month + "-" + day;
  return formatted_date;
};

/* export const backDays = (date: Date, days: number) => {
  date.setDate(date.getDate() - days);
  let dayNumber = date.getDay(),
    day: string;

  switch (dayNumber) {
    case 0:
      day = "Domingo";
      return day;

    case 1:
      day = "Lunes";
      return day;
    case 2:
      day = "Martes";
      return day;
    case 3:
      day = "Miercoles";
      return day;
    case 4:
      day = "Jueves";
      return day;
    case 5:
      day = "Viernes";
      return day;
    case 6:
      day = "Sabado";
      return day;
  } 
};
*/
