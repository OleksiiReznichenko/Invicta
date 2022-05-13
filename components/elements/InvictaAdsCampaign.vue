<template>
    <div class="toggle-container campaign">
        <div class="title-container">
            <div class="title-container__left">
                <!-- <h3 class="title">{{customName}}</h3> -->
                <input @input="setWidth" ref="customNameInput" @keypress.enter="addDisabled" @blur="addDisabled" disabled minlength="1" maxlength="18" type="text" class="custom-name title" v-model="customNameLocal">
                <div class="icon-container">
                    <img src="@/assets/svg/editIcon.svg" alt="Icon" class="icon">
                </div>
            </div>
            <div class="title-container__right">
                <span class="title">{{name}} {{itemsAmount}} {{itemsText}}</span>
                <img src="@/assets/svg/arrowSmall.svg" alt="Arrow" class="arrow">
            </div>
        </div>
        <div class="notifications-list description-container">
            <div class="description">
                    Led as possible mistress relation elegance eat likewise debating. <br> By message or am nothing amongst chiefly address. The its enable direct men depend highly. Ham windows sixteen who inquiry fortune demands. Is be upon sang fond must show.
                    Led as possible mistress relation elegance eat likewise debating. <br> By message or am nothing amongst chiefly address. The its enable direct men depend highly. Ham windows sixteen who inquiry fortune demands. Is be upon sang fond must show.
                    Led as possible mistress relation elegance eat likewise debating. <br> By message or am nothing amongst chiefly address. The its enable direct men depend highly. Ham windows sixteen who inquiry fortune demands. Is be upon sang fond must show.
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: ['id', 'type', 'name', 'customName', 'itemsAmount'],

    data() {
        return {
            customNameLocal: this.customName,
            customNameLocalCopy: this.customName,
        }
    },

    computed: {
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
        // CHANGE TEXT IF TEXT AMOUNT IS 1
        itemsText() {
            if (this.itemsAmount == 1) {
                return 'item'
            } else {
                return 'items'
            }
        },

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
        // REMOVE EXCESSIVE WHITE SPACES IN VALUE
        customNameValidated() {
            if (this.customNameLocal.includes(' ') >= 0) {
                const customNameArr = this.$refs.customNameInput.value.split(' ');

                const customNameArr2 = customNameArr.filter(el => {
                if (el.replace(/\s/g, '')) {
                    return el.replace(/\s/g, '');
                }
                })

                const customName = customNameArr2.join(' ');
                this.customNameLocal = customName;
                return customName;
            } else {
                return this.customNameLocal;
            }
        }
    },

    methods: {
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
        // DISABLE INPUT IF NOT FOCUSED AND UPDATE VARIABLES AND INPUT WIDTH
        addDisabled(e) {
            if (!this.customNameValidated) {
                this.customNameLocal = this.customNameLocalCopy;
                this.$refs.customNameInput.setAttribute('size', this.initialInputSize);
            } else {
                this.customNameLocalCopy = this.customNameLocal;
                this.initialInputSize = this.customNameLocal.length - 7;
                this.$refs.customNameInput.setAttribute('size', this.initialInputSize);

                this.$store.commit('campaigns/changeCustomName', {id: this.id, type: this.type, newName: this.customNameLocal})
            }
            this.$refs.customNameInput.classList.remove('not-disabled');
            this.$refs.customNameInput.setAttribute('disabled', true)
        },

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
        // CHANGE INPUT WIDTH ON TYPING
        setWidth(e) {
            if (e.target.value.length - 7 < 1) return
            e.target.setAttribute('size', e.target.value.length - 7);
        },
    },

    mounted () {
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
        // SET INITIAL INPUT WIDTH
        this.initialInputSize = this.$refs.customNameInput.value.length - 7;
        this.$refs.customNameInput.setAttribute('size', this.initialInputSize);
    },
}
</script>

<style lang="scss" scoped>
.title-container {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 1.6rem 3rem;
    background-color: $color-grey;
    border-radius: 10px;
    margin-top: 2rem;
    cursor: pointer;

    @media only screen and (max-width: 500px) {
        flex-direction: column;
        justify-content: flex-start;
        align-items: flex-start;;
        padding: 3rem 3rem;
    }

    &__left {
        display: flex;
        align-items: center;

        @media only screen and (max-width: 500px) {
            margin-bottom: 1rem;
        }

        .custom-name {
            font-family: Rowdies;
            font-weight: 300 !important;
            font-size: 2.75rem;
            // width: 20rem;

            @media only screen and (max-width: 500px) {
                font-size: 3.2rem;
            }
        }

        .custom-name[disabled] {
            cursor: pointer;
        }

        .icon-container {
            width: 3rem;
            height: 3rem;
            margin-left: 2rem;
            margin-top: -1rem;
            transition: all .3s;
            border-radius: 5px;
            @include flex-center;

            @media only screen and (max-width: 500px) {
                width: 4rem;
                height: 4rem;
            }

            &:hover {
                background-color: lighten($color-grey-2, 5%);
            }

            .icon {
                width: 1.75rem;
                min-width: 15px;
                position: relative;
                z-index: 100;

                @media only screen and (max-width: 500px) {
                    width: 2.75rem;
                }
            }
        }
    }

    &__right {
        display: flex;
        align-items: center;

        .title {
            padding-right: 2rem;
            font-size: 1.5rem;
            font-weight: 500 !important;
            color: $color-text-grey;

            @media only screen and (max-width: 500px) {
                font-size: 2rem;
            }
        }

        .arrow {
            width: 1.4rem;
        }
    }
}

.description-container {
    padding: 2rem 1rem;
    display: none;
}
</style>