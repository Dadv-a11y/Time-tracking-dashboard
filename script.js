let workTimeframes=document.getElementById("workTimeframes");
let playTimeframes= document.getElementById("playTimeframes");
let studyTimeframes = document.getElementById("studyTimeframes");
let ExerciseTimeframes = document.getElementById("ExerciseTimeframes");
let socialTimeframes =document.getElementById("socialTimeframes");
let selfcareTimeframes = document.getElementById("selfcareTimeframes");
let current= 0 ;
let h1 = document.createElement('h1');
let p = document.createElement('p') ;

fetch('/data.json').then((response) => {  
    if(!response.ok) return console.log('Oops! Something went wrong.');
    
    return response.json();
  }).then((data) => {
   console.log(data)
   if(current==1){
    workTimeframes.appendChild(h1).innerHTML= data[0].timeframes.daily.current ;
    workTimeframes.appendChild(p).innerHTML='last day'+' '+ data[0].timeframes.daily.previous +'-hrs' ;
    playTimeframes.appendChild(h1).innerHTML= data[1].timeframes.daily.current;
    playTimeframes.appendChild(p).innerHTML='last day'+' '+ data[1].timeframes.daily.previous +'-hrs';
    studyTimeframes.appendChild(h1).innerHTML= data[2].timeframes.daily.current;
    studyTimeframes.appendChild(p).innerHTML='last day'+' '+ data[2].timeframes.daily.previous +'-hrs';
    ExerciseTimeframes.appendChild(h1).innerHTML= data[3].timeframes.daily.current;
    ExerciseTimeframes.appendChild(p).innerHTML='last day'+' '+ data[3].timeframes.daily.previous +'-hrs';
    socialTimeframes.appendChild(h1).innerHTML= data[4].timeframes.daily.current;
    socialTimeframes.appendChild(p).innerHTML='last day'+' '+ data[4].timeframes.daily.previous +'-hrs';
    selfcareTimeframes.appendChild(h1).innerHTML= data[5].timeframes.daily.current;
     selfcareTimeframes.appendChild(p).innerHTML='last day'+' '+ data[5].timeframes.daily.previous +'-hrs';
   }
   else if ( current == 2){
    workTimeframes.appendChild(h1).innerHTML= data[0].timeframes.weekly.current ;
    workTimeframes.appendChild(p).innerHTML='last day'+' '+ data[0].timeframes.weekly.previous +'-hrs' ;
    playTimeframes.appendChild(h1).innerHTML= data[1].timeframes.weekly.current;
    playTimeframes.appendChild(p).innerHTML='last day'+' '+ data[1].timeframes.weekly.previous +'-hrs';
    studyTimeframes.appendChild(h1).innerHTML= data[2].timeframes.weekly.current;
    studyTimeframes.appendChild(p).innerHTML='last day'+' '+ data[2].timeframes.weekly.previous +'-hrs';
    ExerciseTimeframes.appendChild(h1).innerHTML= data[3].timeframes.weekly.current;
    ExerciseTimeframes.appendChild(p).innerHTML='last day'+' '+ data[3].timeframes.weekly.previous +'-hrs';
    socialTimeframes.appendChild(h1).innerHTML= data[4].timeframes.weekly.current;
    socialTimeframes.appendChild(p).innerHTML='last day'+' '+ data[4].timeframes.weekly.previous +'-hrs';
    selfcareTimeframes.appendChild(h1).innerHTML= data[5].timeframes.weekly.current;
    selfcareTimeframes.appendChild(p).innerHTML='last day'+' '+ data[5].timeframes.weekly.previous +'-hrs';
   }
   else if( current == 3){
    workTimeframes.appendChild(h1).innerHTML= data[0].timeframes.monthly.current;
   workTimeframes.appendChild(p).innerHTML='last day'+' '+ data[0].timeframes.monthly.previous +'-hrs' ;
   playTimeframes.appendChild(h1).innerHTML= data[1].timeframes.monthly.current;
   playTimeframes.appendChild(p).innerHTML='last day'+' '+ data[1].timeframes.monthly.previous +'-hrs';
   studyTimeframes.appendChild(h1).innerHTML= data[2].timeframes.monthly.current;
   studyTimeframes.appendChild(p).innerHTML='last day'+' '+ data[2].timeframes.monthly.previous +'-hrs';
   ExerciseTimeframes.appendChild(h1).innerHTML= data[3].timeframes.monthly.current;
   ExerciseTimeframes.appendChild(p).innerHTML='last day'+' '+ data[3].timeframes.monthly.previous +'-hrs';
   socialTimeframes.appendChild(h1).innerHTML= data[4].timeframes.monthly.current;
   socialTimeframes.appendChild(p).innerHTML='last day'+' '+ data[4].timeframes.monthly.previous +'-hrs';
   selfcareTimeframes.appendChild(h1).innerHTML= data[5].timeframes.monthly.current;
   selfcareTimeframes.appendChild(p).innerHTML='last day'+' '+ data[5].timeframes.monthly.previous +'-hrs';
   }
  
  });
  function dailybtn(){ 
   current = 1 ;
  }
  function  weeklybtn(){
   current=2 ;
  }
  function monthlybtn(){
    current=3 ;
  }
  console.log(current)
  
  