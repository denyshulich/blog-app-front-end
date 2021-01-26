<template>
    <NuxtLink class="button" :to="url">
        <div class="btn-content">
            <slot></slot>
        </div>
    </NuxtLink>
</template>

<script>
export default {
    name: 'BaseButton',
    props: {
        url: {
            type: String,
            required: true
        }
    }
};
</script>

<style lang="scss" scoped>
.button {
    display: flex;
    color: $colorGrey;
    background-color: #f6f6f6;
    transition: color 0.3s ease-in-out, background-color 0.3s ease-in-out;

    &:hover {
        color: white;
        background-color: $colorBlue;
        transition: color 0.3s ease-in-out, background-color 0.3s ease-in-out;
    }
}

.btn-content {
    display: flex;
    margin: auto;
    text-align: center;
}
</style>
