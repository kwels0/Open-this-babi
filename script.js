const messages = [
    "You misclicked. Press yes",
    "Babi you misclicked again.",
    "Yeah babi I think you misclicked again haha",
    "Babi please...",
    "Just think about it!",
    "If you say no, creature will be really sad...",
    "Creature will be very sad...",
    "Creature will be very very very sad...",
    "Ok fine, ayaw mo na saakin...",
    "Just kidding, say yes please! ❤️"
];

let messageIndex = 0;

function handleNoClick() {
    const noButton = document.querySelector('.no-button');
    const yesButton = document.querySelector('.yes-button');
    noButton.textContent = messages[messageIndex];
    messageIndex = (messageIndex + 1) % messages.length;
    const currentSize = parseFloat(window.getComputedStyle(yesButton).fontSize);
    yesButton.style.fontSize = `${currentSize * 1.5}px`;
}

function handleYesClick() {
    window.location.href = "yes_page.html";
}