let workTimeframes = document.getElementById("workTimeframes");
let playTimeframes = document.getElementById("playTimeframes");
let studyTimeframes = document.getElementById("studyTimeframes");
let ExerciseTimeframes = document.getElementById("ExerciseTimeframes");
let socialTimeframes = document.getElementById("socialTimeframes");
let selfcareTimeframes = document.getElementById("selfcareTimeframes");
let dailybtns = document.getElementById('dailybtn');
let monthlybtns = document.getElementById('monthlybtn');
let weeklybtns = document.getElementById('weeklybtn');

const fetchData = fetch('/data.json').then((response) => {  
    if (!response.ok) { 
        return console.log('Oops! Something went wrong.'); 
    } 
    return response.json();
}).then((data) => {
    console.log(data);

    weeklybtns.style.color ='white'
    dailybtns.style.color =' var(--DesaturatedBlue)'
    monthlybtns.style.color =' var(--DesaturatedBlue)'
   createAndAppendTimeframe(workTimeframes, data[0].timeframes.weekly.current, data[0].timeframes.weekly.previous, 'last week');
   createAndAppendTimeframe(playTimeframes, data[1].timeframes.weekly.current, data[1].timeframes.weekly.previous, 'last week');
   createAndAppendTimeframe(studyTimeframes, data[2].timeframes.weekly.current, data[2].timeframes.weekly.previous, 'last week');
   createAndAppendTimeframe(ExerciseTimeframes, data[3].timeframes.weekly.current, data[3].timeframes.weekly.previous, 'last week');
   createAndAppendTimeframe(socialTimeframes, data[4].timeframes.weekly.current, data[4].timeframes.weekly.previous, 'last week');
   createAndAppendTimeframe(selfcareTimeframes, data[5].timeframes.weekly.current, data[5].timeframes.weekly.previous, 'last week');

    return data;
});

function createAndAppendTimeframe(container, current, previous, timeframeLabel) {
    container.innerHTML="";
    let h1 = document.createElement('h1');
    let p = document.createElement('p');
    h1.innerHTML = current;
    p.innerHTML = `${timeframeLabel} ${previous}-hrs`;
    container.appendChild(h1);
    container.appendChild(p);
}

async function dailybtn() { 
    await fetchData.then((data) => {
        dailybtns.style.color ='white'
        weeklybtns.style.color =' var(--DesaturatedBlue)'
        monthlybtns.style.color =' var(--DesaturatedBlue)'
        createAndAppendTimeframe(workTimeframes, data[0].timeframes.daily.current, data[0].timeframes.daily.previous, 'last day');
        createAndAppendTimeframe(playTimeframes, data[1].timeframes.daily.current, data[1].timeframes.daily.previous, 'last day');
        createAndAppendTimeframe(studyTimeframes, data[2].timeframes.daily.current, data[2].timeframes.daily.previous, 'last day');
        createAndAppendTimeframe(ExerciseTimeframes, data[3].timeframes.daily.current, data[3].timeframes.daily.previous, 'last day');
        createAndAppendTimeframe(socialTimeframes, data[4].timeframes.daily.current, data[4].timeframes.daily.previous, 'last day');
        createAndAppendTimeframe(selfcareTimeframes, data[5].timeframes.daily.current, data[5].timeframes.daily.previous, 'last day');
    });
}

async function weeklybtn() {
    await fetchData.then((data) => {
         weeklybtns.style.color ='white'
         dailybtns.style.color =' var(--DesaturatedBlue)'
         monthlybtns.style.color =' var(--DesaturatedBlue)'
        createAndAppendTimeframe(workTimeframes, data[0].timeframes.weekly.current, data[0].timeframes.weekly.previous, 'last week');
        createAndAppendTimeframe(playTimeframes, data[1].timeframes.weekly.current, data[1].timeframes.weekly.previous, 'last week');
        createAndAppendTimeframe(studyTimeframes, data[2].timeframes.weekly.current, data[2].timeframes.weekly.previous, 'last week');
        createAndAppendTimeframe(ExerciseTimeframes, data[3].timeframes.weekly.current, data[3].timeframes.weekly.previous, 'last week');
        createAndAppendTimeframe(socialTimeframes, data[4].timeframes.weekly.current, data[4].timeframes.weekly.previous, 'last week');
        createAndAppendTimeframe(selfcareTimeframes, data[5].timeframes.weekly.current, data[5].timeframes.weekly.previous, 'last week');
    });
}

async function monthlybtn() {
    await fetchData.then((data) => {
         monthlybtns.style.color ='white'
         weeklybtns.style.color =' var(--DesaturatedBlue)'
         dailybtns.style.color =' var(--DesaturatedBlue)'
        createAndAppendTimeframe(workTimeframes, data[0].timeframes.monthly.current, data[0].timeframes.monthly.previous, 'last month');
        createAndAppendTimeframe(playTimeframes, data[1].timeframes.monthly.current, data[1].timeframes.monthly.previous, 'last month');
        createAndAppendTimeframe(studyTimeframes, data[2].timeframes.monthly.current, data[2].timeframes.monthly.previous, 'last month');
        createAndAppendTimeframe(ExerciseTimeframes, data[3].timeframes.monthly.current, data[3].timeframes.monthly.previous, 'last month');
        createAndAppendTimeframe(socialTimeframes, data[4].timeframes.monthly.current, data[4].timeframes.monthly.previous, 'last month');
        createAndAppendTimeframe(selfcareTimeframes, data[5].timeframes.monthly.current, data[5].timeframes.monthly.previous, 'last month');
    });
}
  
