function sendMessage() {
    var userInput = document.getElementById('user-input').value;
    var chatBox = document.getElementById('chat-box');
    
    // Display user message
    var userMessage = document.createElement('p');
    userMessage.className = 'user-message';
    userMessage.textContent = 'You: ' + userInput;
    chatBox.appendChild(userMessage);
    
    // Check for music play command
    if (userInput.toLowerCase().includes('play music')) {
        var musicMessage = document.createElement('p');
        musicMessage.textContent = 'Bot: Playing music...';
        chatBox.appendChild(musicMessage);
        
        // Simulate playing music (replace with actual music player logic)
        playMusic();
    } else {
        var botMessage = document.createElement('p');
        botMessage.textContent = 'Bot: Sorry, I don\'t understand.';
        chatBox.appendChild(botMessage);
    }
    
    // Clear input field
    document.getElementById('user-input').value = '';
}

function playMusic() {
    // Simulate playing music - replace with actual audio player implementation
    console.log('Music is playing...');
    // Example: create an audio element and start playing music
    var audio = new Audio('Oladips-Legend-(TrendyBeatz.com).mp3');
    audio.play();
}
