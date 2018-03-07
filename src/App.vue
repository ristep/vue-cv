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
		}
	},
	mounted() {
		this.onResize();
		window.addEventListener("resize", this.onResize );
	}
}
</script>

<style lang="scss" scoped>
html,body,div,span,object,iframe,h1,h2,h3,h4,h5,h6,p,blockquote,pre,abbr,address,cite,code,del,dfn,em,img,ins,kbd,q,samp,small,strong,sub,sup,var,b,i,dl,dt,dd,ol,ul,li,fieldset,form,label,legend,table,caption,tbody,tfoot,thead,tr,th,td,article,aside,canvas,details,figcaption,figure,footer,header,hgroup,menu,nav,section,summary,time,mark,audio,video {
border:0;
font:inherit;
font-size:100%;
margin:0;
padding:0;
vertical-align:baseline;
}

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

nav {
  background-color: $clr-03;
  overflow: hidden;
  font-family: 'Bree Serif', serif;
  font-size: 18px;
  // border-radius: 5px;

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
