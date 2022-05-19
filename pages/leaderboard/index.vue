<template>
  <div class="relative-container">
        <img src="@/assets/img/cornerLight.png" alt="Corner light" class="corner-light">
        <div class="leaderboard-page section section-page">
            <div class="content">
                <div class="page-sequence">
                    <nuxt-link to="/">Main</nuxt-link>
                    <img src="@/assets/svg/arrowSmall.svg" alt="Arrow" class="arrow">
                    <span>Leaderboard</span>
                </div>
                <h1 class="page-title">Leaderboard</h1>
                <div class="users">
                    <LeaderboardItem
                    v-for="(user, i) in leaderboardUsers"
                    :key="user.id"
                    :id='user.id'
                    :username='user.username'
                    :avatar='user.avatar'
                    :registrationDate='user.registrationDate'
                    :selledAmount='user.selledAmount'
                    :workingPlaces='user.workingPlaces'
                    :number='i + 1'
                    />
                </div>
            </div>
            <img src="@/assets/img/gridLeaderboardUpdates.png" alt="Grid" class="grid-image">

            <Footer />
        </div>
    </div>
</template>

<script>
import LeaderboardItem from '@/components/elements/LeaderboardItem';

export default {
    components: {
        LeaderboardItem,
    },

    computed: {
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
        // SORTED LEADERBOARD USERS ARRAY
        leaderboardUsers() {
            const sortedArray = this.baseArray.sort(this.fromHigherAmount);
            return sortedArray;
        }
    },

    methods: {
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
        // SORT FROM EXPENSIVE
        fromHigherAmount( a, b ) {
            if ( a.selledAmount < b.selledAmount ) {
                return 1;
            }

            if ( a.selledAmount > b.selledAmount ) {
                return -1;
            }
            
            return 0;
        },
    },
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    // GET BASE ARRAY
    created () {
        this.baseArray = this.$store.state.leaderboard.leaderboard.map(el => {
            return el
        });
    },
}
</script>

<style lang="scss" scoped>
.leaderboard-page {
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
    }

    .grid-image {
        position: absolute;
        right: 0;
        top: -3%;
        width: 24rem;
    }
}
</style>