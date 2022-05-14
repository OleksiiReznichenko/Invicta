<template>
    <div class="profile-page">
        <HeaderProfile :userObject='userSelected' />
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
    components: {
        HeaderProfile,
        CustomBanner,
        DiscountProductsCustom,
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
        if (this.myUser.id === this.$route.params.id) {
            this.user = this.myUser;
        } else {
            // USERS ARRAY
            const userArray = this.$store.state.users.users;

            // FIND USER IN USERS ARRAY
            this.user = userArray.find(el => {
                if (this.user || el.id !== this.$route.params.id) return;
                return el;
            })
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