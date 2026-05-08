/* ============================================================
   Pré-visualização de referências (.ref-link)
   - Hover: imagem flutuante seguindo o cursor
   - Clique: popup centralizado
   Compatível com a navegação instantânea do Material.
   ============================================================ */

(function () {
  function init() {
    if (document.getElementById('refHoverPreview')) return;

    const hoverBox = document.createElement('div');
    hoverBox.className = 'ref-hover-preview';
    hoverBox.id = 'refHoverPreview';
    const hoverImg = document.createElement('img');
    hoverImg.id = 'refHoverImg';
    hoverImg.alt = '';
    hoverBox.appendChild(hoverImg);
    document.body.appendChild(hoverBox);

    const overlay = document.createElement('div');
    overlay.className = 'ref-popup-overlay';
    overlay.id = 'refOverlay';
    document.body.appendChild(overlay);

    const popup = document.createElement('div');
    popup.className = 'ref-popup-box';
    popup.id = 'refPopup';
    popup.innerHTML =
      '<button class="ref-popup-close" id="refClose" aria-label="Fechar">✕</button>' +
      '<img id="refPopupImg" src="" alt="">';
    document.body.appendChild(popup);

    const popupImg = popup.querySelector('#refPopupImg');
    const btnClose = popup.querySelector('#refClose');

    function showHover(src, alt) {
      hoverImg.src = src;
      hoverImg.alt = alt || '';
      hoverBox.classList.add('active');
    }
    function moveHover(e) {
      const offset = 16;
      const w = hoverBox.offsetWidth;
      const h = hoverBox.offsetHeight;
      let x = e.clientX + offset;
      let y = e.clientY + offset;
      if (x + w > window.innerWidth) x = e.clientX - w - offset;
      if (y + h > window.innerHeight) y = e.clientY - h - offset;
      hoverBox.style.left = Math.max(8, x) + 'px';
      hoverBox.style.top = Math.max(8, y) + 'px';
    }
    function hideHover() {
      hoverBox.classList.remove('active');
      hoverImg.src = '';
    }
    function openPopup(src, alt) {
      popupImg.src = src;
      popupImg.alt = alt || '';
      popup.classList.add('active');
      overlay.classList.add('active');
    }
    function closePopup() {
      popup.classList.remove('active');
      overlay.classList.remove('active');
      popupImg.src = '';
    }

    document.addEventListener('mouseover', function (e) {
      const link = e.target.closest('a.ref-link');
      if (link) showHover(link.dataset.img, link.dataset.alt);
    });
    document.addEventListener('mousemove', function (e) {
      if (hoverBox.classList.contains('active')) moveHover(e);
    });
    document.addEventListener('mouseout', function (e) {
      const link = e.target.closest('a.ref-link');
      if (link) hideHover();
    });
    document.addEventListener('click', function (e) {
      const link = e.target.closest('a.ref-link');
      if (link) {
        e.preventDefault();
        hideHover();
        openPopup(link.dataset.img, link.dataset.alt);
      }
    });
    overlay.addEventListener('click', closePopup);
    btnClose.addEventListener('click', closePopup);
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape') closePopup();
    });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }

  // Compatibilidade com navegação instantânea do Material
  if (window.document$ && typeof window.document$.subscribe === 'function') {
    window.document$.subscribe(init);
  }
})();
