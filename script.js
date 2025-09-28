const form = document.getElementById("checkInForm");
const nameInput = document.getElementById("attendeeName");
const teamSelect = document.getElementById("teamSelect");

// Load counts from local storage or start from zero
let count = parseInt(localStorage.getItem("attendanceCount")) || 0;
const maxCount = 50;

let waterCount = parseInt(localStorage.getItem("waterCount")) || 0;
let zeroCount = parseInt(localStorage.getItem("zeroCount")) || 0;
let powerCount = parseInt(localStorage.getItem("powerCount")) || 0;

// Set initial UI values
document.getElementById("attendeeCount").textContent = count;
document.getElementById("waterCount").textContent = waterCount;
document.getElementById("zeroCount").textContent = zeroCount;
document.getElementById("powerCount").textContent = powerCount;
const progressBar = document.getElementById("progressBar");
const percentage = Math.round((count / maxCount) * 100);
progressBar.style.width = `${percentage}%`;

// Track attendance
form.addEventListener("submit", function (event) {
  event.preventDefault();
  // You can run your custom code here when someone checks in

  const name = nameInput.value;
  const team = teamSelect.value;
  const teamName = teamSelect.selectedOptions[0].text;

  console.log(name, team, teamName);

  // Increment count
  count++;
  localStorage.setItem("attendanceCount", count);

  // Update attendee count display
  const attendeeCount = document.getElementById("attendeeCount");
  attendeeCount.textContent = count;

  // Update progress bar
  const percentage = Math.round((count / maxCount) * 100);
  progressBar.style.width = `${percentage}%`;

  // Update team counter and local storage
  let teamCounter;
  if (team === "water") {
    waterCount++;
    localStorage.setItem("waterCount", waterCount);
    teamCounter = document.getElementById("waterCount");
    teamCounter.textContent = waterCount;
  } else if (team === "zero") {
    zeroCount++;
    localStorage.setItem("zeroCount", zeroCount);
    teamCounter = document.getElementById("zeroCount");
    teamCounter.textContent = zeroCount;
  } else if (team === "power") {
    powerCount++;
    localStorage.setItem("powerCount", powerCount);
    teamCounter = document.getElementById("powerCount");
    teamCounter.textContent = powerCount;
  }

  // Show Welcome message
  const message = `🎉 Welcome, ${name} from ${teamName}!`;
  console.log(message);

  // Display greeting above the form
  const greeting = document.getElementById("greeting");
  greeting.textContent = message;

  // Celebrate when max count is reached
  if (count === maxCount) {
    // Find the winning team
    const waterCount = parseInt(
      document.getElementById("waterCount").textContent
    );
    const zeroCount = parseInt(
      document.getElementById("zeroCount").textContent
    );
    const powerCount = parseInt(
      document.getElementById("powerCount").textContent
    );

    let winningTeam = "Team Water Wise";
    let maxTeamCount = waterCount;

    if (zeroCount > maxTeamCount) {
      winningTeam = "Team Net Zero";
      maxTeamCount = zeroCount;
    }
    if (powerCount > maxTeamCount) {
      winningTeam = "Team Renewables";
      maxTeamCount = powerCount;
    }

    const celebrationMessage = document.getElementById("celebrationMessage");
    celebrationMessage.textContent = `🎊 Attendance goal reached! The winning team is ${winningTeam}!`;

    alert("🎉 50 attendees have checked in!");
  }

  form.reset();
});
