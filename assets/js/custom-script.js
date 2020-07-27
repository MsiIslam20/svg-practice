console.clear();

// Forked from Chrysto's Pen(https://codepen.io/bassta/pen/kDvmC/).
// Plus some changes supported by Blake Bowen in the GreenSock forum
// https://greensock.com/forums/topic/13270-animate-content-in-fullscreen-slides and https://greensock.com/forums/topic/17251-using-scope

//  =============  xxxxx  ==========================	

  TweenMax.set(".centered", {autoAlpha: 1, xPercent:-50, yPercent:-50, force3D:true});	

  //First the variables our app is going to use need to be declared

  //References to DOM elements
  var $window = $(window);
  var $main = $(".main");
  var $document = $(document);
  //Only links that starts with #
  var $navButtons = $("nav a").filter("[href^=#]");
  var $navGoPrev = $(".go-prev");
  var $navGoNext = $(".go-next");
  var $slidesContainer = $(".slides-container");
  var $allSlides = $(".slide");
  var $currentSlide = $allSlides.first();
  var slideControl = $("nav a")


  //Animating flag - is our app animating
  var isAnimating = false;

  //The height of the window
  var pageHeight = $window.innerHeight();

  //Key codes for up and down arrows on keyboard. We'll be using this to navigate change slides using the keyboard
  var keyCodes = {
    UP  : 38,
    DOWN: 40
  };

  console.log(isAnimating);

  var currentIndex = 0;

  //Animating flag - is our app animating
  var isAnimating = false;
  function animatingEnd()
    {
      isAnimating = false;
    }




    var tlExtra = new TimelineLite()
    tlExtra.from("#slide-1  .image-1 ", 2, {scale: 0.5, opacity:0, ease: Power1.easeOut,onComplete:animatingEndnew})
    tlExtra.from(".logo", 1.2, {x:-50, opacity:0, ease: Power1.easeOut,},"-=1.2")
    tlExtra.from(".toggle", 1.2, {x:-30, opacity:0, ease: Power1.easeOut,},"-=1.2")
    tlExtra.from(".estimate", 1.2, {x:-30, opacity:0, ease: Power1.easeOut,},"-=1.2")
    tlExtra.from(".breadcumb", 1.2, {y:-30, opacity:0, ease: Power1.easeOut,},"-=1.2")
    tlExtra.from(".social-media", 1.2, {y:-30, opacity:0, ease: Power1.easeOut,});
    tlExtra.from("#slide-1 .header-slider-details h2", 1.2, {x:-320, opacity:0, ease: Power1.easeOut,}, "-=1.2")
    tlExtra.from("#slide-1 .header-slider-details h6", 1.2, {x:-320, opacity:0, ease: Power1.easeOut,}, "-=1.0")
    tlExtra.from("#slide-1 .header-full-page", 1.2, {y:-50, opacity:0, ease: Power1.easeOut}, "-=1.0")

  // var timelineExtra = new TimelineLite()

  // TweenMax.from(".logo", 1.2, {x:-50, opacity:0, ease: Power1.easeOut,})
  // TweenMax.from(".toggle", 1.2, {x:-30, opacity:0, ease: Power1.easeOut,})
  // TweenMax.from(".estimate", 1.2, {x:-30, opacity:0, ease: Power1.easeOut,})
  // TweenMax.from(".breadcumb", 1.2, {y:-30, opacity:0, ease: Power1.easeOut,})
  // TweenMax.from(".social-media", 1.2, {y:-30, opacity:0, ease: Power1.easeOut,});
  // TweenMax.from("#slide-1  .image-1 ", 2, {scale: 0, opacity:0, ease: Power1.easeOut,onComplete:animatingEndnew})
  // TweenMax.from("#slide-1 .header-slider-details h2", 1.2, {x:-320, opacity:0, ease: Power1.easeOut,}, "-=1.2")
  // TweenMax.from("#slide-1 .header-slider-details h6", 1.2, {x:-320, opacity:0, ease: Power1.easeOut,}, "-=1.0")
  // TweenMax.from("#slide-1 .header-full-page", 1.2, {y:-50, opacity:0, ease: Power1.easeOut}, "-=1.0")


  var timeline1 = new TimelineLite({onComplete:animatingEnd})
    .reverse();
    function animatingEndnew(){
      tlExtra.play();
    }
  
    var arr1 = [0,100,100,100,100,100,0, 100]; 
    var arr2 = [0,0,100,0,100,100,0, 100]; 





    // TweenLite.to(arr1, 3, { endArray: arr2, onUpdate: clipPath });

  var timeline2 = new TimelineMax({onComplete:animatingEnd})
    // .from(".slide .image-2 ", 2, {scale: 0, opacity:0, ease: Power1.easeOut,})
    // .from("#slide-2", 2, {Clippath:"polygon(0% 100%, 100% 100%, 100% 100%, 0% 100%)",  ease: Power1.easeIn,})
    .to("#slide-2", 0.0,  {display:"block", zIndex:2})
    .to(arr1, .9, { endArray: arr2, onUpdate: clipPath, ease: Power4.easeInOut, })
    .from("#slide-2  .image-2 ", 1.5, {scale: 0.5, opacity:0, ease: Power1.easeOut,},"-=.2")
    .from("#slide-2 .header-slider-details h2", 1.2, {x:-120, opacity:0, ease: Power1.easeOut,}, "-=1.2")
    .from("#slide-2 .header-slider-details h6", 1.2, {x:-120, opacity:0, ease: Power1.easeOut,}, "-=1.0")
    .from("#slide-2 .header-full-page", 1.2, {y:-50, opacity:0, ease: Power1.easeOut,}, "-=1.0")
    // .set(".slideTwo",
    // {           
    //   clipPath:'polygon('+arr1[0]+'%'+arr1[1]+'%,'+arr1[2]+'%'+arr1[3]+'%,'+arr1[4]+'%'+arr1[5]+'%,' +arr1[6]+'%'+arr1[7]+'%)'})
    //   .to("#slide-2", 4, {                                  ease: Power1.easeOut,        
    //     clipPath:'polygon('+arr2[0]+'%'+arr2[1]+'%,'+arr2[2]+'%'+arr2[3]+'%,'+arr2[4]+'%'+arr2[5]+'%,' +arr2[6]+'%'+arr2[7]+'%)', })
    .reverse();


    function clipPath() {    
      TweenMax.set("#slide-2", { webkitClipPath: 'polygon('+
        arr1[0]+'%'+arr1[1]+'%,'+
        arr1[2]+'%'+arr1[3]+'%,'+
        arr1[4]+'%'+arr1[5]+'%,'+
        arr1[6]+'%'+arr1[7]+'%)'
      });    
    }
    
  var timeline3 = new TimelineLite({onComplete:animatingEnd})

  .to("#slide-3", 0.0,  {display:"block",zIndex:3})
  .to(arr1, .9, { endArray: arr2, onUpdate: clipPathwt, ease: Power4.easeInOut, })
  .from("#slide-3  .image-3 ", 1.5, {scale: 0.5, opacity:0, ease: Power1.easeOut,},"-=.2")
  .from("#slide-3 .header-slider-details h2", 1.2, {x:-120, opacity:0, ease: Power1.easeOut,}, "-=1.2")
  .from("#slide-3 .header-slider-details h6", 1.2, {x:-120, opacity:0, ease: Power1.easeOut,}, "-=1.0")
  .from("#slide-3 .header-full-page", 1.2, {y:-50, opacity:0, ease: Power1.easeOut,}, "-=1.0")
  .reverse();

  function clipPathwt() {    
    TweenMax.set("#slide-3", { webkitClipPath: 'polygon('+
      arr1[0]+'%'+arr1[1]+'%,'+
      arr1[2]+'%'+arr1[3]+'%,'+
      arr1[4]+'%'+arr1[5]+'%,'+
      arr1[6]+'%'+arr1[7]+'%)'
    });    
  }
  
  var timeline4 = new TimelineLite({onComplete:animatingEnd})
  .to("#slide-4", 0.0,  {display:"block",zIndex:3})
  .to(arr1, .9, { endArray: arr2, onUpdate: clipPathww, ease: Power4.easeInOut, })
  .from("#slide-4  .image-4 ", 1.5, {scale: 0.5, opacity:0, ease: Power1.easeOut,},"-=.2")
  .from("#slide-4 .header-slider-details h2", 1.2, {x:-120, opacity:0, ease: Power1.easeOut,}, "-=1.2")
  .from("#slide-4 .header-slider-details h6", 1.2, {x:-120, opacity:0, ease: Power1.easeOut,}, "-=1.0")
  .from("#slide-4 .header-full-page", 1.2, {y:-50, opacity:0, ease: Power1.easeOut,}, "-=1.0")
  .reverse();

  function clipPathww() {    
    TweenMax.set("#slide-4", { webkitClipPath: 'polygon('+
      arr1[0]+'%'+arr1[1]+'%,'+
      arr1[2]+'%'+arr1[3]+'%,'+
      arr1[4]+'%'+arr1[5]+'%,'+
      arr1[6]+'%'+arr1[7]+'%)'
    });    
  }

  var timelines = [timeline1, timeline2, timeline3, timeline4];
  
  //Going to the first slide
  goToSlide($currentSlide);
  //TweenLite.set($currentSlide, {className: "+=active"});

  /*
	*   Adding event listeners
	* */

  $window.on("resize", onResize).resize();
  $window.on("mousewheel DOMMouseScroll", onMouseWheel);
  $document.on("keydown", onKeyDown);
  $navButtons.on("click", onNavButtonClick);
  $navGoPrev.on("click", goToPrevSlide);
  $navGoNext.on("click", goToNextSlide);

  /*
	*   Internal functions
	* */


  /*
	*   When a button is clicked - first get the button href, and then slide to the container, if there's such a container
	* */
  function onNavButtonClick(event)
  {     
    //The clicked button
    var $button = $(this);

    //The slide the button points to
    var $slide = $($button.attr("href"));

    //If the slide exists, we go to it
    if(!isAnimating && $slide.length)
    {
      //setting animating flag to true
      isAnimating = true;
      
      var action = $currentSlide.find('.action');
      TweenMax.to(action,1,{scale:0.2, onComplete:goToSlide, onCompleteParams: [$slide]})         
      
      //goToSlide($slide);
      event.preventDefault();
    }
  }

  /*
	*   Getting the pressed key. Only if it's up or down arrow, we go to prev or next slide and prevent default behaviour
	*   This way, if there's text input, the user is still able to fill it
	* */
  function onKeyDown(event)
  {

    var PRESSED_KEY = event.keyCode;

    if(PRESSED_KEY == keyCodes.UP)
    {
      goToPrevSlide();
      event.preventDefault();
    }
    else if(PRESSED_KEY == keyCodes.DOWN)
    {
           
      goToNextSlide();
      event.preventDefault();
    }

  }

  /*
	*   When user scrolls with the mouse, we have to change slides
	* */
  function onMouseWheel(event)
  {
    //Normalize event wheel delta
    var delta = event.originalEvent.wheelDelta / 30 || -event.originalEvent.detail;

    //If the user scrolled up, it goes to previous slide, otherwise - to next slide
    if(delta < -1)
    {
      goToNextSlide();
    }
    else if(delta > 1)
    {
      goToPrevSlide();
    }

    event.preventDefault();


  }

  /*
	*   If there's a previous slide, slide to it
	* */
  function goToPrevSlide()
  {
    if(!isAnimating && $currentSlide.prev().length)
    {
      //setting animating flag to true
      isAnimating = true;
      
      var action = $currentSlide.find('.header-image');
      var actionone = $currentSlide.find('.header-slider-details');
      var actiononet = $currentSlide;
      var actiontwo = $currentSlide.find('.header-full-page');
      TweenMax.to(action,1,{y:60, opacity:0})      
      TweenMax.to(actiontwo,1,{y:60, opacity:0,})
      TweenMax.to(actionone,1,{x:-50, opacity:0})    
      TweenMax.to(actiononet,1,{zIndex:0,onComplete:goToSlide, onCompleteParams: [$currentSlide.prev()]})    
      //goToSlide($currentSlide.prev());
    }
  }

  /*
	*   If there's a next slide, slide to it
	* */
  function goToNextSlide()
  {
    if(!isAnimating && $currentSlide.next().length)
    {
      //setting animating flag to true
      isAnimating = true;
        
      console.log($currentSlide);  
      
      var action = $currentSlide.find('.header-image');
      var actionone = $currentSlide.find('.header-slider-details');
      var actiontwo = $currentSlide.find('.header-full-page');
      // var logo = $main.find('.logo');
      // var toggle = $main.find('.toggle');
      // var breacumb = $main.find('.estimate');
      // var social = $main.find('.breadcumb');
      // var socialicon = $main.find('.social-media');
      TweenMax.to(action,.4,{y:-60, opacity:0,})
      TweenMax.to(actiontwo,.4,{y:-60, delay:.2, opacity:0,})
      // TweenMax.to(social,.4,{delay:.2, opacity:0,})
      // TweenMax.to(logo,.4,{ delay:.2, opacity:0,})
      // TweenMax.to(socialicon,.4,{ delay:.2, opacity:0,})
      // TweenMax.to(toggle,.4,{ delay:.2, opacity:0,})
      // TweenMax.to(breacumb,.4,{ delay:.2, opacity:0,})
      TweenMax.to(actionone,.4,{x:-320, delay:.2, onComplete:goToSlide, onCompleteParams: [$currentSlide.next()]})
      
      //goToSlide($currentSlide.next());
    }
  }




  /*
	*   Actual transition between slides
	* */
  function goToSlide($slide)
  {
    //If the slides are not changing and there's such a slide
    if( $slide.length)
    {
      
      $currentSlide = $slide;
      NextSlide = $currentSlide.next();

      //Sliding to current slide
      TweenLite.to($slidesContainer, .1, {scrollTo: {y: pageHeight * $currentSlide.index() }, onComplete: onSlideChangeEnd});

      //Definig slide status
      TweenLite.to($allSlides.filter(".active"), 0.1, {className: "-=active"});
      TweenLite.to($allSlides.filter($currentSlide), 0.1, {className: "+=active"});

      //Animating menu items
      TweenLite.to($navButtons.filter(".active"), 0.5, {className: "-=active"});
      TweenLite.to($navButtons.filter("[href=#" + $currentSlide.attr("id") + "]"), 0.5, {className: "+=active"});

      //console.log(anim02);  
	
    }
  }


  /*
	*   Once the sliding is finished, we need to restore "isAnimating" flag.
	*   You can also do other things in this function, such as changing page title
	* */
  function onSlideChangeEnd() {
    
    
    // Reverse the timeline for the previous slide
    timelines[currentIndex].reversed(true).progress(0.25);
    
    // Change the index
    currentIndex = $currentSlide.index();
    
    // Play the timeline for the current slide
    timelines[currentIndex].reversed(false);
  }

  /*
	*   When user resize it's browser we need to know the new height, so we can properly align the current slide
	* */
  function onResize(event)
  {

    //This will give us the new height of the window
    var newPageHeight = $window.innerHeight();

    /*
		*   If the new height is different from the old height ( the browser is resized vertically ), the slides are resized
		* */
    if(pageHeight !== newPageHeight)
    {
      pageHeight = newPageHeight;

      //This can be done via CSS only, but fails into some old browsers, so I prefer to set height via JS
      TweenLite.set([$slidesContainer, $slides], {height: pageHeight + "px"});

      //The current slide should be always on the top
      TweenLite.set($slidesContainer, {scrollTo: {y: pageHeight * $currentSlide.index() }});
    }

  }


