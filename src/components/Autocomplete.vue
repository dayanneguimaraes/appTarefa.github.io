<template>
    <div class="autocomplete">
        <input
            type="text"
            :id="id"
            v-model="internalValue"
            @input="onInput"
            :placeholder="label"
            @blur="closeDropDown"
            @focus="onFocus"
        >
        <font-awesome-icon :icon="['fas', 'magnifying-glass']" class="icon" />
        <div v-if="filterOptions.length && isDropDownVisible && isNotDropDown" class="item">
            <div v-for="(option, index) in filterOptions" :key="index" @mousedown.prevent="selectOptions(option)">
                {{ option[item] }}
            </div>
        </div>
        <!-- {{ internalValue }} -->
        <!-- {{ errors }} -->
        <!-- {{ item }} -->
    </div>
</template>

<script>
export default {
     props: {
        label: {
            type: String,
            required: true,
        },
        id: {
            type: String,
            required: true,
        },
        item: {
            type: String,
            default: null
        },
        isNotDropDown: {
            type: Boolean,
            default: false
        },
        modelValue: {
            type: [String, Number, null],
            default: ''
        },
        options: {
            type: Array,
            default: []
        },
        errors: {
            type: String,
            default: "",
        }
    },
    data() {
        return {
            // options: ["Apple", "Banana", "Cherry", "Date", "Fig", "Grape", "Honeydew"],
            filterOptions: [],
            internalValue: this.modelValue,
            isDropDownVisible: false,
        };
    },
    watch: {
        modelValue(newValue) {
            this.internalValue = newValue;
            this.filteredOptions();
        },
        internalValue(newValue) {
            this.$emit('update:modelValue', newValue);
            this.filteredOptions();
        }
    },
    methods: {
        onInput() {
            this.filteredOptions();
        },
        filteredOptions() {
            if (this.internalValue) {
                if (this.item) {
                    this.filterOptions = this.options.filter((option) =>
                        option[this.item].toLowerCase().includes(this.internalValue.toLowerCase()),
                    );
                } else {
                    this.filterOptions = this.options.filter((option) =>
                        option.toLowerCase().includes(this.internalValue.toLowerCase()),
                    );
                }
                this.isDropDownVisible = true;
            } else {
                this.filterOptions = [];
                this.isDropDownVisible = false;
            }
            this.$emit('filtered-options', this.filterOptions);
        },
        selectOptions(option) {
            this.internalValue = option;
            this.isDropDownVisible = false;
        },
        closeDropdown() {
            setTimeout(() => {
                this.isDropDownVisible = false;
            }, 200);
        },
        onFocus() {
            if (this.filterOptions.length) {
                this.isDropDownVisible = true;
            }
        },
    },
};
</script>

<style lang="stylus" scoped>
.autocomplete
    position: relative
    width: 100%
    margin: 50px auto

    .icon
        position: absolute
        top: 15px
        right: 12px
        font-size: 18px
        pointer-events: none
        color: #aaa
    .item
        position: absolute
        border: 1px solid #ccc
        border-top: none
        z-index: 99
        top: 100%
        left: 0
        right: 0
        max-height: 150px
        overflow-y: auto
        background-color: white;

        div 
            padding: 10px
            cursor: pointer
            background-color: #fff

            &:hover
                outline: none;
                border-color: #2693FF;

input
    width: 100%;
    padding: 10px
    margin-bottom: 10px;
    border: 1px solid #BFDAEB;
    border-radius: 4px;
    box-sizing: border-box;
    height: 45px;

    &:focus
        outline: none;
        border-color: #2693FF;
</style>
