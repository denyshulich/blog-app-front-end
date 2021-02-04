<template>
    <div>
        <div class="logo">Some-Logo</div>
        <p class="footer-text">
            Pellentesque placerat tincidunt urna, vitae feugiat magna vestibulum non. Mauris ut
            sagittis est. Pellentesque a felis est. Duis in risus metus. Cras felis ante, sodales
            eget pretium eu, hendrerit at metus. Maecenas aliquam dictum sapien id ornare.
        </p>
        <div class="social-link">
            <a href="https://twitter.com/" target="_blank">
                <SvgIcon name="twitter" class="social-icon" />
            </a>
            <a href="https://www.facebook.com/" target="_blank">
                <SvgIcon name="facebook" class="social-icon" />
            </a>
        </div>
    </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.logo {
    padding-bottom: get-m-vw(15px);
    font-size: get-m-vw(30px);
    color: white;

    @include mediaSize(tablet) {
        padding-bottom: get-t-vw(15px);
        font-size: get-t-vw(30px);
    }

    @include mediaSize(desktop) {
        padding-bottom: get-vw(15px);
        font-size: get-vw(30px);
    }
}

.footer-text {
    font-family: 'Raleway', sans-serif;
    font-size: get-m-vw(14px);
    font-weight: normal;
    line-height: 1.8;
    color: white;

    @include mediaSize(tablet) {
        font-size: get-t-vw(14px);
    }

    @include mediaSize(desktop) {
        font-size: get-vw(14px);
    }
}

.social-link {
    padding-top: get-m-vw(25px);

    a:first-child {
        margin-right: get-m-vw(25px);

        @include mediaSize(tablet) {
            margin-right: get-t-vw(25px);
        }

        @include mediaSize(desktop) {
            margin-right: get-vw(25px);
        }
    }

    @include mediaSize(tablet) {
        padding-top: get-t-vw(25px);
    }

    @include mediaSize(desktop) {
        padding-top: get-vw(25px);
    }
}

.social-icon {
    width: get-m-vw(18px);
    height: get-m-vw(18px);
    color: white;

    @include mediaSize(tablet) {
        width: get-t-vw(18px);
        height: get-t-vw(18px);
    }

    @include mediaSize(desktop) {
        width: get-vw(18px);
        height: get-vw(18px);
    }
}
</style>
