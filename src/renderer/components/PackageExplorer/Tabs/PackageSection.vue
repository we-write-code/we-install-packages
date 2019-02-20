<template>
    <div>
        <p>PackageSection</p>
        <package-card></package-card>
    </div>
</template>

<script>
  import PackageCard from './PackageSection/PackageCard'

  export default {
    name: 'PackageSection',
    components: {
      PackageCard
    }
  }
</script>

<style scoped>

</style>
