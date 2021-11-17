const d = new Date()
const months = d.getMonth()
const days = d.getDay()



console.log(months);

function todayIs() {
  if (months == 10 && days == 1){
    document.getElementById('today').innerHTML = "National Spicy Hermit Cookie Day";
  }else if(months == 10 && days == 2){
    document.getElementById('today').innerHTML = "National Button Day";
  }else if(months == 10 && days == 3)
  {
    document.getElementById('today').innerHTML = "National Take a hike Day"; 
  }
  else{
    document.getElementById('today').innerHTML = "Today is not special";
  }

}
//month[0] = "January";
//month[1] = "February";
//month[2] = "March";
//month[3] = "April";
//month[4] = "May";
//month[5] = "June";
//month[6] = "July";
//month[7] = "August";
//month[8] = "September";
//month[9] = "October";
//month[10] = "November";
//month[11] = "December";
// sunday = 0
// monday = 1
// tuesday = 2
// wednesday = 3
//thurday = 4
//friday = 5
// saturday = 6
//ignore
