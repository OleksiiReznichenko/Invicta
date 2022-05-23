<template>
  <div class="layout">
    <img src="@/assets/img/cornerLight.png" alt="Corner light" class="corner-light">
    
    <div class="error-content">
        <div class="info">
            <img src="@/assets/img/logo.png" alt="Logo" class="logo">
            <h1>Sorry</h1>
            <p>
                we couldn’t find any <br> results for this search
            </p>
            <nuxt-link class="btn btn-transparent" to="/browse"><div class="background"></div><span>Back to browse</span></nuxt-link>
        </div>

        <img src="@/assets/img/sphereBigErrorPage.png" alt="Sphere big" class="sphere sphere-big">
        <img src="@/assets/img/sphereSmallErrorPage.png" alt="Sphere small" class="sphere sphere-small">
    </div>
  </div>
</template>

<style lang="scss" scoped>
.layout, .error-content {
    width: 100% !important;
    height: 100vh !important;
    overflow: hidden !important;
    position: relative !important;
    
    margin-top: -11rem;

    @media only screen and (max-width: 850px) {
        margin-top: -15rem;
    }
}

.corner-light {
  position: absolute;
  top: 0;
  left: 0;
  max-width: 100%;
}

.info {
    @include abs-center;
    top: 42% !important;
    text-align: center;
    z-index: 100;
}

h1 {
    font-size: 14.5rem;
    line-height: 0.8;
}

p {
    font-size: 2.3rem;
    margin-top: 3rem;
    margin-bottom: 3.5rem;
    font-weight: 500;
}

.btn {
    padding: 1.35rem 5.45rem;

    .background {
        background-image: linear-gradient(to right bottom, #131215, #111112);
    }
}

.logo {
    width: 5.5rem;
    height: 5.5rem;
}

.sphere {
    position: absolute;

    &-big {
        left: 0rem;
        bottom: 0rem;
        width: 37rem;
        height: 37rem;
    }

    &-small {
        right: 0rem;
        top: 55%;
        transform: translateY(-50%);
        width: 37rem;
        height: 45rem;

        @media only screen and (max-width: 900px) and (min-height: 800px),
        only screen and (max-width: 600px) {
            top: 25%;
        }

        @media only screen and (max-width: 600px) {
            right: -5rem;
        }
    }
}

.btn {
    border-radius: 8px;
    overflow: hidden;
    position: relative;
    cursor: pointer;
    transition: all .3s;
    display: inline-block;

    .background {
        position: absolute;
        top: 0;
        left: 0;
        z-index: 20;
        width: 100%;
        height: 100%;
        border-radius: 4px;
        width: calc(100% - 3px);
        height: calc(100% - 3px);
        top: 1.5px; bottom: 1.5px;
        left: 1.5px; right: 1.5px;
        transition: all .3s;
    }

    span {
        position: relative;
        z-index: 30;
    }
}

.btn-transparent {
    border: 1px solid transparent;
    background-clip: padding-box;
    border-radius: 8px;

    &::before {
        content: '';
        display: block;
        height: 100%;
        width: 100%;
        position: absolute;
        top: 0;
        left: 0;
        background-image: $gradient-primary;
        opacity: 0;
        z-index: 25;
        transition: all .3s;
        border-radius: 8px;
    }

    &::after {
        content: '';
        position: absolute;
        top: -1px; bottom: -1px;
        left: -1px; right: -1px;
        background: $gradient-primary;
        transition: all .3s;
        border-radius: 8px;
    }

    &:hover::before {
        opacity: 1;
    }

    &:hover::after {
        opacity: 0;
    }

    &:hover {
        background-color: transparent;
    }
}

.profile__icon {
    width: 3.3rem;
    height: 3.3rem;
    border-radius: 100%;
    background-color: $color-grey-2;
    position: relative;
    cursor: pointer;
    margin-left: 2.4rem;

    @media only screen and (max-width: 600px) {
        width: 6.5rem;
        height: 6.5rem;
        font-size: 2.5rem !important;
    }

    span {
        @include abs-center;
        font-weight: 700;
        pointer-events: none;
        -moz-user-select: none;
        -webkit-user-drag: none;
        -webkit-user-select: none;
        -ms-user-select: none;
        user-select: none;
    }
}

.user__icon {
    width: 4.5rem;
    height: 4.5rem;
    margin-right: 1.5rem;
    margin-left: 0;
    border-radius: 100%;

    @media only screen and (max-width: 600px) {
        margin-right: 2.5rem;
    }
}
</style>
