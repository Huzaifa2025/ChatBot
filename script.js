function sendMessage() {
    let userInput = document.getElementById("user-input").value;
    if (userInput.trim() !== "") {
        displayMessage(userInput, "user");
        document.getElementById("user-input").value = "";
        
        // Simulate bot response
        setTimeout(() => {
            let botResponse = generateResponse(userInput);
            displayMessage(botResponse, "bot");
        }, 1000);
    }
}

function displayMessage(message, sender) {
    let chatBox = document.getElementById("chat-box");
    let messageDiv = document.createElement("div");
    messageDiv.classList.add(sender === "bot" ? "bot-message" : "user-message");
    messageDiv.textContent = message;
    chatBox.appendChild(messageDiv);
    chatBox.scrollTop = chatBox.scrollHeight; // Scroll to bottom
}

function generateResponse(userInput) {
    // Simple AI logic - can be expanded
    userInput = userInput.toLowerCase();
    
    if (userInput.includes("hello")) {
        return "Hi there! How can I help you today?";
    } else if (userInput.includes("how are you")) {
        return "I'm just a bot, but I'm doing great! How about you?";
    } else if (userInput.includes("bye")) {
        return "Goodbye! Have a great day!";
    } else {
        return "Sorry, I didn't understand that. Can you rephrase?";
    }
}
