import _ from 'lodash';
import React from 'react';
import templates from '../templates';
import { makeTombstone } from '../modules/tombstone';

export default React.createClass({
  getInitialState() {
    return {
      epitaph: '',
      template: 'weeping-angel'
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
                    <select id="template" onChange={this.onTombstoneSelect}>
                        <option value="weeping-angel" defaultValue>
                            weeping angel
                        </option>

                        <option value="tiny-ghoul">
                            tiny ghoul
                        </option>

                        <option value="archangel">
                            archangel
                        </option>
                    </select>
                </div>

                <div className="form-group">
                  <textarea id="epitaph" onChange={this.onEpitaphUpdate} value={this.state.epitaph} placeholder="write your epitaph"/>
                </div>
            </form>
        </div>
    </div>
    );
  }
});