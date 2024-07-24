const display =  document.querySelector('.value');
const buttons =  document.querySelectorAll('button');

buttons.forEach( (item) => {
    item.onclick = () =>{
        try {
        if(item.dataset.button === 'C'){
            display.value = '';
            console.log(item.dataset.button)
        } else if(item.dataset.button === 'CE'){
            let string = display.value;
            display.value =  string.substr(0, string.length-1);
            console.log(item.dataset.button)
        }         
        else if (item.dataset.button === '=') { 
            if (display.value) {
                const operatorSequencePattern = /[\+\-\*\/\.]{2,}/;
                display.value = operatorSequencePattern.test(display.value) ? 'Invalid Entry' : eval(display.value);
                console.log(item.dataset.button);
            }
        }        
        else {
            display.value += item.dataset.button;
            console.log(item.dataset.button)
        }
    } catch(err){
        display.value = 'Invalid Entry';
        setTimeout( () => (display.value = ''), 1000)
    }

    }
})
