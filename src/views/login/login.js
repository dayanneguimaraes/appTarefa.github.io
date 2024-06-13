import { ref } from 'vue';
import TextField from '@/components/TextField.vue';
import Btn from '@/components/Btn.vue';
import { useStore } from 'vuex';
import { useRouter } from 'vue-router';

export default {
    components: {
        TextField,
        Btn
    },
    setup() {
        const store = useStore();
        const router = useRouter();
        const username = ref('');
        const senha = ref('');
        async function entrar() {
            console.log('username', username.value);
            console.log('senha', senha.value);
            if (username && senha) {
                const dadosLogin = {
                    isAuthenticated: false,
                    key: null,
                    name: 'Dayanne',
                    cargo: 'Desenvolvedor front-end',
                    locale: 'pt-BR'
                };
                await store.dispatch('auth/login', dadosLogin);

                router.push({ path: '/home'});
            }
        }
        return {
            username,
            senha,
            entrar
        }
    }
};