
// get the user input to reverse
function getValues() {
    // get the text out of the input and assign it to a variable
    let message = document.getElementById('userInput').value;

    // "SANITIZE" by JV
    //  let cleanInput = input.replaceAll(/[^a-zA-Z0-9]/g,'');  regex replace special char except a to z, A to Z and 0 to 9
    //  cleanInput = cleanInput.toLowerCase();
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

}

function displayResults(msgEntered, revMsg, PalTrueFalse) {

    document.getElementById('msg').textContent = `Your message is ${msgEntered}`;
    document.getElementById('msg').textContent = `Your reversed message is ${revMsg}`;
    document.getElementById('msg').textContent = `It is ${PalTrueFalse} that your message is a palindrome`;



    // document.getElementById('msg').textContent = `Your message in reverse is ${revMsg}`;


    document.getElementById('alert').classList.remove('invisible');

}

// display the message