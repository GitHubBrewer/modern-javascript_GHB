// timestamps
// we can compare date objects by generating two date objects
const before = new Date('February 1 2024 7:30:59');
const now = new Date();

// now we can see their timestamps as milliseconds
console.log(now.getTime(), before.getTime());

// we can store the difference in a constant
const diff = now.getTime() - before.getTime();
console.log(diff)

// we can convert that diff to days
// start by converting to minutes (1000 milliseconds\sec, 60 seconds\minute)
const mins = Math.round(diff / 1000 / 60);
// convert to hours (60 min\hour)
const hours = Math.round(mins / 60); 
// convert to days (24 hours\day)
const days = Math.round(hours / 24); 
console.log(mins);
console.log(hours);
console.log(days);
// use in template string to note how old a blog post is
console.log(`the blog was written ${days} ago`);

// we can also reverse this by converting timestamps into date objects
const timestamp = 1675938474990;
console.log(new Date(timestamp));