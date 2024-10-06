function tellFortune(numKids, husbandName, location, jobPlace) {
    const fortuneMessage = `You will have ${numKids} kids, and your husband will be named ${husbandName}. You will live in ${location} and work at ${jobPlace}.`;
    return fortuneMessage;
}

// Example usage
const numKids = 2;            // Number of kids
const husbandName = "Alex";   // Name of husband
const location = "London";      // Geographic location
const jobPlace = "IntelligentBee";     // Job place

const fortune = tellFortune(numKids, husbandName, location, jobPlace);
console.log(fortune);
