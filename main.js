
const recognition = new SpeechRecognition();
recognition.interimResults = true;

let ala1 = document.getElementById('ala1');
let ala2 = document.getElementById('ala2');
let ala3 = document.getElementById('ala3');
let ala4 = document.getElementById('ala4');
let ala5 = document.getElementById('ala5');
window.SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;

recognition.addEventListener('result', (e) => {
  const text = Array.from(e.results)
    .map(result => result[0])
    .map(result => result.transcript)
    .join('');

  if (e.results[0].isFinal) {
    console.log(text);
    if (text.includes('luz 1') || text.includes('Luz 1')) {
      if(ala1.checked == 0){
        ala1.checked = 1;
      }else{
        ala1.checked = 0;
      }
    }
    if (text.includes('luz 2') || text.includes('Luz 2')) {
      if(ala2.checked == 0){
        ala2.checked = 1;
      }else{
        ala2.checked = 0;
      }
    }
    if (text.includes('luz 3') || text.includes('Luz 3')) {
      if(ala3.checked == 0){
        ala3.checked = 1;
      }else{
        ala3.checked = 0;
      }
    }
    if (text.includes('luz 4') || text.includes('Luz 4')) {
      if(ala4.checked == 0){
        ala4.checked = 1;
      }else{
        ala4.checked = 0;
      }
    }
    if (text.includes('luz 5') || text.includes('Luz 5')) {
      if(ala5.checked == 0){
        ala5.checked = 1;
      }else{
        ala5.checked = 0;
      }
    }
    
  }
});


recognition.addEventListener('end', () => {
  recognition.start();
})

recognition.start();