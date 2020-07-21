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

const scriptURL = 'https://script.google.com/macros/s/AKfycbyzHZyynvDl8gcTHJyJ9qb6uaJQaE2iZMqvOVAntZ6cRyZgRg/exec';
const form = document.forms['orderForm'];

form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form)})
      .then(response => console.log('Success!', response))
      .catch(error => console.error('Error!', error.message))
});