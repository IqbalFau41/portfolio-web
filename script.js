const translations = {
  en: {
    download_pdf: "DOWNLOAD PDF",
    hero_title: "IOT & AUTOMATION ENGINEER",
    hero_desc: "Bridging Operational Technology and Information Technology — industrial networking, M2M communication, and factory digitalization for Industry 4.0.",
    location_label: "LOCATION",
    nationality_label: "NATIONALITY",
    nationality_val: "Indonesian",
    profile_title: "PROFILE",
    profile_desc: "Dedicated IoT and Automation Engineer with a progressive track record from European standard machine operation to advanced industrial digitalization. Proven expertise in bridging Operational Technology (OT) and Information Technology (IT) through the design of robust industrial network topologies and the implementation of diverse machine-to-machine (M2M) communication protocols, including OPC UA, Modbus RTU/TCP, and MQTT.",
    stack_title: "PRIMARY STACK",
    exp_title: "OPERATION LOG",
    exp_header: "Work Experience",
    present: "Present",
    job1_desc1: "— Spearheading the implementation of the MAC (Musashi Active Connection) roadmap to drive factory digitalization and IoT integration toward 2030 Industry 4.0 goals.",
    edu_title: "EDUCATION",
    edu_header: "Bachelor of Applied Science (D4), Automation Engineering",
    cert_title: "CERTIFICATIONS & ACHIEVEMENTS",
    cert_header: "Credentials",
    skill_title: "CAPABILITIES",
    skill_header: "Technical Skills & Languages",
    software: "SOFTWARE & PROTOCOLS",
    languages: "LANGUAGES"
  },
  id: {
    download_pdf: "UNDUH PDF",
    hero_title: "INSINYUR IOT & OTOMASI",
    hero_desc: "Menjembatani Teknologi Operasional (OT) dan Teknologi Informasi (IT) — jaringan industri, komunikasi M2M, dan digitalisasi pabrik untuk Industri 4.0.",
    location_label: "LOKASI",
    nationality_label: "KEWARGANEGARAAN",
    nationality_val: "Indonesia",
    profile_title: "PROFIL",
    profile_desc: "Insinyur IoT dan Otomasi yang berdedikasi dengan rekam jejak progresif dari pengoperasian mesin standar Eropa hingga digitalisasi industri tingkat lanjut. Memiliki keahlian yang terbukti dalam menjembatani Teknologi Operasional (OT) dan Teknologi Informasi (IT) melalui perancangan topologi jaringan industri yang tangguh dan implementasi berbagai protokol komunikasi M2M, termasuk OPC UA, Modbus RTU/TCP, dan MQTT.",
    stack_title: "TEKNOLOGI UTAMA",
    exp_title: "CATATAN OPERASIONAL",
    exp_header: "Pengalaman Kerja",
    present: "Sekarang",
    job1_desc1: "— Memimpin implementasi roadmap MAC (Musashi Active Connection) untuk mendorong digitalisasi pabrik dan integrasi IoT menuju target Industri 4.0 di tahun 2030.",
    edu_title: "PENDIDIKAN",
    edu_header: "Sarjana Terapan (D4), Teknik Otomasi",
    cert_title: "SERTIFIKASI & PENGHARGAAN",
    cert_header: "Kredensial",
    skill_title: "KEMAMPUAN",
    skill_header: "Keahlian Teknis & Bahasa",
    software: "PERANGKAT LUNAK & PROTOKOL",
    languages: "BAHASA"
  },
  de: {
    download_pdf: "PDF HERUNTERLADEN",
    hero_title: "IOT- UND AUTOMATISIERUNGSINGENIEUR",
    hero_desc: "Verbindung von Betriebstechnik (OT) und Informationstechnik (IT) — industrielle Netzwerke, M2M-Kommunikation und Fabrikdigitalisierung für Industrie 4.0.",
    location_label: "STANDORT",
    nationality_label: "NATIONALITÄT",
    nationality_val: "Indonesisch",
    profile_title: "PROFIL",
    profile_desc: "Engagierter IoT- und Automatisierungsingenieur mit einer progressiven Erfolgsbilanz vom europäischen Standardmaschinenbetrieb bis hin zur fortschrittlichen industriellen Digitalisierung. Nachgewiesene Expertise bei der Verbindung von OT und IT durch das Design robuster industrieller Netzwerktopologien und die Implementierung von M2M-Kommunikationsprotokollen.",
    stack_title: "HAUPT-STACK",
    exp_title: "BETRIEBSPROTOKOLL",
    exp_header: "Berufserfahrung",
    present: "Heute",
    job1_desc1: "— Leitung der Implementierung der MAC-Roadmap (Musashi Active Connection), um die Fabrikdigitalisierung und IoT-Integration in Richtung der Industrie 4.0-Ziele für 2030 voranzutreiben.",
    edu_title: "AUSBILDUNG",
    edu_header: "Bachelor of Applied Science (D4), Automatisierungstechnik",
    cert_title: "ZERTIFIZIERUNGEN & ERFOLGE",
    cert_header: "Qualifikationen",
    skill_title: "FÄHIGKEITEN",
    skill_header: "Technische Fähigkeiten & Sprachen",
    software: "SOFTWARE & PROTOKOLLE",
    languages: "SPRACHEN"
  }
};

function changeLanguage(lang) {
  // Update translation texts
  document.querySelectorAll("[data-i18n]").forEach(element => {
    const key = element.getAttribute("data-i18n");
    if (translations[lang] && translations[lang][key]) {
      // Avoid replacing inner HTML elements like the pulsing dot for 'Present'
      if (element.children.length > 0 && element.querySelector('.pulse-dot')) {
         element.childNodes[0].nodeValue = translations[lang][key] + " ";
      } else {
         element.textContent = translations[lang][key];
      }
    }
  });

  // Update active state on language switcher links
  document.querySelectorAll(".lang-switch").forEach(link => {
    link.classList.remove("font-bold", "text-signal");
    link.classList.add("hover:text-signal");
    if (link.getAttribute("data-lang") === lang) {
      link.classList.add("font-bold", "text-signal");
      link.classList.remove("hover:text-signal");
    }
  });
}

// Scroll reveal logic
document.addEventListener("DOMContentLoaded", () => {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('in');
      }
    });
  }, { threshold: 0.1 });
  
  document.querySelectorAll('.reveal').forEach((el) => {
    observer.observe(el);
  });
});
