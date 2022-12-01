import {  MutationTree, GetterTree , ActionTree } from 'vuex'

export const state = () => ({
    todos: [] as string[]
})

export type RootState = ReturnType<typeof state>

export const getters: GetterTree<RootState, RootState> = {
    todos: state => state.todos
}

export const mutations: MutationTree<RootState> = {
    ADD_TODO: (state, todo: string) => {
        state.todos.push(todo);
    },
    REMOVE_TODO: (state, todo: string) => {
        state.todos.splice(state.todos.indexOf(todo), 1)
    }
}

export const actions : ActionTree<RootState , RootState>={
    addtodo({commit} , todo: string){
        commit('ADD_TODO' , todo)
    } , 
    removetodo({commit} , todo: string){
        commit('REMOVE_TODO' , todo)
    }
}