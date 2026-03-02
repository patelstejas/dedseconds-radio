const audio = document.getElementById("radio");

const button = document.getElementById("playBtn");

button.addEventListener("click", () => {
    if (audio.paused) {
        audio.play();
        button.textContent = "STOP THE NOISE";
    } else {
        audio.pause();
        button.textContent = "ENTER THE PIT";
    }
});

async function fetchMetadata() {
    try {
        const response = await fetch("http://localhost:8000/status-json.xsl");
        const data = await response.json();

        const source = data.icestats.source;

        document.getElementById("song").textContent = source.title || "Unknown Track";
    } catch (error) {
        document.getElementById("song").textContent = "Stream Offline";
    }
}

setInterval(fetchMetadata, 5000);
fetchMetadata();