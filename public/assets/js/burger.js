// Make sure we wait to attach our handlers until the DOM is fully loaded.
$(function() {
    $(".burgers-eaten").on("click", function(event) {
      var id = $(this).data("id");

      $.ajax("/api/burgers/" + id, {
        type: "PUT",
        data: {
          devoured: "true"
        }
      }).then(
        function() {
          console.log("Burger has been devoured");
          location.reload();
        }
      );
    });
  
    $(".create-form").on("submit", function(event) {
      event.preventDefault();
  
      var newBurger = {
        burger_name: $("#burger-add").val().trim(),
      };

      $.ajax("/api/burgers", {
        type: "POST",
        data: newBurger
      }).then(
        function() {
          console.log("created new burger");
          location.reload();
        }
      );
    });
  
  });
  