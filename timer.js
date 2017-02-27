var seconds = 00;
var minutes = 00;
var tenths = 00;
var interval;

document.querySelector('#start').addEventListener('click', function(e){
    if(e.target.innerText === 'start'){
        e.target.innerText = 'pause';
        interval = setInterval(startTimer, 100)
    }
    else if (e.target.innerText === 'pause'){
        e.target.innerText = 'resume';
        clearInterval(interval);
        setTimeout(resetTimer, 15000)
    }
    else if (e.target.innerText === 'resume'){
        e.target.innerText = 'pause';
        interval = setInterval(startTimer, 100)
    }
});

     function resetTimer(){
         tenths = 0;
         minutes = 0;
         seconds = 0;
         document.querySelector('#start').innerText = 'start';
         document.querySelector('#timer').innerHTML = '00:00:00';
     }


    document.querySelector('#start').addEventListener('dblclick', function(e){
   if (e.target.innerText === 'pause'){
        e.target.innerText = 'start';
        clearInterval(interval);
         tenths = 0;
         minutes = 0;
         seconds = 0;
        document.querySelector('#timer').innerText = '00:00:00';
       
    }
    });

function startTimer(){
    tenths++ ; 
    document.querySelector('#timer').innerHTML = `${minutes} : ${seconds} : ${tenths}`;
    if(tenths >= 10){
        tenths = 0 ;
        seconds ++;
        setColor();
    }
    else if (seconds >= 60){
        seconds = 0;
        minutes ++;
    }
}
     function setColor(){
       var red =  Math.round(Math.random() * 255);
        var green = Math.round(Math.random() * 255);
        var blue = Math.round(Math.random() * 255);
        document.querySelector('#timer').style.color = `rgb(${red}, ${green}, ${blue})`;
    }

