require.config({
  shim: {
  },

  paths: {
    jquery: 'vendor/jquery.min'
  }
});
 
require(['jquery'], function($) {
  $(document).ready(function(){
  	$('.js.opacity body').css({ opacity: 1 });
  });
});