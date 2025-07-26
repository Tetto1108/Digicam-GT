
  document.addEventListener('DOMContentLoaded', function() {
    const steps = document.querySelectorAll('.process-step');
    const dots = document.querySelectorAll('.process-dots .dot');
    const prevBtn = document.querySelector('.process-prev');
    const nextBtn = document.querySelector('.process-next');
    let currentIndex = 0;
    const intervalTime = 5000; // 5 segundos
    let slideInterval;
    
    function updateSlider() {
      steps.forEach((step, index) => {
        step.classList.toggle('active', index === currentIndex);
      });
      
      dots.forEach((dot, index) => {
        dot.classList.toggle('active', index === currentIndex);
      });
    }
    
    function nextStep() {
      currentIndex = (currentIndex + 1) % steps.length;
      updateSlider();
    }
    
    function prevStep() {
      currentIndex = (currentIndex - 1 + steps.length) % steps.length;
      updateSlider();
    }
    
    function startInterval() {
      slideInterval = setInterval(nextStep, intervalTime);
    }
    
    // Event listeners
    nextBtn.addEventListener('click', () => {
      nextStep();
      resetInterval();
    });
    
    prevBtn.addEventListener('click', () => {
      prevStep();
      resetInterval();
    });
    
    dots.forEach((dot, index) => {
      dot.addEventListener('click', () => {
        currentIndex = index;
        updateSlider();
        resetInterval();
      });
    });
    
    function resetInterval() {
      clearInterval(slideInterval);
      startInterval();
    }
    
    // Iniciar slider automático
    startInterval();
    
    // Pausar al interactuar
    const slider = document.querySelector('.process-slider');
    slider.addEventListener('mouseenter', () => {
      clearInterval(slideInterval);
    });
    
    slider.addEventListener('mouseleave', startInterval);
  });

    
    document.addEventListener('DOMContentLoaded', function () {
      const slider = document.querySelector('.slider-container');
      const slides = document.querySelectorAll('.slide');
      const dots = document.querySelectorAll('.slider-dot');
      const prevBtn = document.querySelector('.prev');
      const nextBtn = document.querySelector('.next');

      let currentIndex = 0;
      const slideTime = 8000;
      let slideInterval;

      function updateSlider() {
        slider.style.transform = `translateX(-${currentIndex * 100}%)`;
        slides.forEach((s, i) => s.classList.toggle('active', i === currentIndex));
        dots.forEach((d, i) => d.classList.toggle('active', i === currentIndex));
      }

      function nextSlide() {
        currentIndex = (currentIndex + 1) % slides.length;
        updateSlider();
      }

      function prevSlide() {
        currentIndex = (currentIndex - 1 + slides.length) % slides.length;
        updateSlider();
      }

      function startSlider() {
        slideInterval = setInterval(nextSlide, slideTime);
      }

      function resetTimer() {
        clearInterval(slideInterval);
        startSlider();
      }

      nextBtn.addEventListener('click', () => {
        nextSlide();
        resetTimer();
      });

      prevBtn.addEventListener('click', () => {
        prevSlide();
        resetTimer();
      });

      dots.forEach((dot, i) => {
        dot.addEventListener('click', () => {
          currentIndex = i;
          updateSlider();
          resetTimer();
        });
      });

      startSlider();
      slider.addEventListener('mouseenter', () => clearInterval(slideInterval));
      slider.addEventListener('mouseleave', startSlider);
    });