document.getElementById('lettersOnlyInput').addEventListener('input', function(event) {
    const input = event.target;
    const value = input.value;

    
    const lettersOnly = value.replace(/[^a-zA-Z]/g, '');

    
    input.value = lettersOnly;
});
