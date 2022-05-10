<template>
    <div class="shopping-item">
        <div class="left">
            <div class="number">#{{number}}</div>
            <img :src="image" alt="Shopping item image" class="image">
            <div class="info">
                <h4 class="name">{{name}}</h4>
                <div class="bottom-container">
                    <span :class="{'border-text-green': isValidated, 'border-text-red': !isValidated}" class="status">{{status}}</span>
                    <span class="id">{{id}}</span>
                </div>
            </div>
        </div>
        <nuxt-link class="shopping-item-link" :to="'/myShopping/' + id">watch order</nuxt-link>
    </div>
</template>

<script>
export default {
    props: ['name', 'image', 'status', 'id', 'number', 'isValidated']
}
</script>

<style lang="scss" scoped>
.shopping-item {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    background-color: $color-grey-dark;
    border-radius: 10px;
    padding: 2rem 2.5rem;

    &:not(:last-of-type) {
        margin-bottom: 1.5rem;
    }

    @media only screen and (max-width: 450px) {
        flex-direction: column;
        justify-content: flex-start;
        align-items: flex-start;
        padding: 3rem 4.5rem;
    }

    .shopping-item-link {
        background-color: $color-primary;
        border-radius: 7px;
        padding: .65rem 5.5rem;
        transition: all .3s;

        &:hover {
            background-color: darken($color-primary, 15%);
        }

        @media only screen and (max-width: 550px) {
            padding: .65rem 3.5rem;
        }

        @media only screen and (max-width: 500px) {
            padding: .65rem 2.5rem;
        }

        @media only screen and (max-width: 450px) {
            padding: .65rem 4.5rem;
            margin-top: 2rem;
            font-size: 1.8rem;
            margin-left: 15.5rem;
        }

        @media only screen and (max-width: 360px) {
            padding: .65rem 4rem;
        }
    }

    .left {
        display: flex;
        align-items: center;

        .number {
            @media only screen and (max-width: 450px) {
                font-size: 1.8rem;
                margin-bottom: -5rem;
            }

        }

        .image {
            width: 4.25rem;
            height: 4.25rem;
            border-radius: 100%;
            object-fit: cover;
            margin: 0 2.25rem;

            @media only screen and (max-width: 450px) {
                width: 7.5rem;
                height: 7.5rem;
                margin-right: 3.5rem;
                margin-bottom: -5rem;
            }
        }

        .info {
            color: $color-text-grey;

            .name {
                font-weight: 600 !important;
                font-size: 2rem;
                margin-bottom: .75rem;

                @media only screen and (max-width: 450px) {
                    font-size: 2.3rem;
                }
            }

            .bottom-container {
                display: flex;
                align-items: center;

                @media only screen and (max-width: 450px) {
                    font-size: 1.8rem;
                }


                .status {
                    display: inline-block;
                    padding: .3rem 1rem;
                    margin-right: 1.5rem;

                    @media only screen and (max-width: 450px) {
                        font-size: 1.8rem;
                    }
                }
            }
        }
    }
}
</style>