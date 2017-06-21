(function () {

        angular.module('ShoppingListCheckOff', [])
        .controller('ToBuyShoppingController', ToBuyShoppingController)
        .controller('AlreadyBoughtShoppingController', AlreadyBoughtShoppingController)
        .service('ShoppingListCheckOffService', ShoppingListCheckOffService);

        //Inject the service - 'ShoppingListCheckOffService' into the controller - 'ToBuyShoppingController'
        ToBuyShoppingController.$inject=['ShoppingListCheckOffService'];
        //Function to implement controller - 'ToBuyShoppingController'
        function ToBuyShoppingController(ShoppingListCheckOffService) {
            var buyCtrl = this;

            //Method to retrieve the buyList array
            buyCtrl.buyItems = ShoppingListCheckOffService.getBuyList();

            //Method to add to the buyList array
            buyCtrl.addToBuyList = function () {
              ShoppingListCheckOffService.addToBuyList(buyCtrl.name, buyCtrl.quantity);
              }

            //Method to remove item from the buyList array.  Also adds to the boughtList array
            buyCtrl.removeFromBuyList = function (itemIndex) {
              ShoppingListCheckOffService.removeFromBuyList(itemIndex);
              }
        }  //  end of controller - 'ToBuyShoppingController'


        //Inject the service - 'ShoppingListCheckOffService' into the controller - 'AlreadyBoughtShoppingController'
        AlreadyBoughtShoppingController.$inject=['ShoppingListCheckOffService'];
        //Function to implement controller - 'AlreadyBoughtShoppingController'
        function AlreadyBoughtShoppingController(ShoppingListCheckOffService) {
            var boughtCtrl = this;

            //Method to retrieve the boughtItems array
            boughtCtrl.boughtItems = ShoppingListCheckOffService.getBoughtList();

        }  // end of controller - 'AlreadyBoughtShoppingController'

        //XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX

        //Function to implement the service - 'ShoppingListCheckOffService'
      function ShoppingListCheckOffService() {
      var service = this;

      //Declare 'To Buy' shopping list with pre-populated array
      var buyList = [
          {
            name: "Chivas",
            quantity: 5
          },
          {
            name: "Baileys",
            quantity: 7
          },
          {
            name: "Smirnoff",
            quantity: 9
          },
          {
            name: "Black Label",
            quantity: 3
          },
          {
            name: "Bourbon",
            quantity: 1
          }
          ];

      //Declare 'Already Bought' shopping list
      var boughtList = []; //empty array

        //Service - Get list function
        service.getBuyList = function () {
          return buyList;
          }

        //Service - Add to list function
        service.addToBuyList = function (newItem, newQuantity) {
          var item = {
            name: newItem,
            quantity: newQuantity
          };
          buyList.push(item);
        }

        //Service - Remove from list
        service.removeFromBuyList = function (itemIndex) {
          // boughtList.push(buyList.splice(itemIndex,1));
          boughtList.push(buyList[itemIndex]);
          buyList.splice(itemIndex,1);
        }

        //Service - Get list function
        service.getBoughtList = function () {
            return boughtList;
          }

      }  //end of service - 'ShoppingListCheckOffService'

})();   //end of IIFE
