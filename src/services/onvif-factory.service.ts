import { Service } from 'typedi';
import onvif from 'onvif';

@Service()
export default class OnvifFactoryService {
  public connect(
    ip: string,
    port: number,
    username?: string,
    password?: string,
  ): any {
    return new Promise((resolve, reject) => {
      const camera = new onvif.Cam(
        { hostname: ip, port, username, password },
        (error) => (error ? reject(error) : resolve(camera)),
      );
    });
  }
}
