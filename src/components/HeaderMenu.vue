<template>
    <div class="header-menu-user">
        <button>
            <Avatar :size="'50px'" :name="user.name"/>
            <div class="user-info">
                <span class="nome-user">{{ user.name }}</span>
                <span class="nome-cargo">{{ user.cargo }}</span>
            </div>
        </button>
        <MenuPopover :listAction="listAction" :item="item" @action="acao"/>
    </div>
</template>

<script>
import { ref } from "vue";
import Avatar from "./Avatar.vue"
import auth from '@/core/auth/auth'
import MenuPopover from "./MenuPopover.vue"
import { useStore } from 'vuex';
import { useRouter } from 'vue-router';
import utils from '@/utils/utils';

export default {
    components: {
        Avatar,
        MenuPopover
    },
    props: {
    },
    setup(props, { emit }) {
        const store = useStore();
        const router = useRouter();
        const user = ref({
            name:  auth.getNomeUsuario(),
            cargo: auth.getCargoUsuario()
        });

       const listAction = [
            {
                name: utils.getTranslation('header.txtSair'),
                icon: ['fas', 'circle'],
                color: '#5ECDA5',
                action: 'sair'
            }
        ];
        const item = null;

        async function acao(action, item) {
            if (action == 'sair') {
                await store.dispatch('auth/logout');
                router.push({ path: '/login'});

            }
        }

        return {
            user,
            listAction,
            item,
            acao
        };
    },
};
</script>

<style lang="stylus" scoped>
.header-menu-user
    display: flex;
    align-items: center
    button
        font-family: 'facilita-semiBold'
        background-color: #FFFFFF
        border: none
        display: flex
        align-items: center
        text-align: left
        .user-info
            display: flex
            flex-direction: column
            margin-right: 14px
            margin-left: 10px
            .nome-user
                font-size: 15px
                color: #283848
            .nome-cargo
                font-size: 12px
                color: #2693FF
    
</style>
