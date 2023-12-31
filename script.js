function submitRSVP() {
    var phoneNumber = document.getElementById("phoneNumber").value;
    var message = document.getElementById("message").value;

    var requestBody = {
        phoneNumber: phoneNumber,
        message: message
    };

    $.ajax({
        type: "POST",
        url: "/submitRSVP",
        contentType: "application/json",
        data: JSON.stringify(requestBody),
        success: function (response) {
            console.log(response);
        },
        error: function (error) {
            console.error(error);
        }
    });
}
