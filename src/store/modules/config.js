const state = {
    url: ""
}

// getters
const getters = {
    url: state => state.url
}

// actions
const actions = {
    updateUrl({ commit }, url) {
        commit("updateUrl", url)
    }
}

//mutations 突变
const mutations = {
    updateUrl(state, url) {
        state.url = url;
    }
}
export default {
    state,
    getters,
    actions,
    mutations
};