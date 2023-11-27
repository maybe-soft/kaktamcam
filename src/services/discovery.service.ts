import onvif from 'onvif';
import { Service } from 'typedi';

/** поиск onvif-совместимых камер */
@Service()
export default class DiscoveryService {
  public discover(): Promise<any[]> {
    return new Promise((resolve, reject) =>
      onvif.Discovery.probe((err, res) => (err ? reject(err) : resolve(res))),
    );
  }
}
