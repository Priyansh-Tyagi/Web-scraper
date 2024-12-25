// script.js
function scrapeHackathon() {
    const url = document.getElementById("hackathonUrl").value;

    if (!url) {
        alert("Please enter a valid URL.");
        return;
    }

    // Simulate scraped data for demo purposes
    const scrapedData = {
        date: "January 20, 2024",
        time: "10:00 AM",
        duration: "48 hours",
        venue: "Online",
        cashPrize: "$5000",
    };

    displayHackathonData(scrapedData);
}

function displayHackathonData(data) {
    const hackathonData = document.getElementById("hackathonData");
    hackathonData.innerHTML = `
        <div class="result-card">
            <p><strong>Date:</strong> ${data.date}</p>
            <p><strong>Time:</strong> ${data.time}</p>
            <p><strong>Duration:</strong> ${data.duration}</p>
            <p><strong>Venue:</strong> ${data.venue}</p>
            <p><strong>Cash Prize:</strong> ${data.cashPrize}</p>
        </div>
    `;
}

function compareHackathons() {
    const url1 = document.getElementById("hackathonUrl1").value;
    const url2 = document.getElementById("hackathonUrl2").value;

    if (!url1 || !url2) {
        alert("Please enter valid URLs.");
        return;
    }

    // Simulated comparison data
    const data1 = {
        date: "January 20, 2024",
        time: "10:00 AM",
        duration: "48 hours",
        venue: "Online",
        cashPrize: "$5000",
    };

    const data2 = {
        date: "February 15, 2024",
        time: "9:00 AM",
        duration: "24 hours",
        venue: "San Francisco, CA",
        cashPrize: "$3000",
    };

    displayComparison(data1, data2);
}

function displayComparison(data1, data2) {
    const compareResults = document.getElementById("compareResults");
    compareResults.innerHTML = `
        <div class="result-card">
            <h3>Hackathon 1</h3>
            <p><strong>Date:</strong> ${data1.date}</p>
            <p><strong>Time:</strong> ${data1.time}</p>
            <p><strong>Duration:</strong> ${data1.duration}</p>
            <p><strong>Venue:</strong> ${data1.venue}</p>
            <p><strong>Cash Prize:</strong> ${data1.cashPrize}</p>
        </div>
        <div class="result-card">
            <h3>Hackathon 2</h3>
            <p><strong>Date:</strong> ${data2.date}</p>
            <p><strong>Time:</strong> ${data2.time}</p>
            <p><strong>Duration:</strong> ${data2.duration}</p>
            <p><strong>Venue:</strong> ${data2.venue}</p>
            <p><strong>Cash Prize:</strong> ${data2.cashPrize}</p>
        </div>
    `;
}
