export const state = () => ({
    campaigns: {
        active: [
            {
                id: 'activeCampaign1',
                type: 'active',
                customName: 'Campaign 1',
                name: 'Horizontal banner',
                itemsAmount: 6
            },
            {
                id: 'activeCampaign2',
                type: 'active',
                customName: 'Campaign 2',
                name: 'Vertical banner',
                itemsAmount: 4
            },
        ],
        archived: [
            {
                id: 'activeCampaign1',
                type: 'archived',
                customName: 'Campaign 1',
                name: 'Horizontal banner',
                itemsAmount: 6
            },
            {
                id: 'activeCampaign2',
                type: 'archived',
                customName: 'Campaign 2',
                name: 'Vertical banner',
                itemsAmount: 4
            },
        ],
    }
})

export const mutations = {
    changeCustomName(state, {id, type, newName}) {
        const item = state.campaigns[type]?.find(el => {
            return el.id === id;
        })

        if (item) {
            item.customName = newName;
        }
    },
}