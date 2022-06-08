<template>
    <div class="edit-profile-page">
        <div @click="closeCropperOnBackground" ref="cropperContainer" class="crop-container-wrapper">
            <div class="crop-container">
                <div class="crop-image-container">
                    <img ref="cropImage" :src="avatarSrc" alt="" class="crop-image">
                </div>
                <button @click="dontCrop" class="dont-crop">Save without crop</button>
                <div class="buttons">
                    <button @click="closeCropper" class="btn btn-transparent button-cancel"><div class="background"></div><span>Cancel</span></button>
                    <button @click="handleCropImage" class="btn btn-gradient button-crop"><span>Crop</span></button>
                </div>
            </div>
        </div>
        <img src="@/assets/img/cornerLight.png" alt="Corner light" class="corner-light">
        <div class="relative-container">
            <div class="content">
                <div class="section page-sequence">
                    <nuxt-link to="/">Main</nuxt-link>
                    <img src="@/assets/svg/arrowSmall.svg" alt="Arrow" class="arrow">
                    <nuxt-link :to="'/users/' + userUsername">Profile</nuxt-link>
                    <img src="@/assets/svg/arrowSmall.svg" alt="Arrow" class="arrow">
                    <span>Edit profile</span>
                </div>
                <h1 class="section page-title">Edit profile</h1>
                <div class="section edit-form">
                    <div class="left">
                        <input @change="fileChanged" ref="imageInput" type="file" accept=".jpg, .jpeg, .png" id="imageInput">
                        <div @click="triggerFileSelection" class="avatar-container">
                            <img :src="user.avatar" alt="Avatar" class="avatar">
                        </div>
                        <button @click="triggerFileSelection" class="change-button">
                            <img src="@/assets/svg/editSquareIcon.svg" alt="Icon" class="icon">
                            <span class="span-change">change</span>
                        </button>
                    </div>
                    <div class="right">
                        <div class="flex-container">
                            <div class="input-group">
                                <label for="username">Username</label>
                                <input @keypress.enter="editProfileEvent" v-model="username" type="text" id="username" placeholder="mikhailjr">
                            </div>
                            <div class="input-group">
                                <label for="telegramUsername">Telegram username</label>
                                <input @keypress.enter="editProfileEvent" v-model="telegramUsername" type="text" id="telegramUsername" placeholder="mikhailjr">
                            </div>
                        </div>
                        <div class="flex-container">
                            <div class="input-group">
                                <label for="email">Email</label>
                                <input @keypress.enter="editProfileEvent" v-model="email" type="email" id="email" placeholder="E-mail">
                            </div>
                            <div class="input-group">
                                <label for="discordUserId">Discord user ID</label>
                                <input @keypress.enter="editProfileEvent" v-model="discordUserId" type="text" id="discordUserId" placeholder="352656">
                            </div>
                        </div>
                        <div class="flex-container">
                            <div class="input-group">
                                <label for="password">Password</label>
                                <div class="input-container">
                                    <input @keypress.enter="editProfileEvent" ref="passwordInput" v-model="password" type="password" class="password-input" id="password" placeholder="Password" minlength="6">
                                    <div @click.prevent="togglePasswordVisibility" class="show-password eye-container input-left-content">
                                        <img src="@/assets/svg/eye.svg" alt="Eye" class="eye-icon">
                                    </div>
                                </div>
                            </div>
                            <div class="input-group">
                                <label for="confirmPassword">Confirm Password</label>
                                <input @keypress.enter="editProfileEvent" v-model="confirmPassword" type="password" class="password-input" id="confirmPassword" placeholder="Confirm password" minlength="6">
                            </div>
                        </div>
                        <div class="input-group">
                            <label for="bio">Bio</label>
                            <textarea @keypress.enter.prevent='editProfileEvent' @input="autoGrow" v-model="bio" :maxlength="maxBioLength" ref="bioInput" id="bio" name="bio" cols="30" rows="5" wrap="soft" placeholder="Enter your bio"></textarea>
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
                        </div>
                    </div>
                </div>
                <button @click="editProfileEvent" class="btn btn-gradient save-button save-margin-bottom"><span>Save changes</span></button>

                <h1 class="section page-title">Profile banners</h1>
                <UserCustomBanner :user='user' :pageEdit='true' class="edit-class" />
                <UserDiscountProducts :user='user' :baseArray='productsBase' :pageEdit='true' class="edit-class" />
            </div>
            <img src="@/assets/img/gridEditProfile.png" alt="Grid" class="grid-image">

            <Footer />
        </div>
    </div>
</template>

<script>
import Cropper from 'cropperjs';
import EmojiPicker from 'vue-emoji-picker';
import UserCustomBanner from '@/components/layout/Profile/UserCustomBanner';
import UserDiscountProducts from '@/components/layout/Profile/UserDiscountProducts';

export default {
    middleware: ['notLoggedIn'],
    
    components: {
        UserCustomBanner,
        UserDiscountProducts,
        EmojiPicker,
        // AvatarCropper,
    },

    data() {
        return {
            selectedAvatarFile: null,
            avatarSrc: null,
            isOpenNofication: false,
            isUsernameTaken: false,
            maxBioLength: 220,
            username: '',
            email: '',
            password: '',
            confirmPassword: '',
            telegramUsername: '',
            discordUserId: '',
            bio: '',
        }
    },

    computed: {
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
        // USER
        user() {
            return this.$store.state.users.users.find(el => {
                if (el.id === this.$store.state.user.id) {
                    return el;
                }
            })
        },
        
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
        // USER
        userUsername() {
            return this.user.username;
        },
        
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
        // USER PRODUCTS
        productsBase() {
            return this.user.products;
        },
    },

    methods: {
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
        // TRIGGER FILE SELECTION
        triggerFileSelection() {
            this.$refs.imageInput.click();
        },
        
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
        // EVENT IF FILE IS SELECTED
        fileChanged(e) {
            const files = e.target.files || e.dataTransfer.files;
            if (files.length) {
                this.selectedAvatarFile = files[0];
            } else {
                this.selectedAvatarFile = files;
            }
        },
        
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
        // CLOSE CROPPER
        openCropper() {
            if (this.$refs.cropperContainer.classList.contains('opened')) return;
            this.$refs.cropperContainer.style.display = 'block';
            this.$refs.cropperContainer.classList.add('opened');
            setTimeout(() => {
                this.$refs.cropperContainer.style.opacity = 1;
                this.navigationRoot.style.display = 'none';
            }, 10)
        },
        
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
        // CLOSE CROPPER
        closeCropper() {
            if (!this.$refs.cropperContainer.classList.contains('opened')) return;
            this.fileCleared();
            this.$refs.cropperContainer.style.opacity = 0;
            this.navigationRoot.style.display = 'block';
            setTimeout(() => {
                this.$refs.cropperContainer.style.display = 'none';
                this.$refs.cropperContainer.classList.remove('opened');
            }, 200)
        },
        
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
        // CLOSE CROPPER ON BACKGROUND CLICK
        closeCropperOnBackground(e) {
            if (!e.target.classList.contains('crop-container-wrapper')) return;
            this.closeCropper();
        },
        
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
        // EVENT IF FILE IS CLEARED
        fileCleared() {
            this.$refs.imageInput.value = null;
            this.$refs.imageInput.values = [];
            this.selectedAvatarFile = null;
            this.avatarSrc = null;
        },

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
        // SAVE NEW USER AVATAR
        saveImage(newAvatar) {
            // SET NEW USER AVATAR
            this.$store.commit('users/changeAvatar', {id: this.user.id, newAvatar: newAvatar});

            // IF USER AVATAR CHANGED SUCCESSFULLY - SHOW MESSAGE
            this.$store.dispatch('showNotificationWindow', {
                text: 'User avatar changed successfully', 
                isBad: false
            });
        },
        
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
        // HANDLE CROP IMAGE
        handleCropImage() {
            this.avatarSrc = this.cropper.getCroppedCanvas({
                width: 400,
                height: 400,
            }).toDataURL();
            
            this.saveImage(this.avatarSrc);
            this.closeCropper();
        },
        
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
        // DO NOT CROP IMAGE
        dontCrop() {
            this.saveImage(this.avatarSrc);
            this.closeCropper();
        },

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
        // GROW TEXTAREA ON TEXT WRAP
        autoGrow(e) {
            e.target.style.height = this.minHeight + "px";
            if (e.target.scrollHeight <= this.minHeight) {
                e.target.style.height = this.minHeight + "px";
            } else {
                e.target.style.height = (e.target.scrollHeight) + "px";
            }
        },

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
        // ADD EMOJI TO THE INPUT
        onEmoji(e) {
            this.bio += e;
        },

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
        // REMOVE EXCESSIVE WHITE SPACES IN VALUE
        validateValue(value) {
          if (!value) return;
          if (value.includes(' ') >= 0) {
            const inputArr = value.split(' ');

            const inputArr2 = inputArr.filter(el => {
              if (el.replace(/\s/g, '')) {
                return el.replace(/\s/g, '');
              }
            })

            const validatedValue = inputArr2.join(' ');
            return validatedValue;
          } else {
              return value;
          }
        },

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
        // EDIT PROFILE EVENT
        editProfileEvent() {
            this.isUsernameTaken = false;
            let initialUsername = this.user.username;
            let initialEmail = this.user.email;
            let user = {};

            // IF THERE ARE NO CHANGES - CHANGE NOFICATION WINDOW TEXT AND SHOW IT
            if (
                this.validateValue(this.username) === this.validateValue(this.user.username) &&
                this.validateValue(this.telegramUsername) === this.validateValue(this.user.telegramUsername) &&
                this.validateValue(this.discordUserId) === this.validateValue(this.user.discordUserId) &&
                this.validateValue(this.bio) === this.validateValue(this.user.bio) &&
                this.email === this.user.email &&
                this.password === this.user.password
            ) {
                this.$store.dispatch('showNotificationWindow', {
                    text: 'No changes', 
                    isBad: true
                });
                return;
            }

            // IF USERNAME IS EMPTY - CHANGE NOFICATION WINDOW TEXT AND SHOW IT
            if (!this.username) {
                this.$store.dispatch('showNotificationWindow', {
                    text: 'Username can\'be empty', 
                    isBad: true
                });
                return;
            }

            // IF EMAIL IS EMPTY - CHANGE NOFICATION WINDOW TEXT AND SHOW IT
            if (!this.email) {
                this.$store.dispatch('showNotificationWindow', {
                    text: 'Email can\'be empty', 
                    isBad: true
                });
                return;
            }

            // IF PASSWORD IS EMPTY - CHANGE NOFICATION WINDOW TEXT AND SHOW IT
            if (!this.password) {
                this.$store.dispatch('showNotificationWindow', {
                    text: 'Password can\'be empty', 
                    isBad: true
                });
                return;
            }

            // IF PASSWORD AND CONFIRM PASSWORD ARE NO THE SAME - CHANGE NOFICATION WINDOW TEXT AND SHOW IT
            if (this.password !== this.confirmPassword) {
                this.$store.dispatch('showNotificationWindow', {
                    text: 'The password and confirm password must be the same', 
                    isBad: true
                });
                return;
            }

            // CHECK IF USERNAME IS TAKEN
            this.$store.state.users.users.forEach(el => {
                if (this.username === el.username) {
                    this.isUsernameTaken = true;
                    
                }

                if (this.email === el.email) {
                    this.isEmailTaken = true;
                }
            })

            // IF USERNAME IS TAKEN - CHANGE NOFICATION WINDOW TEXT AND SHOW IT
            if (this.isUsernameTaken && this.validateValue(this.username) !== initialUsername) {
                this.$store.dispatch('showNotificationWindow', {
                    text: 'This Username is taken', 
                    isBad: true
                });
                return;
            }

            // IF EMAIL IS TAKEN - CHANGE NOFICATION WINDOW TEXT AND SHOW IT
            if (this.isEmailTaken && this.validateValue(this.email) !== initialEmail) {
                this.$store.dispatch('showNotificationWindow', {
                    text: 'This Email is taken', 
                    isBad: true
                });
                return;
            }

            // IF THERE ARE CHANGES - CHANGE NOFICATION WINDOW TEXT AND SHOW IT
            this.$store.dispatch('showNotificationWindow', {
                text: 'Changes are succefully saved', 
                isBad: false
            });

            // SAVE CHANGES
            this.$store.commit('users/changeUserInfo', {
                id: this.user.id,
                newEmail: this.validateValue(this.email),
                newPassword: this.password,
                newUsername: this.validateValue(this.username),
                newTelegramUsername: this.validateValue(this.telegramUsername),
                newDiscordUserId: this.validateValue(this.discordUserId),
                newBio: this.validateValue(this.bio)
            });
            
            this.$store.commit('editProfile', {user: this.user});
        },

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
        //SHOW HIDE PASSWORD
        togglePasswordVisibility() {
            if (this.$refs.passwordInput.type === "password") {
                this.$refs.passwordInput.type = "text";
            } else {
                this.$refs.passwordInput.type = "password";
            }
        },

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
        // ASSIGN INITIAL INPUTS VALUES TO CURRENT PROFILE VALUES AND REMOVE EXCESSIVE WHITE SPACES
        assignInputValues() {
            this.username = this.validateValue(this.user.username);
            this.email = this.validateValue(this.user.email);
            this.password = this.user.password;
            this.confirmPassword = this.user.password;
            this.telegramUsername = this.validateValue(this.user.telegramUsername);
            this.discordUserId = this.validateValue(this.user.discordUserId);
            this.bio = this.validateValue(this.user.bio);
        }
    },
    
    watch: {
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
        // USER OBJECT CHANGES - CHANGE VALUES
        user() {
            this.assignInputValues();
        },
        
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
        // SELECTED FILE CHANGES - CHANGE AVATAR SOURCE
        selectedAvatarFile() {
            if (this.selectedAvatarFile?.name) {
                this.fileReader.readAsDataURL(this.selectedAvatarFile);
            }
        },
        
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
        // FILE SELECTED - CHANGE CROPPER IMAGE SOURCE
        avatarSrc() {
            if (this.selectedAvatarFile?.name) {
                this.cropper.replace(this.avatarSrc);
            } else {
                this.avatarSrc = null;
            }
        },
    },
    
    mounted () {
        this.navigationRoot = document.querySelector('.navigation-root');

        this.assignInputValues();

        // FILE READER
        this.fileReader = new FileReader();

        // AVATAR CROPPER CONFIG
        this.cropper = new Cropper(this.$refs.cropImage, {
            aspectRatio: 16 / 9,
            dragMode: 'move',
            cropBoxMovable: false,
        });
        
        this.fileReader.onload = (e) => {
            // GET NEW AVATAR SOURCE
            this.avatarSrc = e.target.result;

            this.saveImage(this.avatarSrc);

            // this.openCropper();
        }
    },
}
</script>

<style lang="scss" scoped>

::v-deep {
    .section-page {
        width: 80%;
        max-width: 1920px;
        margin: 0 auto;
    }

    @media only screen and (max-width: 1000px) {
        .section-page {
            width: 90% !important;
        }
    }
}

.edit-profile-page {

    .crop-container-wrapper {
        position: fixed;
        top: 0;
        left: 0;
        z-index: 1000000;
        width: 100%;
        height: 100vh;
        background-color: rgba(black, .5);
        backdrop-filter: blur(5px);
        transition: all .2s;
        display: none;
        opacity: 0;
    }

    .crop-container {
        @include abs-center;
        background-color: $color-grey-2;
        box-shadow: 0 .5rem 5rem rgba(0, 0, 0, 0.4);
        // width: 45rem;
        // max-width: 60rem;
        // max-height: 60rem;
        border-radius: 10px;

        .crop-image-container {
            @include flex-center;
            padding: 3rem;
            padding-bottom: 1.5rem;

            .crop-image {
                
            }
        }

        .dont-crop {
            display: block;
            margin: 0 auto;
            font-weight: 600 !important;
            color: $color-text-grey;
            font-size: 1.6rem;
            transition: all .3s;

            &:hover {
                color: lighten($color-primary, 15%);
            }
        }

        .buttons {
            display: flex;
            justify-content: center;
            padding: 2rem;

            .btn {
                padding: 1.25rem 4rem;
                width: 45%;

                &:not(:last-of-type) {
                    margin-right: 2rem;
                }
            
                @media only screen and (max-width: 850px) {
                    font-size: 2rem;
                }
            
                @media only screen and (max-width: 400px) {
                    padding: 1.25rem 3rem;
                    white-space: nowrap;
                }

                .background {
                    background-color: $color-grey-2;
                    border-radius: 6px;
                }

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
        }
    }

    .content {
        position: relative;
        z-index: 100;

        .save-button {
            margin-left: 10%;
            padding: 1.25rem 5rem;
            font-weight: 500 !important;
            margin-top: 4.5rem;
            
            @media only screen and (max-width: 1000px) {
                margin-left: 5%;
            }
            
            @media only screen and (max-width: 850px) {
                margin-left: 17%;
            }
            
            @media only screen and (max-width: 600px) {
                margin-left: 5%;
            }
        }

        .save-margin-bottom {
            margin-bottom: 10rem;
        }

        .page-sequence,
        .page-title {
            
            @media only screen and (max-width: 850px) {
                width: 66%;
            }

            @media only screen and (max-width: 600px) {
                width: 90%;
            }
        }

        .edit-form {
            background: $color-grey-dark;
            box-shadow: 0 .5rem 5rem rgba(0, 0, 0, 0.4);
            border-radius: 24px;
            display: flex;
            width: 90rem;
            padding: 3.25rem 6.5rem 3.25rem 3.75rem;
            margin-top: 4.25rem;
            margin-left: 10%;
            
            @media only screen and (max-width: 1000px) {
                margin-left: 5%;
            }
            
            @media only screen and (max-width: 850px) {
                margin-left: auto;
                width: 66%;
                flex-direction: column;
                align-items: center;
                padding: 4.5rem 4.5rem 4.5rem 4.5rem;
            }
            
            @media only screen and (max-width: 600px) {
                width: 90%;
            }
            
            .left {
                padding-top: 1rem;
                padding-right: 4rem;
            
                @media only screen and (max-width: 850px) {
                    padding: 0;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    margin-bottom: 4rem;
                }

                #imageInput {
                    display: none;
                }

                .avatar-container {
                    position: relative;
                    cursor: pointer;
                    border-radius: 100%;
                    transition: all .2s;
                    width: 14.5rem;
                    height: 14.5rem;
                    overflow: hidden;
                    margin-bottom: 1.5rem;
                    flex-shrink: 0;
            
                    @media only screen and (max-width: 850px) {
                        margin-bottom: 0;
                        margin-right: 2.5rem;
                    }

                    &::before {
                        content: '';
                        position: absolute;
                        top: 50%;
                        left: 50%;
                        transform: translate(-50%, -50%);
                        width: 150%;
                        height: 150%;
                        opacity: 0;
                        transition: all .2s;
                        background: url(@/assets/svg/avatar-upload-hover.svg) no-repeat center, rgba(0, 0, 0, 0.7);
                    }

                    &:hover::before {
                        opacity: 1;
                    }

                    .avatar {
                        width: 100%;
                        height: 100%;
                        border-radius: 100%;
                        object-fit: cover;
                    }
                }

                .change-button {
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    width: 100%;
                    font-size: 1.6rem;
                    font-weight: 400 !important;
                    transition: all .2s;
                    color: $color-orange;
            
                    @media only screen and (max-width: 850px) {
                        font-size: 1.9rem;
                    }

                    &:hover {
                        color: darken($color-orange, 12%);
                    }

                    .icon {
                        margin-right: 1rem;
                        width: 2rem;
                        height: 2rem;
                    }
                }
            }

            .right {
                border-left: 1.5px solid $color-grey-2;
                padding-left: 4rem;
            
                @media only screen and (max-width: 850px) {
                    border: none;
                    padding: 0;
                }

                .flex-container {
                    display: flex;
                    align-items: center;
            
                    @media only screen and (max-width: 850px) {
                        flex-direction: column;
                    }

                    .input-group:first-of-type {
                        margin-right: 2.5rem;
            
                        @media only screen and (max-width: 850px) {
                            margin-right: 0;
                        }
                    }
                }

                .input-container {
                    position: relative;
                }

                .eye-container {
                    cursor: pointer;
                    position: absolute;
                    right: 2rem;
                    width: 1.75rem;
                    min-width: 16px;
                    top: 50%;
                    transform: translateY(-50%);

                    @media only screen and (max-width: 850px) {
                        width: 2.25rem;
                    }

                    @media only screen and (max-width: 600px) {
                        width: 2.5rem;
                    }
                }

                .eye-icon {
                    width: 100%;
                    margin-bottom: -2px;
                }

                .input-group {
                    position: relative;
                    
                    input,
                    textarea {
                        display: block;
                        background-color: #111111;
                        box-shadow: 0 .3rem 1rem 0 rgba(#000000, .2) inset,
                        0 .3rem 1rem 0 rgba(#19151F, .5);
                        border-radius: 8px;
                        padding: .8rem 2.5rem;
            
                        @media only screen and (max-width: 850px) {
                            padding: 1.1rem 2.5rem;
                        }
                    }

                    .password-input {
                        padding-right: 5.5rem;
                    }

                    input {
                        margin-bottom: 1.75rem;
                        width: 26rem;
            
                        @media only screen and (max-width: 850px) {
                            width: 40rem;
                        }
                    }

                    textarea {
                        width: 100%;
                        padding: 1.25rem 2.5rem;
            
                        @media only screen and (max-width: 850px) {
                            width: 40rem;
                        }
                    }

                    label {
                        display: inline-block;
                        margin-bottom: .8rem;
                    }

                    .emoji-main-container {
                        position: absolute;
                        right: 2rem;
                        bottom: 1rem;
                        
                        .emoji-picker-wrapper {
                            position: absolute;
                            right: -1rem;
                            bottom: 4.25rem;
                            border-radius: 10px;

                            @media only screen and (max-width: 1000px) {
                                bottom: 5rem;
                            }

                            @media only screen and (max-width: 450px) {
                                right: -2rem;
                                bottom: 4.5rem;
                            }

                            &::before {
                                border-bottom: 10px solid $color-grey-2;
                                border-left: 9px solid rgba(0, 0, 0, 0);
                                border-right: 9px solid rgba(0, 0, 0, 0);
                                transform: rotate(180deg);
                                content: "";
                                display: inline-block;
                                right: 10px;
                                position: absolute;
                                bottom: -10px;
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
    }

    .grid-image {
        position: absolute;
        right: 0;
        top: 13%;
        width: 24rem;
            
        @media only screen and (max-width: 850px) {
            top: 25%;
        }
    }
}
</style>