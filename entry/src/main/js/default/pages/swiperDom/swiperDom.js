// xxx.js
import device from '@system.device';
export default {
    data: {
        middleImage: '/common/tyk.7503bf3.png',
        middleImageTwo: '/common/kcjs.de82966.png',
    },
    swipeTo(e) {
        this.$element('swiper').swipeTo({index: 2});
    },
    showNext(type) {
        this.$element('swiper').showNext();
    },
    showPrevious(e) {
        this.$element('swiper').showPrevious();
    },
    clickGetConfig(){
        device.getInfo({
            success: function(data) {
                console.log('success get device info brand:' + data.brand);
            },
            fail: function(data, code) {
                console.log('fail get device info code:'+ code + ', data: ' + data);
            },
        });
    }
}
