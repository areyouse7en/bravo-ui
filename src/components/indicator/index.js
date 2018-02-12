import Vue from 'vue'
import tpl from './index.vue'

const Indicator = Vue.extend(tpl)
// 实例
let instance

export default {
  open() {
    if (!instance) {
      // 装载实例
      instance = new Indicator().$mount(document.createElement('div'));
    }
    if (instance.visible) return
    // 添加至页面
    document.body.appendChild(instance.$el)

    Vue.nextTick(() => {
      // 等DOM更新
      instance.visible = true
    });
  },
  close() {
    if (instance) {
      instance.visible = false
    }
  }
};