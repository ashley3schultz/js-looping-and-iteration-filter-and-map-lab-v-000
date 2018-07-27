// Code your solution here:
function driversWithRevenueOver(arr, num) {
  return arr.filter(function (user) { return user.revenue > num })
}

function driverNamesWithRevenueOver(arr, num) {
  return driversWithRevenueOver(arr, num).map(user => user.name)
}

function exactMatch(arr, obj) {
  return arr.map(function (user) { return user === obj })
}


function exactMatchToList(arr, obj) {

}
