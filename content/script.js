function runScript() {
    var cursorURL = chrome.extension.getURL("images/dog-chichi.png")

    //Cursor initally set to first cursor
    document.body.style.cursor = "url('" + cursorURL + "'), auto";

    /*Switches to a new cursor from the set every time the user clicks or drags mouse*/
    document.addEventListener("click", () => {
        enlargeImage()
    });

    var enlargeImage = () => {
        console.log('Hey image, become larger')
    }

    /*Sets the styling of the cursor to the given URL*/
    var setCursor = (url) => {
        document.body.style.cursor = "url('" + url + "') 0 0, auto";
    }
}

runScript()