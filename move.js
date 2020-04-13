import { copy } from 'https://deno.land/std/fs/copy.ts'
import { emptyDirSync } from 'https://deno.land/std/fs/empty_dir.ts'

// 创建空文件夹
emptyDirSync('./vue-ele-form-generator')

// 拷贝文件
copy('./node_modules/vue-ele-form-generator/dist', './vue-ele-form-generator', { overwrite: true })
