// xxx.js
import device from '@system.device';
import router from '@system.router';

export default {
    data: {
        middleImage: '/common/tyk.7503bf3.png',
        middleImageTwo: '/common/videoDemo.mp4',
        imageAll:[{
            path:'/common/tyk.7503bf3.png',
            value:''}, {
            path:'/common/kcjs.de82966.png',
            value:''
        },{
            path:'/common/tyk.7503bf3.png',
            value:''
        },{
            path:'/common/kcjs.de82966.png',
            value:''
        }]
    },
    clickPlayVideo(){
        router.push ({
            uri: 'pages/videoOnion/videoOnion',
        });
    },
}
