//bot token
var telegram_bot_id = "6184053476:AAGTb4xDA1C-Ru0bOvG1VmLwrZFN429OG1w";
//chat id
var chat_id = 5350055035;
var Uname, Umessage, Udevice, Utelegram;
var ready = function () {
    Uname = document.getElementById("_Name").value;
    Udevice = document.getElementById("_Device").value;
    Uos = document.getElementById("_OS").value;
    UKerVer = document.getElementById("_KernelVer").value;
    UAndVer = document.getElementById("_AndVer").value;
    Utelegram = document.getElementById("_TelegramID").value;
    message = "Name: " + Uname + "\nDevice: " + Udevice + "\nOS: " + Uos + "\nKernel Version:" + UKerVer + "\nAndroid Version:" + UAndVer + "\nTelegramID: "+ "@" + Utelegram;
};
var requests = function () {
    ready();
    var settings = {
        "async": true,
        "crossDomain": true,
        "url": "https://api.telegram.org/bot" + telegram_bot_id + "/sendMessage",
        "method": "POST",
        "headers": {
            "Content-Type": "application/json",
            "cache-control": "no-cache"
        },
        "data": JSON.stringify({
            "chat_id": chat_id,
            "text": message
        })
    };
    $.ajax(settings).done(function (response) {
        console.log(response);
    });
    document.getElementById("_Name").value = "";
    document.getElementById("_Device").value = "";
    document.getElementById("_OS").value = "";
    document.getElementById("_TelegramID").value = "";
    document.getElementById("_KernelVer").value = "";
    document.getElementById("_AndVer").value = "";
    return false;
};
