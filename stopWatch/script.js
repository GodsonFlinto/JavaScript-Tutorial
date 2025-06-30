let hour = document.getElementById('hrs')
let min = document.getElementById('min')
let sec = document.getElementById('sec')
let msec = document.getElementById('milsec')

document.getElementById('start').addEventListener('click',start)
document.getElementById('stop').addEventListener('click',stop)
document.getElementById('reset').addEventListener('click',reset)

let interval = null
let h=0,m=0,s=0,ms=0

function watch(){
    ms++
    if(ms>=100){
        ms = 0
        s++
    }
    if(s>=60){
        s = 0
        m++
    }
    if(m>=60){
        m = 0
        h++
    }
    
    hour.innerHTML = addzero(h)
    min.innerHTML = addzero(m)
    sec.innerHTML = addzero(s)
    msec.innerHTML = addzero(ms)
}
function start(){
    if(interval!=null) return
    interval = setInterval(watch,10)
}

function stop(){
    clearInterval(interval)
    interval = null
}

function reset(){
    stop()
    h=m=s=ms=0
    hour.innerHTML = '00'
    min.innerHTML = '00'
    sec.innerHTML = '00'
    msec.innerHTML = '00'
}
function addzero(n){
    return (n<10)?'0'+n:n
}
