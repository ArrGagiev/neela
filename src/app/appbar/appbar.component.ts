import { Component } from '@angular/core';

@Component({
  selector: 'app-appbar',
  standalone: true,
  imports: [],
  templateUrl: './appbar.component.html',
  styleUrl: './appbar.component.scss'
})
export class AppbarComponent {
  public menuItems = [
    {title: 'Каталог', hasIcon: true},
    {title: 'Доставка воды', hasIcon: true},
    {title: 'О нас', hasIcon: false},
    {title: 'О воде', hasIcon: false},
    {title: 'Акции', hasIcon: false},
    {title: 'Контакты', hasIcon: false},
  ];

  public user  = {
    nane: 'Arthur',
    age: 32
  };

  // это пример строчной конкатинации
  // тут главное это (``[ё]) вот такие припизднутые кавычки
  // и дальше выводится через $ как во flutter
  public stroke = `ивет, выведи мне слово из строка ${this.user.nane} возрастом  ${this.user.age}`;
}
