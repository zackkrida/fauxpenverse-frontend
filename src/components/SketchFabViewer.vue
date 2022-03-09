<template>
  <iframe
    id="sketchfab-iframe"
    ref="sketchfabIframe"
    src=""
    sandbox="allow-scripts allow-same-origin allow-popups allow-forms"
    title="Sketchfab iframe"
    allow="autoplay; fullscreen; vr"
    :autoplay="true"
    class="aspect-video"
  />
</template>

<script>
import loadScript from '~/utils/load-script'
import { log } from '~/utils/console'

const sketchfabUrl =
  'https://static.sketchfab.com/api/sketchfab-viewer-1.10.1.js'

export default {
  props: {
    uid: {
      type: String,
      required: true,
    },
  },
  data() {
    return {
      client: null,
      clientConfig: {
        success: (api) => {
          api.addEventListener('viewerready', () => {
            this.loading = false
            log('LOADED!')
          })
        },
        error: () => {
          log('Viewer error')
        },
      },
      loading: true,
    }
  },
  mounted() {
    this.initSketchfab()
      .then(this.initViewer)
      .catch((error) => {
        console.error(error)
        this.$emit('failure')
      })
  },
  methods: {
    /**
     * Load the SketchFab script and initialize a client
     */
    initSketchfab() {
      return loadScript(sketchfabUrl).then(() => {
        this.client = new window.Sketchfab(this.$refs.sketchfabIframe)
      })
    },
    initViewer() {
      if (!this.client) return
      this.client.init(this.uid, this.clientConfig)
    },
  },
}
</script>
