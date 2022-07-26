<template>
  <div>


    <VTooltip>
      <a>Sponsor me</a>
    </VTooltip>

    <pre>
      {{ $store.state.user }}
    </pre>

    <pre>
      {{ user }}
    </pre>
  </div>
</template>

<script>
import { mapState } from 'vuex';

export default {
  name: 'IndexPage',

  data() {
    return {

    }
  },

  created() {
    console.log(this.$name('João Paulo'));
  },

  mounted() {
    console.log(this.$dayjs().format())
  },

  computed: {
    ...mapState({
      user: state => state.user
    })
  }
}
</script>
