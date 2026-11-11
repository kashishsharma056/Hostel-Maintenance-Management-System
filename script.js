// 1. MOBILE NAVIGATION MENU
const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");

menuToggle.addEventListener("click", function () {
  navLinks.classList.toggle("open");
});

navLinks.querySelectorAll("a").forEach(function (link) {
  link.addEventListener("click", function () {
    navLinks.classList.remove("open");
  });
});

// 2. TOAST MESSAGE
function showToast(message) {
  const toast = document.getElementById("toast");
  toast.textContent = message;
  toast.classList.add("show");

  window.clearTimeout(showToast.timer);
  showToast.timer = window.setTimeout(function () {
    toast.classList.remove("show");
  }, 2800);
}

// 3. LOGIN BUTTONS (PLACEHOLDERS FOR NEXT MODULE)
document.getElementById("studentLogin").addEventListener("click", function () {
  showToast("Student login will be built in the next module!");
});

document.getElementById("adminLogin").addEventListener("click", function () {
  showToast("Admin login will be built in the next module!");
});

// 4. CONTACT FORM (DEMO - DOES NOT SEND TO A SERVER)
document.getElementById("contactForm").addEventListener("submit", function (event) {
  event.preventDefault();

  const name = document.getElementById("contactName").value.trim();
  const message = document.getElementById("contactMessage").value.trim();

  if (!name || !message) {
    showToast("Please fill in all fields.");
    return;
  }

  showToast("Thank you! Your message has been recorded for this demo.");
  this.reset();
});


// 5. SIMPLE STUDENT COMPLAINT SUBMISSION (saved in this browser for the demo)
document.getElementById("complaintForm").addEventListener("submit", function (event) {
  event.preventDefault();
  const complaint = {
    ticketId: "HF-" + Date.now().toString().slice(-8),
    student: document.getElementById("studentName").value.trim(),
    room: document.getElementById("roomNumber").value.trim(),
    category: document.getElementById("complaintCategory").value,
    description: document.getElementById("complaintDescription").value.trim(),
    submittedAt: new Date().toLocaleString(),
    status: "Registered"
  };
  if (!complaint.student || !complaint.room || !complaint.category || !complaint.description) {
    showToast("Please complete all complaint fields.");
    return;
  }
  const saved = JSON.parse(localStorage.getItem("hostelFixComplaints") || "[]");
  saved.push(complaint);
  localStorage.setItem("hostelFixComplaints", JSON.stringify(saved));
  showToast("Complaint submitted! Ticket ID: " + complaint.ticketId);
  this.reset();
});
