freelancerWebpage.controller('HeadersCtrl', function HeadersCtrl($scope) {
  $(document).ready(function(){
    $("#login_button").click(function(){
      $("#hidden").slideToggle();
    });
  });
}); //end freelancerWebpage.controller
