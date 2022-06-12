<template>
    <div class="root">
        <img src="@/assets/img/cornerLight.png" alt="Corner light" class="corner-light">

        <div class="relative-container">
            <div class="report-id-page form-page section section-page">
                <div class="content">
                    <div class="page-sequence">
                        <nuxt-link to="/">Main</nuxt-link>
                        <img src="@/assets/svg/arrowSmall.svg" alt="Arrow" class="arrow">
                        <span>Report Product</span>
                    </div>
                    <h1 class="page-title">Report Product</h1>

                    <div class="form-container">
                        <form @submit.prevent action="#" class="form">
                            <div class="input-group">
                                <label for="reason">Reason</label>
                                <div class="select">
                                    <input ref="dropdownOpener" @click="toggleDropdown" class="full-width" v-model="reason" type="text" id="reason" placeholder="Misinformation" readonly>
                                    <img ref="dropdownArrow" src="@/assets/svg/arrowSmall.svg" alt="Arrow" class="arrow">
                                    <div ref="selectionDropdown" class="options">
                                        <div @click="selectOption('Misinformation')" class="option">Misinformation</div>
                                        <div @click="selectOption('Lie')" class="option">Lie</div>
                                        <div @click="selectOption('Pornography')" class="option">Pornography</div>
                                        <div @click="selectOption('Bad quality')" class="option">Bad quality</div>
                                    </div>
                                </div>
                            </div>
                            <div class="input-group">
                                <label for="info">Info</label>
                                <textarea @input="autoGrow" v-model="description" id="info" name="info" cols="30" wrap="soft" placeholder="Provide accurate info"></textarea>
                            </div>
                            <button @click="report" @submit="report" type="submit" class="btn btn-gradient btn-medium"><span>Report</span></button>
                        </form>
                    </div>
                </div>
                <img src="@/assets/img/reportProduct.png" alt="Report" class="form-image">

            </div>
        </div>
    </div>
</template>

<script>
export default {
    middleware: ['notLoggedIn'],

    data() {
        return {
            reason: 'Misinformation',
            description: null,
        }
    },

    computed: {
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
        // MY USER
        myUser() {
            return this.$store.state.user; 
        },
    },
    
    methods: {
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
        // REPORT FUNCTION
        report() {
            this.$store.dispatch('showNotificationWindow', {
                text: 'Your report has been sent', 
                isBad: false
            });

            const reportObject = {
                id: (this.$_uid * Date.now()).toString(),
                category: this.reason,
                description: this.description,
                cards: this.product.name,
                reporterId: this.myUser.id,
                sellerId: this.product.sellerId,
                status: 'opened',
            }

            this.$store.commit('adminDashboard/addReport', {newReport: reportObject});
        },

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
        // GROW TEXTAREA ON TEXT WRAP
        autoGrow(e) {
            e.target.style.height = "5px";
            e.target.style.height = (e.target.scrollHeight) + "px";
        },
        
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
        // SELECTION DROPDOWN
        toggleDropdown() {
            if (!this.$refs.selectionDropdown.classList.contains('opened')) {
                this.$refs.selectionDropdown.classList.add('opened');
                this.$refs.selectionDropdown.style.display = 'block';
                this.$refs.dropdownArrow.style.transform = 'rotate(-180deg)';
                setTimeout(() => {
                    this.$refs.selectionDropdown.style.opacity = 1;
                }, 10);
            } else {
                this.closeDropdown();
            }
        },
        
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
        // CLOSE SELECTION DROPDOWN
        closeDropdown() {
            this.$refs.selectionDropdown.style.opacity = 0;
            this.$refs.dropdownArrow.style.transform = 'rotate(0deg)';
            setTimeout(() => {
                this.$refs.selectionDropdown.style.display = 'none';
                this.$refs.selectionDropdown.classList.remove('opened');
            }, 200);
        },
        
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
        // SELECTION OPTION FUNCTIONAL
        selectOption(option) {
            this.$refs.dropdownOpener.value = option;
        },
    },

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    // FIND AND LOAD THE PRODUCT
    created () {
        this.product = this.$store.state.products.products.find((product) => {
            if (product.id === this.$route.params.id) {
                return product;
            }
        })
    },

    mounted () {
        // CLOSE DROPDOWN AND CHANGE STYLES BACK ON UNFOCUS
        window.addEventListener('click', (e) => {
            const isClickInsideElement = this.$refs.dropdownOpener?.contains(e.target);

            if (!isClickInsideElement && this.$refs.selectionDropdown?.classList.contains('opened')) {
                this.closeDropdown();
            }
        });
    },
}
</script>

<style lang="scss" scoped>
.corner-light {
    display: block !important;
    top: -15rem;
}

.report-id-page {
    min-height: calc(100vh - 11rem);
            
    @media only screen and (max-width: 850px) {
        min-height: calc(100vh - 15rem);
    }

    .form-image {
        height: auto;
        width: 65rem;
        right: 5%;
        top: -10%;
        
        @media only screen and (max-width: 1100px) {
            right: -5%;
        }
        
        @media only screen and (max-width: 850px) {
            display: none;
        }
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

        input,
        textarea {
            width: 37rem;
        }
        
        textarea {
            min-height: 8rem;
        }

        .page-title {
            margin-bottom: 1.75rem;
        }

        .form,
        .form-container {
            width: fit-content;
        }

        .form-container {
            @media only screen and (max-width: 850px) {
                width: 100%;
            }
        }
    }
}
</style>