<template>
    <div class="home">
        <div class="titulo">
            <h1 class="titulo-home">{{ $t('home.titulo')}}</h1>
            <h2 class="subtitulo-home">{{ subtitulo }}</h2>
        </div>
        <div class="grid">
            <Autocomplete 
                :label="label" 
                :id="label" 
                :options="items" 
                :item="'name'" 
                v-model="busca" 
                @filtered-options="updateFilteredOptions"
            />
            <List :itenslist="busca !== '' ? filteredOptions : items" :listAction="listAction" @action="onMenuAction"/>
        </div>
        <div class="btn-icon" @click="abrirModal()">
            <button>
                <font-awesome-icon :icon="['fas', 'plus']" />
            </button>
        </div>
        <ModalTarefas :showModal="showModal" @closeModal="fecharModal" :tarefaEdicao="tarefa" />
    </div>
</template>

<script src="@/views/home/home.js" />
<style scoped lang="stylus" src="@/views/home/home.stylus"/>
