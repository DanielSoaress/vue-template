import Vue from 'vue'

export default Vue.directive('filter', (el, binding, vnode) => {
  if (binding.arg === 'max-length') {
    let model = vnode.componentInstance
    let type = vnode.componentInstance.type
    let value = vnode.componentInstance.value.toString()
    let length = vnode.data.attrs.maxlength

    if (type === 'number' && value.length > length) {
      model.$emit('input', value.slice(0, length))
    }
  }
})
