
function writeCards(names, eventName) {
    // Create a new array to hold the thank you messages
    const messages = [];

    // Iterate over the names array
    for (let i = 0; i < names.length; i++) {
        // Create a thank you message using string interpolation
        const message = `Thank you, ${names[i]}, for the wonderful ${eventName} gift!`;
        // Add the message to the messages array
        messages.push(message);
    }

    // Return the array of messages
    return messages;
}

function countDown(num) {
    // Check if the input is a positive integer
    if (num < 0) {
        console.log("Please enter a positive integer.");
        return;
    }

    // Loop from the input number down to 0
    for (let i = num; i >= 0; i--) {
        console.log(i);
    }
}