// date-fns
// https://date-fns.org/
// date-fns provides the most comprehensive, yet simple and consistent toolset for manipulating JavaScript dates in a browser & Node.js.

const now = new Date();
const random = new Date(732462363);

// we use this library by invoking the dateFns object, then the dateFns function we want, then passing in a date object
console.log(dateFns.isToday(now));
console.log(dateFns.isToday(random));

// formatting options
console.log(dateFns.format(now, 'yyyy'));
console.log(dateFns.format(random, 'yyyy'));
console.log(dateFns.format(now,'MMMM'));
console.log(dateFns.format(random,'MMMM'));
console.log(dateFns.format(now,'MMM'));
console.log(dateFns.format(random,'MMM'));
console.log(dateFns.format(now, 'eeee'));
console.log(dateFns.format(random, 'eeee'));
console.log(dateFns.format(now, 'do'));
console.log(dateFns.format(random, 'do'));
console.log(dateFns.format(now, 'eeee, do, MMMM, yyyy'));
console.log(dateFns.format(random, 'eeee, do, MMMM, yyyy'));

// comparing dates
const before = new Date('February 1 2024 12:00:00');

console.log(dateFns.formatDistance(before, now));
console.log(dateFns.formatDistance(before, now, {addSuffix: true}));