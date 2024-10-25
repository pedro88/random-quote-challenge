document.querySelector('#check').addEventListener("click", () => {
    alert("Coucou BeCode")
    //Your code here     
    alert("Hello!");
  })

function random(){
fetch('https://api.quotable.io/random')
  .then(response => response.json())
  .then(data => {
    alert(`${data.content} —${data.author}`)
  })
  .catch(error => {
    alert(error)
  })
}

