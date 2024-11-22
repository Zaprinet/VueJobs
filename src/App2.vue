<script>
  export default {
    data() {
      return {
        name: 'John Doe',
        status: 'active',
        tasks: ['Task1','Task2','Task3'],
        link: 'https://google.com'
      }
    },
    methods: {
      toggleStatus() {
        if (this.status === 'active') {
          this.status = 'pending'
        } else if (this.status === 'pending') {
          this.status = 'inactive'
        } else {
          this.status = 'active'
        }
      }
    }
  }
</script>

<template>
  <h1>{{ name }}</h1>
  <p v-if="status == 'active'">User Is Active</p>
  <p v-else-if="status == 'pending'">User Is Pending</p>
  <p v-else>User Is Inactive</p>

  <h3>Task:</h3>
  <ul>
    <li v-for="task in tasks" key="task">{{ task }}</li>
  </ul>
  <a :href="link">Click for google</a>
  <br>
  <button @click="toggleStatus">Change Status</button>
</template>

<style scoped>

</style>