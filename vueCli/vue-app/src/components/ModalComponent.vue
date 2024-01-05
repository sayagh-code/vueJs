<template>
    <div class="modal-bg">
        <div class="modal">
            <p>{{ content }}</p>
        </div>
    </div>
</template>

<script>
    export default {
        data(){
            return{
                content: 'Contenu de notre model'
            }
        }
    }
</script>

<style>
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
</style>