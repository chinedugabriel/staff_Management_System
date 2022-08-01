let loadData = async () => {
    let url = "https://api.github.com/users";
    let requestData = await fetch(url);
    if (requestData.status === 200){
        return requestData.json();
    } throw"File not found";
};
loadData().then(
    response=>{
        // console.log(response)
        // console.log(response.json())
        let profileData = "";
         response.map(user=>{
            return profileData +=`
            <div class="demo">
                <img src="${user.avatar_url}">
                <h2>${user.login}</h2>
                <p>Web Developer</p>
            </div>
            `;
        })
        document.getElementById("staff-info").innerHTML = profileData;
    }
).catch(
    error => console.log(error)
)
