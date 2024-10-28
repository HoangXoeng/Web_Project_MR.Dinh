// ---chat---
addChatMessage('Chào mừng bạn đến với WOWBOX SALAD. <br> Chúng tôi có thể giúp gì cho bạn?')
function sendMessage() {
    const inputField = document.querySelector('.chat-footer input');
    const messageText = inputField.value.trim();

    if (messageText !== "") {
        addChatMessage('Bạn', messageText);
        setTimeout(() => {
            addChatMessage('WOWBOX SALAD', 'Cảm ơn bạn đã liên hệ! Chúng tôi sẽ hỗ trợ bạn ngay.');
        }, 1000);

        inputField.value = ''; 
    }
}
function addChatMessage(sender, message) {
    const chatBody = document.querySelector('.chat-body');
    const newMessage = document.createElement('div');
    newMessage.innerHTML = `<strong>${sender}:</strong> ${message}`;
    chatBody.appendChild(newMessage);
    setTimeout(() => {
        newMessage.classList.add('show');
    }, 100);
}

document.querySelector('.chat-footer button').addEventListener('click', sendMessage);

document.querySelector('.chat-footer input').addEventListener('keypress', function (e) {
    if (e.key === 'Enter') {
        sendMessage();
    }
});

// -----click chat----
      function toggleChat() {
    const chatBox = document.getElementById('hid');
    if (chatBox.style.display === 'none' || chatBox.style.display === '') {
        chatBox.style.display = 'block';
    } else {
        chatBox.style.display = 'none';
    }
}

// Ẩn chat box khi click ra ngoài
document.addEventListener('click', function (event) {
    const chatBox = document.getElementById('hid');
    const messIcon = document.querySelector('.mess img');

    // Nếu click bên ngoài chat box và không phải là icon
    if (!chatBox.contains(event.target) && event.target !== messIcon) {
        chatBox.style.display = 'none';
    }
});
