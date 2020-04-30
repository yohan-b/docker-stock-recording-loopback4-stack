import {BootMixin} from '@loopback/boot';
import {ApplicationConfig} from '@loopback/core';
import {
  RestExplorerBindings,
  RestExplorerComponent,
} from '@loopback/rest-explorer';
import {RepositoryMixin} from '@loopback/repository';
import {RestApplication} from '@loopback/rest';
import {ServiceMixin} from '@loopback/service-proxy';
import path from 'path';
import {
  AuthenticationComponent,
  registerAuthenticationStrategy,
} from '@loopback/authentication';
import {MyAuthenticatingSequence} from './sequence';
import {BasicAuthenticationStrategy} from './basic-strategy';
import {UserRepository} from './user.repository';

export class StockRecordingApplication extends BootMixin(
  ServiceMixin(RepositoryMixin(RestApplication)),
) {
  constructor(options: ApplicationConfig = {}) {
    super(options);

    // load the authentication component
    this.component(AuthenticationComponent);

    // register your custom authentication strategy
    registerAuthenticationStrategy(this, BasicAuthenticationStrategy);

    // use your custom authenticating sequence
    this.sequence(MyAuthenticatingSequence);

    // Set up default home page
    this.static('/', path.join(__dirname, '../public'));

    // Customize @loopback/rest-explorer configuration here
    this.configure(RestExplorerBindings.COMPONENT).to({
      path: '/explorer',
    });
    this.component(RestExplorerComponent);

    this.projectRoot = __dirname;
    // Customize @loopback/boot Booter Conventions here
    this.bootOptions = {
      controllers: {
        // Customize ControllerBooter Conventions here
        dirs: ['controllers'],
        extensions: ['.controller.js'],
        nested: true,
      },
    };
  }
}

export function getUserRepository(): UserRepository {
  return new UserRepository({
    joe888: {
      id: '1',
      firstName: 'joe',
      lastName: 'joeman',
      username: 'joe888',
      password: 'joepa55w0rd',
    },
    jill888: {
      id: '2',
      firstName: 'jill',
      lastName: 'jillman',
      username: 'jill888',
      password: 'jillpa55w0rd',
    },
    jack888: {
      id: '3',
      firstName: 'jack',
      lastName: 'jackman',
      username: 'jack888',
      password: 'jackpa55w0rd',
    },
    janice888: {
      id: '4',
      firstName: 'janice',
      lastName: 'janiceman',
      username: 'janice888',
      password: 'janicepa55w0rd',
    },
  });
}
