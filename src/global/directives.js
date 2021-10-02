import filter from '../directives/filter';

/**
 * Você pode registrar as diretivas globais aqui e usá-las como um plug-in na sua instância principal do Vue
 */

const GlobalDirectives = {
  install(Vue) {
    Vue.directive('filter', filter);
  }
};

export default GlobalDirectives;
