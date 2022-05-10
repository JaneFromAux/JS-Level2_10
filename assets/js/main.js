let text = document.getElementById('text');




function small() {
    console.log('small');
    text.classList.remove('middle', 'big');
    text.classList.add('small');

}
function middle() {
    console.log('middle');
    text.classList.remove('small', 'big');
    text.classList.add('middle');
}
function big() {
    console.log('big');
    text.classList.remove('small', 'middle');
    text.classList.add('big');
}