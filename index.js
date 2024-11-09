let images = document.getElementsByClassName("location_images");
let buttons = document.getElementsByClassName("locations");

function showImages(n) {
    for(let i=0;i<images.length;i++) {
        images[i].style.display = "none";
    }
    for(let i=0;i<buttons.length;i++) {
        buttons[i].classList.remove("active");
    }


    if (n==0) {
        document.getElementById("italy").style.display = "flex";
    } else if(n==1) {
        document.getElementById("australia").style.display = "flex";
    } else if(n==2) {
        document.getElementById("pakistan").style.display = "flex";
    }else {
        document.getElementById("brazil").style.display = "flex";
    }

    buttons[n].classList.add("active");
    
}

document.getElementById("defaultOpen").click();