let daily = document.getElementById('daily');
let monthly = document.getElementById('monthly');
let weekly = document.getElementById('weekly');
let dailybtns = document.getElementById('dailybtn');
let monthlybtns = document.getElementById('monthlybtn');
let weeklybtns = document.getElementById('weeklybtn');
function dailybtn(){
    daily.style.display ='block';
    monthly.style.display =' none';
    weekly.style.display =' none';
    dailybtns.style.color ='white'
    weeklybtns.style.color =' var(--DesaturatedBlue)'
    monthlybtns.style.color =' var(--DesaturatedBlue)'
}
function weeklybtn(){
    daily.style.display ='none';
    monthly.style.display =' none';
    weekly.style.display =' block';
    weeklybtns.style.color ='white'
    dailybtns.style.color =' var(--DesaturatedBlue)'
    monthlybtns.style.color =' var(--DesaturatedBlue)'
}
function monthlybtn(){
    daily.style.display ='none';
    monthly.style.display =' block';
    weekly.style.display =' none';
    monthlybtns.style.color ='white'
    weeklybtns.style.color =' var(--DesaturatedBlue)'
    dailybtns.style.color =' var(--DesaturatedBlue)'
}