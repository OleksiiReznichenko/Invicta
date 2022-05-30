<template>
    <div ref="header" class="header section">
        <div class="content">
            <div class="top-content">
                <img :src="user.avatar" alt="Avatar" class="avatar">
                <div class="avatar-info">
                    <div class="flex-container name-container">
                        <h2 class="name">{{user.username}}</h2>
                        <span v-if="user.selledAmount >= 1" class="span-green">+{{user.selledAmount}}</span>
                    </div>
                    <span class="rank">{{user.rank}}</span>
                    <div class="flex-container achievements">
                        <button v-if="achievementHeart" @click="dropdownEvent(achievemtHeartDropdown)" class="achievement-button dropdown-opener" id="achievemtHeartDropdownOpener">
                            <img src="@/assets/svg/heart.svg" alt="Icon" class="icon">
                            <div v-if="achievementHeart" class="achievement-dropdown dropdown" id="achievemtHeartDropdown">
                                <h4 class="title">Super star</h4>
                                <p class="description">
                                    Received more than 100 positive reviews
                                </p>
                            </div>
                        </button>
                        <button v-if="achievementComment" @click="dropdownEvent(achievementCommentDropdown)" class="achievement-button dropdown-opener" id="achievementCommentDropdownOpener">
                            <img src="@/assets/svg/comment.svg" alt="Icon" class="icon">
                            <div v-if="achievementComment" class="achievement-dropdown dropdown" id="achievementCommentDropdown">
                                <h4 class="title">Super star</h4>
                                <p class="description">
                                    Received more than 100 positive reviews
                                </p>
                            </div>
                        </button>
                        <button v-if="achievementLike" @click="dropdownEvent(achievemtLikeDropdown)" class="achievement-button dropdown-opener" id="achievemtLikeDropdownOpener">
                            <img src="@/assets/svg/thumbsUp.svg" alt="Icon" class="icon">
                            <div v-if="achievementLike" class="achievement-dropdown dropdown" id="achievemtLikeDropdown">
                                <h4 class="title">Super star</h4>
                                <p class="description">
                                    Received more than 100 positive reviews
                                </p>
                            </div>
                        </button>
                    </div>
                </div>
            </div>
            <div class="bottom-content">
                <div class="line"></div>
                <p class="bio">
                    {{user.bio}}
                </p>
                <div class="flex-container followers-container">
                    <span>{{userFollowersAmount}} Followers</span>
                    <span>{{userFollowingAmount}} Following</span>
                </div>
                <p class="date">Member since May 16, 2021</p>
                <div class="flex-container buttons-container">
                    <nuxt-link v-if="!isLoggedIn" to="/login" class="btn btn-transparent"><div class="background"></div><span>Follow</span></nuxt-link>
                    <nuxt-link v-if="isLoggedIn && isMyProfile" to="/editProfile" class="btn btn-transparent"><div class="background"></div><span>Edit</span></nuxt-link>
                    <button v-if="isLoggedIn && !isMyProfile && !isFollowedByYou" @click="subscribe" class="btn btn-transparent"><div class="background"></div><span>Follow</span></button>
                    <button v-if="isLoggedIn && !isMyProfile && isFollowedByYou" @click="unSubscribe" class="btn btn-gradient"><span>Unfollow</span></button>
                    <div class="flex-container other-buttons">
                        <button @click="dropdownEvent(moreDropdown)" href="#" class="button dropdown-opener" id="moreDropdownOpener">
                            <span class="dots">...</span>
                        </button>
                        <a ref="discordButton" :href="discordLink" target="_blank" class="button custom-social-link">
                            <img src="@/assets/svg/discord.svg" alt="Discord" class="icon">
                        </a>
                        <a ref="telegramButton" :href="telegramLink" target="_blank" class="button custom-social-link">
                            <img src="@/assets/svg/telegram.svg" alt="Telegram" class="icon">
                        </a>
                        <div class="dropdown" id="moreDropdown">
                            <ul class="list">
                                    <div class="dropdown" id="shareDropdown">
                                        <h3 class="title">Share</h3>
                                        <ul class="list">
                                            <div class="item" data-sharer="telegram" :data-title="user.name" :data-url="urlComp">
                                                <img src="@/assets/svg/telegramProductPage.svg" alt="Telegram" class="icon">
                                                <span>Telegram</span>
                                            </div>
                                            <div class="item" data-sharer="twitter" :data-title="user.name" :data-url="urlComp">
                                                <img src="@/assets/svg/twitter.svg" alt="Twitter" class="icon">
                                                <span>Twitter</span>
                                            </div>
                                            <div class="item" data-sharer="facebook" :data-title="user.name" :data-url="urlComp">
                                                <img src="@/assets/svg/facebook.svg" alt="Facebook" class="icon">
                                                <span>Facebook</span>
                                            </div>
                                            <div class="item" data-sharer="whatsapp" :data-title="user.name" :data-url="urlComp">
                                                <img src="@/assets/svg/whatsapp.svg" alt="Whatsapp" class="icon">
                                                <span>Whatsapp</span>
                                            </div>
                                            <div @click="copyLink" class="item">
                                                <img src="@/assets/svg/bindIcon.svg" alt="Copy link" class="icon">
                                                <span>Copy link</span>
                                            </div>
                                        </ul>
                                    </div>
                                <li @click="shareEvent(shareDropdown)" class="item dropdown-opener" id="shareDropdownOpener">
                                    <div class="icon-container">
                                        <img src="@/assets/svg/upload.svg" alt="Share" class="icon">
                                    </div>
                                    <span>Share profile</span>
                                </li>
                                <nuxt-link to="/reportUser" class="item">
                                    <div class="icon-container">
                                        <img src="@/assets/svg/report.svg" alt="Report" class="icon">
                                    </div>
                                    <span>Report</span>
                                </nuxt-link>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div id="linkCopiedNotification">
            <h3 class="title">Link copied succefully</h3>
        </div>
    </div>
</template>

<script>
export default {
    props: ['userObject', 'isMyProfile'],
    
    data() {
        return {
            copyLinkIndicator: true,
            url: '',
            discordLinkBase: 'https://discordapp.com/users/',
            discordLink: '#',
            telegramLinkBase: 'https://t.me/',
            telegramLink: '#',
        }
    },

    computed: {
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
        // USER
        user() {
            return this.userObject;
        },

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
        // USER FOLLOWERS AMOUNT
        userFollowersAmount() {
            if (this.userObject.followers?.length > 0) {
                return this.userObject.followers.length;
            } else {
                return 0;
            }
        },

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
        // USER FOLLOWING AMOUNT
        userFollowingAmount() {
            if (this.userObject.following?.length > 0) {
                return this.userObject.following.length;
            } else {
                return 0;
            }
        },
        
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
        // IS USER FOLLOWED BY ME
        isFollowedByYou() {
            let myUser = {};
            this.$store.state.users.users.find(el => {
                if (el.id === this.$store.state.user.id) {
                    myUser = el;
                }
            })


            return myUser.following?.find(el => {
                if (el === this.user.id) {
                    return true;
                }
            })
        },

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
        // IS LOGGED IN
        isLoggedIn() {
            return this.$store.state.isLoggedIn;
        },

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
        // PAGE URL
        urlComp() {
            return this.url;
        },

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
        // ACHIEVEMENT HEART
        achievementHeart() {
            return this.user.achievements.achievementHeart;
        },

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
        // ACHIEVEMENT COMMENT
        achievementComment() {
            return this.user.achievements.achievementComment;
        },

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
        // ACHIEVEMENT LIKE
        achievementLike() {
            return this.user.achievements.achievementLike;
        },
    },

    methods: {
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
        // COPY LINK EVENT
        copyLink(text) {
            if (!this.copyLinkIndicator) return;
            this.copyLinkIndicator = false;
            const inputc = document.body.appendChild(document.createElement("input"));
            inputc.style.top = "0";
            inputc.style.left = "0";
            inputc.style.position = "fixed";
            inputc.value = window.location.href;
            inputc.focus();
            inputc.select();
            document.execCommand('copy');
            inputc.parentNode.removeChild(inputc);

            this.linkCopiedNotification.style.display = 'block';
            setTimeout(() => {
                this.linkCopiedNotification.style.opacity = 1;
            }, 10);

            setTimeout(() => {
                this.linkCopiedNotification.style.opacity = 0;
                setTimeout(() => {
                    this.linkCopiedNotification.style.display = 'none';

                    this.copyLinkIndicator = true;
                }, 200);
            }, 1000);
        },

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
        // SHARE BUTTON EVENT
        shareEvent(dropdown) {
            if (navigator.share) {
                navigator.share({
                    title: this.user.name,
                    url: window.location.href
                })
            } else {
                this.dropdownEvent(dropdown);
            }
        },
        
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
        // DROPDOWN OPEN EVENT
        dropdownEvent(dropdown) {
            if (!dropdown.classList.contains('opened')) {
                dropdown.classList.add('opened');
                dropdown.style.display = 'block';
                setTimeout(() => {
                    dropdown.style.opacity = 1;
                }, 10);
            } else {
                dropdown.style.opacity = 0;
                setTimeout(() => {
                    dropdown.style.display = 'none';
                    dropdown.classList.remove('opened');
                }, 200);
            }
        },
        
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
        // DROPDOWN CLOSE EVENT
        dropdownCloseEvent(dropdown) {
            dropdown.style.opacity = 0;
            setTimeout(() => {
                dropdown.style.display = 'none';
                dropdown.classList.remove('opened');
            }, 200);
        },
        
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
        // SUBSCRIBE ON USER EVENT
        subscribe() {
            // this.$store.commit('subscribe');
            this.$store.commit('users/subscribe', {myId: this.$store.state.user.id, userId: this.user.id});
        },
        
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
        // UNSUBSCRIBE FROM USER EVENT
        unSubscribe() {
            // this.$store.commit('unSubscribe');
            this.$store.commit('users/unSubscribe', {myId: this.$store.state.user.id, userId: this.user.id});
        },
    },

    mounted () {
        // DOM
        this.dropdowns = Array.from(document.getElementsByClassName('dropdown'));
        this.dropdownOpeners = Array.from(document.getElementsByClassName('dropdown-opener'));
        this.customSocialLinks = Array.from(document.getElementsByClassName('custom-social-link'));
        this.linkCopiedNotification = document.getElementById('linkCopiedNotification');
        this.moreDropdown = document.getElementById('moreDropdown');
        this.shareDropdown = document.getElementById('shareDropdown');
        this.achievemtHeartDropdown = document.getElementById('achievemtHeartDropdown');
        this.achievementCommentDropdown = document.getElementById('achievementCommentDropdown');
        this.achievemtLikeDropdown = document.getElementById('achievemtLikeDropdown');

        // SET INITIAL VALUES BASED ON USER DATA
        this.telegramLink = this.user.telegramUsername ? this.telegramLinkBase + this.user.telegramUsername : '#';
        this.discordLink = this.user.discordId ? this.user.discordLink + this.user.discordId : '#';

        this.$refs.header.style.background = `url(${this.user.backgroundImage})`;
        this.$refs.header.style.backgroundSize = 'cover';
        this.$refs.header.style.backgroundRepeat = 'no-repeat';

        // PREVENT DEFAULT IF LINK IS EMPTY
        if (this.telegramLink === '#') {
            this.$refs.telegramButton.addEventListener('click', (e) => {
                e.preventDefault();
            });
        } else {
            this.$refs.telegramButton.removeEventListener('click', (e) => {
                e.preventDefault();
            });
        }

        if (this.discordLink === '#') {
            this.$refs.discordButton.addEventListener('click', (e) => {
                e.preventDefault();
            });
        } else {
            this.$refs.discordButton.removeEventListener('click', (e) => {
                e.preventDefault();
            });
        }

        // TAKE PAGE URL
        this.url = window.location.href;

        // CLOSE DROPDOWN AND CHANGE STYLES BACK ON UNFOCUS
        window.addEventListener('click', (e) => {
            this.dropdowns.forEach((el, i) => {
                if (!el.classList.contains('opened')) return;
                const isClickInsideElement = el.contains(e.target);
                const isClickInsideElement2 = this.dropdownOpeners[i].contains(e.target);

                if (!isClickInsideElement && !isClickInsideElement2) {
                    this.dropdownCloseEvent(el);
                }
            })
        });
    },
}
</script>

<style lang="scss" scoped>
.header {
    background-size: cover;
    background-repeat: no-repeat;
    border-radius: 1.2rem;
    margin-bottom: 3.5rem;
    position: relative;
    
    @media only screen and (max-width: 850px) {
        width: 100% !important;
        height: 100vh;
        min-height: 600px;
        margin-bottom: 5rem;
    }

    .content {
        width: 40rem;
        padding: 3.5rem 2.75rem 5.5rem;
        background-color: $color-grey-dark;
        border-radius: 10px;

        @media only screen and (max-width: 850px) {
            @include abs-center;
            transform: translate(-50%, -50%) scale(1.2);
            width: 42rem;
            padding: 4rem 3.75rem 5.5rem;
        }

        @media only screen and (max-width: 500px) {
            width: 40rem;
        }

        #shareDropdown, 
        #moreDropdown {
            .list {
                position: relative;

                .item {
                    display: flex;
                    align-items: center;
                    cursor: pointer;
                    transition: all .2s;
                    border-radius: 1.2rem;
                    position: relative;
                    font-size: 1.6rem !important;
                }
            }
        }

        #moreDropdown {
            left: 0;
            bottom: 130%;
            width: 20rem;
            padding: 1rem 0;;

            @media only screen and (max-width: 850px) {
                bottom: 140%;
            }
            
            &::before {
                content: '';
                background-color: $color-grey;
                display: block;
                position: absolute;
                bottom: -.7rem;
                left: 8%;
                transform: rotate(45deg);
                width: 1.5rem;
                height: 1.5rem;
            }

            .list {
                .item {
                    padding: .4rem 0;
                    padding-left: 1.5rem;

                    &:hover {
                        background-color: $color-grey-2;
                    }

                    .icon-container {
                        background-color: #111111;
                        border-radius: 8px;
                        width: 4rem;
                        height: 4rem;
                        @include flex-center;
                        margin-right: 1.5rem;
                    }

                    .icon {
                        width: 2.4rem;
                        height: 2.4rem;
                    }
                }
            }
        }

        #shareDropdown {
            padding: 1rem 0;
            width: 20rem;
            left: 0%;
            bottom: 110%;

            .title {
                margin-left: 2.75rem;
                font-size: 2.4rem;
                margin-bottom: 1.25rem;
            }

            .list {

                .item {
                    padding: 1rem 0;
                    padding-left: 2.25rem;

                    &:hover {
                        background-color: $color-grey-2;
                    }

                    &:first-of-type {
                        border-top: 1.5px solid $color-grey-2;
                    }

                    &:not(:last-of-type) {
                        border-bottom: 1.5px solid $color-grey-2;
                    }

                    .icon {
                        width: 2.4rem;
                        height: 2.4rem;
                        margin-right: 1rem;
                    }
                }
            }
        }

        .dropdown {
            box-shadow: 0px .5rem 5rem 0px rgba(#000000, .4);
            background-color: $color-grey;
            border-radius: 1.2rem;
            color: white;
            position: absolute;
            transition: all .2s;
            display: none;
            opacity: 0;
        }

        .flex-container {
            display: flex;
            align-items: center;
        }

        .top-content {
            display: flex;
            align-items: center;

            .avatar {
                width: 11rem;
                height: 11rem;
                border-radius: 100%;
                margin-right: 2rem;
                object-fit: cover;
            }

            .avatar-info {

                .name {
                    font-size: 2.75rem;
                    margin-right: 2rem;
                    word-break: break-all;
                }

                .span-green {
                    font-family: Rowdies;
                    font-weight: 300 !important;
                    color: $color-green;
                    font-size: 1.8rem;
                    display: inline-block;
                    margin-bottom: -6px;
                }

                .rank {
                    color: $color-orange;
                    display: inline-block;
                    margin-bottom: 1rem;
                }

                .achievements {
                    position: relative;
                    width: fit-content;

                    .achievement-dropdown {
                        background-color: $color-grey-2 !important;
                        top: 140%;
                        left: 50%;
                        transform: translateX(-50%);
                        width: 20rem;
                        text-align: center;
                        padding: 1.75rem;

                        @media only screen and (max-width: 850px) {
                            top: 147%;
                        }

                        &::before {
                            content: '';
                            background-color: $color-grey-2;
                            display: block;
                            position: absolute;
                            top: -.7rem;
                            left: 50%;
                            transform: translateX(-50%) rotate(45deg);
                            width: 1.5rem;
                            height: 1.5rem;
                        }

                        .title {
                            font-weight: 600 !important;
                            font-size: 1.8rem;
                            margin-bottom: .5rem;
                        }

                        .description {
                            color: $color-text-grey;
                        }
                    }

                    .achievement-button {
                        background-image: $gradient-pink;
                        width: 2.75rem !important;
                        height: 2.75rem !important;
                        border-radius: 100%;
                        margin-right: 1rem;
                        @include flex-center;
                        position: relative;

                        @media only screen and (max-width: 850px) {
                            transform: scale(1.2);
                            margin-right: 1.5rem;
                        }

                        .icon {
                            width: 1.5rem !important;
                            height: 1.5rem !important;
                        }
                    }
                }
            }
        }

        .bottom-content {

            .line {
                background-color: $color-grey-2;
                width: 70%;
                height: 1.5px;
                margin: 2.75rem 0;
            }

            .bio {
                color: $color-text-grey;
                font-size: 1.8rem;
                margin-bottom: 2rem;
            }

            .followers-container {
                font-size: 1.8rem;
                font-weight: 500 !important;
                margin-bottom: 1.75rem;

                span {
                    display: inline-block;

                    &:not(:last-of-type) {
                        margin-right: 1.5rem;
                    }
                }
            }

            .date {
                color: $color-text-grey-dark;
                margin-bottom: 3rem;
            }

            .buttons-container {

                .btn {
                    font-size: 1.8rem;
                    font-weight: 500 !important;
                    margin-right: 2rem;
                    padding: .75rem 0;
                    width: 17rem;
                    text-align: center;

                    @media only screen and (max-width: 850px) {
                        padding: 1.1rem 0;
                        margin-right: 2.75rem;
                        width: 15rem;
                        text-align: center;
                    }

                    .background {
                        background-color: $color-grey-dark;
                        width: calc(100% - 3.25px);
                        height: calc(100% - 3.25px);
                    }
                }

                .other-buttons {
                    position: relative;
                    
                    .button {
                        background-color: #111111;
                        width: 3.75rem !important;
                        height: 3.75rem !important;
                        border-radius: 100%;
                        margin-right: 1.5rem;
                        @include flex-center;
                        transition: all .3s;
                        text-align: center;
                        position: relative;

                        @media only screen and (max-width: 850px) {
                            transform: scale(1.2);
                            margin-right: 2rem;
                        }

                        &:hover {
                            background-color: lighten(#111111, 10%);
                        }

                        .icon {
                            width: 2rem !important;
                            height: 2rem !important;
                        }

                        .dots {
                           font-size: 2rem;
                           font-family: Rowdies;
                           font-weight: 700 !important;
                           letter-spacing: 1px;
                           display: inline-block;
                           margin-top: -1.25rem;
                        }
                    }

                    .dropdown-opener {
                        border-radius: 8px;
                    }
                }
            }
        }
    }

    #linkCopiedNotification {
        box-shadow: 0px .5rem 5rem 0px rgba(#000000, .4);
        background-color: $color-grey-2;
        border-bottom-left-radius: 2rem;
        border-bottom-right-radius: 2rem;
        padding: 5.75rem 0 7.25rem;
        width: 45rem;
        color: white;
        position: fixed;
        left: 50%;
        top: 0;
        z-index: 1000;
        transform: translateX(-50%);
        transition: all .3s;
        text-align: center;
        display: none;
        opacity: 0;

        .title {
            font-size: 2.85rem;
        }
    }
}
</style>