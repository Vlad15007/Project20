using Microsoft.AspNetCore.SignalR;

namespace Project20
{
    public class ChatHub : Hub
    {
        public async Task Send(string name, string message)
        {
            // Отправляем сообщение всем подключенным клиентам
            await Clients.All.SendAsync(name, message);
        }
    }
}
