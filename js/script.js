document.addEventListener("DOMContentLoaded",()=>{
    const roles=['Web developer','Software Engineer','Full Stack developer'];
    const roleElement=document.getElementById('role');
    let roleIndex=0;
    let letterIndex=0;
    let typingInterval;
    function typeRole(){
        roleElement.style.opacity=0;
        setTimeout(()=>{
            roleElement.textContent="";
            letterIndex=0;

            typingInterval=setInterval(()=>{
                if(letterIndex<roles[roleIndex].length){
                    roleElement.textContent+=roles[roleIndex].charAt(letterIndex);
                    letterIndex++;
                }
                else{
                clearInterval(typingInterval);
                setTimeout(()=>{
                    roleIndex=(roleIndex+1)%roles.length;
                    typeRole();
                },1000)
                }
            },150);
            roleElement.style.opacity=1;
        },500)
    }
    typeRole();



    function counter(id,start,end,duration)
    {
        let obj=document.getElementById(id),
        current=start,
        range=end-start,
        increment=end>start? 1:-1,
        step=Math.abs(Math.floor(duration/range)),
        timer=setInterval(()=>{
            current+=increment;
            obj.textContent=current;
            if(current==end){
            clearInterval(timer);
            }
        },step);
    }
    counter("count1",0,96,3500)
    counter("count2",0,8,3500)
    counter("count3",0,10,3500)
 

    //project filter


   

})

document.addEventListener("DOMContentLoaded",function(){
    const filterButtons=document.querySelectorAll('.project-list li');
    const projects=document.querySelectorAll(".project-box");

    filterButtons.forEach((button)=>{
        button.addEventListener('click',()=>{
            filterButtons.forEach((btn)=>btn.classList.remove("active"));
            button.classList.add("active");

            const filter=button.getAttribute("data-filter");

            projects.forEach((project)=>{
                if(filter=="all"||project.getAttribute("data-category")===filter){
                    project.style.display="block";
                }
                else{
                    project.style.display="none";
                }
            })
        })
    })
})

document.addEventListener("DOMContentLoaded",function(){
    const toggleButton=document.querySelector(".dark-light-btn");
    const htmlElement =document.documentElement;

    const currentMode=localStorage.getItem("mode");

    if(currentMode==='light'){
        htmlElement.classList.add("light-mode");
        toggleButton.innerHTML=`<i class='fa-regular fa-moon'></i>`;
    }
    toggleButton.addEventListener("click",()=>{
        htmlElement.classList.toggle("light-mode");

        const isLightMode=htmlElement.classList.contains("light-mode");
        toggleButton.innerHTML=isLightMode?`<i class='fa-regular fa-moon'></i>`:`<i class="fa-regular fa-sun"></i>`

        //save mode in localstorage
        localStorage.setItem("mode",isLightMode?"light":"dark");
    });

  

   
    

})
document.addEventListener("DOMContentLoaded", function () {
    const htmlElement = document.documentElement;
    const profileImg = document.querySelector(".user-profile-img img"); // Selects the profile image

    // Function to update the profile image based on the mode
    function updateImage() {
        if (profileImg) {
            profileImg.src = htmlElement.classList.contains("light-mode") 
                ? "images/photo2.jpg"  // Light mode (default)
                : "images/photo3.jpg";   // Dark mode
        }
    }

    // Apply correct image on page load based on the saved mode
    if (localStorage.getItem("mode") === "light") {
        htmlElement.classList.add("light-mode"); // Ensure light mode is applied
    }

    updateImage(); // Set correct image on page load

    // Listen for mode changes and update image accordingly
    const observer = new MutationObserver(updateImage);
    observer.observe(htmlElement, { attributes: true, attributeFilter: ["class"] });
});






document.addEventListener("DOMContentLoaded",function(){
    const sections = document.querySelectorAll("section");  // Select all sections
    const navLinks = document.querySelectorAll("nav ul li a");
    
    function setActiveLink() {
        let currentSection = "";
    
        sections.forEach((section) => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.offsetHeight;
    
            if (window.scrollY >= sectionTop - sectionHeight / 3) {
                currentSection = section.getAttribute("id");
            }
        });
    
        navLinks.forEach((link) => {
            link.classList.remove("active");
            if (link.getAttribute("href") === `#${currentSection}`) {
                link.classList.add("active");
            }
        });
    }
    
    // Run the function on scroll
    window.addEventListener("scroll", setActiveLink);
    
    // Run once on page load to highlight the correct link
    setActiveLink();
})
// document.addEventListener("DOMContentLoaded",function(){
//     document.addEventListener("DOMContentLoaded", function () {
//         let navLinks = document.querySelectorAll(".menu-profile nav ul li a");
    
//         navLinks.forEach(link => {
//             link.addEventListener("click", function () {
//                 // Remove active class from all links
//                 navLinks.forEach(nav => nav.classList.remove("active"));
                
//                 // Add active class to the clicked link
//                 this.classList.add("active");
//             });
//         });
//     });
    
// })



