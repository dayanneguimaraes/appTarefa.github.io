<template>
    <div class="layout-container">
        <Menu/>
        <div class="layout-content">
            <Header />
            <div class="layout-body">
                <router-view :key="$route.fullPath" />
            </div>
        </div>
    </div>
</template>


<script>
import { ref } from "vue";
import Header from '../../components/Header.vue';
import Menu from '../../components/menu/Menu.vue';

export default {
    components: {
        Header,
        Menu
    },
    setup(props, { emit }) {

        return {
        };
    },
};
</script>

<style lang="stylus" scoped>
.layout-container
    width: 100%
    height: 100%
    min-height: 100%
    display: flex
    flex-direction: column
    .layout-content
        display: flex
        flex-direction: column
        height: 100%
        min-height: 100%
        left: 105px
        position: absolute
        width: 100%
        .layout-body
            background-color: #E9F4FB
            position: relative
            width: 100%
            height: 100%
            display: flex
            flex-direction: row
            top: 83px
</style>