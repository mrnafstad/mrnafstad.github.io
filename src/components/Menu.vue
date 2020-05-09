<template>
 <div @mouseover="active=true" @mouseleave="active=false">
  <div id="contents-button">
   <button>Menu</button>
  </div>
  <div id="contents" v-if="active">
   <ul id="content-list"> 
    <li v-for="element in elements" v-bind:key="element"> <a :href="element.htmlRef" class="content-links"> {{ element.name }} </a> </li>
   </ul> 
   </div>
 </div>
</template>

<script>
export default {
	data() {
		return {
			elements: [
				{
					id: 1,
					name: "Home",
					htmlRef: "index.html"
				},
				{
					id: 2,
					name: "Logg",
					htmlRef: "logg.html"
				},
				{
					id: 3,
					name: "JavaScript",
					htmlRef: "pagejavascript.html"
				}],
			active: false		
		}
	},
	methods: {
		stuff() {
			console.log("Stuff")
			this.active = !this.active
		}
	}
}
</script>

<style>
#contents {
  position: fixed;
  left: 2px;
  top: 5px;
  font-size: 1.25em;
  height: var(--nav-height);
  background-color: snow;
  width: 165px;
  border-radius: 5px;
  }
button {
  position: fixed;
  left: 2px;
  top: 5px;
  font-size: 1.25em;
  padding: 9px;
  font-family: Trebuchet MS, serif;
  height: var(--nav-height);
  border-radius: 8px;
  background-color: snow;
  width: 90px;
}
ul {
  text-align: left;
  text-decoration: none;
  color: red;
  list-style-type: none;
  font-family: Trebuchet MS, serif;
  }
</style>