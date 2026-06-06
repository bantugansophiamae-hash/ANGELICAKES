let step = 0;
const steps = ["step0","step1","step2","final"];

/* 📱 CHECK QR ACCESS */
function checkQR() {

  const urlParams = new URLSearchParams(window.location.search);
  const key = urlParams.get("key");

  if (key === "love2026") {
    document.getElementById("qrScreen").classList.remove("active");
    document.getElementById("curtain").classList.add("active");
  }
}

/* 🌸 FLOWER CURTAIN START */
document.getElementById("curtain").addEventListener("click", () => {

  document.getElementById("curtain").classList.add("hidden");
  document.getElementById("scene").classList.add("active");

  showStep(0);
});

/* 🌸 NEXT STEP */
document.body.addEventListener("click", () => {
  if (!document.getElementById("scene").classList.contains("active")) return;

  step++;
  if (step < steps.length) {
    showStep(step);
  }
});

/* 🌸 SHOW STEP */
function showStep(i) {
  document.querySelectorAll(".step").forEach(s => s.classList.remove("active"));
  document.getElementById(steps[i]).classList.add("active");
}

/* RUN ON LOAD */
checkQR();