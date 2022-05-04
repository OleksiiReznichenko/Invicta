<template>
    <div class="section root">
        <div class="discount left">
            <div class="info">
                <h2>discounts</h2>
                <nuxt-link to="/browse" class="btn btn-white">Browse products</nuxt-link>
            </div>
        </div>
        <div class="right">
            <div class="item promo">
                <h3>Have a promo code</h3>
                <span class="subheading">enter promo</span>
                <input type="text" id="promo-input" placeholder="X4YZ28">
            </div>
            <div class="item join">
                <h3>Join</h3>
                <span class="subheading">Sign in to shop</span>
                <nuxt-link to="/login" class="btn btn-gradient"><span>Login</span></nuxt-link>
            </div>
        </div>
    </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
.root {
    display: flex;
    margin-bottom: 4rem;

    @media only screen and (max-width: 850px) {
        flex-direction: column;
        width: 66%;
    }

    @media only screen and (max-width: 600px) {
        width: 90%;
    }

    .left {
        @include flex-center;
        border-radius: 8px;
        // background-color: $color-orange;
        background-color: #D94C36;
        width: 78%;
        margin-right: 3rem;
        padding: 3.6rem 0;
        text-align: center;

        @media only screen and (max-width: 800px) {
            width: 74%;
        }

        // @media only screen and (max-width: 700px) {
        //     width: 90%;
        // }

        @media only screen and (max-width: 850px) {
            width: 100%;
        }

        h2 {
            font-size: 7.2rem;
            text-shadow: -3px -2px 0 #FFACAC,
            -6px -4px 0 #898989;
            margin-bottom: 1.5rem;
        }

        .btn {
            padding: 1rem 5rem;
            font-weight: 400 !important;
        }
    }

    .right {
        position: relative;
        width: 22%;

        @media only screen and (max-width: 800px) {
            width: 26%;
        }

        @media only screen and (max-width: 850px) {
            width: 100%;
            margin-top: 3rem;
        }

        h3 {
            font-size: 2.1rem;
            text-transform: uppercase;
            margin-bottom: .5rem;

            @media only screen and (max-width: 850px) {
                font-size: 2.4rem;
                margin-bottom: 1rem;
            }
        }

        .item {
            display: flex;
            flex-direction: column;
            align-items: flex-start;
        }
    
        .promo {
            margin-bottom: 1.5rem;

            @media only screen and (max-width: 850px) {
                margin-bottom: 0;
            }

            h3 {
                width: 17rem;

                @media only screen and (max-width: 850px) {
                    width: 20rem;
                }
            }

            .subheading {
                @media only screen and (max-width: 850px) {
                    font-size: 1.8rem;
                }
            }

            #promo-input {
                width: 100%;
                background-color: $color-grey-2;
                border-radius: 8px;
                padding: .75rem 3rem;
                color: white;
                margin-top: 1rem;

                @media only screen and (max-width: 850px) {
                    // width: 70%;
                    width: 30rem;
                    padding: 1rem 3rem;
                    margin-top: 1.5rem;
                }

                @media only screen and (max-width: 450px) {
                    // width: 80%;
                }
            }
        }

        .join {
            position: absolute;
            bottom: 0;

            @media only screen and (max-width: 850px) {
                display: none;
            }

            .subheading {
                color: $color-text-grey;
                font-size: 1.5rem;
            }

            .btn {
                padding: .75rem 4rem;
                margin-top: 1rem;
            }
        }

    }
}
</style>