const generateMutation = (modules, type) => {
  return (state, payload) => {
    state[modules][type] = payload[type]
  }
}

export const currentTab = generateMutation('current', 'tab')
export const currentFakeDom = generateMutation('current', 'fakeDom')
