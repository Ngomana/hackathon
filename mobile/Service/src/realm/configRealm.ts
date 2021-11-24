import Realm from 'realm';

let app: any;

export function getRealmApp() {
  if (app === undefined) {
    const appId = 'servicsync-ysvqr';
    const appConfig = {
      id: appId,
      timeout: 10000,
      app: {
        name: 'Service Delivery Application',
        version: '0',
      },
    };
    app = new Realm.App(appConfig);
  }
  return app;
}
