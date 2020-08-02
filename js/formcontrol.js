$('.delivery-option').change(function() {
    $('.location-select').toggleClass('hidden');
    updateTotal();
});

$('#pints').change(function() {
    updateTotal();
});

$('#carepackage').change(function() {
    if(this.checked) {
        $('.more-info').toggleClass('hidden');
        $('.location-select').toggleClass('hidden');
        $('.rakhri-note').toggleClass('hidden');
        $('.checkoutbtn').text('$15 total - Check out');
        $('#venmo-link').text('$15 to @Samraaj-Bath on venmo');
    } else {
        $('.more-info').toggleClass('hidden');
        $('.location-select').toggleClass('hidden');
        $('.rakhri-note').toggleClass('hidden');
        updateTotal();
    }
            
});

function updateTotal() {
    let pints = $('#pints').prop('value');
    let delivery = $('#delivery').prop('checked');

    let total = 4.99 * pints;
    let baseTotal = total.toFixed(2);
    let deliveryTotal = (total + 5.0).toFixed(2);
    if (delivery) {
        total = deliveryTotal;
    } else {
        total = baseTotal;
    }

    $('.pickuplabel').text('Pick up in Redmond, WA ($' + baseTotal + ' total)');
    $('.deliverylabel').text('Fresh home delivery ($' + deliveryTotal + ' total)');
    $('.checkoutbtn').text('$' + total + ' total - Check out');
    $('#venmo-link').text('$' + total + ' to @Samraaj-Bath on venmo');
}

function onOrderSuccess() {
    $('.form-body').toggleClass('hidden');
    $('.checkoutbtn').toggleClass('hidden');
    $('.thank-you-body').toggleClass('hidden');
}

//https://script.google.com/macros/s/AKfycbyzHZyynvDl8gcTHJyJ9qb6uaJQaE2iZMqvOVAntZ6cRyZgRg/exec
//https://script.google.com/macros/s/AKfycbyzHZyynvDl8gcTHJyJ9qb6uaJQaE2iZMqvOVAntZ6cRyZgRg/exec
//https://script.google.com/macros/s/AKfycbyzHZyynvDl8gcTHJyJ9qb6uaJQaE2iZMqvOVAntZ6cRyZgRg/exec
//https://script.google.com/macros/s/AKfycbzAW2FJ78xNjK8pwl6WS82o2LDq_kdiMUNDrewgRzixrKCZy3yk/exec
//https://script.google.com/macros/s/AKfycbxaJM9jVrG7N6UYNM7BaGJL4S_vdsR9t8Xl_kW3_Q/exec
//https://script.google.com/macros/s/AKfycbxaJM9jVrG7N6UYNM7BaGJL4S_vdsR9t8Xl_kW3_Q/exec

var $form = $('form#orderForm'),
    url = 'https://script.google.com/macros/s/AKfycbxaJM9jVrG7N6UYNM7BaGJL4S_vdsR9t8Xl_kW3_Q/exec'

$('#orderForm').on('submit', function(e) {
  e.preventDefault();
  var jqxhr = $.ajax({
    url: url,
    method: "GET",
    dataType: "json",
    data: $form.serializeObject()
  }).done(onOrderSuccess());
});

