const d = new Date()
const years = Date.prototype.getFullYear()
let yearText = years.toLocaleDateString();
let text = d.toLocaleDateString();
if(text == "11/15/21")
{
  text = "11/15/"+yearText;
}



function todayIs() {
  if (text == "11/15/"+yearText){
    document.getElementById('today').innerHTML = "National Spicy Hermit Cookie Day";
  }else if(text == "11/16/"+years){
    document.getElementById('today').innerHTML = "National Vutton Day";
  }else{
    document.getElementById('today').innerHTML = "Today is not special";
  }

}