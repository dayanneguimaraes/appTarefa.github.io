<template>
    <div class="popover-container">
        <font-awesome-icon :icon="['fas', 'ellipsis-vertical']" @click="togglePopover" />
        <div v-if="isMenuPopoverVisible" class="popover-menu">
            <ul v-for="item in listAction" :key="item.name">
                <li @click="acao(item.action)">
                    <font-awesome-icon class="icon" :icon="item.icon" :style="{ color: item.color}"/>
                    {{ item.name }}
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
export default {
    name: 'MenuPopover',
    props: {
        listAction: {
            type: Array,
            default: [],
        },
        item: {
            type: Object
        }
    },
    data() {
        return {
            isMenuPopoverVisible: false,
        };
    },
    methods: {
        togglePopover() {
            this.isMenuPopoverVisible = !this.isMenuPopoverVisible;
        },
        acao(action) {
            this.isMenuPopoverVisible = false;
            this.$emit('action', action, this.item);
        },
    },
};
</script>

<style lang="stylus" scoped>
.popover-container
    position: relative
    display: inline-block
    svg
        padding: 5px
        cursor: pointer
    .icon
        width: 9px
        height: 9px
    .popover-menu
        position: absolute
        right: 0
        padding: 0 16px
        background-color: #FFFFFF
        border-radius: 5px
        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1)
        z-index: 10
        ul
            list-style: none
            margin: 0
            padding: 0
        li
            font-family: 'facilita-semiBold'
            font-size: 14px
            color: #748CA5
            padding: 8px
            cursor: pointer
            display: flex
            align-items: center
            &:hover
                background-color #E2EEF5
</style>