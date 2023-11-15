import type { BotcmdContainer } from '@henta/botcmd';
import TestView from './test.view';
import GifView from './gif.view';
import ImageView from './image.view';
import PurrView from './purr.view';
import ReverseView from './reverse.view';

export default function initViews(container: BotcmdContainer) {
  container.applyViews([
    new TestView(),
    new GifView(),
    new ImageView(),
    new PurrView(),
    new ReverseView(),
  ]);
}
