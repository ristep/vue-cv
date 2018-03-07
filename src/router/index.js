import Vue from "vue";
import Router from "vue-router";
import home from "../components/home.vue";
import About from "../components/About.vue";
import Resume from "../components/Resume.vue";
import resume02 from "../components/resume02.vue";
import cv from "../components/cv.vue";
import cv02 from "../components/cv02.vue";

Vue.use(Router);

export default new Router({
//  mode: "history",
  routes: [
    {
      path: "/",
      name: "home",
      component: home
    },
    {
      path: "/resume",
      name: "resume",
      component: Resume
    },
    {
      path: "/resume02",
      name: "resume02",
      component: resume02
    },
    {
      path: "/cv",
      name: "cv",
      component: cv
    },
    {
      path: "/cv02",
      name: "cv02",
      component: cv02
    },
    {
      path: "/about",
      name: "about",
      component: About
    }
  ]
});
