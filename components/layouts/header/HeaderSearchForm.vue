<template>
    <b-collapse id="collapse-1">
        <div class="search">
            <div class="search-container">
                <b-form @submit="onSubmit">
                    <b-form-input
                        id="site-search"
                        v-model="search"
                        class="search-form"
                        name="search"
                        placeholder="Search Here.."
                        required
                    />

                    <button type="submit">
                        <SvgIcon class="form-icon-loupe form-icon" name="loupe" />
                    </button>
                </b-form>
                <button class="close-form">
                    <SvgIcon v-b-toggle.collapse-1 name="X" class="form-icon" />
                </button>
            </div>
        </div>
    </b-collapse>
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
#collapse-1 {
    position: absolute;
    top: 0;
    right: 0;
    z-index: 3;
    display: flex;
    width: 100vw;
    height: get-vw(100px);
    background-color: white;
}

.form-icon {
    width: get-vw(18px);
    height: get-vw(18px);
    padding-right: get-vw(15px);
    margin: auto;
    cursor: pointer;
}

.close-form {
    display: flex;
}

.form-icon-loupe {
    color: $colorBlue;
}

.search {
    position: absolute;
    top: 0;
    right: 0;
    z-index: 3;
    display: flex;
    width: 100vw;
    height: get-vw(100px);
    background-color: white;
}

.search-container {
    display: flex;
    width: get-vw(1200px);
    margin: auto;
}

.search-form {
    width: get-vw(1120px);
    font-family: 'Raleway', sans-serif;
    font-size: get-vw(25px);
    font-weight: normal;
    border: none;
}
</style>
