const btns = document.querySelectorAll('.first-digit');
const screen = document.querySelector('.second'); 
const DelBtn = document.querySelector('#num');
const resetBtn = document.querySelector('#number'); 
const equalBtn = document.querySelector('#another'); 
const upBtn = document.querySelector('.radio')

// upBtn.addEventListener('click', function () {
//     console.log ('hello')
// })

for(let i = 0; i < btns.length; i++) {
    btns[i].addEventListener('click', function(e){
        let number = btns[i].getAttribute('data-num');
        screen.value += e.target.textContent; 
        console.log(screen.value)
    })
}

equalBtn.addEventListener('click', function (){
    let value = eval(screen.value);
    screen.value = value;
}) 

resetBtn.addEventListener('click', function (){
    screen.value = '';
})

DelBtn.addEventListener('click', function () {
    DelBtn.remove();

})