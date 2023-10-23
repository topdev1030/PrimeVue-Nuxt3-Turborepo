import Button from "./components/Button.vue";
import InputText from "./components/InputText.vue";
import primevue from './primevue.js';

export { Button, InputText };
// eslint-disable-next-line import/no-anonymous-default-export
export default (app: { use: (arg0: any) => void; }) => {
  app.use(primevue);
};