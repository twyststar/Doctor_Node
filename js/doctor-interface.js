var Doctor = require('./../js/doctor.js').doctorModule;

var displayInfo = function(doctors){
  $('.return').text('');
  $('.error').hide()
  doctors.forEach(function(doctor) {
    $('.return').append('<li><a href="https://www.google.com/webhp?hl=en&sa=X&ved=0ahUKEwi4rOCxwY7UAhUoxlQKHfvkC6sQPAgD#hl=en&q=dr+' + doctor.firstName + '+' + doctor.lastName + '" target="_blank"><h3> Dr. ' + doctor.firstName + ' ' + doctor.lastName + ', ' + doctor.title + '</h3></a><ul><li><img src="' + doctor.image + '" alt="No image available."</li><br><br><li>Bio: ' + doctor.bio + '</li><li>Specialty:<ul><li>'+ doctor.specialtyName + '</li><li>' + doctor.specialtyDesc + '</li><li>*note- doctors may have many specialties. Only the first is listed.</li></ul></ul></li><br><h4 class="info">Contact Information:</h4><div class="contact"><ul><li>' + doctor.practice + '</li><li>Distance:' + doctor.distance + '</li><li><ul><li>' + doctor.address +'</li><li>' + doctor.city + '</li><li>'+ doctor.state +'</li><li>Tel:' + doctor.phone + '</li></ul></li></ul>');
  });
};

$(document).ready(function(){
  var docSearch = new Doctor();
  $('#doctorForm').submit(function(){
    event.preventDefault();
    var search = $('#search').val();
    $('#search').val('');
    var sort = $('#sort').val()
    var userLoc = $('#location').val()
    var latLong = (userLoc + '%2c')
    docSearch.getInfo(userLoc, latLong, search, sort, displayInfo);

    $('.info').click(function(){
      $(this).next('contact').slideToggle();
    });
  });

});
