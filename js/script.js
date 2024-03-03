
document.addEventListener('DOMContentLoaded', function () {
    const captions = document.querySelectorAll('.caption');
    captions.forEach(caption => {
        caption.addEventListener('click', function () {
            const bossName = this.textContent.trim();
            const bossSection = document.getElementById(bossName.split(' ')[0]);
            if (bossSection) {
                bossSection.scrollIntoView({ behavior: "smooth" });
            }
        });
        caption.addEventListener('mouseover', function () {
            this.style.color = 'red';
        });

        caption.addEventListener('mouseout', function () {
            this.style.color = '';
        });
    });
});

