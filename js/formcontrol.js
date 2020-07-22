$('.delivery-option').change(function() {
    $('.location-select').toggleClass('hidden');
    updateTotal();
});

$('#pints').change(function() {
    updateTotal();
});

function updateTotal() {
    let pints = $('#pints').prop('value');
    let delivery = $('#delivery').prop('checked');

    let total = 4.99 * pints;
    let baseTotal = total.toFixed(2);
    let deliveryTotal = (total + 5.0).toFixed(2);
    if (delivery) {
        total = deliveryTotal;
    }

    $('.pickuplabel').text('Pick up in Redmond, WA ($' + baseTotal + ' total)');
    $('.deliverylabel').text('Fresh home delivery ($' + deliveryTotal + ' total)');
    $('.checkoutbtn').text('$' + total.toFixed(2) + ' total - Check out');
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
})