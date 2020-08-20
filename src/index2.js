import "./style2.scss";


let btn = document.getElementById('go');
btn.addEventListener('click', go);

function go() {
  window.location.assign('./index.html')
}