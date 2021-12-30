import { onMounted, ref } from '@nuxtjs/composition-api'
import local from '~/utils/local'
import { isMinScreen } from '@/composables/use-media-query'

/** @type {import('@nuxtjs/composition-api').Ref<boolean>} */
const isVisible = ref(false)
const isMdScreen = isMinScreen('md')

/**
 * This composable keeps track of whether the filters (sidebar or modal) should be visible.
 * @param {import('@nuxtjs/composition-api').Ref<boolean>} [mediaQuery] - the minimum media query at which
 * the filters are shown as sidebar instead of the full-page modal.
 * @default isMinScreen('md')
 * @returns {{isVisible: import('@nuxtjs/composition-api').Ref<boolean>, setVisibility: (val: boolean) => void}}
 */
export function useFilterSidebarVisibility({ mediaQuery = isMdScreen } = {}) {
  /**
   * Open or close the filter sidebar
   * @param {boolean} val
   */
  const setVisibility = (val) => {
    isVisible.value = val
    local.set(process.env.filterStorageKey, val)
  }

  onMounted(() => {
    const localFilterState = () =>
      local.get(process.env.filterStorageKey) === 'true'
    setVisibility(mediaQuery.value && localFilterState())
  })

  return {
    isVisible,
    setVisibility,
  }
}