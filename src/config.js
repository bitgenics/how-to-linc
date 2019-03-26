const lookupEnvVar = name => {
  if (typeof window.FAB_SETTINGS === 'object') {
    return window.FAB_SETTINGS[name]
  }
}

export default {
  BG_COLOR: lookupEnvVar('BG_COLOR') || 'darkmagenta',
}
