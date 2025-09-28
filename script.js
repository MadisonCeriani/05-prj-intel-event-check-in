const form = document.getElementById("checkInForm");
const nameInput = document.getElementById("attendeeName");
const teamSelect = document.getElementById("teamSelect");

// Track attendance
let count = 0;
const maxCount = 50;

form.addEventListener("submit", function (event) {
  event.preventDefault();
  // You can run your custom code here when someone checks in

  const name = nameInput.value;
  const team = teamSelect.value;
  const teamName = teamSelect.selectedOptions[0].text;

  console.log(name, team, teamName);

  // Increment count
  count++;
  console.log("Total check-ins:", count);

  // Update attendee count display
  const attendeeCount = document.getElementById("attendeeCount");
  attendeeCount.textContent = count;

  // Update progress bar
  const percentage = Math.round((count / maxCount) * 100);
  const progressBar = document.getElementById("progressBar");
  progressBar.style.width = `${percentage}%`;

  console.log(`Progress: ${percentage}%`);

  // Update team counter
  const teamCounter = document.getElementById(team + "Count");
  teamCounter.textContent = parseInt(teamCounter.textContent) + 1;

  // Show Welcome message
  const message = `🎉 Welcome, ${name} from ${teamName}!`;
  console.log(message);

  // Display greeting above the form
  const greeting = document.getElementById("greeting");
  greeting.textContent = message;

  form.reset();
});
