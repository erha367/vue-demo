<template>
    <div id="heads">
        我是首页组件2 -- heads
        <br>
        <button @click="emitNews()">给new广播数据</button>
    </div>
</template>

<script>
    import vueEvent from "../model/vueEvent";

    export default {
        data(){
            return {
                msg:'我是heads组件',
                title:'heads 2019'
            }
        },
        methods:{
            emitNews(){
                vueEvent.$emit('to-news',this.msg);
            }
        }
    }
</script>