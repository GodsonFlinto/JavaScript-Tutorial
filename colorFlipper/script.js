const bgcolor = document.getElementById("color")
const wrap = document.getElementById("wrap")
const button = document.getElementById("btn")
let hex = [0,1,2,3,4,5,6,7,8,9,'A','B','C','D','E','F']

button.addEventListener('click', changecolor)

function changecolor(){
    let color = "#";
    for(let i=1; i<=6; i++){
        color+=hexindex()
    }
    wrap.style.backgroundColor=color
    bgcolor.innerHTML = color

}

function hexindex(){
    let index = Math.floor(Math.random()*16)
    return hex[index]
}

let dept = ['ECE', 'IT', 'CSE', 'ISE', 'EEE']
for(let i=0; i<dept.length; i++){
    const dropdown = document.getElementById("a"+i)
    dropdown.innerHTML = dept[i]
    dropdown.value = dept[i]
    dropdown.textContent = dept[i]
}