<template>

    <div class="top-0 fixed w-full h-full bg-black bg-opacity-30" @click.self="closeModal">
        <div class="modal animate-scale-up-center">
            <div style="width:100%;height:0;padding-bottom:100%;position:relative;">
                <p class="text-6xl font-bold animate-scale-up-center text-center text-white mt-12">CONGRATS</p>
                <a class="flex justify-center text-4xl font-bold animate-scale-up-center text-center text-white h-1/4 gap-2">
                    <p>You got</p>
                    <p class="text-lillac"> TWRKD!</p>
                </a>
                <img src="../assets/giphy.gif" alt="" class="animate-scale-up-center -mt-6" >
            </div>
        </div>
    </div>

    
</template>

<script>
export default {
    methods: {
        closeModal() {
            this.$emit('close')
        }
    }
}

</script>

<style scoped>
    .modal {
        width: 500px;
        height: 500px;
        padding: 20px;
        margin: 100px auto;
        background: #84DFFF;
        border-radius: 43px;
    }
</style>