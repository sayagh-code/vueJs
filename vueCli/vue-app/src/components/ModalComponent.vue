<template>
    <div class="modal-bg">
        <div class="modal" :class="{dark: theme==='dark', light: theme==='light'}">
            <h1>Titre du model</h1>
            <h4>{{ entete }}</h4>
            <p>{{ content }}</p>
        </div>
    </div>
</template>

<script>
    export default {
        props: ['entete', 'theme'],
        data(){
            return{
                content: 'Contenu de notre model',
            }
        }
    }
</script>

<style scoped>
    .modal-bg{
        background: rgba(0, 0, 0, 0.5);
        width: 100%;
        height: 70%;
        position: fixed;
        bottom: 0;
        left: 0;
    }
    .modal{
        width: 400px;
        padding: 40px;
        margin: 100px auto;
        background: #fff;
        border-radius: 10px;
    }
    h1{
        color: #0185f9;
        font-size: 2rem;
    }
    .dark{
        background: #111;
        color: #fff;
    }
    .light{
        background: #fff;
        color: #111;
    }
</style>