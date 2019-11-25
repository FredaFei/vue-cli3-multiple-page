const path = require('path')
const glob = require('glob')
const colors = require('colors-console')

// 获取多页面的配置数据
function getPages() {
  const pages = {}
  glob.sync('./src/pages/**/main.js').forEach(function(pageUrl) {
    const pageCode = pageUrl.split('./src/pages/')[1].split('/main.js')[0]
    if (pages[pageCode]) {
      console.error(colors('red', `项目名不能重复使用：${pageCode}。\n`))
      process.exit(1)
    }
    // 配置多页面
    pages[pageCode] = {
      entry: pageUrl, 
      template: './public/index.html', 
      filename: pageCode + '.html'
    }
  })
  return pages
}

module.exports = {
  publicPath: './',
  css: {
    loaderOptions: {
      sass: {
        sassOptions: {
          includePaths: [path.join(__dirname, 'src/assets/styles')]
        }
      }
    }
  },
  pages: getPages()
  // {
  //   pageA: {
  //     entry: 'src/pages/pageA/index.js',
  //     template: 'public/index.html',
  //     filename: 'pageA.html',
  //   },
  //   pageB: {
  //     entry: 'src/pages/pageB/index.js',
  //     template: 'public/index.html',
  //     filename: 'pageB.html',
  //   }
  // }
}
