import yargs from 'yargs'
import pm from '.'

/*
 * This file is for CLI usage.
 * There isn't too much logic about package manager here.
 * For details please consult the documentation of `yargs` module.
 */

// 使用yargs库创建一个命令行工具
yargs
  // 设置命令行工具的使用说明
  .usage('tiny-pm <command> [args]')
  .version()
  .alias('v', 'version')
  .help()
  .alias('h', 'help')
  // 定义一个名为install的命令，描述为Install the dependencies.
  .command(
    'install',
    'Install the dependencies.',
    (argv) => {
      // 定义一个名为production的选项，类型为boolean，描述为Install production dependencies only.
      argv.option('production', {
        type: 'boolean',
        description: 'Install production dependencies only.',
      })

      // 定义一个名为save-dev的选项，类型为boolean
      argv.boolean('save-dev')
      argv.boolean('dev')
      argv.alias('D', 'dev')

      return argv
    },
    pm
  )
  // 定义一个命令，命令名为*，描述为Install the dependencies.
  .command(
    '*',
    'Install the dependencies.',
    // 定义命令的参数
    (argv) =>
      argv.option('production', {
        type: 'boolean',
        description: 'Install production dependencies only.',
      }),
    pm
  )
  // 解析字符串
  .parse()
