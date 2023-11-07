<template>
  <div>
    <button @click="doNothing">NOTHING</button>
  </div>
</template>

<script>
export default {
  methods: {
    doNothing() {
      alert("You clicked the 'NOTHING' button.");
    },
  },
};
</script>

<style scoped>
/* Add any component-specific styles here */
</style>
