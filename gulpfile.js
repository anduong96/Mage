/* eslint-disable no-path-concat, eslint-disable-line, import/no-dynamic-require, global-require */
const gulp = require('gulp')
const fs = require('fs')
const isProd = process.env.NODE_ENV === 'production'

fs.readdirSync(__dirname + '/tasks').forEach((task) => require('./tasks/' + task))

gulp.task('build:dev', ['webpack:dev'])

gulp.task('build:prod', ['webpack:prod'])

gulp.task('build', isProd ? ['build:prod'] : ['build:dev'])

gulp.task('dev', ['clean', 'build:dev'], () => gulp.start(['copy', 'dev:server']))

gulp.task('prod', ['clean', 'build:prod'], () => gulp.start(['copy', 'prod:server']))
