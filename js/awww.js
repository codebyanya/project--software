
$(document).ready(function() {

	$('#name').on('blur', function() {
		var input = $(this);
		var name_length = input.val().length;
		if(name_length < 3 ){
			input.removeClass("valid").addClass("invalid");
		}
		else{
			input.removeClass("invalid").addClass("valid");
		}
	});

	$('#email').on('blur', function() {
		var input = $(this);
		var email_length = input.val().length;
		var pattern = /^@/;
		var pattern2= /@$/;
		var is_email = pattern.test(input.val());
		var is_email2 = pattern2.test(input.val());
		if(is_email || is_email2 || email_length == 0){
			input.removeClass("valid").addClass("invalid");
		}
		else{
			input.removeClass("invalid").addClass("valid");
		}
	});

	$('#message').on('blur', function() {
		var input = $(this);
		var message_length = input.val().length;
		if(message_length < 3 ){
			input.removeClass("valid").addClass("invalid");
		}
		else{
			input.removeClass("invalid").addClass("valid");
		}
	});
	$('#message_title').on('blur', function() {
		var input = $(this);
		var message_title_length = input.val().length;
		if(message_title_length < 3 ){
			input.removeClass("valid").addClass("invalid");
		}
		else{
			input.removeClass("invalid").addClass("valid");
		}
	});
	$('#phone').on('blur', function() {
		var input = $(this);
		var phone_length = input.val().length;
		if(phone_length < 9 ){
			input.removeClass("valid").addClass("invalid");
		}
		else{
			input.removeClass("invalid").addClass("valid");
		}
	});
});
