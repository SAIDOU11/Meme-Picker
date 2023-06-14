document.addEventListener("click", (e) => {
  document.getElementById(e.target.id).parentElement.classList.remove("unread");
  document.getElementById(e.target.id).parentElement.classList.add("read");
});
