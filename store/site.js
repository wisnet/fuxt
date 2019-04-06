export const state = () => ({
  menuOpened: false,
  breakpoint: "",
  referral: ""
})

export const mutations = {
    SET_BREAKPOINT(state, breakpoint) {
        state.breakpoint = breakpoint
    },
    OPEN_MENU(state) {
        state.menuOpened = true
    },
    CLOSE_MENU(state) {
        state.menuOpened = false
    },
    UPDATE_REFERRAL_ROUTE(state, referral) {
        state.referral = referral
    }
}

//Actions

// Wite action that will take a page object and set the nessesary data for OG