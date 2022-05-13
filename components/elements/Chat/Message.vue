<template>
    <div :class="{'message-right': isMe}" class="message">
        <nuxt-link :to="'/users/' + person.id" class="avatar-container">
            <img :src="person.avatar" alt="Avatar" class="avatar">
        </nuxt-link>
        <div class="message-content">
            <div class="name-date-container">
                <nuxt-link :to="'/users/' + person.id" v-if="!isMe" key="seller" class="name">{{person.firstName}} {{person.lastName}}</nuxt-link>
                <nuxt-link :to="'/users/' + person.id" v-if="isMe" key="me" class="name">Me</nuxt-link>
                <span class="date">{{date}}</span>
            </div>
            <p class="message-text">
                {{text}}
            </p>
        </div>
    </div>
</template>

<script>
export default {
    props: ['person', 'isMe', 'text', 'date']
}
</script>

<style lang="scss" scoped>
.message {
    display: flex;
    align-items: flex-end;
    width: 60%;
    margin-bottom: 2rem;

    @media only screen and (max-width: 750px) {
        width: 70%;
    }

    @media only screen and (max-width: 650px) {
        width: 80%;
    }

    @media only screen and (max-width: 400px) {
        width: 92%;
    }

    .avatar-container {
        width: 4rem;
        height: 4rem;
        margin-right: 1.25rem;
        margin-bottom: -1rem;
        display: block;

        .avatar {
            width: 4rem;
            height: 4rem;
            border-radius: 100%;
            // object-fit: cover;
        }
    }

    .message-content {
        background-color: $color-grey;
        border-radius: 10px;
        border-bottom-left-radius: 0;
        padding: 1.5rem;
        width: 100%;

        .name-date-container {
            display: flex;
            align-items: center;
            justify-content: space-between;
            margin-bottom: 1rem;

            .name {
                color: $color-orange;
                font-weight: 500 !important;
            }

            .date {
                color: $color-text-grey-dark;
            }
        }

        .message-text {

        }
    }
}

.message-right {
    align-self: flex-end;

    .avatar-container {
        order: 1;
        margin-right: 0;
        margin-left: 1.25rem;
    }

    .message-content {
        order: 0;
        border-bottom-left-radius: 10px;
        border-bottom-right-radius: 0;
    }

    .name {
        color: lighten($color-primary, 10%) !important;
    }
}
</style>