 

const keys = document.querySelectorAll('.key')

const checkbox = document.querySelector('.checkbox__keys')

const switcher = document.querySelector('.switcher')

const keysSection = document.querySelector('.piano__keys')

// volume
const volumeSlider = document.querySelector(".volume-slider input");

let audio = new Audio("../notes/a.wav")



const playNote = (note)=>{
    audio.src = `../notes/${note}.wav`
    audio.play();
}

const handleMouseDown = (key) => {
       
       playNote(key.getAttribute('data-note'))
    if(key.className.includes('black')){

       key.classList.add('black--pressed')
        return
    }
    key.style.background = '#ddd';
}

const handleMouseUp = (key) => {
    if(key.className.includes('black')){

       key.classList.remove('black--pressed')
        return
    }
    key.style.background = 'white';
}

keys.forEach((key)=>{
    key.addEventListener('mousedown', ()=> handleMouseDown(key))
    key.addEventListener('mouseup', ()=> handleMouseUp(key))
})


checkbox.addEventListener('change', ({target}) =>{
     //alert(target.checked)
     if(target.checked){
        switcher.classList.add('switcher--active')
        keysSection.classList.remove('disable-keys')
        return
     }
     switcher.classList.remove('switcher--active')
     keysSection.classList.add('disable-keys')
})
const keyDownMapper = {
    "1": ()=> handleMouseDown(keys[0]),
    "2": ()=> handleMouseDown(keys[1]),
    "3": ()=> handleMouseDown(keys[2]),
    "4": ()=> handleMouseDown(keys[3]),
    "5": ()=> handleMouseDown(keys[4]),
    "6": ()=> handleMouseDown(keys[5]),
    "7": ()=> handleMouseDown(keys[6]),
    "8": ()=> handleMouseDown(keys[7]),
    "9": ()=> handleMouseDown(keys[8]),
    "0": ()=> handleMouseDown(keys[9]),
    "-": ()=> handleMouseDown(keys[10]),
    "=": ()=> handleMouseDown(keys[11]),
    "q": ()=> handleMouseDown(keys[12]),
    "w": ()=> handleMouseDown(keys[13]),
    "e": ()=> handleMouseDown(keys[14]),
    "r": ()=> handleMouseDown(keys[15]),
    "t": ()=> handleMouseDown(keys[16]),
    "y": ()=> handleMouseDown(keys[17]),
    "u": ()=> handleMouseDown(keys[18]),
    "i": ()=> handleMouseDown(keys[19]),
    "o": ()=> handleMouseDown(keys[20]),
    "p": ()=> handleMouseDown(keys[21]),
    "a": ()=> handleMouseDown(keys[22]),
    "s": ()=> handleMouseDown(keys[23]),
    "d": ()=> handleMouseDown(keys[24]),
    "f": ()=> handleMouseDown(keys[25]),
    "g": ()=> handleMouseDown(keys[26]),
    "h": ()=> handleMouseDown(keys[27]),
    "j": ()=> handleMouseDown(keys[28]),
    "k": ()=> handleMouseDown(keys[29]),
    "l": ()=> handleMouseDown(keys[30]),
    "ç": ()=> handleMouseDown(keys[31]),
    "z": ()=> handleMouseDown(keys[32]),
    "x": ()=> handleMouseDown(keys[33]),
    "c": ()=> handleMouseDown(keys[34]),
    "v": ()=> handleMouseDown(keys[35]),
    
}

document.addEventListener('keydown', (event)=>{
    //alert(event.key)
    event.preventDefault()
    keyDownMapper[event.key]()
})

const keyUpMapper = {
    "1": ()=> handleMouseUp(keys[0]),
    "2": ()=> handleMouseUp(keys[1]),
    "3": ()=> handleMouseUp(keys[2]),
    "4": ()=> handleMouseUp(keys[3]),
    "5": ()=> handleMouseUp(keys[4]),
    "6": ()=> handleMouseUp(keys[5]),
    "7": ()=> handleMouseUp(keys[6]),
    "8": ()=> handleMouseUp(keys[7]),
    "9": ()=> handleMouseUp(keys[8]),
    "0": ()=> handleMouseUp(keys[9]),
    "-": ()=> handleMouseUp(keys[10]),
    "=": ()=> handleMouseUp(keys[11]),
    "q": ()=> handleMouseUp(keys[12]),
    "w": ()=> handleMouseUp(keys[13]),
    "e": ()=> handleMouseUp(keys[14]),
    "r": ()=> handleMouseUp(keys[15]),
    "t": ()=> handleMouseUp(keys[16]),
    "y": ()=> handleMouseUp(keys[17]),
    "u": ()=> handleMouseUp(keys[18]),
    "i": ()=> handleMouseUp(keys[19]),
    "o": ()=> handleMouseUp(keys[20]),
    "p": ()=> handleMouseUp(keys[21]),
    "a": ()=> handleMouseUp(keys[22]),
    "s": ()=> handleMouseUp(keys[23]),
    "d": ()=> handleMouseUp(keys[24]),
    "f": ()=> handleMouseUp(keys[25]),
    "g": ()=> handleMouseUp(keys[26]),
    "h": ()=> handleMouseUp(keys[27]),
    "j": ()=> handleMouseUp(keys[28]),
    "k": ()=> handleMouseUp(keys[29]),
    "l": ()=> handleMouseUp(keys[30]),
    "ç": ()=> handleMouseUp(keys[31]),
    "z": ()=> handleMouseUp(keys[32]),
    "x": ()=> handleMouseUp(keys[33]),
    "c": ()=> handleMouseUp(keys[34]),
    "v": ()=> handleMouseUp(keys[35]),
    
}


document.addEventListener('keyup', (event)=>{
    //alert(event.key)
    event.preventDefault()
    keyUpMapper[event.key]()
})

const handleVolume = (e) => {
    audio.volume = e.target.value;
  };

  volumeSlider.addEventListener("input", handleVolume);
