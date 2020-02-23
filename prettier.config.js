module.exports = {
    overrides: [
        {
            files: ['*.ts', '*.tsx', '*.js', '*.vue', '*.json', '*.html', '*.yml', '*.xml', '*.less'],
            options: {
                printWidth: 120, //将确保你的单行代码不会超过 120 个字符。
                singleQuote: true, //会将所有双引号转换为单引号
                trailingComma: 'none', //将确保在最后一个对象属性的末尾会有一个逗号
                bracketSpacing: true, //在对象字面量之间打印空格
                jsxBracketSameLine: true, //将在多行 JSX 元素的最后一行放置>
                tabWidth: 4, //指定单个缩进的空格数
                semi: true, // 将在语句末尾加上
                useTabs: false // 使用tab
            }
        }
    ]
};
