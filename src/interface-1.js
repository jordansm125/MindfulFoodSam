import {html, PolymerElement} from '@polymer/polymer/polymer-element.js';

/**
 * @customElement
 * @polymer
 */
class Interface1 extends PolymerElement {
  static get template() {
    return html`
      <style>
        :host {
          display: block;
        }
      </style>


		});    
    
    `;
     
 		
  }
  static get properties() {
    return {
      prop1: {
        type: String,
        value: 'interface-1'
      }
    };
  }
}

window.customElements.define('interface-1', Interface1);
