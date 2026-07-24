function toggleMenu(){
    document.getElementById("menu").classList.toggle("open");
}


function showPage(page){

    let pages = document.querySelectorAll("main section");

    pages.forEach(function(p){
        p.classList.add("hidden");
    });

    document.getElementById(page).classList.remove("hidden");

    toggleMenu();
}





// PROJECTEN

let projects = JSON.parse(localStorage.getItem("projects")) || [];


function addProject(){

    let name = document.getElementById("projectName").value;
    let info = document.getElementById("projectInfo").value;


    if(name.trim()==""){
        alert("Geef een projectnaam");
        return;
    }


    projects.push({
        name:name,
        info:info
    });


    localStorage.setItem(
        "projects",
        JSON.stringify(projects)
    );


    showProjects();

}



function showProjects(){

    let list = document.getElementById("projectList");

    if(!list) return;

    list.innerHTML="";


    projects.forEach(function(project){

        list.innerHTML += `

        <div class="card">
        <h3>${project.name}</h3>
        <p>${project.info}</p>
        </div>

        `;

    });

}


showProjects();





// AI CHAT

let chats = JSON.parse(localStorage.getItem("chats")) || [];


function sendMessage(){

    let input = document.getElementById("chatInput");

    let text = input.value;


    if(text.trim()==""){
        return;
    }


    chats.push({

        user:text,

        ai:"Ik heb je vraag ontvangen. De echte AI-kern wordt later gekoppeld."

    });


    localStorage.setItem(
        "chats",
        JSON.stringify(chats)
    );


    showChat();

    input.value="";

}




function showChat(){

    let box = document.getElementById("chatBox");

    if(!box) return;


    box.innerHTML="";


    chats.forEach(function(chat){

        box.innerHTML += `

        <div class="card">

        <b>Jij:</b>
        <p>${chat.user}</p>

        <b>TechAI:</b>
        <p>${chat.ai}</p>

        </div>

        `;

    });

}


showChat();






// TOOLS UIT tools.json

async function searchTools(){

    let search = document
    .getElementById("toolSearch")
    .value
    .toLowerCase();


    let response = await fetch("tools.json");

    let tools = await response.json();


    let result = document.getElementById("toolResults");

    result.innerHTML="";


    tools.forEach(function(tool){


        if(
            tool.name.toLowerCase()
            .includes(search)
        ){


        result.innerHTML += `

        <div class="card">

        <h3>${tool.name}</h3>

        <p>${tool.category}</p>

        <p>${tool.info}</p>

        <a href="${tool.website}" target="_blank">
        Website openen
        </a>

        </div>

        `;


        }


    });


}
function googleLogin(){

const provider = new firebase.auth.GoogleAuthProvider();

auth.signInWithPopup(provider)
.then((result)=>{

alert("✅ Ingelogd als: " + result.user.email);

})
.catch((error)=>{

alert("❌ " + error.message);

});

}