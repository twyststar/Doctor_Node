var apiKey = require('./../.env').apiKey;

function Doctor(lastName, firstName, title, image, bio, specialtyName, specialtyDesc, distance, city, state, address, phone ) {
  this.lastName = lastName;
  this.firstName = firstName;
  this.title = title;
  this.image = image;
  this.bio = bio;
  this.specialtyName = specialtyName;
  this.specialtyDesc = specialtyDesc;
  this.distance = distance
  this.city = city;
  this.state = state;
  this.address = address;
  this.phone = phone;
}
// 47.606%2C-122.332%2C = location format
// 47.606%2C-122.332 = user location format
var latLong = '47.606%2C-122.332%2C'
var userLoc = '47.606%2C-122.332'
Doctor.prototype.getInfo = function(search, sort, displayInfo) {
  doctors = [];
  $.get('https://api.betterdoctor.com/2016-03-01/doctors?query='+ search + '&location='+ latLong +'100&user_location='+ userLoc + '&sort='+ sort + '&skip=0&limit=10&user_key=' + apiKey).then(function(response){
    console.log(response)
    if (response.data.length === 0) {
      $('.error').show()
    } else {
      for (var i =0; i < 10; i++) {
        if (response.data[i].specialties.length >= 1) {
          var  specName = response.data[i].specialties[0].name;
          var specDesc = response.data[i].specialties[0].description;
        }else {
          var  specName = 'No specialty info available.';
          var specDesc = 'No specialty description available.';
        }
        var image = response.data[i].profile.image_url;
        var lastName = response.data[i].profile.last_name;
        var firstName = response.data[i].profile.first_name;
        var title = response.data[i].profile.title;
        var bio = response.data[i].profile.bio;

        newDoc = new Doctor(lastName, firstName, title, image, bio, specName, specDesc)
        doctors.push(newDoc);
      }
      console.log(doctors)
      displayInfo(doctors);
    }
  });
};


exports.doctorModule = Doctor;
