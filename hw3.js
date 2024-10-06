function getDayOfWeek(dayNumber) {
    const daysOfWeek = "Monday,Tuesday,Wednesday,Thursday,Friday,Saturday,Sunday";
    const daysArray = daysOfWeek.split(',');

    if (dayNumber < 1 || dayNumber > 7) {
        return "Invalid input. Please enter a number between 1 and 7.";
    }

    return daysArray[dayNumber - 1]; // Adjust for zero-based index
}

// Example usage
const inputNumber = 1; // Change this number to test different days
const day = getDayOfWeek(inputNumber);
console.log(`Input: ${inputNumber} - Output: ${day}`);