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

}
