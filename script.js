function showAlert(message, color, delay) {
    var alertBox = document.getElementById('alert');
    var alertMessage = document.getElementById('alertMessage');
    alertMessage.innerText = message;
    alertBox.style.backgroundColor = color;
    alertBox.classList.add('show');
    setTimeout(function() {
        alertBox.classList.remove('show');
    }, delay);
}

// Functions to trigger alert messages with different messages, colors, and delays
function showWelcomeAlert() {
    showAlert('Welcome to my website!', '#4caf50', 3000); // Green, 顯示時間延長為 3000 毫秒
}

function showMaintenanceAlert() {
    showAlert('The website is currently undergoing maintenance. Please try again later.', '#2196f3', 3000); // Blue, 顯示時間延長為 3000 毫秒
}

function showPartnershipAlert() {
    showAlert('We are looking for new partnership opportunities!', '#ff9800', 3000); // Orange, 顯示時間延長為 3000 毫秒
}

function showMaintenanceBeginAlert() {
    showAlert('Attention! System maintenance will begin shortly.', '#f44336', 3000); // Red, 顯示時間延長為 3000 毫秒
}

function showLatestProductsAlert() {
    showAlert('Check out our latest products online now!', '#9c27b0', 3000); // Purple, 顯示時間延長為 3000 毫秒
}

// 綁定按鈕點擊事件
document.getElementById('welcomeButton').addEventListener('click', showWelcomeAlert);
document.getElementById('maintenanceButton').addEventListener('click', showMaintenanceAlert);
document.getElementById('partnershipButton').addEventListener('click', showPartnershipAlert);
document.getElementById('maintenanceBeginButton').addEventListener('click', showMaintenanceBeginAlert);
document.getElementById('latestProductsButton').addEventListener('click', showLatestProductsAlert);