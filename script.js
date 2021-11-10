const d = new Date();
let text = d.toLocaleDateString();

function todayIs() {
  if (text == "11/10/2021"){
    document.getElementById('today').innerHTML = "National Hot Dog Day";
  }else if(text == "11/1/2021"){
    document.getElementById('today').innerHTML = "National Trampoline Day";
  }else{
    document.getElementById('today').innerHTML = "Today is not special";
  }

}