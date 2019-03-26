class User{
    constructor(user){
        this.f_name = user.f_name; 
        this.l_name = user.l_name; 
        this.image = user.image; 
        this.tagline = user.tagline;
        this.location = user.location; 
        this.email = user.email
        this.fullName = this.f_name + " " + this.l_name
    }

     create(){
        const sideBar = document.querySelector("#sidebar")
        sideBar.innerHTML = `
        <div class="card" style="width: 255px"  id="profile">
        <img src="${this.image}" class="card-img-top">
        <div class="card-body">
            <h4 class="card-title text-center" id="name">${this.fullName}</h4>
            <p class="card-text" id="tagline">${this.tagline}.</p>
            <p class="card-text" id="location">${this.location}</p>
            
            <div class="col text-center">
                <a href="#" id="user-posts" class="btn btn-outline-dark"">View Posts</a>
            </div>
        </div>
    </div>`
    sideBar.querySelector("#user-posts").addEventListener("click", ()=> this.showPosts())
     }

     showPosts(){
          //TimeLine.addPosts()  
     }
}

let kian = {
    f_name: "Kian", 
    l_name: "Edalat", 
    image: "nothing", 
    tagline: "Many wives, happy life", 
    location: "London", 
    email: "kian.edalat@flatironschool.co.uk",}

    const u1 = new User(kian)
    u1.create()