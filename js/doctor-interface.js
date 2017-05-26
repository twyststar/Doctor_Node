var Doctor = require('./../js/doctor.js').doctorModule;

var displayInfo = function(doctors){
  $('.return').text('');
  doctors.forEach(function(doctor) {
    $('.return').append('<li><h3> Dr. ' + doctor.firstName + ' ' + doctor.lastName + ', ' + doctor.title + '</h3><ul><li><img src="' + doctor.image + '" alt="No image available."</li><br><br><li>Bio: ' + doctor.bio + '</li><li>Specialty:<ul><li>'+ doctor.specialtyName + '</li><li>' + doctor.specialtyDesc + '</li><li>*note- doctors may have many specialties. Only the first is listed.</li></ul></ul></li><br>');
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
