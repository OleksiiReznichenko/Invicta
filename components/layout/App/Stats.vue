<template>
    <div class="stats">
        <div class="stat-item">
            <div class="info">
                <h2 class="number">{{sales}}</h2>
                <p>{{periodText}} Sales</p>
            </div>
            <div class="icon-container">
                <img src="@/assets/svg/totalSalesIcon.svg" alt="Icon" class="icon">
            </div>
        </div>
        <div class="stat-item">
            <div class="info">
                <h2 class="number">{{sales24h}}</h2>
                <p>24h Sales</p>
            </div>
            <div class="icon-container">
                <img src="@/assets/svg/24h.svg" alt="Icon" class="icon">
            </div>
        </div>
        <div class="stat-item">
            <div class="info">
                <h2 class="number">${{revenue}}</h2>
                <p>{{periodText}} Revenue</p>
            </div>
            <div class="icon-container">
                <img src="@/assets/svg/revenueGraph.svg" alt="Icon" class="icon">
            </div>
        </div>
        <div class="stat-item">
            <div class="info">
                <h2 class="number">${{revenue24h}}</h2>
                <p>24h Revenue</p>
            </div>
            <div class="icon-container">
                <img src="@/assets/svg/24h.svg" alt="Icon" class="icon">
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: ['sales', 'sales24h', 'revenue', 'revenue24h', 'period'],
    
    computed: {
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
        // STATS PERIOD TEXT
        periodText() {
            let text = '';
            if (this.period === 'week') {
                text = 'Weekly';
            } else if (this.period === 'month') {
                text = 'Monthly';
            } else if (this.period === 'year') {
                text = 'Yearly';
            } else if (this.period === 'all time') {
                text = 'Total';
            }
            return text;
        }
    },
}
</script>

<style lang="scss" scoped>
.stats {
    display: flex;
    margin-bottom: 4rem;

    @media only screen and (max-width: 850px) {
        flex-direction: column;
    }

    .stat-item {
        background-color: $color-grey-dark;
        border-radius: 10px;
        box-shadow: 0 .5rem 5rem rgba(black, .4);
        padding: 2.5rem 2.5rem 3.25rem;
        display: flex;
        justify-content: space-between;
        width: 25%;

        &:not(:last-of-type) {
            margin-right: 2rem;
        }

        @media only screen and (max-width: 850px) {
            width: 100%;
            padding: 3rem 3rem 3.75rem;

            &:not(:last-of-type) {
                margin-right: 0;
                margin-bottom: 1.5rem;
            }
        }

        .info {
            color: $color-text-grey;

            .number {
                font-size: 3.15rem;

                @media only screen and (max-width: 850px) {
                    font-size: 3.75rem;
                }
            }

            p {
                white-space: nowrap;

                @media only screen and (max-width: 850px) {
                    font-size: 2rem;
                }

            }
        }

        .icon-container {
            background-color: $color-grey-2;
            border-radius: 15px;
            width: 5.5rem;
            height: 5.5rem;
            @include flex-center;

            @media only screen and (max-width: 850px) {
                width: 6.5rem;
                height: 6.5rem;
            }

            .icon {
                width: 2.75rem;

                @media only screen and (max-width: 850px) {
                    width: 3.25rem;
                }
            }
        }
    }
}
</style>