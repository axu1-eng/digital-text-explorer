//This script is slightly modified code from the following tutorial: https://medium.com/@nohanabil/building-a-multilingual-static-website-a-step-by-step-guide-7af238cc8505

// Function to fetch language data
async function fetchLanguageData(lang) {
  const response = await fetch(`/digital-text-explorer/languages/${lang}.json`);
  return response.json();
}

// Function to set the language preference
function setLanguagePreference(lang) {
  localStorage.setItem("language", lang);
  location.reload();
}

// Function to update content based on selected language
function updateContent(langData) {
  document.querySelectorAll("[data-i18n]").forEach((element) => {
    const key = element.getAttribute("data-i18n");
    element.innerHTML = langData[key];
  });
}

// Function to change language
async function changeLanguage(lang) {
  localStorage.setItem("language", lang);
  location.reload();
}

// Call updateContent() on page load
window.addEventListener("DOMContentLoaded", async () => {
  const userPreferredLanguage = localStorage.getItem("language") || "en";
  if (userPreferredLanguage === 'en') {
    document.querySelectorAll(".show-es").forEach(el => el.style.display = "none");
  }
  else if (userPreferredLanguage === 'es') {
    document.querySelectorAll(".show-en").forEach(el => el.style.display = "none");
    const htmlClass = document.querySelector("html");
    htmlClass.setAttribute("lang", "es");
  }
  const langData = await fetchLanguageData(userPreferredLanguage);
  updateContent(langData);
});