// Your code here.
var draggable = document.getElementById('draggable');

draggable.addEventListener('mousedown', function(e) {
    isDown = true;
    offset = [
        draggable.offsetLeft - e.clientX,
        draggable.offsetTop - e.clientY
    ];
}, true);

document.addEventListener('mouseup', function() {
    isDown = false;
}, true);

document.addEventListener('mousemove', function(event) {
    event.preventDefault();
    if (isDown) {
        mousePosition = {
            x : event.clientX,
            y : event.clientY
        };
        draggable.style.left = (mousePosition.x + offset[0]) + 'px';
        draggable.style.top  = (mousePosition.y + offset[1]) + 'px';
    }
}, true);