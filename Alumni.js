const texts = [
    "Welcome to Our Alumni Network",
    "Reconnect with Old Friends",
    "Join Alumni Events & Reunions",
    "Support Future Generations"
];

let index = 0;
const element = document.getElementById("rotating-text");

function rotateText() {
    element.textContent = texts[index];
    index = (index + 1) % texts.length;
}

rotateText(); // Initial text
setInterval(rotateText, 4000);


function openImage(src) {
    document.getElementById('popup-img').src = src;
    document.getElementById('popup').style.display = 'flex';
}

function closeImage() {
    document.getElementById('popup').style.display = 'none';
}

const semesters = ["year1", "year2", "year3", "year4"];

document.querySelectorAll(".student").forEach((studentDiv, i) => {
    const name = studentDiv.dataset.name;
    const cgpa = studentDiv.dataset.cgpa.split(",").map(Number);
    const canvas = studentDiv.querySelector("canvas");

    new Chart(canvas, {
        type: 'line',
        data: {
            labels: semesters,
            datasets: [{
                label: "CGPA",
                data: cgpa,
                borderColor: "#004080",
                backgroundColor: "rgba(0,64,128,0.2)",
                borderWidth: 2,
                tension: 0.3,
                fill: true,
                pointRadius: 5,
                pointBackgroundColor: "#004080"
            }]
        },
        options: {
            responsive: true,
            plugins: {
                title: {
                    display: true,
                    text: `${name}'s CGPA Progress`
                },
                legend: {
                    display: false
                }
            },
            scales: {
                y: {
                    beginAtZero: true,
                    max: 10
                }
            }
        }
    });
});
