const toggleSwitch = document.querySelector('.theme-switch input[type="checkbox"]');
const currentTheme = localStorage.getItem('theme');

toggleSwitch.addEventListener('change', switchTheme, false);

    window.addEventListener('load', ()=>{
    let isPlaying = false
    let KrunkMarketBGAudio = document.querySelector('audio')
    KrunkMarketBGAudio.addEventListener('play',()=>{isPlaying = true})
    document.addEventListener('click',() => {
        if(!isPlaying){
            KrunkMarketBGAudio.play()
        }
    }, {once: true})
})

if (currentTheme) {
    document.documentElement.setAttribute('data-theme', currentTheme);
  
    if (currentTheme === 'dark') {
        toggleSwitch.checked = true;
    }
}

function switchTheme(e) {
    if (e.target.checked) {
        document.documentElement.setAttribute('data-theme', 'dark');
        localStorage.setItem('theme', 'dark');
    }
    else {        document.documentElement.setAttribute('data-theme', 'light');
          localStorage.setItem('theme', 'light');
    }    
}
