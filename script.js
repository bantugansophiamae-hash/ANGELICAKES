// ================= QR AUTO UNLOCK =================
window.onload = function () {
  const params = new URLSearchParams(window.location.search);

  if (params.get("open") === "1") {
    document.getElementById("qrScreen").style.display = "none";
    document.getElementById("site").classList.remove("hidden");
  }
};

// ================= NAVIGATION =================
function go(id) {
  document.querySelectorAll(".screen").forEach(s => s.classList.remove("active"));
  document.getElementById(id).classList.add("active");
}

// ================= LETTERS =================
function showLetter(i) {
  document.querySelectorAll(".letter").forEach(l => l.classList.remove("active"));
  document.querySelectorAll(".letter")[i].classList.add("active");
}

// ================= FLOWERS =================
function flower(type) {
  document.getElementById("popup").classList.remove("hidden");

  if (type === "carnation") {
    document.getElementById("title").innerText = "Carnation 💜";
    document.getElementById("msg").innerText = "Love & admiration";
  } else {
    document.getElementById("title").innerText = "Sunflower 🌻";
    document.getElementById("msg").innerText = "Happiness & loyalty";
  }
}

// ================= CLOSE POPUP =================
function closePopup() {
  document.getElementById("popup").classList.add("hidden");
}