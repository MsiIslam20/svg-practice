
var tween = new TimelineLite();

tween.from(".portfolio-home h1", 2.0, {letterSpacing:0,     transform: 'translateX(100%)'});	
// init controller
var controller = new ScrollMagic.Controller();

// create a scene
new ScrollMagic.Scene({
    duration: 6000, 
    offset: 50 
})
    .setPin('.portfolio-home') 
    .addTo(controller)
    .setTween(tween)