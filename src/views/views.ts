import type { BotcmdContainer } from '@henta/botcmd';
import DiscoverView from './discover.view';
import { Container } from 'typedi';
import InfoView from './info.view';

export default function initViews(container: BotcmdContainer) {
  container.applyViews([Container.get(InfoView), Container.get(DiscoverView)]);
}
