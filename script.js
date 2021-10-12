const form = document.getElementById('form'),
  but_form = document.getElementById('send_form'),
  input = document.getElementById('input_email');

but_form.onclick = formSend;

async function formSend(e) {
  e.preventDefault();

  let req = {
    email: input.value,
  }

  let response = await fetch('http://jsonplaceholder.typicode.com/posts', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(req)
  });

  if (response.ok) {
    let result = await response.json();
    console.log(result);
  }
}
