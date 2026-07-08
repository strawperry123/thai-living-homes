# 不用 Lovable Pro 發布網站：Cloudflare Pages 方案

這份文件是給 KHANTHAROS PROPERTY 網站使用的最簡單發布方式。

目標：

- 不使用 Lovable 的自訂網域付費功能
- 使用 GitHub 原始碼發布網站
- 使用 Cloudflare Pages 免費部署
- 將 Namecheap 購買的 `khantharos-property.com` 指向正式網站

## 目前推薦架構

```text
GitHub repo
  ↓ 自動部署
Cloudflare Pages
  ↓ 自訂網域
khantharos-property.com
```

Cloudflare Pages 適合這個專案，因為目前專案是 Lovable / TanStack / Vite 架構，並且已有 Cloudflare build 方向。

## 你需要準備

1. GitHub 帳號，可以看到 `strawperry123/thai-living-homes`
2. Cloudflare 帳號
3. Namecheap 帳號，可以管理 `khantharos-property.com`

## Step 1：進入 Cloudflare Pages

1. 打開 Cloudflare Dashboard
2. 左邊選 `Workers & Pages`
3. 選 `Create application`
4. 選 `Pages`
5. 選 `Connect to Git`

## Step 2：連接 GitHub repo

選擇：

```text
strawperry123/thai-living-homes
```

如果 Cloudflare 看不到這個 repo，代表 Cloudflare 尚未取得 GitHub private repo 權限。請在 GitHub 授權畫面選擇允許 Cloudflare 讀取這個 repo。

## Step 3：Build 設定

Cloudflare Pages 建立專案時，請填：

```text
Project name:
khantharos-property

Production branch:
main

Build command:
npm run build

Build output directory:
.output/public
```

Node.js 版本如果 Cloudflare 要你填，請填：

```text
22
```

## Step 4：環境變數

在 Cloudflare Pages 專案設定裡找到：

```text
Settings → Environment variables
```

新增：

```text
VITE_GOOGLE_SHEET_WEBHOOK_URL
```

值貼上你的 Apps Script Web App URL：

```text
https://script.google.com/macros/s/AKfycbxcTUavcnEtfCxX06By03cZzxLVesCP7kMjybcznUTQe_QTqOsTnup8AG8zqnCQAYDS1g/exec
```

Production 和 Preview 都可以填同一個。

## Step 5：第一次部署

按 `Save and Deploy`。

成功後 Cloudflare 會給你一個網址，類似：

```text
https://khantharos-property.pages.dev
```

先打開這個網址，確認網站可以正常顯示。

## Step 6：連接自訂網域

在 Cloudflare Pages 專案裡：

```text
Custom domains → Set up a custom domain
```

先加入：

```text
khantharos-property.com
```

再加入：

```text
www.khantharos-property.com
```

Cloudflare 會提示 DNS / nameserver 設定。

## Step 7：Namecheap 網域設定

最穩定方式是把 Namecheap 的 nameserver 改成 Cloudflare 給你的 nameserver。

在 Namecheap：

```text
Domain List → Manage → Nameservers
```

選：

```text
Custom DNS
```

填入 Cloudflare 給你的兩組 nameserver。

範例格式：

```text
xxxx.ns.cloudflare.com
yyyy.ns.cloudflare.com
```

實際 nameserver 要以 Cloudflare 畫面顯示為準，不要照抄範例。

## Step 8：等待生效

DNS 通常幾分鐘到幾小時會生效，最久可能 24 小時。

SSL 憑證也需要一點時間自動建立。

## 完成後確認

請測試：

```text
https://khantharos-property.com
https://www.khantharos-property.com
```

兩個都應該能打開網站。

## 之後怎麼更新網站

以後只要 GitHub 的 `main` 分支有新 commit，Cloudflare Pages 會自動重新部署。

也就是：

```text
Codex 修改網站 → GitHub 更新 → Cloudflare 自動發布
```

不用再按 Lovable Publish。
