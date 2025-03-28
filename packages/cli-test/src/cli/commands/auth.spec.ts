import sinon from 'sinon';

import { mockProcess } from '../../utils/test';
import { shell } from '../shell';
import auth from './auth';

describe('auth commands', () => {
  const sandbox = sinon.createSandbox();
  let spawnSpy: sinon.SinonStub;

  beforeEach(() => {
    const process = mockProcess();
    spawnSpy = sandbox.stub(shell, 'spawnProcess').returns({
      command: 'something',
      finished: true,
      output: 'hi',
      process,
    });
    sandbox.stub(shell, 'checkIfFinished').resolves();
  });
  afterEach(() => {
    sandbox.restore();
  });

  describe('loginNoPrompt method', () => {
    it('should invoke `login --no-prompt`', async () => {
      spawnSpy.returns({
        command: 'something',
        finished: true,
        output: '/slackauthticket 123456',
        process: mockProcess(),
      });
      const resp = await auth.loginNoPrompt();
      sandbox.assert.calledWith(spawnSpy, sinon.match.string, sinon.match.array.contains(['login', '--no-prompt']));
      sandbox.assert.match(resp.authTicket, '123456');
      sandbox.assert.match(resp.authTicketSlashCommand, '/slackauthticket 123456');
    });
  });
  describe('loginChallengeExchange method', () => {
    it('should invoke `login --no-prompt --challenge --ticket`', async () => {
      await auth.loginChallengeExchange({
        authTicket: '123456',
        challenge: 'batman',
      });
      sandbox.assert.calledWith(
        spawnSpy,
        sinon.match.string,
        sinon.match.array.contains(['login', '--no-prompt', '--challenge', 'batman', '--ticket', '123456']),
      );
    });
  });
  describe('logout method', () => {
    it('should invoke a CLI process with `logout`', async () => {
      await auth.logout();
      sandbox.assert.calledWith(spawnSpy, sinon.match.string, sinon.match.array.contains(['logout']));
    });
    it('should invoke a CLI process with `logout --team` if both `team` and `all` are specified', async () => {
      await auth.logout({ team: 'T1234', all: true });
      sandbox.assert.calledWith(
        spawnSpy,
        sinon.match.string,
        sinon.match.array.contains(['logout', '--team', 'T1234']),
      );
      sandbox.assert.neverCalledWith(spawnSpy, sinon.match.string, sinon.match.array.contains(['--all']));
    });
    it('should invoke a CLI process with `logout --all` if `all` specified', async () => {
      await auth.logout({ all: true });
      sandbox.assert.calledWith(spawnSpy, sinon.match.string, sinon.match.array.contains(['logout', '--all']));
    });
  });
});
