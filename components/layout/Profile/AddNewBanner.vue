<template>
    <div @click="closeWindowOnBackground" ref="addImageWindow" class="add-image-window-wrapper">
        <div class="add-image-window">
            <h1 class="title">Upload an image</h1>
            <div @click="triggerFileSelection" class="image-container">
                <img v-if="bannerSrc" key="bannerImage" :src="bannerSrc" alt="Prewiew image" class="new-banner-image">
                <div v-if="!bannerSrc" key="contentCenter" class="content-center">
                    <img src="@/assets/svg/downloadCloud.svg" alt="Download cloud" class="download-icon">
                    <p>Download</p>
                </div>
            </div>
            <input @change="fileChanged" ref="imageInput" type="file" accept=".jpg, .jpeg, .png" id="imageInput">
            <button v-if="userBanner" @click="setToInitial" class="return-to-initial">Set banner to initial</button>
            <div class="buttons">
                <button @click="attach" class="button-attach">Attach</button>
                <button v-if="bannerSrc" key="changeBtn" @click="triggerFileSelection" class="button-change">Change</button>
                <button @click="closeWindow" class="button-cancel">Cancel</button>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: ['banner'],

    data() {
        return {
            selctedFile: null,
            bannerSrc: null,
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
        // USER BANNER
        userBanner() {
            if (this.banner === 'topBanner') {
                return this.user.topBanner;
            } else if (this.banner === 'sideBanner') {
                return this.user.sideBanner;
            }
        },
    },

    methods: {
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
        // ATTACH IMAGE
        attach() {
            if (!this.bannerSrc) {
                // IF YOU DIDN'T ATTACH THE FILE - SHOW ERROR
                this.$store.dispatch('showNotificationWindow', {
                    text: 'You need to attach image first', 
                    isBad: true
                });
                return;
            }
            this.saveImage();
            this.closeWindow();
        },
        
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
        // SET TO INITIAL
        setToInitial() {
            this.closeWindow();

            if (this.banner === 'topBanner') {
                this.$store.commit('users/changeTopBanner', {id: this.user.id, newBanner: null});
            } else if (this.banner === 'sideBanner') {
                this.$store.commit('users/changeSideBanner', {id: this.user.id, newBanner: null});
            }

            this.$store.dispatch('showNotificationWindow', {
                text: 'Banner was set to initial', 
                isBad: false
            });
        },

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
                this.selctedFile = files[0];
            } else {
                this.selctedFile = files;
            }
        },
        
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
        // CLOSE WINDOW
        closeWindow() {
            if (!this.$refs.addImageWindow.classList.contains('opened')) return;
            this.fileCleared();
            this.$refs.addImageWindow.style.opacity = 0;
            this.navigationRoot.style.display = 'block';
            setTimeout(() => {
                this.$refs.addImageWindow.style.display = 'none';
                this.$refs.addImageWindow.classList.remove('opened');
            }, 200)
        },
        
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
        // CLOSE Window ON BACKGROUND CLICK
        closeWindowOnBackground(e) {
            if (!e.target.classList.contains('add-image-window-wrapper')) return;
            this.closeWindow();
        },
        
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
        // EVENT IF FILE IS CLEARED
        fileCleared() {
            this.$refs.imageInput.value = null;
            this.$refs.imageInput.values = [];
            this.selctedFile = null;
            this.bannerSrc = null;
        },

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
        // SAVE NEW BANNER
        saveImage() {
            // SET NEW BANNER
            if (this.banner === 'topBanner') {
                this.$store.commit('users/changeTopBanner', {id: this.user.id, newBanner: this.bannerSrc});
            } else if (this.banner === 'sideBanner') {
                this.$store.commit('users/changeSideBanner', {id: this.user.id, newBanner: this.bannerSrc});
            }

            // IF YOUR BANNER IMAGE CHANGED SUCCESSFULLY - SHOW MESSAGE
            this.$store.dispatch('showNotificationWindow', {
                text: 'Your banner image changed successfully', 
                isBad: false
            });
        },
    },
    
    watch: {
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
        // SELECTED FILE CHANGES - CHANGE IMAGE SOURCE
        selctedFile() {
            if (this.selctedFile?.name) {
                this.fileTopBannerReader.readAsDataURL(this.selctedFile);
            }
        },
    },

    mounted () {
        this.navigationRoot = document.querySelector('.navigation-root');

        // FILE READER
        this.fileTopBannerReader = new FileReader();
        
        this.fileTopBannerReader.onload = (e) => {
            // GET NEW AVATAR SOURCE
            this.bannerSrc = e.target.result;
        }
    },
}
</script>

<style lang="scss" scoped>
.new-banner-image {
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    z-index: 1000;
}

.add-image-window-wrapper {
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

.add-image-window {
    @include abs-center;
    background-color: $color-grey;
    box-shadow: 0 .5rem 5rem rgba(0, 0, 0, 0.4);
    border-radius: 10px;
    padding: 5rem;

    #imageInput {
        display: none;
    }

    .title {
        font-size: 4.25rem;
        margin-bottom: 3rem;
    }

    .image-container {
        width: 52rem;
        height: 17rem;
        border: 2px dashed $color-primary;
        position: relative;
        cursor: pointer;

        @media only screen and (max-width: 500px) {
            width: 43rem;
        }

        @media only screen and (max-width: 400px) {
            width: 38rem;
        }


        .content-center {
            @include abs-center;
            text-align: center;


            .download-icon {

            }

            p {

            }
        }
    }

    .return-to-initial {
        display: block;
        margin-left: auto;
        margin-top: 1rem;
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
        margin-top: 2rem;

        button {
            padding: 1.1rem 2.2rem;
            border: 1px solid $color-primary;
            color: white;
            font-weight: 700 !important;
            transition: all .3s;


            &:not(:last-of-type) {
                margin-right: 1.25rem;
            }

            &:hover {
                transform: scale(1.05);
            }
        }

        .button-attach {
            background-color: $color-primary;
        }

        .button-change {
            background-image: linear-gradient(135deg, $color-primary 50%, transparent 50%);
        }

        .button-cancel {
            
        }
    }
}
</style>