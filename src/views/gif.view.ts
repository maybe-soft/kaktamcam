import Context from '@app/app/context';
import { BotcmdCommand, BotcmdView, CommandView } from '@henta/botcmd';
import { Upload } from '@henta/core';

@BotcmdView({ name: 'gif' })
export default class GifView extends CommandView {
  @BotcmdCommand()
  public async handler(ctx: Context) {
    await ctx.answer({
      files: [
        Upload.fromUrl(
          'document',
          'https://media.giphy.com/media/LrmU6jXIjwziE/giphy.gif',
        ).setName('file.gif'),
      ],
    });
  }
}
