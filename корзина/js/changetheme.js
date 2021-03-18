if (!localStorage.theme) localStorage.theme = "light"
document.body.className = localStorage.theme
toggleThemeBtn.innerText = document.body.classList.contains("dark") ? "Сменить тему на темную" : "Сменить тему на светлую"

toggleThemeBtn.onclick = () => {
    document.body.classList.toggle("dark")
    toggleThemeBtn.innerText = document.body.classList.contains("dark") ? "Сменить тему на светлую" : "Сменить тему на тёмную"
    localStorage.theme = document.body.className || "light"
}