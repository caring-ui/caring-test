/*
 * @Author: Wanko
 * @Date: 2024-05-29 15:26:22
 * @LastEditors: Wanko
 * @LastEditTime: 2024-05-29 15:26:33
 * @Description: 
 */
import terser from '@rollup/plugin-terser'

export default {
  input: 'index.js',
  output: [
    {
      file: 'dist/index.js'
    }
  ],
  plugins: [terser()]
}
