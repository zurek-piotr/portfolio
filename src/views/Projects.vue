<template>
  <section class="projectWrapper">
    <h2 class="header">{{ $t('Projects') }}</h2>

    <div class="projects" :style="getGridColumnsCount()">
      <div
        class="projects__project"
        v-for="project in projectData"
        :key="project.title"
      >
        <div
          class="projects__project__logo"
          :style="{
            backgroundImage:
              'url(' +
              require('../assets/projectsSrc/' + project.logo + '.svg') +
              ')',
          }"
        ></div>

        <div class="projects__project__title">{{ project.title }}</div>

        <div class="projects__project__description">
          {{ project.description[$i18n.locale] }}
        </div>

        <div class="projects__project__links">
          <a
            class="projects__project__links__link"
            v-for="button in project.buttons"
            :key="button.name"
            :href="button.link"
            target="_blank"
          >
            <div class="button" :class="button.name"></div>
          </a>
          <div
            class="button skills"
            @click="project.skills.isVisible = true"
          ></div>
        </div>
        <transition name="projects__project__skillsWrapper">
          <div
            :class="[
              'projects__project__skillsWrapper',
              { open: project.skills.isVisible },
            ]"
            v-show="project.skills.isVisible"
          >
            <div
              class="projects__project__skillsWrapper__closeIcon"
              @click="project.skills.isVisible = false"
            ></div>
            <div
              class="projects__project__skillsWrapper__content"
              v-html="project.skills[$i18n.locale]"
            ></div>
          </div>
        </transition>
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import {Component, Vue} from 'vue-property-decorator';
import projectData from '../data/Projects.json';

@Component
export default class Projects extends Vue {
  public gridColumnsCount: number = 1;
  public projectData = projectData;

  getGridColumnsCount() {
      if (window.innerWidth < 768) {
        this.gridColumnsCount = 1;
      } else if (window.innerWidth < 1024 || projectData.length % 2 === 0) {
        this.gridColumnsCount = 2;
      } else {
        this.gridColumnsCount = 3;
      }
      return `grid-template-columns: repeat(${this.gridColumnsCount}, 1fr)`;
    }

  mounted() {
    window.addEventListener('resize', this.getGridColumnsCount);
  }
}
</script>

<style lang="scss" scoped>
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
  text-transform: uppercase;
  text-align: center;
  font-size: 48px;
  font-weight: bold;
}
.projects {
  display: grid;
  grid-gap: 150px 100px;
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
      height: 150px;
      width: 150px;
      background: center/50% no-repeat;
      border: 1px dotted;
      border-radius: 50%;

      &::before {
        position: absolute;
        content: '';
        height: 0;
        width: 0;
        bottom: 0;
        right: -15px;
        border-color: transparent transparent $solid-color transparent;
        border-style: solid;
        border-width: 0 0 190px 140px;
        z-index: -2;
      }

      &::after {
        position: absolute;
        content: '';
        height: 100%;
        width: 100%;
        box-shadow: inset 0 0 50px #ffffff;
        @supports (backdrop-filter: blur(20px)) {
          background: rgba(255, 255, 255, 0.01);
          backdrop-filter: blur(20px);
          filter: none;
        }
        background: rgba(255, 255, 255, 0.4);
        filter: blur(5px);
        border-radius: 50%;
        z-index: -1;
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
      display: inline-flex;
      justify-content: center;

      &__link {
        height: 50px;
        width: 50px;
        margin: 0 25px;
      }
    }
    &__skillsWrapper {
      position: absolute;
      height: 120%;
      width: 100%;
      background: $primary-color;
      padding: 30px 10px 10px 10px;
      border-radius: 25px;
      font-weight: 400;

      &-enter-active {
        animation: show 0.3s;
      }
      &-leave-active {
        animation: show 0.3s reverse;
      }

      @keyframes show {
        from {
          transform: scale(0);
        }
        to {
          transform: scale(1);
        }
      }

      &::before {
        position: absolute;
        content: '';
        background: url(../assets/patterns/stripes.svg);
        height: 100%;
        width: 100%;
        bottom: 0;
        left: 0;
        border-radius: 25px;
        z-index: -1;
        animation: 0.5s reverse both slide;
      }

      &.open {
        &::before {
          opacity: 1;
          animation: 0.5s 0.3s both slide;
        }
      }

      @keyframes slide {
        0% {
          opacity: 0;
          transform: translate(0, 0);
        }
        100% {
          opacity: 1;
          transform: translate(-25px, 25px);
        }
      }

      &__content {
        margin-top: 10px;
        text-align: center;
        height: 100%;

        &::v-deep &__list {
          list-style: circle;
          margin: 20px 40px;

          &__element {
            margin: 15px 0;
            text-align: left;
          }
        }
      }

      &__closeIcon {
        position: absolute;
        height: 25px;
        width: 25px;
        top: 20px;
        right: 10px;
        padding: 5px;
        cursor: pointer;

        &::before,
        &::after {
          position: absolute;
          content: '';
          height: 5px;
          width: 25px;
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
    background-image: url(../assets/projectsSrc/github_logo.svg);

    &::after {
      content: 'Source';
    }
  }

  &.link {
    background-image: url(../assets/projectsSrc/webIcon.svg);

    &::after {
      content: 'Link';
    }
  }

  &.skills {
    background-image: url(../assets/projectsSrc/skills.svg);
    margin: 0 25px;

    &::after {
      content: 'Skills';
    }
  }
}

@media screen and (min-width: 1024px) {
  .header {
    font-size: 72px;
  }
}

@media screen and (min-width: 2560px) {
  .projectWrapper {
    margin-top: 10px;
  }
  .header {
    font-size: 100px;
  }
  .projects {
    &__project {
      &__title {
        font-size: 38px;
      }

      &__description {
        font-size: 30px;
      }

      &__skillsWrapper {
        font-size: 20px;
      }
    }
  }
}
</style>
