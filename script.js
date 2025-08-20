const inputtext=document.getElementById("inputfeild");
const search=document.getElementById("search")

search.addEventListener('click',()=>{
    const newvalue=inputtext.value;
    console.log(newvalue)
    fetch(`http://api.github.com/users/${newvalue}`)
        .then(res => res.json())
        .then(data => {
            console.log(data)
             if(!newvalue) return "User does not exit"
            document.getElementById("detail").innerHTML=
            `
            <img src=${data.avatar_url} alt=${data.name}>
            <h2>User-Name: ${data.name}</h2>
            <p>Bio:${data.bio}</p>
            <p>Repo-count:${data.public_repos}</p>
           <a href=${data.url}>Github-Link</a>
            `



        })
})