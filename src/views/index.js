import Drag from './Drag'
import DragItem from './DragItem'

const components = [
  Drag,
  DragItem,
]

const install = Vue => {
  if (install.installed) return;
  components.map(component => Vue.component(component.name, component))
  Vue.use(watermark)
}

if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue)
}

export {
  install,
  Drag,
  DragItem,
}

export default {
  install,
  Drag,
  DragItem,
}
