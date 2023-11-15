import 'dotenv/config';
import Core from './core';

const core = new Core();
await core.run();

export default core;
