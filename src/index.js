/* eslint-disable */
import Vue from 'vue';
//全局组件
import {default as Button} from './button/button';
import {default as ButtonGroup} from './button/button-group'
import {default as CascaderItem} from './cascader/cascader-item'
import {default as Cascader} from './cascader/cascader'
import {default as CollapseItem} from './collapse/collapse-item'
import {default as Collapse} from './collapse/collapse'
import {default as Content} from './container/content'
import {default as Footer} from './container/footer'
import {default as Header} from './container/header'
import {default as Layout} from './container/layout'
import {default as Sider} from './container/sider'
import {default as Datepicker} from './datepicker/datepicker'
import {default as FormItem} from './form/form-item'
import {default as Form} from './form/form'
import {default as Input} from './form/input'
import {default as Icon} from './icon/icon'
import {default as Col} from './layout/col'
import {default as Row} from './layout/row'
import {default as Modal} from './notice/modal'
import {default as Popover} from './notice/popover'
import {default as Message} from './notice/message'
import {default as ToastPlugin} from './plugins/modal'
import {default as ModalPlugin} from './plugins/message'
import {default as SlideItem} from './slide/slide-item'
import {default as Slide} from './slide/slide'
import {default as Steps} from './step/steps'
import {default as Step} from './step/step'
import {default as Sticky} from './sticky/sticky'
import {default as TabBody} from './tab/tab-body'
import {default as TabHead} from './tab/tab-head'
import {default as TabItem} from './tab/tab-item'
import {default as TabPane} from './tab/tab-pane'
import {default as Tab} from './tab/tab'
import {default as Radio} from './radio/radio'
import {default as Switch} from './switch/switch'
import {default as Timepicker} from './timepicker/timepicker'
import {default as Spread} from './timepicker/spread'
import {default as Waterfall} from './waterfall/waterfall'
import {default as Menu} from './menu/menu'
import {default as MenuItem} from './menu/menu-item'
import {default as SubMenu} from './menu/sub-menu'
import {default as Pager} from './pager/pager'
import {default as Spin} from './spin/spin'
import {default as Dialog} from './dialog/dialog'
import {default as CountTo} from './countTo/countTo'
import {default as ImageCrop} from './imageCrop/imageCrop'
import {default as Pop} from './pop/index.vue'
import {default as Picker} from './picker/index';
import {default as Actionsheet} from './actionsheet/index';
import {default as Address} from './address/index';
import {default as AddressPicker} from './addressPicker/index';
import {default as AutoScroll} from './autoScroll/index';

//全局服务
import ShowToast from './toast/index'
import ShowLoading from './loading/index'
import ModalDialog from './dialog/index'


const components = [
    Button,
    ButtonGroup,
    CascaderItem,
    Cascader,
    CollapseItem,
    Collapse,
    Content,
    Footer,
    Header,
    Layout,
    Sider,
    Datepicker,
    FormItem,
    Form,
    Input,
    Icon,
    Col,
    Row,
    Modal,
    Popover,
    Message,
    SlideItem,
    Slide,
    Steps,
    Step,
    Sticky,
    TabBody,
    TabHead,
    TabItem,
    TabPane,
    Tab,
    Radio,
    Switch,
    Timepicker,
    Spread,
    Waterfall,
    Menu,
    MenuItem,
    SubMenu,
    Pager,
    Spin,
    Dialog,
    CountTo,
    ImageCrop,
    Pop,
    Actionsheet,
    Picker,
    Address,
    AddressPicker,
    AutoScroll
]

const install = function(Vue,option) {
    components.forEach(component => {
        Vue.component(component.name, component);
    });
    // 注册服务
    Vue.prototype.$toast = ShowToast;
    let loading = ShowLoading(Vue,option);
    Vue.prototype.$loading = loading;
    Vue.prototype.$dialog = Dialog;
    Vue.prototype.$modalDialog = ModalDialog;
    Vue.prototype.$ToastPlugin = ToastPlugin;
    Vue.prototype.$ModalPlugin = ModalPlugin;
}

if (typeof window !== 'undefined' && window.Vue) {
    install(window.Vue);
}

export default {
    version: '1.0.0',
    install
}