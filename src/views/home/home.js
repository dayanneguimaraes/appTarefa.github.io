import Autocomplete from '@/components/Autocomplete.vue';
import utils from '@/utils/utils';
import MenuPopover from '@/components/MenuPopover.vue';
import List from '@/components/list/List.vue';
import ModalTarefas from '@/views/tarefas/ModalTarefas.vue';
import categorias from '@/constants/categorias';
import auth from '@/core/auth/auth';

export default {
    name: 'Home',
    components: {
        Autocomplete,
        MenuPopover,
        List,
        ModalTarefas
    },
    data() {
        return {
            busca: '',
            label: utils.getTranslation('home.txtBusca'),
            subtitulo: '',
            showModal: false,
            tarefa: {
                codigo: null,
                name: null,
                descricao: null,
                categoria: null
            },
            items: [
                {
                    codigo: 0,
                    name: 'Planejar desenvolvimento do app TodoList',
                    isFinalizado: true,
                    categoria: categorias.categoria.URGENTE
                },
                {
                    codigo: 1,
                    name: 'Criar projeto Vuejs',
                    isFinalizado: false,
                    categoria: categorias.categoria.IMPORTANTE
                },
                {
                    codigo: 2,
                    name: 'Montar telas HTML/CSS',
                    isFinalizado: false,
                    categoria: null
                },
                {
                    codigo: 3,
                    name: 'Separar componentes',
                    isFinalizado: false,
                    categoria: null
                },
                {
                    codigo: 4,
                    name: 'Programar componentes',
                    isFinalizado: false,
                    categoria: null
                }
            ],
            filteredOptions: [],
            listAction: [
                {
                    name: utils.getTranslation('home.txtEditar'),
                    icon: ['fas', 'circle'],
                    color: '#5ECDA5',
                    action: 'editar'
                },
                {
                    name: utils.getTranslation('home.txtExcluir'),
                    icon: ['fas', 'circle'],
                    color: '#D6E6EF',
                    action: 'excluir'
                }
            ]
        }
    },
    mounted() {
        this.init();
    },
    methods: {
        updateFilteredOptions(option) {
            this.filteredOptions = option;
        },
        quantidadePendentes() {
            return this.items.filter(item => !item.isFinalizado).length;
        },
        init() {
            this.atualizarLista();
            const nomeUsuario = auth.getNomeUsuario();
            const quantidadeTarefasPendentes = this.quantidadePendentes();
            this.subtitulo = utils.getTranslation('home.msgBemVindo', nomeUsuario, quantidadeTarefasPendentes);
        },
        atualizarLista() {
            const tarefas = JSON.parse(localStorage.getItem('tarefas')) || [];
            if (tarefas.length > 0) {
                localStorage.setItem('tarefas', JSON.stringify(this.items));
                this.items = tarefas;
            }
        },
        abrirModal(item) {
            this.tarefa = item ? item : {
                codigo: null,
                name: null,
                descricao: null,
                categoria: null
            }
            this.showModal = true;
        },
        fecharModal() {
            this.showModal = false;
            this.tarefa = {
                codigo: null,
                name: null,
                descricao: null,
                categoria: null
            }
            this.atualizarLista();
        },
        excluir(tarefa) {
            const tarefas = JSON.parse(localStorage.getItem('tarefas')) || [];
            if (tarefas.length > 0) {
                const listaItens = tarefas.filter(item => item.name !== tarefa.name);
                localStorage.setItem('tarefas', JSON.stringify(listaItens));
                this.items = listaItens;
            }
        },
        editar(tarefa) {
            this.abrirModal(tarefa);
        },
        onMenuAction(action, item) {
            if (action === 'excluir') {
                this.excluir(item);
            } else if (action === 'editar') {
                this.editar(item);
            }
        },
    }
}