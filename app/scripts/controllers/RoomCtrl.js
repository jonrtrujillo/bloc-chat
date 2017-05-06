(function() {
     function RoomCtrl(Room) {
       // Use the Room service to get all rooms; assign rooms to a property.
       this.rooms = Room.all;
     }

     angular
         .module('blocChat')
         .controller('RoomCtrl', ['Room', RoomCtrl]);
 })();
