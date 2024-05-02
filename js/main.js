document.getElementById('tempConverterForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the form from submitting

    // Clear previous error messages
    document.getElementById('temperatureError').textContent = '';
    document.getElementById('unitError').textContent = '';

    // Get user inputs
    const temperatureInput = document.getElementById('temperatureInput');
    const unitSelect = document.getElementById('unitSelect');
    const temperature = parseFloat(temperatureInput.value);
    const unit = unitSelect.value;

    // Validate temperature input
    if (isNaN(temperature)) {
        document.getElementById('temperatureError').textContent = 'Please enter a valid number.';
        temperatureInput.focus();
        return;
    }

    // Perform conversion and determine converted unit
    let convertedTemperature;
    let convertedUnit;

    if (unit === 'fahrenheit') {
        convertedTemperature = (temperature - 32) * (5/9);
        convertedUnit = `C`;
    } else if (unit === 'celsius') {
        convertedTemperature = (temperature * 9/5) + 32;
        convertedUnit = `F`;
    }

    // Display result with correct unit
    document.getElementById('result').innerText = `Converted Temperature: ${convertedTemperature.toFixed(2)} ${convertedUnit.toUpperCase()}`;
});