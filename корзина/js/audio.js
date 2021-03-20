

// Menu
$("#menu-btn").click(function() {
	$("#content-wrap").addClass('inactive');
	$("#sidemenu").addClass('active');
});

// Home Button
$("#home-btn").click(function() {
	$("#home-screen").addClass('active');
	$(".menu").removeClass('active');
	$("#content-wrap").addClass('minimized');
});

// App
$(".app-icon").click(function() {
	$("#content-wrap").removeClass('minimized');
	setTimeout(function(){ $("#home-screen").removeClass('active'); }, 300);
});

// Overlay
$("#overlay").click(function () {
	$("#content-wrap").removeClass('inactive');
	$("#sidemenu").removeClass('active');
});

// Options
$("#options-btn").click(function() {
	$("#song-options").addClass('active');
});



// Close Menu
$(".close-btn").click(function() {
	$(".menu").removeClass('active');
});


