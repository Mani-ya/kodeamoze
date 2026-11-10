// ============================================================
// کدآموز — app.js — نسخه 3.0.0
// ساخته شده توسط mani++ | دستیار AI تقویت‌شده
// ============================================================

function escapeHtml(str) {
    return String(str).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
}
function timeAgo(t) {
    const d = Date.now() - t;
    const m = Math.floor(d / 60000);
    if (m < 1) return 'همین حالا';
    if (m < 60) return m + ' دقیقه پیش';
    const h = Math.floor(m / 60);
    if (h < 24) return h + ' ساعت پیش';
    const day = Math.floor(h / 24);
    if (day < 30) return day + ' روز پیش';
    return new Date(t).toLocaleDateString('fa-IR');
}

// ============================================================
// داده‌ی درس‌ها و مقالات
// ============================================================
const LESSONS = {
    'article-01': {
        title: 'HTML و CSS چیست؟', level: 'مقاله', duration: '۶ دقیقه', isArticle: true,
        sections: [
            { type: 'intro', text: 'قبل از نوشتن هر خط کد، باید بدانید این دو زبان چه هستند و چرا پایه‌ی کل وب روی آن‌ها بنا شده است.' },
            { type: 'heading', num: '01', text: 'وب چطور کار می‌کند؟' },
            { type: 'paragraph', text: 'هر بار یک صفحه‌ی وب باز می‌کنید، مرورگر شما درخواستی به سروری در نقطه‌ای دیگر از جهان می‌فرستد. سرور مجموعه‌ای از فایل‌ها را برمی‌گرداند. مرورگر آن‌ها را می‌خواند و به تصویری که می‌بینید تبدیل می‌کند. آن فایل‌ها معمولاً سه نوع‌اند: <strong>HTML</strong> (ساختار)، <strong>CSS</strong> (ظاهر)، <strong>JavaScript</strong> (رفتار).' },
            { type: 'callout', title: 'استعاره‌ی ساده', text: 'وب‌سایت را مثل یک خانه تصور کنید: HTML اسکلت و دیوارهاست، CSS رنگ و دکوراسیون است، JavaScript برق و لوله‌کشی است.' },
            { type: 'heading', num: '02', text: 'HTML چیست؟ زبان تگی!' },
            { type: 'paragraph', text: 'HTML یک <strong>زبان تگی</strong> (Markup Language) است — نه زبان برنامه‌نویسی. یعنی دستورات اجرا نمی‌شوند؛ فقط «برچسب» می‌زنند. هر تگ به مرورگر می‌گوید: «این بخش چه نقشی دارد». تگ‌ها با علامت‌های <strong>&lt;</strong> و <strong>&gt;</strong> احاطه می‌شوند.' },
            { type: 'code', code: '<h1>سلام، دنیا</h1>\n<p>این یک پاراگراف است.</p>', lang: 'HTML', caption: 'اولین نمونه‌ی واقعی HTML', explain: [
                '<code>&lt;h1&gt;</code> تگ باز — شروع عنوان بزرگ',
                '<code>سلام، دنیا</code> محتوا — چیزی که کاربر می‌بیند',
                '<code>&lt;/h1&gt;</code> تگ بسته — پایان عنوان (با اسلش)',
                '<code>&lt;p&gt;...&lt;/p&gt;</code> پاراگراف متن'
            ]},
            { type: 'heading', num: '03', text: 'CSS چیست؟ زبان ظاهر' },
            { type: 'paragraph', text: 'CSS مخفف Cascading Style Sheets است. کارش این است که به مرورگر بگوید هر عنصر HTML <strong>چه شکلی</strong> داشته باشد: چه رنگی، چه اندازه‌ای، کجای صفحه قرار بگیرد.' },
            { type: 'code', code: '<style>\n  h1 {\n    color: #f4b942;\n    font-size: 32px;\n  }\n  p {\n    color: #555;\n    line-height: 1.8;\n  }\n</style>', lang: 'CSS', caption: 'استایل پایه', explain: [
                '<code>h1</code> انتخابگر — «همه‌ی تگ‌های h1»',
                '<code>color: #f4b942</code> رنگ متن طلایی',
                '<code>font-size: 32px</code> اندازه‌ی فونت',
                '<code>line-height: 1.8</code> فاصله‌ی خطوط'
            ]},
            { type: 'heading', num: '04', text: 'چرا این دو زبان؟' },
            { type: 'list', items: [
                '<strong>پایه‌ی هر چیز دیگرند:</strong> React، Vue، Bootstrap — همه در نهایت به HTML و CSS تبدیل می‌شوند.',
                '<strong>سریع نتیجه می‌دهند:</strong> در ۱ ساعت اولین صفحه‌ی خودتان را می‌سازید.',
                '<strong>درآمد دارند:</strong> یک فریلنسر با HTML و CSS می‌تواند لندینگ پیج بسازد.'
            ]},
            { type: 'quiz', id: 'q-a1-1', question: 'به نظر شما چرا HTML را «زبان تگی» می‌نامند؟', answer: 'چون دستوراتش اجرا نمی‌شوند، بلکه با تگ‌های <code>&lt;...&gt;</code> به مرورگر می‌گویند هر بخش چه نقشی دارد. مثل برچسب‌زدن روی جعبه‌ها: «این عنوان است»، «این پاراگراف است». مرورگر بر اساس این برچسب‌ها، شکل ظاهری را تعیین می‌کند.' },
            { type: 'exercise', title: 'قدم بعدی', text: 'به مقاله‌ی بعدی بروید تا ابزارهای لازم برای شروع را ببینید.' }
        ]
    },

    'article-02': {
        title: 'چه چیزهایی برای برنامه‌نویسی لازم است؟', level: 'مقاله', duration: '۵ دقیقه', isArticle: true,
        sections: [
            { type: 'intro', text: 'پیش از شروع، باید بدانید چه ابزارهایی نیاز دارید و چه ذهنیتی داشته باشید.' },
            { type: 'heading', num: '01', text: 'سخت‌افزار' },
            { type: 'paragraph', text: 'برای HTML و CSS به هیچ سخت‌افزار خاصی نیاز ندارید. هر لپ‌تاپ ساخت ۱۰ سال اخیر کافی است. حداقل پیشنهاد: ۸ گیگ رم و SSD.' },
            { type: 'heading', num: '02', text: 'اینترنت' },
            { type: 'paragraph', text: 'نیازی به اینترنت پرسرعت نیست. برای دانلود ابزارها و جستجوی گاه‌به‌گاه، اینترنت معمولی کافی است.' },
            { type: 'heading', num: '03', text: 'نرم‌افزارهای لازم' },
            { type: 'list', items: [
                '<strong>مرورگر Chrome:</strong> بهترین DevTools را دارد. رایگان.',
                '<strong>ادیتور VS Code:</strong> استاندارد صنعت. رایگان. مقاله‌ی بعدی نصبش را توضیح می‌دهد.'
            ]},
            { type: 'heading', num: '04', text: 'ذهنیت مهم‌تر از ابزارها' },
            { type: 'list', items: [
                '<strong>صبر:</strong> بار اول هیچ‌چیز کار نمی‌کند. طبیعی است.',
                '<strong>کنجکاوی:</strong> قبل از پرسیدن، خودتان دلیل را پیدا کنید.',
                '<strong>تمرین روزانه:</strong> ۳۰ دقیقه‌ی منظم بهتر از ۵ ساعت پراکنده است.',
                '<strong>پذیرش اشتباه:</strong> هر خطا یک درس است.'
            ]},
            { type: 'quiz', id: 'q-a2-1', question: 'اگر پول لپ‌تاپ گران‌قیمت را ندارید، آیا می‌توانید برنامه‌نویسی یاد بگیرید؟', answer: 'بله! برای HTML و CSS حتی یک لپ‌تاپ دست‌دوم ۵ ساله با ۴ گیگ رم کافی است. برنامه‌نویسی منابع سنگین (مثل بازی‌سازی) نمی‌خواهد. حتی می‌توانید با VS Code آنلاین (vscode.dev) شروع کنید.' }
        ]
    },

    'article-03': {
        title: 'نصب VS Code و افزونه‌های ضروری', level: 'مقاله', duration: '۸ دقیقه', isArticle: true,
        sections: [
            { type: 'intro', text: 'در این مقاله، گام‌به‌گام VS Code را نصب می‌کنیم و افزونه‌های ضروری برای HTML و CSS را می‌شناسیم.' },
            { type: 'heading', num: '01', text: 'VS Code چیست؟' },
            { type: 'paragraph', text: 'VS Code یک ادیتور کد رایگان از مایکروسافت است. استاندارد صنعت برنامه‌نویسی — از مبتدی تا گوگل از آن استفاده می‌کنند. سه ویژگی: رایگان، سبک، قابل توسعه با افزونه.' },
            { type: 'heading', num: '02', text: 'نصب — گام‌به‌گام' },
            { type: 'list', items: [
                '<strong>قدم ۱:</strong> به <code>code.visualstudio.com</code> بروید.',
                '<strong>قدم ۲:</strong> دکمه‌ی آبی «Download» را کلیک کنید.',
                '<strong>قدم ۳:</strong> فایل نصب را باز کنید (Windows: .exe — Mac: .zip — Linux: .deb).',
                '<strong>قدم ۴:</strong> «Next» بزنید تا نصب تمام شود.',
                '<strong>قدم ۵:</strong> VS Code را باز کنید.'
            ]},
            { type: 'heading', num: '03', text: 'اولین کار' },
            { type: 'paragraph', text: 'File → Open Folder را بزنید و یک پوشه‌ی خالی برای پروژه انتخاب کنید. سپس یک فایل <code>index.html</code> بسازید.' },
            { type: 'heading', num: '04', text: '۶ افزونه‌ی ضروری' },
            { type: 'paragraph', text: 'از منوی Extensions (Ctrl+Shift+X)، این ۶ افزونه را نصب کنید:' },
            { type: 'list', items: [
                '<strong>Live Server:</strong> صفحه را با هر تغییر زنده رفرش می‌کند. مهم‌ترین افزونه.',
                '<strong>Prettier:</strong> کد را خودکار مرتب می‌کند.',
                '<strong>HTML CSS Support:</strong> اتکامپلیت کلاس‌های CSS داخل HTML.',
                '<strong>Auto Rename Tag:</strong> تگ بسته را همراه تگ باز تغییر می‌دهد.',
                '<strong>Indent Rainbow:</strong> تورفتگی‌ها را رنگ‌بندی می‌کند.',
                '<strong>Path Intellisense:</strong> مسیر فایل‌ها را خودکار کامل می‌کند.'
            ]},
            { type: 'callout', title: 'چطور نصب کنیم؟', text: 'روی نام افزونه کلیک کنید، دکمه‌ی سبز «Install» را بزنید، ۲-۳ ثانیه صبر کنید.' },
            { type: 'heading', num: '05', text: 'استفاده از Live Server' },
            { type: 'list', items: [
                'فایل <code>index.html</code> بسازید و ذخیره کنید.',
                'روی فایل کلیک راست → «Open with Live Server».',
                'مرورگر باز می‌شود و صفحه را نشان می‌دهد.',
                'هر تغییر را ذخیره کنید (Ctrl+S) → مرورگر خودکار رفرش می‌شود.'
            ]},
            { type: 'heading', num: '06', text: 'میانبرهای مفید' },
            { type: 'list', items: [
                '<strong>Ctrl+S:</strong> ذخیره',
                '<strong>Ctrl+Z:</strong> برگشت',
                '<strong>Ctrl+D:</strong> انتخاب کلمه‌ی بعدی مشابه',
                '<strong>Ctrl+F:</strong> جستجو',
                '<strong>Alt+Up/Down:</strong> جابه‌جایی خط',
                '<strong>Ctrl+Shift+P:</strong> Command Palette'
            ]},
            { type: 'heading', num: '07', text: 'پوشه‌بندی صحیح' },
            { type: 'code', code: 'my-project/\n├── index.html\n├── styles.css\n├── script.js\n└── images/\n    └── logo.png', lang: 'Folder', caption: 'ساختار استاندارد پروژه' },
            { type: 'quiz', id: 'q-a3-1', question: 'چرا افزونه‌ی Live Server مفید است؟', answer: 'چون هر تغییری که ذخیره می‌کنید، بدون نیاز به رفرش دستی، بلافاصله در مرورگر دیده می‌شود. این چرخه‌ی سریع «تغییر → دیدن نتیجه» یادگیری را چند برابر سریع‌تر می‌کند.' },
            { type: 'exercise', title: 'شروع کنید', text: 'همین حالا VS Code را نصب کنید و افزونه‌های بالا را اضافه کنید. سپس به درس اول بروید.' }
        ]
    },

    'lesson-01': {
        title: 'مبانی وب و ساختار سند', level: 'مقدماتی', duration: '7 دقیقه', xp: 50,
        sections: [
            { type: 'intro', text: 'پیش از نوشتن نخستین خط کد، ضروری است بدانید وب چگونه کار می‌کند.' },
            { type: 'heading', num: '01', text: 'اینترنت و وب، دو مفهوم متمایز' },
            { type: 'paragraph', text: 'اینترنت زیرساختی است که رایانه‌ها را به هم متصل می‌کند. وب خدمتی است که روی این زیرساخت اجرا می‌شود. تفاوت: اینترنت مثل شبکه‌ی راه‌هاست، وب مثل خودروهایی که در آن تردد می‌کنند.' },
            { type: 'heading', num: '02', text: 'کلاینت و سرور' },
            { type: 'paragraph', text: 'مرورگر شما (کلاینت) درخواستی به سرور می‌فرستد، سرور پاسخ را به شکل فایل برمی‌گرداند.' },
            { type: 'callout', title: 'نکته', text: 'مرورگر سه فایل دریافت می‌کند: HTML برای ساختار، CSS برای ظاهر، JavaScript برای رفتار.' },
            { type: 'heading', num: '03', text: 'نخستین تگ HTML' },
            { type: 'code', code: '<h1>سلام، دنیا</h1>', lang: 'HTML', caption: 'نخستین خط HTML شما', explain: [
                '<code>&lt;h1&gt;</code> تگ باز — عنوان اصلی',
                '<code>سلام، دنیا</code> متن قابل مشاهده',
                '<code>&lt;/h1&gt;</code> تگ بسته'
            ]},
            { type: 'heading', num: '04', text: 'ساختار یک سند HTML' },
            { type: 'code', code: '<!DOCTYPE html>\n<html lang="fa" dir="rtl">\n  <head>\n    <meta charset="UTF-8">\n    <title>عنوان صفحه</title>\n  </head>\n  <body>\n    <h1>محتوای قابل مشاهده</h1>\n  </body>\n</html>', lang: 'HTML', caption: 'ساختار پایه', explain: [
                '<code>&lt;!DOCTYPE html&gt;</code> اعلام HTML5 به مرورگر',
                '<code>&lt;html lang="fa" dir="rtl"&gt;</code> زبان فارسی، جهت راست‌چین',
                '<code>&lt;head&gt;</code> اطلاعات پشت صحنه (عنوان تب، انکودینگ)',
                '<code>&lt;body&gt;</code> هر چیزی که کاربر می‌بیند'
            ]},
            { type: 'quiz', id: 'q-1-1', question: 'تفاوت اصلی &lt;head&gt; و &lt;body&gt; چیست؟', answer: '<code>&lt;head&gt;</code> اطلاعات پشت صحنه را نگه می‌دارد که کاربر نمی‌بیند: عنوان تب مرورگر، کدگذاری کاراکترها، لینک به فایل‌های CSS. <code>&lt;body&gt;</code> محتوای قابل مشاهده است — هر چیزی که در صفحه دیده می‌شود.' },
            { type: 'exercise', title: 'اندیشه', text: 'برای نمایش نام خود به‌عنوان مهم‌ترین عنوان صفحه، از کدام تگ استفاده می‌کنید؟' },
            { type: 'project', title: 'اولین صفحه HTML شما', description: 'یک صفحه‌ی HTML با ساختار کامل بسازید که شامل نام شما به‌عنوان h1 و یک پاراگراف کوتاه معرفی باشد.', requirements: [
                'DOCTYPE html',
                'تگ html با lang="fa" و dir="rtl"',
                'head با title «درباره من»',
                'body با h1 (نام شما) و p (یک جمله معرفی)'
            ], starterCode: '<!DOCTYPE html>\n<html lang="fa" dir="rtl">\n<head>\n  <meta charset="UTF-8">\n  <title>درباره من</title>\n</head>\n<body>\n  <h1>نام شما</h1>\n  <p>یک جمله درباره‌ی خودتان بنویسید.</p>\n</body>\n</html>' }
        ]
    },

    'lesson-02': {
        title: 'تگ‌های پایه‌ای HTML', level: 'مقدماتی', duration: '15 دقیقه', xp: 50,
        sections: [
            { type: 'intro', text: 'مهم‌ترین تگ‌های HTML را تک‌تک می‌شناسیم. هر تگ با تعریف، ویژگی‌ها، و مثال.' },
            { type: 'heading', num: '01', text: 'تگ‌های عنوان: h1 تا h6' },
            { type: 'paragraph', text: 'شش سطح عنوان. h1 مهم‌ترین (فقط یکی در هر صفحه)، h6 کم‌اهمیت‌ترین.' },
            { type: 'tag-block', tag: 'h1', role: 'عنوان اصلی', desc: 'مهم‌ترین عنوان صفحه. <strong>فقط یک h1 در هر صفحه</strong>.', attrs: [], code: '<h1>آموزش HTML و CSS</h1>' },
            { type: 'tag-block', tag: 'h2', role: 'عنوان بخش', desc: 'عنوان بخش‌های اصلی. می‌توانید چند h2 داشته باشید.', attrs: [], code: '<h2>فصل اول</h2>\n<h2>فصل دوم</h2>' },
            { type: 'tag-block', tag: 'h3-h6', role: 'زیربخش‌ها', desc: 'برای زیربخش‌های عمیق‌تر. سلسله‌مراتب را نشکنید.', attrs: [], code: '<h3>بخش ۱.۱</h3>' },
            { type: 'callout', title: 'قاعده‌ی طلایی', text: 'سلسله‌مراتب را نشکنید. اگر h1 دارید، بعدی h2 است، نه h3.' },
            { type: 'heading', num: '02', text: 'پاراگراف و تأکید' },
            { type: 'tag-block', tag: 'p', role: 'پاراگراف', desc: 'هر بلوک متن. مرورگر بین پاراگراف‌ها فاصله می‌گذارد.', attrs: [], code: '<p>این یک پاراگراف است.</p>' },
            { type: 'tag-block', tag: 'strong', role: 'تأکید قوی', desc: 'متن را ضخیم می‌کند و از نظر معنایی «مهم» است.', attrs: [], code: '<p>این یک <strong>متن مهم</strong> است.</p>' },
            { type: 'tag-block', tag: 'em', role: 'تأکید ملایم', desc: 'متن را مورب می‌کند (تأکید).', attrs: [], code: '<p>این <em>واقعاً</em> جالب است.</p>' },
            { type: 'heading', num: '03', text: 'لینک و تصویر' },
            { type: 'tag-block', tag: 'a', role: 'لینک', desc: 'متن یا تصویر را به یک آدرس وصل می‌کند. href اجباری است.', attrs: [
                { name: 'href', desc: 'آدرس مقصد' },
                { name: 'target="_blank"', desc: 'باز شدن در تب جدید' }
            ], code: '<a href="https://example.com">برو به سایت</a>' },
            { type: 'tag-block', tag: 'img', role: 'تصویر', desc: 'تگ بسته نمی‌شود. alt برای دسترسی‌پذیری اجباری.', attrs: [
                { name: 'src', desc: 'آدرس تصویر' },
                { name: 'alt', desc: 'توضیح تصویر (اجباری)' },
                { name: 'width/height', desc: 'عرض/ارتفاع' }
            ], code: '<img src="photo.jpg" alt="توضیح" width="200">' },
            { type: 'heading', num: '04', text: 'لیست‌ها' },
            { type: 'tag-block', tag: 'ul', role: 'لیست نامرتب', desc: 'با نقطه. برای موارد بدون ترتیب.', attrs: [], code: '<ul>\n  <li>HTML</li>\n  <li>CSS</li>\n</ul>' },
            { type: 'tag-block', tag: 'ol', role: 'لیست مرتب', desc: 'با شماره. برای مراحل ترتیبی.', attrs: [], code: '<ol>\n  <li>قدم ۱</li>\n  <li>قدم ۲</li>\n</ol>' },
            { type: 'heading', num: '05', text: 'جداکننده‌ها و جعبه‌ها' },
            { type: 'tag-block', tag: 'br', role: 'خط جدید', desc: 'شکست خط. برای فاصله‌ی بین پاراگراف‌ها از br استفاده نکنید.', attrs: [], code: '<p>خط اول<br>خط دوم</p>' },
            { type: 'tag-block', tag: 'hr', role: 'خط افقی', desc: 'جداکننده‌ی موضوعی.', attrs: [], code: '<p>بخش ۱</p>\n<hr>\n<p>بخش ۲</p>' },
            { type: 'tag-block', tag: 'div', role: 'بلوک عمومی', desc: 'جعبه‌ی بلوکی. برای گروه‌بندی و چیدمان.', attrs: [], code: '<div class="card">\n  <h2>عنوان</h2>\n</div>' },
            { type: 'tag-block', tag: 'span', role: 'درون‌خطی', desc: 'مثل div اما فقط بخشی از متن.', attrs: [], code: '<p>این <span style="color: red">قرمز</span> است.</p>' },
            { type: 'heading', num: '06', text: 'تگ‌های معنایی' },
            { type: 'tag-block', tag: 'header', role: 'سربرگ', desc: 'بالای صفحه یا مقاله. لوگو، عنوان، منو.', attrs: [], code: '<header>\n  <h1>نام سایت</h1>\n</header>' },
            { type: 'tag-block', tag: 'nav', role: 'ناوبری', desc: 'بخش منو.', attrs: [], code: '<nav>\n  <a href="/">خانه</a>\n</nav>' },
            { type: 'tag-block', tag: 'main', role: 'محتوای اصلی', desc: 'فقط یکی در هر صفحه.', attrs: [], code: '<main>\n  <p>محتوا</p>\n</main>' },
            { type: 'tag-block', tag: 'section', role: 'بخش مستقل', desc: 'بخش موضوعی از صفحه.', attrs: [], code: '<section>\n  <h2>درباره ما</h2>\n</section>' },
            { type: 'tag-block', tag: 'article', role: 'محتوای مستقل', desc: 'محتوایی که به‌تنهایی معنا دارد (پست، خبر).', attrs: [], code: '<article>\n  <h2>عنوان پست</h2>\n</article>' },
            { type: 'tag-block', tag: 'footer', role: 'پاورقی', desc: 'پایین صفحه. کپی‌رایت، لینک‌های اضافی.', attrs: [], code: '<footer>\n  <p>© 2025</p>\n</footer>' },
            { type: 'quiz', id: 'q-2-1', question: 'چرا تگ &lt;strong&gt; بهتر از &lt;b&gt; است؟', answer: 'از نظر ظاهری هر دو متن را ضخیم می‌کنند. اما <code>&lt;strong&gt;</code> معنای «اهمیت» دارد و صفحه‌خوان‌ها با تأکید می‌خوانند، در حالی که <code>&lt;b&gt;</code> فقط ظاهر را تغییر می‌دهد. برای معناداری و دسترسی‌پذیری، همیشه strong بهتر است.' },
            { type: 'quiz', id: 'q-2-2', question: 'چه زمانی از div و چه زمانی از section استفاده کنیم؟', answer: '<code>&lt;div&gt;</code> یک جعبه‌ی عمومی است — معنی ندارد، فقط برای چیدمان. <code>&lt;section&gt;</code> یعنی «این بخش مستقلی از محتواست» — برای موتور جستجو و صفحه‌خوان معنا دارد. اگر بخش شما یک عنوان دارد و به‌تنهایی معنا دارد، section. اگر فقط برای چیدمان است، div.' },
            { type: 'project', title: 'صفحه‌ی درباره من', description: 'یک صفحه‌ی کامل با header، nav، main، article و footer بسازید.', requirements: [
                'header با h1 (نام شما)',
                'nav با ۳ لینک',
                'main با یک article شامل h2 و ۲ پاراگراف',
                'یک ul با ۳ مهارت شما',
                'footer با کپی‌رایت'
            ], starterCode: '<!DOCTYPE html>\n<html lang="fa" dir="rtl">\n<head>\n  <meta charset="UTF-8">\n  <title>درباره من</title>\n</head>\n<body>\n  <header>\n    <h1>نام شما</h1>\n    <nav>\n      <a href="#">خانه</a>\n      <a href="#">درباره</a>\n      <a href="#">تماس</a>\n    </nav>\n  </header>\n  <main>\n    <article>\n      <h2>درباره من</h2>\n      <p>پاراگراف اول...</p>\n      <p>پاراگراف دوم...</p>\n      <ul>\n        <li>مهارت اول</li>\n        <li>مهارت دوم</li>\n        <li>مهارت سوم</li>\n      </ul>\n    </article>\n  </main>\n  <footer>\n    <p>© ۱۴۰۴</p>\n  </footer>\n</body>\n</html>' }
        ]
    },

    'lesson-03': {
        title: 'ورود به دنیای CSS', level: 'مقدماتی', duration: '12 دقیقه', xp: 50,
        sections: [
            { type: 'intro', text: 'CSS به ساختار HTML ظاهر و زیبایی می‌بخشد. بدونش صفحات خشک و یکسان‌اند.' },
            { type: 'heading', num: '01', text: 'CSS چیست؟' },
            { type: 'paragraph', text: 'CSS مخفف Cascading Style Sheets است. زبان توصیف ظاهر — رنگ، فونت، فاصله، اندازه، چیدمان.' },
            { type: 'heading', num: '02', text: 'سه راه اتصال CSS' },
            { type: 'list', items: [
                '<strong>درون‌خطی:</strong> <code>&lt;p style="color:red"&gt;</code> — برای تغییرات کوچک.',
                '<strong>داخلی:</strong> <code>&lt;style&gt;</code> در <code>&lt;head&gt;</code> — برای یک صفحه.',
                '<strong>خارجی:</strong> فایل <code>.css</code> جداگانه — بهترین روش.'
            ]},
            { type: 'callout', title: 'در درس بعد', text: 'در درس ۰۴ (اتصال CSS به HTML)، این سه روش را با جزئیات کامل، مزایا و معایب هر کدام می‌بینیم.' },
            { type: 'heading', num: '03', text: 'اولین استایل' },
            { type: 'code', code: '<style>\n  p {\n    color: #333;\n    font-size: 16px;\n  }\n</style>\n<p>این پاراگراف با استایل نمایش داده می‌شود.</p>', lang: 'HTML', caption: 'استایل پایه', explain: [
                '<code>p</code> — انتخابگر: «همه‌ی پاراگراف‌ها»',
                '<code>color: #333</code> — رنگ متن',
                '<code>font-size: 16px</code> — اندازه‌ی فونت',
                '<code>{ }</code> — بلوک اعلان‌ها'
            ]},
            { type: 'heading', num: '04', text: 'کلاس و شناسه' },
            { type: 'code', code: '<style>\n  .intro {\n    color: #0088cc;\n  }\n  #title {\n    font-size: 28px;\n  }\n</style>\n<p class="intro">متن مقدمه</p>\n<h1 id="title">عنوان</h1>', lang: 'HTML', caption: 'کلاس و شناسه', explain: [
                '<code>.intro</code> — انتخابگر کلاس (با نقطه)',
                '<code>class="intro"</code> — تعریف کلاس در HTML',
                '<code>#title</code> — انتخابگر شناسه (با هش)',
                '<code>id="title"</code> — تعریف شناسه (یکتا در صفحه)'
            ]},
            { type: 'callout', title: 'کلاس یا شناسه؟', text: 'کلاس برای چندین عنصر (مثل .btn). شناسه برای یک عنصر یکتا (مثل #main-header). در ۹۵٪ موارد از کلاس استفاده کنید.' },
            { type: 'quiz', id: 'q-3-1', question: 'تفاوت اصلی کلاس (.name) و شناسه (#name) چیست؟', answer: 'کلاس را می‌توانید روی چندین عنصر در یک صفحه استفاده کنید، اما شناسه فقط یک بار (id یکتا است). کلاس‌ها در CSS با نقطه (<code>.name</code>) و شناسه‌ها با هش (<code>#name</code>) انتخاب می‌شوند. برای استایل‌دهی، همیشه کلاس توصیه می‌شود چون انعطاف‌پذیرتر است.' },
            { type: 'project', title: 'صفحه با استایل شخصی', description: 'صفحه‌ی HTML خود را با CSS زیبا کنید.', requirements: [
                'background متفاوت برای body',
                'رنگ و اندازه‌ی h1 سفارشی',
                'یک کلاس .highlight برای تأکید متن',
                'فونت-family و line-height تنظیم‌شده'
            ], starterCode: '<!DOCTYPE html>\n<html lang="fa" dir="rtl">\n<head>\n  <meta charset="UTF-8">\n  <title>صفحه من</title>\n  <style>\n    body {\n      font-family: Tahoma, sans-serif;\n      background: #f5f5f5;\n      padding: 40px;\n      line-height: 1.8;\n    }\n    h1 {\n      color: #f4b942;\n      font-size: 32px;\n    }\n    .highlight {\n      background: #fff3c4;\n      padding: 4px 8px;\n      border-radius: 4px;\n    }\n  </style>\n</head>\n<body>\n  <h1>عنوان صفحه</h1>\n  <p>این متن <span class="highlight">مهم است</span>.</p>\n</body>\n</html>' }
        ]
    },

    'lesson-04': {
        title: 'اتصال CSS به HTML', level: 'متوسط', duration: '14 دقیقه', xp: 100,
        sections: [
            { type: 'intro', text: 'برای اینکه CSS روی HTML اثر بگذارد، باید آن را به شکلی به HTML «وصل» کنید. چهار روش برای این کار وجود دارد — هر کدام کاربرد خودشان را دارند و دانستن تفاوتشان برای یک توسعه‌دهنده‌ی حرفه‌ای ضروری است.' },
            { type: 'heading', num: '01', text: 'روش اول: درون‌خطی (Inline)' },
            { type: 'paragraph', text: 'در این روش، CSS را مستقیماً در صفت <code>style</code> روی خود تگ HTML می‌نویسید. هیچ فایل جداگانه یا تگ <code>&lt;style&gt;</code> لازم نیست.' },
            { type: 'code', code: '<h1 style="color: #f4b942; font-size: 32px;">عنوان</h1>\n<p style="color: #666; line-height: 1.8;">این یک پاراگراف است.</p>', lang: 'HTML', caption: 'استایل درون‌خطی', explain: [
                '<code>style="..."</code> — صفت استایل روی خود تگ',
                '<code>color: #f4b942;</code> — رنگ طلایی',
                '<code>font-size: 32px;</code> — اندازه‌ی فونت',
                'هر اعلان با <code>;</code> جدا می‌شود'
            ]},
            { type: 'list', items: [
                '<strong>مزایا:</strong> سریع‌ترین راه — می‌توانید همان لحظه یک تغییر کوچک بدهید بدون فایل جدید.',
                '<strong>معایب:</strong> کد HTML شما را شلوغ می‌کند. اگر همان استایل را در ۵۰ جا استفاده کنید، باید ۵۰ بار تکرارش کنید. تغییر رنگ اصلی = تغییر ۵۰ جا.',
                '<strong>کاربرد مناسب:</strong> فقط برای تغییرات کوچک و یک‌بارمصرف. مثلاً یک ایمیل HTML که باید در همه‌ی کلاینت‌ها کار کند.'
            ]},
            { type: 'heading', num: '02', text: 'روش دوم: داخلی (Internal)' },
            { type: 'paragraph', text: 'CSS را داخل تگ <code>&lt;style&gt;</code> که در <code>&lt;head&gt;</code> سند قرار دارد می‌نویسید. این استایل‌ها روی کل صفحه اعمال می‌شوند.' },
            { type: 'code', code: '<!DOCTYPE html>\n<html lang="fa" dir="rtl">\n<head>\n  <meta charset="UTF-8">\n  <title>صفحه من</title>\n  <style>\n    h1 {\n      color: #f4b942;\n      font-size: 32px;\n    }\n    p {\n      color: #666;\n      line-height: 1.8;\n    }\n  </style>\n</head>\n<body>\n  <h1>عنوان</h1>\n  <p>این یک پاراگراف است.</p>\n</body>\n</html>', lang: 'HTML', caption: 'استایل داخلی', explain: [
                '<code>&lt;style&gt;</code> در <code>&lt;head&gt;</code> قرار می‌گیرد',
                'همه‌ی <code>&lt;h1&gt;</code>های صفحه، طلایی می‌شوند',
                'همه‌ی <code>&lt;p&gt;</code>ها خاکستری می‌شوند',
                'یک بار تعریف، چند بار استفاده'
            ]},
            { type: 'list', items: [
                '<strong>مزایا:</strong> کد HTML تمیزتر از درون‌خطی. یک بار تعریف، همه‌ی تگ‌های مشابه را تحت تأثیر قرار می‌دهد.',
                '<strong>معایب:</strong> فقط برای یک صفحه کار می‌کند. اگر پروژه‌ی شما ۱۰ صفحه داشته باشد، باید این بلوک <code>&lt;style&gt;</code> را در هر ۱۰ فایل کپی کنید.',
                '<strong>کاربرد مناسب:</strong> پروژه‌های کوچک یک‌صفحه‌ای، صفحه‌های مستقل، یا برای تست کردن سریع.'
            ]},
            { type: 'heading', num: '03', text: 'روش سوم: خارجی (External) — بهترین روش' },
            { type: 'paragraph', text: 'CSS را در یک فایل جداگانه با پسوند <code>.css</code> می‌نویسید و از طریق تگ <code>&lt;link&gt;</code> در <code>&lt;head&gt;</code> به HTML وصل می‌کنید. این روش استاندارد صنعت است.' },
            { type: 'paragraph', text: '<strong>فایل HTML:</strong>' },
            { type: 'code', code: '<!DOCTYPE html>\n<html lang="fa" dir="rtl">\n<head>\n  <meta charset="UTF-8">\n  <title>صفحه من</title>\n  <link rel="stylesheet" href="styles.css">\n</head>\n<body>\n  <h1>عنوان</h1>\n  <p>این یک پاراگراف است.</p>\n</body>\n</html>', lang: 'HTML', caption: 'اتصال به فایل خارجی', explain: [
                '<code>&lt;link&gt;</code> — تگ اتصال، در <code>&lt;head&gt;</code>',
                '<code>rel="stylesheet"</code> — نوع فایل: stylesheet',
                '<code>href="styles.css"</code> — مسیر فایل CSS',
                'فایل CSS در همان پوشه‌ی HTML قرار دارد'
            ]},
            { type: 'paragraph', text: '<strong>فایل CSS (styles.css):</strong>' },
            { type: 'code', code: 'h1 {\n  color: #f4b942;\n  font-size: 32px;\n}\n\np {\n  color: #666;\n  line-height: 1.8;\n}', lang: 'CSS', caption: 'محتوای فایل جداگانه', explain: [
                'بدون <code>&lt;style&gt;</code> — فقط قواعد CSS خالص',
                'همین کد را می‌توانید به ۱۰۰ فایل HTML وصل کنید',
                'با تغییر یک فایل، همه‌ی صفحه‌ها آپدیت می‌شوند'
            ]},
            { type: 'list', items: [
                '<strong>مزایا:</strong> کد HTML کاملاً تمیز. یک فایل CSS برای کل سایت — تغییر یک رنگ، همه‌ی صفحه‌ها را آپدیت می‌کند. مرورگر فایل CSS را کش می‌کند و سرعت لود بالا می‌رود.',
                '<strong>معایب:</strong> نیاز به فایل جداگانه و مسیردهی صحیح.',
                '<strong>کاربرد مناسب:</strong> هر پروژه‌ی واقعی — از یک سایت شخصی تا فروشگاه بزرگ. <strong>این روش را همیشه استفاده کنید.</strong>'
            ]},
            { type: 'heading', num: '04', text: 'روش چهارم: @import (کمتر استفاده می‌شود)' },
            { type: 'paragraph', text: 'می‌توانید یک فایل CSS را از داخل فایل CSS دیگر یا از داخل <code>&lt;style&gt;</code> فراخوانی کنید. اما این روش کندتر است و توصیه نمی‌شود.' },
            { type: 'code', code: '<style>\n  @import url("styles.css");\n  @import url("theme.css");\n</style>', lang: 'CSS', caption: 'روش @import', explain: [
                '<code>@import url("...")</code> — فایل CSS را لود می‌کند',
                'باید اولین خط فایل CSS باشد',
                'کندتر از <code>&lt;link&gt;</code> — مرورگر نمی‌تواند موازی لود کند'
            ]},
            { type: 'list', items: [
                '<strong>مزایا:</strong> می‌توانید یک فایل CSS اصلی داشته باشید که فایل‌های دیگر (مثل theme.css) را import کند.',
                '<strong>معایب:</strong> سرعت لود پایین‌تر — مرورگر باید فایل اول را لود کند تا بداند فایل دوم کجاست. برای همین <code>&lt;link&gt;</code> بهتر است.',
                '<strong>کاربرد مناسب:</strong> پروژه‌های خاص که می‌خواهند تم‌های مختلف را پویا لود کنند.'
            ]},
            { type: 'heading', num: '05', text: 'کدام روش را انتخاب کنیم؟' },
            { type: 'callout', title: 'قاعده‌ی طلایی', text: 'در ۹۹٪ موارد از روش خارجی (فایل جداگانه CSS) استفاده کنید. تنها استثناها: تغییر سریع یک‌بارمصرف (درون‌خطی)، یا صفحه‌ی کوچک تک‌فایلی (داخلی).' },
            { type: 'list', items: [
                '<strong>پروژه‌ی واقعی چندصفحه‌ای:</strong> همیشه External',
                '<strong>پروژه‌ی کوچک تک‌صفحه‌ای:</strong> Internal قابل قبول است',
                '<strong>تغییر سریع یک عنصر خاص:</strong> Inline (کم استفاده)',
                '<strong>نیاز به import در CSS:</strong> فقط در موارد خاص'
            ]},
            { type: 'heading', num: '06', text: 'ترتیب اولویت (Cascade)' },
            { type: 'paragraph', text: 'اگر چند روش را همزمان استفاده کنید، CSS قاعده‌ای به نام <strong>Cascade</strong> (آبشاری) دارد. ترتیب اولویت از بالا به پایین:' },
            { type: 'list', items: [
                '<strong>۱. Inline (بالاترین اولویت):</strong> <code>style="..."</code> — هر چیز دیگری را override می‌کند',
                '<strong>۲. Internal:</strong> <code>&lt;style&gt;</code> در head',
                '<strong>۳. External:</strong> فایل CSS جداگانه',
                '<strong>۴. Browser default:</strong> استایل پیش‌فرض مرورگر (پایین‌ترین)'
            ]},
            { type: 'callout', title: 'مثال کاربردی', text: 'اگر h1 در فایل خارجی رنگ آبی داشته باشد، اما شما با style="color: red" روی خود تگ h1 بنویسید، رنگ قرمز اعمال می‌شود — چون inline اولویت بالاتری دارد.' },
            { type: 'quiz', id: 'q-4-1', question: 'چرا روش External (فایل جداگانه CSS) بهترین روش است؟', answer: 'سه دلیل اصلی: (۱) کد HTML تمیز می‌ماند و فقط ساختار دارد. (۲) یک فایل CSS را می‌توانید به ۱۰۰ صفحه HTML وصل کنید — اگر رنگ اصلی را در یک فایل تغییر دهید، همه‌ی صفحه‌ها خودکار آپدیت می‌شوند. (۳) مرورگر فایل CSS را یک بار لود و کش می‌کند؛ در صفحه‌های بعدی از cache استفاده می‌کند و سرعت سایت بالا می‌رود.' },
            { type: 'quiz', id: 'q-4-2', question: 'اگر هم Internal هم External داشته باشیم، کدام برنده است؟', answer: 'به ترتیب <strong>Cascade</strong> بستگی دارد: Inline بالاترین اولویت را دارد، سپس Internal، سپس External. اگر همان انتخابگر (مثلاً h1) در هر دو Internal و External تعریف شود، **Internal برنده می‌شود** چون در سند HTML دیرتر (بعد از link) قرار می‌گیرد. اما اگر Internal در <code>&lt;head&gt;</code> و **قبل از** <code>&lt;link&gt;</code> باشد، External برنده است.' },
            { type: 'quiz', id: 'q-4-3', question: 'چرا از @import استفاده نمی‌کنیم؟', answer: 'چون سرعت لود را پایین می‌آورد. با <code>@import</code>، مرورگر باید اول فایل CSS اصلی را لود کند، بعد بفهمد که یک فایل دیگر هم هست، و بعد آن را لود کند — این کار زنجیره‌ای است. اما با <code>&lt;link&gt;</code>، مرورگر همه‌ی فایل‌ها را موازی (همزمان) لود می‌کند. تفاوت در سایت‌های کوچک محسوس نیست، اما در سایت‌های بزرگ می‌تواند ۱-۲ ثانیه تأخیر ایجاد کند.' },
            { type: 'heading', num: '07', text: 'ساختار پروژه‌ی استاندارد' },
            { type: 'code', code: 'my-project/\n├── index.html\n├── about.html\n├── contact.html\n├── css/\n│   ├── styles.css\n│   └── responsive.css\n└── images/\n    └── logo.png', lang: 'Folder', caption: 'ساختار با پوشه‌ی CSS جدا', explain: [
                'فایل‌های HTML در ریشه',
                'پوشه‌ی <code>css/</code> برای فایل‌های استایل',
                'پوشه‌ی <code>images/</code> برای تصاویر',
                'در HTML: <code>href="css/styles.css"</code>'
            ]},
            { type: 'exercise', title: 'تمرین عملی', text: 'در تمرینگاه کد، یک صفحه با روش Internal بسازید، سپس همان استایل را به یک فایل External منتقل کنید و تفاوت را ببینید.' },
            { type: 'project', title: 'صفحه با CSS جداگانه', description: 'یک صفحه با ساختار کامل بسازید و استایل را در فایل جداگانه نگه دارید.', requirements: [
                'DOCTYPE html + head + body',
                'تگ link با rel="stylesheet" در head',
                'h1 با رنگ و اندازه در CSS',
                'p با رنگ و line-height در CSS',
                'کد CSS در فایل جداگانه (در تمرینگاه، داخل style بنویسید اما ساختار External را رعایت کنید)'
            ], starterCode: '<!DOCTYPE html>\n<html lang="fa" dir="rtl">\n<head>\n  <meta charset="UTF-8">\n  <title>صفحه من</title>\n  <style>\n    body {\n      font-family: Tahoma, sans-serif;\n      background: #f5f5f5;\n      padding: 40px;\n    }\n    h1 {\n      color: #f4b942;\n      font-size: 32px;\n    }\n    p {\n      color: #666;\n      line-height: 1.8;\n    }\n  </style>\n</head>\n<body>\n  <h1>عنوان صفحه</h1>\n  <p>این یک پاراگراف است.</p>\n</body>\n</html>' }
        ]
    },

    'lesson-05': {
        title: 'مدل جعبه‌ای در CSS', level: 'متوسط', duration: '18 دقیقه', xp: 100,
        sections: [
            { type: 'intro', text: 'مدل جعبه‌ای بنیادی‌ترین مفهوم CSS است. هر عنصر HTML یک جعبه‌ی مستطیلی است.' },
            { type: 'heading', num: '01', text: 'چهار لایه‌ی هر جعبه' },
            { type: 'list', items: [
                '<strong>Content</strong> — خود محتوا',
                '<strong>Padding</strong> — فاصله‌ی داخلی (بین محتوا و حاشیه)',
                '<strong>Border</strong> — حاشیه',
                '<strong>Margin</strong> — فاصله‌ی بیرونی (بین عناصر)'
            ]},
            { type: 'code', code: '<style>\n  .box {\n    background: #f4b942;\n    padding: 20px;\n    border: 3px solid #333;\n    margin: 30px;\n    width: 200px;\n  }\n</style>\n<div class="box">جعبه</div>', lang: 'HTML', caption: 'جعبه با چهار لایه', explain: [
                '<code>padding: 20px</code> — ۲۰ پیکسل فاصله‌ی داخلی',
                '<code>border: 3px solid #333</code> — حاشیه‌ی ۳ پیکسلی مشکی',
                '<code>margin: 30px</code> — ۳۰ پیکسل فاصله از بیرون',
                '<code>width: 200px</code> — عرض محتوا (نه عرض کل!)'
            ]},
            { type: 'heading', num: '02', text: 'box-sizing — مشکل را حل می‌کند' },
            { type: 'paragraph', text: 'به‌طور پیش‌فرض، width فقط عرض محتواست. padding و border به آن اضافه می‌شوند. یعنی width:200px + padding:20+20 + border:3+3 = 246 پیکسل عرض کل! این گیج‌کننده است.' },
            { type: 'code', code: '* {\n  box-sizing: border-box;\n}', lang: 'CSS', caption: 'box-sizing جهانی', explain: [
                '<code>*</code> — همه‌ی عناصر',
                '<code>border-box</code> — padding و border داخل width محاسبه می‌شوند',
                'حالا width:200px دقیقاً ۲۰۰ پیکسل است'
            ]},
            { type: 'callout', title: 'چرا border-box؟', text: 'همیشه در ابتدای پروژه اضافه کنید. محاسبات را ساده می‌کند: هر عرضی که می‌گویید، همان می‌شود.' },
            { type: 'heading', num: '03', text: 'مثال کارت' },
            { type: 'code', code: '<style>\n  .card {\n    background: white;\n    padding: 20px;\n    border: 1px solid #ddd;\n    border-radius: 12px;\n    margin: 16px;\n    width: 280px;\n    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);\n  }\n</style>\n<div class="card">\n  <h3>کارت محصول</h3>\n  <p>توضیحات</p>\n</div>', lang: 'HTML', caption: 'کارت با استایل کامل', explain: [
                '<code>border-radius: 12px</code> — گوشه‌های گرد',
                '<code>box-shadow</code> — سایه‌ی بیرونی',
                '<code>rgba(0, 0, 0, 0.08)</code> — رنگ سیاه با شفافیت ۸٪'
            ]},
            { type: 'quiz', id: 'q-5-1', question: 'اگر width:300px، padding:20px و border:5px باشد، با box-sizing:content-box عرض کل چقدر است؟', answer: '۳۵۰ پیکسل. محاسبه: ۳۰۰ (محتوا) + ۴۰ (padding چپ و راست) + ۱۰ (border چپ و راست) = ۳۵۰. اما با <code>box-sizing:border-box</code>، عرض کل دقیقاً ۳۰۰ پیکسل می‌ماند.' },
            { type: 'quiz', id: 'q-5-2', question: 'تفاوت margin و padding چیست؟', answer: '<strong>padding</strong> فاصله‌ی داخلی است — بین محتوا و حاشیه (border). داخل جعبه. <strong>margin</strong> فاصله‌ی بیرونی است — بین جعبه و سایر عناصر. بیرون جعبه. اگر بخواهید محتوا از لبه فاصله داشته باشد، padding. اگر بخواهید کل جعبه از بقیه فاصله بگیرد، margin.' },
            { type: 'project', title: 'کارت پروفایل', description: 'یک کارت پروفایل شبیه اینستاگرام بسازید.', requirements: [
                'width حدود 300px',
                'border-radius گرد',
                'padding داخلی مناسب',
                'box-shadow ملایم',
                'حاشیه‌ی نازک خاکستری'
            ], starterCode: '<style>\n  * {\n    box-sizing: border-box;\n  }\n  body {\n    background: #f0f0f0;\n    padding: 40px;\n    font-family: Tahoma;\n  }\n  .profile {\n    width: 300px;\n    background: white;\n    padding: 24px;\n    border: 1px solid #e0e0e0;\n    border-radius: 16px;\n    box-shadow: 0 4px 16px rgba(0, 0, 0, 0.08);\n    margin: 0 auto;\n    text-align: center;\n  }\n  .profile h2 {\n    margin: 0 0 8px;\n  }\n  .profile p {\n    color: #666;\n    margin: 0;\n  }\n</style>\n<div class="profile">\n  <h2>نام شما</h2>\n  <p>توسعه‌دهنده وب</p>\n</div>' }
        ]
    },

    'lesson-06': {
        title: 'چیدمان با Flexbox', level: 'متوسط', duration: '20 دقیقه', xp: 100,
        sections: [
            { type: 'intro', text: 'Flexbox قدرتمندترین ابزار چیدمان یک‌بعدی است.' },
            { type: 'heading', num: '01', text: 'display: flex' },
            { type: 'code', code: '<style>\n  .container {\n    display: flex;\n    gap: 10px;\n  }\n  .item {\n    background: #f4b942;\n    padding: 20px;\n  }\n</style>\n<div class="container">\n  <div class="item">۱</div>\n  <div class="item">۲</div>\n  <div class="item">۳</div>\n</div>', lang: 'HTML', caption: 'سه آیتم کنار هم', explain: [
                '<code>display: flex</code> — فعال‌سازی flexbox',
                'فرزندان مستقیم به‌طور خودکار در یک ردیف قرار می‌گیرند',
                '<code>gap: 10px</code> — فاصله بین آیتم‌ها'
            ]},
            { type: 'heading', num: '02', text: 'justify-content — توزیع افقی' },
            { type: 'list', items: [
                '<strong>flex-start</strong> — شروع (پیش‌فرض)',
                '<strong>flex-end</strong> — انتها',
                '<strong>center</strong> — وسط',
                '<strong>space-between</strong> — فاصله بین آیتم‌ها، بدون فاصله از لبه',
                '<strong>space-around</strong> — فاصله دور هر آیتم',
                '<strong>space-evenly</strong> — فاصله کاملاً یکسان'
            ]},
            { type: 'heading', num: '03', text: 'align-items — تراز عمودی' },
            { type: 'list', items: [
                '<strong>flex-start</strong> — بالا',
                '<strong>flex-end</strong> — پایین',
                '<strong>center</strong> — وسط',
                '<strong>stretch</strong> — کشیده (پیش‌فرض)'
            ]},
            { type: 'code', code: '<style>\n  .navbar {\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n    background: #333;\n    padding: 12px 20px;\n    border-radius: 6px;\n  }\n  .navbar a {\n    color: #f4b942;\n    text-decoration: none;\n  }\n</style>\n<nav class="navbar">\n  <a href="#">خانه</a>\n  <a href="#">درباره</a>\n  <a href="#">تماس</a>\n</nav>', lang: 'HTML', caption: 'نوار ناوبری', explain: [
                '<code>space-between</code> — لوگو چپ، منو راست',
                '<code>align-items: center</code> — تراز عمودی وسط',
                'این ترکیب الگوی استاندارد navbar است'
            ]},
            { type: 'heading', num: '04', text: 'flex-direction' },
            { type: 'code', code: '<style>\n  .column {\n    display: flex;\n    flex-direction: column;\n    gap: 10px;\n  }\n</style>\n<div class="column">\n  <div>آیتم ۱</div>\n  <div>آیتم ۲</div>\n</div>', lang: 'HTML', caption: 'چیدمان عمودی' },
            { type: 'quiz', id: 'q-6-1', question: 'چطور یک navbar با لوگو سمت راست و منو سمت چپ بسازیم؟', answer: 'با ترکیب دو ویژگی: <code>display: flex</code> روی nav، <code>justify-content: space-between</code> برای پخش کردن لوگو و منو در دو طرف، و <code>align-items: center</code> برای تراز عمودی وسط. این الگو در ۹۹٪ نوارهای بالای سایت استفاده می‌شود.' },
            { type: 'quiz', id: 'q-6-2', question: 'تفاوت justify-content و align-items چیست؟', answer: '<code>justify-content</code> آیتم‌ها را در محور اصلی (افقی در row) توزیع می‌کند. <code>align-items</code> آن‌ها را در محور عمود (عمودی در row) تراز می‌کند. اگر flex-direction را به column تغییر دهید، نقش این دو برعکس می‌شود.' },
            { type: 'project', title: 'کارت‌های ویژگی', description: 'یک ردیف با سه کارت ویژگی با فاصله‌ی مساوی بسازید.', requirements: [
                'display: flex روی container',
                'justify-content: center یا space-between',
                'gap برای فاصله',
                'کارت‌ها با پس‌زمینه و padding'
            ], starterCode: '<style>\n  .features {\n    display: flex;\n    justify-content: center;\n    gap: 20px;\n    padding: 40px;\n    flex-wrap: wrap;\n  }\n  .card {\n    background: #f4b942;\n    padding: 24px;\n    border-radius: 12px;\n    width: 200px;\n    text-align: center;\n  }\n</style>\n<div class="features">\n  <div class="card">سریع</div>\n  <div class="card">امن</div>\n  <div class="card">ساده</div>\n</div>' }
        ]
    },

    'lesson-07': {
        title: 'طراحی واکنش‌گرا', level: 'متوسط', duration: '16 دقیقه', xp: 100,
        sections: [
            { type: 'intro', text: 'صفحه‌ی شما باید در همه‌ی دستگاه‌ها درست دیده شود.' },
            { type: 'heading', num: '01', text: 'تگ viewport' },
            { type: 'code', code: '<meta name="viewport" content="width=device-width, initial-scale=1.0">', lang: 'HTML', caption: 'بدون این تگ، موبایل صفحه را کوچک می‌کند', explain: [
                '<code>width=device-width</code> — عرض صفحه = عرض دستگاه',
                '<code>initial-scale=1.0</code> — بدون زوم اولیه'
            ]},
            { type: 'heading', num: '02', text: 'واحدهای نسبی' },
            { type: 'code', code: '.container {\n  width: 100%;\n  max-width: 1200px;\n  margin: 0 auto;\n  padding: 0 20px;\n}', lang: 'CSS', caption: 'ظرف واکنش‌گرا', explain: [
                '<code>width: 100%</code> — تمام عرض',
                '<code>max-width: 1200px</code> — حداکثر ۱۲۰۰',
                '<code>margin: 0 auto</code> — وسط‌چین افقی'
            ]},
            { type: 'heading', num: '03', text: 'Media Queries' },
            { type: 'code', code: '@media (max-width: 768px) {\n  .sidebar {\n    display: none;\n  }\n  .content {\n    width: 100%;\n  }\n}', lang: 'CSS', caption: 'مخفی کردن sidebar در موبایل', explain: [
                '<code>@media</code> — فقط وقتی شرط برقرار باشد اعمال می‌شود',
                '<code>max-width: 768px</code> — تا عرض ۷۶۸ پیکسل',
                'در دسکتاپ (بیشتر از ۷۶۸) این استایل اجرا نمی‌شود'
            ]},
            { type: 'quiz', id: 'q-7-1', question: 'نقطه‌های شکست (breakpoint) رایج کدام‌اند؟', answer: 'سه نقطه‌ی رایج: <strong>۴۸۰px</strong> (گوشی‌های کوچک)، <strong>۷۶۸px</strong> (تبلت و گوشی‌های بزرگ)، <strong>۱۰۲۴px</strong> (دسکتاپ کوچک). بالاتر از ۱۰۲۴px، دسکتاپ معمولی. برای شروع، فقط دو breakpoint کافی است: ۴۸۰px و ۷۶۸px.' },
            { type: 'project', title: 'لندینگ واکنش‌گرا', description: 'یک صفحه با بخش hero بسازید که در موبایل یک‌ستونه و در دسکتاپ دوستونه باشد.', requirements: [
                'meta viewport',
                'کلاس .container با max-width',
                '@media برای موبایل',
                'در دسکتاپ: دو ستون کنار هم',
                'در موبایل: یک ستون'
            ], starterCode: '<style>\n  * {\n    box-sizing: border-box;\n  }\n  body {\n    font-family: Tahoma;\n    margin: 0;\n  }\n  .container {\n    display: flex;\n    max-width: 900px;\n    margin: 0 auto;\n    gap: 20px;\n    padding: 40px 20px;\n  }\n  .col {\n    flex: 1;\n    background: #f4b942;\n    padding: 30px;\n    border-radius: 12px;\n  }\n  @media (max-width: 768px) {\n    .container {\n      flex-direction: column;\n    }\n  }\n</style>\n<div class="container">\n  <div class="col">ستون ۱</div>\n  <div class="col">ستون ۲</div>\n</div>' }
        ]
    },

    'lesson-08': {
        title: 'چیدمان با Grid', level: 'متوسط', duration: '18 دقیقه', xp: 100,
        sections: [
            { type: 'intro', text: 'CSS Grid چیدمان دوبعدی — هم سطر هم ستون با هم.' },
            { type: 'heading', num: '01', text: 'display: grid' },
            { type: 'code', code: '<style>\n  .grid {\n    display: grid;\n    grid-template-columns: 1fr 1fr 1fr;\n    gap: 12px;\n  }\n  .cell {\n    background: #f4b942;\n    padding: 20px;\n    text-align: center;\n  }\n</style>\n<div class="grid">\n  <div class="cell">۱</div>\n  <div class="cell">۲</div>\n  <div class="cell">۳</div>\n  <div class="cell">۴</div>\n  <div class="cell">۵</div>\n  <div class="cell">۶</div>\n</div>', lang: 'HTML', caption: 'شبکه سه‌ستونه', explain: [
                '<code>grid-template-columns</code> — تعریف ستون‌ها',
                '<code>1fr 1fr 1fr</code> — سه ستون مساوی',
                '<code>fr</code> — واحد کسری نسبت به فضای موجود'
            ]},
            { type: 'heading', num: '02', text: 'شبکه‌ی واکنش‌گرا' },
            { type: 'code', code: '.grid {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));\n  gap: 16px;\n}', lang: 'CSS', caption: 'خط جادویی', explain: [
                '<code>repeat()</code> — تکرار',
                '<code>auto-fit</code> — تعداد ستون خودکار بر اساس فضا',
                '<code>minmax(200px, 1fr)</code> — حداقل ۲۰۰px، حداکثر ۱fr'
            ]},
            { type: 'callout', title: 'چرا جادویی؟', text: 'این یک خط، شبکه‌ای می‌سازد که در موبایل یک‌ستونه، در تبلت دوستونه و در دسکتاپ چهارستونه است — بدون هیچ Media Query.' },
            { type: 'quiz', id: 'q-8-1', question: 'تفاوت auto-fit و auto-fill در Grid چیست؟', answer: '<code>auto-fit</code> ستون‌های خالی را جمع می‌کند تا آیتم‌ها پهن شوند. <code>auto-fill</code> فضاهای خالی را نگه می‌دارد. اگر ۳ آیتم دارید و فضا برای ۵ ستون است: با auto-fit سه ستون پهن می‌شوند، با auto-fill سه ستون باریک و دو ستون خالی.' },
            { type: 'project', title: 'گالری عکس', description: 'یک گالری با Grid که در موبایل یک‌ستونه و دسکتاپ سه‌ستونه باشد.', requirements: [
                'display: grid',
                'grid-template-columns با auto-fit',
                'minmax برای عرض حداقل',
                '۶ آیتم داخل گالری'
            ], starterCode: '<style>\n  .gallery {\n    display: grid;\n    grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));\n    gap: 12px;\n    padding: 20px;\n  }\n  .gallery div {\n    background: #333;\n    color: #f4b942;\n    padding: 40px 10px;\n    text-align: center;\n    border-radius: 8px;\n    font-size: 14px;\n  }\n</style>\n<div class="gallery">\n  <div>عکس ۱</div>\n  <div>عکس ۲</div>\n  <div>عکس ۳</div>\n  <div>عکس ۴</div>\n  <div>عکس ۵</div>\n  <div>عکس ۶</div>\n</div>' }
        ]
    },

    'lesson-09': {
        title: 'متغیرهای CSS و تم‌ها', level: 'متوسط', duration: '14 دقیقه', xp: 100,
        sections: [
            { type: 'intro', text: 'متغیرهای CSS مقادیر تکراری را یک‌جا تعریف می‌کنند.' },
            { type: 'heading', num: '01', text: 'تعریف متغیر' },
            { type: 'code', code: ':root {\n  --primary: #f4b942;\n  --radius: 8px;\n  --spacing: 16px;\n}', lang: 'CSS', caption: 'در :root', explain: [
                '<code>:root</code> — معادل html، در دسترس همه‌جا',
                '<code>--primary</code> — نام متغیر (با دو خط تیره)',
                '<code>#f4b942</code> — مقدار'
            ]},
            { type: 'heading', num: '02', text: 'استفاده' },
            { type: 'code', code: '.btn {\n  background: var(--primary);\n  border-radius: var(--radius);\n  padding: var(--spacing);\n}', lang: 'CSS', caption: 'با var()' },
            { type: 'heading', num: '03', text: 'تم روشن/تیره' },
            { type: 'code', code: ':root {\n  --bg: #fff;\n  --text: #1a1a1a;\n}\n.dark {\n  --bg: #0a0a0b;\n  --text: #fafafa;\n}\nbody {\n  background: var(--bg);\n  color: var(--text);\n}', lang: 'CSS', caption: 'تغییر تم با کلاس' },
            { type: 'quiz', id: 'q-9-1', question: 'چرا از متغیرهای CSS استفاده می‌کنیم؟', answer: 'سه دلیل اصلی: (۱) تغییر یک‌جا — اگر رنگ اصلی در ۱۰۰ جا استفاده شده و می‌خواهید عوض کنید، فقط مقدار متغیر را تغییر می‌دهید. (۲) تم‌دهی — با تعریف متغیر در کلاس‌های مختلف، می‌توانید تم روشن/تیره بسازید. (۳) خوانایی — --primary واضح‌تر از #f4b942 است.' },
            { type: 'project', title: 'تم شخصی', description: 'با متغیرهای CSS یک سیستم رنگ بسازید.', requirements: [
                ':root با ۴ متغیر (primary، bg، text، border)',
                '.card با استفاده از var()',
                '.btn با استفاده از var()',
                'یک کلاس .dark که مقادیر را تغییر دهد'
            ], starterCode: '<style>\n  :root {\n    --primary: #f4b942;\n    --bg: #ffffff;\n    --text: #1a1a1a;\n    --border: #e0e0e0;\n  }\n  body {\n    background: var(--bg);\n    color: var(--text);\n    padding: 40px;\n    font-family: Tahoma;\n  }\n  .card {\n    background: var(--bg);\n    border: 1px solid var(--border);\n    padding: 24px;\n    border-radius: 12px;\n    max-width: 300px;\n  }\n  .btn {\n    background: var(--primary);\n    border: none;\n    padding: 10px 20px;\n    border-radius: 6px;\n    cursor: pointer;\n    font-weight: 600;\n  }\n</style>\n<div class="card">\n  <h2>عنوان</h2>\n  <p>متن...</p>\n  <button class="btn">کلیک</button>\n</div>' }
        ]
    },

    'lesson-10': {
        title: 'ترنزیشن و انیمیشن', level: 'متوسط', duration: '16 دقیقه', xp: 100,
        sections: [
            { type: 'intro', text: 'حرکت و انیمیشن به رابط کاربری جان می‌دهند.' },
            { type: 'heading', num: '01', text: 'transition' },
            { type: 'code', code: '.btn {\n  background: #f4b942;\n  padding: 12px 24px;\n  transition: background 0.3s, transform 0.2s;\n}\n.btn:hover {\n  background: #ffcb5c;\n  transform: scale(1.05);\n}', lang: 'CSS', caption: 'دکمه با transition', explain: [
                '<code>transition</code> — تغییر تدریجی',
                '<code>background 0.3s</code> — رنگ در ۰.۳ ثانیه',
                '<code>transform 0.2s</code> — مقیاس در ۰.۲ ثانیه'
            ]},
            { type: 'heading', num: '02', text: 'transform' },
            { type: 'list', items: [
                '<strong>translate(x,y)</strong> — جابه‌جایی',
                '<strong>scale(n)</strong> — بزرگ/کوچک',
                '<strong>rotate(deg)</strong> — چرخش',
                '<strong>skew(deg)</strong> — کج کردن'
            ]},
            { type: 'heading', num: '03', text: '@keyframes' },
            { type: 'code', code: '@keyframes pulse {\n  0%, 100% {\n    transform: scale(1);\n    opacity: 1;\n  }\n  50% {\n    transform: scale(1.1);\n    opacity: 0.7;\n  }\n}\n.heart {\n  animation: pulse 1.5s ease-in-out infinite;\n}', lang: 'CSS', caption: 'قلب تپنده' },
            { type: 'quiz', id: 'q-10-1', question: 'تفاوت transition و animation چیست؟', answer: '<strong>transition</strong> واکنش به یک تغییر حالت است — مثلاً وقتی موس روی دکمه می‌رود. فقط بین دو حالت کار می‌کند. <strong>animation</strong> یک حرکت مستقل است که می‌تواند بی‌نهایت تکرار شود و از چند مرحله (@keyframes) تشکیل شود. برای hover از transition، برای حرکت خودکار از animation.' },
            { type: 'project', title: 'دکمه‌ی متحرک', description: 'یک دکمه بسازید که هم hover و هم انیمیشن داشته باشد.', requirements: [
                'transition روی دکمه',
                'تغییر رنگ هنگام hover',
                'افزایش مقیاس (scale) هنگام hover',
                'یک @keyframes ساده (مثل pulse)'
            ], starterCode: '<style>\n  @keyframes pulse {\n    0%, 100% {\n      transform: scale(1);\n    }\n    50% {\n      transform: scale(1.05);\n    }\n  }\n  .btn {\n    background: #f4b942;\n    color: #000;\n    border: none;\n    padding: 14px 32px;\n    border-radius: 8px;\n    font-size: 15px;\n    font-weight: 700;\n    cursor: pointer;\n    transition: background 0.3s, box-shadow 0.3s;\n    animation: pulse 2s infinite;\n  }\n  .btn:hover {\n    background: #ffcb5c;\n    box-shadow: 0 8px 24px rgba(244, 185, 66, 0.4);\n  }\n</style>\n<button class="btn">کلیک کن</button>' }
        ]
    },

    'lesson-11': {
        title: 'رنگ‌ها در CSS', level: 'متوسط', duration: '17 دقیقه', xp: 100,
        sections: [
            { type: 'intro', text: 'رنگ، مهم‌ترین ابزار ظاهری در CSS است. در این درس با چهار سیستم رنگ و اصول کنتراست آشنا می‌شوید.' },
            { type: 'heading', num: '01', text: 'چهار راه تعریف رنگ' },
            { type: 'list', items: [
                '<strong>نام رنگ:</strong> <code>red</code>, <code>blue</code>, <code>teal</code> — ساده ولی محدود',
                '<strong>HEX (هگزادسیمال):</strong> <code>#ff0000</code> — پرکاربردترین',
                '<strong>RGB:</strong> <code>rgb(255, 0, 0)</code> — سه عدد بین ۰ تا ۲۵۵',
                '<strong>HSL:</strong> <code>hsl(0, 100%, 50%)</code> — Hue, Saturation, Lightness'
            ]},
            { type: 'heading', num: '02', text: 'HEX — پرکاربردترین' },
            { type: 'paragraph', text: 'HEX از شش کاراکتر تشکیل می‌شود: <strong>#RRGGBB</strong>. هر جفت، یک رنگ (قرمز، سبز، آبی) با مقدار ۰۰ تا FF.' },
            { type: 'code', code: '.red {\n  color: #ff0000;\n}\n.green {\n  color: #00ff00;\n}\n.blue {\n  color: #0000ff;\n}\n.white {\n  color: #ffffff;\n}\n.black {\n  color: #000000;\n}', lang: 'CSS', caption: 'شش رنگ پایه در HEX', explain: [
                '<code>#ff0000</code> — قرمز: FF قرمز، 00 سبز، 00 آبی',
                '<code>#00ff00</code> — سبز',
                '<code>#0000ff</code> — آبی',
                'هر جفت رقم، یکی از کانال‌های RGB'
            ]},
            { type: 'heading', num: '03', text: 'HSL — شهودی‌ترین' },
            { type: 'list', items: [
                '<strong>Hue (رنگ):</strong> ۰ تا ۳۶۰ درجه — ۰ قرمز، ۱۲۰ سبز، ۲۴۰ آبی',
                '<strong>Saturation (اشباع):</strong> ۰٪ خاکستری تا ۱۰۰٪ رنگ خالص',
                '<strong>Lightness (روشنایی):</strong> ۰٪ سیاه، ۵۰٪ رنگ اصلی، ۱۰۰٪ سفید'
            ]},
            { type: 'code', code: '.red {\n  background: hsl(0, 100%, 50%);\n}\n.orange {\n  background: hsl(30, 100%, 50%);\n}\n.yellow {\n  background: hsl(60, 100%, 50%);\n}\n.green {\n  background: hsl(120, 100%, 50%);\n}\n.blue {\n  background: hsl(240, 100%, 50%);\n}', lang: 'CSS', caption: 'چرخه‌ی رنگ در HSL', explain: [
                'هر ۳۰ درجه، یک رنگ جدید',
                '<code>hsl(0, 100%, 50%)</code> = قرمز خالص',
                '<code>hsl(120, 100%, 50%)</code> = سبز خالص',
                '<code>hsl(240, 100%, 50%)</code> = آبی خالص'
            ]},
            { type: 'heading', num: '04', text: 'پالت رنگ — شناخت بصری' },
            { type: 'paragraph', text: 'این رنگ‌ها را در ذهن حفظ کنید — پرکاربردترین رنگ‌ها در طراحی وب. روی هر رنگ بزنید تا کد HEX آن کپی شود:' },
            { type: 'color-palette', colors: [
                { hex: '#ef4444', name: 'قرمز' },
                { hex: '#f97316', name: 'نارنجی' },
                { hex: '#eab308', name: 'زرد' },
                { hex: '#22c55e', name: 'سبز' },
                { hex: '#06b6d4', name: 'فیروزه' },
                { hex: '#3b82f6', name: 'آبی' },
                { hex: '#8b5cf6', name: 'بنفش' },
                { hex: '#ec4899', name: 'صورتی' },
                { hex: '#64748b', name: 'خاکستری' },
                { hex: '#f4b942', name: 'طلایی' },
                { hex: '#0a0a0b', name: 'سیاه' },
                { hex: '#fafafa', name: 'سفید' }
            ]},
            { type: 'heading', num: '05', text: 'شفافیت — rgba و hsla' },
            { type: 'code', code: '.overlay {\n  background: rgba(0, 0, 0, 0.5);\n}\n.soft-red {\n  background: hsla(0, 100%, 50%, 0.3);\n}', lang: 'CSS', caption: 'رنگ‌های شفاف', explain: [
                '<code>rgba(0, 0, 0, 0.5)</code> — سیاه با ۵۰٪ شفافیت',
                '<code>hsla(0, 100%, 50%, 0.3)</code> — قرمز با ۳۰٪ شفافیت',
                'عدد چهارم = شفافیت (آلفا)، از ۰ تا ۱'
            ]},
            { type: 'heading', num: '06', text: 'کنتراست — مهم‌ترین قاعده' },
            { type: 'paragraph', text: 'رنگ متن باید از پس‌زمینه کاملاً متمایز باشد. استاندارد WCAG می‌گوید حداقل نسبت کنتراست <strong>۴.۵:۱</strong> برای متن معمولی و <strong>۳:۱</strong> برای متن بزرگ (بالای ۱۸px).' },
            { type: 'callout', title: 'قاعده‌ی طلایی', text: 'برای خوانایی: متن تیره روی پس‌زمینه‌ی روشن، یا متن روشن روی پس‌زمینه‌ی تیره. هرگز متن روشن روی پس‌زمینه‌ی روشن یا متن تیره روی تیره نگذارید.' },
            { type: 'quiz', id: 'q-11-1', question: 'کد رنگ #ff0000 چه رنگی است و چرا؟', answer: 'قرمز خالص. کد HEX از سه جفت رقم تشکیل شده: #RRGGBB. اینجا RR=ff (حداکثر قرمز)، GG=00 (صفر سبز)، BB=00 (صفر آبی). وقتی فقط کانال قرمز در حداکثر است، نتیجه قرمز خالص می‌شود.' },
            { type: 'quiz', id: 'q-11-2', question: 'چرا رنگ متن خاکستری روشن روی پس‌زمینه‌ی سفید بد است؟', answer: 'چون کنتراست کافی ندارد (کمتر از ۴.۵:۱ استاندارد WCAG). افرادی با ضعف بینایی یا در نور زیاد نمی‌توانند آن را بخوانند. راه‌حل: خاکستری تیره‌تر مثل <code>#666</code> یا <code>#555</code> استفاده کنید — کنتراست بالاتری با سفید دارند.' },
            { type: 'quiz', id: 'q-11-3', question: 'چطور یک رنگ با ۵۰٪ شفافیت بسازید؟', answer: 'دو راه: (۱) <code>rgba(255, 0, 0, 0.5)</code> برای قرمز نیمه‌شفاف — عدد چهارم آلفا است. (۲) <code>hsla(0, 100%, 50%, 0.5)</code>. در هر دو، مقدار <code>0.5</code> یعنی ۵۰٪ شفاف. برای ۰٪ (کاملاً محو) از ۰ و برای ۱۰۰٪ پر از ۱ استفاده کنید.' },
            { type: 'project', title: 'پالت رنگی شخصی', description: 'یک سیستم رنگ با استفاده از متغیرهای CSS بسازید.', requirements: [
                ':root با ۵ رنگ (primary، secondary، bg، text، border)',
                '.card که از این رنگ‌ها استفاده کند',
                'دکمه‌ای با رنگ primary',
                'متن خاکستری با کنتراست کافی'
            ], starterCode: '<style>\n  :root {\n    --primary: #f4b942;\n    --bg: #fafafa;\n    --text: #1a1a1a;\n    --muted: #666666;\n    --border: #e0e0e0;\n  }\n  body {\n    background: var(--bg);\n    color: var(--text);\n    font-family: Tahoma, sans-serif;\n    padding: 40px;\n  }\n  .card {\n    background: white;\n    border: 1px solid var(--border);\n    padding: 24px;\n    border-radius: 12px;\n    max-width: 320px;\n  }\n  .card p {\n    color: var(--muted);\n  }\n  .btn {\n    background: var(--primary);\n    color: #000;\n    border: none;\n    padding: 12px 24px;\n    border-radius: 6px;\n    font-weight: 600;\n    cursor: pointer;\n  }\n</style>\n<div class="card">\n  <h2>کارت</h2>\n  <p>این متن با رنگ muted است.</p>\n  <button class="btn">کلیک</button>\n</div>' }
        ]
    },

    'lesson-12': {
        title: 'واحدهای اندازه در CSS', level: 'متوسط', duration: '15 دقیقه', xp: 100,
        sections: [
            { type: 'intro', text: 'انتخاب واحد درست، تفاوت بین یک طرح شکسته و یک طرح واکنش‌گرای بی‌نقص است.' },
            { type: 'heading', num: '01', text: 'واحدهای مطلق: px' },
            { type: 'paragraph', text: '<strong>px (پیکسل)</strong> واحد ثابت است — همیشه همان اندازه. برای مرزها، سایه‌ها، و آیکون‌ها عالی است.' },
            { type: 'code', code: '.border {\n  border: 1px solid #ccc;\n}\n.icon {\n  width: 24px;\n  height: 24px;\n}', lang: 'CSS', caption: 'مثال‌های خوب برای px' },
            { type: 'heading', num: '02', text: 'واحدهای نسبی: em و rem' },
            { type: 'list', items: [
                '<strong>rem (root em):</strong> نسبت به فونت ریشه (html). اگر html=16px باشد، 1rem=16px.',
                '<strong>em:</strong> نسبت به فونت والد. اگر والد font-size:20px باشد، 1em=20px.'
            ]},
            { type: 'code', code: 'html {\n  font-size: 16px;\n}\nh1 {\n  font-size: 2rem;\n}\np {\n  font-size: 1rem;\n}', lang: 'CSS', caption: 'em و rem در عمل', explain: [
                '<code>2rem</code> — همیشه ۲ برابر فونت ریشه',
                '<code>1em</code> — برابر فونت والد',
                'اگر کاربر فونت مرورگر را بزرگ کند، rem هم بزرگ می‌شود — دسترسی‌پذیری!'
            ]},
            { type: 'heading', num: '03', text: 'واحدهای نسبی به صفحه: % ، vh ، vw' },
            { type: 'list', items: [
                '<strong>%:</strong> نسبت به والد. width:50% یعنی نصف عرض والد.',
                '<strong>vh (viewport height):</strong> 1vh = ۱٪ ارتفاع پنجره. 100vh = کل ارتفاع.',
                '<strong>vw (viewport width):</strong> 1vw = ۱٪ عرض پنجره. 100vw = کل عرض.'
            ]},
            { type: 'code', code: '.hero {\n  height: 100vh;\n  width: 100%;\n}\n.half {\n  width: 50%;\n}', lang: 'CSS', caption: 'مثال‌های vh و %', explain: [
                '<code>height: 100vh</code> — تمام ارتفاع صفحه',
                '<code>width: 100%</code> — تمام عرض والد',
                'مناسب برای بخش hero'
            ]},
            { type: 'heading', num: '04', text: 'کدام واحد، کجا؟' },
            { type: 'list', items: [
                '<strong>font-size:</strong> از rem استفاده کنید (دسترسی‌پذیری).',
                '<strong>padding/margin:</strong> از rem یا px.',
                '<strong>width/height عناصر:</strong> از % یا px.',
                '<strong>ارتفاع بخش hero:</strong> از vh.',
                '<strong>border، box-shadow:</strong> از px.'
            ]},
            { type: 'callout', title: 'قاعده‌ی طلایی', text: 'برای متن‌ها و فاصله‌ها از rem، برای مرزها و سایه‌ها از px، برای چیدمان از % و vh/vw. این ترکیب ۹۰٪ نیازهای شما را پوشش می‌دهد.' },
            { type: 'quiz', id: 'q-12-1', question: 'اگر html { font-size: 16px } باشد، 2.5rem چند پیکسل است؟', answer: '۴۰ پیکسل. محاسبه: 2.5 × 16 = 40. اگر html را به 20px تغییر دهید، خودکار به ۵۰ پیکسل می‌شود. این مزیت اصلی rem نسبت به px است — کل طرح با یک تغییر، متناسب بزرگ یا کوچک می‌شود.' },
            { type: 'quiz', id: 'q-12-2', question: 'تفاوت em و rem را با مثال توضیح دهید.', answer: 'اگر یک div با font-size:20px و padding:1em داشته باشید، padding آن ۲۰ پیکسل می‌شود (۱ برابر فونت خودش). اما padding:1rem در همان div، ۱۶ پیکسل می‌شود (۱ برابر فونت ریشه). em به والد وابسته است، rem همیشه به ریشه. برای پیش‌بینی‌پذیری، از rem استفاده کنید.' },
            { type: 'project', title: 'صفحه با واحدهای ترکیبی', description: 'از واحدهای مختلف به‌درستی استفاده کنید.', requirements: [
                'html { font-size: 16px }',
                'h1 با 2.5rem',
                'p با 1rem',
                'بخش hero با height: 100vh',
                'دکمه با padding در rem'
            ], starterCode: '<style>\n  html {\n    font-size: 16px;\n  }\n  body {\n    font-family: Tahoma;\n    margin: 0;\n    background: #0a0a0b;\n    color: #fafafa;\n  }\n  .hero {\n    height: 100vh;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    justify-content: center;\n    text-align: center;\n    padding: 2rem;\n  }\n  h1 {\n    font-size: 2.5rem;\n    color: #f4b942;\n    margin: 0 0 1rem;\n  }\n  p {\n    font-size: 1.125rem;\n    color: #a8a8b3;\n    margin: 0 0 2rem;\n  }\n  button {\n    padding: 0.75rem 2rem;\n    font-size: 1rem;\n    background: #f4b942;\n    color: #000;\n    border: none;\n    border-radius: 0.5rem;\n    cursor: pointer;\n    font-weight: 600;\n  }\n</style>\n<div class="hero">\n  <h1>سلام</h1>\n  <p>این یک hero است.</p>\n  <button>کلیک</button>\n</div>' }
        ]
    },

    'lesson-13': {
        title: 'Position و Z-index', level: 'متوسط', duration: '18 دقیقه', xp: 100,
        sections: [
            { type: 'intro', text: 'با position می‌توانید عناصر را آزادانه جای‌گذاری کنید — خارج از جریان عادی صفحه.' },
            { type: 'heading', num: '01', text: 'پنج مقدار position' },
            { type: 'list', items: [
                '<strong>static</strong> — پیش‌فرض. هیچ تنظیمی اثر ندارد.',
                '<strong>relative</strong> — نسبت به جای اصلی خودش جابه‌جا می‌شود.',
                '<strong>absolute</strong> — نسبت به نزدیک‌ترین والدِ position‌دار.',
                '<strong>fixed</strong> — نسبت به پنجره (viewport). هنگام اسکرول ثابت می‌ماند.',
                '<strong>sticky</strong> — بین static و fixed.'
            ]},
            { type: 'heading', num: '02', text: 'relative + absolute' },
            { type: 'code', code: '<style>\n  .parent {\n    position: relative;\n    width: 300px;\n    height: 200px;\n    background: #f5f5f5;\n  }\n  .badge {\n    position: absolute;\n    top: 10px;\n    right: 10px;\n    background: #ef4444;\n    color: white;\n    padding: 4px 10px;\n    border-radius: 4px;\n  }\n</style>\n<div class="parent">\n  <span class="badge">جدید</span>\n</div>', lang: 'HTML', caption: 'نشان روی کارت', explain: [
                '<code>position: relative</code> روی والد — تعیین نقطه‌ی مرجع',
                '<code>position: absolute</code> روی فرزند — موقعیت نسبت به والد',
                '<code>top: 10px; right: 10px</code> — ۱۰ پیکسل از بالا-راست'
            ]},
            { type: 'heading', num: '03', text: 'fixed' },
            { type: 'code', code: '.navbar {\n  position: fixed;\n  top: 0;\n  left: 0;\n  right: 0;\n  height: 60px;\n  background: white;\n  z-index: 100;\n}', lang: 'CSS', caption: 'نوار چسبیده به بالا', explain: [
                '<code>position: fixed</code> — ثابت روی viewport',
                '<code>top: 0; left: 0; right: 0</code> — کشیده در کل عرض',
                'هنگام اسکرول، همیشه بالای صفحه می‌ماند'
            ]},
            { type: 'heading', num: '04', text: 'z-index — لایه‌بندی' },
            { type: 'paragraph', text: 'اگر دو عنصر روی هم قرار بگیرند، z-index تعیین می‌کند کدام بالا باشد. عدد بزرگ‌تر = بالاتر.' },
            { type: 'code', code: '.modal {\n  position: fixed;\n  z-index: 1000;\n}\n.tooltip {\n  position: absolute;\n  z-index: 2000;\n}', lang: 'CSS', caption: 'z-index', explain: [
                '<code>z-index</code> — فقط روی عناصر position‌دار کار می‌کند',
                'ابزار کاربردی: ۱۰۰ برای navbar، ۱۰۰۰ برای modal، ۲۰۰۰ برای tooltip'
            ]},
            { type: 'quiz', id: 'q-13-1', question: 'تفاوت absolute و fixed چیست؟', answer: '<strong>absolute</strong> نسبت به نزدیک‌ترین والدِ position‌دار موقعیت می‌گیرد و با اسکرول صفحه حرکت می‌کند. <strong>fixed</strong> نسبت به پنجره (viewport) موقعیت می‌گیرد و هنگام اسکرول ثابت می‌ماند. برای modal، tooltip، و navbar بالای صفحه از fixed استفاده کنید.' },
            { type: 'quiz', id: 'q-13-2', question: 'چرا position:absolute بدون والد relative خیلی وقت‌ها اشتباه کار می‌کند؟', answer: 'چون absolute نسبت به نزدیک‌ترین والدِ position‌دار موقعیت می‌گیرد. اگر هیچ والدی position نداشته باشد، نسبت به <code>&lt;body&gt;</code> یا <code>&lt;html&gt;</code> موقعیت می‌گیرد، که معمولاً کل صفحه است. راه‌حل: والد را با <code>position:relative</code> تنظیم کنید تا absolute به آن محدود شود.' },
            { type: 'project', title: 'کارت با نشان', description: 'کارتی بسازید که یک نشان (badge) در گوشه‌ی بالا-راست داشته باشد.', requirements: [
                'کارت با position: relative',
                'نشان با position: absolute',
                'نشان در گوشه‌ی بالا-راست',
                'استایل زیبا برای هر دو'
            ], starterCode: '<style>\n  body {\n    font-family: Tahoma;\n    background: #f0f0f0;\n    padding: 40px;\n  }\n  .card {\n    position: relative;\n    background: white;\n    width: 280px;\n    padding: 24px;\n    border-radius: 12px;\n    box-shadow: 0 4px 16px rgba(0, 0, 0, 0.08);\n  }\n  .card h2 {\n    margin: 0 0 8px;\n  }\n  .card p {\n    color: #666;\n    margin: 0;\n  }\n  .badge {\n    position: absolute;\n    top: -8px;\n    right: -8px;\n    background: #ef4444;\n    color: white;\n    padding: 4px 12px;\n    border-radius: 12px;\n    font-size: 12px;\n    font-weight: 700;\n  }\n</style>\n<div class="card">\n  <span class="badge">جدید</span>\n  <h2>عنوان کارت</h2>\n  <p>توضیحات</p>\n</div>' }
        ]
    },

    'lesson-14': {
        title: 'انتخابگرهای پیشرفته CSS', level: 'پیشرفته', duration: '16 دقیقه', xp: 150,
        sections: [
            { type: 'intro', text: 'انتخابگرهای ساده (تگ، کلاس، شناسه) فقط شروع کارند. CSS ابزارهای قدرتمندتری دارد.' },
            { type: 'heading', num: '01', text: 'شبه‌کلاس‌های ساختاری' },
            { type: 'code', code: 'li:first-child {\n  font-weight: bold;\n}\nli:last-child {\n  border-bottom: none;\n}\nli:nth-child(2) {\n  color: red;\n}\nli:nth-child(odd) {\n  background: #f0f0f0;\n}\nli:nth-child(even) {\n  background: #fff;\n}', lang: 'CSS', caption: 'انتخاب بر اساس موقعیت', explain: [
                '<code>:first-child</code> — اولین فرزند',
                '<code>:last-child</code> — آخرین فرزند',
                '<code>:nth-child(2)</code> — فرزند دوم',
                '<code>:nth-child(odd/even)</code> — فرد/زوج'
            ]},
            { type: 'heading', num: '02', text: ':not — استثنا' },
            { type: 'code', code: 'li:not(:last-child) {\n  border-bottom: 1px solid #ccc;\n}', lang: 'CSS', caption: 'همه به‌جز آخرین' },
            { type: 'heading', num: '03', text: ':is و :where' },
            { type: 'code', code: 'h1,\nh2,\nh3 {\n  color: blue;\n}\n/* معادل: */\n:is(h1, h2, h3) {\n  color: blue;\n}', lang: 'CSS', caption: 'کوتاه‌نویسی' },
            { type: 'heading', num: '04', text: ':hover ، :focus ، :active' },
            { type: 'list', items: [
                '<strong>:hover</strong> — وقتی موس روی عنصر است',
                '<strong>:focus</strong> — وقتی فیلد فوکوس گرفته',
                '<strong>:active</strong> — در حال کلیک',
                '<strong>:disabled</strong> — دکمه غیرفعال'
            ]},
            { type: 'heading', num: '05', text: 'انتخابگر ویژگی' },
            { type: 'code', code: 'input[type="email"] {\n  border-color: blue;\n}\na[href^="https"] {\n  color: green;\n}\na[href$=".pdf"] {\n  color: red;\n}\na[href*="google"] {\n  text-decoration: underline;\n}', lang: 'CSS', caption: 'انتخاب بر اساس صفت', explain: [
                '<code>[type="email"]</code> — دقیقاً برابر',
                '<code>[href^="https"]</code> — شروع با https',
                '<code>[href$=".pdf"]</code> — پایان با .pdf',
                '<code>[href*="google"]</code> — شامل google'
            ]},
            { type: 'quiz', id: 'q-14-1', question: 'تفاوت :is و :where چیست؟', answer: 'از نظر عملکردی مشابه‌اند. تفاوت در <strong>Specificity</strong> است: :is مقداری برابر با بالاترین انتخابگر داخلی دارد، اما :where همیشه specificity صفر دارد. برای بازنویسی آسان استایل‌ها، :where بهتر است.' },
            { type: 'quiz', id: 'q-14-2', question: 'چطور به همه‌ی آیتم‌های زوج یک لیست رنگ متفاوت بدهیم؟', answer: 'با <code>li:nth-child(even) { background: #f0f0f0; }</code>. شبه‌کلاس <code>:nth-child(even)</code> فقط فرزندان زوج (۲، ۴، ۶...) را هدف می‌گیرد. برای فرد از <code>odd</code> استفاده کنید. این تکنیک برای راه‌راه کردن جدول‌ها بسیار پرکاربرد است.' },
            { type: 'project', title: 'لیست راه‌راه و ویژگی‌دار', description: 'یک لیست با آیتم‌های مختلف بسازید و از انتخابگرها استفاده کنید.', requirements: [
                'لیست با ۵ آیتم',
                'آیتم‌های زوج پس‌زمینه‌ی متفاوت',
                'آخرین آیتم بدون border',
                'لینک‌های https سبز رنگ',
                'لینک pdf قرمز'
            ], starterCode: '<style>\n  body {\n    font-family: Tahoma;\n    padding: 40px;\n  }\n  ul {\n    list-style: none;\n    padding: 0;\n    max-width: 300px;\n  }\n  li {\n    padding: 12px 16px;\n    border-bottom: 1px solid #e0e0e0;\n  }\n  li:nth-child(odd) {\n    background: #f9f9f9;\n  }\n  li:last-child {\n    border-bottom: none;\n  }\n  a[href^="https"] {\n    color: #22c55e;\n    text-decoration: none;\n  }\n  a[href$=".pdf"] {\n    color: #ef4444;\n    text-decoration: none;\n  }\n</style>\n<ul>\n  <li><a href="https://example.com">سایت ۱</a></li>\n  <li><a href="https://example.org">سایت ۲</a></li>\n  <li><a href="file.pdf">فایل PDF</a></li>\n  <li><a href="https://example.net">سایت ۳</a></li>\n  <li>متن ساده</li>\n</ul>' }
        ]
    },

    'lesson-15': {
        title: 'HTML پیشرفته — رسانه و فرم', level: 'پیشرفته', duration: '17 دقیقه', xp: 150,
        sections: [
            { type: 'intro', text: 'در این درس تگ‌های رسانه (ویدیو، صوت) و فیلدهای فرم پیشرفته را می‌شناسیم.' },
            { type: 'heading', num: '01', text: 'ویدیو' },
            { type: 'code', code: '<video controls width="400">\n  <source src="movie.mp4" type="video/mp4">\n  مرورگر شما ویدیو را پشتیبانی نمی‌کند.\n</video>', lang: 'HTML', caption: 'پخش ویدیو', explain: [
                '<code>controls</code> — دکمه‌های پخش',
                '<code>width</code> — عرض نمایش',
                '<code>&lt;source&gt;</code> — فرمت‌های مختلف',
                'متن داخل — برای مرورگرهای قدیمی'
            ]},
            { type: 'heading', num: '02', text: 'صوت' },
            { type: 'code', code: '<audio controls>\n  <source src="music.mp3" type="audio/mpeg">\n</audio>', lang: 'HTML', caption: 'پخش صدا' },
            { type: 'heading', num: '03', text: 'iframe — جاسازی' },
            { type: 'code', code: '<iframe\n  src="https://example.com"\n  width="100%"\n  height="400"\n  title="صفحه‌ی نمونه">\n</iframe>', lang: 'HTML', caption: 'جاسازی محتوا', explain: [
                'iframe — پنجره‌ای به یک صفحه‌ی دیگر',
                '<code>title</code> برای دسترسی‌پذیری ضروری است',
                'پرکاربرد برای YouTube، نقشه، توییتر'
            ]},
            { type: 'heading', num: '04', text: 'فرم — select' },
            { type: 'code', code: '<label for="city">شهر:</label>\n<select id="city" name="city">\n  <option value="">انتخاب کنید</option>\n  <option value="tehran">تهران</option>\n  <option value="isfahan">اصفهان</option>\n  <option value="shiraz">شیراز</option>\n</select>', lang: 'HTML', caption: 'لیست کشویی', explain: [
                '<code>&lt;select&gt;</code> — منوی کشویی',
                '<code>&lt;option&gt;</code> — هر آیتم',
                '<code>value</code> — مقداری که ارسال می‌شود'
            ]},
            { type: 'heading', num: '05', text: 'فرم — textarea' },
            { type: 'code', code: '<label for="msg">پیام:</label>\n<textarea id="msg" name="msg" rows="5" placeholder="پیام خود را بنویسید...">\n</textarea>', lang: 'HTML', caption: 'متن چندخطی', explain: [
                'textarea برای متن چندخطی',
                '<code>rows</code> — تعداد خطوط اولیه',
                'برخلاف input، تگ بسته دارد'
            ]},
            { type: 'heading', num: '06', text: 'fieldset و legend' },
            { type: 'code', code: '<fieldset>\n  <legend>اطلاعات شخصی</legend>\n  <label>نام:\n    <input type="text">\n  </label>\n  <label>ایمیل:\n    <input type="email">\n  </label>\n</fieldset>', lang: 'HTML', caption: 'گروه‌بندی فرم', explain: [
                '<code>fieldset</code> — دور یک گروه فیلد خط می‌کشد',
                '<code>legend</code> — عنوان گروه',
                'برای فرم‌های طولانی، خوانایی را بالا می‌برد'
            ]},
            { type: 'quiz', id: 'q-15-1', question: 'چرا برای iframe حتماً باید title بنویسیم؟', answer: 'چون صفحه‌خوان‌ها به کاربر نابینا فقط می‌گویند «iframe» — بدون عنوان، کاربر نمی‌داند داخلش چیست. با <code>title="ویدیوی آموزشی HTML"</code>، صفحه‌خوان اعلام می‌کند «iframe با عنوان ویدیوی آموزشی HTML». این یکی از الزامات WCAG برای دسترسی‌پذیری است.' },
            { type: 'quiz', id: 'q-15-2', question: 'تفاوت input و textarea چیست؟', answer: '<code>&lt;input&gt;</code> یک فیلد تک‌خطی است و بسته نمی‌شود. <code>&lt;textarea&gt;</code> فیلد چندخطی با تگ باز و بسته است و می‌تواند متن طولانی بگیرد. برای ایمیل، نام، شماره از input. برای پیام، توضیحات، نظرات از textarea.' },
            { type: 'project', title: 'فرم تماس کامل', description: 'یک فرم تماس با فیلدهای مختلف بسازید.', requirements: [
                'input برای نام (text)',
                'input برای ایمیل (email)',
                'select برای موضوع',
                'textarea برای پیام',
                'همه با label و required'
            ], starterCode: '<style>\n  body {\n    font-family: Tahoma;\n    padding: 40px;\n    background: #f5f5f5;\n  }\n  form {\n    max-width: 400px;\n    background: white;\n    padding: 24px;\n    border-radius: 12px;\n    box-shadow: 0 4px 16px rgba(0, 0, 0, 0.08);\n  }\n  label {\n    display: block;\n    font-size: 13px;\n    margin: 12px 0 4px;\n    font-weight: 600;\n  }\n  input,\n  select,\n  textarea {\n    width: 100%;\n    padding: 10px 12px;\n    border: 1px solid #ddd;\n    border-radius: 6px;\n    font-family: inherit;\n    font-size: 14px;\n    box-sizing: border-box;\n  }\n  textarea {\n    min-height: 100px;\n    resize: vertical;\n  }\n  button {\n    width: 100%;\n    margin-top: 16px;\n    background: #f4b942;\n    color: #000;\n    border: none;\n    padding: 12px;\n    border-radius: 6px;\n    font-weight: 700;\n    cursor: pointer;\n  }\n</style>\n<form>\n  <label>نام</label>\n  <input type="text" required>\n  <label>ایمیل</label>\n  <input type="email" required>\n  <label>موضوع</label>\n  <select required>\n    <option value="">انتخاب کنید</option>\n    <option>سوال</option>\n    <option>پیشنهاد</option>\n    <option>انتقاد</option>\n  </select>\n  <label>پیام</label>\n  <textarea required></textarea>\n  <button type="submit">ارسال</button>\n</form>' }
        ]
    },

    'lesson-16': {
        title: 'Flexbox پیشرفته', level: 'پیشرفته', duration: '16 دقیقه', xp: 150,
        sections: [
            { type: 'intro', text: 'در این درس با ویژگی‌های پیشرفته‌ی Flexbox آشنا می‌شوید.' },
            { type: 'heading', num: '01', text: 'flex shorthand' },
            { type: 'paragraph', text: 'مخفف سه ویژگی: <strong>flex-grow</strong> (چقدر رشد کند)، <strong>flex-shrink</strong> (چقدر کوچک شود)، <strong>flex-basis</strong> (اندازه‌ی اولیه).' },
            { type: 'code', code: '.item {\n  flex: 1;\n}\n.item-2 {\n  flex: 2;\n}\n.fixed {\n  flex: 0 0 200px;\n}\n.auto {\n  flex: 1 1 auto;\n}', lang: 'CSS', caption: 'flex shorthand', explain: [
                '<code>flex: 1</code> — برابر 1 1 0، همه یکسان رشد می‌کنند',
                '<code>flex: 2</code> — دو برابر بقیه فضا می‌گیرد',
                '<code>flex: 0 0 200px</code> — هرگز رشد/کوچک نمی‌شود، همیشه ۲۰۰'
            ]},
            { type: 'heading', num: '02', text: 'align-self — تراز تک‌آیتم' },
            { type: 'code', code: '.container {\n  display: flex;\n  align-items: center;\n  height: 200px;\n}\n.special {\n  align-self: flex-start;\n}', lang: 'CSS', caption: 'تراز خاص', explain: [
                '<code>align-items</code> روی والد — همه را تنظیم می‌کند',
                '<code>align-self</code> روی فرزند — فقط یک آیتم را',
                'مقادیر: flex-start, flex-end, center, stretch, baseline'
            ]},
            { type: 'heading', num: '03', text: 'order — ترتیب نمایش' },
            { type: 'code', code: '.first {\n  order: 1;\n}\n.second {\n  order: 2;\n}\n.third {\n  order: 0;\n}', lang: 'CSS', caption: 'تغییر ترتیب بدون تغییر HTML' },
            { type: 'heading', num: '04', text: 'flex-wrap' },
            { type: 'code', code: '.gallery {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 12px;\n}\n.card {\n  flex: 1 1 200px;\n}', lang: 'CSS', caption: 'شکستن به خط بعد', explain: [
                '<code>flex-wrap: wrap</code> — اجازه‌ی خط جدید',
                '<code>flex: 1 1 200px</code> — حداقل ۲۰۰px، قابل رشد',
                'ترکیب عالی برای گالری واکنش‌گرا'
            ]},
            { type: 'quiz', id: 'q-16-1', question: 'تفاوت flex:1 و flex:0 0 200px چیست؟', answer: '<code>flex: 1</code> یعنی «آزادانه رشد کن تا فضای موجود پر شود» — عرض متغیر. <code>flex: 0 0 200px</code> یعنی «نه رشد کن، نه کوچک شو، همیشه ۲۰۰ پیکسل باش». اولی برای چیدمان‌های واکنش‌گرا، دومی برای ستون sidebar با عرض ثابت.' },
            { type: 'quiz', id: 'q-16-2', question: 'چطور یک آیتم را وسط بقیه در Flexbox پایین بیاوریم؟', answer: 'از <code>align-self: flex-end</code> روی همان آیتم استفاده کنید. align-self به هر آیتم اجازه می‌دهد تراز خودش را جدا از align-items والد داشته باشد. برای بردن به بالا: flex-start. برای وسط: center.' },
            { type: 'project', title: 'گالری متوازن', description: 'گالری با کارت‌های flex که در موبایل زیر هم و در دسکتاپ کنار هم قرار می‌گیرند.', requirements: [
                'flex-wrap: wrap روی گالری',
                'flex: 1 1 200px برای کارت‌ها',
                'gap مناسب',
                'مرتب‌سازی خودکار'
            ], starterCode: '<style>\n  body {\n    padding: 20px;\n    font-family: Tahoma;\n    background: #f5f5f5;\n  }\n  .gallery {\n    display: flex;\n    flex-wrap: wrap;\n    gap: 16px;\n    max-width: 800px;\n    margin: 0 auto;\n  }\n  .card {\n    flex: 1 1 200px;\n    background: white;\n    padding: 24px;\n    border-radius: 12px;\n    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);\n    text-align: center;\n  }\n</style>\n<div class="gallery">\n  <div class="card">کارت ۱</div>\n  <div class="card">کارت ۲</div>\n  <div class="card">کارت ۳</div>\n  <div class="card">کارت ۴</div>\n  <div class="card">کارت ۵</div>\n</div>' }
        ]
    },

    'lesson-17': {
        title: 'Grid پیشرفته', level: 'پیشرفته', duration: '18 دقیقه', xp: 150,
        sections: [
            { type: 'intro', text: 'در این درس با grid-template-areas و تکنیک‌های حرفه‌ای Grid آشنا می‌شوید.' },
            { type: 'heading', num: '01', text: 'grid-template-areas — چیدمان بصری' },
            { type: 'code', code: '.layout {\n  display: grid;\n  grid-template-areas:\n    "header header"\n    "sidebar main"\n    "footer footer";\n  grid-template-columns: 200px 1fr;\n  grid-template-rows: auto 1fr auto;\n  min-height: 100vh;\n}\n.header {\n  grid-area: header;\n}\n.sidebar {\n  grid-area: sidebar;\n}\n.main {\n  grid-area: main;\n}\n.footer {\n  grid-area: footer;\n}', lang: 'CSS', caption: 'چیدمان کل صفحه', explain: [
                '<code>grid-template-areas</code> — نقشه‌ی چیدمان با اسم',
                'هر رشته یک سطر است',
                'تکرار اسم = گسترش از آن سلول',
                '<code>grid-area: header</code> — تخصیص عنصر به ناحیه'
            ]},
            { type: 'heading', num: '02', text: 'grid-auto-flow' },
            { type: 'code', code: '.grid {\n  display: grid;\n  grid-template-columns: repeat(3, 1fr);\n  grid-auto-rows: minmax(100px, auto);\n}', lang: 'CSS', caption: 'سطرهای خودکار', explain: [
                '<code>grid-auto-rows</code> — ارتفاع سطرهای اضافه',
                '<code>minmax(min, max)</code> — حداقل، حداکثر'
            ]},
            { type: 'heading', num: '03', text: 'گسترش سلول‌ها' },
            { type: 'code', code: '.wide {\n  grid-column: span 2;\n}\n.tall {\n  grid-row: span 2;\n}\n.hero {\n  grid-column: 1 / -1;\n}', lang: 'CSS', caption: 'span برای گسترش', explain: [
                '<code>grid-column: span 2</code> — ۲ ستون را بگیر',
                '<code>1 / -1</code> — از اولین تا آخرین ستون'
            ]},
            { type: 'heading', num: '04', text: 'min-content، max-content، auto' },
            { type: 'list', items: [
                '<strong>min-content</strong> — کوچک‌ترین عرض ممکن (باریک‌ترین کلمه)',
                '<strong>max-content</strong> — بزرگ‌ترین عرض (بلندترین خط)',
                '<strong>auto</strong> — خودکار بر اساس محتوا',
                '<strong>fit-content(300px)</strong> — حداکثر ۳۰۰px، کمتر اگر محتوا کمتر'
            ]},
            { type: 'quiz', id: 'q-17-1', question: 'چرا grid-template-areas مفید است؟', answer: 'چون چیدمان را «بصری» تعریف می‌کنید، نه با شماره‌ی خطوط. وقتی نام‌ها را در یک رشته می‌نویسید، دقیقاً می‌بینید صفحه چطور خواهد بود. برای چیدمان کل صفحه (header، sidebar، main، footer) این روش بسیار خواناتر از محاسبات عددی است.' },
            { type: 'quiz', id: 'q-17-2', question: 'چطور یک آیتم را در کل عرض Grid پهن کنیم؟', answer: 'سه راه: <code>grid-column: 1 / -1</code> (از اولین تا آخرین ستون)، <code>grid-column: span 3</code> (اگر ۳ ستون دارید)، یا در grid-template-areas، اسم را در کل سطر تکرار کنید. رایج‌ترین: <code>1 / -1</code> که مستقل از تعداد ستون‌ها کار می‌کند.' },
            { type: 'project', title: 'چیدمان کامل صفحه', description: 'با grid-template-areas یک صفحه‌ی کامل با header، sidebar، main و footer بسازید.', requirements: [
                'grid-template-areas برای تعریف چیدمان',
                'grid-template-columns با sidebar (200px) و main (1fr)',
                'header و footer تمام عرض',
                'در موبایل (Media Query) همه یک‌ستونه'
            ], starterCode: '<style>\n  * {\n    box-sizing: border-box;\n  }\n  body {\n    margin: 0;\n    font-family: Tahoma;\n    background: #f5f5f5;\n  }\n  .layout {\n    display: grid;\n    grid-template-areas:\n      "header header"\n      "sidebar main"\n      "footer footer";\n    grid-template-columns: 200px 1fr;\n    grid-template-rows: auto 1fr auto;\n    min-height: 100vh;\n    gap: 8px;\n    padding: 8px;\n  }\n  .header {\n    grid-area: header;\n    background: #333;\n    color: white;\n    padding: 20px;\n    border-radius: 8px;\n  }\n  .sidebar {\n    grid-area: sidebar;\n    background: #f4b942;\n    padding: 20px;\n    border-radius: 8px;\n  }\n  .main {\n    grid-area: main;\n    background: white;\n    padding: 20px;\n    border-radius: 8px;\n  }\n  .footer {\n    grid-area: footer;\n    background: #333;\n    color: white;\n    padding: 16px;\n    border-radius: 8px;\n    text-align: center;\n  }\n  @media (max-width: 700px) {\n    .layout {\n      grid-template-areas:\n        "header"\n        "main"\n        "sidebar"\n        "footer";\n      grid-template-columns: 1fr;\n    }\n  }\n</style>\n<div class="layout">\n  <header class="header">Header</header>\n  <aside class="sidebar">Sidebar</aside>\n  <main class="main">Main Content</main>\n  <footer class="footer">Footer</footer>\n</div>' }
        ]
    },

    'lesson-18': {
        title: 'توابع محاسباتی CSS', level: 'پیشرفته', duration: '14 دقیقه', xp: 150,
        sections: [
            { type: 'intro', text: 'CSS توابع ریاضی دارد که محاسبات پویا را ممکن می‌کند.' },
            { type: 'heading', num: '01', text: 'calc()' },
            { type: 'code', code: '.box {\n  width: calc(100% - 40px);\n  padding: calc(1rem + 4px);\n  margin-top: calc(2rem * 2);\n}', lang: 'CSS', caption: 'محاسبات ریاضی', explain: [
                '<code>calc()</code> — محاسبه در CSS',
                'عملگرها: + - * /',
                'فاصله‌ی اطراف + - الزامی است',
                'ترکیب واحدهای مختلف: 100% - 40px'
            ]},
            { type: 'heading', num: '02', text: 'min() و max()' },
            { type: 'code', code: '.container {\n  width: min(100%, 1200px);\n  height: max(200px, 50vh);\n}', lang: 'CSS', caption: 'انتخاب بین دو مقدار', explain: [
                '<code>min(a, b)</code> — کوچک‌تر را انتخاب می‌کند',
                '<code>max(a, b)</code> — بزرگ‌تر را انتخاب می‌کند'
            ]},
            { type: 'heading', num: '03', text: 'clamp() — تابع همه‌کاره' },
            { type: 'code', code: 'h1 {\n  font-size: clamp(1.5rem, 4vw, 3rem);\n}', lang: 'CSS', caption: 'فونت واکنش‌گرا', explain: [
                '<code>clamp(min, ideal, max)</code>',
                'حداقل ۱.۵rem، ایده‌آل ۴vw، حداکثر ۳rem',
                'در موبایل کوچک، دسکتاپ بزرگ — خودکار!',
                'جایگزین Media Query برای فونت'
            ]},
            { type: 'quiz', id: 'q-18-1', question: 'تفاوت min() و clamp() چیست؟', answer: '<code>min(a, b)</code> فقط کوچک‌ترین را برمی‌گرداند — دو مقدار. <code>clamp(min, ideal, max)</code> سه مقدار می‌گیرد: حداقل، ایده‌آل، حداکثر. مقدار نهایی بین min و max نگه داشته می‌شود. مثال: <code>clamp(16px, 2vw, 24px)</code> یعنی «اگر 2vw کمتر از ۱۶ بود، ۱۶. اگر بیشتر از ۲۴ بود، ۲۴. وگرنه 2vw».' },
            { type: 'quiz', id: 'q-18-2', question: 'چرا از clamp برای font-size استفاده می‌کنیم؟', answer: 'چون اندازه‌ی فونت را واکنش‌گرا می‌کند بدون Media Query. مثلاً <code>clamp(1rem, 4vw, 2rem)</code>: در موبایل ۱rem (خوانا)، در دسکتاپ ۲rem (بزرگ). به‌طور خودکار بین این دو تغییر می‌کند. این تکنیک مدرن‌تر از نوشتن سه Media Query برای سه دستگاه است.' },
            { type: 'project', title: 'تایپوگرافی واکنش‌گرا', description: 'با clamp() یک تایپوگرافی بسازید که در همه دستگاه‌ها عالی باشد.', requirements: [
                'h1 با clamp برای font-size',
                'container با min() یا max()',
                'calc() در padding یا width',
                'بدون Media Query'
            ], starterCode: '<style>\n  body {\n    font-family: Tahoma;\n    padding: 20px;\n    background: #f5f5f5;\n    margin: 0;\n  }\n  .container {\n    width: min(100%, 800px);\n    margin: 0 auto;\n    background: white;\n    padding: clamp(20px, 5vw, 60px);\n    border-radius: 16px;\n  }\n  h1 {\n    font-size: clamp(1.8rem, 5vw, 3.5rem);\n    color: #f4b942;\n    margin: 0 0 1rem;\n    line-height: 1.2;\n  }\n  p {\n    font-size: clamp(1rem, 2vw, 1.2rem);\n    color: #555;\n    line-height: 1.8;\n  }\n</style>\n<div class="container">\n  <h1>عنوان واکنش‌گرا</h1>\n  <p>این متن بدون Media Query در همه دستگاه‌ها درست دیده می‌شود. در موبایل کوچک‌تر، در دسکتاپ بزرگ‌تر.</p>\n</div>' }
        ]
    },

    'lesson-19': {
        title: 'RTL و Logical Properties', level: 'پیشرفته', duration: '15 دقیقه', xp: 150,
        sections: [
            { type: 'intro', text: 'برای سایت‌های فارسی، طراحی راست‌به‌چپ (RTL) ضروری است.' },
            { type: 'heading', num: '01', text: 'dir="rtl"' },
            { type: 'paragraph', text: 'با اضافه کردن <code>dir="rtl"</code> به تگ html، کل صفحه راست‌به‌چپ می‌شود. مرورگر خودکار متن، لیست‌ها، و حتی padding و margin را برعکس می‌کند.' },
            { type: 'code', code: '<html lang="fa" dir="rtl">\n  <body>\n    <p>این متن از راست شروع می‌شود.</p>\n  </body>\n</html>', lang: 'HTML', caption: 'فعال‌سازی RTL' },
            { type: 'heading', num: '02', text: 'Logical Properties' },
            { type: 'paragraph', text: 'به‌جای <code>margin-left</code> و <code>margin-right</code>، از منطق inline/block استفاده کنید. خودکار با RTL/LTR هماهنگ می‌شود.' },
            { type: 'list', items: [
                '<strong>margin-inline-start</strong> — معادل margin-right در RTL، margin-left در LTR',
                '<strong>margin-inline-end</strong> — معادل margin-left در RTL',
                '<strong>padding-block</strong> — بالا و پایین (بدون تغییر در RTL)',
                '<strong>inset-inline-start</strong> — left در LTR، right در RTL',
                '<strong>text-align: start</strong> — راست در RTL، چپ در LTR'
            ]},
            { type: 'code', code: '/* به‌جای این: */\n.box {\n  margin-right: 20px;\n  text-align: left;\n}\n/* از این استفاده کنید: */\n.box {\n  margin-inline-start: 20px;\n  text-align: start;\n}', lang: 'CSS', caption: 'Logical Properties', explain: [
                '<code>margin-inline-start</code> — در RTL راست، در LTR چپ',
                '<code>text-align: start</code> — همیشه «شروع» (راست در فارسی)',
                'کد یکسان، هم در RTL هم LTR درست کار می‌کند'
            ]},
            { type: 'heading', num: '03', text: 'Flexbox و RTL' },
            { type: 'paragraph', text: 'Flexbox خودکار با RTL هماهنگ می‌شود. <code>justify-content: flex-start</code> در RTL یعنی «از راست شروع کن» — بدون تغییر کد.' },
            { type: 'quiz', id: 'q-19-1', question: 'چرا Logical Properties بهتر از margin-left/right هستند؟', answer: 'چون کد شما مستقل از جهت است. اگر یک روز بخواهید سایت را برای کاربر انگلیسی (LTR) هم عرضه کنید، به‌جای بازنویسی همه‌ی margin-left به margin-right، فقط dir را تغییر می‌دهید. یک کد، دو جهت. همچنین پیشنهاد W3C و MDN برای پروژه‌های جدید است.' },
            { type: 'quiz', id: 'q-19-2', question: 'چطور یک آیکون را در RTL و LTR به‌درستی جای‌گذاری کنیم؟', answer: 'از logical properties استفاده کنید: <code>margin-inline-start: 8px</code> بین آیکون و متن. این خودکار در RTL و LTR فاصله‌ی درست را می‌دهد. اگر از <code>margin-right: 8px</code> استفاده کنید، در RTL آیکون به سمت اشتباه می‌رود.' },
            { type: 'project', title: 'کارت RTL-friendly', description: 'یک کارت با منطق RTL بنویسید که در هر دو جهت درست باشد.', requirements: [
                'dir="rtl" روی html',
                'margin-inline-start به‌جای margin-right',
                'text-align: start',
                'inset-inline-start برای position',
                'flexbox با gap'
            ], starterCode: '<style>\n  * {\n    box-sizing: border-box;\n  }\n  body {\n    font-family: Tahoma;\n    background: #f5f5f5;\n    padding: 20px;\n  }\n  .card {\n    display: flex;\n    gap: 16px;\n    background: white;\n    padding: 20px;\n    border-radius: 12px;\n    max-width: 400px;\n    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);\n    text-align: start;\n    position: relative;\n  }\n  .avatar {\n    width: 48px;\n    height: 48px;\n    border-radius: 50%;\n    background: #f4b942;\n    flex-shrink: 0;\n  }\n  .content {\n    flex: 1;\n  }\n  .content h3 {\n    margin: 0 0 4px;\n    font-size: 16px;\n  }\n  .content p {\n    margin: 0;\n    font-size: 13px;\n    color: #666;\n  }\n  .badge {\n    position: absolute;\n    inset-inline-end: 16px;\n    top: 16px;\n    background: #ef4444;\n    color: white;\n    padding: 2px 10px;\n    border-radius: 10px;\n    font-size: 11px;\n    font-weight: 700;\n  }\n</style>\n<div class="card">\n  <div class="avatar"></div>\n  <div class="content">\n    <h3>نام کاربر</h3>\n    <p>توضیحات کوتاه</p>\n  </div>\n  <span class="badge">جدید</span>\n</div>' }
        ]
    },

    'lesson-20': {
        title: 'فونت سفارشی و @font-face', level: 'پیشرفته', duration: '13 دقیقه', xp: 150,
        sections: [
            { type: 'intro', text: 'فونت‌های پیش‌فرض محدودند. با @font-face می‌توانید هر فونتی را از سرور یا Google Fonts بارگذاری کنید.' },
            { type: 'heading', num: '01', text: '@font-face' },
            { type: 'code', code: '@font-face {\n  font-family: "MyFont";\n  src: url("fonts/MyFont.woff2") format("woff2");\n  font-weight: 400;\n  font-display: swap;\n}\nbody {\n  font-family: "MyFont", Tahoma, sans-serif;\n}', lang: 'CSS', caption: 'بارگذاری فونت سفارشی', explain: [
                '<code>font-family</code> — نام دلخواه برای فونت',
                '<code>src: url(...)</code> — آدرس فایل',
                '<code>font-display: swap</code> — تا لود شدن، فونت پیش‌فرض نمایش داده شود',
                'فرمت <code>woff2</code> — سبک‌ترین و مدرن‌ترین'
            ]},
            { type: 'heading', num: '02', text: 'Google Fonts — ساده‌ترین' },
            { type: 'paragraph', text: 'گوگل صدها فونت رایگان دارد. برای Vazirmatn (فونت فارسی):' },
            { type: 'code', code: '<link rel="preconnect" href="https://fonts.googleapis.com">\n<link href="https://fonts.googleapis.com/css2?family=Vazirmatn:wght@400;500;700&display=swap" rel="stylesheet">\n\n<style>\n  body {\n    font-family: "Vazirmatn", sans-serif;\n  }\n</style>', lang: 'HTML', caption: 'Vazirmatn از Google Fonts' },
            { type: 'heading', num: '03', text: 'font-display' },
            { type: 'list', items: [
                '<strong>swap</strong> — فونت پیش‌فرض نشان بده، بعد عوض کن (توصیه می‌شود)',
                '<strong>block</strong> — تا لود شدن، متن را مخفی کن',
                '<strong>fallback</strong> — کمی صبر، بعد پیش‌فرض',
                '<strong>optional</strong> — اگر سریع نیامد، فراموشش کن'
            ]},
            { type: 'heading', num: '04', text: 'فونت‌های فارسی' },
            { type: 'list', items: [
                '<strong>Vazirmatn</strong> — محبوب‌ترین، رسمی، از Google Fonts',
                '<strong>Estedad</strong> — مدرن و خوانا',
                '<strong>Sahel</strong> — سبک و تمیز',
                '<strong>Yekan Bakh</strong> — تجاری (نیاز به لایسنس)'
            ]},
            { type: 'quiz', id: 'q-20-1', question: 'چرا font-display: swap برای UX بهتر است؟', answer: 'چون کاربر فوراً متن را با فونت پیش‌فرض می‌بیند و تجربه‌اش قطع نمی‌شود. با block یا fallback، کاربر چند لحظه صفحه‌ی خالی می‌بیند که تجربه‌ی بدی است. swap اجازه می‌دهد صفحه سریع لود شود، بعد فونت سفارشی جایگزین شود.' },
            { type: 'quiz', id: 'q-20-2', question: 'چرا فرمت woff2 توصیه می‌شود؟', answer: 'چون سبک‌ترین است — ۳۰-۵۰٪ کوچک‌تر از woff و خیلی کوچک‌تر از ttf/otf. مرورگرهای مدرن (۹۹٪) پشتیبانی می‌کنند. در ترتیب، اول woff2 بگذارید، بعد woff برای مرورگرهای قدیمی: <code>src: url(...woff2) format("woff2"), url(...woff) format("woff");</code>' },
            { type: 'project', title: 'صفحه با فونت Vazirmatn', description: 'صفحه‌ای بسازید که از Vazirmatn استفاده کند.', requirements: [
                'لینک به Google Fonts',
                'font-family روی body',
                'font-weight های مختلف (400، 700)',
                'fallback به sans-serif'
            ], starterCode: '<link rel="preconnect" href="https://fonts.googleapis.com">\n<link href="https://fonts.googleapis.com/css2?family=Vazirmatn:wght@400;500;700&display=swap" rel="stylesheet">\n\n<style>\n  * {\n    box-sizing: border-box;\n  }\n  body {\n    font-family: "Vazirmatn", Tahoma, sans-serif;\n    background: #fafafa;\n    color: #1a1a1a;\n    padding: 40px;\n    line-height: 1.8;\n    max-width: 600px;\n    margin: 0 auto;\n  }\n  h1 {\n    font-weight: 700;\n    color: #f4b942;\n    font-size: 2rem;\n    margin-bottom: 1rem;\n  }\n  p {\n    font-weight: 400;\n    color: #555;\n    font-size: 1.1rem;\n  }\n  .highlight {\n    font-weight: 700;\n    color: #1a1a1a;\n  }\n</style>\n<h1>تایپوگرافی فارسی</h1>\n<p>این متن با فونت <span class="highlight">وزیرمتن</span> نمایش داده می‌شود. فونت‌های سفارشی به خوانایی و زیبایی صفحه کمک زیادی می‌کنند.</p>' }
        ]
    },

    'lesson-21': {
        title: 'دسترسی‌پذیری و اصول سئو', level: 'پیشرفته', duration: '18 دقیقه', xp: 150,
        sections: [
            { type: 'intro', text: 'کد خوب باید برای همه (از جمله نابینایان) و موتورهای جستجو قابل فهم باشد.' },
            { type: 'heading', num: '01', text: 'HTML معنایی' },
            { type: 'code', code: '<header>\n  <nav>\n    <a href="/">خانه</a>\n  </nav>\n</header>\n<main>\n  <article>\n    <h1>عنوان مقاله</h1>\n    <p>متن...</p>\n  </article>\n</main>\n<footer>© 2025</footer>', lang: 'HTML', caption: 'ساختار معنایی' },
            { type: 'heading', num: '02', text: 'صفت alt' },
            { type: 'code', code: '<img src="dog.jpg" alt="یک سگ سفید در حال دویدن">', lang: 'HTML', caption: 'alt توصیفی' },
            { type: 'heading', num: '03', text: 'کنتراست رنگ' },
            { type: 'paragraph', text: 'WCAG: حداقل ۴.۵:۱ برای متن معمولی، ۳:۱ برای متن بزرگ.' },
            { type: 'heading', num: '04', text: 'اصول سئو' },
            { type: 'list', items: [
                '<strong>title صفحه:</strong> ۵۰-۶۰ کاراکتر با کلمه‌ی کلیدی',
                '<strong>h1 یکتا:</strong> فقط یکی در هر صفحه',
                '<strong>سلسله‌مراتب:</strong> h1 → h2 → h3',
                '<strong>alt تصاویر</strong>',
                '<strong>لینک توصیفی:</strong> نه «اینجا کلیک کنید»'
            ]},
            { type: 'heading', num: '05', text: 'ARIA' },
            { type: 'code', code: '<button aria-label="بستن منو">×</button>\n<div role="alert">خطا!</div>\n<nav aria-label="منوی اصلی">\n  <a href="/">خانه</a>\n</nav>', lang: 'HTML', caption: 'ARIA attributes', explain: [
                '<code>aria-label</code> — توضیح اضافه برای صفحه‌خوان',
                '<code>role</code> — نقش عنصر را صریح تعریف می‌کند',
                'فقط وقتی تگ معنایی موجود نیست'
            ]},
            { type: 'quiz', id: 'q-21-1', question: 'چرا alt تصاویر برای دسترسی‌پذیری مهم است؟', answer: 'چون صفحه‌خوان‌ها نمی‌توانند تصویر را ببینند؛ به‌جای آن، متن alt را می‌خوانند. یک کاربر نابینا با شنیدن «عکس یک سگ سفید در حال دویدن» محتوای صفحه را درک می‌کند، در حالی که بدون alt فقط «تصویر» می‌شنود که بی‌فایده است.' },
            { type: 'project', title: 'صفحه‌ی معنایی', description: 'یک صفحه با ساختار معنایی کامل بسازید.', requirements: [
                'header با nav',
                'main با یک article',
                'article شامل h1، p، img با alt',
                'footer',
                'title مناسب در head'
            ], starterCode: '<!DOCTYPE html>\n<html lang="fa" dir="rtl">\n<head>\n  <meta charset="UTF-8">\n  <meta name="viewport" content="width=device-width, initial-scale=1.0">\n  <title>مقالات — سایت من</title>\n</head>\n<body>\n  <header>\n    <nav aria-label="منوی اصلی">\n      <a href="/">خانه</a>\n      <a href="/articles">مقالات</a>\n    </nav>\n  </header>\n  <main>\n    <article>\n      <h1>عنوان مقاله</h1>\n      <img src="placeholder.jpg" alt="توضیح تصویر">\n      <p>متن مقاله...</p>\n    </article>\n  </main>\n  <footer>© ۱۴۰۴</footer>\n</body>\n</html>' }
        ]
    },

    'lesson-22': {
        title: 'معماری CSS با متد BEM', level: 'پیشرفته', duration: '16 دقیقه', xp: 150,
        sections: [
            { type: 'intro', text: 'BEM قرارداد نام‌گذاری است که تداخل کلاس‌ها را حل می‌کند.' },
            { type: 'heading', num: '01', text: 'سه جزء' },
            { type: 'list', items: [
                '<strong>Block</strong> — جزء مستقل: card، menu، btn',
                '<strong>Element</strong> — بخش از block: card__title، menu__item',
                '<strong>Modifier</strong> — حالت: btn--primary، menu__item--active'
            ]},
            { type: 'heading', num: '02', text: 'مثال' },
            { type: 'code', code: '<style>\n  .card {\n    padding: 20px;\n    border-radius: 8px;\n  }\n  .card__title {\n    font-size: 20px;\n    margin-bottom: 8px;\n  }\n  .card__btn {\n    padding: 8px 16px;\n    border: none;\n    border-radius: 4px;\n  }\n  .card__btn--primary {\n    background: #f4b942;\n  }\n  .card__btn--secondary {\n    background: #e0e0e0;\n  }\n</style>\n<div class="card">\n  <h2 class="card__title">عنوان</h2>\n  <button class="card__btn card__btn--primary">تأیید</button>\n  <button class="card__btn card__btn--secondary">انصراف</button>\n</div>', lang: 'HTML', caption: 'ساختار BEM', explain: [
                '<code>card</code> — Block',
                '<code>card__title</code> — Element (دو زیرخط)',
                '<code>card__btn--primary</code> — Modifier (دو خط تیره)'
            ]},
            { type: 'heading', num: '03', text: 'چرا BEM؟' },
            { type: 'paragraph', text: 'با نگاه به نام کلاس می‌فهمید به کدام بخش تعلق دارد. تداخل‌ها صفر می‌شود. نگهداری پروژه‌های بزرگ آسان.' },
            { type: 'quiz', id: 'q-22-1', question: 'در BEM، چرا از دو زیرخط (__) برای Element استفاده می‌کنیم؟', answer: 'برای تمایز بصری بین سه سطح. یک زیرخط (_) ممکن است با نام‌گذاری معمولی کلاس اشتباه شود. دو زیرخط <code>block__element</code> و دو خط تیره <code>block--modifier</code> کاملاً متمایزند. با نگاه به name فوراً می‌فهمید کدام سطح است: <code>card__btn--primary</code> = Modifier روی Element داخل Block.' },
            { type: 'project', title: 'کارت BEM', description: 'یک کارت محصول با BEM بسازید.', requirements: [
                'Block اصلی: product-card',
                'عناصر: __image، __title، __price، __btn',
                'Modifier: __btn--primary',
                'بدون کلاس تکراری'
            ], starterCode: '<style>\n  body {\n    font-family: Tahoma;\n    padding: 40px;\n    background: #f5f5f5;\n  }\n  .product-card {\n    background: white;\n    border-radius: 12px;\n    overflow: hidden;\n    max-width: 280px;\n    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);\n  }\n  .product-card__image {\n    width: 100%;\n    height: 160px;\n    background: #ddd;\n  }\n  .product-card__body {\n    padding: 16px;\n  }\n  .product-card__title {\n    margin: 0 0 8px;\n    font-size: 16px;\n  }\n  .product-card__price {\n    color: #22c55e;\n    font-weight: 700;\n    margin-bottom: 12px;\n  }\n  .product-card__btn {\n    width: 100%;\n    padding: 10px;\n    border: none;\n    border-radius: 6px;\n    cursor: pointer;\n    font-weight: 600;\n  }\n  .product-card__btn--primary {\n    background: #f4b942;\n    color: #000;\n  }\n</style>\n<div class="product-card">\n  <div class="product-card__image"></div>\n  <div class="product-card__body">\n    <h3 class="product-card__title">هدفون بی‌سیم</h3>\n    <div class="product-card__price">۲٬۵۰۰٬۰۰۰ تومان</div>\n    <button class="product-card__btn product-card__btn--primary">خرید</button>\n  </div>\n</div>' }
        ]
    },

    'lesson-23': {
        title: 'پروژه نهایی — صفحه فرود کامل', level: 'پیشرفته', duration: '25 دقیقه', xp: 150,
        sections: [
            { type: 'intro', text: 'همه‌ی آموخته‌ها را در یک پروژه‌ی واقعی ترکیب می‌کنیم.' },
            { type: 'heading', num: '01', text: 'ساختار' },
            { type: 'paragraph', text: 'سه بخش اصلی: Hero (بالا)، Features (ویژگی‌ها)، CTA (دعوت به اقدام). همه واکنش‌گرا.' },
            { type: 'heading', num: '02', text: 'کد کامل' },
            { type: 'code', code: '<!DOCTYPE html>\n<html lang="fa" dir="rtl">\n<head>\n<meta charset="UTF-8">\n<meta name="viewport" content="width=device-width, initial-scale=1.0">\n<style>\n  * {\n    margin: 0;\n    padding: 0;\n    box-sizing: border-box;\n  }\n  :root {\n    --primary: #f4b942;\n    --bg: #0a0a0b;\n    --surface: #17171a;\n    --text: #fafafa;\n    --muted: #a8a8b3;\n    --border: #33333d;\n  }\n  body {\n    font-family: Tahoma, sans-serif;\n    background: var(--bg);\n    color: var(--text);\n    line-height: 1.7;\n  }\n  .hero {\n    min-height: 100vh;\n    padding: 60px 20px;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    justify-content: center;\n    text-align: center;\n  }\n  .hero h1 {\n    font-size: clamp(2rem, 5vw, 3.5rem);\n    color: var(--primary);\n    margin-bottom: 1rem;\n    line-height: 1.2;\n  }\n  .hero p {\n    font-size: clamp(1rem, 2vw, 1.2rem);\n    color: var(--muted);\n    max-width: 500px;\n    margin: 0 auto 2rem;\n  }\n  .hero button {\n    background: var(--primary);\n    color: #000;\n    border: none;\n    padding: 14px 32px;\n    border-radius: 8px;\n    font-size: 15px;\n    font-weight: 700;\n    cursor: pointer;\n    transition: transform 0.2s;\n  }\n  .hero button:hover {\n    transform: scale(1.05);\n  }\n  .features {\n    padding: 60px 20px;\n    max-width: 900px;\n    margin: 0 auto;\n    display: grid;\n    grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));\n    gap: 20px;\n  }\n  .feature {\n    background: var(--surface);\n    border: 1px solid var(--border);\n    border-radius: 12px;\n    padding: 28px;\n  }\n  .feature h3 {\n    color: var(--primary);\n    margin-bottom: 8px;\n    font-size: 18px;\n  }\n  .feature p {\n    color: var(--muted);\n    font-size: 14px;\n  }\n  .cta {\n    padding: 80px 20px;\n    text-align: center;\n    background: linear-gradient(135deg, var(--surface), var(--bg));\n  }\n  .cta h2 {\n    font-size: clamp(1.5rem, 3vw, 2rem);\n    margin-bottom: 1rem;\n  }\n  .cta p {\n    color: var(--muted);\n    margin-bottom: 1.5rem;\n  }\n  .cta button {\n    background: var(--primary);\n    color: #000;\n    border: none;\n    padding: 14px 32px;\n    border-radius: 8px;\n    font-weight: 700;\n    font-size: 15px;\n    cursor: pointer;\n  }\n</style>\n</head>\n<body>\n  <section class="hero">\n    <h1>محصولی که زندگی را ساده می‌کند</h1>\n    <p>با یک کلیک، همه چیز را در یک‌جا مدیریت کنید. ساده، سریع، رایگان.</p>\n    <button>شروع کنید</button>\n  </section>\n  <section class="features">\n    <div class="feature">\n      <h3>سریع</h3>\n      <p>در کمتر از یک ثانیه آماده است.</p>\n    </div>\n    <div class="feature">\n      <h3>امن</h3>\n      <p>داده‌های شما با رمزنگاری محافظت می‌شوند.</p>\n    </div>\n    <div class="feature">\n      <h3>ساده</h3>\n      <p>بدون آموزش، بدون پیچیدگی.</p>\n    </div>\n  </section>\n  <section class="cta">\n    <h2>همین حالا شروع کنید</h2>\n    <p>رایگان است، بدون تعهد.</p>\n    <button>ثبت‌نام</button>\n  </section>\n</body>\n</html>', lang: 'HTML', caption: 'صفحه فرود کامل' },
            { type: 'heading', num: '03', text: 'نکته‌های حرفه‌ای' },
            { type: 'list', items: [
                '<strong>White space:</strong> فضای خالی بین بخش‌ها',
                '<strong>کنتراست:</strong> دکمه متمایز از پس‌زمینه',
                '<strong>تایپوگرافی:</strong> حداکثر دو فونت',
                '<strong>یکپارچگی:</strong> زبان بصری یکسان',
                '<strong>واکنش‌گرایی:</strong> clamp و Grid'
            ]},
            { type: 'quiz', id: 'q-23-1', question: 'چرا در پروژه از متغیر CSS استفاده کردیم؟', answer: 'چون یک رنگ (primary) در ده‌ها جا استفاده شده. با متغیر، اگر بخواهیم رنگ را عوض کنیم، فقط یک خط تغییر می‌دهیم — همه‌ی دکمه‌ها، عنوان‌ها و تأکیدها خودکار آپدیت می‌شوند. همچنین برای تم‌دهی (روشن/تیره) ضروری است.' },
            { type: 'project', title: 'صفحه فرود شخصی', description: 'یک صفحه‌ی فرود کامل برای محصول یا خدمت خودتان بسازید.', requirements: [
                'Hero با عنوان و دکمه',
                '۳ کارت ویژگی با Grid',
                'CTA پایین صفحه',
                'استفاده از متغیرهای CSS',
                'واکنش‌گرا (clamp + Grid)',
                'یک footer اضافه کنید'
            ], starterCode: '<style>\n  * {\n    margin: 0;\n    padding: 0;\n    box-sizing: border-box;\n  }\n  :root {\n    --primary: #f4b942;\n    --bg: #0a0a0b;\n    --surface: #17171a;\n    --text: #fafafa;\n    --muted: #a8a8b3;\n  }\n  body {\n    font-family: Tahoma;\n    background: var(--bg);\n    color: var(--text);\n  }\n  .hero {\n    min-height: 100vh;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    justify-content: center;\n    text-align: center;\n    padding: 60px 20px;\n  }\n  .hero h1 {\n    font-size: clamp(2rem, 5vw, 3rem);\n    color: var(--primary);\n    margin-bottom: 1rem;\n  }\n  .hero p {\n    color: var(--muted);\n    max-width: 500px;\n    margin-bottom: 2rem;\n  }\n  .hero button {\n    background: var(--primary);\n    color: #000;\n    border: none;\n    padding: 14px 32px;\n    border-radius: 8px;\n    font-weight: 700;\n    cursor: pointer;\n  }\n  .features {\n    padding: 60px 20px;\n    max-width: 900px;\n    margin: 0 auto;\n    display: grid;\n    grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));\n    gap: 20px;\n  }\n  .feature {\n    background: var(--surface);\n    border: 1px solid #333;\n    border-radius: 12px;\n    padding: 28px;\n  }\n  .feature h3 {\n    color: var(--primary);\n    margin-bottom: 8px;\n  }\n  .feature p {\n    color: var(--muted);\n    font-size: 14px;\n  }\n</style>\n<section class="hero">\n  <h1>عنوان محصول شما</h1>\n  <p>توضیح کوتاه درباره‌ی محصول یا خدمت.</p>\n  <button>شروع کنید</button>\n</section>\n<section class="features">\n  <div class="feature">\n    <h3>ویژگی ۱</h3>\n    <p>توضیح...</p>\n  </div>\n  <div class="feature">\n    <h3>ویژگی ۲</h3>\n    <p>توضیح...</p>\n  </div>\n  <div class="feature">\n    <h3>ویژگی ۳</h3>\n    <p>توضیح...</p>\n  </div>\n</section>' }
        ]
    },

    'lesson-24': {
        title: 'بعد از HTML و CSS — مسیر ادامه', level: 'پیشرفته', duration: '15 دقیقه', xp: 150,
        sections: [
            { type: 'intro', text: 'تبریک! شما الان HTML و CSS را در سطح خوبی می‌دانید. می‌توانید هر صفحه‌ای طراحی کنید. اما این پایان راه نیست — این شروع یک مسیر بزرگ‌تر است. در این درس، قدم‌های بعدی را دقیق می‌بینیم.' },
            { type: 'heading', num: '01', text: 'قدم اول: JavaScript — زبان تعامل' },
            { type: 'paragraph', text: 'HTML ساختار است، CSS ظاهر. اما بدون <strong>JavaScript</strong>، صفحه‌ی شما فقط یک «پوستر» است — ثابت و بی‌حرکت. JavaScript به صفحه جان می‌دهد: دکمه‌ای که کلیک می‌شود، فرمی که اعتبارسنجی می‌کند، محتوایی که بدون رفرش تغییر می‌کند.' },
            { type: 'code', code: 'const btn = document.querySelector("button");\nbtn.addEventListener("click", () => {\n  alert("سلام!");\n});', lang: 'JavaScript', caption: 'اولین خط JavaScript', explain: [
                '<code>document.querySelector("button")</code> — اولین دکمه‌ی صفحه را پیدا کن',
                '<code>addEventListener("click", ...)</code> — وقتی کلیک شد، تابع اجرا شود',
                '<code>alert("سلام!")</code> — پیام نمایش بده',
                'HTML + CSS + JS = یک صفحه‌ی کامل'
            ]},
            { type: 'paragraph', text: '<strong>چرا JavaScript؟</strong> چون بدون آن، ۹۰٪ قابلیت‌های مدرن وب (منوی بازشو، اسلایدر، فرم پویا، اپ‌های واقعی) وجود ندارد. JavaScript تنها زبان برنامه‌نویسی است که مرورگر می‌فهمد.' },
            { type: 'heading', num: '02', text: 'فریمورک‌های CSS — سرعت بیشتر' },
            { type: 'paragraph', text: 'بعد از تسلط بر CSS خام، می‌توانید از فریمورک‌ها استفاده کنید تا کار سریع‌تر پیش برود:' },
            { type: 'list', items: [
                '<strong>Tailwind CSS:</strong> پرکاربردترین در ۲۰۲۴-۲۰۲۵. با کلاس‌های کوتاه داخل HTML استایل می‌دهید. مثلاً <code>class="bg-blue-500 p-4 rounded"</code>. بدون نوشتن فایل CSS جدا.',
                '<strong>Bootstrap:</strong> کامپوننت‌های آماده (دکمه، کارت، فرم، مدال). برای پروژه‌های سریع و تیم‌های بدون طراح عالی است. اما صفحه‌ها شبیه هم می‌شوند.',
                '<strong>Sass/SCSS:</strong> پیش‌پردازنده‌ی CSS با متغیر، تابع، ماژول، تودرتویی. برای پروژه‌های بزرگ که CSS خام مدیریتش سخت می‌شود.',
                '<strong>CSS Modules:</strong> در پروژه‌های React/Next، هر کامپوننت CSS جدا با scope محلی دارد.'
            ]},
            { type: 'heading', num: '03', text: 'فریمورک‌های JavaScript — ساخت اپ‌های مدرن' },
            { type: 'paragraph', text: 'وقتی JavaScript را یاد گرفتید، نوبت فریمورک‌هاست. این‌ها ابزارهایی هستند که ساخت اپلیکیشن‌های پیچیده را ساده می‌کنند:' },
            { type: 'list', items: [
                '<strong>React:</strong> کتابخانه‌ی فیسبوک (متا). محبوب‌ترین در جهان. پرکاربردترین در آگهی‌های استخدام. مبتنی بر «کامپوننت» — قطعات کوچک قابل استفاده‌ی مجدد.',
                '<strong>Vue:</strong> ساده‌تر از React، محبوب در ایران و آسیا. یادگیری‌اش راحت‌تر است. مناسب برای شروع.',
                '<strong>Angular:</strong> فریمورک کامل گوگل. برای پروژه‌های سازمانی بزرگ. یادگیری‌اش سخت‌تر است.',
                '<strong>Next.js:</strong> مبتنی بر React. قابلیت‌های اضافه (SSR، SSG، API). برای سایت‌های سئو-محور بهترین گزینه.',
                '<strong>Svelte:</strong> فریمورک سبک که کد را به JavaScript خالص تبدیل می‌کند. سریع‌ترین در runtime.'
            ]},
            { type: 'callout', title: 'توصیه‌ی مهم', text: 'قبل از رفتن به فریمورک، حداقل ۲ ماه JavaScript خالص تمرین کنید. فریمورک‌ها بدون درک JS، فقط شما را گیج می‌کنند و در مصاحبه استخدامی هم رد می‌شوید.' },
            { type: 'heading', num: '04', text: 'مهارت‌های جانبی ضروری' },
            { type: 'list', items: [
                '<strong>Git و GitHub:</strong> سیستم مدیریت نسخه. هر پروژه‌ای که می‌سازید باید در GitHub باشد. کارفرماها به پروفایل GitHub شما نگاه می‌کنند.',
                '<strong>DevTools مرورگر:</strong> ابزار عیب‌یابی. یاد بگیرید چطور عناصر را inspect کنید، شبکه را بررسی کنید، Console را بخوانید.',
                '<strong>Responsive Design پیشرفته:</strong> Mobile-first، Container Queries، تصاویر واکنش‌گرا.',
                '<strong>Accessibility (a11y):</strong> WCAG، ARIA، تست با صفحه‌خوان. سایت‌های حرفه‌ای همه رعایت می‌کنند.',
                '<strong>Performance:</strong> Lighthouse، بهینه‌سازی تصویر، Lazy Loading.',
                '<strong>Testing:</strong> Jest، Vitest — نوشتن تست برای کد.'
            ]},
            { type: 'heading', num: '05', text: 'فرصت‌های شغلی' },
            { type: 'list', items: [
                '<strong>فریلنسری:</strong> ساخت لندینگ پیج، سایت شخصی، فروشگاه کوچک. درآمد ۵-۳۰ میلیون تومان در ماه بسته به پروژه.',
                '<strong>استخدام در شرکت:</strong> موقعیت Front-End Developer با حقوق ۱۵-۴۰ میلیون تومان برای جونیور، ۴۰-۸۰+ برای سنیور.',
                '<strong>پروژه‌های شخصی:</strong> ساخت SaaS، دوره‌های آموزشی، اپ‌های کوچک — درآمد غیرفعال.',
                '<strong>تدریس:</strong> بعد از ۲-۳ سال تجربه، می‌توانید خودتان آموزش بدهید.'
            ]},
            { type: 'heading', num: '06', text: 'منابع یادگیری پیشنهادی' },
            { type: 'list', items: [
                '<strong>MDN Web Docs:</strong> مستندات رسمی و جامع — بهترین مرجع برای هر تگ و ویژگی CSS.',
                '<strong>freeCodeCamp:</strong> دوره‌های تعاملی رایگان با تمرین عملی.',
                '<strong>JavaScript.info:</strong> بهترین دوره‌ی رایگان JavaScript.',
                '<strong>Frontend Masters:</strong> دوره‌های عمیق (پولی).',
                '<strong>YouTube:</strong> کانال‌های فارسی مثل راکت، راست‌چین.',
                '<strong>تمرین روزانه:</strong> هر روز ۳۰ دقیقه کد بزنید — مهم‌تر از هر منبعی.'
            ]},
            { type: 'heading', num: '07', text: 'نقشه‌ی راه پیشنهادی (۶ ماه)' },
            { type: 'list', items: [
                '<strong>ماه ۱-۲:</strong> JavaScript پایه (متغیر، تابع، آرایه، آبجکت، DOM).',
                '<strong>ماه ۳:</strong> پروژه‌های JS کوچک (To-Do، ماشین‌حساب، اسلایدر).',
                '<strong>ماه ۴:</strong> Git، GitHub، Deploy (Netlify / Vercel).',
                '<strong>ماه ۵-۶:</strong> یک فریمورک (React یا Vue) + یک پروژه‌ی واقعی.',
                '<strong>پایان:</strong> شروع به ارسال رزومه یا گرفتن اولین پروژه‌ی فریلنسری.'
            ]},
            { type: 'callout', title: 'یادت باشه', text: 'هیچ‌کس در یک ماه برنامه‌نویس حرفه‌ای نمی‌شود. اما هر کسی که ۶ ماه منظم و متمرکز تلاش کند، می‌تواند به سطح استخدام برسد. تنها تفاوت بین کسی که موفق می‌شود و کسی که نمی‌شود، استمرار است.' },
            { type: 'quiz', id: 'q-24-1', question: 'چرا JavaScript باید قبل از فریمورک‌ها یاد گرفته شود؟', answer: 'چون React، Vue، Next و همه‌ی فریمورک‌ها در نهایت به JavaScript خالص تبدیل می‌شوند. اگر JavaScript را عمیق ندانی، نمی‌توانی باگ‌های پیچیده را پیدا کنی، عملکرد را بهینه کنی، یا در مصاحبه‌ی استخدامی موفق شوی. کارفرماها به‌سرعت متوجه می‌شوند کسی که فقط فریمورک می‌داند، پایه‌ی محکمی ندارد.' },
            { type: 'quiz', id: 'q-24-2', question: 'بین React و Vue کدام را انتخاب کنیم؟', answer: 'برای شروع، <strong>Vue</strong> راحت‌تر است — یادگیری‌اش ساده‌تر، مستنداتش فارسی‌تر. اما <strong>React</strong> در بازار ایران تقاضای بیشتری دارد — آگهی‌های استخدام بیشتر و حقوق بالاتر. اگر می‌خواهید سریع شغل پیدا کنید React، اگر می‌خواهید راحت یاد بگیرید Vue. در نهایت، هر دو را می‌توانید بعداً یاد بگیرید — مفاهیم مشترک زیادی دارند.' },
            { type: 'quiz', id: 'q-24-3', question: 'چرا Git و GitHub ضروری است؟', answer: 'Git ابزار مدیریت نسخه است — هر تغییری که در کد می‌دهید ذخیره می‌شود، می‌توانید به عقب برگردید، و با تیم همکاری کنید. GitHub مخزن آنلاین است — کارفرماها به پروفایل GitHub شما نگاه می‌کنند تا ببینند چه پروژه‌هایی ساخته‌اید. اگر GitHub فعال داشته باشید با ۱۰ پروژه، شانس استخدام چند برابر می‌شود.' },
            { type: 'project', title: 'قدم بعدی خودت', description: 'یک صفحه‌ی HTML بسازید که در آن، برنامه‌ی ۶ ماه آینده‌ی خودتان را برای یادگیری برنامه‌نویسی بنویسید.', requirements: [
                'DOCTYPE html + head + body',
                'h1 با عنوان «برنامه‌ی من»',
                'یک ul با ۶ ماه برنامه',
                'دکمه‌ای با استایل (رنگ، padding، border-radius)',
                'متن با font-family و line-height'
            ], starterCode: '<!DOCTYPE html>\n<html lang="fa" dir="rtl">\n<head>\n  <meta charset="UTF-8">\n  <title>برنامه‌ی من</title>\n  <style>\n    body {\n      font-family: Tahoma, sans-serif;\n      background: #0a0a0b;\n      color: #fafafa;\n      padding: 40px;\n      line-height: 1.8;\n    }\n    h1 {\n      color: #f4b942;\n    }\n    ul {\n      background: #17171a;\n      padding: 24px;\n      border-radius: 12px;\n    }\n    li {\n      margin-bottom: 12px;\n    }\n    button {\n      background: #f4b942;\n      color: #000;\n      border: none;\n      padding: 12px 24px;\n      border-radius: 6px;\n      font-weight: 700;\n      cursor: pointer;\n      margin-top: 20px;\n    }\n  </style>\n</head>\n<body>\n  <h1>برنامه‌ی من</h1>\n  <p>در ۶ ماه آینده:</p>\n  <ul>\n    <li>ماه ۱-۲: یادگیری JavaScript</li>\n    <li>ماه ۳: پروژه‌های کوچک</li>\n    <li>ماه ۴: Git و GitHub</li>\n    <li>ماه ۵-۶: React</li>\n  </ul>\n  <button>شروع می‌کنم!</button>\n</body>\n</html>' }
        ]
    }
};

const LESSON_ORDER = ['lesson-01','lesson-02','lesson-03','lesson-04','lesson-05','lesson-06','lesson-07','lesson-08','lesson-09','lesson-10','lesson-11','lesson-12','lesson-13','lesson-14','lesson-15','lesson-16','lesson-17','lesson-18','lesson-19','lesson-20','lesson-21','lesson-22','lesson-23','lesson-24'];
const TOTAL_LESSONS = 24;
const BEGINNER_IDS = ['lesson-01','lesson-02','lesson-03'];
const MEDIUM_IDS = ['lesson-04','lesson-05','lesson-06','lesson-07','lesson-08','lesson-09','lesson-10','lesson-11','lesson-12','lesson-13'];
const ADVANCED_IDS = ['lesson-14','lesson-15','lesson-16','lesson-17','lesson-18','lesson-19','lesson-20','lesson-21','lesson-22','lesson-23','lesson-24'];

const TIERS = {
    bundle: { name: 'بسته‌ی کامل', title: 'دسترسی به تمام درس‌ها', subtitle: 'تمام سطوح، یک پرداخت', price: '99,000', lessons: [...MEDIUM_IDS, ...ADVANCED_IDS], features: ['هر ۱۰ درس سطح متوسط', 'هر ۱۱ درس سطح پیشرفته', 'صرفه‌جویی ۲۹,۰۰۰ تومان', 'دسترسی دائمی', 'به‌روزرسانی‌های آینده'], featured: true },
    medium: { name: 'سطح متوسط', title: 'سطح متوسط را باز کنید', subtitle: 'درس‌های ۴ تا ۱۳', price: '49,000', lessons: MEDIUM_IDS, features: ['اتصال CSS به HTML', 'مدل جعبه‌ای', 'Flexbox', 'طراحی واکنش‌گرا', 'CSS Grid', 'متغیرهای CSS', 'ترنزیشن', 'رنگ‌ها', 'واحدها', 'Position'] },
    advanced: { name: 'سطح پیشرفته', title: 'سطح پیشرفته را باز کنید', subtitle: 'درس‌های ۱۴ تا ۲۴', price: '79,000', lessons: ADVANCED_IDS, features: ['انتخابگرهای پیشرفته', 'HTML رسانه و فرم', 'Flexbox پیشرفته', 'Grid پیشرفته', 'توابع CSS', 'RTL', 'فونت سفارشی', 'دسترسی‌پذیری', 'BEM', 'پروژه نهایی', 'مسیر ادامه'] }
};

const TIER_ACTIVATION = {
    bundle: {
        code: 'bu55',
        rubikaText: 'برای خرید «بسته‌ی کامل» (دسترسی به هر ۲۱ درس پولی)،\nعدد ۷ را به آیدی زیر در روبیکا ارسال کنید:\n\n@kodamooz_support\n\nمبلغ: ۹۹,۰۰۰ تومان (صرفه‌جویی ۲۹,۰۰۰ تومان)\nپس از تأیید پرداخت، کد فعال‌سازی برای شما ارسال می‌شود.'
    },
    medium: {
        code: 'med55',
        rubikaText: 'برای خرید «سطح متوسط» (درس‌های ۴ تا ۱۳)،\nعدد ۷ را همراه با کلمه‌ی MEDIUM به آیدی زیر در روبیکا ارسال کنید:\n\n@kodamooz_support\n\nمثال: 7 MEDIUM\nمبلغ: ۴۹,۰۰۰ تومان\nپس از تأیید پرداخت، کد فعال‌سازی برای شما ارسال می‌شود.'
    },
    advanced: {
        code: 'adv55',
        rubikaText: 'برای خرید «سطح پیشرفته» (درس‌های ۱۴ تا ۲۴)،\nعدد ۷ را همراه با کلمه‌ی ADVANCED به آیدی زیر در روبیکا ارسال کنید:\n\n@kodamooz_support\n\nمثال: 7 ADVANCED\nمبلغ: ۷۹,۰۰۰ تومان\nپس از تأیید پرداخت، کد فعال‌سازی برای شما ارسال می‌شود.'
    }
};

// ============================================================
// State
// ============================================================
const STORAGE_KEY = 'codetutor-progress-v1';
let state = { completedLessons: [], xp: 0, lastActiveDate: null, streakDays: 0, purchasedTiers: [] };
let currentLessonId = null;
let pendingPurchaseTier = null;

function loadState() {
    try {
        const saved = localStorage.getItem(STORAGE_KEY);
        if (saved) state = { ...state, ...JSON.parse(saved) };
        if (!state.purchasedTiers) state.purchasedTiers = [];
    } catch (e) {}
    updateStreak();
}
function saveState() { try { localStorage.setItem(STORAGE_KEY, JSON.stringify(state)); } catch (e) {} }
function updateStreak() {
    const today = new Date().toDateString();
    if (state.lastActiveDate !== today) {
        if (state.lastActiveDate) {
            const diff = Math.floor((new Date(today) - new Date(state.lastActiveDate)) / 86400000);
            if (diff === 1) state.streakDays += 1;
            else if (diff > 1) state.streakDays = 1;
        } else state.streakDays = 1;
        state.lastActiveDate = today;
        saveState();
    }
}

// ============================================================
// تم (سه‌گانه: تیره، روشن، آبی) و فونت
// ============================================================
const THEME_KEY = 'codetutor-theme-v1';
const FONT_KEY = 'codetutor-font-v1';
let fontScale = 1;

const THEME_CYCLE = ['dark', 'light', 'blue'];
const THEME_LABELS = { dark: 'تم تیره', light: 'تم روشن', blue: 'تم آبی' };

function initTheme() {
    try {
        const saved = localStorage.getItem(THEME_KEY) || 'dark';
        document.body.classList.remove('theme-light', 'theme-blue');
        if (saved === 'light') document.body.classList.add('theme-light');
        else if (saved === 'blue') document.body.classList.add('theme-blue');
    } catch (e) {}
}
function toggleTheme() {
    let current = 'dark';
    if (document.body.classList.contains('theme-light')) current = 'light';
    else if (document.body.classList.contains('theme-blue')) current = 'blue';
    const next = THEME_CYCLE[(THEME_CYCLE.indexOf(current) + 1) % THEME_CYCLE.length];
    document.body.classList.remove('theme-light', 'theme-blue');
    if (next === 'light') document.body.classList.add('theme-light');
    else if (next === 'blue') document.body.classList.add('theme-blue');
    try { localStorage.setItem(THEME_KEY, next); } catch (e) {}
    showToast(THEME_LABELS[next], 'success');
}
function applyFontScale() {
    document.documentElement.style.zoom = fontScale;
    const el = document.getElementById('font-size-value');
    if (el) el.textContent = fontScale.toFixed(2);
}
function initFont() {
    let saved = 1;
    try { saved = parseFloat(localStorage.getItem(FONT_KEY) || '1'); } catch (e) {}
    fontScale = isNaN(saved) ? 1 : Math.max(0.85, Math.min(1.3, saved));
    applyFontScale();
}
function changeFont(delta) {
    fontScale = Math.max(0.85, Math.min(1.3, fontScale + delta));
    try { localStorage.setItem(FONT_KEY, fontScale); } catch (e) {}
    applyFontScale();
}

// ============================================================
// اسپلش و آنبوردینگ
// ============================================================
const ONBOARDING_KEY = 'codetutor-onboarding-v1';
let _obSlide = 0, _obInit = false;

function initSplashAndOnboarding() {
    const splash = document.getElementById('splash-screen');
    const ob = document.getElementById('onboarding');
    if (!splash || !ob) return;
    const seen = localStorage.getItem(ONBOARDING_KEY);
    setTimeout(() => {
        splash.classList.add('hidden');
        if (!seen) { ob.classList.add('active'); initOnboardingSlides(); }
    }, seen ? 900 : 1400);
}
function initOnboardingSlides() {
    if (_obInit) return;
    _obInit = true;
    const slides = document.querySelectorAll('.onboarding-slide');
    const dots = document.querySelectorAll('.onboarding-dots .dot');
    const next = document.getElementById('onboarding-next');
    const skip = document.getElementById('onboarding-skip');
    const ob = document.getElementById('onboarding');
    if (!slides.length || !next) return;
    function go(n) {
        slides.forEach((s, i) => s.classList.toggle('active', i === n));
        dots.forEach((d, i) => d.classList.toggle('active', i === n));
        _obSlide = n;
        next.textContent = n === slides.length - 1 ? 'شروع' : 'بعدی';
    }
    function finish() { try { localStorage.setItem(ONBOARDING_KEY, '1'); } catch (e) {} ob.classList.remove('active'); }
    next.addEventListener('click', () => _obSlide < slides.length - 1 ? go(_obSlide + 1) : finish());
    if (skip) skip.addEventListener('click', finish);
    let sx = null;
    ob.addEventListener('touchstart', e => sx = e.touches[0].clientX, { passive: true });
    ob.addEventListener('touchend', e => {
        if (sx === null) return;
        const dx = e.changedTouches[0].clientX - sx;
        if (Math.abs(dx) > 50) {
            if (dx < 0 && _obSlide < slides.length - 1) go(_obSlide + 1);
            else if (dx > 0 && _obSlide > 0) go(_obSlide - 1);
        }
        sx = null;
    }, { passive: true });
}

// ============================================================
// ناوبری
// ============================================================
function showScreen(id) {
    document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));
    const t = document.getElementById(id);
    if (t) { t.classList.add('active'); window.scrollTo({ top: 0, behavior: 'instant' }); }
}
function goHome() { showScreen('home-screen'); }

function isLessonUnlocked(id) {
    if (id.startsWith('article-')) return true;
    if (BEGINNER_IDS.includes(id)) return true;
    if (state.purchasedTiers.includes('bundle')) return true;
    if (MEDIUM_IDS.includes(id)) return state.purchasedTiers.includes('medium');
    if (ADVANCED_IDS.includes(id)) return state.purchasedTiers.includes('advanced');
    return false;
}

// ============================================================
// رندر بخش‌ها
// ============================================================
function renderSection(s) {
    switch (s.type) {
        case 'intro': return `<p class="lesson-paragraph" style="font-size:16px;color:var(--text);line-height:1.9;margin-bottom:28px;">${s.text}</p>`;
        case 'heading': return `<div class="lesson-section-head"><span class="lesson-section-num">${s.num}</span><h3 class="lesson-section-title">${s.text}</h3></div>`;
        case 'paragraph': return `<p class="lesson-paragraph">${s.text}</p>`;
        case 'callout': return `<div class="lesson-callout"><div class="lesson-callout-title">${escapeHtml(s.title)}</div><div class="lesson-callout-text">${s.text}</div></div>`;
        case 'code': {
            const hasTry = s.lang === 'HTML';
            const enc = encodeURIComponent(s.code);
            const explainHtml = (s.explain && s.explain.length > 0)
                ? `<div class="lesson-code-explain"><div class="lesson-code-explain-title"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><line x1="12" y1="16" x2="12" y2="12"/><line x1="12" y1="8" x2="12.01" y2="8"/></svg> توضیح خط به خط</div><ul class="lesson-code-explain-list">${s.explain.map(e => `<li>${e}</li>`).join('')}</ul></div>`
                : '';
            return `<div class="lesson-code"><div class="lesson-code-header"><div class="lesson-code-dots"><span></span><span></span><span></span></div><div class="lesson-code-lang">${s.lang || 'HTML'}</div></div><pre class="lesson-code-body">${escapeHtml(s.code)}</pre><div class="lesson-code-actions"><button class="lesson-code-copy" data-copy-code="${enc}"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="9" y="9" width="13" height="13" rx="2" ry="2"/><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"/></svg> کپی</button>${hasTry ? `<button class="lesson-code-try" data-try-code="${enc}"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><polygon points="5 3 19 12 5 21 5 3"/></svg> امتحان کنید</button>` : ''}</div>${s.caption ? `<div class="lesson-code-caption">${escapeHtml(s.caption)}</div>` : ''}</div>${explainHtml}`;
        }
        case 'list': return `<ul class="lesson-list">${s.items.map(i => `<li>${i}</li>`).join('')}</ul>`;
        case 'exercise': return `<div class="lesson-exercise"><div class="lesson-exercise-title">${escapeHtml(s.title)}</div><div class="lesson-exercise-text">${s.text}</div></div>`;
        case 'tag-block': {
            const attrsHtml = s.attrs && s.attrs.length > 0
                ? `<div class="tag-block-attrs"><div class="tag-block-attrs-label">ویژگی‌های مهم:</div><ul>${s.attrs.map(a => `<li><strong>${a.name}</strong> — ${a.desc}</li>`).join('')}</ul></div>`
                : '';
            const enc = encodeURIComponent(s.code);
            return `<div class="tag-block"><div><span class="tag-block-name">&lt;${s.tag}&gt;</span> <span class="tag-block-role">${s.role}</span></div><div class="tag-block-desc">${s.desc}</div>${attrsHtml}<div class="lesson-code"><div class="lesson-code-header"><div class="lesson-code-dots"><span></span><span></span><span></span></div><div class="lesson-code-lang">HTML</div></div><pre class="lesson-code-body">${escapeHtml(s.code)}</pre><div class="lesson-code-actions"><button class="lesson-code-copy" data-copy-code="${enc}"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="9" y="9" width="13" height="13" rx="2" ry="2"/><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"/></svg> کپی</button><button class="lesson-code-try" data-try-code="${enc}"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><polygon points="5 3 19 12 5 21 5 3"/></svg> امتحان کنید</button></div></div></div>`;
        }
        case 'quiz': {
            const answerId = 'answer-' + s.id;
            return `<div class="lesson-quiz"><div class="lesson-quiz-header"><div class="lesson-quiz-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"/><line x1="12" y1="17" x2="12.01" y2="17"/></svg></div><div class="lesson-quiz-label">سؤال کوتاه</div></div><div class="lesson-quiz-body"><div class="lesson-quiz-question">${s.question}</div><textarea class="lesson-quiz-textarea" placeholder="جواب خود را اینجا بنویسید..."></textarea><button class="lesson-quiz-show-btn" data-quiz-show="${answerId}"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/></svg> نمایش پاسخ</button><div class="lesson-quiz-answer" id="${answerId}"><div class="lesson-quiz-answer-title"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg> پاسخ صحیح</div><div class="lesson-quiz-answer-text">${s.answer}</div></div></div></div>`;
        }
        case 'project': {
            const enc = encodeURIComponent(s.starterCode || '');
            const reqHtml = s.requirements && s.requirements.length > 0
                ? `<ul class="lesson-project-requirements">${s.requirements.map(r => `<li>${r}</li>`).join('')}</ul>` : '';
            return `<div class="lesson-project"><div class="lesson-project-header"><div class="lesson-project-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="12" y1="18" x2="12" y2="12"/><line x1="9" y1="15" x2="15" y2="15"/></svg></div><div class="lesson-project-label">پروژه‌ی عملی</div></div><div class="lesson-project-body"><div class="lesson-project-title">${escapeHtml(s.title)}</div><div class="lesson-project-desc">${s.description}</div>${reqHtml}<button class="lesson-project-try-btn" data-project-code="${enc}"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polygon points="5 3 19 12 5 21 5 3"/></svg> شروع پروژه در تمرینگاه</button></div></div>`;
        }
        case 'color-palette': {
            return `<div class="color-palette">${s.colors.map(c => `<div class="color-swatch" style="background: ${c.hex};" data-copy-color="${c.hex}"><div class="color-swatch-label">${c.hex.toUpperCase()}</div><div class="color-swatch-name">${c.name}</div></div>`).join('')}</div>`;
        }
        default: return '';
    }
}

function renderCompleteButton(id) {
    const xp = LESSONS[id].xp || 50;
    return `<div class="lesson-complete-section"><div class="lesson-complete-card"><div class="lesson-complete-icon">✦</div><div class="lesson-complete-title">درس را به پایان رساندید</div><div class="lesson-complete-text">با تکمیل این درس، ${xp} امتیاز تجربه دریافت خواهید کرد.</div><button class="complete-btn" data-complete-id="${id}">تکمیل درس و دریافت پاداش</button></div></div>`;
}
function renderCompleteState(id) {
    const nextId = getNextLessonId(id);
    const action = nextId ? `<button class="next-lesson-btn" data-open-id="${nextId}">درس بعدی</button>` : `<button class="back-home-btn" data-back-home="1">بازگشت به خانه</button>`;
    return `<div class="lesson-complete-section"><div class="lesson-complete-card done"><div class="lesson-complete-icon done">✓</div><div class="lesson-complete-title">این درس را تکمیل کرده‌اید</div><div class="lesson-complete-text">آموخته‌های خود را در درس بعدی عمیق‌تر کنید.</div>${action}</div></div>`;
}
function getNextLessonId(id) {
    const idx = LESSON_ORDER.indexOf(id);
    if (idx === -1 || idx === LESSON_ORDER.length - 1) return null;
    const next = LESSON_ORDER[idx + 1];
    return LESSONS[next] && isLessonUnlocked(next) ? next : null;
}

function renderLesson(id) {
    const lesson = LESSONS[id];
    const headerTitle = document.getElementById('lesson-header-title');
    const content = document.getElementById('lesson-content');
    if (!lesson) { headerTitle.textContent = 'درس'; content.innerHTML = ''; return; }
    if (lesson.isArticle) {
        headerTitle.textContent = lesson.title;
        const hero = `<div class="lesson-hero"><div class="lesson-hero-meta"><span>${lesson.level}</span><span class="dot"></span><span>${lesson.duration}</span></div><h2 class="lesson-hero-title">${lesson.title}</h2></div>`;
        const sections = lesson.sections.map(renderSection).join('');
        const backHtml = `<div class="lesson-complete-section"><div class="lesson-complete-card done"><div class="lesson-complete-icon done">✓</div><div class="lesson-complete-title">پایان مقاله</div><div class="lesson-complete-text">حالا می‌توانید به درس‌ها بروید.</div><button class="back-home-btn" data-back-home="1">بازگشت به خانه</button></div></div>`;
        content.innerHTML = hero + sections + backHtml;
        return;
    }
    if (!isLessonUnlocked(id)) {
        headerTitle.textContent = lesson.title;
        content.innerHTML = `<div class="lesson-hero"><div class="lesson-hero-meta"><span>${lesson.level}</span><span class="dot"></span><span>${lesson.duration}</span></div><h2 class="lesson-hero-title">${lesson.title}</h2></div><div class="lesson-complete-section"><div class="lesson-complete-card"><div class="lesson-complete-icon">🔒</div><div class="lesson-complete-title">این درس قفل است</div><div class="lesson-complete-text">برای دسترسی، بسته‌ی مناسب را خریداری کنید.</div><button class="complete-btn" data-goto-purchase="1">مشاهده‌ی بسته‌ها</button></div></div>`;
        return;
    }
    headerTitle.textContent = lesson.title;
    const hero = `<div class="lesson-hero"><div class="lesson-hero-meta"><span>${lesson.level}</span><span class="dot"></span><span>${lesson.duration}</span></div><h2 class="lesson-hero-title">${lesson.title}</h2></div>`;
    const sections = lesson.sections.map(renderSection).join('');
    const isComplete = state.completedLessons.includes(id);
    content.innerHTML = hero + sections + (isComplete ? renderCompleteState(id) : renderCompleteButton(id));
}

// ============================================================
// تکمیل درس
// ============================================================
function completeLesson(id) {
    if (LESSONS[id] && LESSONS[id].isArticle) return;
    if (state.completedLessons.includes(id)) return;
    const lesson = LESSONS[id];
    if (!lesson) return;
    const xp = lesson.xp || 50;
    state.completedLessons.push(id);
    state.xp += xp;
    saveState();
    updateStatsUI();
    markLessonCompleteInList(id);
    updateContinueCard();
    document.getElementById('reward-xp').textContent = '+' + xp;
    document.getElementById('reward-lesson-name').textContent = lesson.title;
    document.getElementById('reward-modal').classList.add('active');
}
function closeRewardModal() {
    document.getElementById('reward-modal').classList.remove('active');
    if (currentLessonId) renderLesson(currentLessonId);
}

// ============================================================
// UI Updates
// ============================================================
function updateStatsUI() {
    const completed = state.completedLessons.length;
    const progress = Math.round((completed / TOTAL_LESSONS) * 100);
    const sv = document.querySelectorAll('#home-screen .stat-value');
    if (sv.length >= 3) {
        sv[0].innerHTML = `${completed}<span class="unit">/${TOTAL_LESSONS}</span>`;
        sv[1].innerHTML = `${progress}<span class="unit">%</span>`;
        sv[2].innerHTML = `${state.streakDays}<span class="unit"> روز</span>`;
    }
    const xp = document.getElementById('xp-value');
    if (xp) xp.textContent = state.xp;
    const fill = document.querySelector('#home-screen .progress-fill');
    if (fill) fill.style.width = Math.max(progress, 0) + '%';
    const counts = document.querySelectorAll('#home-screen .section-count');
    if (counts.length >= 4) {
        counts[1].textContent = `${state.completedLessons.filter(id => BEGINNER_IDS.includes(id)).length} / 3`;
        counts[2].textContent = `${state.completedLessons.filter(id => MEDIUM_IDS.includes(id)).length} / 10`;
        counts[3].textContent = `${state.completedLessons.filter(id => ADVANCED_IDS.includes(id)).length} / 11`;
    }
}
function markLessonCompleteInList(id) {
    const el = document.querySelector(`#home-screen .lesson[data-lesson-id="${id}"]`);
    if (!el || el.classList.contains('completed')) return;
    el.classList.add('completed');
    const num = el.querySelector('.lesson-num');
    if (num) num.textContent = '✓';
    const tag = el.querySelector('.lesson-tag');
    if (tag) { tag.className = 'lesson-tag tag-done'; tag.textContent = 'تکمیل'; }
}
function updateContinueCard() {
    const card = document.querySelector('#home-screen .continue-card');
    if (!card) return;
    const nextId = LESSON_ORDER.find(id => !state.completedLessons.includes(id) && LESSONS[id] && isLessonUnlocked(id));
    if (!nextId) {
        card.querySelector('.continue-meta').textContent = 'آفرین';
        card.querySelector('.continue-title').textContent = 'همه‌ی درس‌های آزاد تکمیل شده';
        card.querySelector('.continue-time').textContent = 'پایان';
        card.querySelector('.continue-btn').style.display = 'none';
        card.dataset.lessonId = '';
        return;
    }
    const lesson = LESSONS[nextId];
    const isFirst = state.completedLessons.length === 0;
    card.querySelector('.continue-meta').textContent = isFirst ? 'شروع از ابتدا' : 'ادامه یادگیری';
    card.querySelector('.continue-title').textContent = lesson.title;
    card.querySelector('.continue-time').textContent = lesson.duration;
    card.querySelector('.continue-btn').style.display = '';
    card.querySelector('.continue-btn').childNodes[0].textContent = (isFirst ? 'شروع یادگیری ' : 'ادامه یادگیری ');
    card.dataset.lessonId = nextId;
}
function updateCartBadge() {
    const badge = document.getElementById('cart-badge');
    if (!badge) return;
    let count = 0;
    if (!state.purchasedTiers.includes('bundle')) {
        if (!state.purchasedTiers.includes('medium')) count++;
        if (!state.purchasedTiers.includes('advanced')) count++;
    }
    if (count > 0) { badge.textContent = count; badge.style.display = 'flex'; }
    else badge.style.display = 'none';
}
function applyPurchaseState() {
    document.querySelectorAll('#home-screen .lesson').forEach(el => {
        const id = el.dataset.lessonId;
        if (!id) return;
        if (isLessonUnlocked(id) && el.classList.contains('locked')) {
            el.classList.remove('locked');
            const tag = el.querySelector('.lesson-tag');
            if (tag && !el.classList.contains('completed')) {
                tag.className = 'lesson-tag tag-free';
                tag.textContent = 'آزاد';
            }
        }
    });
    if (isLessonUnlocked('lesson-20') && isLessonUnlocked('lesson-06')) {
        const b = document.getElementById('unlock-banner');
        if (b) b.style.display = 'none';
    }
    updateCartBadge();
}

// ============================================================
// بازنشانی
// ============================================================
function resetProgress() {
    if (state.completedLessons.length === 0 && state.xp === 0) {
        showToast('پیشرفتی برای بازنشانی وجود ندارد', 'error');
        return;
    }
    if (!confirm('آیا از بازنشانی پیشرفت مطمئن هستید؟\nتمام درس‌ها و XP پاک می‌شوند.\n\nبسته‌های خریداری‌شده حفظ می‌شوند.')) return;
    if (!confirm('این عمل قابل بازگشت نیست. برای تأیید نهایی، دوباره تأیید کنید.')) return;
    state.completedLessons = []; state.xp = 0; state.streakDays = 1;
    state.lastActiveDate = new Date().toDateString();
    saveState();
    document.querySelectorAll('#home-screen .lesson.completed').forEach(el => {
        el.classList.remove('completed');
        const num = el.querySelector('.lesson-num');
        if (num && el.dataset.lessonId) num.textContent = el.dataset.lessonId.replace('lesson-', '');
        const tag = el.querySelector('.lesson-tag');
        if (tag) {
            const u = isLessonUnlocked(el.dataset.lessonId);
            tag.className = u ? 'lesson-tag tag-free' : 'lesson-tag tag-lock';
            tag.textContent = u ? 'آزاد' : 'قفل';
        }
    });
    updateStatsUI();
    updateContinueCard();
    if (currentLessonId) renderLesson(currentLessonId);
    showScreen('home-screen');
    setTimeout(() => showToast('پیشرفت بازنشانی شد', 'success'), 150);
}

// ============================================================
// خرید + فعال‌سازی
// ============================================================
function renderPurchaseTiers() {
    const container = document.getElementById('purchase-tiers');
    if (!container) return;
    container.innerHTML = Object.entries(TIERS).map(([k, t]) => {
        const purchased = state.purchasedTiers.includes(k);
        return `<div class="tier-card ${t.featured ? 'featured' : ''} ${purchased ? 'purchased' : ''}"><div class="tier-badge">${t.name}</div><div class="tier-title">${t.title}</div><div class="tier-subtitle">${t.subtitle}</div><div class="tier-price">${t.price} <span class="unit">تومان</span></div><ul class="tier-features">${t.features.map(f => `<li>${f}</li>`).join('')}</ul><button class="tier-btn ${purchased ? 'purchased' : ''}" data-buy-tier="${k}" ${purchased ? 'disabled' : ''}>${purchased ? '✓ خریداری شده' : 'خرید بسته'}</button></div>`;
    }).join('');
}
function initiatePurchase(key) {
    if (state.purchasedTiers.includes(key)) { showToast('قبلاً خریداری شده', 'error'); return; }
    const tier = TIERS[key];
    const act = TIER_ACTIVATION[key];
    if (!tier || !act) return;

    pendingPurchaseTier = key;
    document.getElementById('activation-title').textContent = tier.name;
    document.getElementById('activation-price').textContent = tier.price + ' تومان';
    document.getElementById('activation-instructions').textContent = act.rubikaText;
    const input = document.getElementById('activation-code-input');
    input.value = '';
    input.classList.remove('error');
    document.getElementById('activation-error').textContent = '';
    document.getElementById('activation-modal').classList.add('active');
    setTimeout(() => input.focus(), 180);
}
function confirmActivation() {
    if (!pendingPurchaseTier) return;
    const key = pendingPurchaseTier;
    const input = document.getElementById('activation-code-input');
    const errorEl = document.getElementById('activation-error');
    if (!input || !errorEl) return;

    const raw = (input.value || '').trim();
    const code = raw.toUpperCase().replace(/\s+/g, '');
    const expected = (TIER_ACTIVATION[key]?.code || '').toUpperCase();

    if (!code) {
        errorEl.textContent = 'لطفاً کد فعال‌سازی را وارد کنید';
        input.classList.add('error');
        input.focus();
        return;
    }
    if (code !== expected) {
        errorEl.textContent = 'کد فعال‌سازی نامعتبر است. لطفاً دوباره بررسی کنید.';
        input.classList.add('error');
        input.select();
        return;
    }

    const tier = TIERS[key];
    state.purchasedTiers.push(key);
    if (key === 'bundle') {
        if (!state.purchasedTiers.includes('medium')) state.purchasedTiers.push('medium');
        if (!state.purchasedTiers.includes('advanced')) state.purchasedTiers.push('advanced');
    }
    saveState();
    applyPurchaseState();
    updateContinueCard();
    renderPurchaseTiers();
    document.getElementById('activation-modal').classList.remove('active');
    pendingPurchaseTier = null;
    showToast('بسته‌ی «' + tier.name + '» با موفقیت فعال شد ✓', 'success');
}

// ============================================================
// Toast و کپی
// ============================================================
function showToast(msg, type = 'info') {
    const c = document.getElementById('toast-container');
    if (!c) return;
    const t = document.createElement('div');
    t.className = 'toast' + (type !== 'info' ? ' ' + type : '');
    t.textContent = msg;
    c.appendChild(t);
    setTimeout(() => { t.classList.add('out'); setTimeout(() => t.remove(), 250); }, 2200);
}
function copyCodeToClipboard(encodedCode) {
    const code = decodeURIComponent(encodedCode);
    const tryCopy = () => {
        if (navigator.clipboard && navigator.clipboard.writeText) return navigator.clipboard.writeText(code);
        const ta = document.createElement('textarea');
        ta.value = code; ta.style.position = 'fixed'; ta.style.opacity = '0';
        document.body.appendChild(ta); ta.select();
        try { document.execCommand('copy'); } catch (e) {}
        document.body.removeChild(ta);
        return Promise.resolve();
    };
    tryCopy().then(() => showToast('کد کپی شد ✓', 'success')).catch(() => showToast('خطا در کپی', 'error'));
}
function copyColorToClipboard(color) {
    const tryCopy = () => {
        if (navigator.clipboard && navigator.clipboard.writeText) return navigator.clipboard.writeText(color);
        const ta = document.createElement('textarea');
        ta.value = color; ta.style.position = 'fixed'; ta.style.opacity = '0';
        document.body.appendChild(ta); ta.select();
        try { document.execCommand('copy'); } catch (e) {}
        document.body.removeChild(ta);
        return Promise.resolve();
    };
    tryCopy().then(() => showToast(color + ' کپی شد', 'success')).catch(() => showToast('خطا', 'error'));
}

// ============================================================
// ناوبری درس
// ============================================================
function openLesson(id) {
    if (!LESSONS[id]) return;
    currentLessonId = id;
    renderLesson(id);
    showScreen('lesson-screen');
}

// ============================================================
// سواپ
// ============================================================
function setupSwipe() {
    ['lesson-screen', 'playground-screen', 'purchase-screen'].forEach(id => {
        const el = document.getElementById(id);
        if (!el) return;
        let sx = null, sy = 0;
        el.addEventListener('touchstart', (e) => {
            if (e.target.closest('.CodeMirror, .playground-editor, .playground-preview, iframe, .lesson-code, input, textarea, .ai-panel, .lesson-quiz-textarea')) { sx = null; return; }
            sx = e.touches[0].clientX;
            sy = e.touches[0].clientY;
        }, { passive: true });
        el.addEventListener('touchend', (e) => {
            if (sx === null) return;
            const dx = e.changedTouches[0].clientX - sx;
            const dy = e.changedTouches[0].clientY - sy;
            if (Math.abs(dx) > 80 && Math.abs(dy) < 60) {
                if (id === 'playground-screen') document.getElementById('playground-back-btn').click();
                else goHome();
            }
            sx = null;
        }, { passive: true });
    });
}

// ============================================================
// سیستم فایل / تمرینگاه
// ============================================================
const FILES_KEY = 'codetutor-files-v1';
const DRAFT_KEY = 'codetutor-draft-v1';
const PLAYGROUND_DEFAULT = `<!DOCTYPE html>\n<html dir="rtl" lang="fa">\n<head>\n  <meta charset="UTF-8">\n  <style>\n    body {\n      font-family: Tahoma, sans-serif;\n      padding: 24px;\n      background: #f5f5f5;\n      color: #333;\n      line-height: 1.7;\n    }\n    h1 {\n      color: #f4b942;\n      font-size: 24px;\n      margin-bottom: 12px;\n    }\n    p {\n      font-size: 15px;\n      color: #555;\n    }\n  </style>\n</head>\n<body>\n  <h1>سلام، دنیا</h1>\n  <p>کد خود را در ویرایشگر بنویسید و نتیجه را همین‌جا ببینید.</p>\n</body>\n</html>`;

let cmEditor = null;
let projectsState = { projects: {}, currentId: null };
let currentProject = { id: null, name: 'بدون عنوان', savedCode: '' };
let draftTimer = null, previewTimer = null, pendingNameAction = null;

function loadProjectsState() {
    try {
        const s = JSON.parse(localStorage.getItem(FILES_KEY) || '{}');
        projectsState.projects = s.projects || {};
        projectsState.currentId = s.currentId || null;
    } catch (e) { projectsState = { projects: {}, currentId: null }; }
}
function persistProjectsState() { try { localStorage.setItem(FILES_KEY, JSON.stringify(projectsState)); } catch (e) {} }
function isDirty() { return cmEditor ? cmEditor.getValue() !== currentProject.savedCode : false; }
function updateFileUI() {
    const el = document.getElementById('playground-project-name');
    if (!el) return;
    const d = isDirty();
    el.textContent = currentProject.name + (d ? ' •' : '');
    el.classList.toggle('dirty', d);
}

function initPlayground() {
    const ta = document.getElementById('playground-editor');
    const preview = document.getElementById('playground-preview');
    const runBtn = document.getElementById('playground-run-btn');
    const resetBtn = document.getElementById('playground-reset-btn');
    const status = document.getElementById('playground-status');
    if (!ta) return;
    loadProjectsState();

    let initial = PLAYGROUND_DEFAULT;
    if (projectsState.currentId && projectsState.projects[projectsState.currentId]) {
        const p = projectsState.projects[projectsState.currentId];
        initial = p.code;
        currentProject = { id: projectsState.currentId, name: p.name, savedCode: p.code };
    } else currentProject = { id: null, name: 'بدون عنوان', savedCode: PLAYGROUND_DEFAULT };

    if (typeof window.CodeMirror === 'undefined') {
        status.textContent = 'ویرایشگر ساده';
        ta.style.flex = '1';
        ta.value = localStorage.getItem(DRAFT_KEY) || initial;
        const run = () => {
            preview.srcdoc = ta.value;
            try { localStorage.setItem(DRAFT_KEY, ta.value); } catch (e) {}
            updateFileUI();
        };
        run();
        ta.addEventListener('input', run);
        runBtn.addEventListener('click', run);
        return;
    }

    cmEditor = CodeMirror.fromTextArea(ta, {
        mode: 'htmlmixed', theme: 'material-darker', lineNumbers: true,
        lineWrapping: true, autoCloseBrackets: true, autoCloseTags: true,
        matchBrackets: true, indentUnit: 2, tabSize: 2, indentWithTabs: false
    });
    const draft = localStorage.getItem(DRAFT_KEY);
    cmEditor.setValue(draft && draft !== initial ? draft : initial);

    function run() {
        try {
            preview.srcdoc = cmEditor.getValue();
            status.textContent = 'اجرا شد';
            status.className = 'playground-status ok';
        } catch (e) { status.textContent = 'خطا'; status.className = 'playground-status err'; }
    }
    run();

    cmEditor.on('change', () => {
        clearTimeout(previewTimer);
        status.textContent = 'در حال تایپ...';
        status.className = 'playground-status';
        previewTimer = setTimeout(run, 700);
        clearTimeout(draftTimer);
        draftTimer = setTimeout(() => { try { localStorage.setItem(DRAFT_KEY, cmEditor.getValue()); } catch (e) {} updateFileUI(); }, 400);
        updateFileUI();
    });
    runBtn.addEventListener('click', run);

    document.getElementById('save-project-btn').addEventListener('click', () => {
        const code = cmEditor.getValue();
        if (currentProject.id && projectsState.projects[currentProject.id]) {
            projectsState.projects[currentProject.id].code = code;
            projectsState.projects[currentProject.id].updatedAt = Date.now();
            currentProject.savedCode = code;
            persistProjectsState();
            updateFileUI();
            showToast('پروژه ذخیره شد', 'success');
        } else openNameModal('save');
    });
    document.getElementById('save-as-btn').addEventListener('click', () => openNameModal('save-as'));
    document.getElementById('open-project-btn').addEventListener('click', () => {
        renderProjectsList();
        document.getElementById('projects-modal').classList.add('active');
    });
    document.getElementById('new-project-btn').addEventListener('click', () => {
        if (isDirty() && !confirm('تغییرات ذخیره‌نشده دارید. فایل جدید بسازید؟')) return;
        currentProject = { id: null, name: 'بدون عنوان', savedCode: PLAYGROUND_DEFAULT };
        projectsState.currentId = null;
        persistProjectsState();
        cmEditor.setValue(PLAYGROUND_DEFAULT);
        try { localStorage.removeItem(DRAFT_KEY); } catch (e) {}
        updateFileUI();
        showToast('فایل جدید ایجاد شد', 'success');
    });
    document.getElementById('download-project-btn').addEventListener('click', () => {
        const code = cmEditor.getValue();
        const name = (currentProject.name === 'بدون عنوان' ? 'project' : currentProject.name).replace(/[\\/:*?"<>|]/g, '_').trim() || 'project';
        try {
            const blob = new Blob([code], { type: 'text/html;charset=utf-8' });
            const url = URL.createObjectURL(blob);
            const a = document.createElement('a');
            a.href = url; a.download = name + '.html';
            document.body.appendChild(a); a.click(); document.body.removeChild(a);
            setTimeout(() => URL.revokeObjectURL(url), 1000);
            showToast('فایل دانلود شد', 'success');
        } catch (e) { showToast('خطا در دانلود', 'error'); }
    });
    const fi = document.getElementById('file-input');
    document.getElementById('import-project-btn').addEventListener('click', () => fi.click());
    fi.addEventListener('change', (e) => {
        const f = e.target.files[0];
        if (!f) return;
        const r = new FileReader();
        r.onload = (ev) => {
            if (isDirty() && !confirm('تغییرات ذخیره‌نشده دارید. بارگذاری کنید؟')) { fi.value = ''; return; }
            const name = f.name.replace(/\.(html|htm|txt)$/i, '').trim() || 'بدون عنوان';
            currentProject = { id: null, name, savedCode: '' };
            projectsState.currentId = null;
            persistProjectsState();
            cmEditor.setValue(ev.target.result);
            updateFileUI();
            showToast('فایل بارگذاری شد', 'success');
        };
        r.readAsText(f);
        fi.value = '';
    });

    const nameModal = document.getElementById('name-modal');
    const nameInput = document.getElementById('name-input');
    const nameConfirm = document.getElementById('name-confirm-btn');
    window.openNameModal = function (action) {
        pendingNameAction = action;
        nameInput.value = action === 'save-as' ? (currentProject.name === 'بدون عنوان' ? '' : currentProject.name + ' - کپی') : '';
        document.getElementById('name-modal-title').textContent = action === 'save-as' ? 'ذخیره با نام جدید' : 'نام پروژه را وارد کنید';
        nameModal.classList.add('active');
        setTimeout(() => nameInput.focus(), 150);
    };
    document.getElementById('name-cancel-btn').addEventListener('click', () => { nameModal.classList.remove('active'); pendingNameAction = null; });
    nameConfirm.addEventListener('click', () => {
        const name = nameInput.value.trim();
        if (!name) { showToast('نام را وارد کنید', 'error'); return; }
        const code = cmEditor.getValue();
        const id = 'proj_' + Date.now() + '_' + Math.random().toString(36).substring(2, 8);
        projectsState.projects[id] = { name, code, updatedAt: Date.now() };
        projectsState.currentId = id;
        currentProject = { id, name, savedCode: code };
        persistProjectsState();
        try { localStorage.removeItem(DRAFT_KEY); } catch (e) {}
        nameModal.classList.remove('active');
        pendingNameAction = null;
        updateFileUI();
        showToast('پروژه «' + name + '» ذخیره شد', 'success');
    });
    nameInput.addEventListener('keypress', (e) => { if (e.key === 'Enter') nameConfirm.click(); });

    function renderProjectsList() {
        const list = document.getElementById('projects-list');
        const ids = Object.keys(projectsState.projects).sort((a, b) => projectsState.projects[b].updatedAt - projectsState.projects[a].updatedAt);
        if (ids.length === 0) { list.innerHTML = '<div class="projects-empty">هنوز پروژه‌ای ذخیره نکرده‌اید</div>'; return; }
        list.innerHTML = ids.map(id => {
            const p = projectsState.projects[id];
            const cur = id === currentProject.id;
            return `<div class="project-item ${cur ? 'current' : ''}" data-open-project-id="${id}"><div class="project-item-body"><div class="project-item-name">${escapeHtml(p.name)}${cur ? ' <span class="current-badge">فعال</span>' : ''}</div><div class="project-item-meta">${timeAgo(p.updatedAt)}</div></div><button class="project-delete-btn" data-delete-project-id="${id}"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="3 6 5 6 21 6"/><path d="M19 6l-2 14a2 2 0 0 1-2 2H9a2 2 0 0 1-2-2L5 6"/><path d="M10 11v6"/><path d="M14 11v6"/></svg></button></div>`;
        }).join('');
    }

    document.getElementById('projects-list').addEventListener('click', (e) => {
        const del = e.target.closest('[data-delete-project-id]');
        if (del) {
            e.stopPropagation();
            const id = del.dataset.deleteProjectId;
            const p = projectsState.projects[id];
            if (!p || !confirm('پروژه «' + p.name + '» حذف شود؟')) return;
            delete projectsState.projects[id];
            if (projectsState.currentId === id) {
                projectsState.currentId = null;
                if (currentProject.id === id) currentProject = { id: null, name: 'بدون عنوان', savedCode: cmEditor.getValue() };
            }
            persistProjectsState();
            renderProjectsList();
            updateFileUI();
            showToast('پروژه حذف شد', 'success');
            return;
        }
        const item = e.target.closest('[data-open-project-id]');
        if (item) {
            const id = item.dataset.openProjectId;
            const p = projectsState.projects[id];
            if (!p) return;
            if (isDirty() && id !== currentProject.id && !confirm('تغییرات ذخیره‌نشده. باز شود؟')) return;
            currentProject = { id, name: p.name, savedCode: p.code };
            projectsState.currentId = id;
            persistProjectsState();
            cmEditor.setValue(p.code);
            try { localStorage.removeItem(DRAFT_KEY); } catch (e) {}
            document.getElementById('projects-modal').classList.remove('active');
            updateFileUI();
            showToast('پروژه باز شد', 'success');
        }
    });

    document.getElementById('playground-back-btn').addEventListener('click', () => {
        if (isDirty() && !confirm('تغییرات ذخیره‌نشده. بدون ذخیره خارج می‌شوید؟')) return;
        goHome();
    });
    resetBtn.addEventListener('click', () => {
        if (!confirm('ویرایشگر به حالت اولیه بازگردد؟')) return;
        cmEditor.setValue(PLAYGROUND_DEFAULT);
        showToast('ویرایشگر بازنشانی شد', 'success');
    });
    window.addEventListener('playground-shown', () => setTimeout(() => { cmEditor.refresh(); run(); }, 50));
    updateFileUI();
}

function buildPlaygroundCode(f) {
    const t = String(f).trim();
    if (/^<!doctype/i.test(t) || /^<html[\s>]/i.test(t)) return t;
    return `<!DOCTYPE html>\n<html dir="rtl" lang="fa">\n<head>\n  <meta charset="UTF-8">\n  <style>\n    body {\n      font-family: Tahoma, sans-serif;\n      padding: 24px;\n      background: #f5f5f5;\n      color: #333;\n      line-height: 1.7;\n    }\n    h1 { color: #f4b942; font-size: 24px; margin-bottom: 12px; }\n    h2 { color: #e07b00; font-size: 20px; margin-bottom: 10px; }\n    p { font-size: 15px; color: #555; }\n    a { color: #0088cc; }\n    img { max-width: 100%; border-radius: 6px; }\n  </style>\n</head>\n<body>\n${t.split('\n').map(line => '  ' + line).join('\n')}\n</body>\n</html>`;
}

function openPlaygroundWithCode(code) {
    if (cmEditor) {
        cmEditor.setValue(code);
        showScreen('playground-screen');
        setTimeout(() => { cmEditor.refresh(); window.dispatchEvent(new Event('playground-shown')); }, 50);
    } else {
        const ta = document.getElementById('playground-editor');
        if (ta) ta.value = code;
        try { localStorage.setItem(DRAFT_KEY, code); } catch (e) {}
        showScreen('playground-screen');
        setTimeout(() => { const p = document.getElementById('playground-preview'); if (p) p.srcdoc = code; }, 30);
    }
}

// ============================================================
// دستیار هوشمند کدآموز — نسخه 3.5
// ۲۰۰+ موضوع | تشخیص نیت پیشرفته | آگاهی از زمینه
// ============================================================
const AI_HISTORY_KEY = 'codetutor-ai-history-v1';
let aiMessages = [];
let aiTyping = false;
let aiSessionContext = { lastTopic: null, lastIntent: null, lastQuery: '', greetAcked: false };

// ---------- ابزارهای متنی ----------
function normalizeFa(s) {
    if (!s) return '';
    return String(s).toLowerCase()
        .replace(/[يىئ]/g, 'ی')
        .replace(/ك/g, 'ک')
        .replace(/[ًٌٍَُِّْ]/g, '')
        .replace(/[؟?!.,،؛:;()"']/g, ' ')
        .replace(/\s+/g, ' ')
        .trim();
}
function escapeRegex(s) { return String(s).replace(/[.*+?^${}()|[\]\\]/g, '\\$&'); }

// ---------- دانش‌نامه (۲۰۰+ موضوع) ----------
const AI_KB = [
    // ===== HTML: پایه =====
    { id: 'html-what', k: ['html چیست','html','زبان تگی','markup','اچ تی ام ال'], a: 'HTML = **HyperText Markup Language** — زبان **نشانه‌گذاری**، نه برنامه‌نویسی.\n\nدستورات اجرا نمی‌شوند؛ فقط برچسب می‌زنند که هر بخش چه نقشی دارد.\n\n`<h1>عنوان</h1>`\n`<p>پاراگراف</p>`\n\nمرورگر ساختار را می‌سازد، CSS ظاهرش را تعیین می‌کند.', related: ['doc-structure','css-what'] },
    { id: 'doctype', k: ['doctype','<!doctype'], a: '`<!DOCTYPE html>` — اولین خط هر سند HTML5.\n\nبه مرورگر می‌گوید «این سند HTML5 است» و از حالت quirks (رفتار قدیمی) خارج می‌شود.\n\nبدون آن، مرورگر ممکن است در حالت سازگاری با IE کار کند و طرح شما بشکند.', related: ['doc-structure'] },
    { id: 'doc-structure', k: ['ساختار سند','ساختار html','head','body','document structure'], a: 'ساختار پایه:\n\n`<!DOCTYPE html>`\n`<html lang="fa" dir="rtl">`\n`<head>`\n`  <meta charset="UTF-8">`\n`  <meta name="viewport" content="width=device-width, initial-scale=1.0">`\n`  <title>عنوان</title>`\n`</head>`\n`<body>`\n`  <h1>محتوا</h1>`\n`</body>`\n`</html>`\n\n• head → اطلاعات پشت صحنه\n• body → محتوای قابل مشاهده', related: ['meta-tags','viewport'] },
    { id: 'meta-tags', k: ['meta','charset','description','og tag'], a: 'تگ‌های `<meta>` مهم:\n• `<meta charset="UTF-8">` — کدگذاری\n• `<meta name="viewport" content="width=device-width, initial-scale=1.0">` — واکنش‌گرایی\n• `<meta name="description" content="...">` — توضیح برای سئو\n• `<meta property="og:title" content="...">` — اشتراک در شبکه‌های اجتماعی', related: ['viewport','seo'] },
    { id: 'viewport', k: ['viewport','device-width','واکنش گرایی meta'], a: '`<meta name="viewport" content="width=device-width, initial-scale=1.0">`\n\nبدون این، موبایل صفحه را در عرض ۹۸۰px رندر می‌کند و کل طرح کوچک می‌شود.\n\n`width=device-width` → عرض = عرض دستگاه\n`initial-scale=1.0` → بدون زوم اولیه', related: ['responsive','meta-tags'] },

    // ===== HTML: متن =====
    { id: 'h1-h6', k: ['h1','h2','h3','h4','h5','h6','heading','عنوان','تیتر','هدینگ'], a: 'شش سطح عنوان: `<h1>` تا `<h6>`.\n\n• `<h1>` مهم‌ترین — **فقط یکی در هر صفحه**\n• `<h2>` بخش‌های اصلی\n• `<h3>` تا `<h6>` زیربخش‌ها\n\n⚠️ سلسله‌مراتب را نشکن: h1 → h2 → h3 (نه h1 → h3).\n\nسئو و دسترسی‌پذیری به آن وابسته‌اند.', related: ['p','semantic','seo'] },
    { id: 'p', k: ['پاراگراف','p tag','<p>'], a: '`<p>متن پاراگراف</p>`\n\nهر بلوک متن در یک پاراگراف. مرورگر خودکار بین پاراگراف‌ها فاصله می‌گذارد.\n\nبرای خط جدید داخل پاراگراف از `<br>` استفاده کن، نه پاراگراف جدید.', related: ['h1-h6','br-hr'] },
    { id: 'strong-em-b-i', k: ['strong','em','<b>','<i>','تأکید','bold','italic'], a: '• `<strong>` — **مهم** (معنادار، صفحه‌خوان با تأکید می‌خواند)\n• `<em>` — *تأکید* (معنادار)\n• `<b>` — فقط ضخیم (بدون معنا)\n• `<i>` — فقط مورب (بدون معنا)\n\n✅ برای معنا از strong/em، برای ظاهر فقط از b/i.', related: ['p','mark-small'] },
    { id: 'br-hr', k: ['<br>','<hr>','line break','خط افقی'], a: '• `<br>` — شکست خط (بدون تگ بسته)\n• `<hr>` — خط افقی جداکننده (بدون تگ بسته)\n\n⚠️ برای فاصله بین پاراگراف‌ها از `<br>` استفاده نکن — از CSS `margin` استفاده کن.', related: ['p'] },
    { id: 'blockquote-q-cite', k: ['blockquote','<q>','cite','نقل قول'], a: '• `<blockquote>` — نقل قول بلوکی (چند خط)\n• `<q>` — نقل قول درون‌خطی (خودکار «» می‌گذارد)\n• `<cite>` — منبع/عنوان اثر\n\n`<blockquote cite="url">`\n`  <p>متن نقل قول</p>`\n`</blockquote>`', related: ['p'] },
    { id: 'code-pre-kbd', k: ['<code>','<pre>','<kbd>','samp','var tag','کد'], a: '• `<code>` — کد درون‌خطی\n• `<pre>` — متن پیش‌فرمتی (فاصله‌ها حفظ می‌شوند)\n• `<kbd>` — کلید صفحه‌کلید (Ctrl+S)\n• `<samp>` — خروجی برنامه\n\n`<pre><code>const x = 1;</code></pre>`', related: ['p'] },
    { id: 'mark-small', k: ['<mark>','<small>','highlight','highlight text'], a: '• `<mark>` — برجسته‌سازی (زرد)\n• `<small>` — متن کوچک‌تر (پانویس، حق کپی)\n\n`<p>این <mark>مهم</mark> است.</p>`', related: ['strong-em-b-i'] },
    { id: 'sub-sup', k: ['sub','sup','زیرنویس','بالانویس'], a: '• `<sub>` — زیرنویس (H₂O)\n• `<sup>` — بالانویس (x²)\n\n`H<sub>2</sub>O`\n`x<sup>2</sup>`', related: ['p'] },
    { id: 'abbr', k: ['abbr','اختصار'], a: '`<abbr title="HyperText Markup Language">HTML</abbr>`\n\nهنگام نگه‌داشتن موس، توضیح کامل نمایش داده می‌شود.\nمفید برای دسترسی‌پذیری و اختصارات.', related: ['p'] },
    { id: 'address-time', k: ['address','<time>','تاریخ','آدرس'], a: '• `<address>` — اطلاعات تماس (نویسنده)\n• `<time datetime="2025-01-15">۱۵ ژانویه</time>` — تاریخ معنادار برای ماشین‌ها (سئو)', related: ['p'] },

    // ===== HTML: لینک و رسانه =====
    { id: 'a-link', k: ['لینک','پیوند','<a>','href','anchor'], a: '`<a href="https://example.com">متن لینک</a>`\n\n• `href` — آدرس مقصد (اجباری)\n• متن توصیفی بگذار: «مقاله‌ی X» نه «اینجا کلیک کنید»\n• لینک داخلی: `href="/about"`\n• لینک به بخش: `href="#section-id"`', related: ['a-target','a-mailto-tel'] },
    { id: 'a-target', k: ['target','_blank','تب جدید'], a: '`target="_blank"` — باز کردن لینک در تب جدید.\n\n⚠️ همیشه با `rel="noopener noreferrer"` ترکیب کن:\n`<a href="..." target="_blank" rel="noopener noreferrer">`\n\nبدون rel، صفحه‌ی مقصد می‌تواند به `window.opener` دسترسی داشته باشد (خطر امنیتی).', related: ['a-link'] },
    { id: 'a-mailto-tel', k: ['mailto','tel','ایمیل لینک','تماس'], a: '• ایمیل: `<a href="mailto:me@site.com">تماس</a>`\n• تلفن: `<a href="tel:+989121234567">تماس</a>`\n• SMS: `<a href="sms:+98912">پیام</a>`\n\nمی‌توانی موضوع ایمیل هم بگذاری:\n`<a href="mailto:me@site.com?subject=سلام">`', related: ['a-link'] },
    { id: 'img', k: ['تصویر','<img>','عکس','alt','src'], a: '`<img src="photo.jpg" alt="توضیح">`\n\n• `src` — آدرس\n• `alt` — توضیح (**اجباری**)\n• `width/height` — ابعاد (جلوگیری از پرش)\n• `loading="lazy"` — لود تنبل\n\nتگ بسته ندارد.', related: ['figure-figcaption','picture-srcset'] },
    { id: 'figure-figcaption', k: ['figure','figcaption','تصویر با شرح'], a: '`<figure>`\n`  <img src="..." alt="...">`\n`  <figcaption>شرح تصویر</figcaption>`\n`</figure>`\n\nبرای گروه‌بندی تصویر با شرح — معنایی و سئوپسند.', related: ['img'] },
    { id: 'picture-srcset', k: ['picture','srcset','تصویر واکنش گرا'], a: '`<picture>`\n`  <source srcset="img.webp" type="image/webp">`\n`  <source srcset="img.jpg" type="image/jpeg">`\n`  <img src="img.jpg" alt="...">`\n`</picture>`\n\nبرای فرمت‌های مختلف یا اندازه‌های واکنش‌گرا (srcset).', related: ['img','responsive'] },
    { id: 'video', k: ['ویدیو','<video>','video tag'], a: '`<video controls width="400" poster="cover.jpg">`\n`  <source src="v.mp4" type="video/mp4">`\n`  <source src="v.webm" type="video/webm">`\n`  مرورگر شما ویدیو را پشتیبانی نمی‌کند.`\n`</video>`\n\n• `controls` — دکمه‌های پخش\n• `autoplay` + `muted` — پخش خودکار (بدون صدا)\n• `loop` — تکرار', related: ['audio','iframe'] },
    { id: 'audio', k: ['صدا','<audio>','audio tag','موسیقی'], a: '`<audio controls>`\n`  <source src="music.mp3" type="audio/mpeg">`\n`  <source src="music.ogg" type="audio/ogg">`\n`</audio>`\n\n`autoplay` + `muted` برای پخش خودکار (اکثر مرورگرها بدون mute اجازه نمی‌دهند).', related: ['video'] },
    { id: 'iframe', k: ['iframe','جاسازی','embed'], a: '`<iframe src="https://example.com" title="توضیح" width="100%" height="400">`\n`</iframe>`\n\n• `title` — برای دسترسی‌پذیری **اجباری**\n• `allowfullscreen` — برای ویدیو\n• `loading="lazy"` — لود تنبل\n\nپرکاربرد: YouTube، Google Maps، کدهای پرداخت.', related: ['video','a11y'] },

    // ===== HTML: لیست =====
    { id: 'ul', k: ['<ul>','لیست نامرتب','unordered list'], a: '`<ul>`\n`  <li>آیتم ۱</li>`\n`  <li>آیتم ۲</li>`\n`</ul>`\n\nبا نقطه یا دایره. برای موارد بدون ترتیب.\n\nاستایل: `list-style-type: disc | circle | square | none;`', related: ['ol','li'] },
    { id: 'ol', k: ['<ol>','لیست مرتب','ordered list'], a: '`<ol>`\n`  <li>قدم ۱</li>`\n`  <li>قدم ۲</li>`\n`</ol>`\n\nبا شماره. برای مراحل ترتیبی.\n\n`start="5"` — شروع از ۵\n`type="A"` — الف، ب، ج\n`reversed` — معکوس', related: ['ul','li'] },
    { id: 'li', k: ['<li>','list item','آیتم لیست'], a: '`<li>` داخل `<ul>` یا `<ol>` قرار می‌گیرد.\n\nمی‌تواند شامل هر عنصری باشد: `<a>`، `<p>`، حتی `<ul>` تودرتو.', related: ['ul','ol'] },
    { id: 'dl-dt-dd', k: ['<dl>','<dt>','<dd>','definition list'], a: 'لیست تعاریف:\n`<dl>`\n`  <dt>HTML</dt>`\n`  <dd>زبان نشانه‌گذاری</dd>`\n`  <dt>CSS</dt>`\n`  <dd>زبان استایل</dd>`\n`</dl>`\n\nبرای واژه‌نامه یا مشخصات محصول.', related: ['ul','ol'] },
    { id: 'nested-lists', k: ['لیست تودرتو','nested list'], a: 'لیست تودرتو: `<ul>` داخل `<li>` قرار می‌گیرد، نه کنارش.\n\n`<ul>`\n`  <li>HTML`\n`    <ul>`\n`      <li>تگ‌ها</li>`\n`      <li>فرم‌ها</li>`\n`    </ul>`\n`  </li>`\n`</ul>`', related: ['ul','ol'] },

    // ===== HTML: معنایی =====
    { id: 'header', k: ['<header>','سربرگ'], a: '`<header>` — سربرگ صفحه یا بخش.\n\nشامل: لوگو، عنوان، منو.\n\nمی‌تواند در `<body>` (سربرگ اصلی) یا در `<article>` (سربرگ مقاله) باشد.', related: ['nav','footer','semantic-overview'] },
    { id: 'nav', k: ['<nav>','ناوبری','منو'], a: '`<nav aria-label="منوی اصلی">`\n`  <a href="/">خانه</a>`\n`  <a href="/about">درباره</a>`\n`</nav>`\n\nبرای منوهای اصلی. برای منوهای فرعی از nav استفاده نکن.', related: ['header','a11y'] },
    { id: 'main', k: ['<main>','محتوای اصلی'], a: '`<main>` — محتوای اصلی صفحه.\n\n• **فقط یکی** در هر صفحه\n• باید بین header و footer باشد\n• صفحه‌خوان‌ها به آن پرش می‌کنند', related: ['semantic-overview'] },
    { id: 'article', k: ['<article>','مقاله tag'], a: '`<article>` — محتوای مستقل که به‌تنهایی معنا دارد.\n\nمثال: پست وبلاگ، خبر، نظر کاربر، کارت محصول.\n\nقاعده: اگر بتوانی آن را در RSS یا شبکه‌ی اجتماعی بازنشر کنی و معنا حفظ شود، article است.', related: ['section','semantic-overview'] },
    { id: 'section', k: ['<section>','بخش مستقل'], a: '`<section>` — بخش موضوعی از صفحه.\n\n• معمولاً یک `<h2>` دارد\n• اگر فقط برای چیدمان است، از `<div>` استفاده کن\n• اگر محتوا مستقل است، از `<article>`', related: ['article','div-span'] },
    { id: 'aside', k: ['<aside>','جانبی','sidebar semantic'], a: '`<aside>` — محتوای جانبی که به محتوای اصلی مربوط است ولی بدون آن هم معنا دارد.\n\nمثال: باکس «مقالات مرتبط»، تبلیغات، بیوگرافی نویسنده.', related: ['section','semantic-overview'] },
    { id: 'footer', k: ['<footer>','پاورقی'], a: '`<footer>` — پاورقی صفحه یا بخش.\n\nشامل: کپی‌رایت، لینک‌های حریم خصوصی، شبکه‌های اجتماعی.\n\nمی‌تواند در `<body>` یا داخل `<article>` باشد.', related: ['header','main'] },
    { id: 'semantic-overview', k: ['معنایی','semantic','semantic html','تگ معنایی'], a: 'تگ‌های معنایی HTML5:\n• `<header>` سربرگ\n• `<nav>` ناوبری\n• `<main>` محتوا (فقط یکی)\n• `<article>` مستقل\n• `<section>` موضوعی\n• `<aside>` جانبی\n• `<footer>` پاورقی\n\nفایده: SEO بهتر + دسترسی‌پذیری + خوانایی کد.', related: ['div-span','seo','a11y'] },
    { id: 'div-span', k: ['<div>','<span>','div و span'], a: '• `<div>` — جعبه‌ی بلوکی (تمام عرض)\n• `<span>` — درون‌خطی (بخشی از متن)\n\nهر دو **بدون معنا** هستند — فقط برای چیدمان/استایل.\n\n⚠️ اگر تگ معنایی موجود است (header, nav, section)، از div استفاده نکن.', related: ['semantic-overview'] },

    // ===== HTML: فرم =====
    { id: 'form', k: ['فرم','<form>','form tag'], a: '`<form action="/submit" method="POST">`\n`  <label for="name">نام</label>`\n`  <input id="name" name="name" type="text" required>`\n`  <button type="submit">ارسال</button>`\n`</form>`\n\n• `action` — آدرس مقصد\n• `method` — GET یا POST\n• `enctype="multipart/form-data"` — برای آپلود فایل', related: ['input','label','button'] },
    { id: 'input', k: ['input','<input>','فیلد ورودی'], a: '`<input type="text" name="x" placeholder="..." required>`\n\nتگ بسته ندارد. انواع مهم:\n`text, email, password, number, tel, url, date, time, checkbox, radio, file, color, range, search`\n\nصفت‌ها: `required, placeholder, min/max, pattern, readonly, disabled`', related: ['input-types','form'] },
    { id: 'input-types', k: ['input type','انواع input'], a: 'انواع `<input>`:\n• `text` — متن\n• `email` — ایمیل (اعتبارسنجی خودکار)\n• `password` — رمز (نقاط)\n• `number` — عدد\n• `tel` — تلفن (کیبورد عددی)\n• `date` / `time` — تاریخ/ساعت\n• `checkbox` — چک‌باکس\n• `radio` — رادیو (گروهی)\n• `file` — آپلود فایل\n• `color` — انتخاب رنگ\n• `range` — اسلایدر\n• `search` — جستجو', related: ['input','form'] },
    { id: 'label', k: ['<label>','label tag','برچسب'], a: '`<label for="email">ایمیل</label>`\n`<input id="email" type="email">`\n\n• `for` باید برابر `id` فیلد باشد\n• کلیک روی label، فیلد را فوکوس می‌کند\n• **اجباری** برای دسترسی‌پذیری', related: ['form','a11y'] },
    { id: 'button', k: ['<button>','دکمه'], a: '`<button type="submit">ارسال</button>`\n`<button type="button">کلیک</button>`\n`<button type="reset">پاک کردن</button>`\n\n⚠️ همیشه `type` را بگذار — داخل form، پیش‌فرض `submit` است و می‌تواند باعث ارسال ناخواسته شود.', related: ['form'] },
    { id: 'select-option', k: ['<select>','<option>','dropdown','لیست کشویی'], a: '`<select name="city">`\n`  <option value="">انتخاب کنید</option>`\n`  <option value="tehran">تهران</option>`\n`</select>`\n\n• `multiple` — چندانتخابی\n• `<optgroup label="...">` — گروه‌بندی\n• `value` — مقدار ارسالی (اگر نباشد، متن option ارسال می‌شود)', related: ['form','datalist'] },
    { id: 'textarea', k: ['<textarea>','متن چندخطی'], a: '`<textarea rows="5" cols="40" placeholder="پیام..." name="msg">`\n`</textarea>`\n\nبرخلاف input، تگ بسته دارد.\n\n`rows` — تعداد خطوط اولیه\n`resize: vertical;` در CSS — فقط تغییر ارتفاع', related: ['form','input'] },
    { id: 'fieldset-legend', k: ['<fieldset>','<legend>','گروه فرم'], a: '`<fieldset>`\n`  <legend>اطلاعات شخصی</legend>`\n`  <label>نام <input type="text"></label>`\n`</fieldset>`\n\nبرای گروه‌بندی معنادار فیلدهای مرتبط — صفحه‌خوان بهتر می‌خواند.', related: ['form'] },
    { id: 'datalist', k: ['<datalist>','autocomplete input'], a: '`<input list="cities" name="city">`\n`<datalist id="cities">`\n`  <option value="تهران">`\n`  <option value="اصفهان">`\n`</datalist>`\n\nپیشنهاد خودکار موقع تایپ — بدون محدود کردن انتخاب.', related: ['input','select-option'] },
    { id: 'required-attribute', k: ['required','اجباری','اعتبارسنجی'], a: '`<input required>` — کاربر نمی‌تواند خالی بفرستد.\n\nصفت‌های اعتبارسنجی:\n• `required` — اجباری\n• `minlength` / `maxlength` — طول\n• `min` / `max` — مقدار عددی\n• `pattern="[0-9]{5}"` — الگوی Regex\n• `type="email"` — اعتبارسنجی خودکار', related: ['input','form'] },
    { id: 'placeholder', k: ['placeholder','متن راهنما'], a: '`<input placeholder="ایمیل خود را وارد کنید">`\n\n⚠️ placeholder جایگزین label **نیست** — فقط راهنمای اضافه.\n\nهمیشه `<label>` بگذار، حتی اگر placeholder داری.', related: ['label','input'] },
    { id: 'form-validation', k: ['اعتبارسنجی فرم','validation','فرم معتبر'], a: 'اعتبارسنجی در HTML (بدون JS):\n• `required`\n• `type="email"`\n• `pattern="[0-9]{10}"`\n• `min`/`max`\n\nبرای پیام فارسی: `setCustomValidity()` در JS.\n\nCSS: `:valid`, `:invalid` برای استایل فیلد معتبر/نامعتبر.', related: ['required-attribute','input'] },

    // ===== HTML: جدول =====
    { id: 'table', k: ['<table>','جدول','table tag'], a: '`<table>`\n`  <caption>عنوان</caption>`\n`  <thead>`\n`    <tr><th>نام</th><th>سن</th></tr>`\n`  </thead>`\n`  <tbody>`\n`    <tr><td>علی</td><td>25</td></tr>`\n`  </tbody>`\n`</table>`\n\n⚠️ برای چیدمان از table استفاده نکن — از Flex/Grid.', related: ['tr-td-th','thead-tbody-tfoot'] },
    { id: 'tr-td-th', k: ['<tr>','<td>','<th>','colspan','rowspan'], a: '• `<tr>` — سطر\n• `<td>` — سلول داده\n• `<th>` — سلول عنوان (ضخیم، وسط‌چین)\n\n• `colspan="2"` — ادغام ستون\n• `rowspan="2"` — ادغام سطر', related: ['table'] },
    { id: 'thead-tbody-tfoot', k: ['thead','tbody','tfoot'], a: '• `<thead>` — سربرگ جدول\n• `<tbody>` — بدنه\n• `<tfoot>` — پاورقی (جمع)\n\nبرای استایل‌دهی و چاپ بهتر. حتماً استفاده کن.', related: ['table'] },

    // ===== HTML: صفت‌ها =====
    { id: 'id-attribute', k: ['id','شناسه','id attribute'], a: '`<div id="main">`\n\n• **یکتا** در هر صفحه\n• در CSS: `#main`\n• در JS: `document.getElementById("main")`\n• در URL: `href="#main"`\n\n⚠️ برای استایل از class استفاده کن، نه id.', related: ['class-attribute'] },
    { id: 'class-attribute', k: ['class','کلاس','class attribute'], a: '`<div class="card card--featured">`\n\n• می‌تواند چند کلاس داشته باشد\n• در CSS: `.card`\n• در JS: `document.querySelectorAll(".card")`\n\n✅ برای استایل همیشه class — قابل استفاده‌ی مجدد.', related: ['id-attribute','bem'] },
    { id: 'data-attribute', k: ['data-attribute','data-*','صفت داده'], a: '`<div data-id="42" data-role="admin">`\n\nدر CSS: `[data-id="42"] { ... }`\nدر JS: `el.dataset.id` → `"42"`\n\nبرای ذخیره‌ی داده‌ی سفارشی بدون تغییر HTML.', related: ['class-attribute'] },
    { id: 'aria-label', k: ['aria-label','aria-hidden','aria'], a: '`<button aria-label="بستن">×</button>`\n`<div aria-hidden="true">دکوراتیو</div>`\n\n• `aria-label` — متن جایگزین برای صفحه‌خوان\n• `aria-hidden` — مخفی از صفحه‌خوان\n\n⚠️ فقط وقتی تگ معنایی کافی نیست.', related: ['a11y','role'] },
    { id: 'role', k: ['role','نقش aria'], a: '`<div role="alert">خطا!</div>`\n`<nav role="navigation">`\n\nنقش ARIA را صریح تعریف می‌کند.\n\n⚠️ قاعده: «اول تگ معنایی، بعد ARIA». اگر `<button>` داری، `role="button"` نگذار.', related: ['a11y','aria-label'] },

    // ===== HTML: سایر =====
    { id: 'details-summary', k: ['details','summary','accordion html','بازشو'], a: '`<details>`\n`  <summary>کلیک کنید</summary>`\n`  <p>محتوای بازشو</p>`\n`</details>`\n\nآکاردئون بدون JS! `open` برای باز پیش‌فرض.', related: ['dialog'] },
    { id: 'dialog', k: ['<dialog>','مودال html','modal tag'], a: '`<dialog id="myDialog">`\n`  <p>محتوا</p>`\n`  <button>بستن</button>`\n`</dialog>`\n\n`dialog.showModal()` — باز کردن\n`dialog.close()` — بستن\n\nمودال بومی مرورگر بدون CSS پیچیده.', related: ['details-summary'] },
    { id: 'template', k: ['<template>','template tag'], a: '`<template id="row">`\n`  <div class="row">...</div>`\n`</template>`\n\nمحتوای مخفی که در JS کلون می‌شود. برای رندر داینامیک.', related: ['slot'] },
    { id: 'noscript', k: ['<noscript>','بدون js'], a: '`<noscript>لطفاً JavaScript را فعال کنید</noscript>`\n\nوقتی JS غیرفعال است نمایش داده می‌شود.', related: [] },
    { id: 'comments', k: ['کامنت','<!--','comment html'], a: '`<!-- این یک کامنت است -->`\n\nدر مرورگر دیده نمی‌شود. برای توضیح کد یا موقتاً غیرفعال کردن بخشی.', related: [] },
    { id: 'canvas', k: ['canvas','<canvas>','نقاشی'], a: '`<canvas id="c" width="400" height="300"></canvas>`\n\nبرای رسم با JS: `const ctx = canvas.getContext("2d");`\n\nکاربرد: بازی، نمودار، ویرایش تصویر.', related: ['svg'] },
    { id: 'svg', k: ['svg','<svg>','وکتور'], a: '`<svg viewBox="0 0 24 24">`\n`  <circle cx="12" cy="12" r="10" />`\n`</svg>`\n\n• برداری (بی‌نهایت بزرگ می‌شود)\n• قابل استایل با CSS\n• قابل انیمیت\n• آیکون‌های مدرن همه SVG هستند', related: ['canvas'] },

    // ===== CSS: انتخابگر =====
    { id: 'css-what', k: ['css چیست','css','سی اس اس'], a: 'CSS = **Cascading Style Sheets** — زبان توصیف ظاهر.\n\nساختار:\n`selector {`\n`  property: value;`\n`}`\n\nسه روش اتصال: Inline، Internal، External — **External بهترین**.', related: ['css-attach','selector-basics'] },
    { id: 'css-attach', k: ['اتصال css','وصل کردن css','link rel','external css','inline css','internal css','@import'], a: 'چهار روش اتصال CSS:\n\n۱. **Inline** — `style="..."`. سریع ولی شلوغ.\n۲. **Internal** — `<style>` در head.\n۳. **External** — `<link rel="stylesheet" href="styles.css">`. **بهترین**.\n۴. **@import** — کند.\n\nاولویت: Inline > Internal > External.', related: ['css-what','specificity'] },
    { id: 'selector-basics', k: ['انتخابگر','selector','انتخابگر css'], a: 'انتخابگرها:\n• تگ: `p`\n• کلاس: `.btn`\n• شناسه: `#main`\n• ترکیبی: `div p`، `div > p`\n• ویژگی: `[type="email"]`\n• شبه‌کلاس: `:hover`، `:first-child`\n\n✅ برای استایل، **کلاس** بهترین انتخاب.', related: ['class-selector','pseudo-classes'] },
    { id: 'class-selector', k: ['.class','class selector','انتخابگر کلاس'], a: '`.btn { background: blue; }`\n\n`<button class="btn">`\n\n• چندین بار قابل استفاده\n• می‌تواند چند کلاس داشته باشد: `class="btn btn--primary"`\n• بهترین روش استایل‌دهی', related: ['selector-basics','bem'] },
    { id: 'id-selector', k: ['#id','id selector','انتخابگر شناسه'], a: '`#main { margin: 0 auto; }`\n\n`<div id="main">`\n\n⚠️ برای استایل توصیه نمی‌شود — specificity بالا، غیرقابل استفاده‌ی مجدد. برای JS و anchor خوب است.', related: ['selector-basics','specificity'] },
    { id: 'universal-selector', k: ['*','universal selector','همه عناصر'], a: '`* { box-sizing: border-box; }`\n\nهمه‌ی عناصر را انتخاب می‌کند.\n\nکاربرد رایج: reset، `box-sizing`، `margin: 0`.\n\n⚠️ برای performance از `*` بدون دلیل استفاده نکن.', related: ['box-sizing'] },
    { id: 'descendant-combinator', k: ['descendant','فاصله بین انتخابگر','div p'], a: '`div p { color: red; }`\n\nهمه‌ی `<p>` که **داخل** `<div>` هستند (هر عمقی).\n\n`div > p` — فقط فرزند مستقیم\n`div + p` — خواهر بلافاصله بعد\n`div ~ p` — همه‌ی خواهرهای بعد', related: ['selector-basics','child-combinator'] },
    { id: 'child-combinator', k: ['>','child combinator','فرزند مستقیم'], a: '`ul > li { padding: 8px; }`\n\nفقط `<li>` که **فرزند مستقیم** `<ul>` است — نه نوه.\n\nتفاوت با `ul li`: دومی همه‌ی نوه‌ها را هم می‌گیرد.', related: ['descendant-combinator'] },
    { id: 'adjacent-sibling', k: ['+','~','sibling','خواهر'], a: '`h1 + p` — فقط **اولین** `<p>` بعد از `<h1>`\n`h1 ~ p` — **همه‌ی** `<p>`های بعد از `<h1>` (هم‌سطح)\n\nپرکاربرد: `input:focus + label`', related: ['descendant-combinator'] },
    { id: 'attribute-selector', k: ['[attr]','attribute selector','انتخابگر ویژگی'], a: '`[type="email"]` — دقیقاً برابر\n`[href^="https"]` — شروع با\n`[href$=".pdf"]` — پایان با\n`[href*="google"]` — شامل\n`[disabled]` — دارای صفت\n`[lang|="fa"]` — شروع با fa-', related: ['selector-basics'] },
    { id: 'pseudo-classes', k: ['pseudo','شبه کلاس','pseudo class'], a: 'شبه‌کلاس‌ها (حالت):\n`:hover` — موس\n`:focus` — فوکوس\n`:active` — کلیک\n`:visited` — بازدیدشده\n`:first-child`, `:last-child`, `:nth-child(2n)`\n`:not(.x)` — استثنا\n`:is()`, `:where()` — گروه\n`:has()` — والد دارای فرزند\n`:checked`, `:disabled`', related: ['pseudo-elements','hover-focus-active'] },
    { id: 'pseudo-elements', k: ['pseudo element','::before','::after','شبه عنصر'], a: 'شبه‌عنصرها (تولید محتوا):\n`::before` — قبل از محتوا\n`::after` — بعد از محتوا\n`::placeholder` — متن placeholder\n`::selection` — متن انتخاب‌شده\n`::first-line` — خط اول\n\n`.card::before { content: ""; display: block; ... }`\n\n⚠️ `content` اجباری است (حتی `content: ""`).', related: ['pseudo-classes'] },
    { id: 'hover-focus-active', k: [':hover',':focus',':active','حالت'], a: '• `:hover` — موس روی عنصر\n• `:focus` — عنصر فوکوس دارد (کیبورد)\n• `:active` — در حال کلیک\n• `:focus-visible` — فوکوس کیبورد (نه کلیک موس)\n\n`.btn:hover { background: #ffcb5c; }`\n`.btn:active { transform: scale(0.97); }`\n\n⚠️ همیشه `:focus` را استایل بده — دسترسی‌پذیری.', related: ['pseudo-classes','a11y'] },
    { id: 'first-child-nth-child', k: [':first-child',':last-child',':nth-child','nth'], a: '`li:first-child { font-weight: bold; }`\n`li:last-child { border: none; }`\n`li:nth-child(2) { color: red; }`\n`li:nth-child(odd) { background: #f5f5f5; }`\n`li:nth-child(3n) { ... }` — هر ۳\n`li:nth-child(2n+1)` — فرد\n\n`:nth-of-type` — فقط هم‌نوع‌ها را می‌شمارد.', related: ['pseudo-classes'] },
    { id: 'not-selector', k: [':not','استثنا css'], a: '`li:not(:last-child) { border-bottom: 1px solid #ccc; }`\n\nهمه به‌جز آخرین.\n\nمی‌تواند ترکیبی باشد:\n`input:not([type="submit"]):not([type="button"]) { ... }`', related: ['pseudo-classes'] },
    { id: 'is-where', k: [':is',':where',':has'], a: '`:is(h1, h2, h3) { color: blue; }`\nبه‌جای `h1, h2, h3 { ... }` — کوتاه‌تر، specificity بالاتر.\n\n`:where(h1, h2, h3)` — specificity صفر.\n\n`:has(img)` — والدی که img دارد.\n`:has(> img)` — فرزند مستقیم.', related: ['pseudo-classes'] },

    // ===== CSS: Specificity =====
    { id: 'specificity', k: ['specificity','اولویت css','weight'], a: 'ترتیب اولویت (از قوی):\n۱. `!important`\n۲. Inline `style="..."`\n۳. شناسه `#id`\n۴. کلاس `.class` + شبه‌کلاس + ویژگی\n۵. تگ `p`\n\n`:is()` بالاترین مقدار داخلی را می‌گیرد.\n`:where()` همیشه صفر.\n\n⚠️ `!important` راه‌حل نیست — کد را خراب می‌کند.', related: ['cascade','important-rule'] },
    { id: 'cascade', k: ['cascade','کاسکید','ترتیب'], a: 'Cascade = آبشاری.\n\nاگر هم‌سطح باشند (مثلاً دو کلاس)، **آخرین تعریف برنده** است.\n\nترتیب منابع:\n۱. `!important`\n۲. Inline\n۳. Internal\n۴. External\n۵. پیش‌فرض مرورگر', related: ['specificity'] },
    { id: 'important-rule', k: ['!important','important'], a: '`color: red !important;`\n\n**هر چیز دیگری را override می‌کند.**\n\n⚠️ تقریباً همیشه اشتباه است. راه درست:\n• ساختار انتخابگر را درست کن\n• ترتیب CSS را مرتب کن\n• از cascade layers (`@layer`) استفاده کن\n\nفقط برای override استایل کتابخانه‌های خارجی.', related: ['specificity','cascade'] },
    { id: 'inheritance', k: ['inheritance','ارث بری css'], a: 'برخی ویژگی‌ها به فرزندان ارث می‌رسند: `color`, `font`, `line-height`, `text-align`.\n\nبرخی نه: `margin`, `padding`, `border`, `background`.\n\n`inherit` — اجبار به ارث\n`initial` — مقدار اولیه\n`unset` — بسته به ویژگی\n`revert` — برگشت به استایل مرورگر', related: ['cascade'] },

    // ===== CSS: Box Model =====
    { id: 'box-model', k: ['box model','مدل جعبه','جعبه'], a: 'هر عنصر یک جعبه با ۴ لایه:\n\n۱. **Content** — محتوا\n۲. **Padding** — فاصله‌ی داخلی\n۳. **Border** — حاشیه\n۴. **Margin** — فاصله‌ی بیرونی\n\nترتیب `margin`/`padding`:\n`top right bottom left` (ساعتگرد از بالا)\n`10px` — همه\n`10px 20px` — عمودی | افقی\n`10px 20px 30px` — بالا | افقی | پایین\n`10px 20px 30px 40px` — بالا راست پایین چپ', related: ['margin','padding','box-sizing'] },
    { id: 'margin', k: ['margin','حاشیه بیرونی'], a: '`margin: 10px;` — فاصله‌ی بیرونی از سایر عناصر.\n\n`margin: 0 auto;` — وسط‌چین افقی (برای عناصر با عرض مشخص).\n\n`margin-top: -10px;` — مقادیر منفی مجاز.\n\n⚠️ margin های عمودی همسایه‌ها با هم **ادغام** می‌شوند (margin collapse) — بزرگ‌تر برنده است.', related: ['box-model','margin-collapse'] },
    { id: 'padding', k: ['padding','فاصله داخلی'], a: '`padding: 16px;` — فاصله‌ی داخلی بین محتوا و border.\n\nبرخلاف margin، پس‌زمینه به padding هم کشیده می‌شود.\n\n⚠️ با `box-sizing: content-box` (پیش‌فرض)، padding به width اضافه می‌شود.', related: ['box-model','box-sizing'] },
    { id: 'border', k: ['border','حاشیه','border-radius'], a: '`border: 1px solid #ddd;`\n`border-top: 2px dashed red;`\n`border: none;` — حذف\n\n`border-radius: 8px;` — گوشه‌های گرد\n`border-radius: 50%;` — دایره\n`border-radius: 8px 0;` — گوشه‌های مختلف', related: ['box-model','border-shadow'] },
    { id: 'box-sizing', k: ['box-sizing','border-box','content-box'], a: '`* { box-sizing: border-box; }`\n\n• `content-box` (پیش‌فرض) — width = محتوا فقط، padding و border اضافه می‌شوند\n• `border-box` — width شامل padding و border\n\nمثال: `width: 200px; padding: 20px;`:\n• content-box → عرض کل ۲۴۰\n• border-box → عرض کل ۲۰۰\n\n✅ **همیشه** border-box در ابتدای پروژه.', related: ['box-model'] },
    { id: 'margin-collapse', k: ['margin collapse','ادغام margin','margin ادغام'], a: 'margin های عمودی همسایه‌ها **ادغام** می‌شوند (نه جمع).\n\nمثال: `margin-bottom: 20px` + `margin-top: 30px` → فاصله = ۳۰ (نه ۵۰).\n\nحل:\n• از `padding` به‌جای margin\n• `display: flex` با `gap`\n• `overflow: hidden` روی والد', related: ['margin','flexbox'] },

    // ===== CSS: Display و Position =====
    { id: 'display', k: ['display','block','inline','inline-block','none'], a: '`display`:\n• `block` — تمام عرض (div، p، h1)\n• `inline` — درون‌خطی (span، a) — ابعاد اعمال نمی‌شوند\n• `inline-block` — درون‌خطی + ابعاد\n• `flex` — چیدمان flex\n• `grid` — چیدمان grid\n• `none` — مخفی (از جریان حذف)\n\n`visibility: hidden` فضا را نگه می‌دارد، `display: none` نه.', related: ['flexbox','grid'] },
    { id: 'block-inline', k: ['block vs inline','تفاوت block و inline'], a: '• **block**: تمام عرض والد، خط جدید، ابعاد اعمال می‌شود\n• **inline**: فقط محتوا، کنار هم، width/height اعمال نمی‌شود\n• **inline-block**: کنار هم + ابعاد\n\nتبدیل: `display: block` / `display: inline-block`', related: ['display'] },
    { id: 'position', k: ['position','موقعیت','static'], a: '`position`:\n• `static` — پیش‌فرض، بی‌اثر\n• `relative` — نسبت به جای خودش (مرجع absolute)\n• `absolute` — نسبت به نزدیک‌ترین والد position‌دار\n• `fixed` — نسبت به viewport، هنگام اسکرول ثابت\n• `sticky` — چسبیده هنگام اسکرول\n\n`top/right/bottom/left` فقط روی position‌دار کار می‌کند.', related: ['relative-absolute','fixed','sticky'] },
    { id: 'relative-absolute', k: ['relative','absolute','والد مرجع'], a: 'الگوی رایج:\n\n`.parent { position: relative; }`\n`.child { position: absolute; top: 0; right: 0; }`\n\nفرزند نسبت به والد موقعیت می‌گیرد.\n\n⚠️ اگر هیچ والدی position نداشته باشد، absolute نسبت به `<body>` می‌شود — منبع باگ.', related: ['position','z-index'] },
    { id: 'fixed', k: ['fixed','position fixed','ثابت'], a: '`.navbar {`\n`  position: fixed;`\n`  top: 0; left: 0; right: 0;`\n`  z-index: 100;`\n`}`\n\nنسبت به پنجره — هنگام اسکرول ثابت.\n\n⚠️ محتوای زیرش را با `padding-top` یا `margin-top` جبران کن.', related: ['position','z-index'] },
    { id: 'sticky', k: ['sticky','position sticky','چسبیده'], a: '`.navbar {`\n`  position: sticky;`\n`  top: 0;`\n`}`\n\nبین static و fixed — تا وقتی به آستانه برسد اسکرول می‌کند، بعد می‌چسبد.\n\n⚠️ والدش نباید `overflow: hidden` داشته باشد.', related: ['position','fixed'] },
    { id: 'z-index', k: ['z-index','لایه بندی','z index'], a: '`z-index: 100;`\n\n• فقط روی عناصر position‌دار (یا flex/grid child) کار می‌کند\n• عدد بزرگ‌تر = بالاتر\n• ترتیب پیشنهادی: navbar=100, modal=1000, tooltip=2000\n\n`z-index: -1;` — زیر همه', related: ['position'] },
    { id: 'float-clear', k: ['float','clear','شناور'], a: '`float: left | right;` — شناور کردن عنصر.\n\n⚠️ **در پروژه‌های مدرن استفاده نکن** — از Flexbox/Grid استفاده کن.\n\nfloat فقط برای شناور کردن تصویر کنار متن کاربرد دارد.', related: ['flexbox','grid'] },
    { id: 'overflow', k: ['overflow','اسکرول','overflow hidden'], a: '`overflow: visible | hidden | scroll | auto;`\n\n• `hidden` — محتوای اضافه پنهان\n• `auto` — اسکرول اگر لازم بود\n• `scroll` — همیشه اسکرول\n\n`overflow-x` / `overflow-y` — تک‌محور\n\nکاربرد: باکس با اسکرول، پاک کردن float، بریدن محتوا.', related: ['display'] },

    // ===== CSS: رنگ =====
    { id: 'color', k: ['color','رنگ متن','رنگ'], a: '`color: #333;`\n\nبرای رنگ **متن**. برای پس‌زمینه از `background` استفاده کن.\n\n⚠️ کنتراست متن/پس‌زمینه حداقل **۴.۵:۱** (WCAG).', related: ['hex-color','rgb-rgba','background'] },
    { id: 'hex-color', k: ['hex','#fff','هگز','کد رنگ'], a: '`#RRGGBB` — شش رقم هگزادسیمال (0-9، A-F).\n\n`#ff0000` — قرمز خالص\n`#000000` — سیاه\n`#ffffff` — سفید\n`#333` — کوتاه‌شده‌ی `#333333`\n\nمی‌توان آلفا اضافه کرد: `#ff000080` — قرمز ۵۰٪ شفاف', related: ['color','rgb-rgba'] },
    { id: 'rgb-rgba', k: ['rgb','rgba','رنگ rgb'], a: '`rgb(255, 0, 0)` — قرمز\n`rgba(0, 0, 0, 0.5)` — سیاه ۵۰٪ شفاف\n\nپارامترها: R G B (0-255) + A (0-1)\n\nمی‌توانی درصد هم بدهی: `rgb(100% 0% 0%)`', related: ['color','hsl-hsla'] },
    { id: 'hsl-hsla', k: ['hsl','hsla','hue'], a: '`hsl(0, 100%, 50%)` — قرمز\n`hsl(120, 100%, 50%)` — سبز\n`hsl(240, 100%, 50%)` — آبی\n\n• Hue: ۰-۳۶۰ درجه\n• Saturation: ۰-۱۰۰٪\n• Lightness: ۰-۱۰۰٪\n\n`hsla(0, 100%, 50%, 0.5)` — با شفافیت\n\n✅ HSL شهودی‌تر است — برای تغییر روشنایی یک رنگ عالی.', related: ['color','rgb-rgba'] },
    { id: 'transparency', k: ['transparent','شفافیت','alpha'], a: '• `rgba(0, 0, 0, 0.5)` — رنگ شفاف\n• `hsla(0, 100%, 50%, 0.3)`\n• `#00000080` — HEX با آلفا\n• `transparent` — کاملاً شفاف\n\n`opacity: 0.5` — شفافیت **کل عنصر** (نه فقط رنگ).', related: ['color','opacity'] },
    { id: 'contrast', k: ['contrast','کنتراست','خوانایی'], a: 'استاندارد WCAG:\n• متن معمولی: **۴.۵:۱**\n• متن بزرگ (۱۸px+): **۳:۱**\n\nابزار: WebAIM Contrast Checker، Chrome DevTools.\n\nقاعده: متن تیره روی پس‌زمینه‌ی روشن، یا برعکس — نه هم‌رنگ.', related: ['color','a11y'] },

    // ===== CSS: پس‌زمینه =====
    { id: 'background', k: ['background','پس زمینه','bg'], a: '`background: #f5f5f5;`\n`background-color: #f5f5f5;`\n`background-image: url("img.jpg");`\n`background-size: cover;`\n`background-position: center;`\n`background-repeat: no-repeat;`\n\nمیانبر:\n`background: #f5f5f5 url("img.jpg") center/cover no-repeat;`', related: ['background-image','gradient'] },
    { id: 'background-image', k: ['background-image','background-size','background-position','cover'], a: '`background-image: url("photo.jpg");`\n\n`background-size`:\n• `cover` — پر کردن کامل (برش)\n• `contain` — کامل دیده شود (فضای خالی)\n• `100% auto` — عرض کامل\n\n`background-position: center top;`\n`background-attachment: fixed;` — parallax', related: ['background','gradient'] },
    { id: 'gradient', k: ['gradient','گرادیانت','linear-gradient','radial-gradient'], a: '`background: linear-gradient(135deg, #3b82f6, #60a5fa);`\n`background: linear-gradient(to right, red, yellow, green);`\n`background: radial-gradient(circle, #fff, #000);`\n`background: conic-gradient(red, yellow, lime, blue, red);`\n\nمتن گرادیانی:\n`background: linear-gradient(...); -webkit-background-clip: text; color: transparent;`', related: ['background','background-image'] },
    { id: 'background-clip', k: ['background-clip','متن رنگی','clip text'], a: '`background-clip: text;` — پس‌زمینه فقط داخل متن دیده می‌شود.\n\nبرای متن گرادیانی:\n`.title {`\n`  background: linear-gradient(45deg, #f4b942, #ff6b6b);`\n`  -webkit-background-clip: text;`\n`  color: transparent;`\n`}`', related: ['gradient'] },

    // ===== CSS: متن و فونت =====
    { id: 'font-family', k: ['font-family','فونت','قلم'], a: '`font-family: "Vazirmatn", Tahoma, sans-serif;`\n\n• اولین فونت موجود استفاده می‌شود\n• همیشه با یک `generic family` تمام کن: `sans-serif`, `serif`, `monospace`\n• فونت‌های فارسی: Vazirmatn، Estedad، Sahel', related: ['google-fonts','font-face','vazirmatn-font'] },
    { id: 'font-size', k: ['font-size','اندازه فونت','اندازه متن'], a: '`font-size: 16px;`\n`font-size: 1rem;` — نسبت به ریشه (بهتر)\n`font-size: 1.125rem;` — ۱۸px\n`font-size: clamp(1rem, 4vw, 1.5rem);` — واکنش‌گرا\n\n✅ برای متن از rem استفاده کن — دسترسی‌پذیری.', related: ['rem-em','clamp'] },
    { id: 'font-weight', k: ['font-weight','ضخامت فونت','bold'], a: '`font-weight: 400;` — نرمال\n`font-weight: 700;` — bold\n`font-weight: 500;` — نیمه‌ضخیم\n\nمقادیر: 100 تا 900 (صدتایی)\n`normal` = 400، `bold` = 700', related: ['font-family','font-size'] },
    { id: 'line-height', k: ['line-height','فاصله خطوط'], a: '`line-height: 1.6;` — ۱.۶ برابر font-size (بدون واحد، بهترین روش)\n`line-height: 24px;` — ثابت\n`line-height: 150%;`\n\n✅ برای متن‌های خوانا: `1.5` تا `1.8`\n✅ برای عنوان: `1.2` تا `1.4`', related: ['font-size'] },
    { id: 'text-align', k: ['text-align','تراز متن','وسط چین'], a: '`text-align: start;` — شروع (راست در RTL)\n`text-align: end;`\n`text-align: center;`\n`text-align: justify;` — دو طرف هم‌تراز\n\n✅ برای RTL از `start`/`end` استفاده کن، نه `left`/`right`.', related: ['rtl-ltr','font-size'] },
    { id: 'text-decoration', k: ['text-decoration','خط زیر متن','underline'], a: '`text-decoration: underline;`\n`text-decoration: none;` — حذف خط لینک\n`text-decoration: line-through;` — خط‌خورده\n`text-decoration-color: red;`\n`text-decoration-thickness: 2px;`', related: ['font-size','a-link'] },
    { id: 'letter-spacing', k: ['letter-spacing','word-spacing','فاصله حروف'], a: '`letter-spacing: 0.05em;` — فاصله‌ی حروف\n`word-spacing: 2px;` — فاصله‌ی کلمات\n\n✅ `0.05em` روی عنوان‌ها زیباست.\n✅ `-0.01em` برای متن بزرگ‌تر.', related: ['font-size'] },
    { id: 'font-face', k: ['@font-face','فونت سفارشی','custom font'], a: '`@font-face {`\n`  font-family: "MyFont";`\n`  src: url("MyFont.woff2") format("woff2");`\n`  font-weight: 400;`\n`  font-display: swap;`\n`}`\n\n`body { font-family: "MyFont", Tahoma, sans-serif; }`\n\nفرمت `woff2` — سبک‌ترین و مدرن‌ترین.', related: ['google-fonts','font-display','vazirmatn-font'] },
    { id: 'google-fonts', k: ['google fonts','google font','فونت گوگل'], a: 'در `<head>`:\n`<link rel="preconnect" href="https://fonts.googleapis.com">`\n`<link href="https://fonts.googleapis.com/css2?family=Vazirmatn:wght@400;700&display=swap" rel="stylesheet">`\n\nدر CSS:\n`body { font-family: "Vazirmatn", sans-serif; }`\n\n✅ `display=swap` — متن با فونت پیش‌فرض نمایش داده می‌شود تا فونت لود شود.', related: ['font-face','vazirmatn-font'] },
    { id: 'vazirmatn-font', k: ['vazirmatn','وزیرمتن','فونت فارسی'], a: 'فونت‌های فارسی خوب:\n• **Vazirmatn** — محبوب‌ترین، رسمی، روی Google Fonts\n• **Estedad** — مدرن، خوانا\n• **Sahel** — سبک، تمیز\n• **Yekan Bakh** — تجاری\n\n`<link href="https://fonts.googleapis.com/css2?family=Vazirmatn:wght@300;400;500;700&display=swap" rel="stylesheet">`', related: ['google-fonts','font-family'] },
    { id: 'font-display', k: ['font-display','swap','block'], a: '`font-display: swap;`\n\n• `swap` — فونت پیش‌فرض نشان بده، بعد عوض کن (✅ توصیه)\n• `block` — تا لود شدن، متن مخفی\n• `fallback` — کمی صبر\n• `optional` — اگر سریع نیامد، فراموشش کن\n\n✅ برای UX بهترین: `swap`', related: ['font-face'] },
    { id: 'text-shadow', k: ['text-shadow','سایه متن'], a: '`text-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);`\n\nترتیب: `offset-x offset-y blur color`\n\nچند سایه:\n`text-shadow: 0 1px 2px #000, 0 2px 4px #000;`', related: ['box-shadow'] },

    // ===== CSS: واحدها =====
    { id: 'units-overview', k: ['units','واحد','واحد اندازه','واحدهای css'], a: 'واحدهای CSS:\n• **مطلق:** `px`، `pt`، `cm`\n• **نسبی:** `%`، `em`، `rem`، `vh`، `vw`، `vmin`، `vmax`، `ch`، `ex`\n\nقاعده:\n• متن: `rem`\n• فاصله: `rem` یا `px`\n• چیدمان: `%`\n• ارتفاع کامل: `vh`', related: ['px','rem-em','vh-vw'] },
    { id: 'px', k: ['px','پیکسل','pixel'], a: '`px` — واحد مطلق، ثابت.\n\n✅ مناسب برای:\n• `border: 1px`\n• `box-shadow`\n• اندازه‌های کوچک دقیق\n\n⚠️ برای `font-size` استفاده نکن — از `rem` استفاده کن (دسترسی‌پذیری).', related: ['units-overview','rem-em'] },
    { id: 'rem-em', k: ['rem','em','rem vs em'], a: '• `rem` — نسبت به فونت ریشه (`html`). اگر `html { font-size: 16px }`، `1rem = 16px`.\n• `em` — نسبت به فونت **خود عنصر یا والد**.\n\n✅ برای font-size و فاصله‌ها: **rem**\n⚠️ em برای padding نسبی داخل کامپوننت مفید است.\n\n`padding: 1em;` در `font-size: 20px` → ۲۰px', related: ['px','units-overview'] },
    { id: 'vh-vw', k: ['vh','vw','vmin','vmax','viewport units'], a: '• `vh` — ۱٪ ارتفاع پنجره\n• `vw` — ۱٪ عرض پنجره\n• `vmin` — کوچک‌تر از vw/vh\n• `vmax` — بزرگ‌تر\n\n`height: 100vh;` — تمام ارتفاع صفحه\n`width: 100vw;` — تمام عرض\n\n⚠️ در موبایل، `100vh` ممکن است شامل نوار مرورگر باشد — از `100dvh` استفاده کن.', related: ['units-overview'] },
    { id: 'percentage', k: ['%','درصد','percentage'], a: '`%` — نسبت به **والد**.\n\n`width: 50%` — نصف عرض والد\n`height: 100%` — تمام ارتفاع والد (والد باید ارتفاع داشته باشد)\n`padding: 5%` — نسبت به عرض والد (نه ارتفاع!)\n`font-size: 150%` — ۱.۵ برابر والد', related: ['units-overview'] },
    { id: 'ch-ex', k: ['ch','ex','ch unit'], a: '• `ch` — عرض عدد «0» در فونت فعلی\n• `ex` — ارتفاع حرف «x»\n\nکاربرد: محدود کردن عرض متن به تعداد کاراکتر.\n`max-width: 60ch;` — متن راحت‌خوان', related: ['units-overview'] },

    // ===== CSS: توابع =====
    { id: 'calc', k: ['calc','محاسبه css'], a: '`.box {`\n`  width: calc(100% - 40px);`\n`  padding: calc(1rem + 4px);`\n`}`\n\nعملگرها: `+ - * /`\n\n⚠️ فاصله‌ی اطراف `+` و `-` **اجباری** است:\n`calc(100%-40px)` ❌\n`calc(100% - 40px)` ✅', related: ['min-max','clamp'] },
    { id: 'min-max', k: ['min(','max(','min max css'], a: '`min(100%, 1200px)` — کوچک‌تر را انتخاب می‌کند\n`max(200px, 50vh)` — بزرگ‌تر را انتخاب می‌کند\n\n`width: min(100%, 1200px);` — عرض کامل، ولی حداکثر ۱۲۰۰px\n`height: max(200px, 50vh);` — حداقل ۲۰۰px', related: ['calc','clamp'] },
    { id: 'clamp', k: ['clamp','clamp css'], a: '`clamp(min, ideal, max)` — بین حداقل و حداکثر، بر اساس مقدار ایده‌آل.\n\n`font-size: clamp(1.5rem, 4vw, 3rem);`\n• در موبایل کوچک: ۱.۵rem (حداقل)\n• در دسکتاپ بزرگ: ۳rem (حداکثر)\n• بین‌شان: ۴vw\n\n✅ جایگزین Media Query برای فونت.', related: ['calc','min-max','responsive'] },
    { id: 'var', k: ['var(','css var','متغیر css','custom property'], a: '`:root {`\n`  --primary: #3b82f6;`\n`  --radius: 8px;`\n`}`\n`.btn {`\n`  background: var(--primary);`\n`  border-radius: var(--radius);`\n`}`\n\nمزایا: تغییر یک‌جا، تم‌دهی (روشن/تیره/آبی)، خوانایی.\nمقدار پیش‌فرض: `var(--x, red)`', related: ['css-vars',':root'] },

    // ===== CSS: انیمیشن =====
    { id: 'transition', k: ['transition','ترنزیشن'], a: '`transition: background 0.3s ease;`\n`transition: background 0.3s, transform 0.2s;`\n\nپارامترها: `property duration timing-function delay`\n\n`.btn { transition: all 0.2s; }`\n`.btn:hover { background: #ffcb5c; }`\n\n⚠️ `transition` را روی حالت **پایه** بگذار، نه روی `:hover`.', related: ['transform','animation-keyframes'] },
    { id: 'transform', k: ['transform','translate','scale','rotate','skew'], a: '`transform` — تغییر شکل بدون تأثیر روی چیدمان:\n• `translate(x, y)` — جابه‌جایی\n• `translateX(10px)` / `translateY(-4px)`\n• `scale(1.05)` — بزرگ/کوچک\n• `rotate(45deg)` — چرخش\n• `skew(10deg)` — کج\n\nترکیب: `transform: translateY(-4px) scale(1.05);`\n\n⚠️ روی GPU — سریع‌تر از `left`/`top`.', related: ['transition','animation-keyframes'] },
    { id: 'translate', k: ['translate','translateX','translateY','جابه جایی css'], a: '`transform: translateX(50%);` — نصف عرض خودش به راست\n`transform: translateY(-10px);` — ۱۰px بالا\n`transform: translate(-50%, -50%);` — وسط‌چین کامل\n\n✅ تکنیک وسط‌چین مطلق:\n`.center {`\n`  position: absolute;`\n`  top: 50%; left: 50%;`\n`  transform: translate(-50%, -50%);`\n`}`', related: ['transform'] },
    { id: 'scale', k: ['scale','بزرگ کردن transform'], a: '`transform: scale(1.05);` — ۵٪ بزرگ‌تر\n`transform: scale(0.95);` — ۵٪ کوچک‌تر\n`transform: scaleX(2);` — فقط عرض\n\n✅ روی `:hover` عالی: `transform: scale(1.05);`', related: ['transform','transition'] },
    { id: 'rotate', k: ['rotate','چرخش css'], a: '`transform: rotate(45deg);` — ۴۵ درجه ساعتگرد\n`transform: rotate(-45deg);` — پادساعتگرد\n`transform: rotate(180deg);`\n\nانیمیشن چرخش کامل:\n`@keyframes spin { to { transform: rotate(360deg); } }`\n`.spinner { animation: spin 1s linear infinite; }`', related: ['transform','animation-keyframes'] },
    { id: 'animation-keyframes', k: ['animation','@keyframes','انیمیشن','keyframe'], a: '`@keyframes pulse {`\n`  0%, 100% { transform: scale(1); }`\n`  50% { transform: scale(1.1); }`\n`}`\n`.heart { animation: pulse 1.5s infinite; }`\n\nپارامترها: `name duration timing-function delay iteration-count direction fill-mode`\n\nمثال کامل:\n`animation: pulse 2s ease-in-out 0s infinite alternate both;`', related: ['transition','transform'] },

    // ===== CSS: Flexbox =====
    { id: 'flexbox', k: ['flexbox','flex','چیدمان انعطاف'], a: 'Flexbox — چیدمان یک‌بعدی:\n\n`.container {`\n`  display: flex;`\n`  justify-content: space-between;` — محور اصلی\n`  align-items: center;` — محور عمود\n`  gap: 12px;`\n`}`\n\n`flex-direction: row | column`\n`flex-wrap: nowrap | wrap`\n\nفرزندان مستقیم فقط.', related: ['flex-direction','justify-content','align-items','gap'] },
    { id: 'flex-direction', k: ['flex-direction','row','column'], a: '`flex-direction`:\n• `row` — افقی (پیش‌فرض)\n• `row-reverse` — افقی معکوس\n• `column` — عمودی\n• `column-reverse`\n\n⚠️ با `column`، نقش `justify-content` و `align-items` عوض می‌شود:\n• `justify-content` → محور عمودی\n• `align-items` → محور افقی', related: ['flexbox','justify-content'] },
    { id: 'justify-content', k: ['justify-content','توزیع افقی'], a: '`justify-content` — توزیع در محور اصلی:\n• `flex-start` — شروع\n• `flex-end` — انتها\n• `center` — وسط\n• `space-between` — دو طرف، فاصله بین\n• `space-around` — فاصله دور هر آیتم\n• `space-evenly` — فاصله‌ی کاملاً یکسان', related: ['flexbox','align-items'] },
    { id: 'align-items', k: ['align-items','تراز عمودی flex'], a: '`align-items` — تراز در محور عمود:\n• `flex-start` — بالا\n• `flex-end` — پایین\n• `center` — وسط\n• `stretch` — کشیده (پیش‌فرض)\n• `baseline` — هم‌تراز با متن', related: ['flexbox','justify-content','align-self'] },
    { id: 'flex-wrap', k: ['flex-wrap','wrap flex','شکستن خط'], a: '`flex-wrap: wrap;` — اجازه‌ی رفتن به خط بعد اگر فضا کم بود.\n\n`nowrap` — پیش‌فرض، در یک خط می‌مانند.\n`wrap-reverse` — معکوس.\n\n✅ برای گالری و کارت‌های واکنش‌گرا ضروری.', related: ['flexbox','flex-grow'] },
    { id: 'gap', k: ['gap','row-gap','column-gap','فاصله flex'], a: '`gap: 16px;` — فاصله بین آیتم‌ها (Flexbox و Grid).\n\n`row-gap: 8px;` — فاصله‌ی عمودی\n`column-gap: 16px;` — فاصله‌ی افقی\n\n✅ بهتر از `margin` — اولین/آخرین آیتم margin اضافه نمی‌گیرد.', related: ['flexbox','grid'] },
    { id: 'flex-grow', k: ['flex-grow','flex grow'], a: '`flex-grow: 1;` — چقدر از فضای خالی را بگیرد.\n\n`flex-grow: 1` روی همه → مساوی\n`flex-grow: 2` روی یکی → دو برابر بقیه\n`flex-grow: 0` → رشد نکن (پیش‌فرض)', related: ['flex-shrink','flex-basis','flex-props'] },
    { id: 'flex-shrink', k: ['flex-shrink','flex shrink'], a: '`flex-shrink: 1;` — چقدر کوچک شود اگر فضا کم بود (پیش‌فرض).\n\n`flex-shrink: 0;` — کوچک نشو (مثلاً آواتار، آیکون).', related: ['flex-grow','flex-basis'] },
    { id: 'flex-basis', k: ['flex-basis','flex basis'], a: '`flex-basis: 200px;` — اندازه‌ی اولیه قبل از رشد/کوچک.\n\n`flex-basis: auto` — بر اساس محتوا\n`flex-basis: 0` — از صفر شروع', related: ['flex-grow','flex-shrink'] },
    { id: 'flex-props', k: ['flex:1','flex shorthand','flex مخفف'], a: '`flex` = `flex-grow flex-shrink flex-basis`\n\n• `flex: 1` = `1 1 0` — آزادانه رشد\n• `flex: 2` — دو برابر\n• `flex: 0 0 200px` — ثابت ۲۰۰ (sidebar)\n• `flex: 1 1 200px` — حداقل ۲۰۰ + قابل رشد\n• `flex: auto` = `1 1 auto`', related: ['flex-grow','flex-shrink','flex-basis'] },
    { id: 'align-self', k: ['align-self','تراز تک ایتم'], a: '`align-self` — تراز یک آیتم خاص، مستقل از `align-items` والد.\n\n`.special { align-self: flex-end; }`\n\nمقادیر: `flex-start, flex-end, center, stretch, baseline`', related: ['align-items','flexbox'] },
    { id: 'order', k: ['order','ترتیب flex','جابه جایی flex'], a: '`order: 1;` — تغییر ترتیب نمایش بدون تغییر HTML.\n\nعدد کوچک‌تر = زودتر.\nپیش‌فرض: ۰.\n\n⚠️ برای دسترسی‌پذیری، ترتیب HTML را حفظ کن — صفحه‌خوان با order کار نمی‌کند.', related: ['flexbox'] },

    // ===== CSS: Grid =====
    { id: 'grid', k: ['grid','css grid','شبکه'], a: 'CSS Grid — چیدمان دوبعدی:\n\n`.grid {`\n`  display: grid;`\n`  grid-template-columns: repeat(3, 1fr);`\n`  gap: 16px;`\n`}`\n\nواکنش‌گرای جادویی:\n`grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));`\n\nگسترش: `grid-column: span 2;` / `1 / -1`', related: ['grid-template-columns','grid-template-areas','flexbox'] },
    { id: 'grid-template-columns', k: ['grid-template-columns','grid columns','ستون grid'], a: '`grid-template-columns: 200px 1fr 1fr;`\n`grid-template-columns: repeat(3, 1fr);` — سه مساوی\n`grid-template-columns: 100px auto 200px;`\n`grid-template-columns: minmax(200px, 1fr) 2fr;`\n\n`1fr` = یک کسر از فضای آزاد', related: ['grid','grid-template-rows','auto-fit-auto-fill'] },
    { id: 'grid-template-rows', k: ['grid-template-rows','grid rows','سطر grid'], a: '`grid-template-rows: auto 1fr auto;`\n`grid-template-rows: repeat(3, 100px);`\n`grid-template-rows: 60px 1fr 80px;` — header, main, footer', related: ['grid','grid-template-columns'] },
    { id: 'grid-template-areas', k: ['grid-template-areas','grid-area','مناطق grid'], a: '`.layout {`\n`  display: grid;`\n`  grid-template-areas:`\n`    "header header"`\n`    "sidebar main"`\n`    "footer footer";`\n`  grid-template-columns: 200px 1fr;`\n`}`\n`.header { grid-area: header; }`\n\nچیدمان بصری و خوانا — عالی برای کل صفحه.', related: ['grid','grid-template-columns'] },
    { id: 'grid-gap', k: ['grid-gap','gap grid','فاصله grid'], a: '`gap: 16px;` — فاصله بین همه\n`row-gap: 8px;` — فاصله‌ی عمودی\n`column-gap: 20px;` — افقی\n\n✅ `gap` بهتر از `grid-gap` قدیمی.', related: ['grid','gap'] },
    { id: 'auto-fit-auto-fill', k: ['auto-fit','auto-fill','auto fit','auto fill'], a: '`repeat(auto-fit, minmax(200px, 1fr))` — واکنش‌گرا\n\n• `auto-fit` — ستون‌های خالی جمع می‌شوند\n• `auto-fill` — فضاهای خالی حفظ می‌شوند\n\nمثال: ۳ آیتم، فضا برای ۵ ستون:\n• auto-fit → ۳ ستون پهن\n• auto-fill → ۳ ستون باریک + ۲ خالی', related: ['grid','grid-template-columns','minmax'] },
    { id: 'minmax', k: ['minmax','حداقل حداکثر grid'], a: '`minmax(200px, 1fr)` — حداقل ۲۰۰، حداکثر ۱fr\n\n`grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));`\n\n✅ رایج‌ترین ترکیب برای شبکه‌ی واکنش‌گرا بدون Media Query.', related: ['grid','auto-fit-auto-fill'] },
    { id: 'grid-column-row-span', k: ['grid-column','grid-row','span','گسترش سلول'], a: '`grid-column: span 2;` — ۲ ستون بگیر\n`grid-row: span 2;` — ۲ سطر\n`grid-column: 1 / -1;` — از اولین تا آخرین\n`grid-column: 2 / 4;` — از خط ۲ تا ۴', related: ['grid','grid-template-areas'] },
    { id: 'grid-auto-flow', k: ['grid-auto-flow','auto rows','جریان grid'], a: '`grid-auto-flow: row | column | dense;`\n\n`grid-auto-rows: minmax(100px, auto);` — ارتفاع سطرهای اضافه\n`grid-auto-columns: 100px;`\n\n`dense` — پر کردن فضاهای خالی', related: ['grid'] },
    { id: 'subgrid', k: ['subgrid','sub grid'], a: '`grid-template-columns: subgrid;`\n\nفرزند یک Grid، ستون‌ها/سطرهای والد را به ارث می‌برد — هم‌ترازی کامل.\n\nپشتیبانی: ۲۰۲۳+.', related: ['grid'] },

    // ===== CSS: واکنش‌گرا =====
    { id: 'responsive', k: ['responsive','واکنش گرا','طراحی واکنش','طراحی واکنش گرا'], a: 'طراحی واکنش‌گرا:\n\n۱. `<meta name="viewport" content="width=device-width, initial-scale=1.0">`\n۲. واحدهای نسبی: `%`، `rem`، `vw`\n۳. `max-width` + `margin: auto` برای ظرف\n۴. Flexbox یا Grid با `auto-fit`\n۵. `clamp()` برای فونت\n۶. Media Queries برای تغییرات بزرگ\n\n✅ Mobile-first — از کوچک شروع کن.', related: ['viewport','media-query','breakpoint'] },
    { id: 'media-query', k: ['media query','@media','media'], a: '`@media (max-width: 768px) { ... }`\n\n`@media (min-width: 768px) and (max-width: 1024px) { ... }`\n\n`@media (orientation: landscape)`\n`@media (prefers-color-scheme: dark)`\n`@media (hover: none)` — دستگاه لمسی', related: ['responsive','breakpoint'] },
    { id: 'breakpoint', k: ['breakpoint','نقطه شکست'], a: 'نقاط شکست رایج:\n• `480px` — گوشی کوچک\n• `768px` — تبلت / گوشی بزرگ\n• `1024px` — دسکتاپ کوچک\n• `1280px` — دسکتاپ\n\n✅ برای شروع فقط ۲ کافی است: 768 و 1024.\n✅ خودت را به breakpoint های فریمورک محدود نکن.', related: ['media-query','responsive'] },
    { id: 'mobile-first', k: ['mobile-first','موبایل اول'], a: 'از کوچک شروع کن، با `min-width` بزرگ کن:\n\n`.container { padding: 16px; }`\n`@media (min-width: 768px) {`\n`  .container { padding: 32px; }`\n`}`\n\n✅ مزایا: کد کمتر، بهتر برای موبایل،渐进ی.', related: ['media-query','responsive'] },
    { id: 'container-queries', k: ['container query','@container','کوئری کانتینر'], a: '`@container (min-width: 400px) { ... }`\n\nواکنش‌گرایی نسبت به عرض **والد**، نه صفحه.\n\n`.card-container { container-type: inline-size; }`\n\n✅ برای کامپوننت‌های قابل استفاده در عرض‌های مختلف.', related: ['media-query','responsive'] },
    { id: 'aspect-ratio', k: ['aspect-ratio','نسبت ابعاد'], a: '`aspect-ratio: 16 / 9;` — نسبت عرض به ارتفاع\n`aspect-ratio: 1;` — مربع\n\n✅ برای تصویر، ویدیو، کارت:\n`.thumb { aspect-ratio: 16/9; object-fit: cover; }`', related: ['object-fit','responsive'] },
    { id: 'object-fit', k: ['object-fit','object-position','تصویر برش'], a: '`object-fit`:\n• `fill` — کشیده (پیش‌فرض)\n• `cover` — پر کردن + برش\n• `contain` — کامل، فضای خالی\n• `none` — اندازه اصلی\n• `scale-down` — کوچک‌تر از اصلی\n\n`object-position: center;` — کدام قسمت تصویر دیده شود', related: ['img','aspect-ratio'] },

    // ===== CSS: پیشرفته =====
    { id: 'css-vars', k: ['css variables','متغیرهای css','variables css'], a: '`:root {`\n`  --primary: #3b82f6;`\n`  --radius: 8px;`\n`}`\n`.btn {`\n`  background: var(--primary);`\n`  border-radius: var(--radius);`\n`}`\n\nمزایا: تغییر یک‌جا، تم‌دهی، خوانایی.\nمقدار پیش‌فرض: `var(--x, red)`', related: [':root','theme'] },
    { id: ':root', k: [':root','ریشه css'], a: '`:root` — معادل `<html>` با specificity بالاتر.\n\n`:root {`\n`  --primary: #3b82f6;`\n`  --spacing: 16px;`\n`}`\n\n✅ محل استاندارد تعریف متغیرهای CSS.', related: ['css-vars'] },
    { id: 'import-css', k: ['@import','import css'], a: '`@import url("styles.css");` — داخل CSS\n\n⚠️ کندتر از `<link>` — زنجیره‌ای لود می‌کند.\n\n✅ استفاده نکن، مگر مجبور باشی. `<link>` بهتر است.', related: ['css-attach'] },
    { id: 'supports', k: ['@supports','supports css'], a: '`@supports (display: grid) {`\n`  .container { display: grid; }`\n`}`\n\n`@supports not (display: grid) { ... }`\n\nبرای feature detection — اجرا فقط اگر مرورگر پشتیبانی کند.', related: ['media-query'] },
    { id: 'layer', k: ['@layer','cascade layer','لایه cascade'], a: '`@layer base, components, utilities;`\n\n`@layer base { ... }`\n`@layer components { ... }`\n\nترتیب تعریف، اولویت را مشخص می‌کند — بدون `!important`.\n\n✅ برای پروژه‌های بزرگ.', related: ['specificity','cascade'] },
    { id: 'logical-properties', k: ['logical properties','margin-inline','padding-block','inset'], a: 'Logical Properties — مستقل از جهت:\n\n• `margin-inline-start` = margin-right در RTL\n• `margin-inline-end` = margin-left در RTL\n• `padding-block` — بالا/پایین\n• `inset-inline-start` — left/right منطقی\n• `text-align: start`\n\n✅ کد یکسان در RTL و LTR.', related: ['rtl-ltr'] },
    { id: 'rtl-ltr', k: ['rtl','راست به چپ','dir','فارسی'], a: '`<html lang="fa" dir="rtl">`\n\nLogical Properties:\n• `margin-inline-start` به‌جای `margin-right`\n• `text-align: start`\n• `inset-inline-start`\n\nFlexbox خودکار با RTL هماهنگ می‌شود.', related: ['logical-properties','a11y'] },
    { id: 'bem', k: ['bem','نامگذاری css','block element modifier'], a: 'BEM = Block Element Modifier\n\n• Block: `card`\n• Element: `card__title` (دو زیرخط)\n• Modifier: `card__btn--primary` (دو خط تیره)\n\n`<div class="card">`\n`  <h2 class="card__title">عنوان</h2>`\n`  <button class="card__btn card__btn--primary">تأیید</button>`\n`</div>`\n\n✅ بدون تداخل، خوانا، قابل نگهداری.', related: ['class-attribute'] },
    { id: 'css-architecture', k: ['معماری css','css architecture'], a: 'معماری‌های رایج CSS:\n\n• **BEM** — نام‌گذاری\n• **SMACSS** — ساختار (Base, Layout, Module, State, Theme)\n• **ITCSS** — لایه‌بندی (Settings, Tools, Generic, Elements, Objects, Components, Utilities)\n• **Atomic CSS** — کلاس‌های تک‌کاربردی (Tailwind)\n• **CSS Modules** — scope محلی\n\n✅ برای پروژه‌ی کوچک: BEM کافی است.', related: ['bem','tailwind-bootstrap'] },
    { id: 'css-modules', k: ['css modules','css module'], a: 'در React/Next:\n`import styles from "./Button.module.css";`\n`<button className={styles.primary}>`\n\nهر کامپوننت CSS جدا با scope محلی — بدون تداخل کلاس.', related: ['css-architecture'] },
    { id: 'tailwind-bootstrap', k: ['tailwind','bootstrap','فریمورک css'], a: 'فریمورک‌های CSS:\n\n• **Tailwind** — کلاس‌های کاربردی داخل HTML، سفارشی‌سازی آسان\n  `<div class="bg-blue-500 p-4 rounded">`\n\n• **Bootstrap** — کامپوننت‌های آماده (دکمه، کارت، مدال)، سریع ولی شبیه هم\n\n✅ Tailwind برای پروژه‌های مدرن، Bootstrap برای MVP سریع.', related: ['css-architecture'] },

    // ===== CSS: افکت =====
    { id: 'opacity', k: ['opacity','شفافیت کل'], a: '`opacity: 0.5;` — ۵۰٪ شفاف (کل عنصر و فرزندان)\n\n`opacity: 0;` — کاملاً مخفی ولی فضا اشغال می‌کند\n`opacity: 1;` — کامل\n\nتفاوت با `rgba`: opacity روی **کل عنصر**، rgba فقط روی **رنگ**.', related: ['transparency'] },
    { id: 'filter', k: ['filter','blur','grayscale','فیلتر css'], a: '`filter`:\n• `blur(4px)` — محو\n• `grayscale(100%)` — سیاه‌وسفید\n• `brightness(1.2)` — روشن‌تر\n• `contrast(1.5)`\n• `saturate(2)`\n• `sepia(100%)`\n• `drop-shadow(0 4px 8px rgba(0,0,0,0.3))`\n\n✅ hover: `.img:hover { filter: grayscale(0); }`', related: ['backdrop-filter'] },
    { id: 'box-shadow', k: ['box-shadow','سایه'], a: '`box-shadow: 0 4px 16px rgba(0, 0, 0, 0.1);`\n\nترتیب: `offset-x offset-y blur spread color`\n\nچند سایه:\n`box-shadow: 0 1px 2px rgba(0,0,0,0.1), 0 8px 24px rgba(0,0,0,0.08);`\n\n`inset` — سایه‌ی داخلی.', related: ['text-shadow','border-shadow'] },
    { id: 'border-shadow', k: ['border-radius','گوشه گرد','rounded'], a: '`border-radius: 8px;` — همه گوشه‌ها\n`border-radius: 50%;` — دایره\n`border-radius: 8px 0 8px 0;` — گوشه‌های مختلف\n`border-radius: 999px;` — قرص\n\n`border-top-left-radius: 8px;` — تک‌گوشه.', related: ['box-shadow'] },
    { id: 'clip-path', k: ['clip-path','برش شکل'], a: '`clip-path: circle(50%);`\n`clip-path: polygon(50% 0, 100% 100%, 0 100%);` — مثلث\n`clip-path: ellipse(50% 30%);`\n\n✅ برای اشکال غیرمستطیلی — بدون SVG.', related: ['transform'] },
    { id: 'backdrop-filter', k: ['backdrop-filter','شیشه ای','glass effect'], a: '`backdrop-filter: blur(10px);`\n\nافکت شیشه‌ای — پشت عنصر را بلور می‌کند.\n\n`.glass {`\n`  background: rgba(255, 255, 255, 0.1);`\n`  backdrop-filter: blur(10px);`\n`}`\n\n✅ برای navbar شفاف، modal، کارت.', related: ['filter','opacity'] },

    // ===== CSS: متفرقه =====
    { id: 'visibility', k: ['visibility','hidden','display none','مخفی'], a: '• `visibility: hidden;` — مخفی ولی **فضا نگه می‌دارد**\n• `display: none;` — مخفی و **فضا حذف می‌شود**\n• `opacity: 0;` — شفاف ولی کلیک‌پذیر\n\n✅ `display: none` برای مخفی کامل.\n✅ `visibility` برای fade-in/out.', related: ['display','opacity'] },
    { id: 'cursor', k: ['cursor','نشانگر موس'], a: '`cursor: pointer;` — دست (دکمه/لینک)\n`cursor: default;` — پیش‌فرض\n`cursor: not-allowed;` — ممنوع\n`cursor: grab;` / `grabbing` — کشیدن\n`cursor: text;` — متن\n`cursor: crosshair;`', related: ['display'] },
    { id: 'user-select', k: ['user-select','انتخاب متن'], a: '`user-select: none;` — متن قابل انتخاب نیست (دکمه/آیکون)\n`user-select: text;` — قابل انتخاب (پیش‌فرض)\n`user-select: all;` — با یک کلیک همه انتخاب می‌شود', related: ['cursor'] },
    { id: 'pointer-events', k: ['pointer-events','غیرفعال کلیک'], a: '`pointer-events: none;` — عنصر کلیک‌پذیر نیست\n`pointer-events: auto;` — پیش‌فرض\n\n✅ برای overlay که کلیک را به زیرش پاس می‌دهد.\n✅ برای آیکون داخل دکمه بدون interference.', related: ['cursor','opacity'] },
    { id: 'white-space', k: ['white-space','nowrap','فاصله متن'], a: '`white-space`:\n• `normal` — پیش‌فرض\n• `nowrap` — بدون شکست خط\n• `pre` — حفظ فاصله‌ها\n• `pre-wrap` — حفظ فاصله + شکست\n\n`overflow: hidden; text-overflow: ellipsis; white-space: nowrap;` — متن با «...»', related: ['text-overflow'] },
    { id: 'text-overflow', k: ['text-overflow','ellipsis','سه نقطه'], a: 'متن با «...»:\n`.title {`\n`  white-space: nowrap;`\n`  overflow: hidden;`\n`  text-overflow: ellipsis;`\n`}`\n\nچند خط:\n`-webkit-line-clamp: 3; display: -webkit-box; -webkit-box-orient: vertical; overflow: hidden;`', related: ['white-space','overflow'] },
    { id: 'outline', k: ['outline','outline-offset','حاشیه بیرونی'], a: '`outline: 2px solid red;`\n`outline-offset: 2px;` — فاصله از border\n\n⚠️ outline روی چیدمان اثر ندارد (برخلاف border).\n\n✅ برای `:focus-visible` — دسترسی‌پذیری.\n⚠️ `outline: none` بدون جانشین = بد.', related: ['a11y','border'] },
    { id: 'scroll-behavior', k: ['scroll-behavior','scroll-snap','اسکرول نرم'], a: '`scroll-behavior: smooth;` — اسکرول نرم\n\nScroll Snap:\n`.container {`\n`  scroll-snap-type: x mandatory;`\n`  overflow-x: auto;`\n`}`\n`.item { scroll-snap-align: start; }`\n\n✅ برای کاروسل بدون JS.', related: ['overflow'] },

    // ===== دسترسی‌پذیری و سئو =====
    { id: 'a11y', k: ['a11y','accessibility','دسترسی پذیری','دسترسی'], a: 'اصول دسترسی‌پذیری:\n• `alt` برای همه‌ی `<img>`\n• `<label>` برای فیلدها\n• `<html lang="fa">`\n• کنتراست ۴.۵:۱\n• `title` برای iframe\n• ARIA فقط در نبود تگ معنایی\n• کیبورد: Tab, Enter, Esc\n• `:focus-visible`\n• تست با صفحه‌خوان (NVDA، VoiceOver)', related: ['aria-label','keyboard-nav','screen-reader'] },
    { id: 'seo', k: ['seo','سئو','موتور جستجو'], a: 'سئو در HTML/CSS:\n• `<title>` — ۵۰-۶۰ کاراکتر\n• `<meta name="description">` — ۱۵۰-۱۶۰ کاراکتر\n• فقط یک `<h1>`\n• ساختار h1 → h2 → h3\n• `alt` توصیفی\n• تگ‌های معنایی (header, nav, article)\n• لینک توصیفی: «مقاله‌ی X» نه «اینجا کلیک کنید»\n• سرعت (LCP, FID, CLS)', related: ['semantic-overview','a11y'] },
    { id: 'alt-text', k: ['alt text','alt توصیفی','متن جایگزین'], a: '`<img alt="توضیح تصویر">`\n\n• توصیفی، نه اسم فایل\n• اگر تصویر تزئینی است: `alt=""`\n• اگر آیکون دکمه است: نقش دکمه را بنویس\n• اگر کارت محصول است: نام + قیمت\n\n✅ هدف: کاربر نابینا از تصویر چه می‌فهمد؟', related: ['img','a11y'] },
    { id: 'keyboard-nav', k: ['keyboard navigation','tab','کیبورد'], a: 'دسترسی با کیبورد:\n• `Tab` — عناصر focusable\n• `Enter` — فعال‌سازی لینک/دکمه\n• `Space` — چک‌باکس/دکمه\n• `Esc` — بستن modal\n• `Arrow` — جابه‌جایی در select\n\n⚠️ `outline: none` بدون جانشین = ضد دسترسی‌پذیری.\n✅ از `:focus-visible` استفاده کن.', related: ['a11y','outline'] },
    { id: 'screen-reader', k: ['screen reader','صفحه خوان','nvda','voiceover'], a: 'صفحه‌خوان‌ها:\n• **NVDA** — ویندوز (رایگان)\n• **JAWS** — ویندوز (پولی)\n• **VoiceOver** — مک/iOS\n• **TalkBack** — اندروید\n\nتست: NVDA + Firefox یک ترکیب خوب و رایگان است.', related: ['a11y','aria-label'] },

    // ===== مسیر شغلی =====
    { id: 'javascript-after', k: ['javascript','js','جاوا اسکریپت','بعد از html','قدم بعدی'], a: 'بعد از HTML و CSS: **JavaScript**\n\n• HTML ساختار، CSS ظاهر، JS رفتار\n• پایه‌ها: متغیر، تابع، آرایه، آبجکت، DOM\n• پروژه‌های کوچک: To-Do، ماشین‌حساب\n• سپس Git و GitHub\n• سپس فریمورک (React/Vue)\n\nمنابع رایگان: JavaScript.info، freeCodeCamp.\n\n⚠️ حداقل ۲ ماه JS خالص قبل از فریمورک.', related: ['react-vue','git-github'] },
    { id: 'react-vue', k: ['react','vue','angular','next','svelte','فریمورک js'], a: 'فریمورک‌های JS:\n• **React** — محبوب‌ترین، تقاضای بالا در بازار\n• **Vue** — ساده‌تر، مناسب شروع، محبوب در ایران\n• **Next.js** — React + SSR/SSG، بهترین برای سئو\n• **Angular** — سازمانی، سنگین\n• **Svelte** — سبک، سریع\n\n✅ شروع: Vue؛ شغل: React.', related: ['javascript-after'] },
    { id: 'git-github', k: ['git','github','مدیریت نسخه','version control'], a: 'Git = سیستم مدیریت نسخه\nGitHub = مخزن آنلاین\n\nضروری برای:\n• ذخیره‌ی تاریخچه\n• همکاری تیمی\n• نمونه‌کار برای کارفرما\n\nدستورهای پایه:\n`git init`\n`git add .`\n`git commit -m "پیام"`\n`git push origin main`', related: ['vscode','freelancing'] },
    { id: 'vscode', k: ['vscode','vs code','live server','افزونه'], a: 'VS Code + افزونه‌های ضروری:\n• **Live Server** — رفرش خودکار\n• **Prettier** — مرتب‌سازی کد\n• **HTML CSS Support** — اتکامپلیت\n• **Auto Rename Tag** — تغییر خودکار تگ بسته\n• **Indent Rainbow** — رنگ‌بندی تورفتگی\n• **Path Intellisense** — مسیر فایل', related: ['devtools','git-github'] },
    { id: 'devtools', k: ['devtools','chrome devtools','inspect','ابزار مرورگر'], a: 'Chrome DevTools (F12):\n• **Elements** — inspect و ویرایش زنده\n• **Console** — خطاها و `console.log`\n• **Network** — درخواست‌ها و سرعت\n• **Sources** — دیباگ JS\n• **Lighthouse** — نمره‌ی performance/a11y/seo\n\n✅ ابزار اصلی هر روز.', related: ['vscode'] },
    { id: 'freelancing', k: ['فریلنسر','فریلنسری','استخدام','درآمد','کار','حقوق'], a: 'فرصت‌های شغلی:\n• **فریلنسری** — لندینگ پیج، سایت شخصی. ۵-۳۰ میلیون/ماه\n• **جونیور Front-End** — ۱۵-۴۰ میلیون\n• **سنیور Front-End** — ۴۰-۸۰+ میلیون\n• **پروژه شخصی** — SaaS، دوره\n\nشرط: پروفایل GitHub فعال با ۱۰+ پروژه + نمونه‌کار.', related: ['git-github','javascript-after'] },

    // ===== برنامه =====
    { id: 'buy-flow', k: ['خرید','بسته','فعالسازی','فعال سازی','کد فعال','روبیکا','activation'], a: 'خرید بسته:\n۱. در صفحه‌ی «بسته‌های آموزشی» روی «خرید» کلیک کن\n۲. متن راهنما با آیدی روبیکا نمایش داده می‌شود\n۳. عدد ۷ را به آیدی ارسال کن\n۴. پس از پرداخت، کد فعال‌سازی دریافت می‌کنی\n۵. کد را در فیلد وارد کن و تأیید کن\n\nبعد از فعال‌سازی، درس‌های مربوطه باز می‌شوند.', related: ['theme'] },
    { id: 'theme', k: ['تم','theme','روشن','تیره','آبی','dark','light','blue'], a: 'سه تم داریم:\n• تیره (پیش‌فرض)\n• روشن\n• آبی (جدید)\n\nدکمه‌ی خورشید بالای صفحه → چرخه: تیره → روشن → آبی → تیره.\n\nانتخاب شما در `localStorage` ذخیره می‌شود.', related: ['css-vars'] },
    { id: 'playground', k: ['تمرینگاه','playground','کد زدن','ویرایشگر'], a: 'تمرینگاه کد:\n• نوشتن HTML + CSS + JS در یک فایل\n• پیش‌نمایش زنده (۰.۷ ثانیه تأخیر)\n• ذخیره، ذخیره با نام، باز کردن، دانلود، ایمپورت\n• دکمه‌ی فول‌اسکرین\n• دستیار AI برای تحلیل و اصلاح\n\n`Ctrl+S` → پیش‌نمایش خودکار.', related: ['buy-flow'] },
    { id: 'lessons-info', k: ['درس','lesson','سطح','مقدماتی','متوسط','پیشرفته'], a: 'ساختار درس‌ها:\n• ۳ مقاله (رایگان)\n• ۳ درس مقدماتی (رایگان): lesson-01 تا 03\n• ۱۰ درس متوسط (پولی): 04 تا 13\n• ۱۱ درس پیشرفته (پولی): 14 تا 24\n\nهر درس: متن، کد نمونه، Quiz، پروژه‌ی عملی، XP.', related: ['buy-flow'] },
    { id: 'center-div', k: ['وسط چین','center div','وسط چین کردن'], a: 'وسط‌چین کردن (سه روش):\n\n**۱. Flexbox (بهترین):**\n`.parent { display: flex; align-items: center; justify-content: center; }`\n\n**۲. Grid:**\n`.parent { display: grid; place-items: center; }`\n\n**۳. Absolute + Transform:**\n`.child { position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%); }`', related: ['flexbox','grid','translate'] },
    { id: 'navbar-layout', k: ['navbar','نوار ناوبری','منو بالا'], a: '`.navbar {`\n`  display: flex;`\n`  justify-content: space-between;`\n`  align-items: center;`\n`  padding: 12px 20px;`\n`  background: #17171a;`\n`}`\n\nلوگو چپ، منو راست — یا برعکس با `direction` / `order`.\n\n`position: sticky; top: 0;` برای چسبیدن.', related: ['flexbox','sticky','header'] },
    { id: 'card-layout', k: ['card','کارت','کامپوننت کارت'], a: '`.card {`\n`  background: white;`\n`  padding: 24px;`\n`  border-radius: 12px;`\n`  box-shadow: 0 4px 16px rgba(0,0,0,0.08);`\n`  border: 1px solid #eee;`\n`}`\n\n✅ پترن جهانی کارت — در همه‌جا کار می‌کند.', related: ['box-model','border-shadow'] },
    { id: 'modal-layout', k: ['modal','مودال','dialog css','پاپ آپ'], a: 'مودال با `<dialog>`:\n`<dialog id="m">...<button onclick="m.close()">بستن</button></dialog>`\n`document.getElementById("m").showModal()`\n\nیا با CSS:\n`.modal { position: fixed; inset: 0; display: flex; align-items: center; justify-content: center; background: rgba(0,0,0,0.6); }`\n`.modal-content { background: white; padding: 24px; border-radius: 12px; }`', related: ['position','flexbox','dialog'] },
    { id: 'tooltip', k: ['tooltip','راهنما شناور'], a: 'Tooltip با CSS:\n`.tooltip { position: relative; }`\n`.tooltip::after {`\n`  content: attr(data-tip);`\n`  position: absolute;`\n`  bottom: 100%; left: 50%;`\n`  transform: translateX(-50%);`\n`  background: #333; color: white;`\n`  padding: 4px 8px; border-radius: 4px;`\n`  opacity: 0; transition: 0.2s;`\n`}`\n`.tooltip:hover::after { opacity: 1; }`', related: ['pseudo-elements','position'] },
    { id: 'loading-spinner', k: ['spinner','لودینگ','loading','چرخان'], a: '`.spinner {`\n`  width: 32px; height: 32px;`\n`  border: 3px solid #ddd;`\n`  border-top-color: #3b82f6;`\n`  border-radius: 50%;`\n`  animation: spin 0.8s linear infinite;`\n`}`\n`@keyframes spin { to { transform: rotate(360deg); } }`', related: ['animation-keyframes','border'] },
    { id: 'skeleton', k: ['skeleton','لودینگ اسکلتی','skeleton loader'], a: '`.skeleton {`\n`  background: linear-gradient(90deg, #eee 25%, #f5f5f5 50%, #eee 75%);`\n`  background-size: 200% 100%;`\n`  animation: shimmer 1.5s infinite;`\n`  border-radius: 4px;`\n`  height: 16px;`\n`}`\n`@keyframes shimmer { to { background-position: -200% 0; } }`', related: ['gradient','animation-keyframes'] },
    { id: 'sticky-footer', k: ['sticky footer','footer پایین','پاورقی چسبیده'], a: 'Footer چسبیده به پایین:\n\n`body { display: flex; flex-direction: column; min-height: 100vh; }`\n`main { flex: 1; }`\n`footer { margin-top: auto; }`\n\n✅ اگر محتوا کم باشد، footer پایین می‌ماند.', related: ['flexbox','vh-vw'] },
    { id: 'sidebar-layout', k: ['sidebar','لایه کنار','کنارپیج'], a: '`.layout {`\n`  display: grid;`\n`  grid-template-columns: 250px 1fr;`\n`  gap: 20px;`\n`}`\n`@media (max-width: 768px) {`\n`  .layout { grid-template-columns: 1fr; }`\n`}`\n\nیا با Flexbox:\n`.sidebar { flex: 0 0 250px; }`\n`.main { flex: 1; }`', related: ['grid','flexbox','responsive'] },
    { id: 'centering-text', k: ['وسط چین متن','text center'], a: '`text-align: center;` — متن وسط‌چین افقی\n\nبرای وسط‌چین عمودی داخل باکس:\n`.box { display: flex; align-items: center; justify-content: center; }`', related: ['text-align','flexbox'] },

    // ===== پاسخ‌های مکالمه‌ای =====
    { id: 'how-to-learn', k: ['چطور یاد بگیرم','یادگیری','شروع','از کجا'], a: 'مسیر پیشنهادی:\n\n۱. **۳ درس مقدماتی** رایگان\n۲. **بسته‌ی متوسط** — اتصال CSS، مدل جعبه، Flexbox، Grid، رنگ، واحدها\n۳. **بسته‌ی پیشرفته** — انتخابگر، RTL، فونت، BEM، پروژه نهایی\n۴. **JavaScript** — زبان تعامل\n۵. **Git و GitHub**\n۶. **React یا Vue**\n\n⏱️ هر روز ۳۰ دقیقه تمرین — ۶ ماه تا سطح استخدام.', related: ['javascript-after','react-vue'] },
    { id: 'practice', k: ['تمرین','چطور تمرین کنم','مشق'], a: 'روش تمرین:\n\n• **روزانه ۳۰ دقیقه** منظم بهتر از ۵ ساعت پراکنده\n• **در تمرینگاه کد** بنویس، نه فقط بخوان\n• **پروژه‌ی کوچک** بساز (کارت، فرم، لندینگ)\n• **کدهای نمونه را بشکن** — ببین چه می‌شود\n• **GitHub** — نمونه‌کار بساز\n\n✅ «یادگیری با ساختن» — بهترین روش.', related: ['playground','how-to-learn'] },
    { id: 'motivation', k: ['انگیزه','ناامید','خسته','سخته','بی خیال'], a: 'طبیعیه که سخت باشه. 💪\n\n• هیچ‌کس در یک ماه برنامه‌نویس نمی‌شود\n• هر باگ یک درس است\n• ۳۰ دقیقه‌ی روزانه = ۱۵ ساعت در ماه = ۱۸۰ ساعت در سال\n• بعد از ۶ ماه منظم، به سطح استخدام می‌رسی\n\n✅ تنها تفاوت کسی که موفق می‌شود و کسی که نه، **استمرار** است.\n\nاز تمرینگاه شروع کن — یک کارت کوچک بساز. همین.', related: ['how-to-learn','practice'] },
];

// ---------- امتیازدهی و بهترین تطبیق ----------
function scoreEntry(entry, q) {
    let score = 0;
    for (const kw of entry.k) {
        const k = normalizeFa(kw);
        if (!k) continue;
        if (q === k) { score += 120; continue; }
        if (q.includes(k)) {
            score += 15 + Math.min(k.length, 25) * 2;
            try {
                if (new RegExp(`(^|\\s)${escapeRegex(k)}(\\s|$)`).test(q)) score += 25;
            } catch (e) {}
        }
    }
    return score;
}
function bestEntry(q) {
    let best = null, bestScore = 0;
    for (const e of AI_KB) {
        const s = scoreEntry(e, q);
        if (s > bestScore) { bestScore = s; best = e; }
    }
    return { entry: best, score: bestScore };
}

// ---------- تحلیل عمیق کد ----------
function analyzeCodeDeep(code) {
    const issues = [];
    const info = { hasFlex: false, hasGrid: false, hasMedia: false, hasVar: false, hasViewport: false, hasBoxSizing: false, hasTransition: false, h1Count: 0, imgNoAlt: 0, tags: 0, cssProps: 0, lines: 0 };
    if (!code) return { issues, info };
    info.lines = code.split('\n').length;
    info.tags = (code.match(/<[a-zA-Z]/g) || []).length;
    info.cssProps = (code.match(/[a-zA-Z-]+\s*:\s*[^;{}]+;/g) || []).length;
    info.hasFlex = /display\s*:\s*flex/.test(code);
    info.hasGrid = /display\s*:\s*grid/.test(code);
    info.hasMedia = /@media/.test(code);
    info.hasVar = /var\s*\(\s*--/.test(code);
    info.hasViewport = /name\s*=\s*["']viewport["']/.test(code);
    info.hasBoxSizing = /box-sizing\s*:\s*border-box/.test(code);
    info.hasTransition = /transition\s*:/.test(code);
    info.h1Count = (code.match(/<h1[\s>]/g) || []).length;
    info.imgNoAlt = (code.match(/<img(?![^>]*\balt=)[^>]*>/g) || []).length;

    const selfClosing = new Set(['br','hr','img','input','meta','link','source','area','base','col','embed','param','track','wbr']);
    const styleRanges = [];
    const sr = /<style[^>]*>[\s\S]*?<\/style>/g;
    let sm;
    while ((sm = sr.exec(code)) !== null) styleRanges.push([sm.index, sm.index + sm[0].length]);
    const inStyle = (i) => styleRanges.some(([a, b]) => i >= a && i < b);
    const tagRegex = /<\/?([a-zA-Z][a-zA-Z0-9]*)\b[^>]*\/?>/g;
    const stack = [];
    let m;
    while ((m = tagRegex.exec(code)) !== null) {
        if (inStyle(m.index)) continue;
        const full = m[0], name = m[1].toLowerCase();
        if (full.startsWith('<!') || full.startsWith('<?')) continue;
        if (selfClosing.has(name)) continue;
        if (full.endsWith('/>')) continue;
        const line = code.slice(0, m.index).split('\n').length;
        if (full.startsWith('</')) {
            if (!stack.length) issues.push(`تگ </${name}> در خط ${line} بسته شده ولی باز نشده`);
            else {
                const top = stack.pop();
                if (top.tag !== name) issues.push(`تگ <${top.tag}> (خط ${top.line}) با </${name}> بسته شده — باید </${top.tag}> باشد`);
            }
        } else stack.push({ tag: name, line });
    }
    stack.forEach(s => issues.push(`تگ <${s.tag}> در خط ${s.line} باز شده ولی بسته نشده`));

    const styleContent = [...code.matchAll(/<style[^>]*>([\s\S]*?)<\/style>/g)].map(x => x[1]).join('\n');
    if (styleContent) {
        const opens = (styleContent.match(/{/g) || []).length;
        const closes = (styleContent.match(/}/g) || []).length;
        if (opens !== closes) issues.push(`تعداد { و } در CSS برابر نیست (${opens} در برابر ${closes})`);
    }
    if (info.imgNoAlt > 0) issues.push(`${info.imgNoAlt} تصویر بدون صفت alt`);
    if (info.h1Count > 1) issues.push(`${info.h1Count} تگ <h1> — فقط یکی مجاز است`);
    return { issues: [...new Set(issues)].slice(0, 12), info };
}

function generateErrorExplanation() {
    const code = (typeof cmEditor !== 'undefined' && cmEditor) ? cmEditor.getValue() : '';
    const { issues } = analyzeCodeDeep(code);
    if (!issues.length) return '✓ کد از نظر ساختاری سالم است.\n\nاگر خروجی در پیش‌نمایش درست نیست، احتمالاً مشکل در منطق CSS یا ترتیب عناصر است.';
    let out = `کد ${issues.length} مورد نیاز به بررسی دارد:\n\n`;
    issues.forEach((msg, i) => out += `${i + 1}. ${msg}\n`);
    return out + '\nتوصیه: هر تگ باز باید با تگ بسته متناظر بسته شود و در CSS هر اعلان با ; تمام شود.';
}
function generateImproveSuggestions() {
    const code = (typeof cmEditor !== 'undefined' && cmEditor) ? cmEditor.getValue() : '';
    if (!code || code.length < 10) return 'کد کافی در ویرایشگر نیست.';
    const { info } = analyzeCodeDeep(code);
    const s = [];
    if (!info.hasBoxSizing) s.push('• `* { box-sizing: border-box; }` را اضافه کن.');
    if (!info.hasViewport && /<head/i.test(code)) s.push('• `<meta name="viewport" ...>` را در head بگذار.');
    if (/style\s*=\s*"/.test(code) && code.length > 200) s.push('• استایل‌های درون‌خطی را به `<style>` منتقل کن.');
    if (!info.hasFlex && !info.hasGrid && /<div/i.test(code)) s.push('• برای چیدمان از `display: flex` یا `grid` استفاده کن.');
    if (info.imgNoAlt > 0) s.push(`• به ${info.imgNoAlt} تصویر، صفت alt بده.`);
    if (info.h1Count > 1) s.push(`• ${info.h1Count} تگ <h1> — فقط یکی مجاز است.`);
    if (!info.hasTransition && /:hover|button/i.test(code)) s.push('• به دکمه‌ها `transition: 0.2s` بده.');
    if (!info.hasMedia && code.length > 500) s.push('• برای واکنش‌گرایی `@media` اضافه کن.');
    if (!info.hasVar && code.length > 500) s.push('• از متغیرهای CSS استفاده کن.');
    if (!/lang\s*=\s*["']fa/.test(code) && /<html/i.test(code)) s.push('• `<html lang="fa" dir="rtl">` اضافه کن.');
    if (s.length === 0) return '✓ کد از نظر ساختاری بسیار خوب است!\n\nبرای بهتر شدن: Media Queries، متغیرهای CSS، Logical Properties را امتحان کن.';
    return 'چند پیشنهاد:\n\n' + s.join('\n\n');
}
function generateExample() {
    const code = (typeof cmEditor !== 'undefined' && cmEditor) ? cmEditor.getValue() : '';
    const q = normalizeFa(code);
    if (/flex/.test(q)) return 'مثال Flexbox:\n\n`.navbar {`\n`  display: flex;`\n`  justify-content: space-between;`\n`  align-items: center;`\n`  gap: 16px;`\n`  padding: 12px 20px;`\n`  background: #17171a;`\n`  border-radius: 8px;`\n`}`';
    if (/grid/.test(q)) return 'مثال Grid واکنش‌گرا:\n\n`.gallery {`\n`  display: grid;`\n`  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));`\n`  gap: 16px;`\n`}`';
    if (/position|absolute/.test(q)) return 'مثال position:\n\n`.card { position: relative; padding: 20px; }`\n`.badge { position: absolute; top: -8px; right: -8px; background: red; color: white; padding: 4px 12px; border-radius: 10px; }`';
    if (/animation|keyframes/.test(q)) return 'مثال انیمیشن:\n\n`@keyframes pulse {`\n`  0%, 100% { transform: scale(1); }`\n`  50% { transform: scale(1.05); }`\n`}`\n`.btn { animation: pulse 2s infinite; }`';
    if (/transition/.test(q)) return 'مثال transition:\n\n`.btn {`\n`  background: #3b82f6;`\n`  padding: 12px 24px;`\n`  transition: background 0.2s, transform 0.1s;`\n`}`\n`.btn:hover { background: #60a5fa; }`';
    return 'مثال پایه:\n\n`<style>`\n`  body { font-family: Tahoma; padding: 40px; background: #f5f5f5; }`\n`  .card { background: white; padding: 24px; border-radius: 12px; box-shadow: 0 2px 8px rgba(0,0,0,0.08); }`\n`  h1 { color: #3b82f6; }`\n`</style>`\n`<div class="card"><h1>سلام</h1><p>نمونه</p></div>`';
}
function generateContextAnalysis() {
    const code = (typeof cmEditor !== 'undefined' && cmEditor) ? cmEditor.getValue() : '';
    if (!code || code.length < 20) return 'کد کافی برای تحلیل نیست.';
    const { info, issues } = analyzeCodeDeep(code);
    let out = `📊 تحلیل کد:\n\n${info.lines} خط · ${info.tags} تگ HTML · ${info.cssProps} ویژگی CSS\n\n🔍 وضعیت:\n`;
    out += info.hasFlex ? '✓ Flexbox\n' : '· Flexbox نیست\n';
    out += info.hasGrid ? '✓ Grid\n' : '· Grid نیست\n';
    out += info.hasMedia ? '✓ Media Query\n' : '· Media Query نیست\n';
    out += info.hasVar ? '✓ متغیر CSS\n' : '· متغیر CSS نیست\n';
    out += info.hasBoxSizing ? '✓ box-sizing\n' : '⚠ box-sizing نیست\n';
    out += info.hasViewport ? '✓ viewport\n' : '⚠ meta viewport نیست\n';
    if (issues.length) {
        out += `\n⚠ ${issues.length} مشکل ساختاری:\n`;
        issues.slice(0, 5).forEach(m => out += `• ${m}\n`);
    } else out += '\n✓ ساختار HTML سالم است.\n';
    return out;
}

// ---------- تشخیص نیت ----------
function isCodeMessage(text) {
    if (!text) return false;
    if (/<[a-zA-Z][^>]*>/.test(text) && /<\/[a-zA-Z]/.test(text)) return true;
    if (/[a-z-]+\s*:\s*[^;{}]+;/.test(text) && /[{}]/.test(text)) return true;
    return false;
}
function detectIntent(q, raw) {
    if (!q) return 'empty';
    // سلام خالص (فقط کلمه‌ی سلام و مشتقات)
    const greetingRegex = /^(سلام|درود|hi|hello|hey|خوبی|چطوری|صبح بخیر|شب بخیر|عصر بخیر|ظهر بخیر|وقت بخیر|چه خبر|سلم|سلان|صلام|سلام علیکم|علیک سلام)( سلام| خوبی| چطوری| عزیز| جان| دوست)?$/;
    if (greetingRegex.test(q)) return 'greeting';
    // ممنون خالص
    if (/^(ممنون|مرسی|thanks|thank you|دستت درد نکنه|دست شما درد نکنه|خسته نباشی|ممنونم|مرسیم)$/.test(q)) return 'thanks';
    // خداحافظ
    if (/^(خداحافظ|خداحافظت|bye|goodbye|فعلا|بای)$/.test(q)) return 'goodbye';
    // چطوری؟ (تنها)
    if (/^(چطوری|خوبی|چه خبر|حالت چطوره|چطوره)$/.test(q)) return 'how-are-you';
    // کمک / تو چه کارهایی می‌کنی
    if (/^(کمک|help|چیکار می کنی|چه کاری می تونی|کارت چیه|چه کارهایی می تونی بکنی|راهنما)$/.test(q)) return 'help';
    // خطا / مشکل
    if (/^(خطا|error|مشکل|کار نمی|خرابه|به هم ریخته|درست نیست|چرا کار نمی کنه|ایراد)/.test(q)) return 'analyze';
    // بهبود
    if (/^(بهتر|بهبود|بهینه|improve|چطور بهتر|بهترش کن)/.test(q)) return 'improve';
    // مثال
    if (/^(مثال|نمونه|example|یک مثال|یه مثال|مثالی)/.test(q)) return 'example';
    // تحلیل کد
    if (/^(کد من|کدم|تحلیل|analyze|بررسی|بررسی کن|کدمو)/.test(q)) return 'analyze';
    // کد paste شده
    if (isCodeMessage(raw)) return 'code-paste';
    return 'question';
}

// ---------- پاسخ‌های مکالمه‌ای ----------
function greetingResponse() {
    const hour = new Date().getHours();
    const timeOfDay = hour < 5 ? 'شب' : hour < 12 ? 'صبح' : hour < 17 ? 'بعدازظهر' : hour < 20 ? 'عصر' : 'شب';
    const contexts = [];
    if (typeof currentLessonId !== 'undefined' && currentLessonId && LESSONS[currentLessonId]) {
        contexts.push(`در درس «${LESSONS[currentLessonId].title}» هستی`);
    }
    if (typeof cmEditor !== 'undefined' && cmEditor && cmEditor.getValue().length > 100) {
        contexts.push('کدی در تمرینگاه داری');
    }
    const ctx = contexts.length ? `\n\n💡 ${contexts.join(' و ')} — می‌تونم کمکت کنم.` : '';
    const greetings = [
        `سلام، ${timeOfDay} بخیر! 👋`,
        `درود، ${timeOfDay} بخیر! ✨`,
        `سلام! ${timeOfDay} زیبا. 🌟`
    ];
    const greeting = greetings[Math.floor(Math.random() * greetings.length)];
    return `${greeting}\n\nمن دستیار کدآموز هستم — در HTML، CSS، چیدمان، دسترسی‌پذیری و مسیر یادگیری کمکت می‌کنم.${ctx}\n\nچی می‌خوای بدونی؟ می‌تونی:\n• یک سؤال فنی بپرسی (مثلاً «تفاوت flex و grid چیه؟»)\n• از دکمه‌های بالا استفاده کنی\n• کدت رو بفرستی تا تحلیل کنم`;
}
function thanksResponse() {
    const responses = [
        'خواهش می‌کنم! 🌟\n\nاگر سؤال دیگری داری، در خدمتم. یادت باشه: تمرین روزانه، کلید اصلی یادگیری است.',
        'قابلی نداشت! 😊\n\nهر وقت سؤالی داشتی، من همینجام. موفق باشی در یادگیری!',
        'خوشحالم که کمک کردم! ✨\n\nاگر باز سؤالی داشتی یا خواستی کدت رو بررسی کنم، بگو.'
    ];
    return responses[Math.floor(Math.random() * responses.length)];
}
function goodbyeResponse() {
    return 'خداحافظ! 👋\n\nموفق باشی در یادگیری. هر وقت برگشتی، من همینجام.\n\n💡 یادت باشه: روزی ۳۰ دقیقه تمرین، ۶ ماه بعد به سطح استخدام می‌رسی.';
}
function howAreYouResponse() {
    return 'ممنون که پرسیدی! 😊\n\nمن همیشه آماده‌ام — چه سؤالی داری؟ می‌تونم درباره‌ی HTML، CSS، چیدمان، RTL، یا مسیر یادگیری کمکت کنم.';
}
function helpResponse() {
    return 'من دستیار کدآموز هستم و می‌تونم در این موارد کمک کنم:\n\n📚 **HTML** — تگ‌ها، فرم، معنایی، رسانه\n🎨 **CSS** — انتخابگر، جعبه، رنگ، واحد، فونت\n📐 **چیدمان** — Flexbox، Grid، Position، واکنش‌گرا\n⚡ **پیشرفته** — انیمیشن، متغیر، توابع، BEM\n♿ **دسترسی‌پذیری و سئو**\n🌍 **RTL و Logical Properties**\n🚀 **مسیر شغلی** — JS، فریمورک، Git، استخدام\n🔧 **برنامه** — خرید، فعال‌سازی، تم، تمرینگاه\n\nهمچنین می‌تونم:\n• کدت رو تحلیل کنم و خطاها رو پیدا کنم\n• پیشنهاد بهبود بدم\n• یک مثال کاربردی بزنم\n• کدت رو خودکار اصلاح کنم\n\nفقط سؤالت رو بپرس یا از دکمه‌های بالا استفاده کن.';
}
function fallbackResponse(ctx) {
    let tip = '';
    if (ctx && ctx.screen === 'playground-screen') tip = '\n\n💡 در تمرینگاه هستی — «تحلیل کد» یا «بهبود کد» رو امتحان کن.';
    else if (ctx && ctx.screen === 'home-screen') tip = '\n\n💡 می‌تونی درباره‌ی یک درس خاص بپرسی یا از صفحه‌ی بسته‌ها، یک سطح رو فعال کنی.';
    return `متأسفانه پاسخ دقیقی برای این سؤال ندارم.${tip}\n\nمی‌تونی درباره‌ی این موضوعات بپرسی:\n\n• **HTML** — تگ‌ها، فرم، معنایی، رسانه\n• **CSS** — انتخابگر، جعبه، رنگ، واحدها\n• **چیدمان** — Flexbox، Grid، Position، واکنش‌گرا\n• **پیشرفته** — انیمیشن، transform، متغیر، calc/clamp\n• **RTL، دسترسی‌پذیری، BEM، سئو**\n• **مسیر شغلی** — JS، React، Git، فریلنسری\n• **برنامه** — خرید، فعال‌سازی، تم، درس‌ها\n\nیا از دکمه‌های بالای پنل استفاده کن:\n• «توضیح خطا» — تحلیل کد فعلی\n• «بهبود کد» — پیشنهاد بهبود\n• «مثال بزن» — یک نمونه کاربردی\n• «تحلیل کد» — وضعیت کامل کد`;
}
function suggestFollowups(entry) {
    if (!entry || !entry.related || !entry.related.length) return '';
    const names = entry.related.map(id => AI_KB.find(e => e.id === id)).filter(Boolean).map(e => e.k[0]);
    if (!names.length) return '';
    return '\n\n━━━━━━━━━━\n💡 همچنین می‌تونی بپرسی:\n' + names.map(n => `• ${n}`).join('\n');
}

// ---------- مغز متفکر ----------
function brainThink(userText, ctx) {
    const raw = String(userText || '').trim();
    const q = normalizeFa(raw);
    if (!q) return fallbackResponse(ctx);

    const intent = detectIntent(q, raw);
    aiSessionContext.lastIntent = intent;
    aiSessionContext.lastQuery = q;

    if (intent === 'greeting') return greetingResponse();
    if (intent === 'thanks') return thanksResponse();
    if (intent === 'goodbye') return goodbyeResponse();
    if (intent === 'how-are-you') return howAreYouResponse();
    if (intent === 'help') return helpResponse();

    if (intent === 'code-paste') {
        const { issues, info } = analyzeCodeDeep(raw);
        let out = '📝 کدت رو بررسی کردم:\n\n';
        if (issues.length) {
            out += `${issues.length} نکته:\n\n`;
            issues.forEach((m, i) => out += `${i + 1}. ${m}\n`);
        } else out += '✓ ساختار سالم است.\n';
        out += '\n💡 وضعیت:\n';
        if (info.hasFlex) out += '• Flexbox ✓\n';
        if (info.hasGrid) out += '• Grid ✓\n';
        if (!info.hasViewport) out += '• viewport نداری\n';
        if (!info.hasBoxSizing) out += '• box-sizing: border-box اضافه کن\n';
        if (info.imgNoAlt > 0) out += `• ${info.imgNoAlt} تصویر بدون alt\n`;
        return out;
    }
    if (intent === 'analyze') {
        aiSessionContext.lastTopic = 'analyze';
        return generateErrorExplanation() + '\n\n' + generateContextAnalysis();
    }
    if (intent === 'improve') {
        aiSessionContext.lastTopic = 'improve';
        return generateImproveSuggestions();
    }
    if (intent === 'example') {
        aiSessionContext.lastTopic = 'example';
        return generateExample();
    }

    const { entry, score } = bestEntry(q);
    if (entry && score >= 8) {
        aiSessionContext.lastTopic = entry.id;
        return entry.a + suggestFollowups(entry);
    }
    if (entry && score >= 3) {
        aiSessionContext.lastTopic = entry.id;
        return entry.a;
    }
    return fallbackResponse(ctx);
}

function matchResponse(text) {
    const ctx = {
        screen: (document.querySelector('.screen.active') || {}).id || 'home-screen',
        lessonId: typeof currentLessonId !== 'undefined' ? currentLessonId : null,
        hasCode: (typeof cmEditor !== 'undefined' && cmEditor) ? cmEditor.getValue().length > 50 : false
    };
    return brainThink(text, ctx);
}

// ---------- تاریخچه ----------
function loadAiHistory() {
    try { const s = localStorage.getItem(AI_HISTORY_KEY); aiMessages = s ? JSON.parse(s) : []; } catch (e) { aiMessages = []; }
}
function saveAiHistory() { try { localStorage.setItem(AI_HISTORY_KEY, JSON.stringify(aiMessages.slice(-50))); } catch (e) {} }
function renderAiMessages() {
    const container = document.getElementById('ai-messages');
    if (!container) return;
    container.innerHTML = '';
    if (aiMessages.length === 0) {
        addAiMessageToDOM({ role: 'ai', text: 'سلام! 👋\nمن دستیار کدآموز هستم. در HTML، CSS و مسیر یادگیری کمکت می‌کنم.\n\nمی‌تونی از سؤال‌های آماده بالا استفاده کنی، یا سؤالت رو تایپ کنی، یا کدت رو برای تحلیل بفرستی.' });
        return;
    }
    aiMessages.forEach(m => addAiMessageToDOM(m, false));
    container.scrollTop = container.scrollHeight;
}
function addAiMessageToDOM(msg, scroll = true) {
    const container = document.getElementById('ai-messages');
    if (!container) return;
    const wrapper = document.createElement('div');
    wrapper.className = 'ai-message ai-message-' + (msg.role === 'user' ? 'user' : 'ai');
    const bubble = document.createElement('div');
    bubble.className = 'ai-bubble';
    let html = escapeHtml(msg.text);
    html = html.replace(/`([^`]+)`/g, '<code>$1</code>');
    html = html.replace(/\*\*([^*]+)\*\*/g, '<strong>$1</strong>');
    bubble.innerHTML = html;
    wrapper.appendChild(bubble);
    container.appendChild(wrapper);
    if (scroll) container.scrollTop = container.scrollHeight;
}
function addAiMessage(role, text) { aiMessages.push({ role, text }); saveAiHistory(); addAiMessageToDOM({ role, text }); }
function showAiTyping() {
    const container = document.getElementById('ai-messages');
    if (!container) return;
    const el = document.createElement('div');
    el.className = 'ai-typing'; el.id = 'ai-typing-indicator';
    el.innerHTML = '<span></span><span></span><span></span>';
    container.appendChild(el);
    container.scrollTop = container.scrollHeight;
}
function hideAiTyping() { const el = document.getElementById('ai-typing-indicator'); if (el) el.remove(); }
function sendAiMessage(text) {
    if (!text.trim() || aiTyping) return;
    aiTyping = true;
    addAiMessage('user', text);
    showAiTyping();
    setTimeout(() => {
        let response = matchResponse(text);
        if (response === '__ANALYZE__') response = generateErrorExplanation();
        else if (response === '__IMPROVE__') response = generateImproveSuggestions();
        else if (response === '__EXAMPLE__') response = generateExample();
        else if (response === '__CONTEXT__') response = generateContextAnalysis();
        hideAiTyping();
        addAiMessage('ai', response);
        // دکمه‌ی «اصلاح خودکار» فقط وقتی تحلیل خطاست
        if (aiSessionContext.lastIntent === 'analyze') {
            const container = document.getElementById('ai-messages');
            const last = container.lastElementChild;
            if (last && last.querySelector('.ai-bubble')) {
                const fixBtn = document.createElement('button');
                fixBtn.className = 'ai-fix-btn';
                fixBtn.innerHTML = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg> اصلاح خودکار کد';
                fixBtn.addEventListener('click', autoFixCode);
                last.querySelector('.ai-bubble').appendChild(fixBtn);
            }
        }
        aiTyping = false;
    }, 600 + Math.random() * 500);
}
function openAiPanel() {
    document.getElementById('ai-panel').classList.add('active');
    renderAiMessages();
    setTimeout(() => { const c = document.getElementById('ai-messages'); if (c) c.scrollTop = c.scrollHeight; }, 50);
}
function closeAiPanel() { document.getElementById('ai-panel').classList.remove('active'); }

// ---------- اصلاح خودکار ----------
function autoFixCode() {
    if (!cmEditor) { showToast('ویرایشگری در دسترس نیست', 'error'); return; }
    let code = cmEditor.getValue();
    let fixes = 0;
    code = code.replace(/(<style[^>]*>)([\s\S]*?)(<\/style>)/g, (match, open, css, close) => {
        const fixed = css.split('\n').map(line => {
            const t = line.trim();
            if (t && /[a-z-]+\s*:\s*[^;{}]+$/.test(t) && !t.endsWith('{') && !t.endsWith('}') && !t.startsWith('/*') && !t.startsWith('//')) {
                fixes++;
                return line.replace(/\s*$/, ';');
            }
            return line;
        }).join('\n');
        return open + fixed + close;
    });
    const stack = [];
    const selfClosing = new Set(['br','hr','img','input','meta','link','source','area','base','col','embed','param','track','wbr']);
    const tagRegex = /<\/?([a-zA-Z][a-zA-Z0-9]*)\b[^>]*\/?>/g;
    let m;
    const styleRanges = [];
    const sr = /<style[^>]*>[\s\S]*?<\/style>/g;
    let sm;
    while ((sm = sr.exec(code)) !== null) styleRanges.push([sm.index, sm.index + sm[0].length]);
    const inStyle = (i) => styleRanges.some(([a, b]) => i >= a && i < b);
    while ((m = tagRegex.exec(code)) !== null) {
        if (inStyle(m.index)) continue;
        const f = m[0], n = m[1].toLowerCase();
        if (f.startsWith('<!') || f.startsWith('<?')) continue;
        if (selfClosing.has(n)) continue;
        if (f.endsWith('/>')) continue;
        if (f.startsWith('</')) {
            if (stack.length && stack[stack.length - 1] === n) stack.pop();
            else if (stack.length) stack.pop();
        } else stack.push(n);
    }
    if (stack.length > 0 && stack.some(t => ['div','p','h1','h2','h3','section','article','header','footer','nav','main','ul','ol','li','form','style','body','html'].includes(t))) {
        const closing = stack.reverse().map(t => `</${t}>`).join('\n');
        if (code.includes('</body>')) { code = code.replace('</body>', closing + '\n</body>'); fixes += stack.length; }
    }
    code = code.replace(/<img(?![^>]*\balt=)([^>]*)>/g, (match, attrs) => { fixes++; return `<img${attrs} alt="">`; });
    if (fixes === 0) { showToast('مشکل خودکاری پیدا نشد', 'error'); return; }
    cmEditor.setValue(code);
    showToast(fixes + ' مورد اصلاح شد ✓', 'success');
}

// ---------- اصلاح خودکار ----------
function autoFixCode() {
    if (!cmEditor) { showToast('ویرایشگری در دسترس نیست', 'error'); return; }
    let code = cmEditor.getValue();
    let fixes = 0;
    code = code.replace(/(<style[^>]*>)([\s\S]*?)(<\/style>)/g, (match, open, css, close) => {
        const fixed = css.split('\n').map(line => {
            const t = line.trim();
            if (t && /[a-z-]+\s*:\s*[^;{}]+$/.test(t) && !t.endsWith('{') && !t.endsWith('}') && !t.startsWith('/*') && !t.startsWith('//')) {
                fixes++;
                return line.replace(/\s*$/, ';');
            }
            return line;
        }).join('\n');
        return open + fixed + close;
    });
    const stack = [];
    const selfClosing = new Set(['br','hr','img','input','meta','link','source','area','base','col','embed','param','track','wbr']);
    const tagRegex = /<\/?([a-zA-Z][a-zA-Z0-9]*)\b[^>]*\/?>/g;
    let m;
    const styleRanges = [];
    const sr = /<style[^>]*>[\s\S]*?<\/style>/g;
    let sm;
    while ((sm = sr.exec(code)) !== null) styleRanges.push([sm.index, sm.index + sm[0].length]);
    const inStyle = (i) => styleRanges.some(([a, b]) => i >= a && i < b);
    while ((m = tagRegex.exec(code)) !== null) {
        if (inStyle(m.index)) continue;
        const f = m[0], n = m[1].toLowerCase();
        if (f.startsWith('<!') || f.startsWith('<?')) continue;
        if (selfClosing.has(n)) continue;
        if (f.endsWith('/>')) continue;
        if (f.startsWith('</')) {
            if (stack.length && stack[stack.length - 1] === n) stack.pop();
            else if (stack.length) stack.pop();
        } else stack.push(n);
    }
    if (stack.length > 0 && stack.some(t => ['div','p','h1','h2','h3','section','article','header','footer','nav','main','ul','ol','li','form','style','body','html'].includes(t))) {
        const closing = stack.reverse().map(t => `</${t}>`).join('\n');
        if (code.includes('</body>')) { code = code.replace('</body>', closing + '\n</body>'); fixes += stack.length; }
    }
    code = code.replace(/<img(?![^>]*\balt=)([^>]*)>/g, (match, attrs) => { fixes++; return `<img${attrs} alt="">`; });
    if (fixes === 0) { showToast('مشکل خودکاری پیدا نشد', 'error'); return; }
    cmEditor.setValue(code);
    showToast(fixes + ' مورد اصلاح شد ✓', 'success');
}

// ============================================================
// Init
// ============================================================
document.addEventListener('DOMContentLoaded', () => {
    initTheme();
    initFont();
    initSplashAndOnboarding();
    loadState();
    loadAiHistory();

    document.getElementById('home-screen').addEventListener('click', (e) => {
        const banner = e.target.closest('#unlock-banner');
        if (banner) { renderPurchaseTiers(); showScreen('purchase-screen'); return; }
        const card = e.target.closest('.lesson, .continue-card');
        if (!card) return;
        if (card.classList.contains('locked')) { showToast('این درس قفل است. بسته‌ی مناسب را خریداری کنید.', 'error'); return; }
        const id = card.dataset.lessonId;
        if (id) openLesson(id);
    });

    const cartBtn = document.getElementById('cart-btn');
    if (cartBtn) cartBtn.addEventListener('click', () => { renderPurchaseTiers(); showScreen('purchase-screen'); });
    const themeBtn = document.getElementById('theme-btn');
    if (themeBtn) themeBtn.addEventListener('click', toggleTheme);

    document.getElementById('back-btn').addEventListener('click', goHome);
    document.querySelectorAll('[data-open-playground]').forEach(el => {
        el.addEventListener('click', () => {
            showScreen('playground-screen');
            window.dispatchEvent(new Event('playground-shown'));
        });
    });

    document.getElementById('purchase-back-btn').addEventListener('click', goHome);
    document.getElementById('purchase-tiers').addEventListener('click', (e) => {
        const btn = e.target.closest('[data-buy-tier]');
        if (btn && !btn.disabled) initiatePurchase(btn.dataset.buyTier);
    });

    // فعال‌سازی
    const actBtn = document.getElementById('activation-confirm-btn');
    if (actBtn) actBtn.addEventListener('click', confirmActivation);
    const actInput = document.getElementById('activation-code-input');
    if (actInput) {
        actInput.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') { e.preventDefault(); confirmActivation(); }
        });
        actInput.addEventListener('input', () => {
            actInput.classList.remove('error');
            const errEl = document.getElementById('activation-error');
            if (errEl) errEl.textContent = '';
        });
    }

    const fsBtn = document.getElementById('font-smaller');
    if (fsBtn) fsBtn.addEventListener('click', () => changeFont(-0.05));
    const flBtn = document.getElementById('font-larger');
    if (flBtn) flBtn.addEventListener('click', () => changeFont(0.05));
    const rpBtn = document.getElementById('reset-progress-btn');
    if (rpBtn) rpBtn.addEventListener('click', resetProgress);

    const fullscreenBtn = document.getElementById('fullscreen-btn');
    if (fullscreenBtn) {
        fullscreenBtn.addEventListener('click', () => {
            const container = document.getElementById('playground-container');
            if (!container) return;
            const isFull = container.classList.toggle('editor-fullscreen');
            const icon = document.getElementById('fullscreen-icon');
            if (icon) {
                if (isFull) icon.innerHTML = '<path d="M8 3v3a2 2 0 0 1-2 2H3"/><path d="M21 8h-3a2 2 0 0 1-2-2V3"/><path d="M3 16h3a2 2 0 0 1 2 2v3"/><path d="M16 21v-3a2 2 0 0 1 2-2h3"/>';
                else icon.innerHTML = '<path d="M8 3H5a2 2 0 0 0-2 2v3"/><path d="M21 8V5a2 2 0 0 0-2-2h-3"/><path d="M3 16v3a2 2 0 0 0 2 2h3"/><path d="M16 21h3a2 2 0 0 0 2-2v-3"/>';
            }
            showToast(isFull ? 'حالت فول‌اسکرین' : 'حالت عادی', 'success');
        });
    }

    document.getElementById('lesson-content').addEventListener('click', (e) => {
        const complete = e.target.closest('[data-complete-id]');
        if (complete) { completeLesson(complete.dataset.completeId); return; }
        const next = e.target.closest('[data-open-id]');
        if (next) { openLesson(next.dataset.openId); return; }
        const back = e.target.closest('[data-back-home]');
        if (back) { goHome(); return; }
        const goto = e.target.closest('[data-goto-purchase]');
        if (goto) { renderPurchaseTiers(); showScreen('purchase-screen'); return; }
        const tryBtn = e.target.closest('[data-try-code]');
        if (tryBtn) { openPlaygroundWithCode(buildPlaygroundCode(decodeURIComponent(tryBtn.dataset.tryCode))); return; }
        const copyBtn = e.target.closest('[data-copy-code]');
        if (copyBtn) { copyCodeToClipboard(copyBtn.dataset.copyCode); return; }
        const quizBtn = e.target.closest('[data-quiz-show]');
        if (quizBtn) {
            const answerId = quizBtn.dataset.quizShow;
            const answer = document.getElementById(answerId);
            if (answer) {
                const isOpen = answer.classList.toggle('open');
                if (isOpen) {
                    quizBtn.innerHTML = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24"/><line x1="1" y1="1" x2="23" y2="23"/></svg> پنهان کردن پاسخ';
                } else {
                    quizBtn.innerHTML = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/></svg> نمایش پاسخ';
                }
            }
            return;
        }
        const projectBtn = e.target.closest('[data-project-code]');
        if (projectBtn) { openPlaygroundWithCode(decodeURIComponent(projectBtn.dataset.projectCode)); return; }
        const colorSwatch = e.target.closest('[data-copy-color]');
        if (colorSwatch) { copyColorToClipboard(colorSwatch.dataset.copyColor); return; }
    });

    document.getElementById('reward-btn').addEventListener('click', closeRewardModal);
    document.getElementById('reward-backdrop').addEventListener('click', closeRewardModal);

    document.querySelectorAll('[data-close-dialog]').forEach(el => {
        el.addEventListener('click', () => {
            const id = el.dataset.closeDialog;
            document.getElementById(id).classList.remove('active');
            if (id === 'name-modal') pendingNameAction = null;
            if (id === 'purchase-confirm-modal') pendingPurchaseTier = null;
            if (id === 'activation-modal') pendingPurchaseTier = null;
        });
    });

    document.getElementById('ai-fab').addEventListener('click', openAiPanel);
    document.getElementById('ai-close-btn').addEventListener('click', closeAiPanel);
    document.getElementById('ai-panel-backdrop').addEventListener('click', closeAiPanel);
    document.getElementById('ai-clear-btn').addEventListener('click', () => {
        if (!confirm('تاریخچه‌ی گفتگو پاک شود؟')) return;
        aiMessages = []; saveAiHistory(); renderAiMessages();
        showToast('تاریخچه پاک شد', 'success');
    });
    document.querySelectorAll('[data-ai-prompt]').forEach(chip => {
        chip.addEventListener('click', () => {
            const prompt = chip.dataset.aiPrompt;
            let userText;
            if (prompt === '__ERROR__') userText = 'لطفاً خطاهای کد من را توضیح بده';
            else if (prompt === '__IMPROVE__') userText = 'چطور می‌توانم کدم را بهتر کنم؟';
            else if (prompt === '__EXAMPLE__') userText = 'یک مثال بزن';
            else if (prompt === '__CONTEXT__') userText = 'کد من را تحلیل کن';
            else userText = prompt;
            sendAiMessage(userText);
        });
    });
    const aiInput = document.getElementById('ai-input');
    const aiSend = document.getElementById('ai-send-btn');
    const doSend = () => {
        const text = aiInput.value.trim();
        if (!text) return;
        aiInput.value = '';
        sendAiMessage(text);
    };
    aiSend.addEventListener('click', doSend);
    aiInput.addEventListener('keypress', (e) => { if (e.key === 'Enter') doSend(); });

    setupSwipe();
    initPlayground();
    updateStatsUI();
    state.completedLessons.forEach(markLessonCompleteInList);
    updateContinueCard();
    applyPurchaseState();
    renderPurchaseTiers();
    updateCartBadge();
});
