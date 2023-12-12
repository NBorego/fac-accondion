<template>
  <section>
    <h1 @click="showText">
      {{ title }}
      <img v-if="!show" src="../assets/images/icon-plus.svg" alt="Icon" id="icon-2" />
      <img v-else src="../assets/images/icon-minus.svg" alt="Icon" id="icon-2" />
    </h1>

    <p v-if="show">
      {{ text }}
    </p>
  </section>
</template>

<script lang="ts">
export default {
  props: {
    title: String,
    text: String
  },
  data() {
    return {
      show: false as boolean
    }
  },
  methods: {
    showText() {
      this.show = !this.show
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../assets/sass/main.scss';

section {
  @include display-flex(flex-start, flex-start, column);
  gap: 1.2rem;
  padding-bottom: 1.2rem;
  width: 100%;

  h1 {
    @include display-flex(space-between, center);
    width: 100%;

    font-size: 0.9rem;
    color: $dark-purple;
    cursor: pointer;

    &:hover {
      color: $grayish-purple;
    }

    img {
      width: 1.6rem;
    }
  }

  p {
    font-size: 0.8rem;
    color: $grayish-purple;
    line-height: 1.2rem;
  }

  &:not(:last-child) {
    border-bottom: 1px solid $light-pink;
  }

  @media (min-width: $desktop) {
    section {
      h1 {
        font-size: 1rem;
      }
    }
  }
}
</style>
