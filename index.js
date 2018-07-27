// Code your solution here:
function driversWithRevenueOver(arr, num) {
  narr = []
  narr = for (const user of arr) {
  newarr = arr.map(function (user) {
    if (user.revenue > num) {
      return Object.assign({}, user);
    }
  }
  return narr
}

function driverNamesWithRevenueOver(arr, num) {
  return arr.map(function (user) { if (user.revenue > num) {return user.name }})
}

function exactMatch(arr, obj) {

}


function exactMatchToList(arr, obj) {

}
