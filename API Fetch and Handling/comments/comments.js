
const commentsContainer = document.getElementById("commentsContainer");

// Function to fetch and display comments
async function loadComments() {
    const url = `${BASE_URL}/comments`;

    try {
        const response = await fetch(url);
        const comments = await response.json();

        // Loop through comments and create cards
        comments.forEach(comment => {
            const card = document.createElement("div");
            card.classList.add("card");

            //jun card vanne variable ma "card" class garieyeko xa, tyo div ma API bata aako data haru display garne
            card.innerHTML = `
                <h3>${comment.name}</h3>
                <p><strong>Email:</strong> ${comment.email}</p> 
                <p>${comment.body}</p>
            `;
            // This places the created card inside the commentsContainer.
            commentsContainer.appendChild(card);
        });
    } catch (error) {
        console.error("Error fetching comments:", error);
        commentsContainer.innerHTML = "<p>Failed to load comments.</p>";
    }
}

loadComments();

            