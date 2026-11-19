// Month Names for WhatsApp formatting
export const MONTH_NAMES = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

export const getTodayParts = () => {
  const now = new Date();
  return {
    year: now.getFullYear(),
    month: now.getMonth() + 1,
    day: now.getDate(),
    iso: `${now.getFullYear()}-${String(now.getMonth() + 1).padStart(2, "0")}-${String(now.getDate()).padStart(2, "0")}`,
  };
};

export const isLeapYear = (year) => (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;

export const getDaysInMonth = (month, year) => {
  const days = [31, isLeapYear(year) ? 29 : 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
  return days[month - 1];
};

export const validateDateValues = (day, month, year) => {
  if (month < 1 || month > 12) {
    return {
      valid: false,
      error: "Invalid month. Month must be between 01 and 12.",
    };
  }
  const maxDays = getDaysInMonth(month, year);
  if (day < 1 || day > maxDays) {
    if (month === 2 && day === 29 && !isLeapYear(year)) {
      return {
        valid: false,
        error: `${year} is not a leap year. February has only 28 days.`,
      };
    }
    return {
      valid: false,
      error: `Invalid day. Selected month has only ${maxDays} days.`,
    };
  }
  if (year < 2000 || year > 2100) {
    return {
      valid: false,
      error: "Please enter a valid 4-digit year.",
    };
  }
  const today = getTodayParts();
  const inputDateObj = new Date(year, month - 1, day, 23, 59, 59);
  const todayStartObj = new Date(today.year, today.month - 1, today.day, 0, 0, 0);
  if (inputDateObj < todayStartObj) {
    return {
      valid: false,
      error: "Selected date is in the past. Please select today or a future date.",
    };
  }
  return {
    valid: true,
    error: "",
  };
};

