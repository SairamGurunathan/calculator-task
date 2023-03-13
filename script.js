function clicking(event){
    // console.log(event.innerText);
    parent = document.querySelector('.screen')
    var operator = ['+','-','*','/']
    if(!(operator.includes(parent.innerText.slice(-1)) && operator.includes(event.innerText))){
    parent.innerText = parent.innerText + event.innerText
    }
    // console.log('button clicked');
}

window.addEventListener('keypress',(e)=>{
    console.log(e)
    var operator = ['+','-','*','/']
        key = e.key;
        code = e.code;
        var parent = document.querySelector('.screen')
    if(code.includes('Digit') || (code.includes('Numpad') && !code.includes('NumpadEnter'))){
        if(!(operator.includes(parent.innerText.slice(-1)) && operator.includes(key))){
            parent.innerText = parent.innerText + key
            console.log(e);
            console.log('key is press')
        }
    }
    else if(code.includes('Enter') || code.includes('NumpadEnter')){
        var parent = document.querySelector('.screen')
        var final = eval(parent.innerText)
        document.querySelector('.screen').innerText = final
    }
})

var total = document.querySelector('.equal')
total.addEventListener('click',result)
function result(){
    var parent = document.querySelector('.screen')
    var final = eval(parent.innerText)
    document.querySelector('.screen').innerText = final
}

var erase = document.querySelector('.del')
erase.addEventListener('click',era)
function era(){
    var parent = document.querySelector('.screen').innerText
    var final = parent.slice(0,-1)
    document.querySelector('.screen').innerText = final
}

var clear = document.querySelector('.clear')
clear.addEventListener('click',clr)
function clr(){
    document.querySelector('.screen').innerText = ''
}