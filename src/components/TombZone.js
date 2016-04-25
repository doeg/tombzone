import React from 'react';

export default React.createClass({

  onTombstoneSelect(e) {

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
            <pre id="output"></pre>
        </div>

        <div className="input-container">
            <form id="input">
                <div className="form-group">
                    <select id="template" onChange={this.onTombstoneSelect}>
                        <option value="weeping angel" defaultValue>
                            weeping angel
                        </option>

                        <option value="tiny ghoul">
                            tiny ghoul
                        </option>

                        <option value="archangel">
                            archangel
                        </option>
                    </select>
                </div>

                <div className="form-group">
                    <div id="epitaph" name="epitaph" placeholder="write your epitaph" contenteditable>
                    </div>
                </div>
            </form>
        </div>
    </div>
    );
  }
});