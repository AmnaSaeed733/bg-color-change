
function getRandomColor() {
    const colors = ['#51e2f5', '#9df9ef', '#edf756', '#ffa8B6', '#8458B3', '#fff685', '#5cbdb9', '#f9c5bd', '#fbe3e8'];
    const randomIndex = Math.floor(Math.random() * colors.length);
    return colors[randomIndex];
}

document.getElementById('Button').addEventListener('click', function () {
    document.body.style.backgroundColor = getRandomColor();
});
