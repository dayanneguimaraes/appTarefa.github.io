<template>
    <div>
        <Modal :show="showModal" @close="fecharModal">
            <h2>{{ $t('tarefas.cadastrarTarefa')}}</h2>
            <TextField :label="$t('tarefas.titulo')" id="titulo" :value="tarefa.name" @update:modelValue="updateTarefaName"/>
            <Textarea
                :value="tarefa.descricao"
                @update:modelValue="updateTarefaDescricao"
                :label="$t('tarefas.descricao')"
                :rows="10"
                :cols="10"
                :id="'descricao'"
            />
            <div class="coluna">
                <RadioButton
                    v-model="tarefa.categoria"
                    :options="opcoes"
                />
                <Btn variant="primary" size="lg" @clickButton="adicionar" v-if="!isEdicao">{{ $t('tarefas.txtAdicionar')}} </Btn>
                <Btn variant="primary" size="lg" @clickButton="editar" v-if="isEdicao">{{ $t('tarefas.txtEditar')}} </Btn>
            </div>
        </Modal>
    </div>
</template>

<script>
import Modal from "@/components/Modal.vue";
import TextField from "@/components/TextField.vue";
import Textarea from "@/components/TextArea.vue";
import Btn from "@/components/Btn.vue";
import RadioButton from "@/components/RadioButton.vue";
import categorias from '@/constants/categorias';

export default {
    components: {
        Modal,
        TextField,
        Textarea,
        Btn,
        RadioButton
    },
    props: {
        showModal: {
            type: Boolean,
            default: false
        },
        tarefaEdicao: {
            type: Object
        }
    },
    data() {
        return {
            tarefa: {
                codigo: null,
                name: null,
                descricao: null,
                categoria: null
            },
            isEdicao: false,
            opcoes: [
                {
                    text: categorias.categoria.URGENTE.nome,
                    value: categorias.categoria.URGENTE.codigo
                },
                {
                    text: categorias.categoria.IMPORTANTE.nome,
                    value: categorias.categoria.IMPORTANTE.codigo
                }
            ]
        };
    },
    watch: {
        tarefaEdicao: {
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
            if (this.tarefaEdicao.codigo !== null) {
                this.isEdicao = true;
                this.tarefa = this.tarefaEdicao;
                this.tarefa = {
                    codigo: this.tarefaEdicao.codigo,
                    name: this.tarefaEdicao.name,
                    descricao: this.tarefaEdicao.descricao,
                    isFinalizado: this.tarefaEdicao.isFinalizado,
                    categoria: this.tarefaEdicao.categoria?.codigo
                }
            } else {
                this.tarefa = {
                    codigo: null,
                    name: null,
                    descricao: null,
                    isFinalizado: false,
                    categoria: null
                }
                this.isEdicao = false;
            }

        },
        getCategoriaByCodigo(codigo) {
            for (let chave in categorias.categoria) {
                if (categorias.categoria[chave].codigo === codigo) {
                    return categorias.categoria[chave];
                }
            }
            return null;
        },
        adicionar() {
            const tarefas = JSON.parse(localStorage.getItem('tarefas')) || [];
            let categoria = null;
            if (this.tarefa.categoria) {
                categoria = this.getCategoriaByCodigo(this.tarefa.categoria);
            }
            tarefas.push({
                codigo: tarefas.length + 1,
                name: this.tarefa.name,
                descricao: this.tarefa.descricao,
                isFinalizado: this.isFinalizado !== null ? this.isFinalizado : false,
                categoria: categoria
            });
            localStorage.setItem('tarefas', JSON.stringify(tarefas));
            this.fecharModal();
        },
        editar() {
            let tarefas = JSON.parse(localStorage.getItem('tarefas')) || [];
            let categoria = null;
            if (this.tarefa.categoria == 0 || this.tarefa.categoria == 1) {
                categoria = this.getCategoriaByCodigo(this.tarefa.categoria);
            }
            tarefas = tarefas.map(item => {
                if(item.codigo === this.tarefa.codigo) {
                    this.tarefa.categoria = categoria;
                    return { ...item, ...this.tarefa };
                }
                return item;
            });
            localStorage.setItem('tarefas', JSON.stringify(tarefas));

            this.fecharModal();
        },
        fecharModal() {
            this.$emit("update:tarefaEdicao", {
                codigo: null,
                name: null,
                descricao: null,
                categoria: null
            });
            this.$emit('closeModal');
        },
        updateTarefaName(newValue) {
            this.tarefa.name = newValue;
            this.$emit("update:tarefaEdicao", { ...this.tarefaEdicao, name: newValue });
        },
        updateTarefaDescricao(newValue) {
            this.tarefa.descricao = newValue;
            this.$emit("update:tarefaEdicao", { ...this.tarefaEdicao, descricao: newValue });
        }
    }
};
</script>
<style lang="stylus" scoped>
.coluna
    display: flex
    flex-direction: row
    justify-content: space-between
</style>