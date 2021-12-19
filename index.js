document.addEventListener("DOMContentLoaded", () => {
  console.log("document loaded");
  const selectedForm = document.querySelector("#form"); // on selectionne le formulaire
  selectedForm.addEventListener("submit", async (e) => {
    e.preventDefault();
    let data = {
      firstname: document.querySelector("#firstname").value,
      lastname: document.querySelector("#lastname").value,
      mail: document.querySelector("#mail").value,
      subject: document.querySelector("#subject").value,
      message: document.querySelector("#message").value,
    };
    console.log(data);
  });
});
