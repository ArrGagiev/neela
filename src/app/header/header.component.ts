import { Component } from '@angular/core';
import { AppbarComponent } from "../appbar/appbar.component";

@Component({
    selector: 'app-header',
    standalone: true,
    templateUrl: './header.component.html',
    styleUrl: './header.component.scss',
    imports: [AppbarComponent]
})
export class HeaderComponent {
    public title = 'Добро пожаловать в мир Neela Springs!';
    public subtitle = 'Чистая питьевая вода для дома и офиса, созданная с заботой о вашем здоровье.';
    public slogan = 'NEELA SPRINGS — ОСНОВА КАЧЕСТВА ЖИЗНИ!';

}
