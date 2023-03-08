import React, { Component } from 'react';
import './Footer.css';


class Footer extends Component {
    render() {
        return (
            <div id="footer"> 
                <table> 
                    <tbody>
                        <tr> 
                            <td className="col1"> 
                                <a target="_blank" rel="noopener" href="https://releasenote.private-radar.com"> 
                                    <span className="copyright">© Private-Radar 2014-2023</span> 
                                    <span id="offlinemsg" className="uil-TODO"></span> 
                                </a> 
                            </td> 
                            <td className="col2"> 
                                <span className="ui-time">16:39 LT / 15:39 UTC</span> 
                            </td> 
                            <td className="col3"> 
                            <div className="btn ui-tutorial"> 
                                    <span className="mdi mdi-help-circle-outline white"></span> 
                                <a href="https://www.private-radar.com/tutorials" target="_blank">
                                    <span className="txt uil-lm-tutorial">Tutorial</span>
                                </a> 
                            </div> 
                            <div className="btn ui-feedback"> 
                                <span className="mdi mdi-message-text-outline white"></span> 
                                <span className="txt uil-feedback">Feedback</span> 
                            </div>
                            </td> 
                        </tr> 
                    </tbody>
                </table> 
            </div>
        )
    }
}

export default Footer;
