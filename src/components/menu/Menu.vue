<template>
    <aside class="sidebar">
        <nav class="navbar">
            <div class="sidebar-logo" @click="openHome()">
                <img src="@/assets/logo.png" alt="TarefaTask" width="55" height="55"/>
            </div>
            <div class="sidebar-menu">
                <ul class="list-menu">
                    <li
                        v-for="(item, index) in items"
                        :key="index"
                        :class="'list-item'"
                    >
                        <button @click.stop="openMenu(item)" :aria-label="item.name">
                            <div class="item-menu">
                                <font-awesome-icon class="icon-menu" :icon="item.icon" />
                                {{ item.name }}
                            </div>
                        </button>
                    </li>
                </ul>
            </div>
        </nav>
    </aside>
</template>

<script>
import { ref } from "vue";
import Menu from './menu.js';
import { useRouter } from 'vue-router';

export default {
    components: {
    },
    setup(props, { emit }) {
        const items = ref(Menu);
        const router = useRouter();

        function openMenu(item) {
            router.push({ path: item.path });
        }
        
        function openHome() {
            router.push({ path: '/' });
        }

        return {
            items,
            openMenu,
            openHome
        };
    },
};
</script>

<style lang="stylus" scoped>
    .sidebar
        position: absolute
        display: flex
        overflow: hidden
        top: 0
        left: 0
        bottom: 0
        right: 0
        z-index: 0
        display: flex
        width: 105px
        height: 100%
        min-height:100%
        background-color: #2693FF
        .navbar
            .sidebar-logo
                display: flex
                align-items: center
                justify-content: space-between
                flex-direction: column
                position: relative
                width: 105px
                flex-shrink: 0
                top: 17px
                overflow-x: hidden
                overflow-y: hidden
                cursor: pointer
            .sidebar-menu
                display: flex
                flex-direction: row
                justify-content: center
                height: 100%
                .list-menu
                    position: relative
                    display: flex
                    flex-direction: column
                    justify-content: center
                    align-items: center
                    list-style: none
                    padding: 0px
                    .list-item
                        button
                            cursor: pointer
                            font-family: 'tarefa-bold'
                            font-size: 12px
                            padding: 5px
                            background-color: #2693FF
                            color: #FFFFFF
                            width: 105px
                            border-left: 0px
                            border-right: 0px
                            border-top: 1px solid #46A3FF
                            border-bottom: 1px solid #46A3FF
                            height: 83px
                            &:hover
                                background-color: #1182F2
                            svg
                                width: 32px
                                height: 32px
                            .item-menu
                                display: flex
                                flex-direction: column
                                align-items: center
</style>