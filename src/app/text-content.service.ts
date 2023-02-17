import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TextContentService {

  constructor() {
    this.loadLanguageFromLocalStorage();
  }

  actualLanguage: string = "german";

  switchLanguage() {
    if (this.actualLanguage == 'german') {
      this.setLanguageTo('english');
    } else {
      this.setLanguageTo('german');
    }
  }

  saveLanguageToLocalStorage(language: string){
    localStorage.setItem('actualLanguage',language)
  }

  loadLanguageFromLocalStorage(){
    let language = localStorage.getItem('actualLanguage');
    if(language == 'english' || language == 'german'){
      this.setLanguageTo(language);
    } else {
      this.setLanguageTo('german');
    }
  }

  setLanguageTo(language: string) {
    this.saveLanguageToLocalStorage(language)
    this.actualLanguage = language;
    if (language == 'english' || language == 'german') {
      this.landingPage.actual = this.landingPage[language];
      this.contactPage.actual = this.contactPage[language];
      this.startPage.actual = this.startPage[language];
      this.skillsPage.actual = this.skillsPage[language];
      this.projectPage.actual = this.projectPage[language];
      this.pfWrapperPage.actual = this.pfWrapperPage[language];
      this.imprintPage.actual = this.imprintPage[language];
    }
  }

  

  landingPage: { english: string[], german: string[], actual: string[] } = {
    english: ['Physicists to understand and programmer to simplify it','see more'],
    german: ['Physiker, um zu verstehen, und Programmierer, um es zu vereinfachen','weiter'],
    actual: [],
  }

  pfWrapperPage: { english: string[], german: string[], actual: string[] } = {
    english: ['start','skills','projects','contact','Imprint & Privacy'],
    german: ['Start','Skills','Projekte','Kontakt','Impressum & Datenschutz'],
    actual: [],
  }

  startPage: { english: string[], german: string[], actual: string[] } = {
    english: [
      'ABOUT ME',
      'UNIVERSITY',
      'I studied physics at Leibniz University in Hannover and focused on everything related to programming. Master thesis and bachelor thesis were programming projects and my minor subject was computer science.',
      'After a few years of uncertainty in choosing a career, I discovered programming for myself. To move to a higher level and get professional input, I attended the Developer Academy.',
      'At the end of the training in the academy followed the employment there as a programming mentor. This enabled me to improve my hard and soft skills even further.',
    ],
    german: [
      'ÜBER MICH',
      'UNIVERSITÄT',
      'Ich habe an der Leibniz Universität in Hannover Physik studiert und mich auf alles konzentriert, was mit Programmierung zu tun hat. Masterarbeit und Bachelorarbeit waren Programmierprojekte und mein Nebenfach war Informatik.',
      'Nach einigen Jahren der Unsicherheit bei der Berufswahl habe ich das Programmieren für mich entdeckt. Um mich auf ein höheres Niveau zu begeben und professionellen Input zu bekommen, besuchte ich die Developer Akademie.',
      'Am Ende der Ausbildung in der Akademie folgte die dortige Anstellung als Programmiermentor. Somit konnte ich meine Hard- und Softskills noch weiter verbessern.',
    ],
    actual: [],
  }

  skillsPage: { english: string[], german: string[], actual: string[] } = {
    english: [
      'I learned the Angular framework as my main skill during my training at the Developer Academy. Afterwards, I was able to further improve my knowledge of it through my subsequent mentoring activities there. The basics for it, like HTML, CSS and Javascript, are also part of the spectrum. Important concepts, like OOP, or frameworks like Bootstrap, material I could already apply successfully in some projects. I found special fun in CSS animations, as well as in algorithms (e.g. building a Minesweeper with recursion).',
      'During my studies I had to do many small calculations with Python and this sparked my interest. I was particularly taken with simulations. I use well-known packages like SciPy, NumPy and MatPlotLib to reach my goal. I have also gained experience in creating GUIs with TKinter (see the Python analysis software under projects as an example).',
      'Other important skills that I was able to learn are, for example, working under Scrum in several group projects during the academy period. Both in the group work and alone I used Git (or Github) for version control. I also gained experience with APIs on a small scale (Pokeapi) and on a larger scale with Firebase (see the Firebase project Slack-clone under Projects).',
    ],
    german: [
      'Ich habe als Hauptskill das Framework Angular gelernt im Zuge meiner Ausbildung in der Developer Akademie. Danach konnte ich meine Kenntnisse darin, durch meine anschließende dortige Mentoren-Tätigkeit, noch weiter verbessern. Die Grundlagen dafür, wie HTML, CSS und Javascript, gehören ebenso zum Spektrum. Wichtige Konzepte, wie die OOP, oder Frameworks wie Bootstrap, Material konnte ich schon in einigen Projekten erfolgreich anwenden. Besonderen Spaß habe ich hierbei in CSS-Animationen gefunden, genauso auch in Algorithmen (z.B. ein Minesweeper mit Rekursion bauen).',
      'Im Studium musste ich viele kleinere Berechnungen mit Python durchführen und bei mir wurde dadurch das Interesse geweckt. Vor allem Simulationen haben es mir angetan. Dabei nutze ich bekannte Packages wie SciPy, NumPy und MatPlotLib um an mein Ziel zu kommen. Ich habe auch schon Erfahrungen sammeln können mit dem Erstellen von GUIs mit TKinter (siehe hierzu als Beispiel die Python Analysesoftware unter Projekte).',
      'Wichtige weitere Skills die ich lernen konnte sind z.B. das Arbeiten unter Scrum in mehreren Gruppenarbeiten während der Akademiezeit. Sowohl in den Gruppenarbeiten als auch alleine nutzte ich dabei zur Versionskontrolle Git (bzw. Github). Desweiteren habe ich auch Erfahrungen mit APIs im kleinen (Pokeapi) und etwas größeren Stil mit Firebase gesammelt  (siehe hierzu das Firebase-Projekt Slack-clone unter Projekte).',
    ],
    actual: [],
  }

  projectPage: { english: string[], german: string[], actual: string[] } = {
    english: [
      'Sharkie is a small 2D game where you can collect coins and defeat enemies in different ways. The main focus of the implementation was the use of canvas and the application of OOP.',
      'The Slack clone is a replica of the well-known messenger Slack with Angular and Firebase. The design was implemented using Material Design. Some exciting challenges were the message input field (including file upload) and the responsive view with column sizing.',
      'This tool is part of my master thesis in physics and is a Python based software to analyze UV/-Vis spectra of plutonium solutions. It is supposed to calculate proportions based on reference spectra and some settings. Exciting challenge was the GUI with TKinter, the general analysis with the Levenberg-Marquardt algorithm and application of interpolations like the spline interpolation.',
      'PROJECTS'
    ],
    german: [
      'Sharkie ist ein kleines 2D Spiel, bei dem man Münzen sammeln kann und Gegner auf unterschiedliche Weise besiegen muss. Hauptaugenmerk bei der Umsetzung lag hierbei auf der Nutzung von  Canvas und der Anwendung der OOP. ',
      'Der Slack-Clone ist ein Nachbau des bekannten Messengers Slack mit Angular und Firebase. Das Design wurde unter der Verwendung von Material Design umgesetzt. Einige spannende Herausforderungen waren das Message-Eingabefeld (samt Dateiupload) und die responsive Ansicht mit der Größeneinstellung der Spalten.',
      'Dieses Tool ist teil meiner Masterarbeit in Physik und ist eine Pythonbasierte Software zur Analyse von UV/-Vis Spektren von Plutoniumlösungen. Diese soll Anteile berechnen Aufgrund von Referenzspektren und einigen Einstellmöglichkeiten. Spannende Herausforderung war hierbei das GUI mit TKinter, die  generelle Analyse mit dem Levenberg-Marquardt-Algorithmus und Anwendung von Interpolationen wie der Spline-Interpolation.',
      'PROJEKTE'
    ],
    actual: [],
  }

  contactPage: { english: string[], german: string[], actual: string[] } = {
    english: ['CONTACT', 'Metropolitan Region Hanover-Braunschweig-Göttingen-Wolfsburg', 'Your name', 'please enter a name', 'Your email address', 'please enter a valid email', 'Your message', 'please enter a message (minimum 10 letters)', 'send message', 'to the contact form', 'back to contact info', 'Thank you for your email!'],
    german: ['KONTAKT', 'Metropolregion Hannover-Braunschweig-Göttingen-Wolfsburg', 'Ihr Name', 'bitte einen Namen eingeben', 'Ihre E-Mail Adresse', 'bitte geben Sie eine gültige E-Mail-Adresse ein', 'Ihre Nachricht', 'bitte geben Sie eine Nachricht ein (mindestens 10 Buchstaben)', 'Nachricht senden', 'zum Kontaktformular', 'zurück zu Kontaktinfos', 'Vielen Dank für Ihre E-Mail!'],
    actual: [],
  }

  imprintPage: { english: string[], german: string[], actual: string[] } = {
    english: ['imprint','close','dataprotection'],
    german: ['Impressum','schließen','Datenschutz'],
    actual: [],
  }

}


