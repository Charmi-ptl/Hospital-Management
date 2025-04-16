angular.module('hospitalApp').controller('DoctorController', function($scope, $http) {
  $scope.doctors = [];
  $scope.newDoctor = {};
  $scope.searchDoctor = ""; // 🔍 For search box

  function loadDoctors() {
    $http.get('/api/doctors')
      .then(res => $scope.doctors = res.data)
      .catch(err => console.error('Error loading doctors:', err));
  }

  $scope.addDoctor = function() {
    $http.post('/api/doctors', $scope.newDoctor)
      .then(() => {
        alert('✅ Doctor added!');
        $scope.newDoctor = {};
        loadDoctors();
      })
      .catch(err => {
        alert('❌ Error adding doctor: ' + err.data.error);
        console.error(err);
      });
  };

  $scope.deleteDoctor = function(id) {
    $http.delete('/api/doctors/' + id)
      .then(loadDoctors)
      .catch(err => console.error('Error deleting doctor:', err));
  };

  $scope.editDoctor = function(doctor) {
    $scope.editingDoctor = angular.copy(doctor);
  };

  $scope.updateDoctor = function() {
    $http.put('/api/doctors/' + $scope.editingDoctor._id, $scope.editingDoctor)
      .then(() => {
        alert('✅ Doctor updated!');
        $scope.editingDoctor = null;
        loadDoctors();
      })
      .catch(err => {
        alert('❌ Error updating doctor: ' + err.data.error);
        console.error(err);
      });
  };

  // ✅ Custom filter function for accurate doctor search
  $scope.customDoctorFilter = function(doctor) {
    const search = ($scope.searchDoctor || '').toLowerCase().trim();

    const nameMatch = doctor.name.toLowerCase().includes(search);
    const specialtyMatch = doctor.specialty.toLowerCase().includes(search);

    return nameMatch || specialtyMatch;
  };

  loadDoctors();
});
