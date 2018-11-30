// jshint asi: true, esversion: 6, laxcomma: true
//'use strict()'

const style = `
    <link rel="stylesheet" href="../shared/shared.css"/>
    <style></style>
`

const template = document.createElement('template')
template.innerHTML = `
${style}
<div class="card">
    <h2>Settings</h2>
    <h3>todo : load other components, theme</h3>

    <section>
        <h3>Modules</h3>
        <div></div>
        <button class="install">Install Module</button>
        <input class="getModule" type="file" style="display:none;" />
    </section>
</div>`

export class MySettings extends HTMLElement {
    
    constructor() {
        super()
        
        this.attachShadow({mode: 'open'})
    }
    static get is() {
        return 'my-settings'
    }

    static get observedAttributes() {
        
    }

    connectedCallback() { console.log('my-settings connected')
        
        this.shadowRoot.appendChild(template.content.cloneNode(true))
        this.registerElements(this.shadowRoot)
    }
    registerElements(doc){ // console.log('registerElements')

        this.dom = {
            name: doc.querySelector('.name')
            ,install: doc.querySelector('.install')
            ,getModule: doc.querySelector('.getModule')
        }

        this.dom.install.onclick = () => this.dom.getModule.click()
            
        this.dom.getModule.onchange = () => {
            const file = this.dom.getModule.files[0]
            if(!file){
                console.log('no file')
                return
            }


        }
    }
    attributeChangedCallback(n, ov, nv) {
        super.attributeChangedCallback(n, ov, nv)
        console.dir(n)
        console.dir(ov)
        console.dir(nv)
        //switch (n) {
        //    case 'text':
        //        this._text = nv;
        //        this.setText(ov, nv);
        //        break;
        //}
    }
}
customElements.define(MySettings.is, MySettings)