<template>
    <nuxt-link :to="'/users/' + username" class="user-item">
        <div class="left">
            <div class="number">#{{number}}</div>
            <img :src="avatar" alt="User avatar" class="avatar">
            <div class="info">
                <div class="top-container">
                    <h4 class="username">@{{username}}</h4>
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
    props: ['username', 'avatar', 'registrationDate', 'selledAmount', 'workingPlaces', 'number']
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

            @media only screen and (max-width: 850px) {
                font-size: 2.3rem;
                margin-bottom: 0;
            }
        }

        .date {
            color: $color-text-grey;

            @media only screen and (max-width: 850px) {
                display: none;
            }
        }
    }

    .left {
        display: flex;
        align-items: center;

        .number {
            @media only screen and (max-width: 850px) {
                font-size: 1.8rem;
            }
        }

        .avatar {
            width: 5rem;
            height: 5rem;
            border-radius: 100%;
            object-fit: cover;
            margin: 0 2.25rem;

            @media only screen and (max-width: 850px) {
                width: 6.5rem;
                height: 6.5rem;
            }

            @media only screen and (max-width: 450px) {
                width: 7rem;
                height: 7rem;
            }
        }

        .info {
            .date {
                color: $color-text-grey;
                margin-top: 1rem;

                @media only screen and (min-width: 850px) {
                    display: none;
                }
            }

            .top-container {
                display: flex;
                align-items: center;
                color: $color-text-grey;
                margin-bottom: .75rem;

                .username {
                    font-weight: 600 !important;
                    font-size: 2rem;
                    margin-right: 1rem;

                    @media only screen and (max-width: 850px) {
                        font-size: 2.3rem;
                    }
                }
            }

            .bottom-container {
                display: flex;
                align-items: center;

                @media only screen and (max-width: 850px) {
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