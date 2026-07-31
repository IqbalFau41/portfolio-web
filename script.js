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
    hero_desc: "Verbindung von Betriebstechnik (OT) und Informationstechnik (IT) — industrielle Netzwerke, M2M-Kommunikation und Fabrikdigitalisierung für die Industrie 4.0.",
    location_label: "STANDORT",
    nationality_label: "NATIONALITÄT",
    nationality_val: "Indonesisch",
    profile_title: "PROFIL",
    profile_desc: "Engagierter IoT- und Automatisierungsingenieur mit einer progressiven Erfolgsbilanz vom europäischen Standardmaschinenbetrieb bis hin zur fortschrittlichen industriellen Digitalisierung. Nachgewiesene Expertise bei der Verbindung von OT und IT durch das Design robuster industrieller Netzwerktopologien und die Implementierung von M2M-Kommunikationsprotokollen wie OPC UA, Modbus RTU/TCP und MQTT.",
    stack_title: "HAUPT-STACK",
    exp_title: "BETRIEBSPROTOKOLL",
    exp_header: "Berufserfahrung",
    present: "Heute",
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
  // 1. Ubah semua teks yang memiliki atribut data-i18n
  document.querySelectorAll("[data-i18n]").forEach(element => {
    const key = element.getAttribute("data-i18n");
    if (translations[lang] && translations[lang][key]) {
      
      // Khusus untuk label "Present" yang memiliki animasi titik (pulse-dot)
      if (element.querySelector('.pulse-dot')) {
         element.innerHTML = translations[lang][key] + ' <span class="pulse-dot"></span>';
      } else {
         element.innerHTML = translations[lang][key];
      }
    }
  });

  // 2. Ubah gaya tombol bahasa yang sedang aktif (Bold & Warna Hijau)
  document.querySelectorAll(".lang-switch").forEach(btn => {
    btn.classList.remove("font-bold", "text-signal");
    btn.classList.add("hover:text-signal");
    if (btn.getAttribute("data-lang") === lang) {
      btn.classList.add("font-bold", "text-signal");
      btn.classList.remove("hover:text-signal");
    }
  });
}

// Efek Scroll Reveal
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
