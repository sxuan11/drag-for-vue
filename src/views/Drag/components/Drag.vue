<template>
  <div class="wrap" ref="wrap" @dragenter.prevent @dragover.prevent>
    <slot />
  </div>
</template>

<script>
export default {
  name: "Drag",
  data() {
    return {}
  },
  props: {
    data: {
      type: Array,
      default() {
        return [];
      }
    }
  },
  created() {
    this.toDom = "";  // 拖拽时进入的元素
    this.fromDom = "";  // 拖拽起始的元素
    this.children = [];
    this.$on("dragstart", this.onDragstart);  // 子组件会$emit触发dragstart，所以要先注册
    this.$on("dragenter", this.onDragenter);  // 子组件会$emit触发dragenter，所以要先注册
    this.$on("dragend", this.onDragend);  // 子组件会$emit触发dragend，所以要先注册
    this.$on("putChild", child => {  // 这里的child对应的是子组件的this.$el
      this.children.push(child);  // 将所有的子组件的Dom元素收集起来
    });
  },
  methods: {
    onDragstart(el) {
      this.fromDom = el;  // 记录拖拽时开始的元素
    },
    //技术关键要点
    /**
     * 把当前的节点的前面的不断的和去往的节点进行比较，如果相等，则在前一个节点插入来自的dom
     * 如果找不到，则插入到去往的节点的后面
     */
    onDragenter(el) {
      this.toDom = el;  // 因为拖拽会不停的触发enter事件，所以进入的哪个元素也要记录下来
      if (this.fromDom === this.toDom) {
        return;
      }
      if(this.isPrevNode(this.fromDom, this.toDom)) {  // 判断进入节点是否在起始节点的前面
        this.$refs["wrap"].insertBefore(this.fromDom, this.toDom);
        // 将起始节点插入到进入节点的前面
      } else {  // 否则就是在之后
        this.$refs["wrap"].insertBefore(this.fromDom, this.toDom.nextSibling);
        // 将起始节点插入到进入节点下一个兄弟节点的前面
      }
    },
    onDragend() {
      if (!this.data.length) return;
      const realDomOrder = [...this.$el.children].filter(child =>  //获取真实的Dom树
        child.classList.contains("__drag_item")
      );
      this.getDataOrder(realDomOrder, this.children);  // 对比两颗树
    },
    isPrevNode(from, to) {  // to是否在from的前面
      while(from.previousSibling !== null) {
        if(from.previousSibling === to) {
          return true;
        }
        from = from.previousSibling;
      }
    },
    getDataOrder(realList, dragAfterList) {
      const order = realList.map(realItem => { // 拿到打乱Dom树对应的序号
        return dragAfterList.findIndex(dragItem => realItem === dragItem);
      });
      const newData = [];
      order.forEach((item, i) => {  // 将原数组的数据按照打乱的序号赋值给新数组
        newData[i] = this.data[item];
      });
      this.$emit("getData", newData);  // 新数组的顺序就对应打乱Dom的序号，派发出去
    },
    getDataInfo(){
      const dragAfterList = this.children
      const realList = [...this.$el.children].filter(child =>  //获取真实的Dom树
        child.classList.contains("__drag_item")
      );
      const order = realList.map(realItem => { // 拿到打乱Dom树对应的序号
        return dragAfterList.findIndex(dragItem => realItem === dragItem);
      });
      const newData = [];
      order.forEach((item, i) => {  // 将原数组的数据按照打乱的序号赋值给新数组
        newData[i] = this.data[item];
      });
      return newData;  // 新数组的顺序就对应打乱Dom的序号，派发出去
    }
  },
}
</script>

<style scoped>
.wrap{
  /*display: flex;*/
  /*width: 100%;*/
  /*flex-wrap: wrap;*/
}
</style>
