<template>
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
</template>

<script>
export default {
    props: ['selectedAvatarFileBase', 'avatarSrcBase'],

    data() {
        return {
            selctedFile: null,
            bannerSrc: null,
        }
    },

    computed: {
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
        // USER ID
        myUserId() {
            return this.$store.state.user.id;
        },
    },

    methods: {
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
            this.$emit('fileClearIndicator', true);
        },

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
        // SAVE NEW USER AVATAR
        saveImage(newAvatar) {
            // SET NEW USER AVATAR
            this.$store.commit('users/changeAvatar', {id: this.myUserId, newAvatar: newAvatar});

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
    },

    watch: {
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
        // DOM
        this.navigationRoot = document.querySelector('.navigation-root');

        // AVATAR CROPPER CONFIG
        this.cropper = new Cropper(this.$refs.cropImage, {
            aspectRatio: 16 / 9,
            dragMode: 'move',
            cropBoxMovable: false,
        });
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
    min-height: var(--app-height);
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
    }
}
</style>