// console.log("CONNECTED!")

// $("ul li").on("click", function(){
// 	$(this).css({
// 		textDecoration: "line-through",
// 		color: "grey"
// 	})
// });

$("ul").on("click", "li", function(){
	$(this).toggleClass("done");
});



$("ul").on("click", "span", function(event){
	$(this).parent("li").fadeOut(500,function(){
		$(this).remove();
	});
	event.stopPropagation();
});

$("input[type='text']").keypress(function(event){
	if (event.which === 13){
		$("ul").append("<li><span><i class='fas fa-trash-alt'></i></span> "+ $(this).val() +"</li>")
		$(this).val("");
	}
});

$("#editIcon").click(function(){
	$("input[type='text']").fadeToggle()
});