const chatMessages = document.getElementById("chatMessages");
const messageInput = document.getElementById("messageInput");
const sendButton = document.getElementById("sendButton");

sendButton.addEventListener("click", () => {
  const message = messageInput.value.trim();
  if (message) {
    addMessage("You", message);
    messageInput.value = "";
  }
});

function addMessage(sender, message) {
  const messageElement = document.createElement("div");
  messageElement.className = "message";
  messageElement.innerHTML = `<strong>${sender}:</strong> ${message}`;
  chatMessages.appendChild(messageElement);
  chatMessages.scrollTop = chatMessages.scrollHeight;
}
