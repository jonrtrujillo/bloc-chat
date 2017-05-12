(function() {
     function RoomCtrl(Room, $uibModal) {
       // Use the Room service to get all rooms; assign rooms to a property.
       this.rooms = Room.all;
       this.addRoom = function() {
         $uibModal.open({
           templateUrl: '/templates/modal.html',
           size: 'sm',
           controller: 'ModalCtrl as modal'
           });
       }
     }

     angular
         .module('blocChat')
         .controller('RoomCtrl', ['Room', '$uibModal', RoomCtrl]);
 })();
