const button = document.querySelector("button")!; // ! means you know it will yield a non null value

if (button) {
  button?.addEventListener("click", () => {
    console.log("Clicked!");
  });
}
