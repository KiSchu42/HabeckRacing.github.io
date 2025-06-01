document.querySelectorAll(".tab-button").forEach((button) => {
  button.addEventListener("click", () => {
    const targetId = button.dataset.target;

    document.querySelectorAll(".tab-button").forEach((b) => b.classList.remove("active"));
    button.classList.add("active");

    document.querySelectorAll(".tab-content").forEach((c) => c.classList.remove("active"));
    document.getElementById(targetId).classList.add("active");
  });
});
