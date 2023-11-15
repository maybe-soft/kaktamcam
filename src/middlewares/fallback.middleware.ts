import type Context from '@app/app/context';

export default async function fallbackMiddleware(ctx: Context, next) {
  if (ctx.isAnswered) {
    return next();
  }

  await ctx.answer({
    text: 'Hello! I do not know what you mean',
    keyboard: [{ label: 'Help', payload: { command: 'help' } }],
  });
}
