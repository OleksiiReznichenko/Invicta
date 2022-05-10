<template>
    <nuxt-link :to="'/users/' + id" class="user-item">
        <div class="left">
            <div class="number">#{{number}}</div>
            <img :src="photo" alt="User photo" class="photo">
            <div class="info">
                <div class="top-container">
                    <h4 class="name">{{name}}</h4>
                    <span class="username">@{{username}}</span>
                </div>
                <div class="bottom-container">
                    <div v-for="item in workingPlaces" :key="item.name" class="working-place">
                        <img :src="item.image" alt="Image">
                        <span>{{item.name}}</span>
                    </div>
                </div>
                <p class="date">Seller since {{registrationDate}}</p>
            </div>
        </div>
        <div class="right">
            <h4 class="green">+{{selledAmount}}</h4>
            <span class="date">Seller since {{registrationDate}}</span>
        </div>
    </nuxt-link>
</template>

<script>
export default {
    props: ['id', 'name', 'username', 'photo', 'registrationDate', 'selledAmount', 'workingPlaces', 'number']
}
</script>

<style lang="scss" scoped>
.user-item {
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

    .right {
        display: flex;
        flex-direction: column;
        align-items: flex-end;

        .green {
            color: $color-green;
            font-size: 2rem;
            font-weight: 600 !important;
            margin-bottom: 1rem;

            @media only screen and (max-width: 500px) {
                font-size: 2.3rem;
                margin-bottom: 0;
            }
        }

        .date {
            color: $color-text-grey;

            @media only screen and (max-width: 500px) {
                display: none;
            }
        }
    }

    .left {
        display: flex;
        align-items: center;

        .number {
            @media only screen and (max-width: 500px) {
                font-size: 1.8rem;
                // margin-bottom: -5rem;
            }

        }

        .photo {
            width: 4.25rem;
            height: 4.25rem;
            border-radius: 100%;
            object-fit: cover;
            margin: 0 2.25rem;

            @media only screen and (max-width: 500px) {
                width: 6.5rem;
                height: 6.5rem;
                // margin-right: 3.5rem;
                // margin-bottom: -5rem;
            }
        }

        .info {
            .date {
                color: $color-text-grey;
                margin-top: 1rem;

                @media only screen and (min-width: 500px) {
                    display: none;
                }
            }

            .top-container {
                display: flex;
                align-items: center;
                color: $color-text-grey;
                margin-bottom: .75rem;

                .name {
                    font-weight: 600 !important;
                    font-size: 2rem;
                    margin-right: 1rem;

                    @media only screen and (max-width: 500px) {
                        font-size: 2.3rem;
                    }
                }
            }

            .bottom-container {
                display: flex;
                align-items: center;

                @media only screen and (max-width: 500px) {
                    font-size: 1.8rem;
                }


                .working-place {
                    display: flex;
                    align-items: center;
                    padding: .2rem .75rem;
                    background-color: $color-grey-2;
                    border-radius: 10px;

                    &:not(:last-of-type) {
                        margin-right: 1rem;
                    }

                    img {
                        margin-right: .5rem;
                    }
                }
            }
        }
    }
}
</style>