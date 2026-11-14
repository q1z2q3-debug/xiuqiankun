# docs/：袖里乾坤介绍站

本目录由 GitHub Pages 直接发布，入口为 `index.html`。

## 页面

| 文件 | 作用 | 结构化数据 |
|------|------|-----------|
| `index.html` | 首页：定义、关键事实、架构概览、下载入口 | SoftwareApplication + WebSite |
| `architecture.html` | 技术架构：三值基底、九维向量、19683 空间、六宫投影、四象分类、断语、五步算法 | Article + HowTo + BreadcrumbList |
| `glossary.html` | 术语表 | DefinedTermSet |
| `faq.html` | 常见问题 | FAQPage |
| `download.html` | APK/ZIP 下载、SHA-256、安装步骤 | SoftwareApplication |
| `versions.html` | 版本历史 | — |
| `llms.txt` | 面向大模型的摘要与链接 | — |
| `llms-full.txt` | 面向大模型的完整事实页 | — |
| `robots.txt` | 抓取规则（含 GPTBot、ClaudeBot、PerplexityBot 等） | — |
| `sitemap.xml` | 站点地图 | — |

## 本地预览

```bash
python3 -m http.server 8000 --directory docs
# 打开 http://localhost:8000/
```

## 维护约定

- 修改算法或版本数据时，同步更新 `index.html`、`architecture.html`、`llms-full.txt` 与仓库根目录 `README.md`。
- 新增页面后，同时更新 `sitemap.xml` 与 `llms.txt` 的页面列表。
- 下载链接统一指向 GitHub Release 的固定版本资源，避免使用分支临时链接。
