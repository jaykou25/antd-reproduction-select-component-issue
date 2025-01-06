# Ant Design Select 组件问题复现库

这是一个用于复现和调试 Ant Design Select 组件问题的示例项目。

## 项目目的
- 为 Select 组件问题提供最小复现环境

## 技术栈
- Umi 4
- React 18
- Ant Design 5
- TypeScript
- Jest + React Testing Library

## 快速开始

1. 安装依赖：
```bash
pnpm install
```

2. 启动开发服务器：
```bash
pnpm dev
```

3. 运行测试：
```bash
pnpm test
```

## 测试说明
项目中包含一个自定义的 MySelect 组件及其集成测试。测试文件位于：
```
src/components/my-select/index.test.tsx
```

运行 `pnpm test` 后报错:

```
SyntaxError: ':scope +.ant-select-item-option-selected:not(.ant-select-item-option-disabled))+.ant-select-item-option-selected:not(.ant-select-item-option-disabled' is not a valid selector
```

**注意如果使用 `rc-select` 是没有错误的**


