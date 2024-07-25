/**
 * Open chatbox through a custom button
 * https://help.tidio.com/
 */
export function setupChatbotBtn() {
    if (window.tidioChatApi) {
        window.tidioChatApi.on("ready", onTidioChatApiReady);
    }
    
    document.querySelector(".js-chat-button").addEventListener("click", function (event) {
        event.preventDefault(); // Prevent the default behavior
        if (window.tidioChatApi) {
            window.tidioChatApi.show();
            window.tidioChatApi.open();
        } else {
            console.info('tidioChatApi is undefined!')
        }
    });
}

function onTidioChatApiReady() {
  window.tidioChatApi.hide();
}

