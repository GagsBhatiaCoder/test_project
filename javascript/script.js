const img = document.getElementById('heartbeatImage');
const proximityDistance = 100; // Distance in pixels within which the animation will trigger

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
