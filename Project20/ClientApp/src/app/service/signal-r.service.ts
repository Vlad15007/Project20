import { Injectable } from '@angular/core';
import * as signalR from '@aspnet/signalr';

@Injectable({
  providedIn: 'root'
})
export class SignalRService {
  private connection: signalR.HubConnection;

  constructor() {
    // Создаем новое подключение
    this.connection = new signalR.HubConnectionBuilder()
      .withUrl('/chat')
      .build();

    // Начинаем соединение
    this.connection.start()
      .catch(err => console.log(err.toString()));
  }

  public sendMessage(name: string, message: string) {
    // Отправляем сообщение на серверный хаб
    this.connection.invoke('send', name, message)
      .catch(err => console.log(err.toString()));
  }
}
