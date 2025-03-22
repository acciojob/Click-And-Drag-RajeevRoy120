// Your code here.
document.addEventListener("DOMContentLoaded", () => {
    const container = document.querySelector(".container");
    const cubes = document.querySelectorAll(".cube");

    let selectedCube = null;
    let offsetX = 0, offsetY = 0;

    // Set initial positions for cubes
    cubes.forEach((cube, index) => {
        cube.style.left = `${(index % 2) * 120 + 20}px`;
        cube.style.top = `${Math.floor(index / 2) * 120 + 20}px`;

        // Add event listeners for dragging
        cube.addEventListener("mousedown", (event) => {
            selectedCube = event.target;
            offsetX = event.clientX - selectedCube.offsetLeft;
            offsetY = event.clientY - selectedCube.offsetTop;
            selectedCube.style.zIndex = 1000;
            document.addEventListener("mousemove", moveCube);
            document.addEventListener("mouseup", dropCube);
        });
    });

    // Function to move the cube with mouse
    function moveCube(event) {
        if (!selectedCube) return;

        let newX = event.clientX - offsetX;
        let newY = event.clientY - offsetY;

        // Keep within container bounds
        const containerRect = container.getBoundingClientRect();
        const cubeRect = selectedCube.getBoundingClientRect();

        if (newX < 0) newX = 0;
        if (newY < 0) newY = 0;
        if (newX + cubeRect.width > containerRect.width) 
            newX = containerRect.width - cubeRect.width;
        if (newY + cubeRect.height > containerRect.height) 
            newY = containerRect.height - cubeRect.height;

        selectedCube.style.left = `${newX}px`;
        selectedCube.style.top = `${newY}px`;
    }

    // Function to drop the cube
    function dropCube() {
        if (selectedCube) {
            selectedCube.style.zIndex = 1;
            document.removeEventListener("mousemove", moveCube);
            document.removeEventListener("mouseup", dropCube);
            selectedCube = null;
        }
    }
});
