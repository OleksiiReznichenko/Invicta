<template>
    <div class="layout">
        <!-- <Preloader /> -->
        <div ref="notificationWindow" id="notificationWindow"></div>
        <!-- <img src="@/assets/img/cornerLight.png" alt="Corner light" class="corner-light"> -->
        <Navigation/>
        <nuxt class="on-top" />
    </div>
</template>

<script>
import Navigation from '@/components/layout/layoutsComponents/Navigation';
import Preloader from '@/components/layout/App/Preloader';

export default {
    components: {
        Navigation,
        Preloader,
    },
    watch: {
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
        // REINIT NAVIGATION DROPDOWN ON LOG IN & LOG OUT
        '$store.state.isLoggedIn'(newValue, oldValue) {
            setTimeout(() => {
                this.dropdownOpener = document.getElementById('dropdown-opener');
                this.dropdown = document.getElementById('dropdown');
                this.closeNavBtn = document.querySelector('.close-nav-btn');
                this.$store.dispatch('dropdownFunctional', {dropdownOpener: this.dropdownOpener, dropdown: this.dropdown, nav: this.nav, closeNavBtn: this.closeNavBtn});
            }, 200);
        }
    },
    mounted () {
        // DOM
        this.dropdownOpener = document.getElementById('dropdown-opener');
        this.notificationWindow = document.getElementById('notificationWindow');
        this.dropdown = document.getElementById('dropdown');
        this.nav = document.querySelector('.nav');
        this.navLeft = document.querySelector('.nav__left');
        this.navRight = document.querySelector('.nav__right');
        this.closeNavBtn = document.querySelector('.close-nav-btn');

        this.$store.commit('getNotificationWindow', {value: this.notificationWindow});

        // INIT NAVIGATION DROPDOWN
        this.$store.dispatch('dropdownFunctional', {dropdownOpener: this.dropdownOpener, dropdown: this.dropdown, nav: this.nav, closeNavBtn: this.closeNavBtn});


        // RESIZE

        let prevWidth = window.outerWidth;
        let prevHeight = window.outerHeight;

        window.addEventListener('resize', () => {
            if (prevWidth >= 850 && window.outerWidth < 850 ||
            prevWidth <= 850 && window.outerWidth > 850 ||
            prevHeight <= 600 && window.outerHeight > 600 ||
            prevHeight >= 600 && window.outerHeight < 600) {
                setTimeout(() => {
                    this.dropdownOpener = document.getElementById('dropdown-opener');
                    this.dropdown = document.getElementById('dropdown');
                    this.closeNavBtn = document.querySelector('.close-nav-btn');
                    this.$store.dispatch('dropdownFunctional', {dropdownOpener: this.dropdownOpener, dropdown: this.dropdown, nav: this.nav, closeNavBtn: this.closeNavBtn});
                    
                    this.nav.style.position = 'absolute';
                    this.navLeft.style.transform = 'translate(0)';
                    this.navRight.style.transform = 'translate(0)';
                }, 200);
            }
            prevWidth = window.outerWidth;
            prevHeight = window.outerHeight;
        })
    },
}
</script>

<style lang="scss" scoped>
.layout {
  padding-top: 11rem;
}

@media only screen and (max-width: 850px) {
  .layout {
    padding-top: 15rem;
  }
}
</style>

<style lang='scss'>
.corner-light {
  position: absolute;
  top: -15rem;
  left: 0;
//   max-width: 100%;
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
        border-radius: 4.5px;
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

.btn-gradient {
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
        opacity: 1;
        z-index: 25;
        transition: all .3s;
        border-radius: 8px;
    }

    &:hover::before {
        opacity: 0;
    }

    &:hover {
        border: 1px solid $color-primary;
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

.btn-white {
    border: 2px solid white;
    border-radius: 8px;

    &:hover {
        color: black;
        background-color: white;
        border: 2px solid transparent;
    }
}

.border-text-blue {
    display: inline-block;
    border-radius: 6px;
    color: $color-text-grey;
    font-size: 1.5rem;
    border: 1px solid $color-primary;
}

.border-text-green {
    display: inline-block;
    border-radius: 6px;
    color: $color-text-grey;
    font-size: 1.5rem;
    border: 1px solid $color-green;
}

.border-text-red {
    display: inline-block;
    border-radius: 6px;
    color: $color-text-grey;
    font-size: 1.5rem;
    border: 1px solid $color-orange;
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


.page-sequence {
    display: flex;
    align-items: center;
    margin-bottom: 30px;
}
    
.page-sequence a {
    color: $color-text-grey-dark;
    transition: all .3s;

    &:hover {
        color: $color-text-grey;
    }
}

.page-sequence span {
    color: white;
}

.page-sequence .arrow {
    transform: rotate(-90deg);
    margin: 0 1rem;
    width: 1.25rem;
}

.page-title {
    font-size: 4.5rem;
    margin-top: -.5rem;
    margin-bottom: 3rem;
}


.arrow {
    transition: all .3s;
}

.arrow-active {
    transform: rotate(-180deg);
}

.edit-class {
    .overlay {
        display: block !important;
        position: absolute;
        top: 0;
        left: 0;
        z-index: 10000;
        width: 100%;
        height: 100%;
        background-color: rgba($color-grey, .85);

        button {
            @include abs-center;
            padding: 1.25rem 4.5rem;
            white-space: nowrap;
            text-align: center;
            font-weight: 500 !important;
            border: none !important;

            &::before {
                opacity: 1 !important;
            }

            &:hover {
                transform: translate(-50%, -50%) scale(1.05);
            }
        }
    }
}


.form-page {
    // footer {
    //     position: absolute;
    //     bottom: 0;
    //     left: 50%;
    //     transform: translateX(-50%);
    //     width: 100%;
    // }

    .form-image {
        position: absolute;
        bottom: 0;
        right: 0%;
        height: 100%;
    }

    .main-content {
        position: absolute;
        left: 0;
        top: 50%;
        transform: translateY(-50%);
        width: 100%;
    }

    .form-container {
        background: $color-grey-dark;
        box-shadow: 0 .5rem 5rem rgba(0, 0, 0, 0.4);
        border-radius: 15px;
        padding: 4rem;
        margin-top: 4rem;
        position: relative;
    
        @media only screen and (max-width: 850px) {
            padding: 5rem;
        }
    
        @media only screen and (max-width: 500px) {
            padding: 5rem 4rem;
        }
    
        @media only screen and (max-width: 400px) {
            padding: 5rem 3rem;
        }

        .flex-container {
            display: flex;
            align-items: center;
    
            @media only screen and (max-width: 850px) {
                flex-direction: column;
            }

            .input-group:first-of-type {
                margin-right: 2.5rem;
    
                @media only screen and (max-width: 850px) {
                    margin-right: 0;
                }
            }
        }

        .btn-transparent {
            .background {
                background-color: $color-grey-dark;
            }
        }

        .btn {
            margin-top: 1rem;
            font-weight: 500 !important;
        }

        .input-left-content {
            position: absolute;
            right: 3rem;
            bottom: 1rem;
        }

        .input-group-login {
            input {
                &::placeholder {
                    color: white !important;
                }
            }
        }

        .input-group {
            position: relative;
                    
            input,
            textarea {
                display: block;
                background-color: #111111;
                box-shadow: 0 .3rem 1rem 0 rgba(#000000, .2) inset,
                0 .3rem 1rem 0 rgba(#19151F, .5);
                border-radius: 8px;
                padding: 1rem 2.5rem;
                margin-bottom: 1.75rem;
    
                @media only screen and (max-width: 850px) {
                    padding: 1.1rem 2.5rem;
                    margin-bottom: 2.5rem;
                }
            }

            input {
                width: 24rem;
    
                @media only screen and (max-width: 850px) {
                    width: 40rem !important;
                }
    
                @media only screen and (max-width: 450px) {
                    width: 38rem !important;
                }
    
                // @media only screen and (max-width: 400px) {
                //     width: 35rem !important;
                // }
            }

            textarea {
                width: 100%;
                padding: 1.25rem 2.5rem;
    
                @media only screen and (max-width: 850px) {
                    width: 40rem !important;
                }
            }

            .full-width {
                width: 100% !important;
            }

            label {
                display: inline-block;
                margin-bottom: .8rem;
    
                @media only screen and (max-width: 850px) {
                    margin-bottom: 1.1rem;
                }
            }
        }

        .btn-small {
            padding: .75rem 3.5rem;
        }

        .btn-medium {
            padding: 1.4rem 3.5rem;
        }

        .btn-big {
            padding: 1.4rem 6rem;
        }
    }
}

#notificationWindow {
    box-shadow: 0px .5rem 5rem 0px rgba(#000000, .4);
    background-color: $color-grey-2;
    border-bottom-left-radius: 2rem;
    border-bottom-right-radius: 2rem;
    padding: 5.75rem 0 7.25rem;
    width: 47rem;
    color: white;
    position: fixed;
    left: 50%;
    top: 0;
    z-index: 10000;
    transform: translateX(-50%);
    transition: all .3s;
    text-align: center;
    display: none;
    opacity: 0;
    font-family: Rowdies;
    font-weight: 700 !important;
    font-size: 2.85rem;

    .title {
        font-size: 2.85rem;
    }
}

.notification-good {
    background-color: #005306 !important;
}

.notification-bad {
    background-color: #531600 !important;
}

</style>