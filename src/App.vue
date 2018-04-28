<template>
  <div id="app">
  </div>
</template>

<script>
import $api from "./api/test";
export default {
	name: "App",
	components: {
	},
  created(){
    console.log($api.testApi);
  }
};
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
