import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { FormsModule , ReactiveFormsModule } from '@angular/forms';
import { FooterComponent } from "./footer/footer.component";
import { HeaderComponent } from "./header/header.component";
import { PageContentComponent } from "./page-content/page-content.component";


@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss',
    imports: [
        CommonModule,
        RouterOutlet,
        ReactiveFormsModule,
        FormsModule,
        // мои импорты:
        FooterComponent,
        HeaderComponent,
        PageContentComponent
    ]
})
export class AppComponent {
  title = 'я учу Angular'; // переменная но лучше говорить ПОЛЕ КЛАССА
  tooltip = 'подсказка';

  showMessage() {
    alert('Hello, Angular');
  }
}
