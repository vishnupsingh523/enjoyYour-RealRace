function playAnimation(){
            document.querySelector("h1").style.animationPlayState = "running";
            $(".main").fadeOut(2000);
           var it =  window.setTimeout(changeColor,2000);
            
        }
        function changeColor(){
            document.body.style.backgroundColor = "rgb(240, 168, 140)";
            window.clearTimeout(it);
        }
