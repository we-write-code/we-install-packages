<template>
    <div>
        <p>ProjectTab</p>
        <sidenav></sidenav>
        <package-section></package-section>
    </div>
</template>

<script>
  import Sidenav from './Tabs/Sidenav'
  import PackageSection from './Tabs/PackageSection'

  export default {
    name: 'ProjectTab',
    components: {
      Sidenav,
      PackageSection
    }
  }
</script>

<style scoped>

</style>
