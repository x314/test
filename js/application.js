(function() {

  $(function() {

    $('.button-collapse').sideNav({
      menuWidth: 300,
      edge: 'left',
      closeOnClick: true,
      draggable: true,
      onOpen: function(el) { },
      onClose: function(el) { }
    });

    $('select').material_select();

    $('.datepicker').pickadate({
      selectMonths: true, // Creates a dropdown to control month
      selectYears: 15, // Creates a dropdown of 15 years to control year,
      today: 'Today',
      clear: 'Clear',
      close: 'Ok',
      closeOnSelect: false // Close upon selecting a date,
    });

    $('.modality .card-panel').on('click', function() {
      $('.modality .card-panel').removeClass('checked');
      $(this).addClass('checked');
    });
  });

}).call(this);
