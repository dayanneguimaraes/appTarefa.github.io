<template>
    <div class="app-login">
        <div class="side-right">
            <div class="content-logo">
                <img src="@/assets/logo.png" alt="FacilitaTask" width="115" height="109"/>
                <span class="titulo">
                    <span class="titulo-1">{{ $t('login.titulo') }}</span>
                    <span class="titulo-task">{{ $t('login.task') }}</span>
                </span>
                <div class="subtitle">{{ $t('login.subtitulo') }}</div>
            </div>
        </div>
        <div class="side-left">
            <h2>{{ $t("login.tituloFormulario")}}</h2>
            <form @submit.prevent="entrar">
                <div class="col-xs">
                    <TextField :label="$t('login.nome')" id="username" v-model="username" :errors="errors" />
                    <TextField :label="$t('login.senha')" id="senha" type="password" v-model="senha" />
                    <Btn variant="primary" size="lg" @clickButton="entrar">{{ $t('login.entrar')}} </Btn>
                </div>
            </form>
        </div>
    </div>
</template>

<script src="@/views/login/login.js" />
<style scoped lang="stylus" src="@/views/login/login.stylus"/>
