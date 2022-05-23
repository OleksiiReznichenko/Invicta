<template>
    <div class="root">
        <img src="@/assets/img/cornerLight.png" alt="Corner light" class="corner-light">
        <div class="invicta-ads-page section">
            <div class="content">
                <div class="page-sequence">
                    <nuxt-link to="/">Main</nuxt-link>
                    <img src="@/assets/svg/arrowSmall.svg" alt="Arrow" class="arrow">
                    <span>Invicta.ads</span>
                </div>
                <div class="page-title-container">
                    <h1 class="page-title">Invicta.ads</h1>
                    <button class="btn btn-gradient create-campaign-button"><span>Create new campaign</span></button>
                </div>
                <div @click="toggleEvent" class="main-content">
                    <div class="campaigns-container campaigns-active-container">
                        <h2 class="title">Active</h2>
                        <h3 v-if="campaignsActive.length == 0" class="no-campaigns">You have no active campaigns</h3>
                        <div v-if="campaignsActive.length > 0" class="campaigns-active">
                            <InvictaAdsCampaign
                            v-for="campaign in campaignsActive"
                            :key="campaign.id"
                            :id='campaign.id'
                            :type='campaign.type'
                            :customName='campaign.customName'
                            :name='campaign.name'
                            :itemsAmount='campaign.itemsAmount'
                            />
                        </div>
                    </div>
                    <div class="campaigns-container campaigns-archived-container">
                        <h2 class="title">Archived</h2>
                        <h3 v-if="campaignsArchived.length == 0" class="no-campaigns">You have no archived campaigns</h3>
                        <div v-if="campaignsArchived.length > 0" class="campaigns-archived">
                            <InvictaAdsCampaign
                            v-for="campaign in campaignsArchived"
                            :key="campaign.id"
                            :id='campaign.id'
                            :customName='campaign.customName'
                            :name='campaign.name'
                            :itemsAmount='campaign.itemsAmount'
                            />
                        </div>
                    </div>
                </div>
            </div>

            <Footer />
        </div>
    </div>
</template>

<script>
import InvictaAdsCampaign from '@/components/elements/InvictaAdsCampaign';

export default {
    components: {
        InvictaAdsCampaign,
    },

    computed: {
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
        // CAMPAIGNS ACTIVE ARRAY
        campaignsActive() {
            return this.activeCampaigns;
        },
        
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
        // CAMPAIGNS ARCHIVED ARRAY
        campaignsArchived() {
            return this.archivedCampaigns;
        },
    },

    methods: {
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
        // TOGGLE EVENT
        toggleEvent(e) {
            const parent = e.target?.closest('.toggle-container');
            const customNameInput = parent?.querySelector('.custom-name');

            if (customNameInput?.classList.contains('not-disabled')) return;
            if (e.target.classList.contains('icon-container') || e.target.classList.contains('title-container__left')) {
                customNameInput.removeAttribute('disabled');

                customNameInput.classList.add('not-disabled');
                
                customNameInput.focus();
            } else {
                const titleContainer = e.target?.closest('.title-container');

                if (titleContainer && parent && !parent.classList.contains('animating')) {
                    const descriptionContainer = parent?.querySelector('.description-container');
                    const arrow = parent?.querySelector('.arrow');

                    let timeoutTime = 700;

                    this.$store.dispatch('slideToggle', {target: descriptionContainer, duration: 700})

                    arrow.classList.toggle('arrow-active');

                    parent.classList.add('animating');

                    setTimeout(() => {
                        parent.classList.remove('animating');
                    }, timeoutTime);
                }
            }
        }
    },

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    // GET BASE ARRAYS
    created () {
        this.activeCampaigns = this.$store.state.campaigns.campaigns.active.map(el => {
            return el
        });

        this.archivedCampaigns = this.$store.state.campaigns.campaigns.archived.map(el => {
            return el
        });
    }
}
</script>

<style lang="scss" scoped>
.invicta-ads-page {
    min-height: 80vh;

    .content {
        min-height: 70vh;
        position: relative;
        z-index: 100;


        .page-title-container {
            display: flex;
            justify-content: space-between;
            align-items: flex-start;

            @media only screen and (max-width: 500px) {
                flex-direction: column;
                justify-content: flex-start;
                align-items: flex-start;
            }

            .page-title {
                margin-bottom: 4rem;
            }

            .create-campaign-button {
                padding: .75rem 4rem;
                border-radius: 6px !important;
                font-weight: 500 !important;

                @media only screen and (max-width: 500px) {
                    margin-top: 1rem;
                    padding: 1rem 5.5rem;
                }

                &:before,
                &:after {
                    border-radius: 6px !important;
                }
            }
        }

        .campaigns-container {
            min-height: 200px;
            margin-bottom: 100px;
            position: relative;

            .no-campaigns {
                font-weight: 300 !important;
                font-size: 3.25rem;
                width: 90%;
                text-align: center;
                @include abs-center;
                top: calc(50% + 50px);
            }

            .title {
                font-size: 3.5rem;
            }
        }
    }
}
</style>