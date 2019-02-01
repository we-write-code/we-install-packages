<template>
    <div>
        <p>Home</p>
        <p>{{ file }}</p>
    </div>
</template>

<script>
  export default {
    data() {
      return {
        file: null
      }
    },
    mounted() {
      this.$electron.ipcRenderer.on('project-opened', (event, data) => {
        this.file = data
      })
    }
  }
</script>

<style scoped>
</style>
