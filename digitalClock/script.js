let hrs = document.getElementById('hrs')
let min = document.getElementById('min')
let sec = document.getElementById('sec')

function time(){
    let time = new Date()
    let hour = time.getHours()
    let minute = time.getMinutes()
    let seconds = time.getSeconds()
    if(hour>12){
        hour -= 12
    }
    if(hour>=12)
        document.getElementById('ampm').innerHTML = "PM"
    hrs.innerHTML = addZero(hour)
    min.innerHTML = addZero(minute)
    sec.innerHTML = addZero(seconds)
}
function addZero(n){
    return (n<10)?"0"+n:n
}

setInterval(time,1000)

let month = document.getElementById('month')
let day = document.getElementById('day')
let date = document.getElementById('date')

let monArr = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec']
let dayArr = ['Sunday','Monday','Tueday','Wednesday','Thursday','Friday','Saturday']

let calendar = new Date()
month.innerHTML = monArr[calendar.getMonth()] + ','
day.innerHTML = dayArr[calendar.getDay()]
date.innerHTML = calendar.getDate() + 'th'

console.log(month.innerHTML)