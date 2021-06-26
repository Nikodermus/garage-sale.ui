import { Component } from 'react';
import ReactDOM from 'react-dom';

const portalRoot = typeof document !== `undefined` ? document.body : null;

class Portal extends Component {
    el = typeof document !== `undefined` ? document.createElement('div') : null;

    componentDidMount = () => {
        portalRoot.appendChild(this.el);
    };

    componentWillUnmount = () => {
        portalRoot.removeChild(this.el);
    };

    render() {
        const { children } = this.props;

        return this.el ? ReactDOM.createPortal(children, this.el) : null;
    }
}

export default Portal;
