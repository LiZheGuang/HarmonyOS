import router from '@system.router';
export default {
    data: {
        title: "",
        textList:  [
            {value: 'onion'},
            {value: 'onion'},
            {value: 'onion'},
            {value: 'onion'},
            {value: 'onion'}],
    },
    onInit() {
        this.title = this.$t('strings.world');
    },
    clickNextPage(){
        console.log('tiaozhuan');
        router.push ({
            uri: 'pages/detail/detail',
        });

    }
}