// primevue.js
import PrimeVue from 'primevue/config';
import 'primevue/resources/themes/saga-blue/theme.css'; // Choose your theme
import 'primevue/resources/primevue.min.css';

// eslint-disable-next-line import/no-anonymous-default-export
export default (app) => {
  app.use(PrimeVue);
};
