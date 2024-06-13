<template>
    <div class="header">
        <HeaderMenu />
    </div>
</template>

<script>
import { ref } from "vue";
import HeaderMenu from "./HeaderMenu.vue"

export default {
    components: {
        HeaderMenu
    },
    setup(props, { emit }) {
        return {
        };
    },
};
</script>

<style lang="stylus" scoped>
.header
    display: flex;
    flex-direction: row-reverse;
    position: fixed;
    top: 0;
    right: 0;
    left: 105px;
    height: 83px;
    z-index: 9999;
    display: flex;
    background-color: #FFFFFF;
    box-shadow: 0 1px 6px rgba(0, 0, 0, 0.1);
    
</style>