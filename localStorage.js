// INITILIZE SERVICE
// ============================================================
angular.module("App")
  .service("localStorageService", function($http) {
    this.store = function(name, data) {
      localStorage.setItem(name, JSON.stringify(data));
      return 'saved';
    };
    this.get = function(name) {
      var item = localStorage.getItem(name);
      return JSON.parse(item);
    };
  });
// INITILIZE SERVICE
// ============================================================
angular.module("App")
.service("listService", function($http, localStorageService) {

this.collections = localStorageService.get('collections') || {
  owned: [],
  want: [],
  upcoming: []
};
var self = this;
this.addItemToList = function( collection, object) {
  for (var i = 0; i < self.collections[collection].length; i++) {
    if(object.id === self.collections[collection][i].id)
    {
      return false;
    }
  }
  self.collections[collection].push(object);
  localStorageService.store('collections', self.collections);
}
this.removeItemFromList = function (collection, id) {
  for (var i = 0; i < self.collections[collection].length; i++) {
    if(id === self.collections[collection][i].id){
      self.collections[collection].splice(i,1);
      localStorageService.store('collections', self.collections)
    }
  }

}
});
