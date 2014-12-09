gulp          = require 'gulp'
rename        = require 'gulp-rename'
templateCache = require 'gulp-angular-templatecache'
uglify        = require 'gulp-uglify'
_             = require 'underscore'
webpack       = require 'webpack'
fs            = require 'fs'
Path          = require 'path'

moduleName = 'ari.ui.core'

paths = 
  src: 'src'
  dist: 'dist'
  inFile: 'index.js'
  outFile: 'built.js'
  uiTpls: 'ui-templates.js'
  strapTpls: 'strap-templates.js'
  uiBootstrap: './bower_components/angular-ui-bootstrap/src'
  uiTemplates: './bower_components/angular-ui-bootstrap/template'
  ngStrap: './bower_components/angular-strap/src'

components = 
  'ui.bootstrap.accordion'              : "#{paths.uiBootstrap}/accordion/accordion.js"
  'ui.bootstrap.alert'                  : "#{paths.uiBootstrap}/alert/alert.js"
  'ui.bootstrap.buttons'                : "#{paths.uiBootstrap}/buttons/buttons.js"
  'ui.bootstrap.collapse'               : "#{paths.uiBootstrap}/collapse/collapse.js"
  'ui.bootstrap.dateparser'             : "#{paths.uiBootstrap}/dateparser/dateparser.js"
  'ui.bootstrap.datepicker'             : "#{paths.uiBootstrap}/datepicker/datepicker.js"
  'ui.bootstrap.timepicker'             : "#{paths.uiBootstrap}/timepicker/timepicker.js"
  'ui.bootstrap.dropdown'               : "#{paths.uiBootstrap}/dropdown/dropdown.js"
  'ui.bootstrap.modal'                  : "#{paths.uiBootstrap}/modal/modal.js"
  'ui.bootstrap.progressbar'            : "#{paths.uiBootstrap}/progressbar/progressbar.js"
  'ui.bootstrap.rating'                 : "#{paths.uiBootstrap}/rating/rating.js"
  'ui.bootstrap.tabs'                   : "#{paths.uiBootstrap}/tabs/tabs.js"
  'ui.bootstrap.transition'             : "#{paths.uiBootstrap}/transition/transition.js"
  'ui.bootstrap.position'               : "#{paths.uiBootstrap}/position/position.js"
  'mgcrea.ngStrap.helpers.dimensions'   : "#{paths.ngStrap}/helpers/dimensions.js"
  'mgcrea.ngStrap.popover'              : "#{paths.ngStrap}/popover/popover.js"
  'mgcrea.ngStrap.tooltip'              : "#{paths.ngStrap}/tooltip/tooltip.js"
  'ari.ui.core.ui-bootstrap-templates'  : "./#{paths.src}/#{paths.uiTpls}"
  'ari.ui.core.ng-strap-templates'      : "./#{paths.src}/#{paths.strapTpls}"

uiTpls = [
  "#{paths.uiTemplates}/accordion/*.html"
  "#{paths.uiTemplates}/alert/*.html"
  "#{paths.uiTemplates}/buttons/*.html"
  "#{paths.uiTemplates}/datepicker/*.html"
  "#{paths.uiTemplates}/timepicker/*.html"
  "#{paths.uiTemplates}/dropdown/*.html"
  "#{paths.uiTemplates}/modal/*.html"
  "#{paths.uiTemplates}/progressbar/*.html"
  "#{paths.uiTemplates}/rating/*.html"
  "#{paths.uiTemplates}/tabs/*.html"
]

strapTpls = [
  "#{paths.ngStrap}/popover/*.html"
  "#{paths.ngStrap}/tooltip/*.html"
]

createModule = (name, comps)->
  modules = _(comps).map((p, n)-> "'#{n}'")
  """
  angular.module('#{name}', [
  #{modules.join(',\n')}
  ]);
  """

gulp.task 'uiTpls', ->
  gulp.src uiTpls
    .pipe(templateCache(paths.uiTpls, { 
        module: 'ari.ui.core.ui-bootstrap-templates', 
        standalone: true,
        base: ((p)-> 
          base = Path.dirname(Path.dirname(p.base))
          p.path.slice base.length+1
        ) }))
    .pipe(gulp.dest(paths.src))

gulp.task 'strapTpls', ->
  gulp.src strapTpls
    .pipe(templateCache(paths.strapTpls, { 
      module: 'ari.ui.core.ng-strap-templates', 
      standalone: true,
      base: ((p)-> 
        base = Path.dirname(p.base)
        p.path.slice base.length+1
      ) }))
    .pipe(gulp.dest(paths.src))

gulp.task 'generate', ['templates'], ->
  srcPath = Path.resolve paths.src, paths.inFile
  fs.writeFileSync srcPath, createModule moduleName, components

gulp.task 'pack', ['generate', 'templates'], (done)->

  entries = [ Path.resolve(paths.src, paths.inFile) ]
  entries = entries.concat(_(components).values())

  compiler = webpack
    devtool: '#inline-source-map'
    entry: entries
    output:
      path: Path.resolve(paths.dist)
      filename: paths.outFile
    externals: 
      angular: 'angular'
    plugins: [
      new webpack.ProvidePlugin({
        angular: 'angular'
      })
    ],

  compiler.run (err, stats)->
    if err
      console.log err
    done()

gulp.task 'minify', ['pack'], ->
  gulp.src Path.join paths.dist, paths.outFile
    .pipe uglify()
    .pipe rename({ suffix: '.min' })
    .pipe gulp.dest paths.dist

gulp.task 'templates', ['uiTpls', 'strapTpls']

gulp.task 'build', ['pack', 'minify']
