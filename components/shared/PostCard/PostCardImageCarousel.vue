<template>
    <div class="carousel-wrapper">
        <VueSlickCarousel ref="carousel" v-bind="slickOptions">
            <div v-for="src of image" :key="src" class="img-wrapper">
                <img :src="src" />
            </div>
        </VueSlickCarousel>
        <div class="ctm-slick-next ctm-slick-arrow" @click="nextSlide">
            <SvgIcon name="right-arrow" class="ctm-slick-icon" />
        </div>
        <div class="ctm-slick-prev ctm-slick-arrow" @click="prevSlide">
            <SvgIcon name="left-arrow" class="ctm-slick-icon" />
        </div>
    </div>
</template>

<script>
import VueSlickCarousel from 'vue-slick-carousel';
import 'vue-slick-carousel/dist/vue-slick-carousel.css';
import 'vue-slick-carousel/dist/vue-slick-carousel-theme.css';

export default {
    name: 'PostCardImageCarousel',
    components: { VueSlickCarousel },
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
                autoplaySpeed: 7000,
                dots: true
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

<style lang="scss">
.ctm-slick-arrow {
    position: absolute;
    top: 40%;
}

.ctm-slick-icon {
    width: get-m-vw(20px);
    height: get-m-vw(20px);
    margin: auto;

    @include mediaSize(tablet) {
        width: get-t-vw(20px);
        height: get-t-vw(20px);
    }

    @include mediaSize(desktop) {
        width: get-vw(20px);
        height: get-vw(20px);
    }
}

.ctm-slick-prev,
.ctm-slick-next,
.slick-dots {
    display: none;
}

.carousel-wrapper {
    position: relative;
    overflow: hidden;

    &:hover {
        .slick-dots {
            bottom: 10%;
            display: block;

            li {
                margin: 0 1%;
            }

            li button::before,
            li.slick-active button::before {
                color: transparent;
                opacity: 1;
            }

            li button::before {
                display: inline-block;
                width: get-m-vw(10px);
                height: get-m-vw(10px);
                background-color: transparent;
                border: 4px solid #fff;
                border-radius: 50%;
                box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25);

                @include mediaSize(tablet) {
                    width: get-t-vw(10px);
                    height: get-t-vw(10px);
                }

                @include mediaSize(desktop) {
                    width: get-vw(10px);
                    height: get-vw(10px);
                }
            }

            li.slick-active button::before {
                background-color: #fff;
            }
        }

        .ctm-slick-prev {
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

            @include mediaSize(desktop) {
                width: get-vw(55px);
                height: get-vw(55px);
            }

            &:hover {
                background-color: white;

                .ctm-slick-icon {
                    color: black;
                }
            }

            & > .ctm-slick-icon {
                margin-left: get-m-vw(15px);

                @include mediaSize(tablet) {
                    margin-left: get-t-vw(7px);
                }

                @include mediaSize(desktop) {
                    margin-left: get-vw(7px);
                }
            }
        }

        .ctm-slick-next {
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

            @include mediaSize(desktop) {
                width: get-vw(55px);
                height: get-vw(55px);
            }

            &:hover {
                background-color: white;

                .ctm-slick-icon {
                    color: black;
                }
            }

            & > .ctm-slick-icon {
                margin-right: get-m-vw(15px);

                @include mediaSize(tablet) {
                    margin-right: get-t-vw(7px);
                }

                @include mediaSize(desktop) {
                    margin-right: get-vw(7px);
                }
            }
        }
    }
}

.img-wrapper img {
    object-fit: cover;
    width: get-m-vw(330px);
    height: get-m-vw(300px);
    object-position: center;
    margin: auto;
    background-image: linear-gradient(gray 100%, transparent 0);

    @include mediaSize(tablet) {
        width: get-t-vw(300px);
        height: get-t-vw(300px);
    }

    @include mediaSize(desktop) {
        width: get-vw(400px);
        height: get-vw(300px);
    }
}
</style>
