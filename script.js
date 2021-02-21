const form = {
  month : ['January','February','March','April','May','June','July','August','September','October','November','December'],
  day : [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31],
  year : [2001, 2002, 2003, 2004, 2005, 2006, 2007, 2008, 2009, 2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017, 2018, 2019, 2020, 2021],
  gender : ['male', 'female', 'other'],
  course : ['java','javascript','ruby','php']
}

// FIRST WAY:
// Month
let months = form.month;
let month_Object = "";
let i;
for (let i=0; i < months.length; i++) {
  month_Object += "<option>" + months[i] + "</option>";
}
document.getElementById("month").innerHTML = month_Object;

// Day
let days =  form.day;
let day_Object = "";
let a;
for (let a=0; a < days.length; a++) {
  day_Object += "<option>" + days[a] + "</option>";
}
document.getElementById("day").innerHTML = day_Object;

// 2ND WAY:
// Year
let years = form.year;
let year_Object = "";
for (let year of years) {
  year_Object += "<option>" + year + "</option>";
}
document.getElementById("year").innerHTML = year_Object;

// Gender
let genders = form.gender;
let gender_Object = "";
for (let gender of genders) {
  gender_Object += "<option>" + gender + "</option>";
}
document.getElementById("gender").innerHTML = gender_Object;

// Courses
let courses = form.course;
let course_Object = "";
for (let course of courses) {
  course_Object += "<option>" + course + "</option>";
}
document.getElementById("courses").innerHTML = course_Object;
