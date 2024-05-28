document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('MyForm');

    form.addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent form submission

        const radiusInput = document.getElementById('radius');
        const volumeInput = document.getElementById('volume');

        const radius = parseFloat(radiusInput.value);
        if (isNaN(radius) || radius <= 0) {
            alert('Please enter a valid positive number for the radius.');
            return;
        }

        const volume = (4 / 3) * Math.PI * Math.pow(radius, 3);
        volumeInput.value = volume.toFixed(2);
    });
});