<template>
<div class="w3-container w3-margin w3-twothird">
<div class="w3-flat-emerald w3-padding w3-white w3-card w3-margin-top">
<h3>README.md from GitHub repository <a href="https://github.com/ristep/vue-cv">ristep/vue-cv</a></h3>
</div>
<div class="w3-padding w3-white w3-card w3-margin-top w3-small" >
	<span v-html="readme_md"></span>
<!-- <vue-markdown>{{ readme_md }}</vue-markdown> -->
</div>
</div>
</template>

<script>
import { ajax } from '../ajax-axios';
// import VueMarkdown from 'vue-markdown';

export default {
	name: 'home',
	data() {
		return {
			readme_md: "...Loading...",
			loading: false
		}
	},
	// components: {VueMarkdown: VueMarkdown},
	async mounted() {
    this.loading = true;
    try {
			this.readme_md = (await ajax.get('smrk.php')).data;
			// console.log();
    } catch (e) {
      console.log(e);
      this.errors.push(e);
    }
    this.loading = false;
   }
}
</script>

<style lang="scss" scoped>
// @import 'w3-css//w3.css';
// @import url("https://www.w3schools.com/w3css/4/w3.css");
// @import url("https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css");
// @import url("https://fonts.googleapis.com/css?family=Forum|Karma:300,400,700|Playfair+Display:400,400i,900&amp;subset=cyrillic");

</style>
