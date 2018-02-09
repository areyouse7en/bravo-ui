import Icon from './icon';

const version = '0.0.1';
const components = [
  Icon
]

const install = Vue => {
  components.forEach(Component => {
    Vue.use(Component);
  });
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