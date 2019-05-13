$(document).ready(function (){
	$("#show").click(function(){
		$(".menu-items-2").slideToggle("slow");
		
		if($(this).text() === "Show More"){
			$(this).text("Show Less");
		}else{
			$(this).text("Show More");
		}
	});
	
	
	
});