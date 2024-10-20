// 默认使用 px 作为样式单位，如果需要使用 viewport 单位 (vw, vh, vmin, vmax)，推荐使用 postcss-px-to-viewport 进行转换。

// postcss-px-to-viewport 是一款 PostCSS 插件，用于将 px 单位转化为 vw/vh 单位。

module.exports = {
    plugins: {
      'postcss-px-to-viewport': {
        // 设计稿宽度，默认 375
        viewportWidth: 375,
      },
    },
  };