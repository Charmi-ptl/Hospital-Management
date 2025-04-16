angular.module('hospitalApp').controller('PatientController', function($scope, $http) {
  $scope.patients = [];
  $scope.newPatient = {};
  $scope.searchPatient = ""; // 🔍 Search input binding

  function loadPatients() {
    $http.get('/api/patients')
      .then(res => $scope.patients = res.data)
      .catch(err => console.error('Error loading patients:', err));
  }

  $scope.addPatient = function() {
    $http.post('/api/patients', $scope.newPatient)
      .then(() => {
        alert('✅ Patient added!');
        $scope.newPatient = {};
        loadPatients();
      })
      .catch(err => {
        alert('❌ Error adding patient: ' + err.data.error);
        console.error(err);
      });
  };

  $scope.deletePatient = function(id) {
    $http.delete('/api/patients/' + id)
      .then(loadPatients)
      .catch(err => console.error('Error deleting patient:', err));
  };

  $scope.editPatient = function(patient) {
    $scope.editingPatient = angular.copy(patient);
  };

  $scope.updatePatient = function() {
    $http.put('/api/patients/' + $scope.editingPatient._id, $scope.editingPatient)
      .then(() => {
        alert('✅ Patient updated!');
        $scope.editingPatient = null;
        loadPatients();
      })
      .catch(err => {
        alert('❌ Error updating patient: ' + err.data.error);
        console.error(err);
      });
  };

  // ✅ Custom filter function for accurate search
  $scope.customPatientFilter = function(patient) {
    const search = ($scope.searchPatient || '').toLowerCase().trim();

    const nameMatch = patient.name.toLowerCase().includes(search);
    const ageMatch = String(patient.age).includes(search);
    const genderMatch = patient.gender.toLowerCase() === search;

    return nameMatch || ageMatch || genderMatch;
  };

  loadPatients();
});
