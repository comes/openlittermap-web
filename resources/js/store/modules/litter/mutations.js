import Vue from 'vue'
import { categories } from '../../../extra/categories'
import { litterkeys } from '../../../extra/litterkeys'

export const mutations = {

    /**
     * Add a new item to the collection
     */
    addItem (state, payload) {
        state.hasAddedNewTag = true; // Enable the Update Button
        Vue.set(state.items, payload.item, payload.quantity); // native name 
        Vue.set(state.categories[payload.reverse], payload.item, payload.quantity); // Reverse = English name for Category
    },

    /**
     * 
     */
    adminCreated (state, payload) {
        Vue.set(state.items, payload.item, payload.quantity);
        Vue.set(state.categories[payload.category], payload.item, payload.quantity);
    },

    /**
     * 
     */
    clearItems (state) {
        state.items = {};
    },

    /**
     * 
     */
    changeCategory (state, payload) {
        state.litterlang = payload.litterlang;
      	state.currentCategory = payload.cat;
      	state.currentItem = payload.currentItem;
    },

    /**
     * 
     */
    changeItem (state, payload) {
        state.currentItem = payload.i;
    },

    /**
     * Data from the user to verify
     * map database column name to frontend string
     */
    initAdminItems (state, payload)
    {
        categories.map(category => {
            if (payload.hasOwnProperty(category))
            {
                Object.entries(payload[category]).map(items => {
                    if (items[1])
                    {
                        let name = litterkeys[items[0]];
                        if (name)
                        {
                            Vue.set(state.items, name, items[1]);
                            Vue.set(state.categories[category], name, items[1]);
                        }
                    }
                });
            }
        });
    },

    /**
     * 
     */
    initPresence (state, payload) {
        state.presence = payload;
    },

    /**
     * 
     */
    removeItem (state, payload) {
        Vue.delete(state.items, payload.item);
        Vue.delete(state.categories[payload.category], payload.item);
    },

    /**
     * Change category[tag] = 0;
     */
    resetTag (state, payload)
    {
        let categories = Object.assign({}, state.categories);

        categories[payload.category][payload.tag] = 0;

        state.categories = categories;
        state.hasAddedNewTag = true; // activate update_with_new_tags button
    },

    /**
    * Reset empty state
    */
    resetLitter (state) {
        state.items = {};
        state.categories = {
            'Alcohol': {},
            'Art': {},
            'Brands': {},
            'Coastal': {},
            'Coffee': {},
            'Dumping': {},
            'Drugs': {},
            'Food': {},
            'Industrial': {},
            'Other': {},
            'Sanitary': {},
            'Smoking': {},
            'SoftDrinks': {},
            'TrashDog': {}
        }
    },

   /**
    * Set all existing items to 0
    */
    setAllItemsToZero (state) {
        let categories = Object.assign({}, state.categories);

        Object.entries(categories).map(keys => {
            let category = keys[0];
            let tags = keys[1]; // { Cans: 1, Bottles: 2 }

            if (Object.keys(categories[category]).length > 0) {
                Object.entries(tags).map(tag => {
                    categories[category][tag[0]] = 0;
                    state.items[tag[0]] = 0;
                });
            }
        });

        state.categories = Object.assign({}, categories);
    },

    /**
     * 
     */
    setLang(state, payload) {
      	state.categoryNames = payload.categoryNames;
      	state.currentCategory = payload.currentCategory;
      	state.currentItem = payload.currentItem;
      	state.litterlang = payload.litterlang;
    },

    /**
     * 
     */
    togglePresence(state) {
        state.presence = ! state.presence;
    },

    /**
     * 
     */
    toggleSubmit(state) {
  	    state.submitting = ! state.submitting;
    }

}