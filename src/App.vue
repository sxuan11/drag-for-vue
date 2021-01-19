<template>
  <div id="app">
    <drag class="wrap" ref="drag" :data="list" @getData="getData">
      <drag-item class="item" v-for="(item, index) in list" :key="index">
        <div>{{item}}</div>
      </drag-item>
    </drag>
    <div @click="getDataInfo">get</div>
  </div>
</template>

<script>

export default{
  data() {
    return {
      list: ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i']
    }
  },
  methods:{
    getData(data){
      console.log(data);
    },
    getDataInfo(){
      console.log(this.$refs.drag.getDataInfo());
    }
  }
}
</script>

<style>
*{
  margin: 0;
  padding: 0;
}
</style>
