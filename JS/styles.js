const settings = document.getElementById("settings").querySelectorAll("input[type='color']");
const DSettings = document.getElementById("settings").querySelectorAll("input[type='checkbox']");
const defaultValues = {};

for (let i = 0; i < settings.length; i++) {
    let v = (getComputedStyle(document.documentElement).getPropertyValue(settings[i].name)).trim();
    defaultValues[settings[i].name] = v;
    settings[i].setAttribute("value", v);
    settings[i].addEventListener("change", function() {
        settings.forEach(l => {
            document.documentElement.style.setProperty(l.name, l.value);
        })
    })
}

DSettings.forEach(s => {
    s.addEventListener("click", function() {
        
    })
})
