<template>
    <div class="carousel-wrapper">
        <VueSlickCarousel ref="carousel" v-bind="slickOptions">
            <div v-for="src of image" :key="src" class="img-wrapper">
                <img :src="src" />
            </div>
        </VueSlickCarousel>
        <div class="slick-next slick-arrow" @click="nextSlide">
            <svg-icon name="right-arrow" class="slick-icon" />
        </div>
        <div class="slick-prev slick-arrow" @click="prevSlide">
            <svg-icon name="left-arrow" class="slick-icon" />
        </div>
    </div>
</template>

<script>
export default {
    props: {
        image: {
            type: Array,
            required: true
        }
    },
    data() {
        return {
            slickOptions: {
                slidesToShow: 1,
                arrows: false,
                autoplay: true,
                autoplaySpeed: 7000
            }
        };
    },
    methods: {
        prevSlide() {
            this.$refs.carousel.prev();
        },
        nextSlide() {
            this.$refs.carousel.next();
        }
    }
};
</script>

<style lang="scss" scoped>
.slick-arrow {
    position: absolute;
    top: 40%;
}

.slick-icon {
    width: get-m-vw(20px);
    height: get-m-vw(20px);
    margin: auto;
}

.slick-prev,
.slick-next {
    display: none;
}

.carousel-wrapper {
    position: relative;
    overflow: hidden;

    &:hover {
        .slick-prev {
            left: 0;
            display: flex;
            width: get-m-vw(55px);
            height: get-m-vw(55px);
            color: white;
            border-radius: 0 50% 50% 0;

            @include mediaSize(tablet) {
                width: get-t-vw(55px);
                height: get-t-vw(55px);
            }

            &:hover {
                background-color: white;

                .slick-icon {
                    color: black;
                }
            }

            & > .slick-icon {
                margin-left: get-m-vw(15px);

                @include mediaSize(tablet) {
                    margin-left: get-t-vw(7px);
                }
            }
        }

        .slick-next {
            right: 0;
            display: flex;
            width: get-m-vw(55px);
            height: get-m-vw(55px);
            color: white;
            border-radius: 50% 0 0 50%;

            @include mediaSize(tablet) {
                width: get-t-vw(55px);
                height: get-t-vw(55px);
            }

            &:hover {
                background-color: white;

                .slick-icon {
                    color: black;
                }
            }

            & > .slick-icon {
                margin-right: get-m-vw(15px);

                @include mediaSize(tablet) {
                    margin-right: get-t-vw(7px);
                }
            }
        }
    }
}

.img-wrapper img {
    object-fit: cover;
    width: get-m-vw(294px);
    height: max-content;
    max-height: get-m-vw(300px);
    object-position: center;
    margin: auto;
    background-image: linear-gradient(gray 100%, transparent 0);

    @include mediaSize(tablet) {
        width: get-t-vw(340px);
        max-height: get-t-vw(300px);
    }
}

// .slick-dots {
//     bottom: 50px;

//     li button::before,
//     li.slick-active button::before {
//         color: transparent;
//         opacity: 1;
//     }

//     li button::before {
//         display: inline-block;
//         width: 20px;
//         height: 20px;
//         background-color: transparent;
//         border: 4px solid #fff;
//         border-radius: 50%;
//     }

//     li.slick-active button::before {
//         background-color: #fff;
//     }
// }
</style>
