<template>
  <div id="app">
    <drag class="wrap" ref="drag" :data="list" @getData="getData">
      <drag-item class="item" v-for="(item, index) in list" :key="index">
        <div>{{item}}</div>
      </drag-item>
    </drag>
    <div @click="getDataInfo">get</div>
    <div @click="change">change</div>
    <div @click="add">add</div>
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
    },
    change(){
      this.list = ['1','2','3','4','5','6','7','8','9','10','11']
    },
    add(){
      this.list.push('11')
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
