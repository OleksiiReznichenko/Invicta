<template>
    <nuxt-link :to="'/browse/' + productId" class="notification">
        <img :src="image" alt="Image">
        <div class="info">
            <span class="title">{{title}}</span>
            <div class="flex-container">
                <span class="text">{{text}}</span>
                <span class="date">{{date}}</span>
            </div>
        </div>
    </nuxt-link>
</template>

<script>
export default {
    props: ['productId', 'image', 'title', 'text', 'date'],
}
</script>

<style lang="scss" scoped>
.notification {
    display: flex;
    align-items: center;
    padding: 1.25rem 2.5rem;
    border-radius: 8px;
    transition: all .3s;

    &:hover {
        background-color: lighten($color-grey-dark, 5%);
    }

    img {
        width: 2.75rem;
        height: 2.75rem;
        border-radius: 8px;
        margin-right: 1.5rem;
    }

    .title {
        color: $color-text-grey;
        font-weight: 600 !important;
        font-size: 1.6rem;
    }

    .flex-container {
        display: flex;
        align-items: center;

        .text {
            color: $color-text-grey;
            margin-right: 1.5rem;
        }

        .date {
            color: $color-text-grey-dark;
        }
    }
}
</style>