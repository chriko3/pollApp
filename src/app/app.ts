import { Component, signal, HostListener, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HomePage } from './shared/pages/home-page/home-page';
import { SupabaseServieces } from './shared/services/supabase-servieces';
import { SurveyPage } from './shared/pages/survey-page/survey-page';


@Component({
  selector: 'app-root',
  imports: [RouterOutlet,
    HomePage,
    SurveyPage],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})

export class App {
  protected readonly title = signal('pollApp');


  @HostListener('document:contextmenu', ['$event'])
  blockRightClick(event: MouseEvent) {
    event.preventDefault();
  }
}
