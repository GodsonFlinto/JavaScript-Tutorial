let select = document.querySelectorAll('.currency')
let inp = document.getElementById('input')
let res = document.getElementById('res')
let btn = document.getElementById('btn')

fetch('https://api.frankfurter.app/currencies')
.then((res)=>res.json())
.then((msg)=>showdown(msg))

function showdown(msg){
    let currency = Object.entries(msg)  //object.entries -> for converting it into array
    for(let i=0; i<currency.length; i++){
        let opt = `<option value="${currency[i][0]}">${currency[i][0]}</option>`
        select[0].innerHTML += opt
        select[1].innerHTML += opt
    }
}

btn.addEventListener('click',()=>{
    let inp1 = select[0].value
    let inp2 = select[1].value
    let inp3 = inp.value
    if(inp1===inp2)
        alert("The selected currency is of same type.")
    else
        convert(inp1,inp2,inp3)
})

function convert(inp1, inp2, inp3){
    const host = 'api.frankfurter.app';
    fetch(`https://${host}/latest?amount=${inp3}&from=${inp1}&to=${inp2}`)
    .then(resp => resp.json())
    .then((data) => {
        let rate = Object.entries(data.rates)[0][1]
        res.value = rate.toFixed(2)
    })
    .catch((err)=>{
        console.log(err)
    })
}