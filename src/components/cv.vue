<template>
	<div id="cv">
		<div class="mainDetails">
			<div id="headshot" >
				<img src="../assets/jasFad.png" alt="" />
			</div>
			
			<div id="name">
				<h1 class="cv-name">{{ cv.name }}</h1>
				<h2 class="cv-jobtitle">{{cv.jobtitle}}</h2>
			</div>
			
			<div id="contactDetails">
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
		
		<div id="mainArea">
			
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
							<p>{{ item[1] }}</p>
							<div class="mspace" style="width: 100%">
								<div class="level" v-bind:style="'width:'+item[0]+'%'"></div>
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
					<ul class="keyLang">
						<li v-for="(item, key) in cv.languages.items" v-bind:key="key" >
							<p>{{ item[1] }}</p>
 							<div class="mspace" style="width: 100%">
								<div class="level" v-bind:style="'width:'+item[0]+'%'"></div>
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
						<h5>{{item.begin}} - {{item.end}}</h5>
						<p v-for="(item, key) in item.items" v-bind:key="key">
							{{item[1]}}
						</p>
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
</template>

<script>
import { ajax } from '../ajax-axios';

export default {
  name: 'cv',
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
      this.malto = 'mailto:' + this.cv.email;
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

$clr-pozad:rgba(240, 242, 242, 0.616);
$clr-h1:  rgb(202, 100, 40);
$clr-pbar:rgba(202, 114, 67, 0.562);
$clr-h2:  rgb(163, 88, 45);
$clr-p:   rgb(15, 15, 15);

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

@media print
{    
  .no-print, .no-print * {
  	display: none !important;
  }
  .page-break {
			page-break-inside: avoid;
			margin-top: 40px;
	}
	#cv {
		box-shadow: none !important; 
	}
}

#cv {

  width: 96%;
  border-radius: 4px;
  min-width: 280px;
	max-width: 880px;
  background: $clr-pozad;
  margin: 30px auto;
  box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);
  transition: all 1s cubic-bezier(.25,.8,.25,1);

	.mainDetails {
  	border-radius: 4px;
  	padding: 20px 30px;
  	border-bottom: 2px solid $clr-h1;
  	background: $clr-pozad;
		float: left;
		width: 100%;
		#headshot {
			width: 12.5%;
			float: left;
			margin-right: 25px;
			img {
				width: 100%;
				height: auto;
				border-radius: 50px;
			}
		}
		#name {
			float: left;
			h1 {
				font-size: 2em;
  			font-weight: 700;
  			font-family: $fnt-h1;
  			margin-bottom: 10px;
			}
			h2 {
  			font-size: 1.5em;
  			margin-left: 2px;
  			font-family: $fnt-h1; // ori 'Rokkitt', Helvetica, Arial, sans-serif;
			}
		}
		#contactDetails {
  		float: right;
			ul {
  			list-style-type: none;
  			font-size: 0.9em;
  			margin-top: 10px;
				li {
  				margin-bottom: 3px;
  				color: $clr-p;
				}
			}
		}
	}

	#mainArea {
		background: $clr-pozad;
		padding: 0 30px;
		section {
 			// border-bottom: 1px solid #dedede;
  		padding-left: 20px;
			margin-top: 20px;
			margin-bottom: 20px;
		}
		.sectionTitle {
			width: 25%;
			font-family: $fnt-par;
			font-size: 1.8em;
			color: $clr-h1;
			float: left;
		}
		.sectionContent {
			width: 100%;
			padding-left: 25%;
			h2 {
				margin-top: 20px;
				color: $clr-h2;
  			font-family: $fnt-h1;
  			font-size: 1.3em;
			}
			h5 {
				font-family: $fnt-par;
				color: $clr-pbar;
			}
			p {
				margin-top: 2px;
				font-family: $fnt-par;
  			color: $clr-p;	
			}
			.keySkills, .keyLang {
				list-style-type: none;
  			column-count: 3;
  			font-size: 1em;
				li {
					color: $clr-p;
					margin-bottom: 6px;
				}
			}
			
		}
	}

}

.mspace { 
	height: $met-deb;  /* Can be anything */
	position: relative;
	background: rgb(255, 255, 255);
	border-radius: $met-deb;
	padding: 0px;
}
.level {
	height: $met-deb;  /* Can be anything */
	position: absolute;
	left: 0;
	top: 0px;
	background: $clr-pbar;
	border-radius: $met-deb;
	padding: 0px;
}

#cv:hover {
	box-shadow: 0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22);
}

</style>

