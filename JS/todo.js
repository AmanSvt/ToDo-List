//on is for future elements also, so to pass, we first include parent elemnet 
// then "li" that we want to change.

$("ul").on("click", "li", function(){
    $(this).toggleClass("selected");
});
 
//on is for future elements also, so to pass, we first include parent elemnet 
// then "span" that we want to change.

$("ul").on("click","span",function(event){
   $(this).parent().fadeOut(function(){
    $(this).remove();                        
}); 
 event.stopPropagation();
});

$("input[type='text' ").keypress(function(event){
  if(event.which === 13){
      var todoText = $(this).val();
      $(this).val("");
      //append is to add things on the page, and it acts as html.
      $("ul").append("<li><span><i class='fa fa-trash'></i></span> " + todoText + "</li>");
  }   
});

$(".fa-plus").on("click", function(){
    $("input[type='text' ").fadeToggle(500);
});