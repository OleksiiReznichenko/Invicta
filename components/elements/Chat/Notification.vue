<template>
    <div class="notification">
        <div class="date-container">
            <span class="date">{{date}}</span>
            <div class="line"></div>
        </div>
        <div class="main-content">
            <div class="icon-container">
                <img src="@/assets/svg/comment.svg" alt="Icon" class="icon">
            </div>
            <div class="info">
                <span class="title-red">Notification</span>
                <p class="notification-text">
                    {{text}}
                </p>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: ['text', 'date']
}
</script>

<style lang="scss" scoped>
.notification {

    .date-container {
        display: flex;
        align-items: center;

        .date {
            color: $color-text-grey-dark;
            font-size: 1.5rem;
            display: inline-block;
            margin-right: 1rem;
        }

        .line {
            height: 1.5px;
            background-color: $color-grey-2;
            flex-grow: 1;
        }
    }
    

    .main-content {
        display: flex;
        align-items: center;
        padding: 2rem 0;

        .icon-container {
            width: 4rem;
            height: 4rem;
            border-radius: 100%;
            background-color: #111111;
            @include flex-center;
            margin-right: 1.25rem;

            .icon {
                width: 2rem;
                height: 2rem;
            }
        }

        .info {


            .title-red {
                color: $color-orange;
                font-size: 1.5rem;
            }

            .notification-text {
                margin-top: .5rem;
            }
        }
    }
}
</style>