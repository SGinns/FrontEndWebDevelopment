function setTextContent() {
  document.getElementById('myTrigger').textContent = 'Elephants'
  console.log(document.getElementById('myTrigger').textContent)
}

myTrigger.addEventListener('click', setTextContent);
