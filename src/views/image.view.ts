import Context from '@app/app/context';
import { BotcmdCommand, BotcmdView, CommandView } from '@henta/botcmd';
import { Upload } from '@henta/core';

@BotcmdView({ name: 'image', aliases: ['img'] })
export default class ImageView extends CommandView {
  @BotcmdCommand()
  public async handler(ctx: Context) {
    await ctx.answer({
      files: [
        Upload.fromUrl('photo', `https://picsum.photos/200/300/?${Date.now()}`),
      ],
    });
  }
}
