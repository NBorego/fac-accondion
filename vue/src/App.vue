<template>
  <picture>
    <source media="(min-width: 375px)" srcset="./assets/images/background-pattern-desktop.svg" />
    <img src="./assets/images/background-pattern-mobile.svg" alt="Background" />
  </picture>

  <main>
    <h1><img src="./assets/images/icon-star.svg" alt="Star icon" />FAQs</h1>

    <div v-for="(article, index) in articles" :key="index">
      <article-preview :title="articles[index].title" :text="articles[index].text" />
    </div>
  </main>

  <attribution-preview />
</template>

<script lang="ts">
import AttributionPreview from '@/components/AttributionPreview.vue'
import ArticlePreview from '@/components/ArticlePreview.vue'

export default {
  components: { AttributionPreview, ArticlePreview },
  data() {
    return {
      articles: [
        {
          title: `What is Frontend Mentor, and how will it help me?`,
          text: `Frontend Mentor offers realistic coding challenges to help developers improve their frontend
          coding skills with projects in HTML, CSS, and JavaScript. It's suitable for all levels and
          ideal for portfolio building.`
        },
        {
          title: `Is Frontend Mentor free?`,
          text: `Yes, Frontend Mentor offers both free and premium coding challenges, with the free option
          providing access to a range of projects suitable for all skill levels.`
        },
        {
          title: `Can I use Frontend Mentor projects in my portfolio?`,
          text: `Yes, you can use projects completed on Frontend Mentor in your portfolio. It's an excellent
          way to showcase your skills to potential employers!`
        },
        {
          title: `How can I get help if I'm stuck on a challenge?`,
          text: `The best place to get help is inside Frontend Mentor's Discord community. There's a help
          channel where you can ask questions and seek support from other community members.`
        }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
@import './assets/sass/main.scss';

picture {
  position: fixed;
  top: 0;
  left: 0;
  z-index: -1;

  img,
  source {
    min-width: 100vw;
  }
}

main {
  @include display-flex(flex-start, flex-start, column);

  margin: 1rem;

  max-width: 25rem;
  background-color: $white;
  padding: 1.2rem;
  border-radius: 0.7rem;
  color: $dark-purple;
  gap: 1rem;
  box-shadow: 0px 2px 40px rgba(0, 0, 0, 0.2);

  h1 {
    @include display-flex(flex-start, center);
    gap: 1.2rem;

    img {
      width: 1.5rem;
    }
  }

  div {
    width: 100%;
  }

  @media (min-width: $desktop) {
    max-width: 30rem;
    gap: 1.5rem;
    padding: 1.5rem 2rem;

    h1 {
      font-size: 3rem;

      img {
        width: 2rem;
      }
    }
  }
}
</style>
