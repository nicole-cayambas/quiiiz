import create from 'zustand'

const defaultState = {
    page: 'Home',
    user: {},
}

const usePageStore = create((set) => ({
    page: defaultState.page,
    user: defaultState.user,
}))

export {usePageStore}