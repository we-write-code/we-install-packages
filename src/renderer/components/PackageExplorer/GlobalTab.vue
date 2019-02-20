<template>
    <div>
        <p>GlobalTab</p>
        <p>{{ file }}</p>
        <sidenav></sidenav>
        <package-section></package-section>
    </div>
</template>

<script>
  import Sidenav from './Tabs/Sidenav'
  import PackageSection from './Tabs/PackageSection'

  export default {
    name: 'GlobalTab',
    components: {
      Sidenav,
      PackageSection
    },
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
