function myMove() {
    const elem = document.getElementById("animate");
    let pos = 0;
    const containerWidth = document.getElementById("container").offsetWidth;
    const elemWidth = elem.offsetWidth;
    const id = setInterval(frame, 1);

    function frame() {
        if (pos >= containerWidth - elemWidth) {
            clearInterval(id);
        } else {
            pos++;
            elem.style.left = pos + 'px';
        }
    }
}
