let kids;
let adults;
let pensioners;
const maxAge = 55;

if (maxAge >= 0 && maxAge <= 16) {
  alert("Ви дитина");
} else if (maxAge >= 17 && maxAge <= 60) {
  alert("Ви дорослий");
} else if (maxAge >= 61 && maxAge <= 100) {
  alert("Ви пенсіонер");
}
