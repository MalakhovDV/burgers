

function accordionTeam(){
    const workers = document.querySelectorAll(".team-acco__item");
    const teamAccord = document.querySelector(".team-acco");
 
    teamAccord.addEventListener("click" , function(event){
        event.preventDefault(); 
        const target = event.target;

        if(target.classList.contains("team-acco__trigger")){
            const worker = target.parentNode;
            const content = target.nextElementSibling;
         
                for (const iterator of workers) {
                    if(iterator !== worker){
                        iterator.classList.remove("team-acco__item--active");
                        iterator.lastElementChild.style.height= 0;
                    }
                }

                if(worker.classList.contains("team-acco__item--active")){
                    worker.classList.remove("team-acco__item--active");
                    content.style.height = 0;
                }else{
                    worker.classList.add("team-acco__item--active");
                    content.style.height = 100 + "%";
                }
        }
    });
}

accordionTeam();