// ========================================
// HAMBURGER MENU TOGGLE
// ========================================

const hamburger = document.getElementById("hamburger")
const navLinks = document.getElementById("navLinks")

// Toggle menu on hamburger click
hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active")
  navLinks.classList.toggle("active")
})

// Close menu when a link is clicked
navLinks.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    hamburger.classList.remove("active")
    navLinks.classList.remove("active")
  })
})

// Close menu when clicking outside
document.addEventListener("click", (e) => {
  if (!e.target.closest(".navbar-container")) {
    hamburger.classList.remove("active")
    navLinks.classList.remove("active")
  }
})
function sendWhatsApp() {
  const message = document.getElementById("whatsappMessage").value.trim();

  if (message === "") {
    alert("من فضلك اكتب الرسالة");
    return;
  }

  const phoneNumber = "966555246488"; // الرقم مخفي هنا
  const url =
    "https://wa.me/" +
    phoneNumber +
    "?text=" +
    encodeURIComponent(message);

  window.open(url, "_blank");
}