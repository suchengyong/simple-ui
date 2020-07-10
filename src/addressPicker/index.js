/* eslint-disable */
import AddressPicker from './addressPicker.vue'
import VueScroll from 'vuescroll/dist/vuescroll-native'

AddressPicker.install = Vue => {
	Vue.use(VueScroll)
	Vue.component(AddressPicker.name, AddressPicker)
}

export default AddressPicker