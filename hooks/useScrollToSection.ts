const useScrollToSection = () => {
  const scrollToSection = (sectionId: any) => {
    const section = document.getElementById(sectionId);
    if (section) {
      const navbarHeight = 100;
      const sectionTop = section.offsetTop - navbarHeight;
      window.scrollTo({
        top: sectionTop,
        behavior: 'smooth',
      });
    }
  };
  
  return scrollToSection;
};
  
export default useScrollToSection;  