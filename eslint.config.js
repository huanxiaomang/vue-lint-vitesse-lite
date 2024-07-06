import antfu from '@antfu/eslint-config'

const OFF = 0;
// const WARN = 1;
const ERROR = 2;

export default antfu(
  {
    unocss: true,
    formatters: true,

  },
  {
    rules: {
      'semi': [1, 'always'],
      'no-console': 'off',
      		// 对象的最后一个可以增加【,】
      '@typescript-eslint/comma-dangle': OFF,

      // 不允许使用var
      'no-var': ERROR,
      // 函数不需要ts标注返回类型
      '@typescript-eslint/explicit-function-return-type': OFF,
      'no-tabs': OFF,
      '@typescript-eslint/indent': OFF,

    },
  },
)
