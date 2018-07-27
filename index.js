// Code your solution here:
function driversWithRevenueOver(arr, num) {
  return arr.filter(function (user) { return user.revenue > num })
}

function driverNamesWithRevenueOver(arr, num) {
  return arr.map(function (user) { if (user.revenue > num) {return user.name }})
}

function exactMatch(arr, obj) {

}


function exactMatchToList(arr, obj) {

}
