<template>
    <nuxt-link :to="'/browse/' + id" class="update-item">
        <div class="desktop left">
            <div class="number">#{{number}}</div>
            <img :src="image" alt="Update image" class="image">
            <div class="info">
                <h4 class="name">{{name}}</h4>
                <div class="bottom-container">
                    <span class="new-stock border-text-blue">new stock</span>
                    <span class="time">{{time}}h ago</span>
                </div>
            </div>
        </div>
        <nuxt-link class="desktop product-link" :to="'/browse/' + id">view product</nuxt-link>

        <img :src="image" alt="Update image" class="mobile image">
        <div class="mobile info">
            <div class="title-container">
                <h4 class="name">{{name}}</h4>
            </div>
            <div class="bottom-container id-status-container">
                <span class="new-stock border-text-blue">new stock</span>
                <span class="time">{{time}}h ago</span>
            </div>
            <nuxt-link class="mobile product-link" :to="'/browse/' + id">view product</nuxt-link>
        </div>
    </nuxt-link>
</template>

<script>
export default {
    props: ['name', 'image', 'time', 'id', 'number']
}
</script>

<style lang="scss" scoped>
.update-item {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    background-color: $color-grey-dark;
    border-radius: 10px;
    padding: 2rem 2.5rem;
    transition: all .3s;

    &:hover {
        background-color: lighten($color-grey-dark, 5%);
    }

    &:not(:last-of-type) {
        margin-bottom: 1.5rem;
    }

    @media only screen and (max-width: 850px) {
        justify-content: center;
        padding: 3rem 2.5rem;
    }

    .desktop {
        @media only screen and (max-width: 850px) {
            display: none !important;
        }
    }

    .mobile {
        @media only screen and (min-width: 850px) {
            display: none !important;
        }
        font-size: 2rem;
    }

    .title-container {
        margin-bottom: .75rem;
    }

    .id-status-container {
        margin-bottom: .75rem;
        color: $color-text-grey;
    }

    .product-link {
        background-color: $color-primary;
        border-radius: 7px;
        padding: .65rem 5.5rem;
        transition: all .3s;
        text-align: center;
        color: white;

        &:hover {
            background-color: darken($color-primary, 15%);
        }

        @media only screen and (max-width: 850px) {
            display: block;
            margin-top: 1.25rem;
        }
    }

    .left {
        display: flex;
        align-items: center;

        .number {
            @media only screen and (max-width: 850px) {
                font-size: 1.8rem;
                margin-bottom: -5rem;
                font-size: 2rem !important;
            }
        }
    }

    .image {
        width: 5rem;
        height: 5rem;
        border-radius: 100%;
        object-fit: cover;
        margin: 0 2.25rem;

        @media only screen and (max-width: 850px) {
            width: 9.5rem;
            height: 9.5rem;
            border-radius: 10px;
        }
    }

    .info {
        color: $color-text-grey;

        .name {
            font-weight: 600 !important;
            font-size: 2rem;
            margin-bottom: .75rem;

            @media only screen and (max-width: 850px) {
                font-size: 2.3rem;
            }
        }

        .bottom-container {
            display: flex;
            align-items: center;

            @media only screen and (max-width: 850px) {
                font-size: 2rem;
            }

            @media only screen and (max-width: 380px) {
                font-size: 1.8rem;
            }

            .new-stock {
                display: inline-block;
                padding: .3rem 1rem;
                margin-right: 1.5rem;

                @media only screen and (max-width: 850px) {
                    font-size: 2rem;
                }

                @media only screen and (max-width: 380px) {
                    font-size: 1.8rem;
                }
            }
        }
    }
}
</style>