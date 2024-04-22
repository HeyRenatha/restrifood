import { Component } from '@angular/core';

import { GoogleGenerativeAI, HarmCategory, HarmBlockThreshold } from '@google/generative-ai';
import { environment } from '../../../environments/environment.development';

@Component({
  selector: 'app-restrichef',
  templateUrl: './restrichef.component.html',
  styleUrl: './restrichef.component.scss'
})
export class RestrichefComponent {

  MODEL_NAME = "gemini-1.0-pro";
  API_KEY = environment.apiKey;
  pesquisaUsuario: string = '';
  restricaoUsuario: string = '';

  receitaGerada: string;
  carregando: boolean = false;

  async runChat() {
    let divReceita: any = document.getElementById('respostaReceita');
    divReceita.innerHTML = '';

    this.carregando = true;
    const genAI = new GoogleGenerativeAI(this.API_KEY);
    const model = genAI.getGenerativeModel({ model: this.MODEL_NAME });
  
    const generationConfig = {
      temperature: 1,
      topK: 1,
      topP: 1,
      maxOutputTokens: 2048,
    };
  
    const safetySettings = [
      {
        category: HarmCategory.HARM_CATEGORY_HARASSMENT,
        threshold: HarmBlockThreshold.BLOCK_MEDIUM_AND_ABOVE,
      },
      {
        category: HarmCategory.HARM_CATEGORY_HATE_SPEECH,
        threshold: HarmBlockThreshold.BLOCK_MEDIUM_AND_ABOVE,
      },
      {
        category: HarmCategory.HARM_CATEGORY_SEXUALLY_EXPLICIT,
        threshold: HarmBlockThreshold.BLOCK_MEDIUM_AND_ABOVE,
      },
      {
        category: HarmCategory.HARM_CATEGORY_DANGEROUS_CONTENT,
        threshold: HarmBlockThreshold.BLOCK_MEDIUM_AND_ABOVE,
      },
    ];
  
    const chat = model.startChat({
      generationConfig,
      safetySettings
    });
  
    const configuracoesExtras = '. Sempre gere em modo HTML, porém iniciando pelo H1 (não precisa de toda estrutura do HTML, sendo ingredientes com ul e li e modo de preparo com ol e li) e retorne Ingredientes e Modo de preparo'
    const result = await chat.sendMessage('Gere uma receita ' + this.restricaoUsuario + ' com: ' + this.pesquisaUsuario + configuracoesExtras);
    const response = result.response;

    console.log(response.text());
    this.carregando = false;
    divReceita.innerHTML = response.text();
    // Gere uma receita sem glúten com ovo, açúcar e farinha. Sempre gere em modo HTML, porém iniciando pelo H1 (não precisa de toda estrutura do HTML)
  }

}
