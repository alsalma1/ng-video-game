import { Component, OnInit} from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.scss']
})
export class SearchBarComponent implements OnInit{
  constructor(private router: Router) { 
    this.detectedColorScheme();
  }
  ngOnInit(): void {
  }

  onSubmit(form: NgForm){
    this.router.navigate(['search', form.value.search]);
  }

  darkmode = false;
  detectedColorScheme(){
    if(window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches){
      this.darkmode = true;
      document.documentElement.setAttribute('data-theme',this.darkmode ? "dark" : "light");
    }
  }

  changeThem(){
    this.darkmode = !this.darkmode;
    document.documentElement.setAttribute('data-theme',this.darkmode ? "dark" : "light");
  }


}
