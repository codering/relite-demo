// 加载fis3-cooker
fis.require('cooker')(fis)

fis.match('/node_modules/**.js', {
  packTo: '/static/pkg/vendor.js'
})
