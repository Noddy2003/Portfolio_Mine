var crsr = document.querySelector("#cursor")
 var blur = document.querySelector("#cursor-blur")


document.addEventListener("mousemove", function(dets){
    crsr.style.left=dets.pageX+ 30+"px"
    crsr.style.top=dets.pageY+"px"
     blur.style.left=dets.pageX - 200 +"px"
     blur.style.top=dets.pageY - 200 +"px"
}) 

var h4all = document.querySelectorAll("#nav h4")
h4all.forEach(function(elem){
  elem.addEventListener("mouseenter",function(){
    crsr.style.scale=3
    crsr.style.border="0.4px solid #fff"
    crsr.style.backgroundColor= "transparent"
  })

  elem.addEventListener("mouseleave",function(){
    crsr.style.scale=1
    crsr.style.border="0px solid #95c11e" 
    crsr.style.backgroundColor= "#95c11e"
  })


})


gsap.to("#nav",{
    backgroundColor: "#000",
    height: "110px",
    duration: 1,
    scrollTrigger: {
        trigger:"#nav",
        scroller:"body",
        //markers: true,
        start: "top -10%" ,
        end: "top -11%",
        scrub: 1
    
   }
    

})

gsap.to("#main",{
    backgroundColor: "#000",
    scrollTrigger:{
        trigger: "#main",
        scroller: "body",
        //markers: true,
        start: "top -75%",
        end: "top -10%",
        scrub: 7,
    }



})


gsap.from("#about-us img,#about-me-in",{
    y: 50,                                     //1
    opacity: 0,                                  
    duration: 2,    
   
    scrollTrigger:{
        trigger: "#about-us",
        scroller: "body",
       // markers: true,
        start: "top 60%",
        end: "top 55%",
        scrub: 3,

    }
})

gsap.from(".card",{        //2
    scale: 0.8,
    opacity: 0,
    duration: 1,
   
    scrollTrigger:{
        trigger: ".card",
        scroller: "body",
        //markers: true,
        start: "top 60%",
        end: "top 55%",
        scrub: 3,

    }
})


gsap.from("#acoloun",{        //2
    y: -70,
    x: -70,
   
    scrollTrigger:{
        trigger: "#acoloun",
        scroller: "body",
        //markers: true,
        start: "top 60%",
        end: "top 55%",
        scrub: 4,

    }
})

gsap.from("#bcoloun",{        //2
    y: -70,
    x: -70,
   
    scrollTrigger:{
        trigger: "#bcoloun",
        scroller: "body",
        //markers: true,
        start: "top 60%",
        end: "top 55%",
        scrub: 4,

    }
})

gsap.from("#page4 h1", {
 
    y: 240,
    
    scrollTrigger:{
        trigger: "#page4 h1",
        scroller: "body",
        //markers: true,//
        start: "top 70%",
        end: "top 65%",
        scrub: 2,

    }

})