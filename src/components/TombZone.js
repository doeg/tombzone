import _ from 'lodash';
import qs from 'query-string';
import React from 'react';
import TextArea from 'react-textarea-autosize';
import html2canvas from 'html2canvas';
import { saveAs } from 'filesaverjs';

import templates from '../templates';
import { makeTombstone } from '../modules/tombstone';

export default React.createClass({
  getInitialState() {
    const queryString = qs.parse(window.location.search);
    return {
      epitaph: _.get(queryString, 'epitaph', ''),
      isCentered: true,
      template: 'rest-in-pieces'
    };
  },

  onAlignmentChange(e) {
    this.setState({ isCentered: e.target.checked });
  },

  onTombstoneSelect(e) {
    const template = e.target.selectedOptions[0].value;
    this.setState({ template });
  },

  onEpitaphUpdate(e) {
    const epitaph = e.target.value;
    this.setState({ epitaph });
  },

  onSave(e) {
    e.preventDefault();
    html2canvas(document.getElementById('screenshot-group'))
      .then(canvas => {
        canvas.toBlob(blob => {
          saveAs(blob, 'tombzone');
        });
      });
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
    const tombstone = makeTombstone(this.state.template, this.state.epitaph, this.state.isCentered);
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
      <div>
      <div className="cobweb">
      <pre>
{`\\'-._(   /
  \\  .'-._\\
 -.\\'    .-;
    \\  .'  (
 .--.\\'     )
       \`   (
          _)
       _\\(_)/_
        /(O)\\`}
      </pre>
      <div className="hovertext">
        <p>made by <a href="https://twitter.com/doeg" target="_blank">@doeg</a></p>
        <p>much of the ascii art is by <a href="https://en.m.wikipedia.org/wiki/Joan_Stark" target="_blank">joan stark</a> via <a href="http://www.chris.com/ascii/" target="_blank">chris.com</a></p>
      </div>
      </div>
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

        <div id="screenshot-group">
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
            <div className="watermark">http://tomb.zone</div>
          </div>
        </div>

        <div className="input-container">
            <form id="input" onSubmit={this.onSave}>
                <div className="form-group">
                  {this.renderSelect()}
                </div>

                <div className="form-group">
                  <TextArea autoFocus id="epitaph" onChange={this.onEpitaphUpdate} value={this.state.epitaph} placeholder="write your epitaph" rows={3}/>
                </div>

                <div className="text-center">
                  <button>save image</button>
                </div>
            </form>
        </div>
    </div>
    </div>
    );
  }
});