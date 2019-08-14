<template>
    <div id="heads">
        我是详情组件 #-_-  contents
        <br>
    </div>
</template>

<script>
    export default {
        mounted() {
            console.log(this.$route.params)
        }
    }
</script>