# PaperCheck

ابزار بررسی منابع IEEE و چکیدهٔ دوزبانه. اجرا در مرورگر، میزبانی روی GitHub Pages.

## راه‌اندازی
1. همهٔ فایل‌ها (با پوشهٔ `.github`) را در ریپوی عمومی بگذار و روی شاخهٔ `main` پوش کن.
2. Settings → Pages → Source = **GitHub Actions**.
3. Settings → Actions → General → Workflow permissions = **Read and write**.
4. در `config.json` فقط در صورت نیاز قیمت و مدت را عوض کن (آدرس ریپو خودکار تشخیص داده می‌شود).

## تأیید کاربران
- آزمایشی: ایشوی `[TRIAL]` را باز کن و برچسب `approve` بزن.
- دستی: Actions → site → Run workflow، هش کلید و تعداد روز را بده.
- پرداخت: خودکار، هر حدود نیم ساعت.

## پنل مدیریت
آدرس: `/admin.html` روی سایت. فقط‌خواندنی: سلامت Actions، کلیدها، ایشوهای باز و پرداخت‌های اخیر.
