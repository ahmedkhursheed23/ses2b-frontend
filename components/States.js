const { atom, selector } = require("recoil");

const sidebarOpenState =atom ({
    key: 'sidebarOpenState',
    default: false
})
const currentUserState =atom ({
    key: 'curerntUserState',
    default: null
})

export { sidebarOpenState, currentUserState }