// Copyright IBM Corp. 2019. All Rights Reserved.
// Node module: @loopback/authentication
// This file is licensed under the MIT License.
// License text available at https://opensource.org/licenses/MIT

import {BindingKey} from '@loopback/context';
import {BasicAuthenticationUserService} from './basic-auth-user-service';
import {UserRepository} from './user.repository';

export const USER_REPO = BindingKey.create<UserRepository>(
  'authentication.user.repo',
);

export namespace BasicAuthenticationStrategyBindings {
  export const USER_SERVICE = BindingKey.create<BasicAuthenticationUserService>(
    'services.authentication.basic.user.service',
  );
}
