freelancerWebpage.controller('HeadersCtrl', function HeadersCtrl($scope) {
  $(document).ready(function(){
    $("#login_button").click(function(){
      $("#header_form").slideDown(2000);
    });
  });
}); //end freelancerWebpage.controller
