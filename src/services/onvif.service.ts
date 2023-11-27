import { Service } from 'typedi';
import { promisify } from 'util';

@Service()
export default class OnvifService {
  public getDeviceInformation(camera: any) {
    return promisify(camera.getDeviceInformation).bind(camera)();
  }

  public async getSnapshotUri(camera: any) {
    const { uri } = await promisify(camera.getSnapshotUri).bind(camera)();
    return uri;
  }
}
