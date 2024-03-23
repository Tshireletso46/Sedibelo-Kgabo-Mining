/**
 * This script fetches data from a JSON file named 'pieChart.json', 
 * which contains information about years and the number of installations.
 * It then generates a pie chart using Chart.js library to visualize the data.
 */

// Fetching data from 'pieChart.json' using fetch API
fetch('pieChart.json')
    .then(response => response.json())
    .then(data => {
        // Extracting labels (years) from the data
        const labels = data.map(item => item.year);

        // Extracting values (number of installations) from the data
        const values = data.map(item => item.numInstalls);

         // Getting the canvas element to render the chart
        const ctx = document.getElementById('pieChart').getContext('2d');

        // Creating a new pie chart instance using Chart.js library
        new Chart(ctx, {
            type: 'pie',
            // Providing data for the chart
            data: {
                // Labels for each segment of the pie chart
                labels: labels,
                 // Dataset containing values for each segment
                datasets: [{
                    data: values,
                    backgroundColor: [
                        'rgb(255, 99, 132)',
                        'rgb(54, 162, 235)',
                        'rgb(255, 205, 86)',
                        'rgb(75, 192, 192)',
                        'rgb(153, 102, 255)'
                    ]
                }]
            },
            options: {
                responsive: true
            }
        });
    });