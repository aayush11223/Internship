// function to debounce another function.

{/* <input type="text" oninput="debounce()"> */}

{/* <script> */}
let timer

function debounce() {
  clearTimeout(timer)
  timer = setTimeout(() => {
    console.log('Data Fetched');
  }, 1000)
}
{/* </script> */}