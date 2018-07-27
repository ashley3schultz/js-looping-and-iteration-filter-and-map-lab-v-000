// Code your solution here:
function driversWithRevenueOver(arr, num) {
  newarr = arr.map(function (user) {
  return Object.assign({}, user, { equipment: 'Laptop' });
});
}

function driverNamesWithRevenueOver(arr, num) {
  return arr.map(function (user) { if (user.revenue > num) {return user.name }})
}

function exactMatch(arr, obj) {

}


function exactMatchToList(arr, obj) {

}
