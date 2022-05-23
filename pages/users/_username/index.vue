<template>
    <div class="profile-page">
        <img src="@/assets/img/cornerLight.png" alt="Corner light" class="corner-light">
        <HeaderProfile :userObject='userSelected' :isMyProfile='isMyProfile' />
        <main>
            <CustomBanner />
            <ProductsLine/>
            <DiscountProductsCustom/>
        </main>
        <Footer class="section" />
    </div>
</template>

<script>
import HeaderProfile from '@/components/layout/Profile/HeaderProfile';
import CustomBanner from '@/components/layout/Profile/CustomBanner';
import DiscountProductsCustom from '@/components/layout/Profile/DiscountProductsCustom';

export default {
    middleware: ['isUserExist'],

    components: {
        HeaderProfile,
        CustomBanner,
        DiscountProductsCustom,
    },

    data() {
        return {
            isMyProfile: false
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
        }
     },
     
    created() {
        // USERS ARRAY
        const userArray = this.$store.state.users.users;

        // FIND USER IN USERS ARRAY
        this.user = userArray.find(el => {
            console.log(el.username, this.$route.params.username)
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