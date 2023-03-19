import { Component, OnInit } from '@angular/core';
import { SignalRService } from "../service/signal-r.service"

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit {

  
  public name: string = "321";
  public message: string = "123";

  constructor(private chatService: SignalRService) { }

  ngOnInit(): void {
  }

  public send() {
    // Отправляем сообщение через сервис чата
    this.chatService.sendMessage(this.name, this.message);

    // Очищаем поле ввода
    this.message = '';
  }
}
