import _ from 'lodash';
import React from 'react';
import TextArea from 'react-textarea-autosize';

import templates from '../templates';
import { makeTombstone } from '../modules/tombstone';

export default React.createClass({
  getInitialState() {
    return {
      epitaph: '',
      template: 'rest-in-pieces'
    };
  },

  onTombstoneSelect(e) {
    const template = e.target.selectedOptions[0].value;
    this.setState({ template });
  },

  onEpitaphUpdate(e) {
    const epitaph = e.target.value;
    this.setState({ epitaph });
  },

  renderSelect() {
    return (
      <select id="template" defaultValue={this.state.template} onChange={this.onTombstoneSelect}>
        {_.toPairs(templates).map(t => (
            <option key={t[0]} value={t[0]}>{_.get(t[1], 'name')}</option>
        ))})
      </select>
    );
  },

  renderTombstone() {
    const tombstone = makeTombstone(this.state.template, this.state.epitaph);
    const width = tombstone[0].length + "ch";
    return (
      <pre id="output" style={{ width }}>
        {_.map(tombstone, (line, i) => {
          return (
            <div key={i}>{line}</div>
          );
        })}
      </pre>
    );
  },

  render() {
    return (
      <div className="container">
        <div className="header">
          <pre>
{`@@@@@@@   @@@@@@   @@@@@@@@@@   @@@@@@@   @@@@@@@@   @@@@@@   @@@  @@@  @@@@@@@@
@@@@@@@  @@@@@@@@  @@@@@@@@@@@  @@@@@@@@  @@@@@@@@  @@@@@@@@  @@@@ @@@  @@@@@@@@
  @@!    @@!  @@@  @@! @@! @@!  @@!  @@@       @@!  @@!  @@@  @@!@!@@@  @@!
  !@!    !@!  @!@  !@! !@! !@!  !@   @!@      !@!   !@!  @!@  !@!!@!@!  !@!
  @!!    @!@  !@!  @!! !!@ @!@  @!@!@!@      @!!    @!@  !@!  @!@ !!@!  @!!!:!
  !!!    !@!  !!!  !@!   ! !@!  !!!@!!!!    !!!     !@!  !!!  !@!  !!!  !!!!!:
  !!:    !!:  !!!  !!:     !!:  !!:  !!!   !!:      !!:  !!!  !!:  !!!  !!:
  :!:    :!:  !:!  :!:     :!:  :!:  !:!  :!:       :!:  !:!  :!:  !:!  :!:
   ::    ::::: ::  :::     ::    :: ::::   :: ::::  ::::: ::   ::   ::   :: ::::
   :      : :  :    :      :    :: : ::   : :: : :   : :  :   ::    :   : :: ::`}
          </pre>
        </div>

        <div className="tombstones">
            <pre>
{`         +            +            +
       .-"-.        .-:-.        .-"-.
      / RIP \\      / RIP \\      / RIP \\
      |     |      |     |      |     |
     \\\\     |//   \\\\     |//   \\\\     |//
      \` " "" "    \` ' "" "     " '  """ "`}
</pre>
        </div>

        <div className="tombstone-output">
          {this.renderTombstone()}
        </div>

        <div className="input-container">
            <form id="input">
                <div className="form-group">
                  {this.renderSelect()}
                </div>

                <div className="form-group">
                  <TextArea id="epitaph" onChange={this.onEpitaphUpdate} value={this.state.epitaph} placeholder="write your epitaph" rows={3}/>
                </div>
            </form>
        </div>
    </div>
    );
  }
});