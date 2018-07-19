<template>
  <div class="container">
    <div class="columns">
      <div class="column is-3">
        <div class="content">
          <h3 class="subtitle">
            Selection
          </h3>
          <h4 class="subtitle">
            Extent
          </h4>
            <div class="field">
              <b-checkbox>Global</b-checkbox>
            </div>
            <div class="field">
              <b-checkbox>Regional</b-checkbox>
            </div>
            <h4 class="subtitle">
              Type
            </h4>
            <div class="field">
              <b-checkbox>Waveforms</b-checkbox>
            </div>
            <div class="field">
              <b-checkbox>Static Displacements</b-checkbox>
            </div>
        </div>
      </div>

      <div
        class="column is-9"
        v-if="data">
        <div
          v-for="store in data.stores"
          v-bind:key="store.id">
            <store-item v-bind:store="store">
            </store-item>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import StoreItem from './StoreItem'
import axios from 'axios'

export default {
  name: 'StoreList',
  components: {
    StoreItem
  },

  data () {
    return {
      data: undefined
    }
  },
  mounted () {
    axios
      .get('http://localhost:8085/gfws/static/api/')
      .then(response => {
        this.data = response.data
      })
      .catch(error => {
        console.log(error)
      })
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
