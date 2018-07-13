import Vue from 'nativescript-vue';

import TestPage from './components/TestPage';

import store from './store';

import './styles.scss';

// Uncommment the following to see NativeScript-Vue output logs
//Vue.config.silent = false;
const application = require('tns-core-modules/application');

application.android.registerBroadcastReceiver(android.content.Intent.ACTION_BATTERY_CHANGED, (context, intent) => {
    const level = intent.getIntExtra(android.os.BatteryManager.EXTRA_LEVEL, -1);
    const scale = intent.getIntExtra(android.os.BatteryManager.EXTRA_SCALE, -1);
    const percent = (level / scale) * 100.0;
    console.log('battery:', percent.toString());
});

new Vue({

  render: h => h(TestPage),

  store,

}).$start();
