<template>
  <div id="app">
    <nav id="top-nav" class="no-print">
      <router-link to="/">Home</router-link>
      <router-link to="/resume" v-if="this.gled">Resume I</router-link>
      <router-link to="/resume02" v-if="this.gled">Resume II</router-link>
      <router-link to="/cv" v-if="this.gled">CV I</router-link>
      <router-link to="/cv02" v-if="this.gled">CV II</router-link>
      <router-link to="/about" v-if="this.gled">About</router-link>
			<a href="#" class="icon" @click="onClick" v-if="this.shir<this.mxshir">&#9776;</a>
    </nav>
    <router-view/>
  </div>
</template>

<script>
export default {
	name:"App",
	data() {
		return {
			mxshir: 600,
			gled: true,
			shir: 2*600
		}
	},
	methods: {
		onClick() {
			this.gled = ! this.gled;
		},
		onResize() {
      this.shir = window.innerWidth;
			this.gled = (this.shir>this.mxshir);
		},
    Download() {
      //
    }
	},
	mounted() {
		this.onResize();
		window.addEventListener("resize", this.onResize );
	}
}
</script>

<style lang="scss" scoped>
@import './parti/reset';

$mx-shir: 600px;
$fnt-par: 'Forum', cursive;
$fnt-h1:  'Karma', serif;
$fnt-h2:  'Playfair Display', serif;

$clr-01: #5F9897;
$clr-02: rgb(147, 201, 200);
$clr-03: #009587; // rgb(73, 124, 123);
$clr-txt:#daf8f4;
$clr-txt-hi:#fffffb;

@media print {
  .no-print, .no-print * {
    display: none !important;
  }
}

nav:hover {
  box-shadow: 0 4px 10px rgba(0,0,0,0.12), 0 4px 8px rgba(0,0,0,0.24);
}

nav {
  background-color: $clr-03;
  overflow: hidden;
  font-family: 'Bree Serif', serif;
  font-size: 18px;
  // border-radius: 5px;
  box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);
	transition: all .1s cubic-bezier(.25,.8,.25,1);

  a {
    float: left;
    display: block;
    color: $clr-txt;
    padding: 14px 16px;
    text-decoration: none;
    // border-radius: 5px;
  }

  a:hover {
    color: $clr-txt-hi;
    text-shadow: 2px 2px 2px rgb(250, 250, 250);
  }

  a.router-link-exact-active {
    background-color: $clr-01;
    text-shadow: 2px 2px 2px rgb(250, 250, 250);
    color: $clr-txt-hi;
  }

	.icon {
		display: block;
		position: absolute;
		right: 0;
		top: 0;
	}

	@media screen and (max-width: $mx-shir) {
		a {
			position: relative;
			float: none;
			display: block;
			text-align: center;
		}
	}
}

</style>
