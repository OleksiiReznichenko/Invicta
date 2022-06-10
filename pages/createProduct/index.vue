!<template>
    <div class="root">
        <img src="@/assets/img/cornerLight.png" alt="Corner light" class="corner-light">
        <div class="create-product-page section section-page">
            <div class="content">
                <form @submit.prevent action="#" class="form left">
                    <div class="page-sequence">
                        <nuxt-link to="/">Main</nuxt-link>
                        <img src="@/assets/svg/arrowSmall.svg" alt="Arrow" class="arrow">
                        <span>Create new product</span>
                    </div>
                    <h1 class="page-title">Create new product</h1>
                    <div class="image-updloader-container">
                        <h4 class="purple-title">Upload cover image</h4>
                        <p class="subheading">Click to choose your file to upload</p>
                        <div @click="triggerFileSelection" class="image-uploader data-container">
                            <img v-if="imageSrc" key="bannerImage" :src="imageSrc" alt="Prewiew image" class="new-banner-image">
                            <div v-if="!imageSrc" key="contentCenter" class="content-center">
                                <img src="@/assets/svg/uploadImageIcon.svg" alt="Download cloud" class="download-icon">
                                <p>Click to upload - PNG, JPG, JPEG</p>
                            </div>
                            <input @change="fileChanged" ref="imageInput" type="file" accept=".jpg, .jpeg, .png" id="imageInput" required>
                        </div>
                        <div v-if="imageSrc" class="buttons">
                            <div @click.prevent="triggerFileSelection" class="button button-change">Change</div>
                            <div @click.prevent="fileCleared" class="button button-clear">Clear</div>
                        </div>
                    </div>
                    <div class="product-details-container">
                        <h4 class="purple-title">Product details</h4>
                        <div class="product-details data-container">
                            <div class="flex-container">
                                <div class="input-group">
                                    <label for="title">Title</label>
                                    <input v-model="title" type="text" class="input-validate" id="title" placeholder="e. g. «Xbox Giftcards»" required>
                                </div>
                                <div class="input-group">
                                    <label for="amountInStock">Amount in stock</label>
                                    <input v-model="amountInStock" type="number" class="input-validate" id="amountInStock" min="1" placeholder="9" required>
                                </div>
                            </div>
                            <div class="flex-container">
                                <div class="input-group">
                                    <label for="type">Type</label>
                                    <div class="select">
                                        <input ref="typeDropdownOpener" id="typeDropdownOpener" @click="toggleTypeDropdown" v-model="type" class="full-width" type="text" placeholder="Select the type" readonly>
                                        <img ref="typeDropdownArrow" id="typeDropdownArrow" src="@/assets/svg/arrowSmall.svg" alt="Arrow" class="arrow">
                                        <div ref="typeSelectionDropdown" id="typeSelectionDropdown" class="options">
                                            <div @click="selectTypeOption('Giftcard')" class="option">Giftcard</div>
                                            <div @click="selectTypeOption('Account')" class="option">Account</div>
                                        </div>
                                    </div>
                                </div>
                                <div class="input-group">
                                    <label for="category">Category</label>
                                    <div class="select">
                                        <input ref="categoryDropdownOpener" id="categoryDropdownOpener" @click="toggleCategoryDropdown" v-model="category" class="full-width" type="text" placeholder="Select the type" readonly>
                                        <img ref="categoryDropdownArrow" id="categoryDropdownArrow" src="@/assets/svg/arrowSmall.svg" alt="Arrow" class="arrow">
                                        <div ref="categorySelectionDropdown" id="categorySelectionDropdown" class="options">
                                            <div @click="selectCategoryOption('Technology')" class="option">Technology</div>
                                            <div @click="selectCategoryOption('Beauty')" class="option">Beauty</div>
                                            <div @click="selectCategoryOption('Food')" class="option">Food</div>
                                            <div @click="selectCategoryOption('Clothes')" class="option">Clothes</div>
                                            <div @click="selectCategoryOption('Gaming')" class="option">Gaming</div>
                                            <div @click="selectCategoryOption('Streaming')" class="option">Streaming</div>
                                            <div @click="selectCategoryOption('Entertainment')" class="option">Entertainment</div>
                                            <div @click="selectCategoryOption('Travel')" class="option">Travel</div>
                                            <div @click="selectCategoryOption('Shopping')" class="option">Shopping</div>
                                            <div @click="selectCategoryOption('Wellness')" class="option">Wellness</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="flex-container">
                                <div class="input-group">
                                    <label for="price">Price</label>
                                    <input v-model="price" type="number" class="input-validate" id="price" min="1" placeholder="99.99" required>
                                </div>
                                <div class="input-group">
                                    <label for="oldPrice">Old price</label>
                                    <input v-model="oldPrice" type="number" class="input-validate" id="oldPrice" min="1" placeholder="199.99">
                                </div>
                            </div>
                            <div class="flex-container">
                                <div class="input-group">
                                    <label for="tags">Tags (seperate by space)</label>
                                    <input v-model="tags" type="text" class="input-validate" id="tags" placeholder="#Adidas #Sport #Gloves">
                                </div>
                                <div class="input-group">
                                    <label for="sellRate">Sell rate %</label>
                                    <input v-model="sellRate" type="number" class="input-validate" id="sellRate" min="1" placeholder="20">
                                </div>
                            </div>
                            <div class="flex-container">
                                <div class="input-group">
                                    <label for="country">Country (WW = Worldwide)</label>
                                    <input v-model="country" type="text" class="input-validate" id="country" placeholder="US" required>
                                </div>
                                <div class="input-group">
                                    <label for="eta">ETA</label>
                                    <input v-model="eta" type="text" class="input-validate" id="eta" placeholder="8-14 days" required>
                                </div>
                            </div>
                            <div class="flex-container">
                                <div class="input-group">
                                    <label for="termsOfService">Terms of service</label>
                                    <input v-model="termsOfService" type="text" class="input-validate" id="termsOfService" placeholder="Terms of service" required>
                                </div>
                                <div class="input-group">
                                    <label for="warranty">Warranty</label>
                                    <input v-model="warranty" type="text" class="input-validate" id="warranty" placeholder="Warranty" required>
                                </div>
                            </div>
                            <div class="input-group textarea-group">
                                <label for="description">Description</label>
                                <textarea @input="autoGrow" v-model="description" ref="descriptionInput" class="input-validate" id="description" name="description" cols="30" rows="1" wrap="soft" placeholder="Enter your description" required></textarea>
                            </div>
                            <div class="input-group textarea-group">
                                <label for="cards">Cards</label>
                                <textarea @input="autoGrow" v-model="cards" ref="cardsInput" class="input-validate" id="cards" name="cards" cols="30" rows="1" wrap="soft" placeholder="Enter your cards"></textarea>
                            </div>
                            <div class="checkbox-group">
                                <div class="checkbox-info">
                                    <label for="checkboxPin">Do cards have pin?</label>
                                    <p>
                                        If not, cards will be sorted by card:balance. Otherwise cards will be sorted by card:pin:balance
                                    </p>
                                </div>
                                <div class="checkbox-container">
                                    <input ref="checkboxPin" type="checkbox" class="checkbox" id="checkboxPin" value="yes">
                                    <img src="@/assets/svg/checkMark2.svg" alt="Check mark" class="check-mark">
                                </div>
                            </div>
                            <div class="checkbox-group">
                                <div class="checkbox-info">
                                    <label for="checkboxPromote">Promote Product</label>
                                    <p>
                                        Your product will be promoted throughout the site (eg: on home page) in exchange for the fee we take raising to 15% on every sale
                                    </p>
                                </div>
                                <div class="checkbox-container">
                                    <input ref="checkboxPromote" type="checkbox" class="checkbox" id="checkboxPromote" value="yes">
                                    <img src="@/assets/svg/checkMark2.svg" alt="Check mark" class="check-mark">
                                </div>
                            </div>
                            <div class="buttons">
                                <button @click="post" @submit="post" type="submit" class="btn btn-gradient"><span>Post</span></button>
                                <button @click.prevent="openPreview" @submit.prevent="openPreview" class="btn btn-transparent button-preview"><div class="background"></div><span>Preview</span></button>
                            </div>
                        </div>
                    </div>
                </form>
                <div class="right">
                    <div class="background"></div>
                    <ProductCard 
                        :name="title"
                        :photo="imageSrc"
                        :price="price"
                        :oldPrice="oldPrice"
                        :amountInStock="amountInStock"
                        :linkDisable='true'
                    />
                </div>
            </div>
            <Footer />
        </div>
        <div @click="closePreviewOnBackground" ref="addImageWindow" class="preview-window">
            <div class="center-container">
                <ProductCard 
                    :name="title"
                    :photo="imageSrc"
                    :price="price"
                    :oldPrice="oldPrice"
                    :amountInStock="amountInStock"
                    :createProductPage='true'
                />
                <button @click.prevent="closePreview" @submit.prevent type="submit" class="btn btn-gradient button-preview-close"><span>Close</span></button>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    middleware: ['notLoggedIn'],

    data() {
        return {
            title: null,
            amountInStock: null,
            type: null,
            category: null,
            price: null,
            oldPrice: null,
            tags: null,
            sellRate: null,
            country: null,
            eta: null,
            termsOfService: null,
            warranty: null,
            description: null,
            cards: null,
            selctedFile: null,
            imageSrc: null,
        }
    },

    computed: {
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
        // MY USER ID
        myUserId() {
            return this.$store.state.user.id; 
        }
    },

    methods: {
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
        // POST
        post() {
            let isEveryInputValid = true;

            // CHECK IF EVERY INPUT IS VALID
            this.inputs.forEach(input => {
                if (!input.checkValidity()) {
                    isEveryInputValid = false;
                }
            })

            // IF NOT EVERY INPUT IS VALID - STOP
            if (!isEveryInputValid) return;

            // IF IMAGE IS NOT SELECTED - SHOW ERORR
            if (!this.imageSrc) {
                this.$store.dispatch('showNotificationWindow', {
                    text: 'You need to select product image', 
                    isBad: true
                });
                return;
            }

            // IF TITLE IS EMPTY - SHOW ERORR
            const validatedTitle = this.validateValue(this.title);
            if (!validatedTitle) {
                this.$store.dispatch('showNotificationWindow', {
                    text: 'Title can\'t be empty', 
                    isBad: true
                });
                return;
            }

            // IF TYPE IS EMPTY - SHOW ERORR
            if (!this.type) {
                this.$store.dispatch('showNotificationWindow', {
                    text: 'You need to select product type', 
                    isBad: true
                });
                return;
            }

            // IF TYPE IS EMPTY - SHOW ERORR
            if (!this.type) {
                this.$store.dispatch('showNotificationWindow', {
                    text: 'You need to select product type', 
                    isBad: true
                });
                return;
            }

            // IF CATEGORY IS EMPTY - SHOW ERORR
            if (!this.category) {
                this.$store.dispatch('showNotificationWindow', {
                    text: 'You need to select product category', 
                    isBad: true
                });
                return;
            }

            // IF COUNTRY IS EMPTY - SHOW ERORR
            const validatedCountry = this.validateValue(this.country);
            if (!validatedCountry) {
                this.$store.dispatch('showNotificationWindow', {
                    text: 'Country can\'t be empty', 
                    isBad: true
                });
                return;
            }

            // IF ETA IS EMPTY - SHOW ERORR
            const validatedEta = this.validateValue(this.eta);
            if (!validatedEta) {
                this.$store.dispatch('showNotificationWindow', {
                    text: 'Eta can\'t be empty', 
                    isBad: true
                });
                return;
            }

            // IF TERMS OF SERVICE IS EMPTY - SHOW ERORR
            const validatedTermsOfService = this.validateValue(this.termsOfService);
            if (!validatedTermsOfService) {
                this.$store.dispatch('showNotificationWindow', {
                    text: 'Terms of Service can\'t be empty', 
                    isBad: true
                });
                return;
            }

            // IF WARRANTY IS EMPTY - SHOW ERORR
            const validatedWarranty = this.validateValue(this.warranty);
            if (!validatedWarranty) {
                this.$store.dispatch('showNotificationWindow', {
                    text: 'Warranty can\'t be empty', 
                    isBad: true
                });
                return;
            }

            // IF DESCRIPTION IS EMPTY - SHOW ERORR
            const validatedDescription = this.validateValue(this.description);
            if (!validatedDescription) {
                this.$store.dispatch('showNotificationWindow', {
                    text: 'Description can\'t be empty', 
                    isBad: true
                });
                return;
            }

            const newProductObject = {
                id: (this.$_uid * Date.now()).toString(),
                type: this.type.toLowerCase(),
                category: this.category.toLowerCase(),
                name: this.title,
                price: this.price,
                oldPrice: this.oldPrice,
                photo: this.imageSrc,
                photoBig: this.imageSrc,
                discount: '',
                amountInStock: this.amountInStock,
                country: validatedCountry,
                description: validatedDescription,
                warranty: validatedWarranty,
                eta: validatedEta,
                sellerId: this.myUserId,
            };

            // CREATE NEW PRODUCT
            this.$store.commit('products/createNewProduct', {newProduct: newProductObject});

            // CREATE NEW PRODUCT
            this.$store.commit('users/createNewProduct', {userId: this.myUserId, newProduct: newProductObject});

            // IF NEW PRODUCT CREATED SUCCESSFULLY - SHOW MESSAGE
            this.$store.dispatch('showNotificationWindow', {
                text: 'New product created successfully', 
                isBad: false
            });
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
        // GROW TEXTAREA ON TEXT WRAP
        autoGrow(e) {
            e.target.style.height = "5px";
            e.target.style.height = (e.target.scrollHeight) + "px";
        },

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
        // TYPE SELECTION DROPDOWN
        toggleTypeDropdown() {
            if (!this.typeSelectionDropdown.classList.contains('opened')) {
                this.typeSelectionDropdown.classList.add('opened');
                this.typeSelectionDropdown.style.display = 'block';
                this.typeDropdownArrow.style.transform = 'rotate(-180deg)';
                setTimeout(() => {
                    this.typeSelectionDropdown.style.opacity = 1;
                }, 10);
            } else {
                this.typeSelectionDropdown.style.opacity = 0;
                this.typeDropdownArrow.style.transform = 'rotate(0deg)';
                setTimeout(() => {
                    this.typeSelectionDropdown.style.display = 'none';
                    this.typeSelectionDropdown.classList.remove('opened');
                }, 200);
            }
        },

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
        // CATEGORY SELECTION DROPDOWN
        toggleCategoryDropdown() {
            if (!this.categorySelectionDropdown.classList.contains('opened')) {
                this.categorySelectionDropdown.classList.add('opened');
                this.categorySelectionDropdown.style.display = 'block';
                this.categoryDropdownArrow.style.transform = 'rotate(-180deg)';
                setTimeout(() => {
                    this.categorySelectionDropdown.style.opacity = 1;
                }, 10);
            } else {
                this.categorySelectionDropdown.style.opacity = 0;
                this.categoryDropdownArrow.style.transform = 'rotate(0deg)';
                setTimeout(() => {
                    this.categorySelectionDropdown.style.display = 'none';
                    this.categorySelectionDropdown.classList.remove('opened');
                }, 200);
            }
        },
        
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
        // SELECTION TYPE OPTION FUNCTIONAL
        selectTypeOption(option) {
            this.type = option;
        },
        
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
        // SELECTION CATEGORY OPTION FUNCTIONAL
        selectCategoryOption(option) {
            this.category = option;
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
        // EVENT IF FILE IS CLEARED
        fileCleared() {
            this.$refs.imageInput.value = null;
            this.$refs.imageInput.values = [];
            this.selctedFile = null;
            this.imageSrc = null;
        },
        
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
        // CLOSE PREVIEW
        openPreview() {
            if (this.$refs.addImageWindow?.classList.contains('opened')) return;
            this.$refs.addImageWindow.style.display = 'block';
            this.$refs.addImageWindow.classList.add('opened');
            setTimeout(() => {
                this.$refs.addImageWindow.style.opacity = 1;
                this.navigationRoot.style.display = 'none';
            }, 10)
        },
        
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
        // CLOSE PREVIEW
        closePreview() {
            if (!this.$refs.addImageWindow.classList.contains('opened')) return;
            this.$refs.addImageWindow.style.opacity = 0;
            this.navigationRoot.style.display = 'block';
            setTimeout(() => {
                this.$refs.addImageWindow.style.display = 'none';
                this.$refs.addImageWindow.classList.remove('opened');
            }, 200)
        },
        
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
        // CLOSE PREVIEw ON BACKGROUND CLICK
        closePreviewOnBackground(e) {
            if (!e.target.classList.contains('preview-window')) return;
            this.closePreview();
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
        // DOM
        this.inputs = Array.from(document.querySelectorAll('.input-validate'));

        this.navigationRoot = document.querySelector('.navigation-root');

        this.typeSelectionDropdown = document.getElementById('typeSelectionDropdown');
        this.typeDropdownArrow = document.getElementById('typeDropdownArrow');
        this.typeDropdownOpener = document.getElementById('typeDropdownOpener');
        
        this.categorySelectionDropdown = document.getElementById('categorySelectionDropdown');
        this.categoryDropdownArrow = document.getElementById('categoryDropdownArrow');
        this.categoryDropdownOpener = document.getElementById('categoryDropdownOpener');

        // CLOSE DROPDOWN AND CHANGE STYLES BACK ON UNFOCUS
        window.addEventListener('click', (e) => {
            const dropdowntypeOpener = this.typeDropdownOpener.contains(e.target);
            const dropdownCategoryOpener = this.categoryDropdownOpener.contains(e.target);


            if (!dropdowntypeOpener && this.typeSelectionDropdown.classList.contains('opened')) {
                this.typeSelectionDropdown.style.opacity = 0;
                this.typeDropdownArrow.style.transform = 'rotate(0deg)';
                setTimeout(() => {
                    this.typeSelectionDropdown.style.display = 'none';
                    this.typeSelectionDropdown.classList.remove('opened');
                }, 200);
            }

            if (!dropdownCategoryOpener && this.categorySelectionDropdown.classList.contains('opened')) {
                this.categorySelectionDropdown.style.opacity = 0;
                this.categoryDropdownArrow.style.transform = 'rotate(0deg)';
                setTimeout(() => {
                    this.categorySelectionDropdown.style.display = 'none';
                    this.categorySelectionDropdown.classList.remove('opened');
                }, 200);
            }
        });
        
        // FILE READER
        this.fileTopBannerReader = new FileReader();
        
        this.fileTopBannerReader.onload = (e) => {
            // GET NEW AVATAR SOURCE
            this.imageSrc = e.target.result;
        }
    },
}
</script>

<style lang="scss" scoped>
.preview-window {
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

    @media only screen and (min-width: 850px) {
        display: none !important;
    }

    .center-container {
        @include abs-center;
    }

    .button-preview-close {
        display: block;
        margin: 2.25rem auto;
        padding: .75rem 5rem;
    }
}

.product-card {
    pointer-events: none;

    @media only screen and (max-width: 850px) {
        min-width: 30rem;
    }
}

.create-product-page {

    .content {
        position: relative;
        z-index: 100;
        display: flex;

        @media only screen and (max-width: 850px) {
            width: 66%;
            margin: 0 auto;
            flex-direction: column;
        }

        @media only screen and (max-width: 600px) {
            width: 100%;
        }

        .right {
            // width: 38%;
            width: 30%;
            height: fit-content;
            margin-top: 22rem;
            margin-left: 3rem;
            padding: 5rem;
            position: relative;
            border-radius: 8px;
            overflow: hidden;
            box-shadow: 0 .5rem 5rem rgba(black, .4);

            @media only screen and (max-width: 850px) {
                width: 100%;
                margin: 0;
                display: none;
            }

            .background {
                position: absolute;
                top: 0;
                left: 0;
                width: 80%;
                height: 100%;
                background-color: rgba($color-primary, .4);
                filter: blur(300px);
            }
        }

        .left {
            width: 62%;

            @media only screen and (max-width: 850px) {
                width: 100%;
            }
            
            .data-container {
                background-color: lighten($color-grey-dark, 2%);
                border-radius: 10px;
                box-shadow: 0 .5rem 5rem rgba(black, .4);
                margin-top: 2.5rem;
                overflow: hidden;
            }

            .purple-title {
                color: $color-primary;
                font-size: 1.8rem;
            }

            .image-updloader-container {
                margin-bottom: 4.25rem;

                .subheading {
                    color: $color-text-grey;
                    margin-top: 1rem;
                }

                .image-uploader {
                    height: 22rem;
                    position: relative;
                    cursor: pointer;
                    transition: all .3s;
                    
                    &:hover {
                        background-color: lighten($color-grey, 5%);
                    }

                    #imageInput {
                        display: none;
                    }
                    
                    .new-banner-image {
                        width: 100%;
                        height: 100%;
                        position: absolute;
                        top: 0;
                        left: 0;
                        z-index: 1000;
                    }

                    .content-center {
                        @include abs-center;
                        text-align: center;

                        p {
                            margin-top: .75rem;
                            color: $color-text-grey-dark;
                        }
                    }
                }

                .buttons {
                    display: flex;
                    justify-content: flex-end;
                    padding: 2rem;
                    padding-right: 0;

                    .button {
                        display: inline-block;
                        cursor: pointer;
                        padding: 1.1rem 2.2rem .9rem;
                        border: 1px solid $color-primary;
                        border-radius: 6px;
                        color: white;
                        font-weight: 700 !important;
                        font-size: 1.5rem;
                        transition: all .3s;

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

                        &:hover {
                            transform: scale(1.05);
                        }
                    }

                    .button-change {
                        background-color: $color-primary;
                        border: none;
                    }
                }
            }

            .product-details-container {


                .product-details {
                    padding: 3.25rem;

                    .flex-container {
                        display: flex;
                        align-items: center;
                
                        @media only screen and (max-width: 850px) {
                            flex-direction: column;
                            align-items: flex-start;
                        }

                        .input-group:first-of-type {
                            margin-right: 2.5rem;
                
                            @media only screen and (max-width: 850px) {
                                margin-right: 0;
                            }
                        }
                    }

                    .options {
                        background-color: lighten($color-grey, 2%);
                    }

                    .input-container {
                        position: relative;
                    }

                    label {
                        display: inline-block;
                        margin-bottom: .8rem;
                        font-weight: 500 !important;
                    }

                    .input-group {
                        position: relative;
                        width: 47%;
                        margin-bottom: 2.5rem;
                
                        @media only screen and (max-width: 850px) {
                            width: 95%;
                        }
                        
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
                            width: 100%;
                        }

                        textarea {
                            width: 100%;
                            padding: 1.25rem 2.5rem;
                        }
                    }

                    .textarea-group {
                        width: calc(94% + 2.5rem);
                
                        @media only screen and (max-width: 850px) {
                            width: 95%;
                        }
                    }

                    .checkbox-group {
                        display: flex;
                        align-items: center;
                        justify-content: space-between;
                        position: relative;

                        &:not(:last-of-type) {
                            margin-top: 3.5rem;
                            margin-bottom: 2.5rem;
                        }

                        .checkbox-info {
                            width: 80%;

                            label {
                                cursor: pointer;
                                font-weight: 600 !important;
                                margin-bottom: .5rem;
                                user-select: none;
                            }

                            p {
                                color: $color-text-grey;
                                font-size: 1.4rem;
                                font-weight: 500 !important;
                            }
                        }

                        .checkbox-container {
                            position: relative;
                            width: 4rem;
                            height: 4rem;
                            border-radius: 8px;
                            box-shadow: 0 .3rem 1rem 0 rgba(#000000, .2) inset,
                            0 .3rem 1rem 0 rgba(#19151F, .5);
                            background-color: lighten($color-grey-2, 3%);

                            .checkbox {
                                @include abs-center;
                                cursor: pointer;
                                appearance: none;
                                width: 1.5rem !important;
                                height: 1.5rem !important;
                                border-radius: .4rem;
                                border: 1.5px solid white;
                                transition: all .2s;
                            }

                            .checkbox:checked + .check-mark {
                                opacity: 1;
                            }

                            .check-mark {
                                @include abs-center;
                                width: 1.65rem;
                                z-index: 100;
                                transition: all .2s;
                                opacity: 0;
                            }
                        }
                    }

                    .buttons {
                        margin-top: 3rem;

                        .button-preview {
                            @media only screen and (min-width: 850px) {
                                display: none;
                            }
                        }
                        
                        .btn {
                            margin-top: 0 !important;
                            padding: .75rem 3.5rem;
                            width: 14rem;
                            text-align: center;
                            font-weight: 500 !important;

                            &:not(:last-of-type) {
                                margin-right: 1rem;
                            }

                            .background {
                                background-color: lighten($color-grey-dark, 2%);
                            }
                        }
                    }
                }
            }
        }
    }
}
</style>