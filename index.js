window.onload = function() {

    var $form = $('form#betaForm'),
        url = 'https://script.google.com/macros/s/AKfycbwAVPw2p-ykA_pE8KbdXf7BsIF21-vH9W7R1cmDeobXyl8ytnc/exec';

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