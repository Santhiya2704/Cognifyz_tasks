document.addEventListener('DOMContentLoaded', () => {
    const generateBtn = document.getElementById('generate-btn');
    const profilesContainer = document.getElementById('profiles');

    // Function to fetch random user profiles
    async function fetchRandomUsers(count = 5) {
        try {
            const response = await fetch(`https://randomuser.me/api/?results=${count}`);
            const data = await response.json();
            displayProfiles(data.results);
        } catch (error) {
            console.error('Error fetching user profiles:', error);
            alert('Failed to load user profiles. Please try again later.');
        }
    }

    // Function to display user profiles
    function displayProfiles(users) {
        profilesContainer.innerHTML = ''; // Clear previous profiles
        users.forEach(user => {
            const profileCard = document.createElement('div');
            profileCard.classList.add('profile-card');
            profileCard.innerHTML = `
                <img src="${user.picture.large}" alt="${user.name.first}">
                <h2>${user.name.first} ${user.name.last}</h2>
                <p>${user.email}</p>
                <p>${user.location.city}, ${user.location.country}</p>
            `;
            profilesContainer.appendChild(profileCard);
        });
    }

    // Event listener for generate button
    generateBtn.addEventListener('click', () => {
        fetchRandomUsers();
    });

    // Fetch initial set of profiles on page load
    fetchRandomUsers();
});
