<template>
    <div class="relative-container">
        <div class="updates-page section">
            <div class="content">
                <div class="page-sequence">
                    <nuxt-link to="/">Main</nuxt-link>
                    <img src="@/assets/svg/arrowSmall.svg" alt="Arrow" class="arrow">
                    <span>Updates</span>
                </div>
                <h1 class="page-title">Updates</h1>
                <div class="updates">
                    <UpdateItem
                    v-for="(update, i) in updates"
                    :key="update.id"
                    :name='update.name'
                    :image='update.image'
                    :time='update.time'
                    :id='update.id'
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
import UpdateItem from '@/components/elements/UpdateItem';

export default {
    components: {
        UpdateItem,
    },

    computed: {
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
        // SORTED LEADERBOARD USERS ARRAY
        updates() {
            const sortedArray = this.baseArray.sort(this.fromLessTime);
            return sortedArray;
        }
    },

    methods: {
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
        // SORT FROM EXPENSIVE
        fromLessTime( a, b ) {
            if ( a.time > b.time ) {
                return 1;
            }
            if ( a.time < b.time ) {
                return -1;
            }
            return 0;
        },
    },
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    // GET BASE ARRAY
    created () {
        this.baseArray = this.$store.state.updates.updates.map(el => {
            return el
        });
    },
}
</script>

<style lang="scss" scoped>
.updates-page {
    min-height: 80vh;

    .content {
        min-height: 70vh;
        position: relative;
        z-index: 100;

        .page-title {
            font-size: 4.5rem;
            margin-top: -.5rem;
            margin-bottom: 3rem;
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