// Load SVG file content and insert into the page
fetch('AOR_SVG_v3.svg')
  .then(response => response.text())
  .then(svgText => {
    document.getElementById('svg-content').innerHTML = svgText;

    // Example interactivity: highlight elements on click
    const svg = document.querySelector('#svg-content svg');
    if (svg) {
      svg.addEventListener('click', (e) => {
        if (e.target && e.target.tagName !== 'svg') {
          e.target.style.stroke = 'red';
          e.target.style.strokeWidth = '2px';
        }
      });
    }
  })
  .catch(error => console.error('Error loading SVG:', error));
