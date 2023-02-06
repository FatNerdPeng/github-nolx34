export const useSystem = defineStore('system', {
  state: () => ({}),

  getters: {
    messageBox: () => useNuxtApp().vueApp.config.globalProperties.$msgbox,
    messageInstance: () => useNuxtApp().vueApp.config.globalProperties.$message,
  },

  actions: {
    mainBodyChangeAction(params) {
      console.log(222);
      return navigateTo({
        path: params?.path,
        query: params?.query,
      });
    },
    searchNftAction() {
      console.log(111);
      this.mainBodyChangeAction({
        path: '/assets',
        query: { type: 'SEARCH' },
      });
    },
  },
});

if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useSystem, import.meta.hot));
}
