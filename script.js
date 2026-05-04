// Анімація для об'єктів
document.addEventListener('DOMContentLoaded', function() {
    const torus = document.querySelector('a-torus');
    const cylinder = document.querySelector('a-cylinder');
    const camera = document.querySelector('a-camera');

    let minDistance = -15;      
    let maxDistance = 15;    
    let zoomSpeed = 0.3;      

    // Наближення камери
    function handleWheel(event) {
        
        let pos = camera.getAttribute('position');
        if (!pos) return;

       
        let delta = event.deltaY > 0 ? zoomSpeed : -zoomSpeed;

        let newZ = pos.z + delta;

        newZ = Math.max(minDistance, Math.min(maxDistance, newZ));

        camera.setAttribute('position', {
            x: pos.x,
            y: pos.y,
            z: newZ
        });

        event.preventDefault();
    }

    window.addEventListener('wheel', handleWheel);

    console.log('Прокрутка коліщатка миші працює! Наближайтеся та віддаляйтеся.');


    // Обертання тора
    if (torus) {
        let rotation = 0;
        setInterval(() => {
            rotation = (rotation + 1) % 360;
            if (torus) torus.setAttribute('rotation', rotation + ' 30 0');
        }, 50);
    }
    
    // Пульсація сфери
    if (cylinder) {
        let scale = 1;
        let direction = 0.01;
        setInterval(() => {
            scale += direction;
            if (scale >= 1.1 || scale <= 0.9) direction *= -1;
            if (cylinder) cylinder.setAttribute('scale', scale + ' ' + scale + ' ' + scale);
        }, 50);
    }
    
    console.log('Сцена завантажена та готова!');
});