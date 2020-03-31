document.addEventListener('DOMContentLoaded', function() {

    var successMessage = $("#success-message");
    var errorMessage = $("#error-message");

    // UUID GENERATOR

    var uuidBtn = $("#uuid-btn");
    var uuidSection = $("#uuid-section");

    uuidBtn.click(function() {
        uuidSection.css("display", "block");
        var uuid = create_UUID();
        uuidSection.html(uuid);

        navigator.clipboard.writeText(uuid)
            .then(function() {
                successMessage.css("display", "block");
                errorMessage.css("display", "none");
            }, function(err) {
                successMessage.css("display", "none");
                errorMessage.css("display", "block");
            });
    })

    // RANDOM STRING GENERATOR

    var randomBtn = $("#random-btn");
    var randomSection = $("#random-section");

    randomBtn.click(function() {

        var upperCheck = $("#check1")[0].checked;
        var lowerCheck = $("#check2")[0].checked;
        var numberCheck = $("#check3")[0].checked;
        var specialCheck = $("#check4")[0].checked;

        var length = $("#number1").val();

        randomSection.css("display", "block");
        var randomString = create_random_string(length, upperCheck, lowerCheck, numberCheck, specialCheck);
        randomSection.html(randomString);

        navigator.clipboard.writeText(randomString)
            .then(function() {
                successMessage.css("display", "block");
                errorMessage.css("display", "none");
            }, function(err) {
                successMessage.css("display", "none");
                errorMessage.css("display", "block");
            });
    })

}, false);


function create_UUID() {
    var dt = new Date().getTime();
    var uuid = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
        var r = (dt + Math.random() * 16) % 16 | 0;
        dt = Math.floor(dt / 16);
        return (c == 'x' ? r : (r & 0x3 | 0x8)).toString(16);
    });
    return uuid;
}

function create_random_string(length, includeUpper = true, includeLower = true, includeNumbers = true, includeSpecial = false) {
    var result = '';
    var characters = '';

    var specialCharacters = "@$!?#%&=+-_.:;()[]{}";
    var lowerCase = "abcdefghijklmnopqrstuvwxyz";
    var upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    var numbers = "0123456789";

    if (includeLower) characters += lowerCase;
    if (includeUpper) characters += upperCase;
    if (includeNumbers) characters += numbers;
    if (includeSpecial) characters += specialCharacters;

    var charactersLength = characters.length;
    for (var i = 0; i < length; i++) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
}