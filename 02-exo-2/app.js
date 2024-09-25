class ThemeSwitcher{

    constructor() {
        this.body              = document.querySelector('body');
        this.darkBtn           = document.querySelector('#darkThemeBtn');
        this.lightBtn          = document.querySelector('#lightThemeBtn');
        this.switchBtn         = document.querySelector('#switchThemeBtn');

        // Appel de la fonction de changement de thème.
        this.initialiseSwitch();    
    }

    // Fonction générale de changement de thème faisant appel à une fonction par bouton.
    initialiseSwitch() {
        this.darkBtn.addEventListener('click', () =>  this.setDarkTheme());
        this.lightBtn.addEventListener('click', () =>  this.setLightTheme());
        this.switchBtn.addEventListener('click', () =>  this.toggleTheme());
    
    }

    // Thème sombre
    setDarkTheme() {
        this.body.classList.add('dark')
    }

    // Thème clair
    setLightTheme() {
        this.body.classList.remove('dark')
    }

    // Changement de thème aveugle
    toggleTheme() {
        this.body.classList.toggle('dark')
    }
    
}

document.addEventListener('DOMContentLoaded', () =>{
    const switchTheme = new ThemeSwitcher();
});