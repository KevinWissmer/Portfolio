import { Injectable, } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class UiService {
  constructor(private router: Router) { 
    this.loadColorFromLocalStorage()
  }

  loadColorFromLocalStorage(){
    let color = localStorage.getItem('portfolioColor');
    if(color){
      this.changeScheme(color);
    }
  }

  saveColorToLocalStorage(color: string){
    localStorage.setItem('portfolioColor',color)
  }

  changeRouteParam(sectionName: string) {
    switch (sectionName) {
      case "projects":
        this.router.navigate([''], { queryParams: { section: sectionName, projectname: this.currentProject.name } });
        break;
      case "skills":
        this.router.navigate([''], { queryParams: { section: sectionName, skillname: this.currentskill.name } });
        break;
      default:
        this.router.navigate([''], { queryParams: { section: sectionName } });
        break;
    }
  }

  clearRouteParam() {
    this.router.navigate(['']);
  }

  portfolioOpend = false;
  imprintOpen = false;
  scrollLength = -0;

  sections = [
    "start",
    "skills",
    "projects",
    "contact"
  ]
  sectionsNum = this.sections.length;

  allColors = [
    {
      name: "ZergesOrange",
      colors: [
        "#ff6600",
        "#cc5200",
        "#993d00",
        "#662900",
        "invert(42%) sepia(33%) saturate(2998%) hue-rotate(360deg) brightness(103%) contrast(107%)"
      ]
    }, {
      name: "FlosPurpel",
      colors: [
        "#8A2BE2",
        "#9400D3",
        "#9932CC",
        "#4B0082",
        "invert(24%) sepia(100%) saturate(4993%) hue-rotate(267deg) brightness(91%) contrast(93%)"
      ]
    }, {
      name: "IceBlue",
      colors: [
        "#00FFFF",
        "#40E0D0",
        "#20B2AA",
        "#008B8B",
        "invert(98%) sepia(98%) saturate(7492%) hue-rotate(104deg) brightness(102%) contrast(103%)"
      ]
    }, {
      name: "AnilRed",
      colors: [
        "#a50726",
        "#B22222",
        "#8B0000",
        "#800000",
        "invert(12%) sepia(77%) saturate(4722%) hue-rotate(339deg) brightness(83%) contrast(104%)"
      ]
    },]


  projects = [
    {
      name: 'Sharkie',
      description: '',
      img: 'sharkie.png',
      skills: ['OOP', 'VanillaJS', 'Canvas'],
      links: [
        {
          name: 'Live Test',
          url: ''
        }, {
          name: 'Github',
          url: ''
        }
      ]
    },
    {
      name: 'Slack clone',
      description: 'html code als text',
      img: 'slackclone.png',
      skills: ['Angular', 'Firebase'],
      links: [
        {
          name: 'Live Test',
          url: 'https://slackwebclone.web.app/login'
        }, {
          name: 'Github',
          url: ''
        }
      ]
    },
    {
      name: 'Analytics tool',
      description: 'html code als text',
      img: 'analyse.png',
      skills: ['MatPlotLib', 'TKinter', 'SciPy'],
      links: [
        {
          name: 'Github',
          url: ''
        }
      ],
    }
  ];

  currentProject = this.projects[0];

  setCurrentProject(name:string){
    let res = this.projects.find(project => project.name == name)
    if (res) {
      this.currentProject = res;
      this.changeRouteParam('projects')
    }
  }

  skills = [
    {
      name: 'Frontend',
      description: `Ich habe als Hauptskill das Framework Angular gelernt im zuge meiner Ausbildung in der Developer Akademie. 
      Danach konnte ich meine Kenntnisse darin, durch meine anschließende dortige Mentoren-Tätigkeit, noch weiter verbessern. 
      Die Grundlagen dafür, wie HTML, CSS und Javascript, gehören ebenso zum Spektrum.
      Wichtige Konzepte, wie die OOP, oder Frameworks wie Bootstrap, Material konnte ich schon in einigen Projekten erfolgreich anwenden.
      Besonderen Spaß habe ich hierbei in CSS-Animationen gefunden, genauso auch in Algorithmen und Prozessen (z.B. ein Minesweeper mit Rekursion bauen).`,
      imgList: [
        'angular.png',
        'html.png',
        'js.png',
        'css.png'
      ],

    },
    {
      name: 'Python',
      description: 'html code als text',
      imgList: [
        'python.png',
        'scipy.png',
        'NumPy.png',
        'Matplotlib.png'
      ],
    },
    {
      name: 'Extra',
      description: 'html code als text',
      imgList: [
        '',
        'git.png',
        'rest_API.png',
        'github.png'
      ],
    }
  ];

  currentskill = this.skills[0];

  setCurrentskill(name:string){
    let res = this.skills.find(skill => skill.name == name)
    if (res) {
      this.currentskill = res;
      this.changeRouteParam('skills')
    }
  }



  whiteSmokefilter = 'invert(94%) sepia(79%) saturate(48%) hue-rotate(251deg) brightness(117%) contrast(92%)';
  greyfilter = 'invert(26%) sepia(0%) saturate(1%) hue-rotate(296deg) brightness(98%) contrast(90%)';

  colorscheme = this.allColors[0].colors;

  changeScheme(color: string) {
    this.saveColorToLocalStorage(color)
    switch (color) {
      case "ZergesOrange":
        this.colorscheme = this.allColors[0].colors;
        break;
      case "FlosPurpel":
        this.colorscheme = this.allColors[1].colors;
        break;
      case "IceBlue":
        this.colorscheme = this.allColors[2].colors;
        break;
      case "AnilRed":
        this.colorscheme = this.allColors[3].colors;
        break;
      default:
        this.colorscheme = this.allColors[0].colors;
        break;
    }
  }

  openImprintAndDataprotection() {
    this.imprintOpen = true;
  }

  closeImprintAndDataprotection() {
    this.imprintOpen = false;
  }


  scrollRight() {
    if (this.scrollLength > - 100 * (this.sections.length - 1)) {
      this.scrollLength = this.scrollLength - 100;
      this.changeRouteParam(this.sections[Math.abs(this.scrollLength / 100)]);
    }
  }

  scrollLeft() {
    if (this.scrollLength < 0) {
      this.scrollLength += 100;
      this.changeRouteParam(this.sections[Math.abs(this.scrollLength / 100)]);
    }
  }

  scrollTo(sectionName: string) {
    this.changeRouteParam(sectionName);
    let index = this.sections.indexOf(sectionName);
    this.scrollLength = -100 * index;
  }

}
