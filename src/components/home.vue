<template>
<div class="w3-light-grey">
<!-- <h2>{{ msg }}</h2> -->

<div class="w3-content" style="max-width:1400px;">

  <!-- The Grid -->
  <div class="w3-row-padding">

    <!-- Left Column -->
    <div class="w3-third w3-margin-top">

      <div class="w3-white w3-text-grey w3-card-4">

        <div class="w3-display-container">
          <img src="../assets/jasFad.png" style="width:100%" alt="Avatar">
          <div class="w3-display-bottomleft w3-container w3-xxlarge">
            <h2>{{ cv.name }}</h2>
          </div>
        </div>

        <div class="w3-container">
					<p><i class="fa fa-briefcase fa-fw w3-margin-right w3-large w3-text-teal"></i>Developer</p>
					<p><i class="fa fa-envelope fa-fw w3-margin-right w3-large w3-text-teal"></i><a v-bind:href="'mailto:'+this.cv.email">{{cv.email}}</a></p>
					<p v-for="(item, key) in cv.sities" v-bind:key="key">
						<i class="fa fa-home fa-fw w3-margin-right w3-large w3-text-teal"></i><a v-bind:href="'http://'+item" target="_blank">{{item}}</a>
					</p>
					<p><i class="fa fa-phone fa-fw w3-margin-right w3-large w3-text-teal"></i>{{ cv.mobitel }}</p>
					<hr>

					<p class="w3-xlarge"><b><i class="fa fa-asterisk fa-fw w3-text-teal w3-margin-bottom"></i>{{cv.skills.title}}</b></p>
					<div v-for="item in cv.skills.items">
							<p>{{ item[1] }}</p>
							<div class="w3-light-grey w3-round-xlarge w3-small w3-margin-bottom">
								<div class="w3-container w3-center w3-round-xlarge w3-teal" v-bind:style="'width:'+item[0]+'%'">{{item[0]}}%</div>
							</div>
					</div>
					<hr>
          <p class="w3-xlarge"><b><i class="fa fa-globe fa-fw w3-text-teal w3-margin-bottom"></i>{{cv.languages.title}}</b></p>
					<div v-for="item in cv.languages.items">
							<p>{{ item[1] }}</p>
							<div class="w3-light-grey w3-round-xlarge w3-small w3-margin-bottom">
								<div class="w3-container w3-center w3-round-xlarge w3-teal" v-bind:style="'width:'+item[0]+'%'">{{item[0]}}%</div>
							</div>
					</div>
          <br>
        </div>
      </div>
      <div class="w3-white w3-text-grey w3-card-4 w3-padding-16 w3-margin-top">
        <p class="w3-xlarge"><b><i class="fa fa-download fa-fw w3-text-teal w3-margin"></i>Download</b></p>
        <a class="w3-button w3-margin" href="http://capirp.us.to/download/ArSoft-Resume.pdf">ArSoft-Resume.pdf</a>
        <a class="w3-button w3-margin" href="http://capirp.us.to/download/ArSoft-CV.pdf">ArSoft-CV.pdf</a>
      </div>
    <!-- End Left Column -->
    </div>

    <!-- Right Column -->
    <div class="w3-twothird w3-margin-top" >

      <div class="w3-container w3-card w3-white w3-margin-bottom">
        <h1 class="w3-text-grey w3-padding-16"><i class="fa fa-suitcase fa-fw w3-margin-right w3-margin-bottom w3-xxlarge w3-text-teal"></i>{{cv.workHistory.title}}</h1>
        <div class="w3-container" v-for="item in cv.workHistory.items" :key="item.key">
          <h4><b>{{item.title}} / {{item.company}}</b></h4>
          <h6 class="w3-text-teal"><i class="fa fa-calendar fa-fw w3-margin"></i>{{item.begin}} - {{item.end}}</h6>
          <p class="w3-margin-left" v-for="txt in item.items">{{txt[1]}}</p>
          <hr>
        </div>
      </div>

      <div class="w3-container w3-card w3-white">
        <h1 class="w3-text-grey w3-padding-16"><i class="fa fa-certificate fa-fw w3-margin-right w3-xxlarge w3-text-teal"></i>{{cv.education.title}}</h1>
        <div class="w3-container" v-for="item in cv.education.items" :key="item.key">
          <h4 class="w3-margin-left"><b>{{item.scool}}</b></h4>
          <h6 class="w3-text-teal"><i class="fa fa-calendar fa-fw w3-margin"></i>{{item.year}}</h6>
          <p class="w3-opacity w3-margin-left">{{item.degree}}</p>
          <p class="w3-margin-left">{{item.field}}</p>
          <hr>
        </div>
      </div>

    <!-- End Right Column -->
    </div>
  <!-- End Grid -->
  </div>

  <!-- End Page Container -->
</div>

<footer class="w3-container w3-teal w3-center w3-margin-top">
	<hr>
  <p>Find me on social media.</p>
  <br>
  <a href="https://plus.google.com/+RistePanovski" target="_blank"><i class="fa fa-google-plus w3-hover-opacity w3-xlarge"></i></a>
  <a href="https://www.linkedin.com/in/riste-panovski-94041552" target="_blank"><i class="fa fa-linkedin w3-hover-opacity w3-xlarge"></i></a>
  <a href="https://www.facebook.com/ristepan" target="_blank"><i class="fa fa-facebook-official w3-hover-opacity w3-xlarge"></i></a>
  <a href="https://twitter.com/ristepan" target="_blank"><i class="fa fa-twitter w3-hover-opacity w3-xlarge"></i></a>
  <a href="https://www.instagram.com/ristepan/?hl=en" target="_blank"><i class="fa fa-instagram w3-hover-opacity w3-xlarge"></i></a>
  <a href="https://www.pinterest.com/ristepan" target="_blank"><i class="fa fa-pinterest-p w3-hover-opacity w3-xlarge"></i></a>
  <hr>
  <!-- <p>Powered by <a href="https://www.w3schools.com/w3css/default.asp" target="_blank">w3.css</a></p> -->
</footer>

</div>
</template>

<script>
import { ajax } from '../ajax-axios';

export default {
  name: 'home',
  props: {
    msg: String
  },
  level: 7,
  data() {
    return {
      cv: {
        name: '',
        jobtitle: '',
        adress: '',
        homtetel: '',
        mobitel: '',
        email: '',
        sities: [],
        profsum: {
          title: '',
          items: []
        },
        skills: {
          title: '',
          items: []
        },
        languages: {
          title: '',
          items: []
        },
        workHistory: {
          title: '',
          items: []
        },
        education: {
          title: '',
          items: []
        }
      }
    };
  },
  async mounted() {
    this.loading = true;
    try {
      this.cv = (await ajax.get('cv.php')).data;
    } catch (e) {
      console.log(e);
      this.errors.push(e);
    }
    this.loading = false;
  }
};
</script>

<style lang="scss" scoped>
@import 'w3-css//w3.css';
@import url("https://www.w3schools.com/w3css/4/w3.css");
@import url("https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css");
@import url("https://fonts.googleapis.com/css?family=Forum|Karma:300,400,700|Playfair+Display:400,400i,900&amp;subset=cyrillic");
// font-family: 'Karma', serif;
// font-family: 'Playfair Display', serif;
// font-family: 'Forum', cursive;

$fnt-par:  'Forum', cursive;
$fnt-h1:   'Karma', serif;
$fnt-h2:   'Playfair Display', serif;

$h1color: rgba(0, 149, 134, 0.548);
$h2color: rgb(0, 149, 135);

html,div,h1,h2,h3,h4,h5,h6 {
   font-family: $fnt-h1;
	 margin: 0px;
}
h1 {
 font-size: 2em;
 color: $h2color;
 text-shadow: 0px 0px 0.04em $h2color;
}
h2 {
 font-size: 1.2em;
 color: $h2color;
 text-shadow: 1px 1px 0 $h1color;
}
h4 {
 font-size: 1.3em;
 text-shadow: 0px 0px 0 $h2color;
 color: $h1color;
}
p {
	font-family: $fnt-par;
	margin: 0px;
}
.clear {
 clear: both;
}

</style>
