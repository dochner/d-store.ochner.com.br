<template>
  <div class="layout layout-background">
    <div class="layout__content">
      <main class="layout__container">
        <div class="layout__full-section-container">
          <slot />
        </div>
      </main>
    </div>
  </div>
</template>

<style lang="scss">
@tailwind components;

@layer components {
  .layout {
    @apply
    w-full
    mx-auto;
    &-background {

    }

    &__container {
      @apply
      py-12
      px-4
      container
      mx-auto
      max-w-screen-xl
      space-y-8
      md:space-y-14;
    }

    &__sidebar {
      @apply md:pr-12 md:pt-20;
    }

    &__content {
      &-sidebar {
        @apply grid lg:grid-cols-[25%_1fr];
      }
    }

    &__full-section {
      @apply
      bg-gray-50
      w-full;

      &-container {
        @apply
        container
        mx-auto
        max-w-screen-xl
        py-10
        px-10
        space-y-8;
      }
    }
  }
}
</style>