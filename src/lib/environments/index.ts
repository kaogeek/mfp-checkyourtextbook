class Environments {
  static REALM_APP_ID = import.meta.env.VITE_REALM_APP_ID;
  static REALM_CLUSTER_NAME = import.meta.env.VITE_REALM_CLUSTER_NAME;
  static REALM_API_KEY = import.meta.env.VITE_REALM_API_KEY;
  static REALM_DB_NAME = import.meta.env.VITE_DB_NAME;
}

class Configs {
  static COLLECTION_NAME: {
    USER: 'user';
  };
}

export { Environments, Configs };
