<template>
    <div>
        <enviewer></enviewer>
        <router-view></router-view>
    </div>
</template>

<script>
  import Enviewer from './MainLayout/Enviewer'
  export default {
    components: {
      Enviewer
    }
  }
</script>

<style scoped>

</style>
