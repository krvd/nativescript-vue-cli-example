<template>
    <Page class="page">
        <ActionBar class="action-bar" title="test">
        </ActionBar>

        <StackLayout>
            <Button @tap="setReceiver" text="set receiver" class="btn btn-outline"/>
            <Button @tap="showAppInfo" text="show app info" class="btn btn-outline"/>
            <Label :text="battery" alignSelf="baseline" class="h2"/>
        </StackLayout>

    </Page>
</template>

<script>
    const application = require('tns-core-modules/application');

    export default {
        data() {
            return {
                battery: 0
            }
        },

        methods: {
            setReceiver() {
                application.android.registerBroadcastReceiver(android.content.Intent.ACTION_BATTERY_CHANGED, (context, intent) => {
                    const level = intent.getIntExtra(android.os.BatteryManager.EXTRA_LEVEL, -1);
                    const scale = intent.getIntExtra(android.os.BatteryManager.EXTRA_SCALE, -1);
                    const percent = (level / scale) * 100.0;
                    this.battery = percent;
                    console.log('value changed', percent);
                });
            },
            showAppInfo() {
                console.log(application.android);
            }
        }
    };
</script>
