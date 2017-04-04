function Todo (task) {
  this.task = task;
}
Todo.prototype.everyDay = function (){
  return this.task.italics();
}
Todo.prototype.bigDeal = function(){
return this.task.toUpperCase() + "!";
}




//UI
$(document).ready(function(){
  $("#formOne").submit(function(event){
    event.preventDefault();

    var inputtedListItem = $("input#listItem").val();

    var newTodo = new Todo(inputtedListItem);

    $("ol#result").append("<li class='list'><span>" + newTodo.everyDay() + "</span></li>");
    $("input#listItem").val("");
      $(".withList").show();

    $(".list").click(function(){
      this.remove();
    });
  });

  $("button#important").click(function(){

    var inputtedListItem = $("input#listItem").val();

    var newTodo = new Todo(inputtedListItem);

    $("ol#result").append("<li class='list'><span>" + newTodo.bigDeal() + "</span></li>");
    $("input#listItem").val("");
    $(".withList").show();

    $(".list").click(function(){
      this.remove();
    });
  });

});
