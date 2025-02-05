import { ProviderCubensis } from './ProviderCubensis';
import { ConnectOptions } from '@decentralchain/signer';

export function ensureNetwork(
  target,
  propertyKey: string,
  descriptor: PropertyDescriptor
) {
  const origin = descriptor.value;

  descriptor.value = function (
    this: { [Key in keyof ProviderCubensis]: ProviderCubensis[Key] } & {
      _api: CubensisConnect.TCubensisConnectApi;
      _options: ConnectOptions;
    },
    ...args: Array<any>
  ) {
    const api = this._api;
    return api.publicState().then(state => {
      const nodeUrl = state.network.server;
      const networkByte = state.network.code.charCodeAt(0);
      if (
        nodeUrl.replace(/(-keeper(\.wavesnodes\.com))?\/?$/, '$2') !==
          this._options.NODE_URL.replace(/\/?$/, '').replace(
            /\.wavesplatform\.com$/,
            '.wavesnodes.com'
          ) ||
        networkByte !== this._options.NETWORK_BYTE
      ) {
        throw new Error(
          `Invalid connect options. Signer connect (${this._options.NODE_URL} ${this._options.NETWORK_BYTE}) not equals keeper connect (${nodeUrl} ${networkByte})`
        );
      }
      return origin.apply(this, args);
    });
  };
}
