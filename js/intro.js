$(document).ready(function(){
    var width = screen.width;
    var animationIntro=$("animationIntro");
    var mainHeader = $("#animationIntro h1");
    var mainUL = $("#animationIntro ul");
    var mainULFirstChild = $("#animationIntro ul li:first-child");
    var mainULSecondChild = $("#animationIntro ul li:nth-child(2)");
    var mainContent = $('.splitter');
    tl = new TimelineLite({delay:0.5});
    
    tl
        .from(mainHeader,2,{autoAlpha:0,x:-width*0.1})
        .to(mainHeader,1,{autoAlpha:0}, '-=0.15')
        .from(mainUL,1,{autoAlpha:0})
        .from(mainULFirstChild,2,{autoAlpha:0,x:-width*0.1}, '-=0.15')
        .to(mainULFirstChild,1,{autoAlpha:0}, '-=0.15')
        .from(mainULSecondChild,2,{autoAlpha:0,x:-width*0.1}, '-=0.15')
        .to(mainULSecondChild,1,{autoAlpha:0}, '-=0.15')
        .from(mainContent,1,{autoAlpha:0});
    
    animationIntro.css('display','none');
    
})