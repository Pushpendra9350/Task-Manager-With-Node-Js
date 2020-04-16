function sortby(x) {
  if (x == 1) {
    // to sort by due date as desc
    updatesortbydatedesc()
  }
  else if (x == 2) {
    // to sort by due date as asc
    updatesortbydateasc()
  }
  else if (x == 3) {
    // to sort by priority
    updatesortbypriority()
  }
  else if (x == 4) {
    // to sort by ststus 
    updatesortbystatus()
  }
  else {
    // to update data in DOM
    updatedata()
  }
}
