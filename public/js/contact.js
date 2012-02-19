$(function() {
  $('.error').hide();
  $(".button").click(function() {
		// validate and process form
		// first hide any error messages
    $('.error').hide();
		
	  var name = $("input#name").val();
		if (name == "") {
      $("span#name_error").show();
      $("input#name").focus();
      return false;
    }
	  var email = $("input#email").val();
	  if (email == "") {
      $("span#email_error").show();
      $("input#email").focus();
      return false;
    }
	
	var emailReg = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
	if(!emailReg.test(email)) {
	$("span#email_error2").show();
    $("input#email").focus();
      return false;
	}
	
	  var msg = $("textarea#msg").val();
	  if (msg == "") {
	  $("span#msg_error").show();
	  $("textarea#msg").focus();
	  return false;
    }
		
		var dataString = 'name='+ name + '&email=' + email + '&msg=' + msg;
		//alert (dataString);return false;
		
	  $.ajax({
      type: "POST",
      url: "process.php",
      data: dataString,
      success: function() {
        $('#contact_form').html("<div id='message'></div>");
        $('#message').html("Contact Form Submitted!. We will be in touch soon.")
        .hide()
        .fadeIn(1500, function() {
          $('#message');
        });
      }
     });
    return false;
	});
});

