const APIURL = 'https://api.github.com/users/';
const main = document.querySelector('.main');


async function getUser(username) {
    const response = await fetch(APIURL + username);
    const respData = await response.json()
    
    if(response.status !== 200) {
        main.classList.add('notmain')
        main.innerHTML = "Sorry, there is no Such User on GitHub.com" 
    } else {
        main.classList.remove('notmain')
        addTemplate(respData);
    }   
    
}



async function getUserRepo(username) {
    const response = await fetch(APIURL + username + '/repos');
    const respData = await response.json();

   addRepo(respData)
}



const addTemplate = (data) => {
    main.innerHTML = createUserCard(data)
}

const addRepo = data => {
    const repo = document.querySelector('.repo-container')

    data.forEach(item => {
       repo.innerHTML += createUserRepo(item) 
    })
    
}

const createUserRepo = (data) => {
    return `
    <a href="${data.html_url}" class="repo-item">
        ${data.name}
    </a>
    `
}

const createUserCard = (data) => {
    return `
    <div class="user-card">
    <div class="first-col">
        <div class="photo-cont">
            <img src="${data.avatar_url}" class="main-photo">
        </div>
    </div>
    <div class="second-col">
        <div class="text">
            <h3 class="name">
                ${data.name? data.name : data.login}
            </h3>

            <p class="position">
                Developer
            </p>
        </div>
        <div class="bio">
            <p class="bio-content">
                ${data.bio? data.bio : "No biografy yet"}
            </p>
        </div>
        <div class="icon-cont">
            <div class="icon-item">
                <p class="icon-text-content">${data.following}</p>
                <p class=" icons">Following</p> 
            </div>
            <div class="icon-item">
                <p class="icon-text-content">${data.followers}</p>
                <p class=" icons">Followers</p> 
            </div>
            <div class="icon-item">
            <p class="icon-text-content">${data.public_repos}</p>
            <p class=" icons">Repos</p>
            </div>
        </div>
        
        <p class="repo-title">Repos:</p>
        
        <div class="repo-container">

        </div>
    </div>
</div>
    `
}

const searchBtn = document.querySelector('.searchIcon');
const input = document.querySelector('.searchInput');



searchBtn.addEventListener('click', ()=> {
    getUser(input.value);
    getUserRepo(input.value);
    input.value = ""
})

input.addEventListener('keyup', (e)=> {
e.preventDefault();
    if(e.key === "Enter") {
        getUser(input.value);
        getUserRepo(input.value);
        input.value = ""
    }
})