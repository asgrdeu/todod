import { Component } from '@angular/core';

export interface IWord {
  id: number;
  word: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'webapp';

  displayedColumns: string[] = ['id', 'word'];
  dataSource: any[] = [];

  constructor() {
    //@ts-ignore
    browser.storage.local.get("db").then((data: any) => {
      if(data.db == undefined) {
        console.log("item.db undefined");
      } else {
        let i = 0;
        let db: any[] = [];

        data.db.list[0].words.forEach((el: any) => {
          db.push( { id: ++i, word: el } );
        });

        this.dataSource = db;
      }
    });
  }

  clearWordList(): void {
    //@ts-ignore
    browser.storage.local.get("db").then((data: any) => {
      if (data.db != undefined) {
        //@ts-ignore
        browser.storage.local.clear();
        this.dataSource = [];
      }
    });
  }
}
