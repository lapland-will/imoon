$(document).ready(function(){
	$('#seat').change(function(){
		if ($('#seat').val() == 'window') {
				$('.seat-group .help-block').text('Window view totally rocks!');
			} else if ($('#seat').val() == 'corner') 
			{
				$('.seat-group .help-block').text('Corner candle lights are so awesome!');
			} else if ($('#seat').val() == 'center') 
			{
				$('.seat-group .help-block').text('Center? You must be a people person!');
			} else {
				$('.seat-group .help-block').text('Spot on!');
			}

	}); //end change

	$('#time').change(function(){
		if ($('#time').val() == '500') {
				$('.time-group .help-block').text('Awesome!');
			} else if ($('#time').val() == '530') 
			{
				$('.time-group .help-block').text('Great!');
			} else if ($('#time').val() == '600') 
			{
				$('.time-group .help-block').text('This is our busiest time!');
			} else if ($('#time').val() == '630') 
			{
				$('.time-group .help-block').text('This is our busiest time!');
			}
			else if ($('#time').val() == '700') 
			{
				$('.time-group .help-block').text('This is our busiest time!');
			}
			else if ($('#time').val() == '730') 
			{
				$('.time-group .help-block').text('Great! We will see you then.');
			}
			else if ($('#time').val() == '800') 
			{
				$('.time-group .help-block').text('Awesome!');
			}
			else {
				$('.time-group .help-block').text('Spot on!');
			}

	}); //end change

	$('#name').focusout(function(){
		if($('#name').val().length == 0) {
			$('.name-group .help-block').text('Please enter your name.');
			$('.name-group').attr({
				class: 'col-sm-6 form-group name-group has-error'
			}); // end attr
		} else {
			$('.name-group .help-block').text('');
			$('.name-group').attr({
				class: 'col-sm-6 form-group name-group'
			}); //end attr
		}
	}); //end focus out

	$('button').click(function(submit){
		if($('#name').val().length == 0) {
			$('.name-group .help-block').text('Please enter your name.');
			$('.name-group').attr({
				class: 'col-sm-6 form-group name-group has-error'
			}); // end attr
			submit.preventDefault();
		} else {
			$('#myModal').modal();
			submit.preventDefault();
		}
	}); //end click

}); //end ready







