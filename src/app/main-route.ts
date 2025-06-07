// <router-outlet />

import { Component } from "@angular/core";
import { RouterOutlet } from "@angular/router";
import { ContactComponent } from "../components/contact/contact.component";
import { HeroComponent } from "../components/hero/hero.component";

// <sc-hero />
// <sc-contact/>   


@Component({
    selector: 'main-route',
    template: `

<sc-hero />
<sc-contact/>
    `,
    imports: [RouterOutlet, HeroComponent, ContactComponent]
})

export class MainRoute{
    
}
