// Define the writeCards function
function writeCards(names) {
    return names.map(name => `Thank you, ${name}, for the wonderful surprise gift!`);
  }
  
  // Test the writeCards function
  const names = ["Guadalupe", "Ollie", "Aki"];
  const thankYouMessages = writeCards(names);
  
  console.log(thankYouMessages);
  
  // Define the countDown function
function countDown(startingNumber) {
    for (let i = startingNumber; i >= 0; i--) {
      console.log(i);
    }
  }
  
  // Test the countDown function
  countDown(5); // Count down from 5 to 0
  