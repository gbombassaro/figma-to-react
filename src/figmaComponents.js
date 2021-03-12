import React, { PureComponent } from 'react';
import { CClock } from './components/CClock';

export class MasterClock extends PureComponent {
  render() {
    return <div className="master" style={{backgroundColor: "rgba(255, 255, 255, 1)"}}>
      <CClock {...this.props} nodeId="10:11" />
    </div>
  }
}

export function getComponentFromId(id) {
  if (id === "13:13") return CClock13D13;
  if (id === "10:11") return CClock10D11;
  return null;
}

class CClock13D13 extends PureComponent {
  render() {
    return (
      <div>
        <div style={{"justifyContent":"center"}} className="outerDiv">
          <div
            id="I13:13;12:55"
            style={{"width":628.5506591796875,"marginLeft":-5.74365234375,"height":null,"marginTop":38.9071044921875,"marginBottom":36.894622802734375,"minHeight":213.31814575195312,"backgroundColor":"rgba(84, 110, 200, 1)","borderRadius":"26.832469940185547px 26.832469940185547px 26.832469940185547px 26.832469940185547px"}}
            className="innerDiv"
          >
            <div>
            </div>
          </div>
        </div>
        <div style={{"zIndex":1,"justifyContent":"center"}} className="outerDiv">
          <div
            id="I13:13;12:57"
            style={{"width":297.8404235839844,"marginLeft":-60.079620361328125,"height":null,"marginTop":-199.90188598632812,"marginBottom":88.54713439941406,"minHeight":111.35475158691406,"color":"rgba(255, 255, 255, 1)","fontSize":96.59689331054688,"fontWeight":700,"fontFamily":"Roboto","textAlign":"CENTER","fontStyle":"normal","lineHeight":"125%","letterSpacing":"0px"}}
            className="innerDiv"
          >
            <div>
              {this.props.time && this.props.time.split("\n").map((line, idx) => <div key={idx}>{line}</div>)}
              {!this.props.time && (<div>
                <span style={{}} key="end">10:10</span>
              </div>)}
            </div>
          </div>
        </div>
        <div style={{"zIndex":2,"justifyContent":"center"}} className="outerDiv">
          <div
            id="I13:13;12:58"
            style={{"width":79.689208984375,"marginLeft":267.8099365234375,"height":null,"marginTop":-185.81484985351562,"marginBottom":119.06339263916016,"minHeight":66.75145721435547,"color":"rgba(255, 255, 255, 1)","fontSize":32.19896697998047,"fontWeight":700,"fontFamily":"Roboto","textAlign":"CENTER","fontStyle":"normal","lineHeight":"125%","letterSpacing":"0px"}}
            className="innerDiv"
          >
            <div>
              {this.props.seconds && this.props.seconds.split("\n").map((line, idx) => <div key={idx}>{line}</div>)}
              {!this.props.seconds && (<div>
                <span style={{}} key="end">:10</span>
              </div>)}
            </div>
          </div>
        </div>
        <div style={{"zIndex":3,"justifyContent":"center"}} className="outerDiv">
          <div
            id="I13:13;12:59"
            style={{"width":64.45450592041016,"marginLeft":274.04105377197266,"height":null,"marginTop":-137.51638793945312,"marginBottom":87.16002655029297,"minHeight":50.356361389160156,"color":"rgba(255, 255, 255, 1)","fontSize":24.14922332763672,"fontWeight":700,"fontFamily":"Roboto","textAlign":"CENTER","fontStyle":"normal","lineHeight":"125%","letterSpacing":"0px"}}
            className="innerDiv"
          >
            <div>
              {this.props.ampm && this.props.ampm.split("\n").map((line, idx) => <div key={idx}>{line}</div>)}
              {!this.props.ampm && (<div>
                <span style={{}} key="end">PM</span>
              </div>)}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

class CClock10D11 extends PureComponent {
  render() {
    return (
      <div>
        <div style={{"justifyContent":"center"}} className="outerDiv">
          <div
            id="13:13"
            style={{"width":707.7064208984375,"marginLeft":-0.2935791015625,"height":null,"marginTop":176,"marginBottom":177.880126953125,"minHeight":289.119873046875,"backgroundColor":"rgba(255, 255, 255, 1)","overflow":"hidden"}}
            className="innerDiv"
          >
            <CClock {...this.props} nodeId="13:13" />
          </div>
        </div>
      </div>
    );
  }
}

