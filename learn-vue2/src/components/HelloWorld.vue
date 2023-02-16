<template>
  <div class="hello">
    <el-button type="text" @click="dialogVisible = true">点击打开 Dialog</el-button>

    <el-dialog
      :visible.sync="dialogVisible"
      width="30%"
      :fullscreen="fullscreen">
      <span slot="title">
        <div>
          <span class="el-dialog__title">查看详情</span>
          <button @click="fullscreen = !fullscreen" type="button" aria-label="Close" class="el-dialog__headerbtn2">
            <i class="el-dialog__close el-icon el-icon-full-screen"></i>
          </button>
        </div>
      </span>
      <Foo></Foo>
      
      <!-- <span slot="footer" class="dialog-footer">
        <el-button @click="dialogVisible = false">取 消</el-button>
        <el-button type="primary" @click="dialogVisible = false">确 定</el-button>
      </span> -->
    </el-dialog>
  </div>
</template>

<script>
import Foo from '@/components/Foo.vue';
export default {
  name: 'HelloWorld',
  components: {
    Foo
  },
  data() {
    return {
      dialogVisible: false,
      fullscreen: false
    }
  },  
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
.fullscreen {
  height: 30px;
  width: 30px;
  border: 1px red solid;
}
.el-dialog__headerbtn2 {
    position: absolute;
    top: 20px;
    right: 40px;
    padding: 0;
    background: 0 0;
    border: none;
    outline: 0;
    cursor: pointer;
    font-size: 16px;
    color: #909399;
}
</style>
