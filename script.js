// انيميشن الكلمه اللي بتتمسح
const typed = new Typed('#changing-text', {
  strings: ['Back-End Developer','Graphic Designer' , 'Computer Science Student'], // الكلمات اللي هتتبدل
  typeSpeed: 60,    // سرعة الكتابة (بالملي ثانية)
  backSpeed: 40,    // سرعة المسح
  loop: true        // يفضل يعيد ويزيد للأبد
});
// تشغيل مكتبة الأنيميشن باحترافية
AOS.init({
    duration: 2000, 
    once: true,     
});
const menubtn = document.querySelector("#menu-btn");
const listnav = document.querySelector("#list");
const closeMenu = document.querySelector("#closeMenu");

menubtn.addEventListener("click",()=>{

    listnav.classList.toggle("translate-x-full");
});
closeMenu.addEventListener("click" , ()=>{
    listnav.classList.toggle("translate-x-full");
});
// بيانات الكروت
const projects = [
      
    {title: "KoraSpot",
        description: "A comprehensive SaaS platform for sports facilities management, featuring real-time financial dashboards, custom branch controls, secure down-payment flows, automated email notifications, and an intuitive direct-booking interface for clients.",
        image: "Photo/koraspot.png",
        tags: ["Laravel Framework", "MySQL", "JavaScript", "Tailwind"],
        liveLink: "https://koraspot.sbs/",
        codeLink: "https://github.com/ziad0025/Football-sass.git",
        type: "code"
    },
    {
        title: "Menu L'Étoile",
        description: "A sophisticated fine-dining restaurant website featuring an interactive filterable menu, seamless reservation booking, and a smooth, responsive dark-themed UI.",
        image: "Photo/Menu L'Étoile.png",
        tags: ["HTML5", "Tailwind CSS", "JavaScript", "AOS.js"],
        liveLink: "https://ziad0025.github.io/Menu-L-toile/",
        codeLink: "https://github.com/ziad0025/Menu-L-toile.git",
        type: "code"
    },
    {
        title: "Developer Portfolio",
        description: "My personal space on the web. A fully responsive portfolio using a premium dark concept and sleek glow utilities.",
        image: "Photo/portfolio image.png",
        tags: ["HTML5", "Tailwind CSS", "JavaScript", "AOS.js"],
        liveLink: "https://ziad0025.github.io/Ziad-Portfolio/",
        codeLink: "https://github.com/ziad0025/Ziad-Portfolio.git",
        type: "code"
    },
    {
        title: "Leon Creative Agency",
        description: "A modern and clean creative agency template focusing on elegant layouts and pixel-perfect semantic HTML structure.",
        image: "Photo/image loan .png",
        tags: ["HTML5", "CSS3", "Grid & Flexbox"],
        liveLink: "https://ziad0025.github.io/Leon-template/",
        codeLink: "https://github.com/ziad0025/Leon-template.git",
        type: "code"
    },
    {
        title: "X Watch Landing Page",
        description: "A high-end product landing page designed to showcase luxury watches with hover effects.",
        image: "Photo/x-watch image .png",
        tags: ["HTML5", "CSS"],
        liveLink: "https://ziad0025.github.io/X-watch-landing-page/",
        codeLink: "https://github.com/ziad0025/X-watch-landing-page.git",
        type: "code"
    },

    // ===== مشاريع الديزاين =====
    {
        title: "Social Media Design",
        image: "Photo/graphics/Artboard 1.jpg",
        tags: ["Photoshop", "Social Media"],
        type: "design"
    },
    {
        title: "Social Media Design",
        image: "Photo/graphics/Artboard 2.jpg",
        tags: ["Photoshop","Social Media"],
        type: "design"
    },
    {
        title: "Social Media Design",
        image: "Photo/graphics/Artboard 3.jpg",
        tags: ["Photoshop","Social Media"],
        type: "design"
    },
    {
        title: "Social Media Design",
        image: "Photo/graphics/Artboard 4.jpg",
        tags: ["Photoshop","Social Media"],
        type: "design"
    },
    {
        title: "Social Media Design",
        image: "Photo/graphics/frist.jpg",
        tags: ["Photoshop", "Social Media"],
        type: "design"
    },
    {
        title: "Social Media Design",
        image: "Photo/graphics/sec.jpg",
        tags: ["Photoshop", "Social Media"],
        type: "design"
    },


];
const codeContainer = document.querySelector("#code-projects");
const designContainer = document.querySelector("#design-projects");
projects.forEach(project => {
    const tagsHTML = project.tags.map(tag => 
        `<span class="text-[11px] font-mono font-semibold bg-slate-950 px-2.5 py-1 rounded-full text-cyan-400 border border-cyan-500/10">${tag}</span>`
    ).join(' ');

    if (project.type === 'code') {
        // كارت البرمجة الأصلي كما هو
        const codeCardHtml = `
            <div class="group bg-slate-900/40 backdrop-blur-md border border-slate-800/60 rounded-2xl overflow-hidden shadow-xl transition-all duration-300 hover:border-cyan-500/30 hover:-translate-y-2 flex flex-col">
                <div class="relative overflow-hidden aspect-video bg-slate-950 border-b border-slate-800/50">
                    <img src="${project.image}" class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" alt="${project.title}" />
                </div>
                <div class="p-6 flex flex-col flex-grow justify-between">
                    <div>
                        <h3 class="text-xl font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors">${project.title}</h3>
                        <p class="text-sm text-slate-400 leading-relaxed mb-4">${project.description}</p>
                    </div>
                    <div>
                        <div class="flex flex-wrap gap-2 mb-6">${tagsHTML}</div>
                        <div class="flex items-center justify-between border-t border-slate-800/60 pt-4">
                            ${project.liveLink && project.liveLink !== '#' ? `<a href="${project.liveLink}" target="_blank" class="text-sm font-semibold text-cyan-400 flex items-center gap-1.5 hover:underline">Live Demo ↗</a>` : `<span class="text-sm text-slate-500">Demo Soon</span>`}
                            ${project.codeLink && project.codeLink !== '#' ? `<a href="${project.codeLink}" target="_blank" class="text-sm font-medium text-slate-400 flex items-center gap-1.5 hover:text-white transition-colors">Code</a>` : `<span class="text-sm text-slate-500">—</span>`}
                        </div>
                    </div>
                </div>
            </div>`;
        codeContainer.innerHTML += codeCardHtml;

    } else {
        // كارت الجرافيك الجديد: يركز على الصورة بالكامل وبدون وصف
        const designCardHtml = `
            <div class="group bg-slate-900/40 backdrop-blur-md border border-slate-800/60 rounded-2xl overflow-hidden shadow-xl transition-all duration-300 hover:border-cyan-500/50 hover:-translate-y-2 flex flex-col">
                <!-- استخدام aspect-square أو h-80 مع object-contain لإظهار الصورة كاملة بدون قص -->
                <div class="relative overflow-hidden h-80 bg-slate-950/80 p-2 flex items-center justify-center cursor-pointer" onclick="openLightbox('${project.image}')">
                    <img src="${project.image}" class="max-h-full w-auto object-contain transition-transform duration-500 group-hover:scale-105" alt="${project.title}" />
                    
                    <!-- طبقة شفافة تظهر عند الـ Hover تشجع على الضغط لرؤية التصميم مكبّر -->
                    <div class="absolute inset-0 bg-slate-950/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center gap-2 text-white">
                        <span class="text-xs font-semibold text-cyan-400 uppercase tracking-wider">View Full Art</span>
                    </div>
                </div>
                
                <div class="p-4 bg-slate-900/80 flex items-center justify-between border-t border-slate-800/60">
                    <h3 class="text-base font-bold text-white group-hover:text-cyan-400 transition-colors">${project.title}</h3>
                    <div class="flex flex-wrap gap-1">${tagsHTML}</div>
                </div>
            </div>`;
        designContainer.innerHTML += designCardHtml;
    }
});
function openLightbox(imageSrc) {
    const lightbox = document.getElementById('lightbox');
    const lightboxImg = document.getElementById('lightbox-img');
    lightboxImg.src = imageSrc;
    lightbox.classList.remove('hidden');
}

function closeLightbox() {
    document.getElementById('lightbox').classList.add('hidden');
}

