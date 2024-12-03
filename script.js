
$(document).ready(function() {
	$("#navbar").sticky();
	var navMenu = $("#nav-menu-collapsible");
	var verticalBar = $("#nav-menu-toggle .vertical-bar");

	$("#nav-menu-toggle").click(function() {
		if (!verticalBar.hasClass("rotate")) {
			verticalBar.addClass("rotate");
			navMenu.removeClass("collapsed");
			navMenu.addClass("uncollapsed");
		} else {
			verticalBar.removeClass("rotate");
			navMenu.removeClass("uncollapsed");
			navMenu.addClass("collapsed");
		}
	});

	$("#nav-menu-collapsible a").click(function() {
		verticalBar.removeClass("rotate");
		navMenu.removeClass("uncollapsed");

		var anchorRef = $(this).attr("href");
		$(anchorRef).animatescroll();
	});

	$(".peek").mouseenter(function() {
		$("#arrow").addClass("arrow-state-hover");
		window.scrollBy(0, 10);
	});
	$(".peek").mouseleave(function() {
		window.scrollBy(0, -10);
		$("#arrow").removeClass("arrow-state-hover");
	});
	$(".peek").click(function() {
		var peekRef = $(this).attr("href");
		console.log($().animatescroll)
		$(peekRef).animatescroll({
			padding: -10
		});
	});
	
                
gsap.registerPlugin(ScrollTrigger);

  gsap.timeline()
    .fromTo("#page-about .about-heading", { opacity: 0 }, { opacity: 1, duration: 1 })
    .fromTo("#page-about .about-left", { x: -100, opacity: 0 }, { x: 0, opacity: 1, duration: 1 }, "-=0.25")
    .fromTo("#page-about .about-right", { x: 100, opacity: 0 }, { x: 0, opacity: 1, duration: 1 }, "-=0.25")
    .fromTo("#page-about .about-left p, #page-about .about-right ul", { opacity: 0 }, { opacity: 1, duration: 1 }, "-=0.25");

  ScrollTrigger.create({
    trigger: "#page-about",
    start: "top 80%",
    end: "bottom 20%",
    onEnter: () => {
      gsap.timeline().play();
    },
	onLeave: () => {
		gsap.timeline().pause(); // Pause the timeline when leaving the section
	  },
	  onEnterBack: () => {
		gsap.timeline().play(); // Restart the timeline when re-entering the section
	  }
  });
  
}); 