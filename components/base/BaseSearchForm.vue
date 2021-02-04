<template>
    <form class="search-form" :class="thema" @submit.prevent="onSubmit">
        <input
            id="site-search"
            v-model="search"
            class="search-input"
            name="search"
            placeholder="Search Here.."
            :class="[{ error: getValid }, thema]"
            @input="$v.search.$touch()"
        />

        <button type="submit" class="icon-container" :class="thema">
            <SvgIcon
                class="form-icon-loupe form-icon"
                name="loupe"
                :class="[{ error: getValid }, thema]"
            />
        </button>
        <p v-if="getValid" class="error-search" :class="thema">
            Sorry, field is required. Please, enter your search data!
        </p>
    </form>
</template>

<script>
import Vue from 'vue';
import Vuelidate from 'vuelidate';
import { required } from 'vuelidate/lib/validators';
Vue.use(Vuelidate);

export default {
    props: {
        thema: {
            type: String,
            required: true
        }
    },
    data() {
        return {
            search: '',
            valid: true
        };
    },
    validations: {
        search: {
            required
        }
    },

    computed: {
        getValid() {
            if (
                (!this.$v.search.required && this.$v.search.$dirty) ||
                (!this.$v.search.required && !this.valid)
            ) {
                return true;
            }
            return false;
        }
    },

    methods: {
        onSubmit() {
            if (!this.$v.$invalid) {
                this.search = '';
                this.valid = true;
            } else {
                this.valid = false;
            }
        }
    }
};
</script>

<style lang="scss" scoped>
.search-form {
    position: relative;
    display: flex;
    justify-content: space-between;
    margin: get-m-vw(30px) 0;

    @include mediaSize(tablet) {
        margin: get-t-vw(30px) 0;
    }

    @include mediaSize(desktop) {
        margin: get-vw(30px) 0;
    }

    &.white {
        display: flex;
        height: get-m-vw(55px);
        box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25);

        @include mediaSize(tablet) {
            height: get-t-vw(55px);
        }

        @include mediaSize(desktop) {
            height: get-vw(55px);
        }
    }
}

.icon-container {
    display: flex;
    width: 25%;

    @include mediaSize(tablet) {
        width: 10%;
    }

    @include mediaSize(desktop) {
        width: 25%;
    }

    &.white {
        background-color: #f0f0f0;
    }
}

.form-icon {
    width: get-m-vw(28px);
    height: get-m-vw(28px);
    margin: auto 0 auto auto;
    color: #aaa;
    cursor: pointer;

    &.white {
        width: get-m-vw(16px);
        height: get-m-vw(16px);
        margin: auto;

        @include mediaSize(tablet) {
            width: get-t-vw(16px);
            height: get-t-vw(16px);
        }

        @include mediaSize(desktop) {
            width: get-vw(16px);
            height: get-vw(16px);
        }
    }

    &.error {
        color: red;
    }

    @include mediaSize(tablet) {
        width: get-t-vw(28px);
        height: get-t-vw(28px);
    }

    @include mediaSize(desktop) {
        width: get-vw(28px);
        height: get-vw(28px);
    }
}

.search-input {
    width: 75%;
    font-family: 'Raleway', sans-serif;
    font-size: get-m-vw(25px);
    font-weight: bold;
    color: #aaa;
    background-color: #232323;
    border: none;

    @include mediaSize(tablet) {
        width: 90%;
    }

    @include mediaSize(desktop) {
        width: 75%;
    }

    &.white {
        padding: get-m-vw(16px);
        font-size: get-m-vw(15px);
        font-weight: normal;
        background-color: #fff;

        @include mediaSize(tablet) {
            padding: get-t-vw(16px);
            font-size: get-t-vw(15px);
        }

        @include mediaSize(desktop) {
            padding: get-vw(16px);
            font-size: get-vw(15px);
        }
    }

    &.error {
        border-bottom: red solid 1px;
    }

    @include mediaSize(tablet) {
        font-size: get-t-vw(25px);
    }

    @include mediaSize(desktop) {
        font-size: get-vw(25px);
    }
}

.error-search {
    position: absolute;
    bottom: get-m-vw(-16px);
    font-family: 'Relaway', sans-serif;
    font-size: get-m-vw(10px);
    font-weight: normal;
    color: red;

    &.white {
        bottom: get-m-vw(-23px);
        width: 90%;
        font-size: get-m-vw(10px);

        @include mediaSize(tablet) {
            bottom: get-t-vw(-18px);
            font-size: get-t-vw(16px);
        }

        @include mediaSize(desktop) {
            bottom: get-vw(-23px);
            font-size: get-vw(10px);
        }
    }

    @include mediaSize(tablet) {
        bottom: get-t-vw(-16px);
        font-size: get-t-vw(16px);
    }

    @include mediaSize(desktop) {
        bottom: get-vw(-16px);
        font-size: get-vw(10px);
    }
}
</style>
