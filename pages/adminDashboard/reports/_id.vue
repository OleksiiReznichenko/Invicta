<template>
    <div class="root">
        <img src="@/assets/img/cornerLight.png" alt="Corner light" class="corner-light">
        <div class="report-id-page form-page section section-page">
            <div class="content">
                <div class="page-sequence">
                    <nuxt-link to="/">Main</nuxt-link>
                    <img src="@/assets/svg/arrowSmall.svg" alt="Arrow" class="arrow">
                    <span>Report ID</span>
                </div>

                <span :class="addStatusClass" class="report-status">{{report.status}} report</span>
                <h1 class="page-title">{{report.id}}</h1>

                <div class="form-container">
                    <div class="form">
                        <div class="input-group">
                            <label for="category">Category</label>
                            <input class="full-width" :value="report.category" type="text" id="category" placeholder="Misinformation" readonly>
                        </div>
                        <div class="flex-container">
                            <div class="input-group">
                                <label for="reporter">Reporter</label>
                                <input type="text" id="reporter" :value="reporter.username" placeholder="@antoniojr" readonly>
                            </div>
                            <div class="input-group">
                                <label for="seller">Seller</label>
                                <input type="text" id="seller" :value="seller.username" placeholder="@johnjr" readonly>
                            </div>
                        </div>
                        <div class="input-group">
                            <label for="cards">Cards</label>
                            <input class="full-width" type="text" id="cards" :value="report.cards" placeholder="No cards" readonly>
                        </div>
                        <div class="input-group textarea-group">
                            <label for="description">Description</label>
                            <textarea id="description" :value="report.description" name="description" cols="30" rows="3" wrap="soft" placeholder="No description" readonly></textarea>
                        </div>
                        <div class="buttons">
                            <button v-if="hideCloseButton" @click="close" class="btn btn-gradient btn-medium"><span>Close Report</span></button>
                            <nuxt-link v-if="hideCloseButton" to="/adminDashboard" class="btn btn-transparent btn-medium"><div class="background"></div><span>Back to dashboard</span></nuxt-link>
                        </div>
                        <nuxt-link v-if="!hideCloseButton" to="/adminDashboard" class="btn btn-gradient btn-medium"><span>Back to dashboard</span></nuxt-link>
                    </div>
                    <img src="@/assets/img/report.png" alt="Report" class="form-image">
                </div>
            </div>

        </div>
    </div>
</template>

<script>
export default {
    middleware: ['notLoggedIn', 'isReportIdExist'],

    computed: {
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
        // ADD CLASS TO STATUS BASED ON STATUS
        addStatusClass() {
            if (this.report.status) {
                if (this.report.status === 'completed' || 
                this.report.status === 'accepted' ||
                this.report.status === 'closed') {
                    return 'status-green';
                } else if (this.report.status === 'denied') {
                    return 'status-red';
                } else if (this.report.status === 'pending' ||
                this.report.status === 'opened') {
                    return 'status-yellow';
                }
            } else {
                return false;
            }
        },
        
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
        // HIDE CLOSE BUTTON
        hideCloseButton() {
            if (this.report.status === 'completed' || 
            this.report.status === 'accepted' ||
            this.report.status === 'closed') {
                return false;
            } else {
                return true;
            }
        },
    },

    methods: {
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
        // CLOSE REPORT
        close() {
            this.$store.commit('adminDashboard/changeReportStatus', {id: this.report.id, newStatus: 'closed'});
            this.$store.dispatch('showNotificationWindow', {
                text: 'Report closed successfully', 
                isBad: false
            });
        },
    },
    
    created () {
        // FIND REPORT
        this.report = this.$store.state.adminDashboard.reports.find(el => {
            return el.id === this.$route.params.id;
        });

        // FIND REPORTER
        this.reporter = this.$store.state.users.users.find(el => {
            return el.id === this.report.reporterId;
        })

        // FIND SELLER
        this.seller = this.$store.state.users.users.find(el => {
            return el.id === this.report.sellerId;
        })
    },
}
</script>

<style lang="scss" scoped>
.status-green {
    color: $color-green;
}

.status-red {
    color: $color-orange;
}

.status-yellow {
    color: #ffc107;
}

.corner-light {
    display: block !important;
    top: -15rem;
}

.report-id-page {
    margin-bottom: 5rem;
    min-height: calc(100vh - 11rem);
            
    @media only screen and (max-width: 850px) {
        min-height: calc(100vh - 15rem);
    }
            
    @media only screen and (max-width: 850px) {
        margin-bottom: 15rem;
    }


    .content {
        position: relative;
        z-index: 100;
            
        @media only screen and (max-width: 850px) {
            width: 66%;
            margin: 0 auto;
        }

        @media only screen and (max-width: 600px) {
            width: 100%;
        }

        .page-title {
            margin-bottom: 1.75rem;
        }
        
        .report-status {
            display: inline-block;
            margin-bottom: 1rem;
        }

        .buttons {
            display: flex;
            align-items: center;

            .btn {
                &:hover {
                    transform: scale(1.05);
                    border: 1px solid transparent;
                }
            }

            .btn-gradient {
                &:hover::before {
                    opacity: 1;
                }
            }

            .btn-transparent {
                &:hover::before {
                    opacity: 0;
                }

                &:hover::after {
                    opacity: 1;
                }
            }

            .btn-gradient {
                margin-right: 1.5rem;
            }
        }

        .btn {
            .background {
                background-color: $color-grey-dark;
            }

            @media only screen and (max-width: 400px) {
                padding: 1.4rem 2.5rem;
            }
        }

        .form-image {
            height: 100%;
            right: -6%;
            
            @media only screen and (max-width: 1100px) {
                height: 90%;
            }
            
            @media only screen and (max-width: 950px) {
                right: -10%;
                height: 95%;
            }
            
            @media only screen and (max-width: 850px) {
                display: none;
            }
        }

        .form-container {
            width: 100%;
        }

        .form {
            width: fit-content;
            
            @media only screen and (max-width: 850px) {
                width: 100%;
            }
        }
    }
}
</style>