import { App, Plugin } from 'vue';

// Import vue components
import 'material-design-icons/iconfont/material-icons.css'
import './styles/main.scss'
import * as components from '@/controllers';

// install function executed by Vue.use()
const install: Exclude<Plugin['install'], undefined> = function installFluVueFramework(app: App) {
  Object.entries(components).forEach(([componentName, component]) => {
    app.component(componentName, component);
  });
};

// Create module definition for Vue.use()
export default install;

// To allow individual component use, export components
// each can be registered via Vue.component()
export * from '@/controllers';
