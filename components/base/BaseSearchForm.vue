<template>
    <b-form class="search-form" @submit="onSubmit">
        <b-form-input
            id="site-search"
            v-model="search"
            class="search-input"
            name="search"
            placeholder="Search Here.."
            required
        />

        <button type="submit">
            <SvgIcon class="form-icon-loupe form-icon" name="loupe" />
        </button>
    </b-form>
</template>

<script>
export default {
    data() {
        return {
            search: ''
        };
    },
    methods: {
        onSubmit(event) {
            event.preventDefault();
            this.search = '';
        }
    }
};
</script>

<style lang="scss" scoped>
.search-form {
    display: flex;
    justify-content: space-between;
    padding-top: get-m-vw(30px);

    @include mediaSize(tablet) {
        padding-top: get-t-vw(30px);
    }
}

.form-icon {
    width: get-m-vw(28px);
    height: get-m-vw(28px);
    color: #aaa;
    cursor: pointer;

    @include mediaSize(tablet) {
        width: get-t-vw(28px);
        height: get-t-vw(28px);
    }
}

.search-input {
    width: get-m-vw(250px);
    font-family: 'Raleway', sans-serif;
    font-size: get-m-vw(25px);
    font-weight: bold;
    color: #aaa;
    background-color: #232323;
    border: none;

    @include mediaSize(tablet) {
        width: get-t-vw(400px);
        font-size: get-t-vw(25px);
    }
}
</style>
