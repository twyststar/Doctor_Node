var Doctor = require('./../js/doctor.js').doctorModule;

var displayInfo = function(doctors){
  $('.return').text('');
  $('.error').hide()
  doctors.forEach(function(doctor) {
    $('.return').append('<li class="docs"><a href="https://www.google.com/webhp?hl=en&sa=X&ved=0ahUKEwi4rOCxwY7UAhUoxlQKHfvkC6sQPAgD#hl=en&q=dr+' + doctor.firstName + '+' + doctor.lastName + '" target="_blank"><h3> Dr. ' + doctor.firstName + ' ' + doctor.lastName + ', ' + doctor.title + '</h3></a><ul><li><img src="' + doctor.image + '" alt="No image available."></li><br><br><li class="well bio">Bio: ' + doctor.bio + '</li><li class="well special">Specialty:<ul ><li>'+ doctor.specialtyName + '</li><li>' + doctor.specialtyDesc + '</li><li>*note- doctors may have many specialties. Only the first is listed.</li></ul></li><br><h4 class="info">Contact Information:</h4><div class="contact well"><ul><li>' + doctor.practice + '</li><li>Address: (Distance:' + doctor.distance + ' mi)</li><ul><li>' + doctor.address +'</li><li>' + doctor.city + '</li><li>'+ doctor.state +'</li><li>Tel:' + doctor.phone + '</li></ul></ul><br><li>*note-many doctors work at more than one practice. Only the first is shown.</li></div></ul>');
    $('#doctorList').append('<li>'+ doctor.lastName + ', ' + doctor.specialtyName + '</li><br>')
  });

};

$(document).ready(function(){
  var docSearch = new Doctor();
  $('#doctorForm').submit(function(){
    event.preventDefault();
    var search = $('#search').val();
      if(search == 'grout' || search == 'Grout' ){
        $('.return').append('<h2><a href="http://www.groutdoctor.com/"target="_blank">You need the Grout Doctor!</a></h2>');
      }else{
    $('#search').val('');
    var sort = $('#sort').val()
    var userLoc = $('#location').val()
    var latLong = (userLoc + '%2c')
    docSearch.getInfo(userLoc, latLong, search, sort, displayInfo);}
  });

});
