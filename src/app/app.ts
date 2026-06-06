import { Component, signal, HostListener, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HomeComponent } from './shared/components/home-component/home-component';
import { SupabaseServieces } from './shared/services/supabase-servieces';


@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HomeComponent],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})

export class App {
  protected readonly title = signal('pollApp');

  constructor(private supabaseService: SupabaseServieces) { }

  ngOnInit() {
    this.supabaseService.logData();
  }

  @HostListener('document:contextmenu', ['$event'])
  blockRightClick(event: MouseEvent) {
    event.preventDefault();
  }
}
