<template>
    <div id="main">
        <Header title="我的神影"></Header>
        <div id="content">
            <Login></Login>
        </div>
        <TabBar></TabBar>
    </div>
</template>
<script>
import Header from '../components/Header.vue'
import TabBar from '../components/TabBar.vue'
import Login from '../components/Login.vue'
export default {
    name:'Mine',
    components:{
        Header,
        TabBar,
        Login
    }
}
</script>