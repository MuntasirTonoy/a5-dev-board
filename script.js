let completeBtns = document.querySelectorAll(".complete-btn");
function disableBtn(button) {
  (button.disabled = true), button.classList.add("bg-gray-300");
}
//  button click events
for (const completeBtn of completeBtns) {
  completeBtn.addEventListener("click", function () {
    disableBtn(this);
    alert("Board update Succesfully");
    const clickTime = new Date().toLocaleTimeString();
    const history = document.getElementById("history-container");
    const newhistory = document.createElement("p");
    var taskBox = this.closest(".task-box");
    var taskTitle = taskBox.querySelector(".title").innerText;
    newhistory.innerText = ` You have Complete The Task ${taskTitle} at ${clickTime} `;
    newhistory.classList.add(
      "bg-slate-200",
      "p-3",
      "my-3",
      "rounded-xl",
      "text-gray-600"
    );
    history.appendChild(newhistory);
    let taskAssigned = document.getElementById("taskAssigned").innerText;
    taskAssigned = parseInt(taskAssigned) - 1;
    document.getElementById("taskAssigned").innerText = "0" + taskAssigned;
    if (taskAssigned === 0) {
      alert("contrats");
    }
    let completeCount = document.getElementById("complete-count").innerText;
    completeCount = parseInt(completeCount) + 1;
    document.getElementById("complete-count").innerText = completeCount;
  });

  //   clear history event
}
document
  .getElementById("clearHistoryBtn")
  .addEventListener("click", function () {
    document.getElementById("history-container").innerHTML = "";
  });
// theme change logics
let colors = [
  "bg-red-200",
  "bg-green-200",
  "bg-blue-200",
  "bg-yellow-200",
  "bg-gray-200",
];
let index = 0;

document.getElementById("theme-btn").addEventListener("click", function () {
  let mainBody = document.getElementById("main-body");
  mainBody.classList.remove("bg-slate-200");
  // Remove the previous color class
  for (let color of colors) {
    mainBody.classList.remove(color);
  }

  // Add the next color
  mainBody.classList.add(colors[index]);

  // Update index (loop back to start when reaching the end)
  index = (index + 1) % colors.length;
});
