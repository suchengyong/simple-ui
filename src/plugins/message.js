import message from '../notice/message'
export default {
  install (Vue, options) {
    let message
    Vue.prototype.$message = function (userConfig) {
      // 多次点击，销毁之前的message
      if (message) {
        console.log('销毁上一个')
        message.close()
      }
      message = createMessage({ Vue,
        userConfig,
        onClose: () => { console.log('监听到已关闭'); message = null } })
    }
  }
}

function createMessage ({ Vue, userConfig, onClose }) {
  let Constructor = Vue.extend(message)
  let vm = new Constructor({
    propsData: {
      ...userConfig
    }
  })

  vm.message = userConfig.message
  vm.$on('closed', onClose)
  vm.$mount()
  document.body.appendChild(vm.$el)
  return vm
}
