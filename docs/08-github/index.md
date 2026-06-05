# GitHub 入门

## GitHub 是什么？

GitHub 是全球最大的代码托管平台，你可以把它理解为"程序员的社交网络"：
- **代码仓库** — 存放你的代码项目
- **开源社区** — 全球程序员在这里分享代码
- **版本控制** — 记录代码的每一次修改
- **协作工具** — 多人一起开发项目

### 为什么大学生要学 GitHub？

- **课程作业** — 很多编程课要求用 Git 提交作业
- **开源项目** — 参与开源项目是很好的学习方式
- **找工作** — 你的 GitHub 主页就是你的简历
- **备份代码** — 代码放在 GitHub 上不会丢

---

## Git 和 GitHub 的区别

| Git | GitHub |
|-----|--------|
| 版本控制工具 | 代码托管平台 |
| 本地使用 | 在线服务 |
| 记录代码修改历史 | 存放和分享代码 |
| 命令行工具 | 网站 + 桌面客户端 |

简单说：**Git 是工具，GitHub 是平台**。你用 Git 来管理代码，用 GitHub 来存放代码。

---

## 什么是版本控制？

想象一下你在写论文：
- 你写了一版，保存为"论文_v1.docx"
- 改了一些内容，保存为"论文_v2.docx"
- 又改了一些，保存为"论文_v3_final.docx"
- 再改一些，保存为"论文_v3_final_真的最终版.docx"

这很混乱对吧？Git 就是来解决这个问题的。

### Git 怎么工作？

1. 你修改了代码
2. 你告诉 Git："保存这次修改"（commit）
3. Git 记录下：谁、什么时候、改了什么
4. 你可以随时回退到任何一次修改

---

## 创建第一个仓库

### 注册 GitHub 账号

1. 访问 github.com（需要翻墙或用 [Watt Toolkit](../09-gaming/index.md) 加速）
2. 点击「Sign up」
3. 填写邮箱、密码、用户名
4. 验证邮箱
5. 完成注册

> 💡 用户名要起好，这是你的全球唯一标识。用英文，比如 `zhangsan`、`zhang-san`。

### 创建仓库

1. 登录 GitHub
2. 点击右上角「+」→「New repository」
3. 填写信息：
   - **Repository name**：`my-first-repo`
   - **Description**：`我的第一个 GitHub 仓库`
   - **Public/Private**：选 Public
   - ✅ 勾选「Add a README file」
4. 点击「Create repository」

恭喜！你刚刚创建了第一个仓库 🎉

### 编辑 README

README 是仓库的"说明书"，别人打开你的仓库第一眼看到的就是它。

1. 在仓库页面点击 `README.md` 文件
2. 点击右上角的铅笔图标 ✏️
3. 修改内容
4. 点击「Commit changes」保存

---

## 安装 Git

### Windows 安装

下载：git-scm.com/download/win

下载后一路下一步安装。

### 配置 Git

安装完成后，打开命令行（Git Bash），配置你的信息：

```bash
git config --global user.name "你的名字"
git config --global user.email "你的邮箱"
```

---

## 基本 Git 操作

### 克隆仓库

把 GitHub 上的仓库下载到本地：

```bash
git clone https://github.com/你的用户名/my-first-repo.git
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

### 常用 Git 命令

| 命令 | 功能 |
|------|------|
| `git clone <url>` | 克隆远程仓库 |
| `git status` | 查看文件状态 |
| `git add <file>` | 添加文件到暂存区 |
| `git commit -m "说明"` | 提交修改 |
| `git push` | 推送到远程仓库 |
| `git pull` | 拉取远程更新 |
| `git log` | 查看提交历史 |

### GitHub 桌面客户端

如果觉得命令行太复杂，可以用 GitHub 官方的桌面客户端：

下载：desktop.github.com

GitHub Desktop 提供图形界面，点点鼠标就能完成 Git 操作。

---

## 学习资源

- GitHub 官方文档：docs.github.com
- Git 教程 - 廖雪峰：liaoxuefeng.com/wiki/896043488029600

---

## 新手常见问题

### Q：GitHub 打不开怎么办？
- GitHub 需要翻墙才能访问
- 或者用 [Watt Toolkit](../09-gaming/index.md) 加速
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
