window.onload = function() {

    var $form = $('form#betaForm'),
        url = 'https://script.google.com/macros/s/AKfycbx82s4QnMa2B4IKtNd-7Th-zcoiezfIRCk8X6RJrmVYplcp4w/exec';

    $('#submitFormButton').on('click', function(e) {
        e.preventDefault();
        console.log($form.serializeObject());
        var jqxhr = $.ajax({
            url: url,
            method: "GET",
            dataType: "json",
            data: $form.serializeObject()
        });
    })

};