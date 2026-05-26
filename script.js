// انيميشن الكلمه اللي بتتمسح
const typed = new Typed('#changing-text', {
  strings: ['Front-End Developer','Computer Science Student'], // الكلمات اللي هتتبدل
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
       {
    title: "Menu L'Étoile",
    description: "A sophisticated fine-dining restaurant website featuring an interactive filterable menu, seamless reservation booking, and a smooth, responsive dark-themed UI.",
    image: "Photo/Menu L'Étoile.png",
    tags: ["HTML5", "Tailwind CSS", "JavaScript", "AOS.js"],
    liveLink: "https://ziad0025.github.io/Menu-L-toile/",
    codeLink: "https://github.com/ziad0025/Menu-L-toile.git"
    },
     {
        title: "Developer Portfolio",
        description: "My personal space on the web. A fully responsive portfolio using a premium dark concept and sleek glow utilities.",
        image: "Photo/portfolio image.png",
        tags: ["HTML5", "Tailwind CSS", "JavaScript", "AOS.js"],
        liveLink: "https://ziad0025.github.io/Ziad-Portfolio/",
        codeLink: "https://github.com/ziad0025/Ziad-Portfolio.git"
    },
    {
        title: "Leon Creative Agency",
        description: "A modern and clean creative agency template focusing on elegant layouts and pixel-perfect semantic HTML structure.",
        image: "Photo/image loan .png ", // مسار صورتك الحقيقية
        tags: ["HTML5", "CSS3", "Grid & Flexbox"],
        liveLink: "https://ziad0025.github.io/Leon-template/",
        codeLink: "https://github.com/ziad0025/Leon-template.git"
    },
    {
        title: " X Watch Land page",
        description: "A high-end product landing page designed to showcase luxury watches with hover effects.",
        image: "Photo/x-watch image .png",
        tags: ["HTML5", "CSS" ],
        liveLink: "https://ziad0025.github.io/X-watch-landing-page/",
        codeLink: "https://github.com/ziad0025/X-watch-landing-page.git"
    }

];
const container = document.querySelector("#projects-container") ;
projects.forEach(project=>{
  const tagsHTML= project.tags.map(tag=> 
    `<span class="text-[11px] font-mono font-semibold bg-slate-950 px-2.5 py-1 rounded-full text-cyan-400 border border-cyan-500/10">${tag}</span>`).join(' ');
  const cardHtml = `<div class="group bg-slate-900/40 backdrop-blur-md border border-slate-800/60 rounded-2xl overflow-hidden shadow-xl transition-all duration-300 hover:border-cyan-500/30 hover:-translate-y-2 flex flex-col">
            <div class="relative overflow-hidden aspect-video bg-slate-950 border-b border-slate-800/50">
                <img src="${project.image}" class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" alt="${project.title}" />
            </div>
            
            <div class="p-6 flex flex-col flex-grow justify-between">
                <div>
                    <h3 class="text-xl font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors">${project.title}</h3>
                    <p class="text-sm text-slate-400 leading-relaxed mb-4">${project.description}</p>
                </div>
                <div>
                    <div class="flex flex-wrap gap-2 mb-6">
                        ${tagsHTML}
                    </div>
                    <div class="flex items-center justify-between border-t border-slate-800/60 pt-4">
                        <a href="${project.liveLink}" target="_blank" class="text-sm font-semibold text-cyan-400 flex items-center gap-1.5 hover:underline">Live Demo ↗</a>
                        <a href="${project.codeLink}" target="_blank" class="text-sm font-medium text-slate-400 flex items-center gap-1.5 hover:text-white transition-colors">Code</a>
                    </div>
                </div>
            </div>
        </div>`;
        container.innerHTML += cardHtml ; 
})
