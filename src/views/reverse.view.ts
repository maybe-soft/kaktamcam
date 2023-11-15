import Context from '@app/app/context';
import { BotcmdCommand, BotcmdView, CommandView } from '@henta/botcmd';
import { CommandLineRequest } from '@henta/input';

@BotcmdView({ name: 'reverse', aliases: ['rev'] })
export default class ReverseView extends CommandView {
  @BotcmdCommand()
  public async handler(ctx: Context, @CommandLineRequest() text: string) {
    await ctx.answer({
      text: text.split('').reverse().join(''),
    });
  }
}
