<template>
    <div class="product-card">
        <div class="header">
            <div class="top-rect"></div>
            <img src="/products/ozon.png" alt="Ozon" class="product-image">
            <div class="container">
                <div class="item items-in-stock">1 items</div>
                <div class="item discount">save 32%</div>
            </div>
        </div>
        <div class="info">
            <div class="name">Ozon</div>
            <div class="container">
                <div class="prices">
                    <h3 class="new-price">$259.99</h3>
                    <span class="old-price">$299.99</span>
                </div>
                <div class="btn">+Add</div>
            </div>
        </div>
    </div>
</template>

<script>
export default {

}
</script>

<style lang='scss' scoped>
.product-card {
    background-color: $color-grey;
    // width: 23%;
    // height: 35rem;
    border-radius: 8px;
    // padding: 1rem 0 2.4rem;
    padding: 1rem 0 3.4rem;

    .header {
        position: relative;
        // margin-bottom: 2.25rem;
        margin-bottom: 3rem;

        .top-rect {
            width: 2.2rem;
            height: 1.3rem;
            background-color: #121112;
            margin: 0 auto;
            margin-bottom: 1rem;
            border-radius: 5px;
        }

        .product-image {
            display: block;
            width: 85%;
            margin: 0 auto;
            border-radius: 8px;
        }

        .container {
            display: flex;
            justify-content: center;
            position: absolute;
            bottom: -1rem;
            left: 50%;
            transform: translateX(-50%);
                
                @media only screen and (max-width: 1100px) {
                    transform: translateX(-50%) scale(.9);
                    bottom: -1.5rem;
                }

            .item {
                color: black;
                background-color: white;
                border-radius: 100px;
                padding: .5rem 1.5rem;
                font-weight: 500;
                font-size: 1.4rem;
                white-space: nowrap;


                &:not(:last-of-type) {
                    margin-right: 1rem;
                
                    // @media only screen and (max-width: 1100px) {
                    //     margin-right: 0;
                    // }
                }
            }
        }
    }

    .info {
        width: 85%;
        margin: 0 auto;

        .name {
            font-size: 1.8rem;
            color: $color-text-grey;
            margin-bottom: 2rem;
        }

        .container {
            display: flex;
            justify-content: space-between;
            align-items: center;
                
            @media only screen and (min-width: 1050px) {
                display: flex;
                align-items: center;
            }

            .prices {
                
                @media only screen and (min-width: 1450px) {
                    display: flex;
                    align-items: center;
                }


                .old-price {
                    color: $color-text-grey-dark;
                    font-size: 1.3rem;
                    text-decoration: line-through;
                }

                .new-price {
                    margin-right: .4rem;
                }
            }

            .btn {
                text-transform: uppercase;
                font-weight: 700;
                border: 2px solid $color-text-grey-dark;
                border-radius: 100px;
                padding: .35rem 1.25rem;
                
                &:hover {
                    // background-color: $color-text-grey-dark;
                    background-color: white;
                    color: black;
                    border: 2px solid transparent;
                }
            }
        }
    }
}
</style>