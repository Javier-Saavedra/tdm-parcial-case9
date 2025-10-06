// In// Script para navegación de artículos
document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('.read-more').forEach(link => {
    link.addEventListener('click', e => {
      // Permite la navegación normal
      // No hacemos preventDefault, así abre el href
    });
  });
});
