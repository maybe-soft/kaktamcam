import type { BotMode } from '@henta/bot';
import HentaBot from '@henta/bot';
import { BotcmdContainer } from '@henta/botcmd';
import TelegramPlatform from '@henta/platform-tg';
import { answerMiddlewares, botMiddlewares } from './middlewares';
import logger from './infrastructure/logger';
import initViews from './views/views';

export default class Core {
  public hentaBot = new HentaBot(process.env.MODE as BotMode);
  public botcmdContainer = new BotcmdContainer();

  public async run() {
    this.initMiddlewares();
    this.initPlatforms();
    initViews(this.botcmdContainer);

    await this.hentaBot.run();
    logger.info('Bot started');
  }

  private initMiddlewares() {
    this.hentaBot.setMiddleware(botMiddlewares);
    this.hentaBot.setAnswerMiddleware(answerMiddlewares);
  }

  private initPlatforms() {
    if (process.env.TG_TOKEN) {
      this.hentaBot.addPlatform(
        new TelegramPlatform({ token: process.env.TG_TOKEN }),
      );
    }
  }
}
