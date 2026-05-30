# 创建第一个仓库

## 注册 GitHub 账号

### 1. 访问 GitHub

👉 [https://github.com](https://github.com)

::: tip 注意
GitHub 需要翻墙访问。如果你还没配置翻墙，可以先用 [Watt Toolkit](/09-gaming/watt-toolkit.md) 加速 GitHub。
:::

### 2. 注册账号

1. 点击「Sign up」
2. 填写邮箱、密码、用户名
3. 验证邮箱
4. 完成注册

::: tip 用户名建议
- **想好再填** — 这是你的全球唯一标识
- **用英文** — 比如 `zhangsan`、`zhang-san`
- **专业一点** — 这可能会被未来雇主看到
:::

## 创建第一个仓库（Repository）

### 什么是仓库？

仓库就是你的项目文件夹，里面存放代码、文档等所有文件。

### 创建步骤

1. 登录 GitHub
2. 点击右上角「+」→「New repository」
3. 填写信息：
   - **Repository name**：`my-first-repo`（仓库名，用英文）
   - **Description**：`我的第一个 GitHub 仓库`（可选）
   - **Public/Private**：选 Public（公开）
   - ✅ 勾选「Add a README file」
4. 点击「Create repository」

恭喜！你刚刚创建了第一个仓库 🎉

## 编辑 README

README 是仓库的"说明书"，别人打开你的仓库第一眼看到的就是它。

### 编辑步骤

1. 在仓库页面点击 `README.md` 文件
2. 点击右上角的铅笔图标 ✏️
3. 修改内容，比如：

```markdown
# 我的第一个仓库

这是我学习 GitHub 的第一个项目！

## 关于我

- 名字：张三
- 学校：XX大学
- 专业：计算机科学

## 我正在学习

- Python
- Git
- GitHub
```

4. 点击「Commit changes」保存

## 安装 Git

要在本地使用 Git，需要先安装它。

### Windows 安装

👉 下载：[https://git-scm.com/download/win](https://git-scm.com/download/win)

下载后一路下一步安装。

### 配置 Git

安装完成后，打开命令行（Git Bash），配置你的信息：

```bash
git config --global user.name "你的名字"
git config --global user.email "你的邮箱"
```

## 基本 Git 操作

### 克隆仓库

把 GitHub 上的仓库下载到本地：

```bash
git clone https://github.com/你的用户名/my-first-repo.git
```

### 修改文件

进入仓库文件夹，修改 `README.md`：

```bash
cd my-first-repo
# 用你喜欢的编辑器打开 README.md 进行修改
```

### 提交修改

```bash
# 1. 查看修改了哪些文件
git status

# 2. 添加修改的文件
git add README.md

# 3. 提交修改，附上说明
git commit -m "更新了 README"

# 4. 推送到 GitHub
git push origin main
```

### 完整流程

```
修改文件 → git add → git commit → git push
```

## 常用 Git 命令

| 命令 | 功能 |
|------|------|
| `git clone <url>` | 克隆远程仓库 |
| `git status` | 查看文件状态 |
| `git add <file>` | 添加文件到暂存区 |
| `git add .` | 添加所有修改 |
| `git commit -m "说明"` | 提交修改 |
| `git push` | 推送到远程仓库 |
| `git pull` | 拉取远程更新 |
| `git log` | 查看提交历史 |

## GitHub 桌面客户端

如果觉得命令行太复杂，可以用 GitHub 官方的桌面客户端：

👉 下载：[https://desktop.github.com](https://desktop.github.com)

GitHub Desktop 提供图形界面，点点鼠标就能完成 Git 操作。

## 进阶学习

掌握了基础之后，可以继续学习：

- **分支（Branch）** — 多人协作时使用
- **Pull Request** — 提交代码修改给别人的项目
- **Issues** — 报告 bug、讨论功能
- **GitHub Actions** — 自动化工作流
- **GitHub Pages** — 免费托管静态网站

## 学习资源

- [GitHub 官方文档](https://docs.github.com)
- [Git 教程 - 廖雪峰](https://www.liaoxuefeng.com/wiki/896043488029600)
- [GitHub 漫游指南](https://github.phodal.com)

## 新手常见问题

### Q：GitHub 打不开怎么办？
- GitHub 需要翻墙才能访问
- 或者用 [Watt Toolkit](/09-gaming/watt-toolkit.md) 加速
- 也可以用国内镜像站（搜"GitHub 镜像"）

### Q：git push 报错怎么办？
- 检查是否登录了 GitHub 账号
- 检查是否有权限推送到这个仓库
- 检查网络连接是否正常

### Q：不小心把密码提交到 GitHub 了怎么办？
- 立即修改密码
- 用 `git reset` 回退提交
- 在 GitHub 上删除这个仓库重新创建

### Q：GitHub 和 GitLab 有什么区别？
- 都是代码托管平台
- GitHub 更流行，开源项目更多
- GitLab 有免费的私有仓库
- 建议先用 GitHub

---

GitHub 入门就到这里。接下来进入轻松的部分：[游戏平台](/09-gaming/index.md) 👉
