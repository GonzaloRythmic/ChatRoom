import {Router} from '@vaadin/router';
import { state } from '../../state';

type Messages = {
  name: string,
  message: string;
}

class HomePage extends HTMLElement {
  connectedCallback() {
    this.render();
    document.getElementById('button').addEventListener("click", (e)=>{
      e.preventDefault();
      const name = document.querySelector('.fname') as any;
      const nameValue = name.value
      state.setName(nameValue)

     Router.go('/chatpage');
    });
  }
  
  messages: Messages [] = [];

  render(){
    this.innerHTML = `
    <div class = container-header>Bienvenido</div>
    <div class = container-form>
      <div class="container">
        <form action="action_page.php">
          <div class="row">
          <div class="col-25">
          <label class = "textstyle" for="fname">Tu nombre</label>
          </div>
          <div class="col-75">
          <input type="text" class = "fname" id="fname" name="firstname" placeholder="Your name..">
          </div>
      </div>
      
      <div class="row margin-top">
        <input class = "button is-black"  type="submit" id = "button">
      </div>
    </form>
    </div>
    </div>
    <div class ="img-container">
      <div class = "designed-text">Designed by:</div><div class = "gonzalo-text">GonzaloNahuelDev</div>
    </div>
    `
         
    const style = document.createElement("style");
    style.innerHTML =`
    .gonzalo-text{
      font-family: 'Anton';
    }

    .designed-text{
      font-family: 'Alfa Slab One';
    }

    .img-container{
      width: 100%;
      display: flex;
      justify-content: right;
      padding: 0 10px;
      position:fixed; bottom:0; z-index:999999;

    }

    .container-form{
      display:flex;
      justify-content: center;
      margin-top: 100px;
    }

    .margin-top{
      margin-top: 25px;
    }

    .container-header{
      font-family: 'Swanky and Moo Moo';
      font-size: 68px;
      align-item: center;
      display: flex;
      justify-content: center;
    }

    .textstyle{
      font-family: 'Gorditas';
      font-size: 25px;
    }

    input[type=text], select, textarea{
    width: 100%;
    padding: 12px;
    border: 1px solid #ccc;
    border-radius: 4px;
    box-sizing: border-box;
    resize: vertical;
    }
  
    /* Style the label to display next to the inputs */
    label {
    padding: 12px 12px 12px 0;
    display: inline-block;
    }
  
    /* Style the submit button */
    
  
    /* Style the container */
    .container {
    border-radius: 5px;
    background-color: #f2f2f2;
    padding: 20px;
    }
  
    /* Floating column for labels: 25% width */
    .col-25 {
    float: left;
    width: 25%;
    margin-top: 6px;
    }
  
    /* Floating column for inputs: 75% width */
    .col-75 {
    float: left;
    width: 75%;
    margin-top: 6px;
    }
  
    /* Clear floats after the columns */
    .row:after {
    content: "";
    display: table;
    clear: both;
    }
  
    /* Responsive layout - when the screen is less than 600px wide, make the two columns stack on top of each other instead of next to each other */
    @media screen and (max-width: 600px) {
    .col-25, .col-75, input[type=submit] {
      width: 100%;
      margin-top: 0;
      }
    }`;
    this.appendChild(style);

  }
    
   

    
  
}

customElements.define('home-page', HomePage);


