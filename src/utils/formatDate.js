export const convertDate = (inputDate) => {
  const date = new Date(inputDate);

  const day = date.getDate().toString().padStart(2, "0");
  const month = (date.getMonth() + 1).toString().padStart(2, "0");
  const year = date.getFullYear().toString();

  return `d${day}m${month}y${year}`;
};

export const formatDate = (inputDate) => {
  // Extract day, month, and year from the input string
  const day = parseInt(inputDate.slice(1, 3), 10);
  const month = parseInt(inputDate.slice(4, 6), 10) - 1; // Months are zero-indexed
  const year = parseInt(inputDate.slice(7), 10);

  // Create a Date object
  const dateObject = new Date(year, month, day);

  // Format the date as "6th Jan 2024"
  const formattedDate = dateObject.toLocaleDateString('en-US', {
    day: 'numeric',
    month: 'short',
    year: 'numeric'
  });

  return formattedDate;
}