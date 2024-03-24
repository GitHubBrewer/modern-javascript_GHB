// dates & times
// these are a type of object
// a constructor will create a new date object for us that will be at the time the file is run
const now = new Date();

// we'll see that this will get us a lot of information
console.log(now);
// we also see it is an object
console.log(typeof now);

// sampling of the methods we can use on the date object
// https://www.w3schools.com/jsref/jsref_obj_date.asp
// Returns the year
console.log('getFullYear:', now.getFullYear());
// this has been deprecated
console.log('getYear:', now.getYear());
// Returns the month (from 0-11)
console.log('getMonth:', now.getMonth());
// Returns the day of the month (from 1-31)
console.log('getDate:', now.getDate());
// Returns the day of the week (from 0-6)
console.log('getDay:', now.getDay());
// Returns the hour (from 0-23)
console.log('getHours:', now.getHours());
// Returns the minutes (from 0-59)
console.log('getMinutes:', now.getMinutes());
// Returns the seconds (from 0-59)
console.log('getSeconds:', now.getSeconds());

// timestamps
// Returns the number of milliseconds since midnight Jan 1 1970, and a specified date
console.log('timestamp:', now.getTime());

// date strings
// Converts the date portion of a Date object into a readable string
console.log('DateString:', now.toDateString());
// Converts the time portion of a Date object to a string
console.log('TimeString:', now.toTimeString());
// Converts a Date object to a string, using locale conventions
console.log('LocaleString:', now.toLocaleString());
