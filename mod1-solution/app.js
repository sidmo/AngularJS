(function (){
'use strict';
angular.module('LunchCheck', [])
.controller('LunchCheckController', LunchCheckController);

//function for controller 'LunchCheckController'
function LunchCheckController ($scope){
$scope.itemList = "";
$scope.message = "";

//function to generate the display message
$scope.displayMessage = function (){
  if ($scope.itemList == ""){
    $scope.message = "Please enter data first."
  } else {
    var numItems = splitString($scope.itemList, ",");
    if (numItems < 4) {
      $scope.message = "Enjoy your " + numItems + " dish(es) !";
    } else {
      $scope.message = numItems + " dishes is Too Much !";
    }

  }

};

};

//Function to split text input into an array and return length of array.  Checks for empty array items and
//does not include in the total item count.
function splitString(stringToSplit, separator) {
  var arrayOfStrings = stringToSplit.split(separator);
  var arrayLength = 0;
for(var i=0;i<arrayOfStrings.length;i++)
if(arrayOfStrings[i].length > 0){
  arrayLength = arrayLength+1;
  console.log(arrayLength)
}
return arrayLength;
}



})();
