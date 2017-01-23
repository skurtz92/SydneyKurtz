$(document).ready(function() {

    $("#flat-buttons").click(function() {
        $(".target").effect("shake", { times: 4 }, 1000);
    });

});

  $('.button-collapse').sideNav({
      menuWidth: 300, // Default is 240
      edge: 'right', // Choose the horizontal origin
      closeOnClick: true, // Closes side-nav on <a> clicks, useful for Angular/Meteor
      draggable: true // Choose whether you can drag to open on touch screens
    }
  );