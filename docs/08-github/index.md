# GitHub 入门

## GitHub 是什么？

全球最大代码托管平台，程序员的社交网络。

**用途**：存放代码、参与开源项目、找工作展示、备份代码

---

## 注册账号

1. 访问 [github.com](https://github.com)（需翻墙或 [Watt Toolkit](../09-gaming/index.md) 加速）
2. 点击 Sign up → 填写邮箱、密码、用户名
3. 验证邮箱

> 💡 用户名要起好，以后不好改

---

## 创建仓库

1. 登录 → 右上角 + → New repository
2. 填写名称（如 `my-first-repo`）
3. 勾选 Add a README file
4. 点击 Create repository

---

## 安装 Git

下载：[git-scm.com/download/win](https://git-scm.com/download/win)

配置：
```bash
git config --global user.name "你的名字"
git config --global user.email "你的邮箱"
```

---

## 基本操作

### 克隆仓库
```bash
git clone https://github.com/用户名/仓库名.git
```

### 提交修改
```bash
git add .
git commit -m "说明"
git push
```

### 常用命令

| 命令 | 功能 |
|------|------|
| `git clone <url>` | 克隆仓库 |
| `git status` | 查看状态 |
| `git add .` | 添加所有修改 |
| `git commit -m "说明"` | 提交 |
| `git push` | 推送 |
| `git pull` | 拉取更新 |

---

## 桌面客户端

不想用命令行？下载 [GitHub Desktop](https://desktop.github.com)

---

## 学习资源

- [GitHub 官方文档](https://docs.github.com)
- [Git 教程 - 廖雪峰](https://www.liaoxuefeng.com/wiki/896043488029600)

---

## 常见问题

| 问题 | 解决方法 |
|------|---------|
| GitHub 打不开 | 用 [Watt Toolkit](../09-gaming/index.md) 加速或翻墙 |
| git push 报错 | 检查登录状态和网络连接 |
| 密码提交到 GitHub | 立即改密码，删除仓库重建 |
