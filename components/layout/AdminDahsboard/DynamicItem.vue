<template>
    <div class="item">
        <div class="desktop item-desktop">
            <div class="item-left">
                <div v-if="!foundUser && !userAvatar" class="cell item-column-one image-container">
                    <img v-if="photo" :src="photo" alt="image" class="image">
                        <span>{{firstColumnTextComp}}</span>
                </div>
                <nuxt-link v-if="foundUser" :to="'/users/' + foundUser.username" class="cell item-column-one image-container">
                    <img v-if="photo" :src="photo" alt="image" class="image">
                    <span>{{firstColumnTextComp}}</span>
                </nuxt-link>
                <nuxt-link v-if="userId" :to="'/users/' + firstColumnText" class="cell item-column-one image-container">
                    <img v-if="photo" :src="photo" alt="image" class="image">
                    <span>{{firstColumnTextComp}}</span>
                </nuxt-link>
                <span class="cell item-column-two">{{secondColumnTextComp}}</span>
                <span v-if="thirdColumnTextComp" :class="addStatusClassToThird" class="cell item-column-three">{{thirdColumnTextComp}}</span>
                <span v-if="fourthColumnTextComp" :class="addStatusClassToFourth" class="cell item-column-four">{{fourthColumnTextComp}}</span>
                <span v-if="fifthColumnTextComp" :class="addStatusClassToFifth" class="cell item-column-five">{{fifthColumnTextComp}}</span>
            </div>
            <div class="right buttons">
                <button v-if="componentTypeComp === 'users'" @click="rankDown" class="item-link rank-button rank-down">Rank down</button>
                <button v-if="componentTypeComp === 'users'" @click="rankUp" class="item-link rank-button">Rank up</button>
                <button v-if="componentTypeComp === 'products'" class="item-link poi-button">Make POI</button>
                <nuxt-link v-if="id && componentTypeComp !== 'products'" class="item-link" :to="'/adminDashboard/' + componentTypeComp + '/' + id">View</nuxt-link>
                <nuxt-link v-if="id && componentTypeComp === 'products'" class="item-link" :to="'/browse/' + id">View</nuxt-link>
            </div>
        </div>


        <div class="mobile item-mobile">
            <div class="flex-container flex-container-top border-bottom">
                <span class="item-id">{{idForMobileComp}}</span>
                <span :class="addStatusClassToMobileStatus" class="item-status">{{statusForMobileComp}}</span>
                <span v-if="componentTypeComp === 'transactions'" class="transaction-amount">{{fourthColumnTextComp}}$</span>
            </div>

            <div v-if="componentTypeComp !== 'interventions' && componentTypeComp !== 'reports'" class="flex-container border-bottom">
                <div v-if="!foundUser && !userAvatar" class="image-container">
                    <img v-if="photo" :src="photo" alt="image" class="image">
                    <span>{{firstColumnTextComp}}</span>
                </div>
                <nuxt-link v-if="foundUser" :to="'/users/' + foundUser.username" class="image-container">
                    <img v-if="photo" :src="photo" alt="image" class="image">
                    <span>{{firstColumnTextComp}}</span>
                </nuxt-link>
                <nuxt-link v-if="userId" :to="'/users/' + firstColumnText" class="image-container">
                    <img v-if="photo" :src="photo" alt="image" class="image">
                    <span>{{firstColumnTextComp}}</span>
                </nuxt-link>
            </div>
            
            <div v-if="componentTypeComp !== 'deposits' && componentTypeComp !== 'withdrawals' && componentTypeComp !== 'applications'" class="flex-container">
                <img v-if="componentTypeComp === 'users'" src="@/assets/svg/message.svg" alt="Icon" class="users-icon">
                <span v-if="componentTypeComp !== 'users'" class="item-title">{{infoTitleMobile}}</span>
                <span class="item-info">{{infoTextMobile}}</span>
            </div>

            <div :class="{'deposits-buttons': componentTypeComp === 'deposits' || componentTypeComp === 'withdrawals' || componentTypeComp === 'applications'}" v-if="componentTypeComp !== 'transactions'" class="buttons">
                <button v-if="componentTypeComp === 'users'" @click="rankDown" class="item-link rank-button rank-down">Rank down</button>
                <button v-if="componentTypeComp === 'users'" @click="rankUp" class="item-link rank-button">Rank up</button>
                <button v-if="componentTypeComp === 'products'" class="item-link poi-button">Make POI</button>
                <nuxt-link v-if="id && componentTypeComp !== 'products'" class="item-link" :to="'/adminDashboard/' + componentTypeComp + '/' + id">View</nuxt-link>
                <nuxt-link v-if="id && componentTypeComp === 'products'" class="item-link" :to="'/browse/' + id">View</nuxt-link>
                <span v-if="componentTypeComp === 'deposits' || componentTypeComp === 'withdrawals'" class="item-info">{{infoTextMobile}}</span>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: ['id', 'findUserId', 'userId', 'statusForMobile', 'isAdmin', 'userAvatar', 'firstColumnText', 'secondColumnText', 'thirdColumnText', 'fourthColumnText', 'fifthColumnText', 'componentType'],

    computed: {
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
        // COMPONENT TYPE
        componentTypeComp() {
            return this.componentType;
        },

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
        // GET ID FOR MOBILE
        idForMobileComp() {
            if (this.componentTypeComp === 'interventions' ||
            this.componentTypeComp === 'reports') {
                return this.firstColumnText;
            }

            return this.secondColumnText;
        },

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
        // GET STATUS FOR MOBILE
        statusForMobileComp() {
            if (this.statusForMobile) {
                return this.statusForMobile;
            }

            if (this.userStatus) {
                return this.userStatus;
            }

            return null;
        },

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
        // GET INFO TITLE FOR MOBILE
        infoTitleMobile() {
            if (this.componentTypeComp === 'interventions') {
                return 'Transaction ID: ';
            } else if (this.componentTypeComp === 'users') {
                return '';
            } else if (this.componentTypeComp === 'products') {
                return 'Name: ';
            } else if (this.componentTypeComp === 'transactions') {
                return 'Product Title: ';
            } else if (this.componentTypeComp === 'reports') {
                return 'Category: ';
            }
        },

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
        // GET INFO TEXT FOR MOBILE
        infoTextMobile() {
            if (this.componentTypeComp === 'interventions') {
                return this.secondColumnText;
            } else if (this.componentTypeComp === 'users') {
                return this.thirdColumnText;
            } else if (this.componentTypeComp === 'products') {
                return this.thirdColumnText;
            } else if (this.componentTypeComp === 'transactions') {
                return this.thirdColumnText;
            } else if (this.componentTypeComp === 'reports') {
                return this.secondColumnText;
            } else if (this.componentTypeComp === 'deposits' ||
            this.componentTypeComp === 'withdrawals') {
                return 'Amount: ' + this.thirdColumnText;
            }
            return null;
        },

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
        // ADD CLASS TO MOBILE STATUS BASED ON STATUS
        addStatusClassToMobileStatus() {
            if (this.statusForMobileComp) {
                const status = this.statusForMobileComp?.toLowerCase();
                if (!status) return;
                if (status === 'completed' || 
                status === 'accepted' ||
                status === 'closed' ||
                status === 'admin') {
                    return 'status-green';
                } else if (status === 'denied') {
                    return 'status-red';
                } else if (status === 'pending' ||
                status === 'open') {
                    return 'status-yellow';
                } else if (status === 'user') {
                    return 'status-grey';
                }
            } else {
                return false;
            }
        },

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
        // ADD STATUS CLASS TO THIRD COLUMN IN DESKTOP
        addStatusClassToThird() {
            if (this.componentTypeComp === 'interventions' ||
            this.componentTypeComp === 'applications' ||
            this.componentTypeComp === 'reports') {
                const status = this.thirdColumnTextComp?.toLowerCase();
                if (!status) return;
                if (status === 'completed' || 
                status === 'accepted' ||
                status === 'closed') {
                    return 'status-green';
                } else if (status === 'denied') {
                    return 'status-red';
                } else if (status === 'pending' ||
                status === 'opened') {
                    return 'status-yellow';
                }
            } else {
                return false;
            }
        },

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
        // ADD STATUS CLASS TO FOURTH COLUMN IN DESKTOP
        addStatusClassToFourth() {
            if (this.componentTypeComp === 'users') {
                const status = this.fourthColumnTextComp?.toLowerCase();
                if (!status) return;
                if (status === 'admin') {
                    return 'status-red';
                } else if (status === 'user') {
                    return 'status-grey';
                }
            } else {
                return false;
            }
        },

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
        // ADD STATUS CLASS TO FIFTH COLUMN IN DESKTOP
        addStatusClassToFifth() {
            if (this.componentTypeComp === 'deposits' ||
            this.componentTypeComp === 'withdrawals') {
                const status = this.fifthColumnTextComp?.toLowerCase();
                if (!status) return;
                if (status === 'completed' || 
                status === 'accepted' ||
                status === 'closed') {
                    return 'status-green';
                } else if (status === 'denied') {
                    return 'status-red';
                } else if (status === 'pending' ||
                status === 'opened') {
                    return 'status-yellow';
                }
            } else {
                return false;
            }
        },

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
        // FIND USER
        foundUser() {
            if (!this.findUserId) return;
            return this.$store.state.users.users.find(el => {
                return el.id === this.findUserId;
            })
        },

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
        // GET USE AVATAR
        photo() {
            if (this.userAvatar) {
                return this.userAvatar;
            }
            if (!this.foundUser) return;
            return this.foundUser.avatar;
        },

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
        // GET USER USERNAME
        username() {
            if (!this.foundUser) return;
            return this.foundUser.username;
        },

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
        // GET USER STATUS
        userStatus() {
            if (this.componentTypeComp !== 'users') return;
            if (this.isAdmin) {
                return 'Admin';
            } else {
                return 'User';
            }
        },

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
        // FIRST COLUMN TEXT DESKTOP
        firstColumnTextComp() {
            if (this.firstColumnText) {
                return this.firstColumnText;
            } else {
                return this.username;
            }
        },

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
        // SECOND COLUMN TEXT DESKTOP
        secondColumnTextComp() {
            if (this.secondColumnText) {
                return this.secondColumnText;
            } else {
                return null;
            }
        },

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
        // THIRD COLUMN TEXT DESKTOP
        thirdColumnTextComp() {
            if (this.thirdColumnText) {

                if (this.componentTypeComp === 'deposits' ||
                this.componentTypeComp === 'withdrawals') {
                    return '$' + this.thirdColumnText;
                }

                return this.thirdColumnText;
            } else {
                return null;
            }
        },

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
        // FOURTH COLUMN TEXT DESKTOP
        fourthColumnTextComp() {
            if (this.fourthColumnText) {

                if (this.componentTypeComp === 'transactions') {
                    return '$' + this.fourthColumnText;
                }

                return this.fourthColumnText;
            } else {
                if (this.componentTypeComp === 'users') {
                    return this.userStatus;
                }
                return null;
            }
        },

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
        // FIFTH COLUMN TEXT DESKTOP
        fifthColumnTextComp() {
            if (this.fifthColumnText) {
                return this.fifthColumnText;
            } else {
                return null;
            }
        },
    },

    methods: {
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
        // RANK USER DOWN EVENT
        rankDown() {
            this.$store.commit('users/rankDown', {id: this.userId});
        },

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
        // RANK USER UP EVENT
        rankUp() {
            this.$store.commit('users/rankUp', {id: this.userId});
        },
    },
}
</script>

<style lang="scss" scoped>
.status-green {
    border: 1px solid $color-green;
    color: $color-green;
    padding: .75rem;
    border-radius: 6px;
    
    @media only screen and (max-width: 850px) {
        padding: .2rem 1.25rem;
        font-size: 1.8rem;
    }
}

.status-red {
    border: 1px solid $color-orange;
    color: $color-orange;
    padding: .75rem;
    border-radius: 6px;
    
    @media only screen and (max-width: 850px) {
        padding: .2rem 1.25rem;
        font-size: 1.8rem;
    }
}

.status-yellow {
    border: 1px solid #ffc107;
    color: #ffc107;
    padding: .75rem;
    border-radius: 6px;
    
    @media only screen and (max-width: 850px) {
        padding: .2rem 1.25rem;
        font-size: 1.8rem;
    }
}

.status-grey {
    border: 1px solid $color-text-grey-dark;
    color: $color-text-grey-dark;
    padding: .75rem;
    border-radius: 6px;
    
    @media only screen and (max-width: 850px) {
        padding: .2rem 1.25rem;
        font-size: 1.8rem;

    }
}

.item {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    background-color: $color-grey-dark;
    border-radius: 10px;
    padding: 2rem 2.5rem;
    transition: all .3s;

    &:not(:last-of-type) {
        margin-bottom: 1.5rem;
    }

    &:hover {
        background-color: lighten($color-grey-dark, 2%);
    }
    
    @media only screen and (max-width: 850px) {
        justify-content: center;
        flex-direction: column;
        padding: 4rem 5rem;
        width: 45rem;
        margin: 0 auto;
    }

    .desktop {
        font-size: 1.45rem;

        @media only screen and (max-width: 850px) {
            display: none !important;
        }
    }

    .item-desktop {
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: space-between;
    }

    .mobile {
        font-size: 2rem;

        @media only screen and (min-width: 850px) {
            display: none !important;
        }

        @media only screen and (max-width: 600px) {
            font-size: 2.2rem;
        }
    }

    .item-mobile {
        width: 35rem;
    }

    .buttons {
        display: flex;
        align-items: center;
    }

    .border-bottom {
        border-bottom: 1px solid lighten($color-grey-2, 2%);
    }

    .flex-container {
        display: flex;
        align-items: center;
        padding-bottom: 2.25rem;

        &:not(:first-of-type) {
            padding-top: 2.25rem;
        }
    }

    .flex-container-top {
        justify-content: space-between;
    }

    .deposits-buttons {
        justify-content: space-between;
        padding-top: 2.25rem;
    }

    .item-id,
    .item-info {
        word-break: break-all;
    }

    .item-status {
        display: inline-block;
        margin-left: 2rem;
    }

    .item-title {
        white-space: nowrap;
        font-size: 1.4rem;
        color: $color-text-grey-dark;
        display: inline-block;
        margin-right: 1.5rem;
        align-self: flex-end;
    }

    .transaction-amount {
        margin-left: 3rem;
        color: $color-green;
    }

    .users-icon {
        margin-right: 2rem;
    }

    .title-container {
        margin-bottom: .75rem;
    }

    .id-time-container {
        margin-bottom: .75rem;
        color: $color-text-grey;
    }

    .image {
        width: 5rem;
        height: 5rem;
        border-radius: 100%;
        object-fit: cover;
        margin-right: 1.5rem;
    }

    .item-link {
        background-color: $color-primary;
        border-radius: 7px;
        padding: .65rem 5.5rem;
        transition: all .3s;
        text-align: center;

        &:hover {
            background-color: darken($color-primary, 15%);
        }

        @media only screen and (max-width: 850px) {
            display: block;
            margin-top: 1rem;
        }
    }

    .rank-button {
        padding: .65rem 2.25rem;

        @media only screen and (max-width: 850px) {
            padding: .65rem 4.5rem;
        }
    }

    .rank-down,
    .poi-button {
        margin-right: 1rem;
    }

    .item-left {
        display: flex;
        align-items: center;
        justify-content: space-between;

        .cell {
            display: inline-block;
            width: 20%;
            text-align: center !important;
        }
    }

    .image-container {
        display: flex !important;
        justify-content: center;
        align-items: center;
        text-align: center;
        font-size: 1.45rem;

        @media only screen and (max-width: 850px) {
            font-size: 2rem;
        }
    }
}
</style>