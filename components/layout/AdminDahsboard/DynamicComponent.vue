<template>
    <div class="array">
        <div class="title-item">
            <div class="left">
                <span class="item-id">Item ID</span>
                <span class="item-title">Product Title</span>
                <span class="item-amount">Amount</span>
                <span class="item-date">Date</span>
            </div>
            <div class="right">
                <div class="search-container">
                    <input v-if="array && array.length > 0" ref="searchInput" v-model="searchValue"
                    type="search" id="searchInput" placeholder="Search" />
                    <img v-if="array && array.length > 0"
                        src="@/assets/svg/searchIcon.svg"
                        alt="Search icon"
                        class="search-icon"
                    />
                </div>
            </div>
        </div>
        <div v-if="!array || array.length == 0" class="no-array">
            No array yet
        </div>
        <div v-if="array && array.length > 0 && filteredarray.length == 0" class="no-array">
            No array were found
        </div>
        <div v-if="array && array.length > 0" ref="array" class="array">
            <DynamicItem
            v-for="item in filteredarray"
            :key="item.id"
            :id='item.id'
            :productTitle='item.productTitle'
            :productPhoto='item.productPhoto'
            :itemsAmount='item.itemsAmount'
            :date='item.date'
            />
        </div>
        <!-- <div v-if="array.length > 9" class="pagination"> -->
        <div class="pagination">
            <span class="showing-amount">Showing {{startText}} to {{endText}} of {{totalItems}} entries</span>
            <div class="buttons">
                <!-- <button v-if="sliceStart !== 0" @click="prev" class="button-prev">Previous</button>
                <button v-if="sliceEnd <= array.length" @click="next" class="button-next">Next</button> -->
                <button @click="prev" class="button-prev">Previous</button>
                <button @click="next" class="button-next">Next</button>
            </div>
        </div>
    </div>
</template>

<script>
import DynamicItem from '@/components/layout/AdminDahsboard/DynamicItem';

export default {
    props: ['componentType'],

    components: {
        DynamicItem,
    },

    data() {
        return {
            searchValue: '',
            searchValueValidated: '',
            totalItems: 0,
            sliceStart: 0,
            sliceEnd: 10,
            startText: 0,
            endText: 10,
        }
    },

    computed: {
        array() {
            
        },
        filteredarray() {
            if (this.searchValueValidated) {
                this.finalArray = this.array.filter(el => {
                    if (el.productTitle.toLowerCase().includes(this.searchValueValidated)) {
                        return el;
                    }
                });
            } else {
                this.finalArray = this.array;
            }

            this.totalItems = this.finalArray.length;

            if (this.sliceEnd >= this.finalArray.length) {
                this.endText = this.finalArray.length;
            }

            // LIMIT AMOUNT OF PRODUCTS ON PAGE
            return this.finalArray.slice(this.sliceStart, this.sliceEnd);
        },

        filteredarray() {
            if (this.searchValueValidated) {
                this.finalArray = this.array.filter(el => {
                    if (el.productTitle.toLowerCase().includes(this.searchValueValidated)) {
                        return el;
                    }
                });
            } else {
                this.finalArray = this.array;
            }

            this.totalItems = this.finalArray.length;

            if (this.sliceEnd >= this.finalArray.length) {
                this.endText = this.finalArray.length;
            }

            // LIMIT AMOUNT OF PRODUCTS ON PAGE
            return this.finalArray.slice(this.sliceStart, this.sliceEnd);
        },
    },

    watch: {
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
        // VALIDATE SEARCH VALUE ON TYPING
        searchValue() {
            this.validateSearchValue();
                
            this.sliceStart = 0;
            this.sliceEnd = 10;
            this.startText = this.sliceStart;
            this.endText = this.sliceEnd;
        }
    },
    
    methods: {
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
        // REMOVE EXCESSIVE WHITE SPACES IN VALUE AND CONVERT TO LOWERCASE
        validateSearchValue() {
            this.searchValueValidated = '';
            if (this.searchValue.includes(' ') >= 0) {
                const searchInputArr = this.$refs.searchInput.value.split(' ');

                const searchInputArr2 = searchInputArr.filter(el => {
                    if (el.replace(/\s/g, '')) {
                        return el.replace(/\s/g, '');
                    }
                })

                const search = searchInputArr2.join(' ');
                this.searchValueValidated = search.toLowerCase();
            } else {
                this.searchValueValidated = this.searchValue.toLowerCase();
            }
        },
        
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
        // PREV BUTTON FUNCTIONAL
        prev() {
            if (this.sliceStart === 0) return;
            this.sliceStart -= 10;
            this.sliceEnd -= 10;
            this.startText = this.sliceStart;
            this.endText = this.sliceEnd;
        },
        
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
        // NEXT BUTTON FUNCTIONAL
        next() {
            if (this.sliceEnd >= this.finalArray?.length || this.totalItems === 0) return;
            this.sliceStart += 10;
            this.sliceEnd += 10;
            this.startText = this.sliceStart;
            this.endText = this.sliceEnd;

            if (this.sliceEnd >= this.finalArray.length) {
                this.endText = this.finalArray.length;
            }
        },
    },

    mounted () {
        if (this.array?.length === 0 || !this.array) {
            this.sliceEnd = 0;
            this.endText = this.sliceEnd;
        }
    },
}
</script>

<style lang="scss" scoped>
.array {
    position: relative;

    .pagination {
        display: flex;
        align-items: center;
        justify-content: space-between;
        margin-top: 2rem;

        @media only screen and (max-width: 850px) {
            flex-direction: column;
            justify-content: center;
        }

        .showing-amount {
            color: $color-orange;
            font-weight: 600 !important;

            @media only screen and (max-width: 850px) {
                display: inline-block;
                margin-bottom: 1.5rem;
                font-size: 1.8rem;
            }
        }

        .buttons {


            button {
                font-weight: 500 !important;
                background-color: $color-primary;
                border-radius: 6px;
                padding: .75rem 4.5rem;
                transition: all .3s;
                text-align: center;
                transition: all .3s;

                &:hover {
                    background-color: darken($color-primary, 15%);
                }

                &:not(:last-of-type) {
                    margin-right: 1rem;
                }

                @media only screen and (max-width: 850px) {
                    font-size: 1.8rem;
                    padding: 1rem 5.5rem;
                }
            }
        }
    }

    .no-array {
        width: 100%;
        background-color: $color-grey-dark;
        border-radius: 10px;
        padding: 2.5rem 2.5rem;
        margin-bottom: 2rem;
        text-align: center;
        white-space: nowrap;
        font-size: 2rem;

        @media only screen and (max-width: 850px) {
            font-family: Rowdies;
            font-weight: 300 !important;
            font-size: 3.75rem !important;
        }
    }

    .title-item {
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: space-between;
        background-color: $color-grey-dark;
        border-radius: 10px;
        padding: 2.5rem 2.5rem;
        margin-bottom: 2rem;

        @media only screen and (max-width: 850px) {
            display: none;
        }

        .left {
            display: flex;
            align-items: center;
            justify-content: space-between;
            width: 75%;

            span {
                display: inline-block;
                width: 20%;
                text-align: center;
            }

            .item-id,
            .item-title {
                width: 30%;
            }

            .item-id {
                text-align: left;
            }
        }

        .right {
            width: 25%;
            display: flex;
            justify-content: flex-end;
            text-align: right;
        }
    }
}

.search-container {
    width: 15rem;
    margin-right: 1rem;
    position: relative;

    @media only screen and (max-width: 900px) {
        width: 11rem;
    }

    @media only screen and (max-width: 700px) {
        width: 12rem;
    }

    @media only screen and (max-width: 1050px) and (max-height: 520px) {
        width: 14rem;
    }

    @media only screen and (max-width: 850px) and (min-height: 600px) {
        width: 100%;
        border-radius: 6px;
        overflow: hidden;
        margin-right: 3rem;
    }
}

.search-icon {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    left: 0;
    width: 1.75rem;
    height: 1.75rem;

    @media only screen and (max-width: 850px) and (min-height: 600px) {
        width: 2rem;
        height: 2rem;
    }
}

#searchInput {
    width: 100%;
    padding-left: 3rem;
    color: white;
    font-family: Montserrat;

    @media only screen and (max-width: 850px) and (min-height: 600px) {
        padding: 1rem 2rem;
        padding-left: 4rem;
    }

    &::placeholder {
        color: $color-text-grey;
    }
}
</style>