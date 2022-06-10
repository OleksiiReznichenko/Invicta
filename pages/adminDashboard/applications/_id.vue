<template>
    <div class="root">
        <img src="@/assets/img/cornerLight.png" alt="Corner light" class="corner-light">
        <div class="application-id-page form-page section section-page">
            <div class="content">
                <div class="page-sequence">
                    <nuxt-link to="/">Main</nuxt-link>
                    <img src="@/assets/svg/arrowSmall.svg" alt="Arrow" class="arrow">
                    <span>Application ID</span>
                </div>

                <span :class="addStatusClass" class="application-status">{{application.status}} application</span>
                <h1 class="page-title">{{application.id}}</h1>

                <div class="form-container">
                    <div class="form">
                        <div class="input-group">
                            <label for="username">Username</label>
                            <input class="full-width" type="text" id="username" :value="user.username" placeholder="@antoniojr" readonly>
                        </div>
                        <div class="input-group textarea-group">
                            <label for="why">Why</label>
                            <textarea id="why" :value="application.why" name="why" cols="30" rows="3" wrap="soft" placeholder="No why" readonly></textarea>
                        </div>
                        <div class="input-group textarea-group">
                            <label for="pastExperience">Past Experience</label>
                            <textarea id="pastExperience" :value="application.pastExperience" name="pastExperience" cols="30" rows="3" wrap="soft" placeholder="No past experience" readonly></textarea>
                        </div>
                        <div class="input-group textarea-group">
                            <label for="lookingToSell">Looking to sell</label>
                            <textarea id="lookingToSell" :value="application.lookingToSell" name="lookingToSell" cols="30" rows="3" wrap="soft" placeholder="No looking to sell" readonly></textarea>
                        </div>
                        <div class="buttons">
                            <button v-if="hideCloseButton" @click="accept" class="btn btn-gradient btn-medium"><span>Accept</span></button>
                            <button v-if="hideCloseButton" @click="deny" class="btn btn-gradient btn-medium"><span>Deny</span></button>
                        </div>
                        <nuxt-link v-if="!hideCloseButton" to="/adminDashboard" class="btn btn-gradient btn-medium"><span>Back to dashboard</span></nuxt-link>
                    </div>
                    <img src="@/assets/img/user.png" alt="application" class="form-image">
                </div>
            </div>

        </div>
    </div>
</template>

<script>
export default {
    middleware: ['notLoggedIn', 'isApplicationIdExist'],

    computed: {
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
        // ADD CLASS TO STATUS BASED ON STATUS
        addStatusClass() {
            if (this.application.status) {
                if (this.application.status === 'completed' || 
                this.application.status === 'accepted' ||
                this.application.status === 'closed') {
                    return 'status-green';
                } else if (this.application.status === 'denied') {
                    return 'status-red';
                } else if (this.application.status === 'pending' ||
                this.application.status === 'opened') {
                    return 'status-yellow';
                }
            } else {
                return false;
            }
        },
        
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
        // HIDE CLOSE BUTTON
        hideCloseButton() {
            if (this.application.status === 'completed' || 
            this.application.status === 'accepted' ||
            this.application.status === 'closed' ||
            this.application.status === 'denied') {
                return false;
            } else {
                return true;
            }
        },
    },

    methods: {
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
        // ACCEPT
        accept() {
            this.$store.commit('adminDashboard/changeApplicationStatus', {id: this.application.id, newStatus: 'accepted'});
            this.$store.dispatch('showNotificationWindow', {
                text: 'Application accepted successfully', 
                isBad: false
            });
        },
        
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
        // DENY
        deny() {
            this.$store.commit('adminDashboard/changeApplicationStatus', {id: this.application.id, newStatus: 'denied'});
            this.$store.dispatch('showNotificationWindow', {
                text: 'Application denied successfully', 
                isBad: false
            });
        },
    },
    
    created () {
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
        // FIND APPLICATION
        this.application = this.$store.state.adminDashboard.applications.find(el => {
            return el.id === this.$route.params.id;
        });

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
        // FIND USER
        this.user = this.$store.state.users.users.find(el => {
            return el.id === this.application.userId;
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

.application-id-page {
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
        
        .application-status {
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
            width: 50.5rem;
            
            @media only screen and (max-width: 850px) {
                width: 100%;
            }
        }
    }
}
</style>