import $ from 'jquery';

// Create a matrix-like hacking visual effect
export const displayHackingEffect = () => {
    // Create a canvas for the hacking effect
    const canvas = document.createElement('canvas');
    canvas.id = 'hacking-effect';
    canvas.width = window.innerWidth;
    canvas.height = 300;
    canvas.style.position = 'absolute';
    canvas.style.top = '50%';
    canvas.style.left = '0';
    canvas.style.zIndex = '9999';
    
    document.body.appendChild(canvas);
    
    const ctx = canvas.getContext('2d');
    
    // Matrix characters
    const characters = 'アイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホマミムメモヤユヨラリルレロワヲン0123456789';
    const columns = canvas.width / 20;
    const drops = [];
    
    // Initialize drops
    for (let i = 0; i < columns; i++) {
        drops[i] = 1;
    }
    
    // Run the animation
    const draw = () => {
        // Black background with opacity to create trail effect
        ctx.fillStyle = 'rgba(0, 0, 0, 0.05)';
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        
        // Green text color
        ctx.fillStyle = '#0F0';
        ctx.font = '15px monospace';
        
        // Draw characters
        for (let i = 0; i < drops.length; i++) {
            // Random character to print
            const text = characters.charAt(Math.floor(Math.random() * characters.length));
            
            // x = i * fontSize, y = value of drops[i] * fontSize
            ctx.fillText(text, i * 20, drops[i] * 20);
            
            // Randomly reset drops to top after it's reached a certain point
            if (drops[i] * 20 > canvas.height && Math.random() > 0.975) {
                drops[i] = 0;
            }
            
            // Increment y coordinate
            drops[i]++;
        }
    };
    
    // Animation counter
    let frames = 0;
    const maxFrames = 150; // Run animation for ~5 seconds
    
    // Animation interval
    const interval = setInterval(() => {
        draw();
        frames++;
        
        if (frames > maxFrames) {
            clearInterval(interval);
            // Append some hacking messages to the terminal
            $('#terminal-body').append('<div class="text-red-500">ACCESS GRANTED</div>');
            $('#terminal-body').append('<div class="text-yellow-400">Retrieving system information...</div>');
            
            setTimeout(() => {
                $('#terminal-body').append('<div class="text-green-400 mt-2">System: Ubuntu 20.04.6 LTS</div>');
                $('#terminal-body').append('<div class="text-green-400">Kernel: 5.15.0-58-generic</div>');
                $('#terminal-body').append('<div class="text-green-400">CPU: Intel Core i7-10700K (8) @ 3.800GHz</div>');
                $('#terminal-body').append('<div class="text-green-400">Memory: 16 GB</div>');
                $('#terminal-body').append('<div class="text-green-400 mb-2">Disk: 1TB SSD</div>');
                
                $('#terminal-body').append('<div class="text-yellow-400">Important: This is only a simulation for educational purposes.</div>');
                $('#terminal-body').append('<div class="text-yellow-400">Always use security tools ethically and responsibly.</div>');
                
                // Remove the canvas
                document.body.removeChild(canvas);
            }, 1000);
        }
    }, 33);
    
    // Clean up if user navigates away before animation completes
    setTimeout(() => {
        if (document.getElementById('hacking-effect')) {
            clearInterval(interval);
            document.body.removeChild(canvas);
        }
    }, 8000);
};

export const simulateFileSystem = (files) => {
    return `
        <div class="text-white mt-2">
            <div class="flex flex-col">
                <div class="text-blue-400 font-bold mb-2">Files discovered:</div>
                ${files.map(file => `<div class="ml-4 mb-1">${file}</div>`).join('')}
            </div>
        </div>
    `;
}; 