// consumindo a api
async function getUser(userName) {
    try {
        const response = await fetch(`https://api.github.com/users/${userName}`)
        const {name, login, avatar_url, followers, following, public_repos} = await response.json()

        const data = {name, login, avatar_url, followers, following, public_repos}

        createBox(data)
        createProfile(data)
        
    } catch (error) {
        console.error("erro" + error)
    }

}

//preenchendo os valore do profile
function createProfile(data) {
    const name = document.querySelector(".js-name")
    const login = document.querySelector(".js-nick")
    const img = document.querySelector(".js-img")

    name.innerHTML = data.name
    login.innerHTML = `@${data.login}`
    img.src = data.avatar_url
}

//preenchendo os valores do box
function createBox(params) {
    const boxProject = document.querySelector(".c-box--project .js-box-subtitle")
    const boxFollowing = document.querySelector(".c-box--star .js-box-subtitle")
    const boxFollow = document.querySelector(".c-box--follow .js-box-subtitle")


    boxProject.innerHTML = params.public_repos
    boxFollow.innerHTML = params.followers
    boxFollowing.innerHTML = params.following
}

//rodando a funcao
getUser("ghdpreto")
