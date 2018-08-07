$(function() {
    $(".burgers-to-eat").on("click", function(event) {
      var id = $(this).attr("value");

      $.ajax("/api/burgers/" + id, {
        type: "PUT",
        data: {
          id: id,
        }
      })
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

    $("#resetBurgers").on("click", function(event){
      event.preventDefault();

      $.ajax("/api/burgers/", {
        type: "PUT",
        data: {
          devoured: false,
        }
      })
          location.reload();


    })
  
  });
