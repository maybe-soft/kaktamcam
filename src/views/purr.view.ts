import Context from '@app/app/context';
import pickRandom from '@app/util/pick-random';
import { BotcmdCommand, BotcmdView, CommandView } from '@henta/botcmd';
import { Upload } from '@henta/core';

@BotcmdView({ name: 'purr' })
export default class PurrView extends CommandView {
  @BotcmdCommand()
  public async handler(ctx: Context) {
    const catsPurring = [
      'http://ronsen.org/purrfectsounds/purrs/trip.mp3',
      'http://ronsen.org/purrfectsounds/purrs/maja.mp3',
      'http://ronsen.org/purrfectsounds/purrs/chicken.mp3',
    ];

    await ctx.answer({
      files: [Upload.fromUrl('audio_message', pickRandom(catsPurring))],
    });
  }
}
