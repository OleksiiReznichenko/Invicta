<template>
    <div class="relative-container">
        <div class="my-orders-page section section-page">
            <div class="content">
                <div class="page-sequence">
                    <nuxt-link to="/">Main</nuxt-link>
                    <img src="@/assets/svg/arrowSmall.svg" alt="Arrow" class="arrow">
                    <span>My orders</span>
                </div>
                <h1 class="page-title">My orders</h1>
                <div class="main-content">
                    <div class="title-item">
                        <div class="left">
                            <span class="order-id">Order ID</span>
                            <span class="order-title">Product Title</span>
                            <span class="order-amount">Amount</span>
                            <span class="order-time">Time</span>
                        </div>
                        <div class="right">
                            <div class="search-container">
                                <input v-if="orders.length > 0" ref="searchInput" v-model="searchValue"
                                type="search" id="searchInput" placeholder="Search" />
                                <img v-if="orders.length > 0"
                                    src="@/assets/svg/searchIcon.svg"
                                    alt="Search icon"
                                    class="search-icon"
                                />
                            </div>
                        </div>
                    </div>
                    <div v-if="ordersFiltered.length == 0 && orders.length > 0" class="no-orders">
                        No orders were found
                    </div>
                    <div v-if="orders.length == 0" class="no-orders">
                        No orders yet
                    </div>
                    <div v-if="orders.length > 0" ref="orders" class="orders">
                        <OrderItem
                        v-for="order in ordersFiltered"
                        :key="order.id"
                        :id='order.id'
                        :name='order.name'
                        :image='order.image'
                        :itemsAmount='order.itemsAmount'
                        :time='order.time'
                        />
                    </div>
                </div>
            </div>
            <img src="@/assets/img/spiralOrders.png" alt="Spiral" class="spiral-image">

            <Footer />
        </div>
    </div>
</template>

<script>
import OrderItem from '@/components/elements/OrderItem';

export default {
    components: {
        OrderItem,
    },

    data() {
        return {
            searchValue: '',
            searchValueValidated: '',
        }
    },

    watch: {
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
      // VALIDATE SEARCH VALUE ON TYPING
      searchValue() {
        this.validateSearchValue();
      }
    },

    computed: {
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
        // MY ORDERS ARRAY
        orders() {
            return this.$store.state.orders.myOrders;
        },

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
        // ARRAY OF FILTERED ORDERS ON NAME SEARCH
        ordersFiltered() {
            let orders = this.orders;

            if (this.searchValueValidated) {
                const filteredOrders = orders.filter(order => {
                    return order.name.toLowerCase().includes(this.searchValueValidated);
                })

                return filteredOrders;
            } else {
                return orders;
            }
        },
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
    },
}
</script>

<style lang="scss" scoped>
.my-orders-page {
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

        .page-title {
            font-size: 4.5rem;
            margin-top: -.5rem;
            margin-bottom: 3rem;
        }

        .main-content {

            .no-orders {
                width: 100%;
                background-color: $color-grey-dark;
                border-radius: 10px;
                padding: 2.5rem 2.5rem;
                margin-bottom: 2rem;
                text-align: center;

                @media only screen and (max-width: 850px) {
                    font-family: Rowdies;
                    font-weight: 300 !important;
                    font-size: 3.75rem !important;
                    background: none;
                    border-radius: 0;
                    padding: 0;
                    margin-bottom: 0;
                    @include abs-center;
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

                    .order-id,
                    .order-title {
                        width: 30%;
                    }

                    .order-id {
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
    }

    .spiral-image {
        position: absolute;
        right: 0;
        top: 10%;
        width: 27rem;
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