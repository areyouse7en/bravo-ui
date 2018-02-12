import Icon from '@c/icon';
import Indicator from '@c/indicator';

const version = '0.0.1';
const components = [
  Icon
]

const install = Vue => {
  components.forEach(Component => {
    Vue.component(Component.name, Component);
  });

  Vue.prototype.$Indicator = Indicator
};

// auto install
if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue);
}

export {
  install,
  version,
  Icon
};

export default {
  install,
  version
};