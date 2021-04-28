
import './PresenterParent.scss';

const PresenterParent = () => {
    return ( 
        <div className="presenter-parent-right">
           <div className="sample-component-a">
                <span className="title">My Apps</span>
                <span className="sub-title bold">Dialog Loop Engage</span>
                <span className="sub-title">Maximum Number of Attendies : 10 <a href="_blank">Upgrade</a></span>
                <button type="button" className="btn btn-primary">Get Started</button>
           </div>
           <div className="sample-component-b">
                <span className="title">My Url</span>
                <span className="sub-title">You are currently using generic URLs for your sessions/events.</span>
                <span className="sub-title">Your URLs appear like this: <a href="https://app-name.dialog.live/event-name">https://app-name.dialog.live/event-name</a></span>
                <span className="sub-title">Click on the button below to buy a sub-domain to place all your sessions/events under one group name. Example:</span>
                <button type="button" className="btn btn-primary">Add a Sub-Domain</button>
           </div>
        </div>
     );
}
 
export default PresenterParent;