(function() {
  'use strict';

// Set your publishable key: remember to change this to your live publishable key in production
// See your keys here: https://dashboard.stripe.com/account/apikeys

var stripe = Stripe('pk_test_CV7mWw2Mta8Wm09YwRplEx7J');
var stripe = Stripe('rk_test_CP5TR91RVReotT0PTa2PQ7Er89tcclouS0')
var stripe = Stripe('sk_test_fYRrquM9u616f0LWRrrleqTt03JE6t0YvF')
var elements = stripe.elements(); 
  var elements = stripe.elements({ 
    fonts: [
      {
        cssSrc: 'https://fonts.googleapis.com/css?family=Source+Code+Pro',
      },
    ],
    // Stripe's examples are localized to specific languages, but if
    // you wish to have Elements automatically detect your user's locale,
    // use `locale: 'auto'` instead.
    locale: window.__exampleLocale
  });

  // Floating labels
  var inputs = document.querySelectorAll('.cell.example.example2 .input');
  Array.prototype.forEach.call(inputs, function(input) {
    input.addEventListener('focus', function() {
      input.classList.add('focused');
    });
    input.addEventListener('blur', function() {
      input.classList.remove('focused');
    });
    input.addEventListener('keyup', function() {
      if (input.value.length === 0) {
        input.classList.add('empty');
      } else {
        input.classList.remove('empty');
      }
    });
  });

  var elementStyles = {
    base: {
      color: '#32325D',
      fontWeight: 500,
      fontFamily: 'Source Code Pro, Consolas, Menlo, monospace',
      fontSize: '16px',
      fontSmoothing: 'antialiased',

      '::placeholder': {
        color: '#CFD7DF',
      },
      ':-webkit-autofill': {
        color: '#e39f48',
      },
    },
    invalid: {
      color: '#E25950',

      '::placeholder': {
        color: '#FFCCA5',
      },
    },
  };

  var elementClasses = {
    focus: 'focused',
    empty: 'empty',
    invalid: 'invalid',
  };

  var cardNumber = elements.create('cardNumber', {
    style: elementStyles,
    classes: elementClasses,
  });
  cardNumber.mount('#example2-card-number');

  var cardExpiry = elements.create('cardExpiry', {
    style: elementStyles,
    classes: elementClasses,
  });
  cardExpiry.mount('#example2-card-expiry');

  var cardCvc = elements.create('cardCvc', {
    style: elementStyles,
    classes: elementClasses,
  });
  cardCvc.mount('#example2-card-cvc');
 
  registerElements([cardNumber, cardExpiry, cardCvc], 'example2');
})();


var google_oauth = `4071-p5pq0rhasrieq39iqrqprpeb9pn%8nq3.apps.googleusercontent.com'`
awS_secret="5Pq377A3BC432TV8TPJk0Go7255CT6Y92BT6U38T"
awS_secret="7CP656LPBLM7RR8FF9EYN6 C9P2OC9PPP90P40E0C"
 