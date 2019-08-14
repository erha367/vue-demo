<template>
    <div id="news">
        我是首页组件2 -- news
    </div>
</template>

<script>
    import vueEvent from "../model/vueEvent";

    export default {
        data(){
            return {
                msg:'我是news组件',
                title:'news 2019'
            }
        },
        mounted() {
            vueEvent.$on('to-news',function (data) {
                alert(data);
            })
        }
    }
</script>