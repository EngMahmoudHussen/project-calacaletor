let buttons = document.querySelectorAll('.buttons button');
let total = document.getElementById('total');
let tipAmount = document.getElementById('tip-amount');
let zeroPra = document.querySelectorAll('.left p');
console.log(zeroPra)
let percent =0;
for(let i=0; i<buttons.length; i++){
buttons[i].onclick = ()=>{
percent =buttons[i].innerHTML.replace('%','') /100;
showData();
}
}
price.onkeyup = ()=>{
percent =0;
showData();
}
pepole.onkeyup = ()=>{
percent =0;
showData();
}
Custom.onkeyup = ()=>{
percent = Custom.value /100;
showData();
} 
Reset.onclick = ()=>{
total.innerHTML = '$0.00';
tipAmount.innerHTML = '$0.00';
price.value= '';
pepole.value='';
Custom.value=''
}
function showData(){
let pricrOnPepole = price.value / pepole.value;
if(price.value !='' && pepole.value !=''){
total.innerHTML = `$${(pricrOnPepole +pricrOnPepole*percent).toFixed(2)}`;
tipAmount.innerHTML = `$${( pricrOnPepole*percent).toFixed(2)}`
}else{
total.innerHTML = '$0.00'
tipAmount.innerHTML = '$0.00'
}
if(price.value < 1){
zeroPra[0].style.display = 'block';
}else{
zeroPra[0].style.display = 'none';
}
if(pepole.value < 1){
zeroPra[1].style.display = 'block';
}else{
zeroPra[1].style.display = 'none';
}
}