class ThemeSwitcher{

    constructor() {
        this.body              = document.querySelector('body');
        this.darkBtn           = document.querySelector('#darkThemeBtn');
        this.lightBtn          = document.querySelector('#lightThemeBtn');
        this.switchBtn         = document.querySelector('#switchThemeBtn');
        this.status            = localStorage.getItem("Status");

        // Appel de la fonction de changement de thème.
        this.initialiseSwitch();    
    }

    // Fonction générale de changement de thème faisant appel à une fonction par bouton.
    initialiseSwitch() {
        if (this.status == "dark") {
            this.setDarkTheme();
        }
        this.darkBtn.addEventListener('click', () =>  this.setDarkTheme());
        this.lightBtn.addEventListener('click', () =>  this.setLightTheme());
        this.switchBtn.addEventListener('click', () =>  this.toggleTheme());
    
    }

    // Thème sombre
    setDarkTheme() {
        this.body.classList.add('dark')
        localStorage.setItem('Status', this.body.className);
    }

    // Thème clair
    setLightTheme() {
        this.body.classList.remove('dark')
        localStorage.setItem('Status', this.body.className);
    }

    // Changement de thème aveugle
    toggleTheme() {
        this.body.classList.toggle('dark')
        localStorage.setItem('Status', this.body.className);
    }
    
}

document.addEventListener('DOMContentLoaded', () =>{
    const switchTheme = new ThemeSwitcher();
});