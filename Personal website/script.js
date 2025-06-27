// 脚本控制语言和暗黑模式切换

const langToggleBtn = document.getElementById("lang-toggle");
const themeToggleBtn = document.getElementById("theme-toggle");
const container = document.querySelector('.container');
const downloadBtn = document.getElementById("download-btn");

// 动态生成邮箱，防止被爬虫抓取
const emailUser = "1214719617";
const emailDomain = "qq.com";
const emailLink = `${emailUser}@${emailDomain}`;
const emailSpan = document.getElementById('email');
emailSpan.innerHTML = `<a href="mailto:${emailLink}">${emailLink}</a>`;

// 多语言内容定义
const translations = {
  zh: {
    name: "刘振威",
    bio: "2003年7月出生<br/>江西工业工程职业技术学院22届<br/>软件技术专业",
    contactTitle: "联系方式",
    aboutTitle: "关于我",
    aboutText: "我是一名踏实稳重的软件技术专业学生，热爱编程和技术探索。具备良好的逻辑思维和学习能力，喜欢将技术和创意结合，追求优雅且高效的解决方案。",
    skillsTitle: "专业技能",
    skillsList: [
      "Java、JavaScript、HTML/CSS、C语言、Python",
      "Vue2/Vue3、响应式设计、组件开发",
      "Java Web、Spring Boot（基础）、JSP、Servlet",
      "MySQL数据库、Navicat管理工具",
      "VS Code、IntelliJ IDEA、HBuilderX",
      "Windows操作系统及常用软件使用、Linux基础、Photoshop基础"
    ],
    projectsTitle: "项目经验",
    projectsList: [
      "个人博客系统 - 基于Vue3和Spring Boot，完成用户注册、文章发布、评论功能。",
      "校园信息管理系统 - Java Web开发，包含学生信息及成绩管理模块。"
    ],
    hobbyTitle: "兴趣爱好",
    selfEvalTitle: "自我评价 / 职业目标",
    selfEvalText: "我注重代码质量和团队合作，渴望在软件开发领域不断提升自我，立志成为一名技术全面且具创新力的软件工程师。",
    downloadResume: "下载简历",
    darkMode: "暗黑模式",
    lightMode: "浅色模式",
    english: "English",
    chinese: "中文"
  },
  en: {
    name: "Zhenwei Liu",
    bio: "Born July 2003<br/>Jiangxi Polytechnic Institute, Class of 2022<br/>Software Technology Major",
    contactTitle: "Contact",
    aboutTitle: "About Me",
    aboutText: "I am a diligent and steady software technology student who loves programming and technical exploration. I have good logical thinking and learning ability, and like to combine technology and creativity to pursue elegant and efficient solutions.",
    skillsTitle: "Skills",
    skillsList: [
      "Java, JavaScript, HTML/CSS, C, Python",
      "Vue2/Vue3, Responsive Design, Component Development",
      "Java Web, Spring Boot (basic), JSP, Servlet",
      "MySQL, Navicat",
      "VS Code, IntelliJ IDEA, HBuilderX",
      "Windows OS & common software, Basic Linux, Photoshop"
    ],
    projectsTitle: "Projects",
    projectsList: [
      "Personal Blog System - Built with Vue3 and Spring Boot, featuring user registration, article publishing, and comments.",
      "Campus Information Management System - Java Web development, includes student info and grade management."
    ],
    hobbyTitle: "Hobbies",
    selfEvalTitle: "Self Evaluation / Career Goal",
    selfEvalText: "I focus on code quality and teamwork, aiming to continuously improve myself in software development and become a versatile and innovative software engineer.",
    downloadResume: "Download Resume",
    darkMode: "Dark Mode",
    lightMode: "Light Mode",
    english: "English",
    chinese: "Chinese"
  }
};

let currentLang = 'zh'; // 默认语言为中文

// 切换语言渲染
function renderLanguage(lang) {
  currentLang = lang;
  const t = translations[lang];

  document.getElementById('name').innerHTML = t.name;
  document.getElementById('bio').innerHTML = t.bio;
  document.getElementById('contact-title').textContent = t.contactTitle;
  document.getElementById('about-title').textContent = t.aboutTitle;
  document.getElementById('about-text').textContent = t.aboutText;
  document.getElementById('skills-title').textContent = t.skillsTitle;

  // 渲染技能列表
  const skillsList = document.getElementById('skills-list');
  skillsList.innerHTML = '';
  t.skillsList.forEach(item => {
    const li = document.createElement('li');
    li.textContent = item;
    skillsList.appendChild(li);
  });

  // 渲染项目列表
  document.getElementById('projects-title').textContent = t.projectsTitle;
  const projectsList = document.getElementById('projects-list');
  projectsList.innerHTML = '';
  t.projectsList.forEach(item => {
    const li = document.createElement('li');
    li.textContent = item;
    projectsList.appendChild(li);
  });

  document.getElementById('hobby-title').textContent = t.hobbyTitle;
  document.getElementById('self-eval-title').textContent = t.selfEvalTitle;
  document.getElementById('self-eval-text').textContent = t.selfEvalText;

  // 按钮文字切换
  langToggleBtn.textContent = lang === 'zh' ? t.english : t.chinese;
  downloadBtn.textContent = t.downloadResume;

  // 暗黑按钮文字
  const theme = document.documentElement.getAttribute('data-theme');
  themeToggleBtn.textContent = theme === 'dark' ? t.lightMode : t.darkMode;
}

// 语言按钮点击事件
langToggleBtn.addEventListener('click', () => {
  const nextLang = currentLang === 'zh' ? 'en' : 'zh';
  renderLanguage(nextLang);
  container.setAttribute('lang', nextLang === 'zh' ? 'zh-CN' : 'en');
});

// 设置主题
function setTheme(theme) {
  if (theme === 'dark') {
    document.documentElement.setAttribute('data-theme', 'dark');
    themeToggleBtn.setAttribute('aria-pressed', 'true');
  } else {
    document.documentElement.removeAttribute('data-theme');
    themeToggleBtn.setAttribute('aria-pressed', 'false');
  }
  localStorage.setItem('theme', theme);

  const t = translations[currentLang];
  themeToggleBtn.textContent = theme === 'dark' ? t.lightMode : t.darkMode;
}

// 暗黑模式按钮点击事件
themeToggleBtn.addEventListener('click', () => {
  const currentTheme = document.documentElement.getAttribute('data-theme');
  setTheme(currentTheme === 'dark' ? 'light' : 'dark');
});

// 初始化
window.addEventListener('DOMContentLoaded', () => {
  const savedTheme = localStorage.getItem('theme') || 'light';
  setTheme(savedTheme);
  renderLanguage(currentLang);
});
