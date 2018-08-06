$(function() {
    $(".burgers-to-eat").on("click", function(event) {
      var id = $(this).attr("value");
      console.log(id);

      $.ajax("/api/burgers/" + id, {
        type: "PUT",
        data: {
          id: id,
        }
      })
      console.log("nom")
          location.reload();
    });
  
    $(".create-form").on("submit", function(event) {
      event.preventDefault();
      
      var newBurger = {
        burger_name: $("#burger-add").val().trim()
      }
      $.ajax("/api/burgers", {
        type: "POST",
        data: newBurger
      })
          location.reload();
    });
  
  });
