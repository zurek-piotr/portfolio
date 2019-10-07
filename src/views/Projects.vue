<template>
  <div class="projectWrapper">
    <h2 class="header">Projekty</h2>
    <div class="projects" :style="gridColumnsCount">
      <div
        class="projects__project"
        v-for="project in projectData"
        :key="project.title"
      >
        <div
          class="projects__project__logo"
          :style="{
            backgroundImage:
              'url(' + require('../assets/' + project.logo + '.svg') + ')'
          }"
        ></div>
        <div class="projects__project__title">{{ project.title }}</div>
        <div class="projects__project__description" v-if="CheckLanguage()">
          {{ project.description.pl }}
        </div>
        <div class="projects__project__description" v-else>
          {{ project.description.en }}
        </div>
        <div class="projects__project__links">
          <a
            v-for="button in project.buttons"
            :key="button.name"
            :href="button.link"
          >
            <div class="button" :class="button.name"></div>
          </a>
          <div
            class="button skills"
            @click="project.skills.isVisible = true"
          ></div>
        </div>
        <div
          class="projects__project__skillsWrapper"
          v-show="project.skills.isVisible"
          v-if="CheckLanguage()"
        >
          <div
            class="projects__project__skillsWrapper__closeIcon"
            @click="project.skills.isVisible = false"
          ></div>
          <div
            class="projects__project__skillsWrapper__content"
            v-html="project.skills.pl"
          ></div>
        </div>
        <div
          class="projects__project__skillsWrapper"
          v-show="project.skills.isVisible"
          v-else
        >
          <div
            class="projects__project__skillsWrapper__closeIcon"
            @click="project.skills.isVisible = false"
          ></div>
          <div
            class="projects__project__skillsWrapper__content"
            v-html="project.skills.en"
          ></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import projectData from '../data/Projects.json';

export default {
  data() {
    return {
      projectData,
    };
  },
  methods: {
    CheckLanguage() {
      if (navigator.language !== 'pl-PL') {
        return false;
      }
      return true;
    },
  },
  computed: {
    gridColumnsCount() {
      let count;
      if (projectData.length % 2 === 0) {
        count = 2;
      } else {
        count = 3;
      }
      return `grid-template-columns: repeat(${count}, 1fr)`;
    },
  },
};

</script>

<style lang="scss" scoped >
@import "../styles/globalVariables.scss";
.projectWrapper {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-content: center;
  align-items: center;
  margin-top: 100px;
  min-height: 100vh;
}
.header {
  font-size: 72px;
  text-transform: uppercase;
  text-align: center;
  font-weight: bold;
}
.projects {
  display: grid;
  grid-gap: 100px 100px;
  margin: 100px 50px;

  &__project {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-content: center;
    align-items: center;
    position: relative;

    &__logo {
      position: relative;
      background: center/50% no-repeat;
      height: 150px;
      width: 150px;
      border: 1px dotted;
      border-radius: 50%;

      &::before {
        position: absolute;
        content: "";
        z-index: -2;
        width: 0;
        height: 0;
        border-style: solid;
        border-width: 0 0 190px 140px;
        border-color: transparent transparent $solid-color transparent;
        bottom: 0;
        right: -15px;
      }

      &::after {
        position: absolute;
        content: "";
        z-index: -1;
        background: rgba(255, 255, 255, 0.01);
        box-shadow: inset 0px 0px 50px #ffffff;
        backdrop-filter: blur(20px);
        height: 100%;
        width: 100%;
        border-radius: 50%;
      }
    }

    &__title {
      margin-top: 15px;
      font-size: 36px;
      font-weight: bold;
      text-align: center;
    }
    &__description {
      margin: 30px 0;
      font-size: 24px;
      font-weight: 400;
      text-align: center;
    }
    &__links {
      display: flex;
      justify-content: center;
    }
    &__skillsWrapper {
      background: $primary_color;
      position: absolute;
      width: 100%;
      height: 120%;
      padding: 30px 10px 10px 10px;
      border-radius: 25px;
      border: 2px dotted black;
      font-weight: 400;

      &__content {
        margin-top: 10px;
        text-align: center;

        &::v-deep &__list {
          margin: 20px 40px;
          list-style: circle;
          &__element {
            margin: 15px 0;
          }
        }
      }

      &__closeIcon {
        position: absolute;
        right: 3px;
        top: 20px;
        padding: 5px;
        width: 25px;
        height: 25px;
        cursor: pointer;

        &::before,
        &::after {
          position: absolute;
          content: "";
          width: 25px;
          height: 5px;
          background: black;
          border-radius: 10px;
        }
        &::before {
          transform: rotate(45deg);
        }
        &::after {
          transform: rotate(-45deg);
        }
      }
    }
  }
}
.button {
  position: relative;
  background: center/contain no-repeat;
  width: 50px;
  height: 50px;
  margin: 0 25px;
  cursor: pointer;

  &::after {
    display: block;
    position: absolute;
    font-weight: 300;
    font-size: 14px;
    bottom: -20px;
    left: 50%;
    transform: translate(-50%);
  }

  &.github {
    background-image: url(../assets/github_logo.svg);

    &::after {
      content: "Source";
    }
  }

  &.link {
    background-image: url(../assets/webIcon.svg);

    &::after {
      content: "Link";
    }
  }

  &.skills {
    background-image: url(../assets/skills.svg);

    &::after {
      content: "Skills";
    }
  }
}
</style>
