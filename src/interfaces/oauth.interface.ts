import * as OAuth2Server from '@santi_fae/oauth2-node-server';

export interface OAuth {
  code?: OAuth2Server.AuthorizationCode;
  token?: OAuth2Server.Token;
}
