import type { BotCmdContext } from '@henta/botcmd';
// import type User from '../entities/user.entity.js';

export default interface Context extends BotCmdContext {
  // user: User;
  hello: 'world';
}
