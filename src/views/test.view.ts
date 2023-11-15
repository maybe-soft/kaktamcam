import Context from '@app/app/context';
import { BotcmdCommand, BotcmdView, CommandView } from '@henta/botcmd';

@BotcmdView({ name: 'test' })
export default class TestView extends CommandView {
  @BotcmdCommand()
  public async handler(ctx: Context) {
    await ctx.answer({
      text: 'I am a test',
    });
  }
}
