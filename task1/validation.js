$(function() {

            $.validator.addMethod('IPValid', function(value) {
                    var data = value.split('.');
                    if (data.length != 4)
                        return false;
                    for (var i = 0; i < data.length; i++) {
                        var str = data[i];
                        if (str.length == 0 || isNaN(str    ) || str < 0 || str > 255)
                            return false;
                    }
                    return true;
                }, 'Invalid IP Address');
    
                $.validator.addMethod('DateValid', function(value) {
                    var date = "^(3[01]|[12][0-9]|0[1-9])/(1[0-2]|0[1-9])/[0-9]{4}$";
                    return value.match(date);
                }, 'Invalid Date');

                $("#register-form").validate({
                    rules: {
                        name: {
                            required: true,
                            minlength: 5,
                            maxlength: 30
                        },
                        email: {
                            required: true,
                            email: true
                        },
                        date: {
                            required: true,
                            DateValid: true
                        },
                        ip: {
                            required: true,
                            IPValid: true
                        }
                    },

                    messages: {
                        name: {
                            required: "Please enter your name",
                            minlength: "The number must be more than 5 symbols",
                            maxlength: "The number must be less than 30 symbols"
                        },
                        email: {
                            required:                   'Please enter an email address',
                            email:'Please enter a vlid address'
                        },
                    },

                });
            });