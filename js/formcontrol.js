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
    let baseTotal = total;
    let deliveryTotal = total + 5.0;
    if (delivery) {
        total = deliveryTotal;
    }

    $('.pickuplabel').text('Pick up in Redmond, WA ($' + baseTotal + ' total)');
    $('.deliverylabel').text('Fresh home delivery ($' + deliveryTotal + ' total)');
    $('.checkoutbtn').text('$' + total + ' total - Check out');
}

//https://script.google.com/macros/s/AKfycbyzHZyynvDl8gcTHJyJ9qb6uaJQaE2iZMqvOVAntZ6cRyZgRg/exec
//https://script.google.com/macros/s/AKfycbyzHZyynvDl8gcTHJyJ9qb6uaJQaE2iZMqvOVAntZ6cRyZgRg/exec
//https://script.google.com/macros/s/AKfycbyzHZyynvDl8gcTHJyJ9qb6uaJQaE2iZMqvOVAntZ6cRyZgRg/exec

var $form = $('form#orderForm'),
    url = 'https://script.google.com/macros/s/AKfycbyzHZyynvDl8gcTHJyJ9qb6uaJQaE2iZMqvOVAntZ6cRyZgRg/exec'

$('#orderForm').on('submit', function(e) {
  e.preventDefault();
  var jqxhr = $.ajax({
    url: url,
    method: "GET",
    dataType: "json",
    data: $form.serializeObject()
  }).done( function() {
    alert('success!');
  });
})