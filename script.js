
function speak() {
    // Get the textarea value
    const textAreaValue = document.getElementById("myTextarea").value; // Replace "myTextarea" with the ID of your textarea
  
    // Create a SpeechSynthesisUtterance
    const utterance = new SpeechSynthesisUtterance(textAreaValue);
  
    // // Select a voice
    const voices = speechSynthesis.getVoices();
    utterance.voice = voices[0]; // Choose a specific voice
  
    // Speak the text
    speechSynthesis.speak(utterance);
  }