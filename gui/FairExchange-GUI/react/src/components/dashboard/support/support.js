import React from 'react';
import { translate } from '../../../translate/translate';

class Support extends React.Component {
  constructor() {
    super();
  }

  openExternalWindow(url) {
    return window.require('electron').shell.openExternal(url);
  }

  render() {
    return (
      <div className="page margin-left-0">
        <div className="page-content safe-title">
          <h2 className="safe-title">{ translate('SETTINGS.SUPPORT') }</h2>
          <div className="row">
            <div className="col-sm-12 no-padding-left">
              <div className="support-box-wrapper">
                <div
                  className="support-box"
                  onClick={ () => this.openExternalWindow('http://support.safecoin.org') }>
                  <img
                    src="assets/images/cryptologo/safe.png"
                    alt={ translate('SETTINGS.SUPPORT_TICKETS') } />
                  <div className="support-box-title">{ translate('SETTINGS.SUPPORT_TICKETS') }</div>
                </div>
              </div>
              <div className="support-box-wrapper">
                <div
                  className="support-box"
                  onClick={ () => this.openExternalWindow('https://discordapp.com/invite/vQgYGJz') }>
                  <img
                    src="assets/images/support/discord"
                    alt="Discord" />
                  <div className="support-box-title">Discord</div>
                </div>
              </div>
              <div className="support-box-wrapper">
                <div
                  className="support-box"
                  onClick={ () => this.openExternalWindow('https://t.me/joinchat/HCqlLxEEFR_SQPd9VjSpBw') }>
                  <img
                    src="assets/images/support/telegram.png"
                    alt="Telegram"/>
                  <div className="support-box-title">Telegram</div>
                </div>
              </div>
              <div className="support-box-wrapper">
                <div
                  className="support-box"
                  onClick={ () => this.openExternalWindow('https://github.com/fair-exchange/Safewallet') }>
                  <img
                    src="assets/images/support/github-icon.png"
                    alt="Github" />
                  <div className="support-box-title">Github</div>
                </div>
              </div>
            </div>
          </div>
          <div className="row margin-top-30">
            <div className="col-sm-12">
              <p>
                For guides & FAQ please go to <a onClick={ () => this.openExternalWindow('https://support.safecoin.org/support/home') }>https://support.safecoin.org/support/home</a>
              </p>
              <p>
                To send feedback please open a ticket at <a onClick={ () => this.openExternalWindow('https://support.safecoin.org/support/tickets/new') }>https://support.safecoin.org/support/tickets/new</a>
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Support;
