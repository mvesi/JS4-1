//Part 1

$(".button1").click(function(){
	console.log("Here is a message");
	$("body").append("I'm just adding a little text to the body<br>");
})

$(".button2").click(function(){
	$("body").append("<h1>Here is some h1 text</h1><br>");

})

//Part 2

//this changes paragraphs pink when you hover over thema nd returns them to black upon mousing off
$("#p1, #p2, #p3").hover(function(){
		$(this).css("color","pink");},
	function(){
		$(this).css("color","black");
	}
);

//this adds an exclammation point to each h2 heading
$("h2").append("!");

//this asks if users want to navigate to the link they have clicked and removes it if they choose cancel
$("a").click(function(){
	var decision = confirm("Are you sure you want to visit this link?");
	if(decision === true) {
		window.location.assign($(this).attr('href'));
	}
	else{
		$(this).hide();
		return false;

	}
})


//Part 3
$(".bigbutton").on("click",function(){

	$("body").prepend('<div class="coverbox"><button class="close-button">Close</button></div>');
	
	$(".close-button").on("click",function(){

		$(".coverbox").remove();

	});
});





