// Simulated data to mimic the output of a scraper
const mockHackathonData = [
    {
        date: "January 20, 2024",
        time: "10:00 AM",
        duration: "48 hours",
        venue: "Online",
        cashPrize: "$5000",
    },
    {
        date: "February 15, 2024",
        time: "9:00 AM",
        duration: "24 hours",
        venue: "San Francisco, CA",
        cashPrize: "$3000",
    },
    {
        date: "March 10, 2024",
        time: "11:00 AM",
        duration: "36 hours",
        venue: "Austin, TX",
        cashPrize: "$7000",
    },
];

// Function to simulate scraping and display mock data
function scrapeMockHackathons() {
    displayHackathons(mockHackathonData);
}

// Function to display hackathons in the HTML
function displayHackathons(hackathons) {
    const hackathonData = document.getElementById("hackathonData");
    hackathonData.innerHTML = "";

    if (hackathons.length === 0) {
        hackathonData.innerHTML = "<p>No hackathons found.</p>";
        return;
    }

    hackathons.forEach((hackathon, index) => {
        const card = `
            <div class="result-card">
                <h3>Hackathon ${index + 1}</h3>
                <p><strong>Date:</strong> ${hackathon.date}</p>
                <p><strong>Time:</strong> ${hackathon.time}</p>
                <p><strong>Duration:</strong> ${hackathon.duration}</p>
                <p><strong>Venue:</strong> ${hackathon.venue}</p>
                <p><strong>Cash Prize:</strong> ${hackathon.cashPrize}</p>
            </div>
        `;
        hackathonData.innerHTML += card;
    });
}
