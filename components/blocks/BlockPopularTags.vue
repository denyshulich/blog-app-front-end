<template>
    <div class="container">
        <BaseTitleWidget>Popular tags</BaseTitleWidget>
        <div class="tags">
            <NuxtLink v-for="tag of tags" :key="tag" class="tags-item" to="/">{{
                tag.toUpperCase()
            }}</NuxtLink>
        </div>
    </div>
</template>

<script>
import BaseTitleWidget from '../base/BaseTitleWidget';
export default {
    components: { BaseTitleWidget },
    data() {
        return {
            tags: [
                'tags',
                'tagsden',
                'tags',
                'tagsbig',
                'tagsmegabig',
                'tagsbiggest',
                'tags',
                'tags'
            ]
        };
    }
};
</script>

<style lang="scss" scoped>
.tags {
    display: block;
}

.tags-item {
    position: relative;
    display: inline-block;
    padding: 0 get-m-vw(12px);
    margin: 0 get-m-vw(10px) get-m-vw(12px) 0;
    font-size: get-m-vw(13px);
    line-height: get-m-vw(32px);
    color: $colorGrey;
    background-color: #f0f0f0;
    border-radius: 5px;

    &:hover {
        color: white;
        background-color: $colorBlue;
    }

    @include mediaSize(tablet) {
        padding: 0 get-t-vw(12px);
        margin: 0 get-t-vw(10px) get-t-vw(12px) 0;
        font-size: get-t-vw(13px);
        line-height: get-t-vw(32px);
    }

    @include mediaSize(desktop) {
        padding: 0 get-vw(12px);
        margin: 0 get-vw(10px) get-vw(12px) 0;
        font-size: get-vw(13px);
        line-height: get-vw(32px);
    }
}
</style>
