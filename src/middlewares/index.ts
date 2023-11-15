import type Context from '@app/app/context';
import { processBotcmd, requestInputArgsMiddleware } from '@henta/botcmd';
import { compose } from 'middleware-io';
import core from '..';
import fallbackMiddleware from './fallback.middleware';
import { mentionsMiddleware } from '@henta/mentions';

const botcmdMiddleware = compose([
  (ctx: Context, next) => requestInputArgsMiddleware(ctx, next, null),
]);

export const botMiddlewares = [
  (ctx, next) =>
    mentionsMiddleware(ctx, next, {
      mention: /^(?:mybot|bot|\/)/,
    }),
  (ctx, next) =>
    processBotcmd(ctx, next, {
      middleware: botcmdMiddleware,
      containers: [core.botcmdContainer],
    }),
  fallbackMiddleware,
];

export const answerMiddlewares = [];
