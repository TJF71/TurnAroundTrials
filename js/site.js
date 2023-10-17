
// get the user input to reverse
function getValues() {
    // get the text out of the input and assign it to a variable
    let message = document.getElementById('userInput').value;

    // "SANITIZE" by JV
    //  let cleanInput = input.replaceAll(/[^a-zA-Z0-9]/g,'');  regex replace special char except a to z, A to Z and 0 to 9
    //  cleanInput = cleanInput.toLowerCase();
    //  
    // or
    // 
    //    let regex = /[^a-zA-Z0-9]/g;
    //    let cleanInput = input.replaceAll(regex, '');
    //


    // validate input and make sure its not empty
    if (message.length == 0) {

        Swal.fire(
            {
                backdrop: 'error',
                backdrop: false,
                text: 'Please enter a string to check'   //replace this with that variable
            }
        );

    } else {

        // pas the user input to reverseMessage function and assign it's return to a variable
        let revMsg = reverseMessage(message);

        //send the message adn reverse message to checkForPalindrome
        let palindrome = checkForPalindrome(message, revMsg);

        // give th results to display messare
        displayResults(message, revMsg, palindrome);


    }
}

// reverse the string
function reverseMessage(input) {

    // define return
    let output = '';

    for (let i = input.length - 1; i >= 0; i--) {
        output += input[i];
    }

    return output;

}


// check to see if the strings match

function checkForPalindrome(msg, revmsg) {
    if (msg == revmsg) {
        return true;
    } else {
        return false;
    }

    // JV notes
    // let reversed = reverseMessage(cleanInput); JV
    // let isPalindrom = reversed == cleanInput; JV  <- returns boolean
    // 
    // let results = {
    // reversedMessage: reversed,
    // isPalindrome: isPanindrome
    // };
    // return results;  <- return object with mulitple values.  Can only return one item from function
    // so if you want more you can use an object
}

function displayResults(msgEntered, revMsg, PalTrueFalse) {

    document.getElementById('msg').textContent = `Your message is ${msgEntered}`;
    document.getElementById('msg').textContent = `Your reversed message is ${revMsg}`;
    document.getElementById('msg').textContent = `It is ${PalTrueFalse} that your message is a palindrome`;



    // document.getElementById('msg').textContent = `Your message in reverse is ${revMsg}`;


    document.getElementById('alert').classList.remove('invisible');
    // document.getElementById('alert').classList.remove('invisible', 'alert-danger, 'alert-success');  <- could remove all alerts at once
    // document.getElementById('alert').classList.add( 'alert-danger');  <- add the alert you want

}

// display the message