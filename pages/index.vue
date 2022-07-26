<template>
  <div>

    <pre>

      {{ $config }}

    </pre>
    <br>
    <br>
    <VTooltip>
      <a>Sponsor me</a>

      <template #popper>
        elp me fund my Open Source work!
      </template>
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


  asyncData({ $config }) {
    console.log($config);
  },

  created() {
    console.log(this.$config.youtube_api_key);
    
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
