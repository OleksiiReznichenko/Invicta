<template>
  <div class="relative-container">
        <div class="terms-page section">
            <div class="content">
                <div class="page-sequence">
                    <nuxt-link to="/">Main</nuxt-link>
                    <img src="@/assets/svg/arrowSmall.svg" alt="Arrow" class="arrow">
                    <span>Terms of service</span>
                </div>
                <h1 class="page-title">Terms of service</h1>
                <div class="users" @click="toggleEvent">
                    <TermItem
                    v-for="(term, i) in terms"
                    :key="i"
                    :title='term.title'
                    :description='term.description'
                    />
                </div>
            </div>
            <!-- <img src="@/assets/img/gridtermsUpdates.png" alt="Grid" class="grid-image"> -->

            <Footer />
        </div>
    </div>
</template>

<script>
import TermItem from '@/components/elements/TermItem';

export default {
    components: {
        TermItem,
    },

    data() {
        return {
            indicator: true
        }
    },

    computed: {
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
        // TERMS ARRAY
        terms() {
            return this.$store.state.terms.terms;
        }
    },

    methods: {
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
        // TOGGLE EVENT
        toggleEvent(e) {
            const parent = e.target?.closest('.term-item');
            const titleContainer = e.target?.closest('.title-container');

            if (titleContainer && parent && !parent.classList.contains('animating')) {
                const descriptionContainer = parent?.querySelector('.description-container');
                const description = parent?.querySelector('.description');
                const arrow = parent?.querySelector('.arrow');

                let timeoutTime = 500;

                if (description.textContent.length > 1000) {
                    this.$store.dispatch('slideToggle', {target: descriptionContainer, duration: 700})
                    // this.slideToggle(descriptionContainer, 700);
                    timeoutTime = 700;
                } else {
                    // this.slideToggle(descriptionContainer);
                    this.$store.dispatch('slideToggle', {target: descriptionContainer})
                }

                arrow.classList.toggle('opened');

                parent.classList.add('animating')

                setTimeout(() => {
                    parent.classList.remove('animating')
                }, timeoutTime);
            }
        }
    },
}
</script>

<style lang="scss" scoped>
.terms-page {
    min-height: 80vh;
    // min-height: 70vh;

    .content {
        min-height: 70vh;
        // min-height: 60vh;
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