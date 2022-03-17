const texts = document.querySelector('.texts');
const ala1 = document.getElementById("ala1");
const ala2 = document.getElementById("ala2");
const ala3 = document.getElementById("ala3");
const ala4 = document.getElementById("ala4");
const ala5 = document.getElementById("ala5");

window.SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;

const recognition = new SpeechRecognition();
recognition.interimResults = true;

recognition.addEventListener('result', (e)=>{
    const text = Array.from(e.results)
    .map(result => result[0])
    .map(result => result.transcript)
    .join('');
console.log(text);
  if(e.results[0].isFinal){
    if (text.includes('Enciende foco 1') || text.includes('foco 1') || text.includes('enciende foco 1')) {            
      ala1.style.background = "url(bulb_on.jpg)";
    }
    if (text.includes("Apaga foco uno") || text.includes('apaga foco 1')) {
      ala1.style.background = "url(bulb_off.jpg)";
    }
    if (text.includes("Enciende foco 2") || text.includes('foco 2') || text.includes('enciende foco 2')) {      
      ala2.style.background = "url(bulb_on.jpg)";
    }
    if (text.includes("Apaga foco dos") || text.includes('apaga foco 2')) {
      ala2.style.background = "url(bulb_off.jpg)";
    }
    if (text.includes("Enciende foco 3") || text.includes('foco 3') || text.includes('enciende foco 3')) {      
      ala3.style.background = "url(bulb_on.jpg)";
    }
    if (text.includes("Apaga foco tres") || text.includes('apaga foco 3')) {
      ala3.style.background = "url(bulb_off.jpg)";
    }
    if (text.includes("Enciende foco 4") || text.includes('foco 4') || text.includes('enciende foco 4')) {      
      ala4.style.background = "url(bulb_on.jpg)";
    }
    if (text.includes("Apaga foco cuatro") || text.includes('apaga foco 4')) {
      ala4.style.background = "url(bulb_off.jpg)";
    }
    if (text.includes("Enciende foco 5") || text.includes('foco 5') || text.includes('enciende foco 5')) {      
      ala5.style.background = "url(bulb_on.jpg)";
    }
    if (text.includes("Apaga foco cinco") || text.includes('apaga foco 5')) {
      ala5.style.background = "url(bulb_off.jpg)";
    }

  }
});
recognition.addEventListener('end', ()=>{
  recognition.start();
})

recognition.start();