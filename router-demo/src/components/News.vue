<template>
    <div id="news">
        <h2>我是新闻组件 -- news</h2>
        <hr>
        <ul>
            <li v-for="(v,k) in list">
                <router-link :to="'/contents/'+k">{{k}} ___ {{v}}</router-link>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    data(){
        return {
            msg:'我是新闻组建',
            list:['111','222','333','444']
        }
    }
}
</script>