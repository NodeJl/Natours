/* eslint-disable */
import axios from 'axios';
import { showAlert } from './alerts';

export const bookTour = async (tourId) => {
  try {
    const stripe = Stripe(
      'pk_test_51KjQpLDgT1s0i7PjVfavCDLIaaSAvwpfEucEUSk2WvEKuKfh5nw3wryranJDecU6vo6tsjLlKQdP2quW48AGh9Xu00hIekXUBl'
    );
    // 1) Get checkout session from APi
    const session = await axios(
      `http://127.0.0.1:3500/api/v1/bookings/checkout-session/${tourId}`
    );

    // 2) Create checkout form + charge credit card
    await stripe.redirectToCheckout({
      sessionId: session.data.session.id,
    });
  } catch (err) {
    showAlert('error', err);
  }

  // 3)
  // 4)
};
