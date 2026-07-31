/* =========================================================
   IQBAL FAUZAN — PORTFOLIO SCRIPT
   Sections: UI DICTIONARY, CONTENT DATA, I18N ENGINE,
   RENDER FUNCTIONS, SCROLL REVEAL, NAV, INIT
   Language priority: 1. English  2. Deutsch  3. Indonesia
   ========================================================= */

/* ---------------------------------------------------------
   1. UI DICTIONARY (static interface strings)
--------------------------------------------------------- */
const UI = {
  en: {
    nav: { home: "Home", about: "About", skills: "Skills", experience: "Experience", projects: "Projects", contact: "Contact", cv: "CV" },
    hero: {
      eyebrow: "IOT & AUTOMATION ENGINEER",
      tagline: "Bridging OT & IT for Industry 4.0",
      status: "Open to new opportunities",
      ctaProjects: "View Projects",
      ctaCV: "Download CV",
    },
    about: { label: "REC.01 — ABOUT", heading: "About me", stackLabel: "Primary stack" },
    skills: { label: "REC.02 — SKILLS", heading: "Technical skills" },
    experience: {
      label: "REC.03 — EXPERIENCE",
      heading: "Work history",
      current: "Present",
      stackLabel: "Tech stack",
    },
    projects: {
      label: "REC.04 — PROJECTS",
      heading: "Featured projects",
      headingAll: "All projects",
      subheadingAll: "Full documentation of industrial IoT & automation projects I've worked on.",
      viewAll: "View all projects →",
      viewDetail: "View detail →",
      backToProjects: "← All projects",
      nextProject: "Next project →",
      role: "Role",
      company: "Company",
      period: "Period",
      description: "Description",
      responsibilities: "Responsibilities & technical tasks",
      technologies: "Technologies",
    },
    education: { label: "REC.05 — EDUCATION", heading: "Education" },
    certifications: { label: "REC.06 — CERTIFICATIONS", heading: "Certifications & achievements" },
    languages: { label: "REC.07 — LANGUAGES", heading: "Languages" },
    contact: {
      label: "REC.08 — CONTACT",
      heading: "Let's connect",
      body: "Open to discussing IoT, industrial automation, or other collaboration opportunities.",
      emailCta: "Send an email",
    },
    cv: {
      hint: "Use your browser's print function (Ctrl/Cmd + P) to save this as a PDF.",
      print: "Print / save PDF",
    },
    footer: {
      drawnBy: "DRAWN BY",
      date: "DATE",
      rev: "REV",
      rights: "All rights reserved.",
    },
  },
  de: {
    nav: { home: "Startseite", about: "Über mich", skills: "Fähigkeiten", experience: "Erfahrung", projects: "Projekte", contact: "Kontakt", cv: "Lebenslauf" },
    hero: {
      eyebrow: "IOT & AUTOMATION ENGINEER",
      tagline: "OT & IT für Industrie 4.0 verbinden",
      status: "Offen für neue Möglichkeiten",
      ctaProjects: "Projekte ansehen",
      ctaCV: "Lebenslauf herunterladen",
    },
    about: { label: "REC.01 — ÜBER MICH", heading: "Über mich", stackLabel: "Kerntechnologien" },
    skills: { label: "REC.02 — FÄHIGKEITEN", heading: "Technische Fähigkeiten" },
    experience: {
      label: "REC.03 — ERFAHRUNG",
      heading: "Berufserfahrung",
      current: "Aktuell",
      stackLabel: "Technologien",
    },
    projects: {
      label: "REC.04 — PROJEKTE",
      heading: "Ausgewählte Projekte",
      headingAll: "Alle Projekte",
      subheadingAll: "Vollständige Dokumentation der industriellen IoT- und Automatisierungsprojekte, an denen ich gearbeitet habe.",
      viewAll: "Alle Projekte ansehen →",
      viewDetail: "Details ansehen →",
      backToProjects: "← Alle Projekte",
      nextProject: "Nächstes Projekt →",
      role: "Rolle",
      company: "Unternehmen",
      period: "Zeitraum",
      description: "Beschreibung",
      responsibilities: "Verantwortlichkeiten & technische Aufgaben",
      technologies: "Technologien",
    },
    education: { label: "REC.05 — AUSBILDUNG", heading: "Ausbildung" },
    certifications: { label: "REC.06 — ZERTIFIZIERUNGEN", heading: "Zertifizierungen & Erfolge" },
    languages: { label: "REC.07 — SPRACHEN", heading: "Sprachen" },
    contact: {
      label: "REC.08 — KONTAKT",
      heading: "Lass uns in Kontakt treten",
      body: "Offen für Gespräche über IoT, industrielle Automatisierung oder andere Kooperationsmöglichkeiten.",
      emailCta: "E-Mail senden",
    },
    cv: {
      hint: "Nutzen Sie die Druckfunktion Ihres Browsers (Strg/Cmd + P), um dies als PDF zu speichern.",
      print: "Drucken / als PDF speichern",
    },
    footer: {
      drawnBy: "ERSTELLT VON",
      date: "DATUM",
      rev: "REV",
      rights: "Alle Rechte vorbehalten.",
    },
  },
  id: {
    nav: { home: "Home", about: "Tentang", skills: "Keahlian", experience: "Pengalaman", projects: "Project", contact: "Kontak", cv: "CV" },
    hero: {
      eyebrow: "IOT & AUTOMATION ENGINEER",
      tagline: "Menjembatani OT & IT untuk Industry 4.0",
      status: "Terbuka untuk peluang baru",
      ctaProjects: "Lihat Project",
      ctaCV: "Unduh CV",
    },
    about: { label: "REC.01 — TENTANG", heading: "Tentang saya", stackLabel: "Primary stack" },
    skills: { label: "REC.02 — KEAHLIAN", heading: "Keahlian teknis" },
    experience: {
      label: "REC.03 — PENGALAMAN",
      heading: "Riwayat pekerjaan",
      current: "Saat ini",
      stackLabel: "Tech stack",
    },
    projects: {
      label: "REC.04 — PROJECT",
      heading: "Project unggulan",
      headingAll: "Semua project",
      subheadingAll: "Dokumentasi lengkap project industrial IoT & automation yang pernah saya kerjakan.",
      viewAll: "Lihat semua project →",
      viewDetail: "Lihat detail →",
      backToProjects: "← Semua project",
      nextProject: "Project berikutnya →",
      role: "Role",
      company: "Perusahaan",
      period: "Periode",
      description: "Deskripsi",
      responsibilities: "Tanggung jawab & tugas teknis",
      technologies: "Teknologi",
    },
    education: { label: "REC.05 — EDUKASI", heading: "Pendidikan" },
    certifications: { label: "REC.06 — SERTIFIKASI", heading: "Sertifikasi & prestasi" },
    languages: { label: "REC.07 — BAHASA", heading: "Bahasa" },
    contact: {
      label: "REC.08 — KONTAK",
      heading: "Mari terhubung",
      body: "Terbuka untuk diskusi seputar IoT, industrial automation, atau peluang kolaborasi lainnya.",
      emailCta: "Kirim email",
    },
    cv: {
      hint: "Gunakan tombol cetak di browser (Ctrl/Cmd + P) untuk menyimpan sebagai PDF.",
      print: "Cetak / simpan PDF",
    },
    footer: {
      drawnBy: "DRAWN BY",
      date: "DATE",
      rev: "REV",
      rights: "Seluruh hak dilindungi.",
    },
  },
};

/* ---------------------------------------------------------
   2. CONTENT DATA
--------------------------------------------------------- */
const PROFILE = {
  name: "Iqbal Fauzan",
  location: "Bekasi, Indonesia",
  phone: "+62 812 2022 7189",
  email: "iqbaalfau@gmail.com",
  github: "github.com/IqbalFau41",
  githubUrl: "https://github.com/IqbalFau41",
  linkedin: "linkedin.com/in/iqbaalfauzan",
  linkedinUrl: "https://linkedin.com/in/iqbaalfauzan",
  website: "iqbalfauzan.my.id",
  dob: "04 January 2000",
  about: {
    en: "Dedicated IoT and Automation Engineer with a progressive track record from European standard machine operation to advanced industrial digitalization. Proven expertise in bridging Operational Technology (OT) and Information Technology (IT) through the design of robust industrial network topologies and the implementation of diverse machine-to-machine (M2M) communication protocols, including OPC UA, Modbus RTU/TCP, and MQTT. Passionate about leveraging automation, seamless data acquisition, and smart networking to drive Industry 4.0 initiatives and optimize manufacturing efficiency.",
    de: "Engagierter IoT- und Automatisierungsingenieur mit einer stetig wachsenden Erfolgsbilanz – vom Betrieb europäischer Standardmaschinen bis hin zu fortschrittlicher industrieller Digitalisierung. Nachgewiesene Expertise in der Verbindung von Operational Technology (OT) und Information Technology (IT) durch die Gestaltung robuster industrieller Netzwerktopologien und die Implementierung vielfältiger Machine-to-Machine (M2M)-Kommunikationsprotokolle, darunter OPC UA, Modbus RTU/TCP und MQTT. Mit Leidenschaft für Automatisierung, nahtlose Datenerfassung und intelligente Vernetzung treibe ich Industrie-4.0-Initiativen voran und optimiere die Fertigungseffizienz.",
    id: "Dedicated IoT and Automation Engineer dengan track record yang berkembang — mulai dari mengoperasikan mesin berstandar Eropa hingga memimpin proyek digitalisasi industri tingkat lanjut. Memiliki keahlian dalam menjembatani Operational Technology (OT) dan Information Technology (IT) melalui perancangan topologi jaringan industri yang solid dan implementasi berbagai protokol komunikasi machine-to-machine (M2M), termasuk OPC UA, Modbus RTU/TCP, dan MQTT. Passionate dalam memanfaatkan automation, data acquisition yang seamless, dan smart networking untuk mendorong inisiatif Industry 4.0 serta mengoptimalkan efisiensi manufaktur.",
  },
  primaryStack: ["OPC UA", "Node-RED", "Modbus RTU/TCP", "MQTT", "Siemens TIA Portal", "Moxa", "C/C++", "Python", "PLC Programming"],
};

const SKILLS = [
  { label: { en: "Automation & Hardware", de: "Automatisierung & Hardware", id: "Automation & Hardware" }, items: ["PLC Programming (Siemens, Mitsubishi, Keyence)", "Raspberry Pi"] },
  { label: { en: "IoT & Software", de: "IoT & Software", id: "IoT & Software" }, items: ["C/C++", "Python", "JavaScript", "Node.js"] },
  { label: { en: "Databases & Cloud", de: "Datenbanken & Cloud", id: "Database & Cloud" }, items: ["MySQL", "MongoDB", "Firebase"] },
  { label: { en: "Engineering & Design Tools", de: "Engineering- & Design-Tools", id: "Tools Rekayasa & Desain" }, items: ["SolidWorks (CAD)", "Proteus", "VS Code"] },
  { label: { en: "Additional Development", de: "Weitere Entwicklung", id: "Pengembangan Tambahan" }, items: ["Flutter", "Dart", "Android Studio"] },
  { label: { en: "Industrial Protocols & Networking", de: "Industrielle Protokolle & Netzwerktechnik", id: "Protokol & Jaringan Industrial" }, items: ["OPC UA", "Modbus RTU/TCP", "MQTT", "Moxa Turbo Roaming"] },
];

const EXPERIENCE = [
  {
    id: "musashi-iot",
    period: "01/2025 — Present",
    company: "PT. Musashi Auto Parts Indonesia",
    location: "Bekasi, Indonesia",
    current: true,
    role: { en: "IoT Engineer", de: "IoT-Ingenieur", id: "IoT Engineer" },
    stack: ["Node-RED", "Modbus RTU/TCP", "Siemens TIA Portal", "Moxa AWK Series", "Keyence", "Mitsubishi PLC"],
    bullets: {
      en: [
        "Spearheading implementation of the MAC (Musashi Active Connection) roadmap to drive factory digitalization toward 2030 Industry 4.0 goals.",
        "Designing and configuring wireless industrial network topologies for Automated Guided Vehicles (AGV) using Moxa industrial routers with Turbo Roaming features.",
        "Developing robust data acquisition systems using Node-RED and Modbus protocols to monitor real-time metrics from PM5500 power meters.",
        "Integrating diverse industrial hardware (Keyence recorders, KV-8000 PLCs) and troubleshooting communications via Siemens TIA Portal.",
      ],
      de: [
        "Leitet die Umsetzung der MAC-Roadmap (Musashi Active Connection) zur Digitalisierung des Werks im Hinblick auf die Industrie-4.0-Ziele bis 2030.",
        "Entwirft und konfiguriert drahtlose industrielle Netzwerktopologien für fahrerlose Transportsysteme (AGV) mithilfe von Moxa-Industrieroutern mit Turbo-Roaming-Funktion.",
        "Entwickelt robuste Datenerfassungssysteme mit Node-RED und Modbus-Protokollen zur Echtzeitüberwachung von PM5500-Energiemessgeräten.",
        "Integriert unterschiedliche Industriehardware (Keyence-Recorder, KV-8000-SPS) und behebt Kommunikationsprobleme über Siemens TIA Portal.",
      ],
      id: [
        "Memimpin implementasi roadmap MAC (Musashi Active Connection) untuk digitalisasi pabrik menuju target Industry 4.0 tahun 2030.",
        "Merancang dan mengonfigurasi topologi jaringan wireless industrial untuk Automated Guided Vehicles (AGV) menggunakan Moxa router dengan fitur Turbo Roaming.",
        "Mengembangkan sistem data acquisition menggunakan Node-RED dan protokol Modbus untuk memonitor metrik real-time dari power meter PM5500.",
        "Mengintegrasikan hardware industrial (Keyence recorder, PLC KV-8000) dan troubleshooting komunikasi via Siemens TIA Portal.",
      ],
    },
  },
  {
    id: "iulb-it",
    period: "06/2024 — 12/2024",
    company: "International University of Logistics and Business",
    location: "Bandung, Indonesia",
    current: false,
    role: { en: "Information Technology Engineer", de: "IT-Ingenieur", id: "Information Technology Engineer" },
    stack: ["IT Infrastructure", "LAN/WAN Configuration", "Server Maintenance", "Database Administration"],
    bullets: {
      en: [
        "Managed and optimized IT infrastructure, including local network configurations and server maintenance.",
        "Maintained and integrated database systems to support daily academic and operational applications.",
        "Provided comprehensive technical support, troubleshooting hardware, software, and network connectivity issues.",
        "Contributed to the digitization of administrative workflows across the institution.",
      ],
      de: [
        "Verwaltete und optimierte die IT-Infrastruktur, einschließlich lokaler Netzwerkkonfigurationen und Serverwartung.",
        "Pflegte und integrierte Datenbanksysteme zur Unterstützung täglicher akademischer und betrieblicher Anwendungen.",
        "Bot umfassenden technischen Support und behob Hardware-, Software- und Netzwerkprobleme.",
        "Trug zur Digitalisierung administrativer Arbeitsabläufe der Institution bei.",
      ],
      id: [
        "Mengelola dan mengoptimalkan infrastruktur IT, termasuk konfigurasi jaringan lokal dan maintenance server.",
        "Memelihara dan mengintegrasikan sistem database untuk mendukung aplikasi akademik dan operasional harian.",
        "Memberikan technical support menyeluruh: troubleshooting hardware, software, dan konektivitas jaringan.",
        "Berkontribusi pada digitalisasi alur kerja administratif institusi.",
      ],
    },
  },
  {
    id: "samudra-iot",
    period: "12/2023 — 05/2024",
    company: "PT. Samudra Teknologi Pertiwi",
    location: "Bandung, Indonesia",
    current: false,
    role: { en: "IoT & Automation Engineer", de: "IoT- & Automatisierungsingenieur", id: "IoT & Automation Engineer" },
    stack: ["Arduino", "Raspberry Pi", "PLC Programming", "Android/iOS Development", "IT/OT Integration"],
    bullets: {
      en: [
        "Bridged OT and IT by conceptualizing and developing embedded systems using Arduino and Raspberry Pi.",
        "Digitized legacy industrial systems into modern monitoring platforms (mobile apps & web dashboards).",
        "Managed, programmed, and troubleshot PLC automation systems to optimize machine logic.",
        "Executed end-to-end electrical installations for client projects.",
      ],
      de: [
        "Verband OT und IT durch die Konzeption und Entwicklung eingebetteter Systeme mit Arduino und Raspberry Pi.",
        "Digitalisierte veraltete Industriesysteme zu modernen Überwachungsplattformen (mobile Apps & Web-Dashboards).",
        "Verwaltete, programmierte und behob Fehler in SPS-Automatisierungssystemen zur Optimierung der Maschinenlogik.",
        "Führte durchgängige elektrische Installationen für Kundenprojekte durch.",
      ],
      id: [
        "Menjembatani OT dan IT dengan mengembangkan embedded system menggunakan Arduino dan Raspberry Pi.",
        "Mendigitalisasi sistem industri legacy menjadi platform monitoring modern (mobile app & web dashboard).",
        "Mengelola dan troubleshooting sistem automation PLC untuk optimasi logika mesin.",
        "Mengeksekusi instalasi kelistrikan end-to-end untuk proyek klien.",
      ],
    },
  },
  {
    id: "continental-operator",
    period: "12/2022 — 11/2023",
    company: "Continental Kft.",
    location: "Mako, Hungary",
    current: false,
    role: { en: "Autoclave Machine Operator", de: "Autoklaven-Maschinenbediener", id: "Autoclave Machine Operator" },
    stack: ["European Manufacturing Standards", "Quality Control", "Predictive Monitoring", "HSE Protocols"],
    bullets: {
      en: [
        "Operated complex autoclave production machinery within a high-standard European automotive environment.",
        "Monitored machine conditions and production parameters per European quality and safety standards.",
        "Optimized material usage to reduce manufacturing errors and waste.",
        "Maintained rigorous health, safety, and cleanliness (HSE) protocols in the production area.",
      ],
      de: [
        "Bediente komplexe Autoklaven-Produktionsmaschinen in einem europäischen Automobilumfeld mit hohen Standards.",
        "Überwachte Maschinenzustände und Produktionsparameter gemäß europäischen Qualitäts- und Sicherheitsstandards.",
        "Optimierte den Materialeinsatz zur Reduzierung von Fertigungsfehlern und Ausschuss.",
        "Hielt strenge HSE-Protokolle (Gesundheit, Sicherheit, Sauberkeit) im Produktionsbereich ein.",
      ],
      id: [
        "Mengoperasikan mesin produksi autoclave dalam lingkungan manufaktur otomotif Eropa berstandar tinggi.",
        "Memonitor kondisi mesin dan parameter produksi sesuai standar kualitas dan keselamatan Eropa.",
        "Mengoptimalkan penggunaan material untuk mengurangi error dan waste produksi.",
        "Menjaga protokol HSE yang ketat di area produksi.",
      ],
    },
  },
  {
    id: "mekar-maintenance",
    period: "02/2021 — 09/2021",
    company: "PT. Mekar Armada Jaya",
    location: "Bekasi, Indonesia",
    current: false,
    role: { en: "Maintenance Engineering Intern", de: "Praktikant Instandhaltungstechnik", id: "Maintenance Engineering Intern" },
    stack: ["Preventive Maintenance", "Heavy Industrial Machinery", "Digital Documentation"],
    bullets: {
      en: [
        "Performed predictive and preventive maintenance on stamping machines, welding units, and conveyors.",
        "Initiated the digitization of maintenance manuals, streamlining troubleshooting and repair processes.",
        "Contributed to machine installation processes with internal teams and external vendors.",
        "Conducted routine performance monitoring to increase exhaust channel efficiency.",
      ],
      de: [
        "Führte vorausschauende und vorbeugende Wartung an Stanzmaschinen, Schweißanlagen und Förderbändern durch.",
        "Initiierte die Digitalisierung von Wartungshandbüchern zur Vereinfachung von Fehlerbehebung und Reparaturprozessen.",
        "Wirkte bei Maschineninstallationen mit internen Teams und externen Anbietern mit.",
        "Führte routinemäßige Leistungsüberwachung durch, um die Effizienz der Abluftkanäle zu steigern.",
      ],
      id: [
        "Melakukan predictive & preventive maintenance pada mesin stamping, welding, dan conveyor.",
        "Menginisiasi digitalisasi buku manual maintenance untuk mempercepat troubleshooting.",
        "Berkontribusi pada instalasi mesin bersama tim internal dan vendor eksternal.",
        "Melakukan monitoring performa rutin untuk meningkatkan efisiensi exhaust channel.",
      ],
    },
  },
];

const PROJECTS = [
  {
    id: "hatebur-opcua",
    code: "PRJ-01",
    period: "02/2026 — Present",
    company: "PT Musashi Auto Parts Indonesia",
    role: { en: "IoT Engineer (Lead Integrator)", de: "IoT-Ingenieur (Lead Integrator)", id: "IoT Engineer (Lead Integrator)" },
    title: {
      en: "OPC UA-Based Real-Time Monitoring System for Hatebur Forging Machines",
      de: "OPC-UA-basiertes Echtzeit-Überwachungssystem für Hatebur-Schmiedemaschinen",
      id: "Sistem Monitoring Real-Time Berbasis OPC UA untuk Mesin Forging Hatebur",
    },
    summary: {
      en: "High-speed machine-to-dashboard data pipeline using OPC UA for real-time visibility of forging machine OEE.",
      de: "Hochgeschwindigkeits-Datenpipeline von Maschine zu Dashboard mittels OPC UA für Echtzeit-Transparenz der OEE von Schmiedemaschinen.",
      id: "Data pipeline machine-to-dashboard berkecepatan tinggi menggunakan protokol OPC UA untuk visibilitas real-time OEE mesin forging.",
    },
    description: {
      en: "Development and deployment of a high-speed, standardized machine-to-dashboard data pipeline for Hatebur forging machines using the OPC UA protocol. The system enables secure and interoperable data exchange between production equipment and IT systems while providing real-time visibility of key production metrics and Overall Equipment Effectiveness (OEE).",
      de: "Entwicklung und Implementierung einer schnellen, standardisierten Datenpipeline von der Maschine zum Dashboard für Hatebur-Schmiedemaschinen mittels des OPC-UA-Protokolls. Das System ermöglicht einen sicheren und interoperablen Datenaustausch zwischen Produktionsanlagen und IT-Systemen und bietet gleichzeitig Echtzeit-Transparenz über zentrale Produktionskennzahlen und die Gesamtanlageneffektivität (OEE).",
      id: "Pengembangan dan deployment data pipeline machine-to-dashboard berkecepatan tinggi dan terstandarisasi untuk mesin forging Hatebur menggunakan protokol OPC UA. Sistem ini memungkinkan pertukaran data yang aman dan interoperable antara peralatan produksi dan sistem IT, sekaligus memberikan visibilitas real-time terhadap metrik produksi utama dan Overall Equipment Effectiveness (OEE).",
    },
    responsibilities: {
      en: [
        "Programmed and configured a Siemens S7-1200 PLC via TIA Portal, deployed as an OPC UA Server to expose machine telemetry (cycle time, production counts, fault status).",
        "Engineered the network bridging layer by integrating USR IoT gateways to transmit PLC data into the factory's IT network.",
        "Developed Node-RED middleware configured as an OPC UA client to subscribe to and process structured data tags.",
        "Designed the end-to-end data pipeline, routing machine telemetry into an MSSQL database.",
        "Built interactive Power BI dashboards to visualize real-time production performance.",
      ],
      de: [
        "Programmierte und konfigurierte eine Siemens-S7-1200-SPS über TIA Portal, eingesetzt als OPC-UA-Server zur Bereitstellung von Maschinentelemetrie (Taktzeit, Produktionszahlen, Fehlerstatus).",
        "Entwickelte die Netzwerk-Bridging-Ebene durch Integration von USR-IoT-Gateways zur Übertragung von SPS-Daten in das IT-Netzwerk des Werks.",
        "Entwickelte Node-RED-Middleware, konfiguriert als OPC-UA-Client, zum Abonnieren und Verarbeiten strukturierter Datentags.",
        "Konzipierte die durchgängige Datenpipeline zur Weiterleitung der Maschinentelemetrie in eine MSSQL-Datenbank.",
        "Erstellte interaktive Power-BI-Dashboards zur Visualisierung der Produktionsleistung in Echtzeit.",
      ],
      id: [
        "Memprogram dan mengonfigurasi Siemens S7-1200 PLC via TIA Portal, di-deploy sebagai OPC UA Server untuk mengekspos telemetri mesin (cycle time, production count, fault status).",
        "Merancang network bridging layer dengan mengintegrasikan USR IoT gateway untuk mentransmisikan data PLC ke jaringan IT pabrik.",
        "Mengembangkan middleware Node-RED sebagai OPC UA client untuk subscribe & memproses data tag dari PLC.",
        "Merancang end-to-end data pipeline, mengalirkan telemetri mesin ke database MSSQL.",
        "Membangun dashboard interaktif Power BI untuk visualisasi performa produksi real-time.",
      ],
    },
    tech: ["Siemens S7-1200", "TIA Portal", "OPC UA", "Hatebur Forging Press", "USR IoT Gateway", "Node-RED", "MSSQL", "Power BI"],
  },
  {
    id: "heat-treatment-monitoring",
    code: "PRJ-02",
    period: "08/2025 — 01/2026",
    company: "PT Musashi Auto Parts Indonesia",
    role: { en: "IoT Engineer (Lead Integrator)", de: "IoT-Ingenieur (Lead Integrator)", id: "IoT Engineer (Lead Integrator)" },
    title: {
      en: "Real-Time Monitoring System for Heat Treatment Machines",
      de: "Echtzeit-Überwachungssystem für Wärmebehandlungsmaschinen",
      id: "Sistem Monitoring Real-Time untuk Mesin Heat Treatment",
    },
    summary: {
      en: "Continuous data acquisition and centralized monitoring system for heat treatment process stability.",
      de: "Kontinuierliche Datenerfassung und zentrales Überwachungssystem für die Prozessstabilität der Wärmebehandlung.",
      id: "Sistem akuisisi data berkelanjutan dan monitoring terpusat untuk stabilitas proses heat treatment.",
    },
    description: {
      en: "Development and implementation of a real-time monitoring system for heat treatment machines within the factory network. The system enables continuous data acquisition, centralized monitoring, and historical data storage to improve process stability and operational transparency.",
      de: "Entwicklung und Implementierung eines Echtzeit-Überwachungssystems für Wärmebehandlungsmaschinen innerhalb des Werksnetzwerks. Das System ermöglicht kontinuierliche Datenerfassung, zentrale Überwachung und historische Datenspeicherung zur Verbesserung der Prozessstabilität und betrieblichen Transparenz.",
      id: "Pengembangan dan implementasi sistem monitoring real-time untuk mesin heat treatment dalam jaringan pabrik. Sistem ini memungkinkan akuisisi data berkelanjutan, monitoring terpusat, dan penyimpanan data historis untuk meningkatkan stabilitas proses dan transparansi operasional.",
    },
    responsibilities: {
      en: [
        "Designed the edge-to-IT data pipeline, integrating Mitsubishi Q02HCPU PLCs and Keyence TR-W1000 recorders via USR-EG628-GL & USR-W660.",
        "Configured Moxa AWK-3252A wireless infrastructure for reliable data transmission in a high-interference environment.",
        "Programmed a Keyence KV-8000 PLC as a centralized polling station across multiple heat treatment units.",
        "Developed Node-RED middleware to parse, process, and route machine data into an MSSQL database.",
        "Created Power BI dashboards for real-time temperature trend and machine status visualization.",
      ],
      de: [
        "Entwarf die Edge-to-IT-Datenpipeline und integrierte Mitsubishi-Q02HCPU-SPS sowie Keyence-TR-W1000-Recorder über USR-EG628-GL & USR-W660.",
        "Konfigurierte die drahtlose Moxa-AWK-3252A-Infrastruktur für eine zuverlässige Datenübertragung in einer störungsintensiven Umgebung.",
        "Programmierte eine Keyence-KV-8000-SPS als zentrale Abfragestation für mehrere Wärmebehandlungsanlagen.",
        "Entwickelte Node-RED-Middleware zum Parsen, Verarbeiten und Weiterleiten von Maschinendaten in eine MSSQL-Datenbank.",
        "Erstellte Power-BI-Dashboards zur Visualisierung von Temperaturtrends und Maschinenstatus in Echtzeit.",
      ],
      id: [
        "Merancang data pipeline edge-to-IT, mengintegrasikan PLC Mitsubishi Q02HCPU dan recorder Keyence TR-W1000 via gateway USR-EG628-GL & USR-W660.",
        "Mengonfigurasi infrastruktur wireless industrial Moxa AWK-3252A untuk transmisi data yang reliable di lingkungan interferensi tinggi.",
        "Memprogram PLC Keyence KV-8000 sebagai polling station terpusat untuk multi unit heat treatment.",
        "Mengembangkan middleware Node-RED untuk parsing & routing data mesin ke database MSSQL.",
        "Membuat dashboard Power BI untuk visualisasi tren temperatur & status mesin real-time.",
      ],
    },
    tech: ["Mitsubishi Q02HCPU", "Keyence TR-W1000", "Keyence KV-8000", "Moxa AWK-3252A", "USR IoT Devices", "Node-RED", "MSSQL", "Power BI"],
  },
  {
    id: "agv-wireless-control",
    code: "PRJ-03",
    period: "03/2025 — 08/2025",
    company: "PT Musashi Auto Parts Indonesia",
    role: { en: "IoT Engineer (Lead Integrator)", de: "IoT-Ingenieur (Lead Integrator)", id: "IoT Engineer (Lead Integrator)" },
    title: {
      en: "Wireless Network Integration & Control System for AGV",
      de: "Drahtlose Netzwerkintegration & Steuerungssystem für AGV",
      id: "Integrasi Jaringan Wireless & Sistem Kontrol untuk AGV",
    },
    summary: {
      en: "Control, navigation, and industrial wireless communication infrastructure for Automated Guided Vehicles.",
      de: "Steuerungs-, Navigations- und industrielle Funkkommunikationsinfrastruktur für fahrerlose Transportsysteme.",
      id: "Infrastruktur kontrol, navigasi, dan komunikasi wireless industrial untuk Automated Guided Vehicles.",
    },
    description: {
      en: "Design and deployment of a reliable control, navigation, and industrial wireless communication infrastructure for factory AGVs. The system enables seamless autonomous material handling, real-time positioning, and stable communication across the production environment.",
      de: "Entwurf und Implementierung einer zuverlässigen Steuerungs-, Navigations- und industriellen Funkkommunikationsinfrastruktur für werksinterne AGVs. Das System ermöglicht nahtlose autonome Materialhandhabung, Echtzeit-Positionierung und stabile Kommunikation im gesamten Produktionsumfeld.",
      id: "Perancangan dan deployment infrastruktur kontrol, navigasi, dan komunikasi wireless industrial yang reliable untuk AGV pabrik. Sistem ini memungkinkan penanganan material otomatis yang seamless, positioning real-time, dan komunikasi yang stabil di seluruh lingkungan produksi.",
    },
    responsibilities: {
      en: [
        "Designed the core AGV control architecture using a Keyence KV-8000 PLC with Hokuyo UST-30LC-X01 LiDAR for obstacle detection.",
        "Implemented vision-based positioning using Keyence IV-3 smart cameras (IV-Navigator).",
        "Engineered a high-reliability wireless network (Moxa AWK-3252A & AWK-1137C) with Turbo Roaming to prevent packet loss during motion.",
        "Established machine-to-AGV communication via Mitsubishi FX5U PLCs for the Line Call dispatch system.",
        "Centralized AGV telemetry into a master KV-8000 PLC and a local monitoring dashboard for operators.",
      ],
      de: [
        "Entwarf die zentrale AGV-Steuerungsarchitektur mit einer Keyence-KV-8000-SPS und Hokuyo-UST-30LC-X01-LiDAR zur Hinderniserkennung.",
        "Implementierte bildbasierte Positionierung mit Keyence-IV-3-Smart-Kameras (IV-Navigator).",
        "Entwickelte ein hochzuverlässiges Funknetzwerk (Moxa AWK-3252A & AWK-1137C) mit Turbo-Roaming zur Vermeidung von Paketverlusten während der Bewegung.",
        "Etablierte die Maschine-zu-AGV-Kommunikation über Mitsubishi-FX5U-SPS für das Line-Call-Dispatchsystem.",
        "Zentralisierte die AGV-Telemetrie in einer KV-8000-Master-SPS und einem lokalen Überwachungsdashboard für Bediener.",
      ],
      id: [
        "Merancang arsitektur kontrol inti AGV menggunakan PLC Keyence KV-8000 dan LiDAR Hokuyo UST-30LC-X01 untuk obstacle detection.",
        "Mengimplementasikan positioning berbasis vision dengan smart camera Keyence IV-3 (IV-Navigator).",
        "Merancang jaringan wireless reliabilitas tinggi (Moxa AWK-3252A & AWK-1137C) dengan Turbo Roaming untuk mencegah packet loss saat AGV bergerak.",
        "Membangun komunikasi machine-to-AGV via PLC Mitsubishi FX5U untuk sistem Line Call.",
        "Mensentralisasi telemetri AGV ke PLC master KV-8000 & dashboard monitoring lokal untuk operator.",
      ],
    },
    tech: ["Keyence KV-8000", "Keyence IV-3", "Hokuyo LiDAR", "Moxa AWK-3252A", "Moxa AWK-1137C", "Mitsubishi FX5U"],
  },
  {
    id: "energy-monitoring",
    code: "PRJ-04",
    period: "01/2025 — 03/2025",
    company: "PT Musashi Auto Parts Indonesia",
    role: { en: "IoT Engineer (Lead Integrator)", de: "IoT-Ingenieur (Lead Integrator)", id: "IoT Engineer (Lead Integrator)" },
    title: {
      en: "Industrial Energy Monitoring & Digitalization System",
      de: "Industrielles Energiemonitoring- & Digitalisierungssystem",
      id: "Sistem Monitoring Energi Industrial & Digitalisasi",
    },
    summary: {
      en: "Real-time electrical consumption monitoring across heavy forging lines and factory utility panels.",
      de: "Echtzeit-Überwachung des Stromverbrauchs entlang schwerer Schmiedelinien und werksinterner Verteilerschränke.",
      id: "Monitoring konsumsi listrik real-time di lini forging berat dan panel utilitas pabrik.",
    },
    description: {
      en: "Design and implementation of a centralized, real-time energy monitoring system across heavy forging production lines and factory utility panels, supporting energy transparency and analytical insight for factory efficiency.",
      de: "Entwurf und Implementierung eines zentralen Echtzeit-Energiemonitoringsystems entlang schwerer Schmiede-Produktionslinien und werksinterner Verteilerschränke zur Förderung von Energietransparenz und analytischen Erkenntnissen für die Werkseffizienz.",
      id: "Perancangan dan implementasi sistem monitoring energi terpusat dan real-time di seluruh lini produksi forging berat dan panel utilitas pabrik. Sistem ini memungkinkan pelacakan konsumsi listrik berkelanjutan, transparansi energi, dan insight analitik untuk efisiensi energi pabrik.",
    },
    responsibilities: {
      en: [
        "Integrated PM5500 power meters (utility panels) and Mitsubishi ME96SSHB meters (heavy forging machinery).",
        "Designed local network topology: 4–5 power meters per line into dedicated switch hubs.",
        "Integrated wired meter clusters with the factory's wireless backbone via USR IoT clients.",
        "Configured Modbus RTU/TCP for voltage, current, power factor, and energy consumption data.",
        "Developed Power BI dashboards for real-time energy monitoring and anomaly detection.",
      ],
      de: [
        "Integrierte PM5500-Energiemessgeräte (Verteilerschränke) und Mitsubishi-ME96SSHB-Messgeräte (schwere Schmiedemaschinen).",
        "Entwarf die lokale Netzwerktopologie: 4–5 Energiemessgeräte pro Linie an dedizierte Switch-Hubs.",
        "Integrierte kabelgebundene Messgeräte-Cluster über USR-IoT-Clients mit dem drahtlosen Backbone des Werks.",
        "Konfigurierte Modbus RTU/TCP für Spannungs-, Strom-, Leistungsfaktor- und Energieverbrauchsdaten.",
        "Entwickelte Power-BI-Dashboards für Echtzeit-Energiemonitoring und Anomalieerkennung.",
      ],
      id: [
        "Mengintegrasikan power meter PM5500 (panel utilitas) dan Mitsubishi ME96SSHB (mesin forging berat).",
        "Merancang topologi jaringan lokal: 4–5 power meter per lini ke switch hub khusus.",
        "Mengintegrasikan cluster meter berkabel dengan backbone wireless pabrik via USR IoT client.",
        "Mengonfigurasi Modbus RTU/TCP untuk voltage, current, power factor, dan konsumsi energi.",
        "Mengembangkan dashboard Power BI untuk monitoring energi real-time & deteksi anomali konsumsi.",
      ],
    },
    tech: ["PM5500 Power Meter", "Mitsubishi ME96SSHB", "USR IoT Clients", "Modbus RTU/TCP", "Power BI"],
  },
  {
    id: "digital-twin-injection-molding",
    code: "PRJ-05",
    period: "01/2022 — 08/2022",
    company: "PT Biggy Cemerlang (Academic Final Project)",
    role: { en: "Automation Engineering Student (Lead Developer)", de: "Student der Automatisierungstechnik (Lead Developer)", id: "Automation Engineering Student (Lead Developer)" },
    title: {
      en: "IIoT-Based Digital Twin Monitoring System for Injection Molding Machines",
      de: "IIoT-basiertes Digital-Twin-Überwachungssystem für Spritzgussmaschinen",
      id: "Sistem Digital Twin Berbasis IIoT untuk Mesin Injection Molding",
    },
    summary: {
      en: "Web-based digital twin for a FANUC ROBOSHOT α-SiA injection molding machine using IIoT.",
      de: "Webbasierter digitaler Zwilling für eine FANUC-ROBOSHOT-α-SiA-Spritzgussmaschine mittels IIoT.",
      id: "Digital twin berbasis web untuk mesin injection molding FANUC ROBOSHOT α-SiA menggunakan IIoT.",
    },
    description: {
      en: "Design and development of an interactive, web-based Digital Twin monitoring system for a FANUC ROBOSHOT α-SiA injection molding machine to enable real-time visual analysis and process transparency utilizing IIoT technology.",
      de: "Entwurf und Entwicklung eines interaktiven, webbasierten Digital-Twin-Überwachungssystems für eine FANUC-ROBOSHOT-α-SiA-Spritzgussmaschine zur Ermöglichung visueller Echtzeitanalyse und Prozesstransparenz mittels IIoT-Technologie.",
      id: "Perancangan dan pengembangan sistem monitoring Digital Twin berbasis web yang interaktif untuk mesin injection molding FANUC ROBOSHOT α-SiA, guna memungkinkan analisis visual real-time dan transparansi proses menggunakan teknologi IIoT.",
    },
    responsibilities: {
      en: [
        "Designed accurate 3D mechanical models of the injection molding machine components using SolidWorks.",
        "Imported 3D assets into Unity 3D and programmed kinematics to simulate real-world machine movement.",
        "Exported the Unity 3D digital twin into WebGL format for integration into a frontend dashboard.",
        "Developed the web UI using ReactJS, providing operators an efficient visual analysis platform.",
        "Architected the IIoT backend data pipeline (REST API, JSON) with historical data storage in MongoDB.",
      ],
      de: [
        "Entwarf präzise 3D-Modelle der mechanischen Komponenten der Spritzgussmaschine mit SolidWorks.",
        "Importierte 3D-Assets in Unity 3D und programmierte die Kinematik zur Simulation realer Maschinenbewegungen.",
        "Exportierte den Unity-3D-Digital-Twin ins WebGL-Format zur Integration in ein Frontend-Dashboard.",
        "Entwickelte die Web-Oberfläche mit ReactJS und bot Bedienern eine effiziente Plattform zur visuellen Analyse.",
        "Konzipierte die IIoT-Backend-Datenpipeline (REST API, JSON) mit historischer Datenspeicherung in MongoDB.",
      ],
      id: [
        "Merancang model mekanikal 3D komponen mesin injection molding menggunakan SolidWorks.",
        "Mengimpor aset 3D ke Unity 3D, memprogram kinematika untuk simulasi gerakan mesin fisik.",
        "Meng-export digital twin Unity 3D ke format WebGL untuk integrasi ke dashboard frontend.",
        "Mengembangkan UI berbasis web menggunakan ReactJS untuk platform analisis visual operator.",
        "Merancang backend data pipeline IIoT (REST API, JSON) dan penyimpanan data historis di MongoDB.",
      ],
    },
    tech: ["FANUC ROBOSHOT α-SiA", "SolidWorks", "Unity 3D", "WebGL", "ReactJS", "MongoDB", "REST API"],
  },
];

const EDUCATION = {
  degree: { en: "Bachelor of Applied Science (D4) in Automation Engineering", de: "Bachelor of Applied Science (D4) in Automatisierungstechnik", id: "Sarjana Terapan (D4) Teknik Otomasi" },
  school: "Bandung Manufacturing Polytechnic",
  location: "Bandung, Indonesia",
  period: "08/2018 — 08/2022",
  stack: ["MongoDB", "ReactJS", "Node.js", "Firebase", "MySQL", "MQTT"],
  bullets: {
    en: [
      "Designed and built a Digital Twin Monitoring System utilizing IIoT architecture for injection molding machines (Case Study: PT. Biggy Cemerlang).",
      "Developed a web-based monitoring platform enabling real-time data visualization and remote access.",
      "Focused research on production efficiency, machine performance tracking, and predictive maintenance.",
    ],
    de: [
      "Entwarf und baute ein Digital-Twin-Überwachungssystem auf Basis von IIoT-Architektur für Spritzgussmaschinen (Fallstudie: PT. Biggy Cemerlang).",
      "Entwickelte eine webbasierte Überwachungsplattform mit Echtzeit-Datenvisualisierung und Fernzugriff.",
      "Forschungsschwerpunkt auf Produktionseffizienz, Maschinenleistungsverfolgung und vorausschauender Wartung.",
    ],
    id: [
      "Merancang dan membangun Digital Twin Monitoring System berbasis IIoT untuk mesin injection molding (Studi Kasus: PT. Biggy Cemerlang).",
      "Mengembangkan platform monitoring berbasis web dengan visualisasi data real-time dan akses jarak jauh.",
      "Fokus riset pada efisiensi produksi, akurasi tracking performa mesin, dan predictive maintenance.",
    ],
  },
};

const CERTIFICATIONS = [
  { year: "2022", title: { en: "Certified Electrical Installation and Maintenance Engineer", de: "Zertifizierter Ingenieur für Elektroinstallation und -wartung", id: "Certified Electrical Installation and Maintenance Engineer" }, org: "BNSP" },
  { year: "2020", title: { en: "Certified Complex Industrial Electrical Maintenance", de: "Zertifiziert in komplexer industrieller Elektrowartung", id: "Certified Complex Industrial Electrical Maintenance" }, org: "BNSP" },
  { year: "2020", title: { en: "Runner-Up, Indonesian ABU Robot Contest (KRAI) — Regional Level II", de: "Zweiter Platz, Indonesischer ABU-Roboterwettbewerb (KRAI) — Regionalebene II", id: "Runner-Up, Indonesian ABU Robot Contest (KRAI) — Regional Level II" }, org: "KRAI" },
];

const LANGUAGES = [
  { name: { en: "Indonesian", de: "Indonesisch", id: "Indonesian" }, level: { en: "Native", de: "Muttersprache", id: "Native" } },
  { name: { en: "English", de: "Englisch", id: "English" }, level: { en: "Intermediate (B1)", de: "Mittelstufe (B1)", id: "Intermediate (B1)" } },
  { name: { en: "German", de: "Deutsch", id: "German" }, level: { en: "Intermediate (B1 – In Preparation)", de: "Mittelstufe (B1 – in Vorbereitung)", id: "Intermediate (B1 – Persiapan)" } },
  { name: { en: "Hungarian (Magyar)", de: "Ungarisch (Magyar)", id: "Hungarian (Magyar)" }, level: { en: "Beginner (A1)", de: "Anfänger (A1)", id: "Pemula (A1)" } },
];

/* ---------------------------------------------------------
   3. I18N ENGINE
   Priority order: English → Deutsch → Indonesia
--------------------------------------------------------- */
let currentLang = localStorage.getItem("lang") || "en";

function t(path) {
  return path.split(".").reduce((acc, key) => (acc && acc[key] !== undefined ? acc[key] : null), UI[currentLang]);
}

function applyStaticI18n() {
  document.querySelectorAll("[data-i18n]").forEach((el) => {
    const value = t(el.getAttribute("data-i18n"));
    if (value !== null) el.textContent = value;
  });
  document.querySelectorAll("[data-i18n-attr]").forEach((el) => {
    const [attr, path] = el.getAttribute("data-i18n-attr").split(":");
    const value = t(path);
    if (value !== null) el.setAttribute(attr, value);
  });
}

function updateLangButtons() {
  document.querySelectorAll(".lang-btn").forEach((btn) => {
    btn.classList.toggle("is-active", btn.dataset.lang === currentLang);
  });
}

function setLang(lang) {
  currentLang = lang;
  localStorage.setItem("lang", lang);
  document.documentElement.lang = lang;
  applyStaticI18n();
  renderPage();
  updateLangButtons();
}

function initLangButtons() {
  document.querySelectorAll(".lang-btn").forEach((btn) => {
    btn.addEventListener("click", () => setLang(btn.dataset.lang));
  });
  updateLangButtons();
}

/* ---------------------------------------------------------
   4. RENDER FUNCTIONS
--------------------------------------------------------- */
function escapeHtml(str) {
  const div = document.createElement("div");
  div.textContent = str;
  return div.innerHTML;
}

function renderSkills() {
  const el = document.getElementById("skills-groups");
  if (!el) return;
  el.innerHTML = SKILLS.map(
    (group) => `
    <div class="skill-group reveal">
      <h3 class="skill-group-label">${escapeHtml(group.label[currentLang])}</h3>
      <div class="skill-tags">
        ${group.items.map((item) => `<span class="tag">${escapeHtml(item)}</span>`).join("")}
      </div>
    </div>`
  ).join("");
}

function renderExperienceTimeline() {
  const el = document.getElementById("experience-timeline");
  if (!el) return;
  el.innerHTML = EXPERIENCE.map(
    (job) => `
    <div class="timeline-item reveal">
      <div class="timeline-node ${job.current ? "is-current" : ""}"></div>
      <div class="timeline-content">
        <div class="timeline-meta">
          <span class="mono-tag">${job.period}</span>
          ${job.current ? `<span class="badge-current">${t("experience.current")}</span>` : ""}
        </div>
        <h3 class="timeline-role">${escapeHtml(job.role[currentLang])}</h3>
        <p class="timeline-company">${escapeHtml(job.company)} — ${escapeHtml(job.location)}</p>
        <ul class="timeline-bullets">
          ${job.bullets[currentLang].map((b) => `<li>${escapeHtml(b)}</li>`).join("")}
        </ul>
        <div class="skill-tags">
          ${job.stack.map((s) => `<span class="tag tag-sm">${escapeHtml(s)}</span>`).join("")}
        </div>
      </div>
    </div>`
  ).join("");
}

function projectCard(p) {
  return `
    <a href="project.html?id=${p.id}" class="card-project reveal">
      <span class="card-tag">${p.code}</span>
      <span class="mono-tag card-period">${p.period}</span>
      <h3 class="card-title">${escapeHtml(p.title[currentLang])}</h3>
      <p class="card-summary">${escapeHtml(p.summary[currentLang])}</p>
      <div class="skill-tags">
        ${p.tech.slice(0, 4).map((s) => `<span class="tag tag-sm">${escapeHtml(s)}</span>`).join("")}
      </div>
      <span class="card-link">${t("projects.viewDetail")}</span>
    </a>`;
}

function renderFeaturedProjects() {
  const el = document.getElementById("featured-projects");
  if (!el) return;
  el.innerHTML = PROJECTS.slice(0, 4).map(projectCard).join("");
}

function renderProjectsList() {
  const el = document.getElementById("projects-list");
  if (!el) return;
  el.innerHTML = PROJECTS.map(projectCard).join("");
}

function renderProjectDetail() {
  const el = document.getElementById("project-detail");
  if (!el) return;
  const params = new URLSearchParams(window.location.search);
  const id = params.get("id");
  const index = PROJECTS.findIndex((p) => p.id === id);
  const project = PROJECTS[index];

  if (!project) {
    el.innerHTML = `<p class="text-inkmuted">Project not found.</p>`;
    return;
  }

  const next = PROJECTS[(index + 1) % PROJECTS.length];

  document.title = `${project.title[currentLang]} — Iqbal Fauzan`;

  el.innerHTML = `
    <span class="card-tag">${project.code}</span>
    <h1 class="detail-title reveal">${escapeHtml(project.title[currentLang])}</h1>

    <div class="detail-meta reveal">
      <div><span class="meta-label">${t("projects.company")}</span><span>${escapeHtml(project.company)}</span></div>
      <div><span class="meta-label">${t("projects.role")}</span><span>${escapeHtml(project.role[currentLang])}</span></div>
      <div><span class="meta-label">${t("projects.period")}</span><span class="mono-tag">${project.period}</span></div>
    </div>

    <div class="detail-section reveal">
      <h2 class="section-sublabel">${t("projects.description")}</h2>
      <p>${escapeHtml(project.description[currentLang])}</p>
    </div>

    <div class="detail-section reveal">
      <h2 class="section-sublabel">${t("projects.responsibilities")}</h2>
      <ul class="timeline-bullets">
        ${project.responsibilities[currentLang].map((b) => `<li>${escapeHtml(b)}</li>`).join("")}
      </ul>
    </div>

    <div class="detail-section reveal">
      <h2 class="section-sublabel">${t("projects.technologies")}</h2>
      <div class="skill-tags">
        ${project.tech.map((s) => `<span class="tag">${escapeHtml(s)}</span>`).join("")}
      </div>
    </div>

    <div class="detail-nav reveal">
      <a href="projects.html" class="link-arrow">${t("projects.backToProjects")}</a>
      <a href="project.html?id=${next.id}" class="link-arrow">${t("projects.nextProject")}</a>
    </div>
  `;
}

function renderCV() {
  const el = document.getElementById("cv-content");
  if (!el) return;

  el.innerHTML = `
    <section class="cv-block">
      <h2 class="section-sublabel">${t("about.heading")}</h2>
      <p>${escapeHtml(PROFILE.about[currentLang])}</p>
    </section>

    <section class="cv-block">
      <h2 class="section-sublabel">${t("experience.heading")}</h2>
      ${EXPERIENCE.map(
        (job) => `
        <div class="cv-entry">
          <div class="cv-entry-head">
            <strong>${escapeHtml(job.role[currentLang])}</strong>
            <span class="mono-tag">${job.period}</span>
          </div>
          <p class="cv-entry-sub">${escapeHtml(job.company)} — ${escapeHtml(job.location)}</p>
          <ul>${job.bullets[currentLang].map((b) => `<li>${escapeHtml(b)}</li>`).join("")}</ul>
        </div>`
      ).join("")}
    </section>

    <section class="cv-block">
      <h2 class="section-sublabel">${t("education.heading")}</h2>
      <div class="cv-entry">
        <div class="cv-entry-head">
          <strong>${escapeHtml(EDUCATION.degree[currentLang])}</strong>
          <span class="mono-tag">${EDUCATION.period}</span>
        </div>
        <p class="cv-entry-sub">${escapeHtml(EDUCATION.school)} — ${escapeHtml(EDUCATION.location)}</p>
        <ul>${EDUCATION.bullets[currentLang].map((b) => `<li>${escapeHtml(b)}</li>`).join("")}</ul>
      </div>
    </section>

    <section class="cv-block">
      <h2 class="section-sublabel">${t("certifications.heading")}</h2>
      <ul class="cv-list">
        ${CERTIFICATIONS.map((c) => `<li><span class="mono-tag">${c.year}</span> ${escapeHtml(c.title[currentLang])} — ${escapeHtml(c.org)}</li>`).join("")}
      </ul>
    </section>

    <section class="cv-block">
      <h2 class="section-sublabel">${t("skills.heading")}</h2>
      ${SKILLS.map((g) => `<p><strong>${escapeHtml(g.label[currentLang])}:</strong> ${g.items.join(", ")}</p>`).join("")}
    </section>

    <section class="cv-block">
      <h2 class="section-sublabel">${t("languages.heading")}</h2>
      <ul class="cv-list">
        ${LANGUAGES.map((l) => `<li>${escapeHtml(l.name[currentLang])} — ${escapeHtml(l.level[currentLang])}</li>`).join("")}
      </ul>
    </section>
  `;
}

function renderAbout() {
  document.querySelectorAll(".js-about-text").forEach((el) => (el.textContent = PROFILE.about[currentLang]));
  document.querySelectorAll(".js-primary-stack").forEach((el) => {
    el.innerHTML = PROFILE.primaryStack.map((s) => `<span class="tag">${escapeHtml(s)}</span>`).join("");
  });
}

function renderContactInfo() {
  document.querySelectorAll(".js-email").forEach((elx) => (elx.textContent = PROFILE.email));
  document.querySelectorAll(".js-email-href").forEach((elx) => elx.setAttribute("href", `mailto:${PROFILE.email}`));
  document.querySelectorAll(".js-phone").forEach((elx) => (elx.textContent = PROFILE.phone));
  document.querySelectorAll(".js-github-href").forEach((elx) => elx.setAttribute("href", PROFILE.githubUrl));
  document.querySelectorAll(".js-linkedin-href").forEach((elx) => elx.setAttribute("href", PROFILE.linkedinUrl));
}

function renderPage() {
  renderAbout();
  renderSkills();
  renderExperienceTimeline();
  renderFeaturedProjects();
  renderProjectsList();
  renderProjectDetail();
  renderCV();
  renderContactInfo();
  initReveal();
}

/* ---------------------------------------------------------
   5. SCROLL REVEAL
--------------------------------------------------------- */
function initReveal() {
  const items = document.querySelectorAll(".reveal:not(.is-visible)");
  if (!("IntersectionObserver" in window) || window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    items.forEach((el) => el.classList.add("is-visible"));
    return;
  }
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
  );
  items.forEach((el) => observer.observe(el));
}

/* ---------------------------------------------------------
   6. NAV
--------------------------------------------------------- */
function initNav() {
  const toggle = document.getElementById("nav-toggle");
  const menu = document.getElementById("nav-menu");
  if (!toggle || !menu) return;
  toggle.addEventListener("click", () => {
    const isOpen = menu.classList.toggle("is-open");
    toggle.setAttribute("aria-expanded", String(isOpen));
  });
  menu.querySelectorAll("a").forEach((a) =>
    a.addEventListener("click", () => {
      menu.classList.remove("is-open");
      toggle.setAttribute("aria-expanded", "false");
    })
  );
}

function setFooterMeta() {
  document.querySelectorAll(".js-footer-date").forEach((elx) => {
    elx.textContent = new Date().toISOString().slice(0, 10);
  });
  document.querySelectorAll(".js-footer-year").forEach((elx) => {
    elx.textContent = new Date().getFullYear();
  });
}

/* ---------------------------------------------------------
   7. INIT
--------------------------------------------------------- */
document.addEventListener("DOMContentLoaded", () => {
  document.documentElement.lang = currentLang;
  applyStaticI18n();
  renderPage();
  updateLangButtons();
  initLangButtons();
  initNav();
  setFooterMeta();
});
