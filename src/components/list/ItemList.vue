<template>
    <div class="list-item">
        <CheckBox />
        <div class="item-name">{{ itemName }}</div>
        <div :class="classChipCategoria" v-if="itemChip !== null">{{ itemChip['nome'] }}</div>
        <MenuPopover :listAction="listAction" :item="item" @action="acao"/>
    </div>
</template>

<script>
import CheckBox from "../CheckBox.vue"
import MenuPopover from '@/components/MenuPopover.vue';

export default {
    components: {
        CheckBox,
        MenuPopover
    },
    props: {
        itemName: {
            type: String,
            default: ''
        },
        itemChip: {
            type: [Object, String, null],
            default: null
        },
        item: {
            type: Object
        },
        listAction: {
            type: Array,
            default: []
        }
    },
    data() {
        return {
            classChipCategoria: 'item-chip'
        };
    },
    watch: {
        itemChip: {
            handler() {
                this.onInit();
            },
            deep: true
        },
    },
    mounted() {
        this.onInit();
    },
    methods: {
        onInit() {
            if (this.itemChip !== null) {
                this.classChipCategoria = `item-chip item-chip-${this.itemChip.nome}`;
            }
        },
        acao(action, item) {
            this.$emit('action', action, item);
        }
    },
};
</script>

<style lang="stylus" scoped>

.list-item
    display: flex
    align-items: center
    padding: 13px
    background-color: #FFFFFF
    margin-bottom: 0.5rem;
    justify-content: space-between
    .item-name
        font-family: 'facilita-semiBold'
        font-size: 15px
        color: #304458
        flex-grow: 1
        margin-left: 10px
    .item-chip
        font-family: 'facilita-bold'
        font-size: 11px
        color: #FFFFFF
        border-radius: 40px
        padding: 5px 10px
        margin-right: 15px
    .item-chip-Urgente
        background-color: #FF2E79
    .item-chip-Importante
        background-color: #FFC42E
</style>
