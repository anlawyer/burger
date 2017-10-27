
$(function () {
  $('.change-eaten').on('click', function (event) {
    var id = $(this).data('id');
    $.ajax('/api/burger/' + id, {
      type: 'PUT',
      data: { devoured: 1 }
    }).then(
      function () {
        location.reload();
      }
    );
  });

  $('.create-form').on('submit', function (event) {
    event.preventDefault();

    var newBurger = {
      name: $('#burgName').val().trim()
    };

    $.ajax('/api/burger', {
      type: 'POST',
      data: newBurger
    }).then(
      function () {
        console.log('created new burger');
        location.reload();
      }
    );
  });
});
