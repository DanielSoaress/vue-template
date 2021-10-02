import { alertSwal, navigate, notify } from '../../../util';
import { api } from '../../../config';
import { router } from '../../../config';

export default {
  namespaced: true,
  state: {
    datasource: [],
    pagination: {
      current_page: 1,
      per_page: 5,
      total: 0,
      search: '',
      sort: '',
      order: ''
    },
    loading: false,
    success: false,
    error: false
  },

  getters: {
    loading: state => state.loading,
    datasource: state => state.datasource,
    pagination: state => state.pagination,
    success: state => state.success,
    error: state => state.error
  },

  actions: {
    // LISTAR
    listar: async ({ commit, state }, params = state.pagination) => {
      /*try {
        commit('SET_LOADING');
        const response = await api.get('example', { params });
        commit('SET_DATASOURCE', response.data);
      } catch (error) {
        commit('SET_ERROR');
        notify('error', error.response.data.error.message);
      }*/
    },

    // CADASTRAR
    cadastrar: async ({ commit }, data) => {
      /*try {
        await commit('SET_LOADING');
        const response = await api.post('example', data);
        commit('SET_SUCCESS');
        notify('success', response.data.message);
        navigate(router.gestao.parametro.fullPath);
      } catch (error) {
        commit('SET_ERROR', error);
      }*/
    },

    // ATUALIZAR
    atualizar: async ({ commit }, data) => {
      /*try {
        commit('SET_LOADING');
        const response = await api.put(`example/${data._id}`, data);
        commit('SET_SUCCESS');
        notify('success', response.data.message);
        navigate(router.gestao.parametro.fullPath);
      } catch (error) {
        commit('SET_ERROR');
        notify('error', error.response.data.error.message);
      }*/
    },

    // EXIBIR
    exibir: async ({ commit }, id) => {
      /*try {
        commit('SET_LOADING');
        const response = await api.get(`example/${id}`);
        commit('SET_SUCCESS');
        return response.data;
      } catch (error) {
        commit('SET_ERROR');
        notify('error', error.response.data.error.message);
        navigate(router.gestao.parametro.fullPath);
      }*/
    },

    // EXCLUIR
    excluir: async ({ commit, dispatch }, id) => {
      /*try {
        const confirm = await alertSwal('warning', 'Confirma exclusão?');
        if (confirm) {
          const response = await api.delete(`example/${id}`);
          commit('SET_SUCCESS');
          notify('success', response.data.message);
          dispatch('listar');
        }
      } catch (error) {
        commit('SET_ERROR');
        alertSwal(
          'error',
          'Exclusão não realizada',
          error.response.data.error.message
        );
      }*/
    }
  },

  mutations: {
    SET_LOADING: state => {
      state.loading = true;
      state.success = false;
      state.error = false;
      state.datasource = [];
    },
    SET_SUCCESS: state => {
      state.success = true;
      state.loading = false;
      state.error = false;
    },
    SET_ERROR: (state, payload = true) => {
      state.loading = false;
      state.success = false;
      state.error = payload;
    },
    SET_DATASOURCE: (state, payload) => {
      const {
        data,
        current_page,
        per_page,
        total,
        search,
        order,
        sort
      } = payload;
      state.datasource = data;
      state.pagination = {
        ...state.pagination,
        current_page,
        per_page,
        total,
        search,
        order,
        sort
      };
      state.success = true;
      state.loading = false;
    }
  }
};