import React, { Component } from 'react';

class Itemslist extends Component {

    constructor(props) {
        super(props);
        this.state = {
            
          };
    }

    render() {
        return (
            
            <div>
                {this.props.items.map(item => {
                  return (
                    <div key={item.id} className="Row">
                      <span className="Filename">{item.id} - {item.file}</span>
                     
                    </div>
                  );
                })}
            </div>
        );
    }
}

export default Itemslist;