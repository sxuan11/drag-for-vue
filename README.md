# drag-for-vue
##
you can drag
## how to use
- main.js
```
import { Drag , DragItem } from ''
Vue.use(Drag).use(DragItem)
```
- xxx.vue
```
    <drag class="wrap" :data="list" @getData="getData">
      <drag-item class="item" v-for="(item, index) in list" :key="index">
        <div>{{item}}</div>
      </drag-item>
    </drag>

   data() {
     return {
       list: ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i']
     }
   },
   methods:{
     getData(data){
       console.log(data);
     }
   }
```


##props
|  参数  | 说明   | 类型  | 默认值  |
|  ----  | ----  | ---- | ----  |
| data  | 传入需要被监听的数组 | `Array` |  |
##Events
|  事件名  | 说明   | 回调参数  |
|  ----  | ----  | ---- | 
| getData  | 被排序后的数组 | `data: Array` |
