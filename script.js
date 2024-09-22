fetch('https://provinces.open-api.vn/api/?depth=1')
    .then(response => response.json())
    .then(data => {
        const cityDropdown = document.getElementById('city-dropdown');
        data.forEach(city => {
            const option = document.createElement('option');
            option.value = city.code;
            option.textContent = city.name;
            cityDropdown.appendChild(option);
        });
    })
    .catch(error => console.error('Error fetching cities:', error));

