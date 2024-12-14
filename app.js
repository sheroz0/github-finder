


// const cardDiv = document.getElementById("cardSection");
// const input = document.getElementById("inputField");

// let search = () => {
    // const apiBaseUrl = `https://api.github.com/users/`;  ya alag file ki line hai
//   const API_KEY = https://newsapi.org/v2/everything?q=${input.value}&from=2024-11-07&sortBy=publishedAt&apiKey=d0ab0d9c70444ce0a82b32ff8ef54bbe;
//   fetch(API_KEY)
//     .then((res) => res.json())
//     .then((data) => {
//       data.articles.map((e, i) => {
//         console.log(e);
//         cardDiv.innerHTML += `<div class="card" style="width: 18rem;">
//             <img src=${e.urlToImage} class="card-img-top" alt="...">
//             <div class="card-body">
//             <h5 class="card-title">${e.title}</h5>
//             <p class="card-text">${e.description}/p>
//             <a href="#" class="btn btn-primary">Go somewhere</a>
//             </div>
//             </div>`;
//       });
//     })
//     .catch((err) => {
//       console.log(err);
//     });
// }; 








const apiBaseUrl = `https://api.github.com/users/`;

function GitHubUser() {
    let username = document.getElementById('username').value.trim();  // Trim spaces around the input

    if (!username) {
        alert("Please enter a GitHub username.");
        return;
    }
   
    console.log("Username entered:", username);


    const userInfoDiv = document.getElementById('user-info');
    userInfoDiv.innerHTML = '';

    const apiUrl = `${apiBaseUrl + username}`;
    console.log("Fetching data from:", apiUrl);

   
    fetch(apiUrl)
        .then(response => {
            if (!response.ok) {
                throw new Error('User not found');
            }
            return response.json();
        })
        .then(data => {
            displayUserInfo(data);
        })
        .catch(error => {
            userInfoDiv.innerHTML = `<p style="color: red;">${error.message}</p>`;
            console.error("Error fetching user data:", error);  // Log error to the console
        });
}

function displayUserInfo(user) {
    const userInfoDiv = document.getElementById('user-info');

    const userHtml = `
        <div style="text-align: center;">
            <img src="${user.avatar_url}" alt="${user.login} avatar" />
            <h2><a href="${user.html_url}" target="_blank">${user.login}</a></h2>
            <p><strong>Location:</strong> ${user.location || 'Not available'}</p>
            <p><strong>Public Repos:</strong> ${user.public_repos}</p>
            <p><strong>Followers:</strong> ${user.followers}</p>
            <p><strong>Following:</strong> ${user.following}</p>
            <p><strong>Bio:</strong> ${user.bio || 'No bio available'}</p>
        </div>
    `;
    
    userInfoDiv.innerHTML = userHtml;
}








