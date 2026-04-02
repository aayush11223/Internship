// showContent vitra ko button
const albumsContainer = document.getElementById("albumsContainer");

// Function to fetch and display albums
async function loadAlbums() {
    const url = `${BASE_URL}/albums`;

    try {
        const response = await fetch(url);
        const albums = await response.json();

        // Loop through albums and create cards
        albums.forEach(album => {

            //car variable ma div create garne, bu UI ma dekhako hudaina
            const card = document.createElement("div");

            //card ma class "card" add garne
            card.classList.add("card");

            //jun card vanne variable ma "card" class garieyeko xa, tyo div ma API bata aako data haru display garne
            card.innerHTML = `
                <h3>${album.title}</h3>
                <p><strong>Album ID:</strong> ${album.id}</p>
            `;

            //child (card) lai parent (albumsContainer) ma add garne
            albumsContainer.appendChild(card);
        });
    } catch (error) {
        console.error("Error fetching albums:", error);
        albumsContainer.innerHTML = "<p>Failed to load albums.</p>";
    }
}

loadAlbums();