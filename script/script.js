// Fala com voz sintetizada
function speak(text) {
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = 'pt-BR';
    speechSynthesis.cancel(); // Para não sobrepor áudios
    speechSynthesis.speak(utterance);
  }
  
  // Função para ativar atalhos de teclado de forma reutilizável
  function ativarAtalhos({ textoIntro = "", aoC = null, aoD = null, aoE = null }) {
    window.addEventListener('load', () => {
      if (textoIntro) speak(textoIntro);
  
      // Atalho: Ouvir explicação no botão
      const speakBtn = document.getElementById('speak-btn');
      if (speakBtn) {
        speakBtn.addEventListener('click', () => speak(textoIntro));
      }
  
      // Atalho: Mostrar demonstração no botão
      const demoBtn = document.getElementById('demo-btn');
      if (demoBtn) {
        demoBtn.addEventListener('click', () => {
          const demoArea = document.getElementById('demo-area');
          if (demoArea) demoArea.style.display = 'block';
          if (typeof aoD === 'function') aoD(); // se precisar acionar algo extra
        });
      }
    });
  
    // Teclado
    document.addEventListener('keydown', (e) => {
      const tecla = e.key.toLowerCase();
  
      if (tecla === 'c' && typeof aoC === 'function') {
        aoC();
      } else if (tecla === 'd' && typeof aoD === 'function') {
        aoD();
      } else if (tecla === 'e' && typeof aoE === 'function') {
        aoE();
      }
    });
  }
  