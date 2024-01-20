<template>
    <div @click.self="closeModal" class="modal-bg">
        <div class="modal" :class="{dark: theme==='dark', light: theme==='light'}">
            <h1>Titre du model</h1>
            <h4>{{ entete }}</h4>
            <p>{{ content }}</p>
            <slot></slot>
            <hr>
            <slot name="defaut"></slot>
            <hr>
            <div class="actions">
                <slot name="liens"></slot>
            </div>
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
        },
        methods: {
            closeModal(){
                this.$emit('close')
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
        width: 500px;
        padding: 30px;
        margin: 60px auto;
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
    .actions{
        margin: 50px 0;
    }
    
    .light{
        background: #fff;
        color: #111;
    }
</style>