const d = new Date(2023, 1, 6, 8, 0, 0);
const month = d.getMonth();
const hour = d.getHours();

switch (month) {
  case 1:
    console.log('It is January of 2039')
    break;
  case 2:
    console.log('It is February of 2039')
    break;
  case 3:
    console.log('It is March of 2039')
    break;

  default:
    console.log('none of the months');
}

switch (true) {
  case month == 1:
    console.log('It is January of 2039')
    break;
  case month == 2:
    console.log('It is February of 2039')
    break;
  case month == 3:
    console.log('It is March of 2039')
    break;

  default:
    console.log('none of the months');
}