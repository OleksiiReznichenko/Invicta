<template>
    <div class="profile-page">
        <img src="@/assets/img/cornerLight.png" alt="Corner light" class="corner-light">
        <HeaderProfile :userObject='userSelected' :isMyProfile='isMyProfile' />
        <main>
            <UserCustomBanner :pageEdit='false' />
            <Categories :baseArray='productsBase' @getFilteredArray="getFilteredArray($event)" />
            <UserProducts :products='products' :baseArrayLength='productsBase.length' :isMyProfile='isMyProfile' />
            <UserDiscountProducts :baseArray='products' :pageEdit='false' />
        </main>
        <Footer class="section" />
    </div>
</template>

<script>
import HeaderProfile from '@/components/layout/Profile/HeaderProfile';
import UserCustomBanner from '@/components/layout/Profile/UserCustomBanner';
import Categories from '@/components/layout/Profile/Categories';
import UserProducts from '@/components/layout/Profile/UserProducts';
import UserDiscountProducts from '@/components/layout/Profile/UserDiscountProducts';

export default {
    middleware: ['isUserExist'],

    components: {
        HeaderProfile,
        UserCustomBanner,
        Categories,
        UserProducts,
        UserDiscountProducts,
    },

    data() {
        return {
            isMyProfile: false,
            filteredArray: [],
        }
    },

    computed: {
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
        // MY USER
        myUser() {
            return this.$store.state.user; 
        },
        
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
        // SELECTED USER
        userSelected() {
            return this.user;
        },
        
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
        // USER PRODUCTS
        productsBase() {
            return this.user.products;
        },
        
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
        // USER PRODUCTS FILTERED
        products() {
            return this.filteredArray;
        },
     },

     methods: {
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
        // GET FILTERED ARRAY
        getFilteredArray(array) {
            this.filteredArray = array;
        },
     },
     
    created() {
        // USERS ARRAY
        const userArray = this.$store.state.users.users;

        // FIND USER IN USERS ARRAY
        this.user = userArray.find(el => {
            if (this.user || el.username !== this.$route.params.username) return;
            return el;
        })

        // IF THIS USER IS ME - SET IS MY PROFILE TO TRUE
        if (this.myUser.username === this.$route.params.username) {
            this.isMyProfile = true;
        } 
    },
}
</script>

<style lang="scss" scoped>
.profile-page {
    @media only screen and (max-width: 850px) {
        margin-top: -15rem;
    }
}

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
</style>