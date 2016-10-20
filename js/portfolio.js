$(document).ready(function(){
    var scrollMagicController = new ScrollMagic.Controller();
    if ($( window ).width() <= 1024) {
        scrollMagicController.enabled(false);
    }
    
    
    $('.projectDesc').each(function(){
        
        var tween = TweenMax.from(this, 1, {
        autoAlpha:0
        });
    
        
        new ScrollMagic.Scene({
        triggerElement: this,
        duration:150
        })
        .addIndicators()
        .setTween(tween)
        .addTo(scrollMagicController);
        
    })
    
    $(".rpgmaker").on("click",function(){
        var max = ($(this).next().children().length)-1;
        var index = parseInt((Math.random() * (max + 1)), 10);
        var sub = this.src.indexOf("img");
        while(this.src.substring(sub) == $(this).next().children()[index].getAttribute('data-src')){
            index = parseInt((Math.random() * (max + 1)), 10);
        }
        $(this).fadeOut(500,function(){
            this.src = $(this).next().children()[index].getAttribute('data-src');
            $(this).fadeIn(500);
            
        })
    })
});