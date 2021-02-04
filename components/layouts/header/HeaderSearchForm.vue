<template>
    <b-collapse id="collapse-1">
        <div class="search">
            <div class="search-container">
                <form @submit.prevent="onSubmit">
                    <input
                        v-model="search"
                        class="search-form"
                        name="search"
                        placeholder="Search Here.."
                        :class="{ error: getValid }"
                        @input="$v.search.$touch()"
                    />

                    <button type="submit">
                        <SvgIcon
                            class="form-icon-loupe form-icon"
                            :class="{ error: getValid }"
                            name="loupe"
                        />
                    </button>
                </form>
                <button class="close-form">
                    <SvgIcon v-b-toggle.collapse-1 name="X" class="form-icon" />
                </button>
            </div>
            <p v-if="getValid" class="error-massage">
                Sorry, field is required. Please, enter your search data!
            </p>
        </div>
    </b-collapse>
</template>

<script>
import Vue from 'vue';
import Vuelidate from 'vuelidate';
import { required } from 'vuelidate/lib/validators';
Vue.use(Vuelidate);

export default {
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

    &.error {
        color: red;
    }
}

.search {
    position: absolute;
    top: 0;
    right: 0;
    z-index: 3;
    display: flex;
    flex-direction: column;
    width: 100vw;
    height: get-vw(100px);
    background-color: white;
}

.error-massage {
    position: absolute;
    bottom: get-vw(15px);
    left: get-vw(360px);
    font-family: 'Relaway', sans-serif;
    font-size: get-vw(16px);
    font-weight: normal;
    color: red;
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

    &.error {
        border-bottom: red solid 1px;
    }
}
</style>
