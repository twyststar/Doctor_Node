var apiKey = require('./../.env').apiKey;

function Doctor(lastName, firstName, title, image, bio, specialtyName, specialtyDesc, distance, practice, city, state, address, phone ) {
  this.lastName = lastName;
  this.firstName = firstName;
  this.title = title;
  this.image = image;
  this.bio = bio;
  this.specialtyName = specialtyName;
  this.specialtyDesc = specialtyDesc;
  this.distance = distance
  this.practice = practice
  this.city = city;
  this.state = state;
  this.address = address;
  this.phone = phone;
}
// 47.606%2C-122.332%2C = location format
// 47.606%2C-122.332 = user location format
// var latLong = '47.606%2C-122.332%2C'
// var userLoc = '47.606%2C-122.332'
Doctor.prototype.getInfo = function(userLoc, latLong, search, sort, displayInfo) {
  doctors = [];
  $.get('https://api.betterdoctor.com/2016-03-01/doctors?query='+ search + '&location='+ latLong +'100&user_location='+ userLoc + '&sort='+ sort + '&skip=0&limit=10&user_key=' + apiKey).then(function(response){
    console.log(response)
    if (response.data.length === 0) {
      $('.return').text('');
      $('.error').show()
    } else {
      for (var i =0; i < response.data.length; i++) {
        if (response.data[i].specialties.length >= 1) {
          var  specName = response.data[i].specialties[0].name;
          var specDesc = response.data[i].specialties[0].description;
        }else {
          var  specName = 'No specialty info available.';
          var specDesc = 'No specialty description available.';
        }
        var distance = response.data[i].practices[0].distance.toFixed(1)
        var image = response.data[i].profile.image_url;
        var lastName = response.data[i].profile.last_name;
        var firstName = response.data[i].profile.first_name;
        var title = response.data[i].profile.title;
        var bio = response.data[i].profile.bio;
        var practice = response.data[i].practices[0].name
        var city = response.data[i].practices[0].visit_address.city
        var state = response.data[i].practices[0].visit_address.state
        var address = response.data[i].practices[0].visit_address.street
        var phone = response.data[i].practices[0].phones[0].number


        newDoc = new Doctor(lastName, firstName, title, image, bio, specName, specDesc, distance, practice, city, state, address, phone)
        doctors.push(newDoc);
      }
      console.log(doctors)
      displayInfo(doctors);
    }
  });
};


exports.doctorModule = Doctor;
