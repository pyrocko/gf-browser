<template>
    <div class="card">
      <header class="card-header">
        <p class="card-header-title">
          Name: {{ store.id }}
        </p>
      </header>
    </div>
</template>

<script>
export default {
  name: 'store-item',
  props: ['store'],
  filter: {
    human_data_size: function (value) {
      return value
    }
  }
}
</script>

<style>
</style>
