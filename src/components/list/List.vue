<template>
    <div class="autocomplete">
        <div class="list">
           <ItemList
                v-for="(item, index) in itenslist" 
                :key="index" :itemName="item.name"
                :itemChip="item.categoria"
                :listAction="listAction"
                :item="item"
                @action="acao"
            />
        </div>
    </div>
</template>

<script>
import ItemList from "./ItemList.vue"

export default {
    components: {
        ItemList,
    },
    props: {
        itenslist: {
            type: Array,
            default: []
        },
        listAction: {
            type: Array,
            default: []
        }
    },
    data() {
        return {
        };
    },
    methods: {
        acao(action, item) {
            this.$emit('action', action, item);
        }
    },
};
</script>

<style lang="stylus" scoped>
.list
    display: flex
    flex: 1 1 auto
    flex-direction: column

</style>
