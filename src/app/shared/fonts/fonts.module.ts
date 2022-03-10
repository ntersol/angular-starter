import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule, FaIconLibrary } from '@fortawesome/angular-fontawesome';
// Solid icons
import { faPowerOff, faSpinner, faExclamationTriangle, faUser, faCaretDown, faBars, faHome, faCubes } from '@fortawesome/free-solid-svg-icons';
// Regular (thinner) icons
// import { faPowerOff } from '@fortawesome/free-regular-svg-icons';
// Corporate brand icons
// import { faPowerOff } from '@fortawesome/free-brands-svg-icons';

/**
 * Documentation: https://github.com/FortAwesome/angular-fontawesome/blob/master/docs/usage/icon-library.md
 *
 * To add a new icon:
 * 1. Go to https://fontawesome.com/icons and find the icon to use
 * 2. Import the icon in this file
 * 3. Register the icon in the constructor in this file
 * 4. Use the following component syntax: <fa-icon icon="power-off"></fa-icon> or <fa-icon [icon]="['fas', 'coffee']"></fa-icon>
 *
 * Only import the icons being used, otherwise unused icons will not be tree shaken out
 */

@NgModule({
  declarations: [],
  imports: [CommonModule, FontAwesomeModule],
  exports: [FontAwesomeModule],
})
export class FontsModule {
  constructor(library: FaIconLibrary) {
    library.addIcons(faPowerOff, faSpinner, faExclamationTriangle, faUser, faCaretDown, faBars, faHome, faCubes);
  }
}
