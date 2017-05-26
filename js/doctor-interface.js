var Doctor = require('./../js/doctor.js').doctorModule;

var displayInfo = function(doctors){
  $('.return').text('');
  doctors.forEach(function(doctor) {
    $('.return').append('<li><h3> Dr. ' + doctor.firstName + ' ' + doctor.lastName + ', ' + doctor.title + '</h3></li><ul><li>Bio: ' + doctor.bio + '</li><br><li>Image: <img src="' + doctor.image + '" alt="No image available."</li></li><br><br>');

  });
};

$(document).ready(function(){
  var docSearch = new Doctor();
  $('#doctorForm').submit(function(){
    event.preventDefault();
    var search = $('#search').val();
    $('#search').val('');
    var sort = $('#sort').val()
    docSearch.getInfo(search, sort, displayInfo);
  });
});
