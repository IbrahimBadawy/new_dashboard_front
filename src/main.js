import "primeicons/primeicons.css";
import "./style.css";
import "./flags.css";

import { createApp } from "vue";
import router from './router' // import the router
import PrimeVue from "primevue/config";
import ConfirmationService from 'primevue/confirmationservice'
import DialogService from 'primevue/dialogservice'
import ToastService from 'primevue/toastservice';

import App from "./App.vue";
import AppState from './plugins/appState.js';
import ThemeSwitcher from './components/ThemeSwitcher.vue';
import SpeedDial1 from './components/SpeedDial1.vue';

import Noir from './presets/Noir.js';

import Toast from 'primevue/toast';
import Tree from 'primevue/tree';


const app = createApp(App);

app.use(PrimeVue, {
    theme: {
        preset: Noir,
        options: {
            prefix: 'p',
            darkModeSelector: '.p-dark',
            cssLayer: false,
        }
    }
});
app.use(AppState);
app.use(router) // tell the app to use the router
app.use(ConfirmationService);
app.use(ToastService);
app.use(DialogService);


app.component('Toast', Toast);
app.component('Tree', Tree);

app.component('ThemeSwitcher', ThemeSwitcher);
app.component('SpeedDial1', SpeedDial1);




app.mount("#app");
