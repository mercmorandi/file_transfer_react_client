import React, { Component } from 'react';
import { BrowserRouter as Link} from 'react-router-dom'


class Itemslist extends Component {

    constructor(props) {
        super(props);
        this.state = {
            downloading: false,
          };
        //this.sendRequest = this.sendRequest.bind(this);
        
    }

    sendRequest(pk) {
      console.log('ciao '+pk)
      var req = new XMLHttpRequest()
      req.open("GET", 'http://localhost:8000/api/download/'+pk)
      req.send()
    } 

    renderButton(pk){
      var url = 'http://localhost:8000/api/download/'+pk
      return (
        <a href={url} download>Click to download</a>
      )
    }

    render() {
        return (
            
            <div>
                {this.props.items.map(item => {
                  return (
                    <div key={item.file_id} className="Row">
                      <span className="Filename">{item.file_id} - {item.file} - {item.since_added} - {item.size}
                      <button>
                      <a href={item.url} download>Download</a>
                      </button>
                      
                      </span>
                      

                    </div>
                  );
                })}
            </div>
        );
    }
  
 //   async downloadFile(pk){
 //     this.setState({downloading: true})
 //     var promise = this.sendRequest(pk)
 //     try {
 //       await promise
 //       this.setState({downloading: false})
 //     } catch (error) {
 //       console.error(error)
 //       this.setState({downloading: false})
 //       
 //     }
 //   }
//
    
}

export default Itemslist;