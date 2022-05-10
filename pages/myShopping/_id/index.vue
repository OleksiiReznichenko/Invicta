<template>
    <div class="shopping-item-page section section-page">
        <div class="content">
            <div class="page-sequence">
                <nuxt-link to="/">Main</nuxt-link>
                <img src="@/assets/svg/arrowSmall.svg" alt="Arrow" class="arrow">
                <nuxt-link to="/myShopping">My shopping</nuxt-link>
                <img src="@/assets/svg/arrowSmall.svg" alt="Arrow" class="arrow">
                <span>{{item.name}}</span>
            </div>
            <div class="main-content">
                <div class="left">
                    <div class="grey-container item-container">
                        <img :src="item.image" alt="Item image" class="image">
                        <div class="info">
                            <h3 class="name">{{item.name}}</h3>
                            <div class="date-id-container desktop">
                                <span class="id">order {{item.id}}</span>
                                <span class="date">{{item.date}}</span>
                            </div>
                            <div class="status-price-container">
                                <div :class="{'border-text-green': isValidated, 'border-text-red': !isValidated}" class="status">{{item.status}}</div>
                                <div class="price">${{item.price}}</div>
                            </div>
                            <div class="date-id-container mobile">
                                <span class="id">order {{item.id}}</span>
                                <span class="date">{{item.date}}</span>
                            </div>
                        </div>
                    </div>
                    <div class="grey-container chat">
                        <div class="messages">
                            <ChatMessage 
                            v-for="message in item.chat.messages"
                            :key="message.id"
                            :person='message.person'
                            :text='message.text'
                            :date='message.date'
                            />
                        </div>
                        <div class="notifications">
                            
                        </div>
                    </div>
                </div>
                <div class="right">
                    <div class="grey-container users-container">
                        <nuxt-link to="/myProfile" class="user buyer">
                            <div class="info">
                                <span>Buyer</span>
                                <!-- <h4 class="user-name">{{user.firstName}} <br> {{user.lastName}}</h4> -->
                                <h4 class="user-name">Me</h4>
                            </div>
                            <img :src="user.avatar" alt="User photo" class="user-photo">
                        </nuxt-link>
                        <nuxt-link :to="'/users/' + item.seller.id" class="user seller">
                            <div class="info">
                                <span>Seller</span>
                                <h4 class="user-name">{{item.seller.firstName}} <br> {{item.seller.lastName}}</h4>
                            </div>
                            <img :src="item.seller.avatar" alt="User photo" class="user-photo">
                        </nuxt-link>
                    </div>
                    <div @click="toggleEvent" class="grey-container help-container">
                        <div class="title-container">
                            <div class="title-container__left">
                                <img src="@/assets/svg/shield.svg" alt="Icon" class="icon">
                                <span>Help</span>
                            </div>
                            <img src="@/assets/svg/arrowSmall.svg" alt="Arrow" class="arrow">
                        </div>
                        <div class="description-container">
                            <p class="description">
                                If the terms of the deal have not been fulfilled, let us know.
                            </p>
                            <a class="support-link" href="#">Write to support</a>
                        </div>
                    </div>
                    <button @click="validateEvent" :class="{'validated': isValidated}" class="validate-button">{{buttonContent}}</button>
                </div>
            </div>
        </div>

        <Footer />
    </div>
</template>

<script>
import ChatMessage from '@/components/elements/Chat/Message';
import ChatNotification from '@/components/elements/Chat/Notification';

export default {
    components: {
        ChatMessage,
        ChatNotification,
    },

    computed: {
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
        // MY USER
        user() {
            return this.$store.state.user;
        },

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
        // IS VALIDATED SHOPPING ITEM INDICATOR
        isValidated() {
            return this.item.isValidated;
        },

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
        // VALIDATE BUTTON TEXT CONTENT
        buttonContent() {
            if (this.isValidated) {
                return 'Validated';
            } else {
                return 'Validate the fulfilment';
            }
        }
    },

    methods: {
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
        // TOGGLE EVENT
        toggleEvent(e) {
            const parent = e.target?.closest('.help-container');
            const titleContainer = e.target?.closest('.title-container');

            if (titleContainer && parent && !parent.classList.contains('animating')) {
                const descriptionContainer = parent?.querySelector('.description-container');
                const description = parent?.querySelector('.description');
                const arrow = parent?.querySelector('.arrow');

                let timeoutTime = 500;

                if (description.textContent.length > 1000) {
                    this.$store.dispatch('slideToggle', {target: descriptionContainer, duration: 700})
                    timeoutTime = 700;
                } else {
                    this.$store.dispatch('slideToggle', {target: descriptionContainer})
                }

                arrow.classList.toggle('opened');

                parent.classList.add('animating')

                setTimeout(() => {
                    parent.classList.remove('animating')
                }, timeoutTime);
            }
        },

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
        // CHANGE NOT VALIDATED TO VALIDATED
        validateEvent() {
            if (this.isValidated) return;
            // console.log(this.$store)
            this.$store.commit('myShoppingItems/statusToValidated', {id: this.item.id});
            this.$store.commit('myShoppingItems/isValidatedToTrue', {id: this.item.id});
            // this.item.isValidated = true;
        }
    },

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    // FIND AND LOAD THE ITEM
    created () {
        // MY SHOPPING ITEMS ARRAY
        const myShoppingItemsArray = this.$store.state.myShoppingItems.myShoppingItems;

        // FIND ITEM IN MY SHOPPING ITEMS ARRAY
        this.item = myShoppingItemsArray.find(el => {
            if (this.item || el.id !== this.$route.params.id) return;
            return el;
        })

        // console.log(this.item)
    },
}
</script>

<style lang="scss" scoped>
.shopping-item-page {
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


        .main-content {
            display: flex;

            @media only screen and (max-width: 850px) {
                flex-direction: column;
            }

            .grey-container {
                background-color: $color-grey-dark;
                box-shadow: 0px .5rem 5rem 0px rgba(#000000, .4);
                border-radius: 12px;
            }

            .left {
                width: 68%;
                margin-right: 2.5rem;

                @media only screen and (max-width: 850px) {
                    width: 100%;
                    margin-bottom: 2.5rem;
                    margin-right: 0;
                }

                .item-container {
                    display: flex;
                    align-items: center;
                    padding: 3.5rem;
                    margin-bottom: 2.5rem;

                    @media only screen and (max-width: 850px) {
                        padding-left: 6rem;
                    }

                    .image {
                        width: 11rem;
                        height: 11rem;
                        object-fit: cover;
                        border-radius: 100%;
                        margin-right: 1.75rem;
                        
                        @media only screen and (max-width: 850px) {
                            margin-right: 2.6rem;
                        }
                    }

                    .desktop {
                        @media only screen and (max-width: 650px) {
                            display: none !important;
                        }
                    }

                    .mobile {
                        @media only screen and (min-width: 650px) {
                            display: none !important;
                        }
                    }

                    .info {


                        .name {
                            font-size: 2.5rem;
                            font-weight: 300 !important;
                            margin-bottom: .5rem;
                        }

                        .date-id-container {
                            display: flex;
                            align-items: center;
                            margin-bottom: 1.75rem;

                            @media only screen and (max-width: 650px) {
                                flex-direction: column;
                                font-size: 1.7rem;
                                align-items: flex-start;
                            }

                            .date {
                                color: $color-text-grey-dark;
                            }

                            .id {
                                padding-right: 1.5rem;
                            }
                        }

                        .status-price-container {
                            display: flex;
                            align-items: center;

                            @media only screen and (max-width: 650px) {
                                margin: 1rem 0;
                            }


                            .status {
                                margin-right: 1.5rem;
                                padding: .7rem 3.75rem;
                            }

                            .price {

                            }
                        }
                    }
                }

                .chat {
                    height: 55rem;
                }
            }

            .right {
                width: 32%;
                flex-grow: 1;

                @media only screen and (max-width: 850px) {
                    width: 100%;
                }

                .users-container {
                    // padding: 2rem 0;
                    overflow: hidden;

                    .user {
                        display: flex;
                        align-items: center;
                        justify-content: space-between;
                        transition: all .3s;
                        padding: 2rem 4rem;

                        &:first-of-type {
                           padding: 3rem 4rem 2rem; 
                        }

                        &:last-of-type {
                           padding: 2rem 4rem 3rem; 
                        }

                        @media only screen and (max-width: 850px) {
                            padding: 2rem 6rem;

                            &:first-of-type {
                            padding: 3rem 6rem 2rem; 
                            }

                            &:last-of-type {
                            padding: 2rem 6rem 3rem; 
                            }
                        }

                        &:hover {
                            background-color: $color-grey-2;
                        }

                        &:not(:last-of-type) {
                            border-bottom: 1.5px solid $color-grey-2;
                        }

                        .info {


                            .user-name {
                                font-weight: 400 !important;
                                font-size: 1.8rem;
                                margin-top: 1rem;

                                @media only screen and (max-width: 850px) {
                                    font-size: 2.1rem;
                                }
                            }

                            span {
                                color: $color-text-grey-dark;

                                @media only screen and (max-width: 850px) {
                                    font-size: 1.8rem;
                                }
                            }
                        }

                        .user-photo {
                            width: 11rem;
                            height: 11rem;
                            border-radius: 100%;
                        }
                    }
                }

                .help-container {
                    margin: 2rem 0;

                    .opened {
                        transform: rotate(-180deg);
                    }

                    .title-container {
                        display: flex;
                        align-items: center;
                        justify-content: space-between;
                        padding: 1.6rem 3rem;
                        cursor: pointer;

                        &__left {
                            display: flex;
                            align-items: center;

                            img {
                                margin-right: 2rem;
                            }
                        }

                        .arrow {
                            transition: all .3s;
                        }
                    }

                    .description-container {
                        padding: 0 3rem 2rem;
                        display: none;

                        .description {
                            margin-bottom: 1.5rem;

                        }

                        .support-link {
                            color: $color-primary;
                            font-weight: 600 !important;
                            font-size: 1.8rem;
                            transition: all .3s;

                            &:hover {
                                color: lighten($color-primary, 10%);
                            }
                        }
                    }
                }

                .validate-button {
                    background-color: $color-orange;
                    width: 100%;
                    border-radius: 12px;
                    text-align: center;
                    padding: 1.6rem 5rem;
                    transition: all .3s;

                    @media only screen and (max-width: 850px) {
                        font-size: 1.8rem;
                    }

                    &:hover {
                        // background-color: darken($color-orange, 15%);
                        background-color: darken($color-green, 10%);
                    }
                }

                .validated {
                    background-color: darken($color-green, 10%) !important;
                    cursor: default;
                }
            }
        }
    }
}
</style>