export const mutations = {

    /**
     * Update countries + global metadata
     */
    setCountries (state, payload)
    {
        state.locations = payload.countries;
        state.globalLeaders = JSON.parse(payload.globalLeaders);
        state.total_litter = payload.total_litter;
        state.total_photos = payload.total_photos;
        state.level.previousXp = payload.previousXp;
        state.level.nextXp = payload.nextXp;
    },

    /**
     * Update States + parent country
     */
    setStates (state, payload)
    {
        state.locations = payload.states;
        state.country = payload.country;
    },

    /**
     * Update Cities + parent country, state
     */
    setCities (state, payload)
    {
        state.locations = payload.cities;
        state.country = payload.country;
        state.state = payload.state;
    }


};