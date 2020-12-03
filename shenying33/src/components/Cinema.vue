<template>
  <div id="mian">
    <Header title="神影电影"></Header>
    <div id="content">
      <div class="ciname_menu">
        <div class="city_switch">
          全城
          <i class="fa fa-caret-down"></i>
        </div>
        <div class="city_switch">
          品牌
          <i class="fa fa-caret-down"></i>
        </div>
        <div class="city_switch">
          特色
          <i class="fa fa-caret-down"></i>
        </div>
      </div>
      <CiList></CiList>
    </div>
    <TabBar></TabBar>
  </div>
</template>
<script>
import Header from '../components/Header.vue'
import TabBar from '../components/TabBar.vue'
import CiList from '../components/CiList.vue'
export default {
    name:'ciname',
    components:{
        Header,
        TabBar,
        CiList
    }
}
</script>
<style scoped>
    #content .ciname_menu{
        width: 100%;
        height: 45px;
        border-bottom: 1px solid #e6e6e6;
        display: flex;
        justify-content: space-around;
        align-items: center;
        background: white;
    }
</style>