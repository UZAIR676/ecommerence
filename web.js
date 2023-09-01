
gsap.to("#contain2", {
    backgroundColor: "#000",
    scrollTrigger: {
        trigger: "#contain2",
        scroll:"body",
        scrub: 1,
        // markers: true,
        start:"top 20%",
        end:"top 20%"
    }
});
gsap.from("#nave ",{
    x:900,
    duration:1,
    delay:1,
    stagger:0.5,
});

gsap.from("img ",{
    scale:0,
    duration:1,
    delay:1,
    stagger:0.5,
});
gsap.from("#left h1 ,#left p",{
    y:-1000,
    delay:1,
    duration:1,
    stragger:0.5,


});
gsap.from("#btn",{
    scale:0,
    dealy:1,
    duration:1,
    stragger:0.5,

});
gsap.from("#img2",{
    scale:0,
    delay:2,
    duration:1,
    stagger:0.5,
    scrollTrigger:{
        
        trigger:"#contain2 .img2",
        delay:1,
        scroller:"body"
     }

});
gsap.to("#contain3", {
    backgroundColor: "#000",
    scrollTrigger: {
        trigger: "#contain3",
        scroll:"body",
        scrub: 1,
        // markers: true,
        start:"top 20%",
        end:"top 20%"
    }
});
gsap.to("#contain4", {
    backgroundColor: "#000",
    scrollTrigger: {
        trigger: "#contain4",
        scroll:"body",
        scrub: 1,
        // markers: true,
        start:"top 20%",
        end:"top 20%"
    }
});
gsap.to("#conatiner5", {
    backgroundColor: "#000",
    scrollTrigger: {
        trigger: "#conatiner5",
        scroll:"body",
        scrub: 1,
        // markers: true,
        start:"top 20%",
        end:"top 20%"
    }
});

