MOHAMED TREKA ENGLISH ACADEMY — Cloudflare Pages + D1

1) أنشئ قاعدة بيانات D1 من Cloudflare Dashboard > Workers & Pages > D1.
2) نفذ ملف schema.sql على قاعدة البيانات (من لوحة D1 > Console أو باستخدام wrangler d1 execute).
3) أنشئ مشروع Cloudflare Pages جديد وارفع ملفات هذا المشروع باستخدام Git integration أو Wrangler CLI.
   هام: الرفع المباشر للملف المضغوط من لوحة Pages قد لا ينشر Functions. استخدم Git integration أو Wrangler Pages deploy مع مجلد المشروع.
4) من Settings > Bindings أضف D1 binding باسم DB إلى قاعدة البيانات المنشأة، ثم أعد النشر.
5) اختبر إنشاء حساب جديد، تسجيل الخروج، وتسجيل الدخول على عنوان HTTPS النهائي.

نظام التسجيل: اسم + هاتف مصري + صف + كلمة سر (10 أحرف على الأقل). التفعيل تلقائي. كلمات السر مشتقة PBKDF2-SHA256 مع salt فريد. الجلسات عبر HttpOnly Secure cookies.

مهم قبل الإطلاق العام: إضافة حماية من المحاولات المتكررة (rate limiting / Turnstile)، تأكيد ملكية الهاتف عبر OTP، آلية آمنة لاستعادة كلمة السر، سياسة خصوصية، وإدارة حذف الحسابات.
لا توجد بعد لوحة تحكم فعلية للمدرس أو قاعدة بيانات للدروس والامتحانات؛ محتوى الدروس والاختبار الحالي تجريبي.
