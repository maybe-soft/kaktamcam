import Context from '@app/app/context';
import OnvifFactoryService from '@app/services/onvif-factory.service';
import OnvifService from '@app/services/onvif.service';
import { BotcmdCommand, BotcmdView, CommandView } from '@henta/botcmd';
import { Upload } from '@henta/core';
import { ArgumentRequest } from '@henta/input';
import { Service } from 'typedi';

@Service()
@BotcmdView({ name: 'info', aliases: ['инфа'] })
export default class InfoView extends CommandView {
  public constructor(
    private readonly onvifFactoryService: OnvifFactoryService,
    private readonly onvifService: OnvifService,
  ) {
    super();
  }

  @BotcmdCommand()
  public async handler(ctx: Context, @ArgumentRequest() host: string) {
    const [ip, port] = host.split(':');
    const camera = await this.onvifFactoryService.connect(ip, +port);
    const deviceInfo = await this.onvifService.getDeviceInformation(camera);
    const snapshotUri = await this.onvifService.getSnapshotUri(camera);

    await ctx.answer({
      text: [
        `📹 ${ip}:${port}`,
        `Модель: ${deviceInfo.model}`,
        `Прошивка: ${deviceInfo.firmwareVersion}`,
        `SN: ${deviceInfo.serialNumber}`,
        '',
        'Источники:',
        ...camera.activeSources.map(
          (v) =>
            `${v.sourceToken} (${v.encoding}, ${v.width}x${v.height}, ${v.fps} fps)`,
        ),
        '',
        '💡 Используйте /reg ip:port username password для добавления камеры',
      ].join('\n'),
      files: [Upload.fromUrl('photo', snapshotUri)],
    });
  }
}
