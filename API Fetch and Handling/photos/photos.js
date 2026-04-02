// showContent vitra ko button
const photosContainer = document.getElementById("photosContainer");

// Function to fetch and display photos
async function loadPhotos() {
    const url = `${BASE_URL}/photos`;

    try {
        const response = await fetch(url);
        const photos = await response.json();

        // Loop through photos and create cards
        photos.forEach(photo => {

            //card variable ma div create garne but not shown in UI yet
            const card = document.createElement("div");

            card.classList.add("card");

            //jun card vanne variable ma "card" class garieyeko xa, tyo div ma API bata aako data haru display garne
            card.innerHTML = `
                <img src="demo.jpg" alt="${photo.title}" >
                <h3>${photo.title}</h3>
            `;

            //child(card) lai parent(photosContainer) ma add garne
            photosContainer.appendChild(card);
        });
    } catch (error) {
        console.error("Error fetching photos:", error);
        photosContainer.innerHTML = "<p>Failed to load photos.</p>";
    }
}

loadPhotos();
