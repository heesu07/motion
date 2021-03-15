import { ImageComponent } from './component/page/item/image.js';
import { PageComponent } from './component/page/page.js';

class App {
  private readonly page: PageComponent;
  private readonly img: ImageComponent;
  constructor(appRoot: HTMLElement){
    this.page = new PageComponent();
    this.page.attachTo(appRoot);
    this.img = new ImageComponent('Image Title','https://picsum.photos/600/300');
    this.img.attachTo(appRoot);
  }
}

new App(document.querySelector('.document')! as HTMLElement);