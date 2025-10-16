document.getElementById("rec-form").addEventListener("submit", function(e) {
  e.preventDefault();

  const text = document.getElementById("rec-text").value;
  const author = document.getElementById("rec-author").value;

  const newCard = document.createElement("div");
  newCard.className = "rec-card";
  newCard.innerHTML = `<p>"${text}"</p><p>— ${author}</p>`;

  document.getElementById("recommendation-list").appendChild(newCard);

  showConfirmation("Recommendation submitted successfully!");
  document.getElementById("rec-form").reset();
});

function showConfirmation(msg) {
  const modal = document.getElementById("confirm-modal");
  document.getElementById("confirm-msg").innerText = msg;
  modal.classList.remove("hidden");

  document.getElementById("confirm-ok").onclick = function() {
    modal.classList.add("hidden");
  };
}
