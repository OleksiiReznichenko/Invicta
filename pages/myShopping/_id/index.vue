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
                        <div class="top-container">
                            <h3 v-if="item.chat.messages.length == 0" class="no-messages">No messages yet</h3>
                            <div v-if="item.chat.messages.length > 0" class="messages">
                                <ChatMessage 
                                v-for="message in item.chat.messages"
                                :key="message.id"
                                :person='message.person === "me" ? user : item.seller'
                                :isMe='message.person === "me"'
                                :text='message.text'
                                :date='message.date'
                                />
                            </div>
                        </div>
                        <div class="input-container">
                            <EmojiPicker class="emoji-main-container" @emoji="onEmoji">
                                <div class="emoji-invoker" slot="emoji-invoker" slot-scope="{ events: { click: clickEvent } }" 
                                    @click.stop="clickEvent">
                                    <button class="emoji-btn" type="button">
                                        <img src="@/assets/svg/emojiButton.svg" alt="Emoji button" class="emoji-icon">
                                    </button>
                                </div>
                                <div class="emoji-picker-wrapper" slot="emoji-picker" slot-scope="{ emojis, insert }">
                                    <div class="emoji-picker">
                                        <div v-for="(emojiGroup, category) in emojis" :key="category">
                                            <h5>{{ category }}</h5>
                                            <div>
                                                <span class="emoji"
                                                    v-for="(emoji, emojiName) in emojiGroup"
                                                    :key="emojiName"
                                                    @click="insert(emoji)"
                                                    :title="emojiName"
                                                >{{ emoji }}</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </EmojiPicker>
                            <textarea @keypress.enter="sendMessage" @input="autoGrow" v-model="newMessage" :maxlength="maxMessageLength" ref="messageInput" name="message" id="messageInput" cols="30" rows="1" wrap="soft" placeholder="Write a message"></textarea>
                            <button @click="sendMessage" class="send-button">Send</button>
                        </div>
                        <div @click="toggleEvent" v-if="item.chat.notifications.length > 0" class="toggle-container notifications">
                            <div class="title-container">
                                <div class="title-container__left">
                                    <div class="icon-container">
                                        <img src="@/assets/svg/comment.svg" alt="Icon" class="icon">
                                    </div>
                                    <span class="title">Show notifications</span>
                                </div>
                                <img src="@/assets/svg/arrowSmall.svg" alt="Arrow" class="arrow">
                            </div>
                            <div class="notifications-list description-container">
                                <ChatNotification 
                                v-for="notification in item.chat.notifications"
                                :key="notification.id"
                                :text='notification.text'
                                :date='notification.date'
                                />
                            </div>
                        </div>
                    </div>
                </div>
                <div class="right">
                    <div class="grey-container users-container">
                        <nuxt-link :to="'/users/' + user.id" class="user buyer">
                            <div class="info">
                                <span>Buyer</span>
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
                    <div @click="toggleEvent" class="toggle-container grey-container help-container">
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
import EmojiPicker from 'vue-emoji-picker';
import ChatMessage from '@/components/elements/Chat/Message';
import ChatNotification from '@/components/elements/Chat/Notification';

export default {
    components: {
        ChatMessage,
        ChatNotification,
        EmojiPicker,
    },

    data() {
        return {
            maxMessageLength: 400,
            newMessage: ''
        }
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
            const parent = e.target?.closest('.toggle-container');
            const titleContainer = e.target?.closest('.title-container');

            if (titleContainer && parent && !parent.classList.contains('animating')) {
                const descriptionContainer = parent?.querySelector('.description-container');
                const description = parent?.querySelector('.description');
                const arrow = parent?.querySelector('.arrow');

                let timeoutTime = 500;

                if (description?.textContent.length > 1000) {
                    this.$store.dispatch('slideToggle', {target: descriptionContainer, duration: 700})
                    timeoutTime = 700;
                } else {
                    this.$store.dispatch('slideToggle', {target: descriptionContainer})
                }

                arrow.classList.toggle('arrow-active');

                parent.classList.add('animating');

                setTimeout(() => {
                    parent.classList.remove('animating');
                }, timeoutTime);
            }
        },

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
        // CHANGE NOT VALIDATED TO VALIDATED
        validateEvent(e) {
            if (this.isValidated) return;
            this.$store.commit('myShoppingItems/statusToValidated', {id: this.item.id});
            this.$store.commit('myShoppingItems/isValidatedToTrue', {id: this.item.id});
        },

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
        // GROW TEXTAREA ON TEXT WRAP
        autoGrow(e) {
            e.target.style.height = "5px";
            e.target.style.height = (e.target.scrollHeight) + "px";
        },

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
        // ADD EMOJI TO THE INPUT
        onEmoji(e) {
            this.newMessage += e;
        },

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
        // REMOVE EXCESSIVE WHITE SPACES IN VALUE
        validateMessageValue() {
          this.newMessageValidated = '';
          if (this.newMessage.includes(' ') >= 0) {
            const messageInputArr = this.$refs.messageInput.value.split(' ');

            const messageInputArr2 = messageInputArr.filter(el => {
              if (el.replace(/\s/g, '')) {
                return el.replace(/\s/g, '');
              }
            })

            const validatedMessage = messageInputArr2.join(' ');
            this.newMessageValidated = validatedMessage;
          } else {
              this.newMessageValidated = this.newMessage;
          }
        },

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
        // GET DATE
        getDate() {
            const dateObj = new Date();
            const monthNumber = dateObj.getMonth();
            const day = dateObj.getDate();
            const hours = dateObj.getHours();
            const minutes = dateObj.getMinutes();
            let minutesFormatted = minutes;

            if (minutes < 10) {
                minutesFormatted = '0' + minutes;
            }

            const months = [
                'January',
                'February',
                'March',
                'April',
                'May',
                'June',
                'July',
                'August',
                'September',
                'October',
                'November',
                'December'
            ]

            const month = months[monthNumber];
            
            return `${day} ${month}, ${hours}:${minutesFormatted}`;
        },

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
        // SEND MESSAGE EVENT
        sendMessage(e) {
            e.preventDefault();
            this.validateMessageValue();
            if (!this.newMessageValidated) return;

            this.messageObject = {
                id: 'messageMe' + Math.random(),
                person: 'me',
                text: this.newMessageValidated,
                date: this.getDate()
            }

            this.$store.commit('myShoppingItems/addChatMessage', {id: this.item.id, message: this.messageObject});

            this.newMessage = '';
            this.$refs.messageInput.style.height = 'auto';
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
            }

            .description-container {
                padding: 0 3rem 2rem;
                display: none;
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

                    @media only screen and (max-width: 400px) {
                        padding-left: 5rem;
                    }

                    .image {
                        width: 11rem;
                        height: 11rem;
                        object-fit: cover;
                        border-radius: 100%;
                        margin-right: 1.75rem;
                        
                        @media only screen and (max-width: 850px) {
                            margin-right: 3rem;
                            border-radius: 10px;
                        }
                    }

                    .desktop {
                        @media only screen and (max-width: 430px) {
                            display: none !important;
                        }
                    }

                    .mobile {
                        @media only screen and (min-width: 430px) {
                            display: none !important;
                        }
                    }

                    .info {
                        white-space: nowrap;

                        .name {
                            font-size: 2.5rem;
                            font-weight: 300 !important;
                            margin-bottom: .5rem;
                        }

                        .date-id-container {
                            display: flex;
                            align-items: center;
                            margin-bottom: 1.75rem;

                            @media only screen and (max-width: 430px) {
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

                            @media only screen and (max-width: 430px) {
                                margin: 1.25rem 0 1rem;
                            }


                            .status {
                                margin-right: 1.5rem;
                                padding: .7rem 3.75rem;
                            }

                            .price {
                                font-size: 1.8rem;
                            }
                        }
                    }
                }

                .chat {
                    min-height: 55rem;
                    padding: 4rem 3.5rem;

                    @media only screen and (max-width: 450px) {
                        padding: 4rem 2.5rem;
                    }

                    .top-container {
                        min-height: 35rem;
                        position: relative;

                        .no-messages {
                            font-weight: 300 !important;
                            font-size: 3rem;
                            @include abs-center;
                        }
                    }

                    .messages {
                        height: 100%;
                        display: flex;
                        flex-direction: column;
                    }

                    .notifications {
                        background-color: $color-grey;
                        border-radius: 30px;
                        margin-top: 3rem;

                        .icon-container {
                            width: 4rem;
                            height: 4rem;
                            border-radius: 100%;
                            background-color: #111111;
                            @include flex-center;
                            margin-right: 1.25rem;

                            .icon {
                                width: 2rem;
                                height: 2rem;
                                margin: 0;
                            }
                        }
                    }

                    .input-container {
                        background-color: $color-grey;
                        border-radius: 30px;
                        margin-top: 3rem;
                        position: relative;

                        #messageInput {
                            color: white;
                            font-size: 1.6rem;
                            width: 80%;
                            margin-top: 2px;
                            padding: 2rem 3rem;
                            padding-left: 6rem;
                        }

                        .send-button {
                            position: absolute;
                            top: 50%;
                            right: 3rem;
                            transform: translateY(-50%);
                            color: white;
                            font-weight: 500 !important;
                            background-color: $color-primary;
                            padding: .35rem 1rem;
                            border-radius: 30px;
                            transition: all .3s;

                            &:hover {
                                background-color: darken($color-primary, 5%);
                            }
                        }

                        .emoji-main-container {
                            position: absolute;
                            left: 2rem;
                            top: 53%;
                            transform: translateY(-50%);
                            
                            .emoji-picker-wrapper {
                                position: absolute;
                                left: 0;
                                bottom: 6rem;
                                border-radius: 10px;

                                @media only screen and (max-width: 450px) {
                                    left: -1.25rem;
                                    bottom: 6.25rem;
                                }

                                &::before {
                                    border-bottom: 10px solid $color-grey-2;
                                    border-left: 9px solid rgba(0, 0, 0, 0);
                                    border-right: 9px solid rgba(0, 0, 0, 0);
                                    transform: rotate(180deg);
                                    content: "";
                                    display: inline-block;
                                    left: 10px;
                                    position: absolute;
                                    bottom: -10.3px;
                                }
                            }

                            .emoji-picker {
                                width: 295px;
                                height: 170px;
                                overflow: auto;
                                padding: 10px;
                                padding-top: 0;
                                background: $color-grey-2;
                                overflow-x: hidden;
                                border-radius: 10px;

                                .emoji {
                                    display: inline-block;
                                    background: transparent;
                                    border: none;
                                    outline: none;
                                    border-radius: 50%;
                                    width: 30px;
                                    height: 30px;
                                    padding: 0;
                                    cursor: pointer;
                                    text-align: center;
                                    padding-top: 7px;

                                    @media only screen and (max-width: 850px) {
                                        transform: scale(1.4);
                                    }

                                    &:hover {
                                        background: rgba(255, 255, 255, 0.1);
                                    }
                                }

                                h5 {
                                    font-family: Montserrat;
                                    margin-bottom: 5px;
                                    font-size: 15px;
                                    margin-top: 10px;
                                }

                                &::-webkit-scrollbar {
                                    z-index: 2;
                                    width: 5px;
                                }

                                &::-webkit-scrollbar-track {
                                    box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
                                    margin: 5px 0;
                                    border-radius: 5px;
                                }

                                &::-webkit-scrollbar-thumb {
                                    border-radius: 5px;
                                    background-color: #5d5d5d;
                                    outline: none;
                                }
                            }
                        }
                    }
                }
            }

            .right {
                width: 32%;
                flex-grow: 1;

                @media only screen and (max-width: 850px) {
                    width: 100%;
                }

                .users-container {
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