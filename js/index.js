// jQuery(document).ready(function() {
//   var $modal = $('.modal');
//   var $modalTrigger = $('.modal-trigger');
//   var $modalClose = $('.modal-close');
//   var $overlay = $('.modal-overlay');
//
//   $modalTrigger.on('click', function(event) {
//     $overlay.addClass('overlay-visible');
//     $modal.addClass('modal-visible');
//   });
//
//   // Closes modal on 'dismiss me' button click
//   $modalClose.on('click', function(event) {
//     $overlay.removeClass('overlay-visible');
//     $modal.removeClass('modal-visible');
//   });
//
//   // Closes modal on overlay click
//   $overlay.on('click', function(event) {
//     if ($(event.target).is($overlay) || $(event.target).is($modalClose)) {
//       $overlay.removeClass('overlay-visible');
//       $modal.removeClass('modal-visible');
//     }
//   });
//
//   // Closes modal on esc
//   $(document).keyup(function(event) {
//     if (event.which == '27') {
//       $overlay.removeClass('overlay-visible');
//       $modal.removeClass('modal-visible');
//     }
//   });
// });
