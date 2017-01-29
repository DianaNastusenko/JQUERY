$(function(){
	
	var note = $('#note'),
		ts = new Date(2017, 0, 29),
		newYear = true;
	
	if((new Date()) > ts){
		ts = (new Date()).getTime() + (91*24*60*60+2*60+15)*1000;
	}
		
	$('#countdown').countdown({
		timestamp	: ts,
		callback	: function(days, hours, minutes, seconds){}
	});
	
});
