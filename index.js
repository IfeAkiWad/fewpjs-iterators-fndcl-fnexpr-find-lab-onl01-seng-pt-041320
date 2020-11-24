// const testVar = {}

// function testFunc() {
//   return "hi"
// }
// const record = [
//   {year: "2018", result: "L"},
//   {year: "2017", result: "W"},
//   {year: "2016", result: "N/A"}
// ]

function superbowlWin(array) {
  console.log("array", array)
  // array.find( function(item) {
  //   console.log("item", item)
  //   if (item === "W") {
  //     return item
  //   }
  // })

  let arrResult = array.find(item => item.result === "W")
   if (arrResult !== undefined) {
     return arrResult.year
   }
  
}