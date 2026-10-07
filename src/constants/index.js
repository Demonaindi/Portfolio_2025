export const navLinks = [
    {
      id: 1,
      name: 'Inicio',
      href: '#Hero',
    },
    {
      id: 2,
      name: 'Sobre mi',
      href: "#About",
    },
    {
      id: 3,
      name: 'Experiencia',
      href: '#Experience',
    },
  ];
  
 
  export const calculateSizes = (isSmall, isMobile, isTablet) => {
    return {
      deskScale: isSmall ? 0.02 : isMobile ? 0.03 : 0.045,
      deskRotation: isSmall ? [0, -Math.PI, 0]: isMobile ? [0.2, -Math.PI, 0]: [0, -Math.PI, 0],
      deskPosition: isMobile ? [0.2, -2.5, 0] : [0.25, -5.5, 0],
      cubePosition: isSmall ? [2, 0, -10] : isMobile ? [8, -7, -10] : isTablet ? [7.5, -3, -8] : [7.5, -3, -5],
      reactLogoPosition: isSmall ? [7.5, 7, -25] : isMobile ? [12, 5, -20] : isTablet ? [14, 2, -14] : [15.2, 2, -12],
      ringPosition: isSmall ? [-16, 29, -40] : isMobile ? [-13, 15, -19] : isTablet ? [-18, 12, -15] : [-16.5, 9, -9],
      AngularPosition: isSmall ? [-3, 1, -10] : isMobile ? [-9, -2, -12] : isTablet ? [-11, -10, -10] : [-14, -2, -14],
    };

  };
  
  export const workExperiences = [
    {
      id: 1,
      name: 'TEXA',
      pos: 'Líder Técnico & Formador Técnico Especializado',
      duration: 'Marzo 2026 - Presente',
      company:
        'Líder mundial en diseño, industrialización y fabricación de herramientas de diagnóstico para automóviles, camiones, maquinaria agrícola, motocicletas y embarcaciones.',
      title: "Liderazgo y gestión de soporte técnico avanzado (L2/L3) para equipos de diagnóstico multimarca y software IDC5 en los 5 entornos: Automotor, Transporte Pesado, Maquinaria Agrícola/Fuera de Carretera, Motocicletas y Náutica. Instructor técnico de la Masterclass oficial \"Sistemas de Postratamiento EURO 5 y EURO 6\" (junto a Sabecort Sport y TEXA do Brasil). Diagnóstico de arquitecturas electrónicas vehiculares (CAN-Bus, CAN-FD, SAE J1939), capacitaciones a distribuidores y enlace técnico con casa matriz para validación de software y homologación de protocolos.",
      icon: '/assets/texa.jpg',
      logoClass: 'rounded-lg object-cover p-0 bg-transparent',
    },
    {
      id: 2,
      name: 'Janus Automation',
      pos: 'Desarrollador de Software Industrial',
      duration: 'Marzo 2024 - Febrero 2026',
      title: "Mantenimiento correctivo y evolutivo de sistemas industriales para continuidad operativa en plantas continuas. Desarrollo de aplicaciones de escritorio y servicios para monitoreo, adquisición y muestreo de variables en tiempo real. Visualizaciones interactivas en 3D para tracking de procesos, modelado de bases de datos relacionales, integración de APIs REST y soporte técnico en planta con documentación operativa.",
      icon: '/assets/janus.png',
    }
  ];
