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
      title: "Lidero el soporte técnico avanzado de los equipos de diagnóstico multimarca y el software IDC6 en los cinco entornos de la marca: automotor, transporte pesado, maquinaria agrícola y fuera de carretera, motocicletas y náutica. Dicto capacitaciones y masterclasses oficiales para la red de distribución y talleres de la región, y actúo como enlace técnico con casa matriz en la validación de nuevas versiones de software.",
      icon: '/assets/texa.jpg',
      logoClass: 'rounded-lg object-cover p-0 bg-transparent',
    },
    {
      id: 2,
      name: 'Janus Automation',
      pos: 'Desarrollador de Software Industrial',
      duration: 'Marzo 2024 - Febrero 2026',
      title: "Desarrollé y mantuve sistemas industriales orientados a la continuidad operativa de plantas de producción continua. Construí aplicaciones de escritorio, servicios web y visualizaciones 3D para el monitoreo de procesos en tiempo real, trabajando de cerca con los usuarios en planta para resolver incidentes y mejorar las herramientas del día a día.",
      icon: '/assets/janus.png',
    }
  ];
