<template>
  <div>
    <NuxtLayout :name="layout">
      <div class="index-card bg-gradient-to-r hover:from-blue-400">
        <el-card
          :body-style="{ 'text-align': 'center', padding: '0px' }"
          @click="system.searchNftAction"
        >
          <div class="el-card-span-div">
            <span>click me</span>
          </div>
        </el-card>
      </div>
    </NuxtLayout>
  </div>
</template>

<script setup>
const system = useSystem();

definePageMeta({
  layout: 'main',
});
</script>

<style lang="scss">
.index-card {
  display: inline-block;
  height: 200px;
  margin: 10px;
  width: 200px;
  background-color: red;

  .el-card {
    border: none;
    cursor: pointer;
    height: 100%;
    width: 100%;
  }
}

.el-card__body {
  height: 100%;
  width: 100%;
}

.el-card-img {
  display: inline-block;
  height: 90%;
}

.el-card-span-div {
  height: 10%;
}
</style>
