<template>
<div id="top">
	<div id="cv" class="instaFade">
		<div class="mainDetails">
			<div id="headshot" class="quickFade">
				<img src="../assets/jasFad.png" alt="" />
			</div>
			
			<div id="name">
				<h1 class="quickFade delayTwo">{{ cv.name }}</h1>
				<h2 class="quickFade delayThree">{{cv.jobtitle}}</h2>
			</div>
			
			<div id="contactDetails" class="quickFade delayOne">
				<ul>
					<li>e: <a v-bind:href="'mailto:'+this.cv.email">{{cv.email}}</a></li>
					<li v-for="(item, key) in cv.sities" v-bind:key="key">
						w:<a v-bind:href="'http://'+item" target="_blank">&nbsp;{{item}}</a>
					</li>
					<li>m:&nbsp;{{ cv.mobitel }}</li>
				</ul>
			</div>
			<div class="clear"></div>
		</div>
		
		<div id="mainArea" class="quickFade delayFive">

			<section>
				<article> <!-- Prof. Summary -->
					<div class="sectionTitle">
						<h1>{{ cv.profsum.title }}</h1>
					</div>
					<div class="sectionContent">	
						<article   v-for="(item, key) in cv.profsum.items" v-bind:key="key">
							<p>{{ item[1] }}</p>
						</article>
					</div>
				</article>
				<div class="clear"></div>
			</section>

			<section> <!-- Skills -->
				<div class="sectionTitle">
					<h1>{{cv.skills.title}}</h1>
				</div>
				<div class="sectionContent">
					<ul class="keySkills">
							<li v-for="(item, key) in cv.skills.items" v-bind:key="key" >
  					 		<div>
									<div class="mspace" style="width: 100%">
										<div class="level" v-bind:style="'width:'+item[0]+'%'"></div>
									</div>
									<p>{{ item[1] }}</p>
								</div>
							</li>
					</ul>
				</div>
				<div class="clear"></div>
			</section>

			<section> <!-- Languages -->
				<div class="sectionTitle">
					<h1>{{cv.languages.title}}</h1>
				</div>
				<div class="sectionContent">
					<ul class="keySkills">
							<li v-for="(item, key) in cv.languages.items" v-bind:key="key" >
  					 		<div>
									<div class="mspace" style="width: 100%">
										<div class="level" v-bind:style="'width:'+item[0]+'%'"></div>
									</div>
									<p>{{ item[1] }}</p>
								</div>
							</li>
					</ul>
				</div>
				<div class="clear"></div>
			</section>

			<section> <!-- Work history -->
				<div class="sectionTitle">
					<h1>{{cv.workHistory.title}}</h1>
				</div>
				<div class="sectionContent" >
					<div class="page-break" v-for="(item, key) in cv.workHistory.items" v-bind:key="key">
						<h2>{{item.title}} at {{item.company}}</h2>
						<div class="subDetails">{{item.begin}} - {{item.end}}</div>
						<p v-for="(item, key) in item.items" v-bind:key="key">
							{{item[1]}}
						</p>
						<br>
					</div>
				</div>
				<div class="clear"></div>
			</section>

			<section>  <!-- Education -->
				<div class="sectionTitle">
					<h1>{{ cv.education.title }}</h1>
				</div>
				<div class="sectionContent">
					<article  v-for="(item, key) in cv.education.items" v-bind:key="key">
						<h2>{{ item.scool }}</h2>
						<h4 class="subDetails">{{ item.degree }}</h4>
						<p>{{ item.field }}</p>
					</article>
				</div>
				<div class="clear"></div>
			</section>
			
		</div>
	</div>
</div>
</template>

<script>
import 'w3-css/w3.css';
import { ajax } from '../ajax-axios';

export default {
	name: 'resume02',
	level: 7,
  data() {
    return {
      cv:{
				"name": "",
				"jobtitle": "",
				"adress": "",
				"homtetel": "",
				"mobitel": "",
				"email": "",
				"sities": [],
				"profsum": {
					"title": "",
					"items": []
				},
				"skills": {
					"title": "",
					"items": []
				},
				"languages":{
					"title": "",
					"items": []
				},
				"workHistory": {
					"title": "",
					"items": []
				},
				"education": {
					"title": "",
					"items": []
				}
			}
		}	
	},
  async mounted() {
    this.loading = true;
    try {
      this.cv = (await ajax.get('cv.php')).data;
      this.proftitle = this.cv.profsum.title;
      this.profi = this.cv.profsum.items;
    } catch (e) {
      console.log(e);
      this.errors.push(e);
    }
    this.loading = false;
  }
};
</script>

<style lang="scss" scoped>
@import url("https://fonts.googleapis.com/css?family=Forum|Karma:300,400,700|Playfair+Display:400,400i,900&amp;subset=cyrillic");
// font-family: 'Karma', serif;
// font-family: 'Playfair Display', serif;
// font-family: 'Forum', cursive;

$fnt-par:  'Forum', cursive;
$fnt-h1:   'Karma', serif;
$fnt-h2:   'Playfair Display', serif;

$clr-01: rgb(204, 141, 47);
$clr-02: rgba(202, 185, 160, 0.808);
$clr-03: rgb(185, 100, 24);

$met-deb: 3px;

html,body,div,span,object,iframe,h1,h2,h3,h4,h5,h6,p,blockquote,pre,abbr,address,cite,code,del,dfn,em,img,ins,kbd,q,samp,small,strong,sub,sup,var,b,i,dl,dt,dd,ol,ul,li,fieldset,form,label,legend,table,caption,tbody,tfoot,thead,tr,th,td,article,aside,canvas,details,figcaption,figure,footer,header,hgroup,menu,nav,section,summary,time,mark,audio,video {
	border:0;
	font:inherit;
	font-size:100%;
	margin:0;
	padding:0;
	vertical-align:baseline;
}

article,aside,details,figcaption,figure,footer,header,hgroup,menu,nav,section {
  display: block;
}

@media print {
  .page-break {
			page-break-inside: avoid;
	}
  @page div {	
		padding:50px;
	}
	#cv {
		box-shadow: none !important; 
	}
	// .sectionContent {
  // 	margin-top: 20px;
	// }
}

.mspace { 
	height: $met-deb;  /* Can be anything */
	position: relative;
	background: white;
	border-radius: $met-deb;
	padding: 0px;
}
.level {
	height: $met-deb;  /* Can be anything */
	position: absolute;
	left: 0;
	top: 0px;
	background: $clr-02;
	border-radius: $met-deb;
	padding: 0px;
}

#top {
  font-family: $fnt-par;
  font-size: 16px;
  color: #222;
}

.clear {
  clear: both;
}

p {
  font-size: 1em;
  line-height: 1.4em;
  //margin-bottom: 10px;
  color: #444;
	padding-bottom: 0px;
}

#cv {
  width: 90%;
  max-width: 800px;
  background: #f3f3f3;
  margin: 30px auto;
	box-shadow: 2px 3px 9px 2px rgb(150, 150, 150); 
}

.mainDetails {
  padding: 25px 35px;
  border-bottom: 2px solid $clr-01;
  background: #ededed;
}

#name h1 {
  font-size: 2.5em;
  font-weight: 700;
  font-family: $fnt-h1;
  margin-bottom: -6px;
}

#name h2 {
  font-size: 2em;
  margin-left: 2px;
  font-family: $fnt-h1; 
}

#mainArea {
  padding: 0 40px;
}

#headshot {
  width: 12.5%;
  float: left;
  margin-right: 30px;
}

#headshot img {
  width: 100%;
  height: auto;
  border-radius: 50px;
}

#name {
  float: left;
}

#contactDetails {
  float: right;
}

#contactDetails ul {
  list-style-type: none;
  font-size: 0.9em;
  margin-top: 0px;
}

#contactDetails ul li {
  margin-bottom: 0px;
  color: #444;
}

#contactDetails ul li a,
a[href^='tel'] {
  color: #444;
  text-decoration: none;
  transition: all 0.3s ease-in;
}

#contactDetails ul li a:hover {
  color: $clr-03;
}

section {
  border-top: 1px solid #dedede;
  padding: 20px 0 0;
}

section:first-child {
  border-top: 0;
}

section:last-child {
  padding: 20px 0 10px;
}

.sectionTitle {
  float: left;
  width: 25%;
}

.sectionContent {
  float: right;
  width: 72.5%;
}

.sectionTitle h1 {
  font-family: $fnt-h1;// ori 'Rokkitt', Helvetica, Arial, sans-serif;
  font-style: italic;
  font-size: 1.2em;
  color: $clr-03;
}

.sectionContent h2 {
  font-family: $fnt-h1; //'Rokkitt', Helvetica, Arial, sans-serif;
  font-size: 1.5em;
  margin-bottom: 0px;
}

.subDetails {
  font-size: 0.8em;
  font-style: italic;
  margin-bottom: 3px;
}

.keySkills {
  list-style-type: none;
  column-count: 3;
  margin-bottom: 20px;
  font-size: 1em;
  color: #444;
}

.keySkills ul li {
  margin-bottom: 3px;
}

@media all and (min-width: 602px) and (max-width: 800px) {
  #headshot {
    display: none;
  }
  .keySkills {
    column-count: 2;
  }
}

@media all and (max-width: 601px) {
  #cv {
    width: 95%;
    margin: 10px auto;
    min-width: 280px;
  }

  #headshot {
    display: none;
  }

  #name,
  #contactDetails {
    float: none;
    width: 100%;
    text-align: center;
  }

  .sectionTitle,
  .sectionContent {
    float: none;
    width: 100%;
  }

  .sectionTitle {
    margin-left: -2px;
    font-size: 1.25em;
  }

  .keySkills {
    column-count: 2;
  }
}

@media all and (max-width: 480px) {
  .mainDetails {
    padding: 15px 15px;
  }

  section {
    padding: 15px 0 0;
  }

  #mainArea {
    padding: 0 25px;
  }

  .keySkills {
    column-count: 1;
  }

  #name h1 {
    line-height: 0.8em;
    margin-bottom: 4px;
  }
}

@keyframes reset {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 0;
  }
}

@keyframes fade-in {
  0% {
    opacity: 0;
  }
  40% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}

.instaFade {
  animation-name: reset, fade-in;
  animation-duration: 1.5s;
  animation-timing-function: ease-in;
}

.quickFade {
  animation-name: reset, fade-in;
  animation-duration: 2.5s;
  animation-timing-function: ease-in;
}

.delayOne {
  animation-delay: 0, 0.5s;
}

.delayTwo {
  animation-delay: 0, 1s;
}

.delayThree {
  animation-delay: 0, 1.5s;
}

.delayFour {
  animation-delay: 0, 2s;
}

.delayFive {
  animation-delay: 0, 2.5s;
}
</style>
