import NCMB, { NCMBObject, NCMBQuery, NCMBUser, NCMBAcl } from 'ncmb-react-native';
import config from '../app.json';

new NCMB(config.applicationKey, config.clientKey);

export default NCMB;
export {
  NCMBObject,
  NCMBQuery,
  NCMBUser,
  NCMBAcl,
};
