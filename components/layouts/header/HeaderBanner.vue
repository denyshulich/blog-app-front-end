<template>
    <div class="banner">
        <img
            class="lazyload banner-image"
            data-src="https://picsum.photos/id/327/2000/500"
            alt="banner"
        />
        <div class="container">
            <h1 class="banner-title">Home</h1>
            <p class="banner-disc">Some text</p>
        </div>
    </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.banner {
    position: relative;
    box-sizing: border-box;
    display: flex;
    width: 100%;
    height: get-m-vw(207px);
    padding-top: get-m-vw(100px);

    @include mediaSize(tablet) {
        height: get-t-vw(350px);
        padding-top: get-t-vw(100px);
    }

    @include mediaSize(desktop) {
        height: get-vw(475px);
        padding-top: get-vw(100px);
    }
}

.banner-image {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: -1;
    width: inherit;
    height: inherit;
    object-fit: cover;
    object-position: center;
}

.container {
    width: 80%;
    margin: auto;
    color: white;
    text-align: center;
}

.banner-title {
    font-size: get-m-vw(48px);

    @include mediaSize(tablet) {
        font-size: get-t-vw(40px);
    }

    @include mediaSize(desktop) {
        font-size: get-vw(48px);
    }
}

.banner-disc {
    padding-top: get-m-vw(20px);
    font-family: 'Relaway', sans-serif;
    font-size: get-m-vw(18px);
    font-weight: normal;

    @include mediaSize(tablet) {
        padding-top: get-t-vw(20px);
        font-size: get-t-vw(18px);
    }

    @include mediaSize(desktop) {
        padding-top: get-vw(20px);
        font-size: get-vw(18px);
    }
}
</style>
