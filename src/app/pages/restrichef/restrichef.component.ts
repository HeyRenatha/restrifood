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
  restricoesSelecionadas: string;

  respostaApi: string;
  carregando: boolean = false;

  async runChat() {
    this.capturaRestricoesSelecionadas();
    let divReceita: any = document.getElementById('respostaReceita');
    divReceita.innerHTML = '';
    this.respostaApi = '';

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
  
    const configuracoesExtras = '. Sempre gere em modo HTML, porém iniciando pelo H1 (não precisa de toda estrutura do HTML, sendo ingredientes com ul e li e modo de preparo com ol e li) e retorne Ingredientes e Modo de preparo. Não escreva nada nem antes nem depois das tags, quero apenas as tags na resposta.'
    const result = await chat.sendMessage('Gere uma receita ' + this.restricoesSelecionadas + 'de: ' + this.pesquisaUsuario + configuracoesExtras);
    const response = result.response;
    this.respostaApi = response.text();

    this.carregando = false;
    divReceita.innerHTML = response.text();
    // Gere uma receita sem glúten com ovo, açúcar e farinha. Sempre gere em modo HTML, porém iniciando pelo H1 (não precisa de toda estrutura do HTML)
  }

  capturaRestricoesSelecionadas() {
    this.restricoesSelecionadas = '';
    const restricoes = <NodeList>document.querySelectorAll('[type="checkbox"]:checked');
    
    restricoes.forEach((restricao: any) => {
      this.restricoesSelecionadas = this.restricoesSelecionadas + restricao.defaultValue + ' e '
    });
  }

  copiarParaClipboard() {
    const texto: any = document.getElementById('respostaReceita');
    const textArea = document.createElement('textarea');

    textArea.value = texto.innerText;
    document.body.appendChild(textArea);
    textArea.select();
    
    navigator.clipboard.writeText(textArea.value);
    document.body.removeChild(textArea);
    window.alert('Receita copiada para a área de transferência!');
  }

}
