window.onload = function () {
  random();

  document.querySelector("#random").addEventListener("click", () => {
    random();
  });

  document.querySelector("#copy").addEventListener("click", () => {
    copy();
  });
};

function random() {
  fetch("https://api.quotable.io/random")
    .then((response) => response.json())
    .then((data) => {
      document.getElementById("autor").innerText = `${data.author}`;
      document.getElementById("tag").innerText = `${data.tags}`;
      document.getElementById("text").innerText = `"${data.content}"`;
    })
    .catch((error) => {
      alert(error);
    });
}

function copy() {
  var copyText = document.getElementById("text");
  copyText.select();
  navigator.clipboard.writeText(copyText.value);
  alert("Copied the text: " + copyText.value);
}
