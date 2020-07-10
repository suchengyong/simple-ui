/* eslint-disable */
import myLoading from './loading.vue';

function showLoading(Vue,options) {
    const Loading = Vue.extend(myLoading);
    const Profile = new Loading({
        el: document.createElement('div')
    });
        
    document.body.appendChild(Profile.$el);
        
    if(options){
        if(options.icon)
            Profile.icon = options.icon;
        if(options.progressColor)
            Profile.progressColor = options.progressColor;
    }
    let myLoadingMethod = {
        open(text) {
            Profile.show = true;
        if(text)
            Profile.text = text;
        },
        hide() {
            Profile.show = false;
        }
    };
    return myLoadingMethod
}

export default showLoading