const img = document.getElementById('heartbeatImage');
const proximityDistance = 100;

document.addEventListener('mousemove', (e) => {
  const imgRect = img.getBoundingClientRect();
  const imgCenterX = imgRect.left + imgRect.width / 2;
  const imgCenterY = imgRect.top + imgRect.height / 2;
  
  const distance = Math.sqrt(Math.pow(e.clientX - imgCenterX, 2) + Math.pow(e.clientY - imgCenterY, 2));
  
  if (distance < proximityDistance) {
    img.classList.add('heartbeat');
  } else {
    img.classList.remove('heartbeat');
  }
});

function checkScreenSize() {
    if (window.innerWidth < 576) {
      document.removeEventListener('mousemove', handleMouseMove);
      img.classList.add('heartbeat');
    } else {
      document.addEventListener('mousemove', handleMouseMove);
      img.classList.remove('heartbeat');
    }
  }
  

  checkScreenSize();
  

  window.addEventListener('resize', checkScreenSize);