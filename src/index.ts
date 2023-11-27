import 'reflect-metadata';
import 'dotenv/config';
import Core from './core';
import { Container } from 'typedi';

const core = Container.get(Core);
await core.run();

export default core;
