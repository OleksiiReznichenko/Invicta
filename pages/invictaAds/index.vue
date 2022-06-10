<template>
    <div class="root">
        <img src="@/assets/img/cornerLight.png" alt="Corner light" class="corner-light">
        <div class="invicta-ads-page section section-page">
            <div class="content">
                <div class="page-sequence">
                    <nuxt-link to="/">Main</nuxt-link>
                    <img src="@/assets/svg/arrowSmall.svg" alt="Arrow" class="arrow">
                    <span>Invicta.ads</span>
                </div>
                <div class="page-title-container">
                    <h1 class="page-title">Invicta.ads</h1>
                    <button @click="addNewCampaign" class="btn btn-gradient create-campaign-button"><span>Create new campaign</span></button>
                </div>
                <div @click="toggleEvent" class="main-content">
                    <div class="campaigns-container campaigns-active-container">
                        <h2 class="title">Active</h2>
                        <h3 v-if="campaignsActive.length == 0" class="no-campaigns">You have no active campaigns</h3>
                        <div v-if="campaignsActive.length > 0" class="campaigns-active">
                            <InvictaAdsCampaign
                            v-for="(campaign, index) in campaignsActive"
                            :key="campaign.id"
                            :index='"active" + index'
                            :id='campaign.id'
                            :type='campaign.type'
                            :customName='campaign.customName'
                            :bannerTypeBase='campaign.bannerType'
                            :itemsAmountBase='campaign.itemsAmount'
                            :currentDayBase='campaign.currentDay'
                            :priorityBase='campaign.priority'
                            :sales='campaign.sales'
                            :revenue='campaign.revenue'
                            :chartDataObject='campaign.chartData'
                            :bannerSrc='campaign.bannerSrc'
                            :cardsIds='campaign.cardsIds'
                            />
                        </div>
                    </div>
                    <div class="campaigns-container campaigns-archived-container">
                        <h2 class="title">Archived</h2>
                        <h3 v-if="campaignsArchived.length == 0" class="no-campaigns">You have no archived campaigns</h3>
                        <div v-if="campaignsArchived.length > 0" class="campaigns-archived">
                            <InvictaAdsCampaign
                            v-for="(campaign, index) in campaignsArchived"
                            :key="campaign.id"
                            :index='"archived" + index'
                            :id='campaign.id'
                            :type='campaign.type'
                            :customName='campaign.customName'
                            :bannerTypeBase='campaign.bannerType'
                            :itemsAmountBase='campaign.itemsAmount'
                            :currentDayBase='campaign.currentDay'
                            :priorityBase='campaign.priority'
                            :sales='campaign.sales'
                            :revenue='campaign.revenue'
                            :chartDataObject='campaign.chartData'
                            :bannerSrc='campaign.bannerSrc'
                            :cardsIds='campaign.cardsIds'
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

    data() {
        return {
            userNotComp: {},
            campaignsActiveNotCopm: [],
            campaignsArchivedNotComp: [],
        }
    },

    watch: {
        'user.campaigns'() {
            this.campaignsActiveNotCopm = this.user.campaigns.filter(el => {
                return el.type === 'active';
            });
            
            this.campaignsArchivedNotComp = this.user.campaigns.filter(el => {
                return el.type === 'archived';
            });
        }
    },

    computed: {
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
        // USER
        user() {
            return this.userNotComp;
        },
        
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
        // CAMPAIGNS ACTIVE ARRAY
        campaignsActive() {
            return this.campaignsActiveNotCopm;
        },
        
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
        // CAMPAIGNS ARCHIVED ARRAY
        campaignsArchived() {
            return this.campaignsArchivedNotComp;
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
        },
        
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
        // ADD NEW CAMPAIGN
        addNewCampaign() {
            const newCampaignObject = {
                id: (this.$_uid * Date.now()).toString(),
                type: 'active',
                customName: 'New campaign',
                bannerType: 'Vertical',
                bannerSrc: null,
                itemsAmount: 6,
                cardsIds: [
                    null,
                    null,
                    null,
                    null,
                    null,
                    null,
                    null,
                    null,
                ],
                sales: {
                    daily: 1,
                    weekly: 2,
                    monthly: 5,
                    yearly: 9,
                    allTime: 10
                },
                revenue: {
                    daily: 1,
                    weekly: 2,
                    monthly: 5,
                    yearly: 9,
                    allTime: 10
                },
                chartData: {
                    weekly: [10, 0, 5, 10, 15, 9, 8],
                    monthly: [5, 2, 22, 10],
                    yearly: [13, 4, 15, 8, 1, 3],
                    allTime: [10, 0, 5, 5, 2, 22, 10],
                }
            }

            this.$store.commit('users/addNewCampaign', {userId: this.user.id, newCampaign: newCampaignObject});
        }
    },

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    // GET BASE ARRAYS
    created () {
        this.userNotComp = this.$store.state.users.users.find(el => {
            return el.id === this.$store.state.user.id;
        })
        
        this.campaignsActiveNotCopm = this.userNotComp.campaigns.filter(el => {
            return el.type === 'active';
        });
        
        this.campaignsArchivedNotComp = this.userNotComp.campaigns.filter(el => {
            return el.type === 'archived';
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
            
        @media only screen and (max-width: 850px) {
            width: 66%;
            margin: 0 auto;
        }

        @media only screen and (max-width: 600px) {
            width: 100%;
        }


        .page-title-container {
            display: flex;
            justify-content: space-between;
            align-items: flex-start;
            margin-bottom: 4rem;

            @media only screen and (max-width: 850px) {
                flex-direction: column;
                justify-content: flex-start;
                align-items: flex-start;
            }

            .page-title {
                margin-bottom: 0;
            }

            .create-campaign-button {
                padding: 1rem 4rem;
                border-radius: 6px !important;
                font-size: 1.6rem;
                font-weight: 500 !important;

                @media only screen and (max-width: 850px) {
                    margin-top: 1rem;
                    padding: 1.25rem 5.5rem;
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