
// Add a new to do
$("input[type='text']").keypress(function(event){
if(event.which===13){
	var toDoText= $(this).val();
$("ul").append("<li><span><i class='fa fa-trash'></i></span> "+toDoText+"</li>");
$(this).val("");
}
event.stopPropagation();
});



//Strike out the todo list
$("ul").on("click","li",function(){
	$(this).toggleClass("completed");
})

//Delete the todo 
$("ul").on("click","span",function(){
	$(this).parent().fadeOut(1000,function(){
		$(this).remove();
	});
	event.stopPropagation();
})


// 
$(".fa-plus").click(function(){
	$("input[type='text']").slideToggle();
})


