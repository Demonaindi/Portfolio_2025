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
      name: 'Janus Automation',
      pos: 'Junior Fullstack Developer',
      duration: 'Marzo 2024 - Presente',
      title: "En esta empresa, consolidé mis conocimientos en el desarrollo de sistemas web de gran escala con Angular, optimizando la interacción con bases de datos SQL y OLAP. También participé activamente en proyectos de visualización avanzada, creando simulaciones 3D para el muestreo y análisis de datos, lo que permitió representar información compleja de manera intuitiva y dinámica. Actualmente, sigo trabajando en proyectos innovadores para diversos países, colaborando con equipos internacionales y buscando constantemente mejorar los sistemas y procesos desarrollados.",
      icon: '/assets/janus.png',
    }
    
  ];