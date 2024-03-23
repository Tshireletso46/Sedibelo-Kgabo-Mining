/**
 * This script fetches data from a JSON file named 'barGraph.json',
 * which contains information about months and the number of installations.
 * It then generates a bar graph using Chart.js library to visualize the data.
 */

// Fetching data from 'barGraph.json' using fetch API
fetch('barGraph.json')

// Handling the response asynchronously
    .then(response => response.json())
    .then(data => {

        // Extracting labels (months) from the data
        const labels = data.map(item => item.month);

         // Extracting values (number of installations) from the data
        const values = data.map(item => item.numInstalls);

        // Getting the canvas element to render the chart
        const ctx = document.getElementById('barGraph').getContext('2d');

         // Creating a new bar graph instance using Chart.js library
        new Chart(ctx, {
            type: 'bar',
            // Labels for each bar in the graph
            data: {
                labels: labels,
                // Dataset containing values for each bar
                datasets: [{
                    label: 'Number of Installs',
                    data: values,
                    backgroundColor: 'rgba(54, 162, 235, 0.5)',
                    borderColor: 'rgba(54, 162, 235, 1)',
                    borderWidth: 1
                }]
            },
            options: {
                scales: {
                    yAxes: [{
                        ticks: {
                            beginAtZero: true
                        }
                    }]
                }
            }
        });
    });

    
