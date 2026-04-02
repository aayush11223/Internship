
const postsContainer = document.getElementById("postsContainer");

// function to fetch and display posts
async function loadPosts() {
    const url = `${BASE_URL}/posts`;

    try {
        const response = await fetch(url);
        const posts = await response.json();

        // create UI for each post
        posts.forEach(post => {
            const card = document.createElement("div");
            card.classList.add("card");

            //jun card vanne variable ma "card" class garieyeko xa, tyo div ma API bata aako data haru display garne
            card.innerHTML = `
                <h3>${post.title}</h3>
                <p>${post.body}</p>
            `;
            // This places the created card inside the postsContainer.
            postsContainer.appendChild(card);
        });
    } catch (error) {
        console.error("Error fetching posts:", error);
        postsContainer.innerHTML = "<p>Failed to load posts.</p>";
    }
}

loadPosts();

