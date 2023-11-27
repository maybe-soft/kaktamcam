import Context from '@app/app/context';
import DiscoveryService from '@app/services/discovery.service';
import { BotcmdCommand, BotcmdView, CommandView } from '@henta/botcmd';
import { Service } from 'typedi';

@Service()
@BotcmdView({ name: 'поиск', aliases: ['скан', 'discover', 'scan'] })
export default class DiscoverView extends CommandView {
  public constructor(private readonly discoveryService: DiscoveryService) {
    super();
  }

  @BotcmdCommand()
  public async handler(ctx: Context) {
    await ctx.answer({
      text: '🔎 Изучаю вашу локальную сеть на наличие ONVIF совместимых устройств...',
    });

    const cameras = await this.discoveryService.discover();
    if (cameras.length === 0) {
      await ctx.answer({
        text: '💔 Не получилось найти ONVIF совместимые устройства. Убедитесь, что Вы находитесь в одной сети с ними и что они включены в сеть. Также иногда камеры могут не поддерживать этот протокол, тогда это какие-то полукамеры в итоге..',
      });

      return;
    }

    await ctx.answer({
      text: [
        '💓 Нашел вот такие устройства:',
        ...cameras.map(
          (v) =>
            `${v.hostname}:${v.port} (${v.activeSource.width}x${v.activeSource.height}, ${v.activeSource.fps} fps)`,
        ),
        '',
        '💡 Напишите /info ip:port для получения инфомации о камере и подключения к ней',
      ].join('\n'),
    });
  }
}
