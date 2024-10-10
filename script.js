let focusBtn=document.getElementById('focus')
let shortBreakBtn=document.getElementById('short-break')
let longBreakBtn=document.getElementById('long-break')

let btns=document.querySelectorAll('.btn')

let startBtn=document.getElementById('start')
let pauseBtn=document.getElementById('pause')
let resetBtn=document.getElementById('reset')

let time=document.getElementById('time')

let set;
let count=59;
let active='focus';
let paused=true;
let minCount=24

time.textContent=`${minCount +1}:00`

const appendZero=(value)=>{
    value= value < 10 ? `0${value}`: value
    return value
}

resetBtn.addEventListener('click',


resetTimer=()=>{
    pauseTimer();
    
        switch(active){
         case 'short' : minCount= 4;
         break;
    
         case 'long': minCount=14
         break;
         default:minCount=24
         break
        }

    count=59
    time.textContent=`${minCount +1}:00`
})

const removeFocus=()=>{
    btns.forEach((btn)=>{
      btn.classList.remove('btn-focus')
    })
}

focusBtn.addEventListener('click',()=>{
    removeFocus();
    focusBtn.classList.add('btn-focus')
    pauseTimer();
    count=59
    minCount=24
    time.textContent=`${minCount +1}:00`
})

shortBreakBtn.addEventListener('click',()=>{
    active='short'
    removeFocus();
    shortBreakBtn.classList.add('btn-focus')
    pauseTimer();
    count=59
    minCount=4
    time.textContent=`${appendZero(minCount +1)}:00`
})

longBreakBtn.addEventListener('click',()=>{
    active='long'
    removeFocus();
    longBreakBtn.classList.add('btn-focus')
    pauseTimer();
    count=59
    minCount=14
    time.textContent=`${appendZero(minCount +1)}:00`
})

pauseBtn.addEventListener('click',
(pauseTimer=()=>{
    paused=true;
    clearInterval(set)

startBtn.classList.remove('hide')
pauseBtn.classList.remove('show')
resetBtn.classList.remove('show')
})
);

startBtn.addEventListener('click',()=>{
    resetBtn.classList.add('show')
    pauseBtn.classList.add('show')

    startBtn.classList.remove('show')
    startBtn.classList.add('hide')

    if(paused){
        paused=false;
        time.textContent=`${appendZero(minCount)}:${appendZero(count)}`
    }

    set=setInterval(()=>{
        count--;
        time.textContent=`${appendZero(minCount)}:${appendZero(count)}`
        if(count=== 0){
            if(minCount !==0){
                minCount--;
                count=60;
            }
            else{
                clearInterval(set)
            }
        }
    },1000)
})